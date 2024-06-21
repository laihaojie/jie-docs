<script setup lang="ts">
import { useEventListener, useLocalStorage } from '@vueuse/core'
import { autoToast } from 'root/utils/autolog'
import { type PropType, nextTick, ref, watch, computed } from 'vue'

const props = defineProps({
  commands: {
    type: Array as PropType<string[]>,
    required: true,
  },
  close: {
    type: Function,
    required: true,
  },
})

const divInputDom = ref(null)
const scrollDom = ref(null)
const index = ref(0)
const show = ref(false)
const shell = ref('')
const cwd = useLocalStorage('cwd', '')
const pwdHtml = computed(() => `<span contenteditable="false" class="${shell.value ? 'c-white' : 'c-#E5E510'} fw-bold"><span class="${shell.value ? 'c-white' : 'c-#12bc69'}">(${shell.value ? 'PowerShell' : 'bash'})</span> ${cwd.value}&gt;&nbsp;</span>`)

watch(shell, () => {
  setInputText()
})

function setInputText(c = '') {
  if (!c) index.value = 0
  divInputDom.value.innerHTML = pwdHtml.value + (c || '')
  focus()
}

useEventListener(divInputDom, 'keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault()
    exec()
  }

  if ((e.key === 'Backspace' || e.key === 'Delete')) {
    if (divInputDom.value.innerHTML === pwdHtml.value)
      e.preventDefault();
  }

  // 上下键
  if (e.key === 'ArrowUp') {
    e.preventDefault()
    if (index.value === 0) {
      index.value = history.value.length
    }
    index.value--
    setInputText(history.value[index.value]?.command)
  }
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    index.value++
    if (index.value === history.value.length) {
      setInputText()
    } else {
      setInputText(history.value[index.value]?.command)
    }
  }

  // tab键
  if (e.key === 'Tab') {
    e.preventDefault()
    const command = divInputDom.value.innerHTML.replace(pwdHtml.value, '')
    const commands = props.commands.filter(i => i.startsWith(command))
    if (commands.length) {
      divInputDom.value.innerHTML = pwdHtml.value + commands[0]
      focus()
    }
  }
})

useEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    props.close()
  }
})

watch(show, (v) => {
  if (v) {
    nextTick(() => {
      setInputText()
    })
  }
})

const isConnecting = ref(false)
const baseApi = 'http://127.0.0.1:32677'
function request(data) {
  return fetch(baseApi, { method: 'POST', body: JSON.stringify({ ...data, shell: shell.value }) }).then(res => res.json())
}

request({ cmd: 'pwd', cwd: cwd.value }).then(async (res) => {
  if (res.code === 1) {
    isConnecting.value = true
    if (res.data.cwd)
      cwd.value = res.data.cwd
    else
      await request({ cmd: 'pwd' }).then((r) => {
        if (r.code === 1) {
          cwd.value = r.data.cwd
        }
      })
  }
  else {
    isConnecting.value = false
  }
}).catch(() => {
  isConnecting.value = false
}).finally(() => {
  show.value = true
})


const history = ref([] as { command: string, data: string }[])
function exec() {
  const command = divInputDom.value.innerHTML.replace(pwdHtml.value, '')
  if (!command.trim()) return
  if (command === 'clear') {
    history.value = []
    setInputText()
    return
  }

  request({ cmd: command, cwd: cwd.value }).then((r) => {
    if (r.code === 1) {
      // eslint-disable-next-line no-console
      import.meta.env.MODE === "development" && console.log(r)
      history.value.push({
        command,
        data: `${divInputDom.value.innerHTML}\n${r.data.data}\n<br>`
      })
      if (r.data.cwd)
        cwd.value = r.data.cwd
      setInputText()

      // 如果出现滚动条，滚动到底部
      nextTick(() => {
        scrollDom.value.scrollTop = scrollDom.value.scrollHeight
      })
    } else {
      autoToast(r.data)
    }

  }).catch((e) => {
    autoToast(e)
  })
}

function focus() {
  divInputDom.value.focus()
  document.execCommand('selectAll', false, null)
  document.getSelection().collapseToEnd()
}
function handleFocus(e) {
  if (e.target.tagName !== 'SPAN' && !divInputDom.value.contains(e.target)) {
    focus()
  }
}
</script>

<template>
  <div class="absolute right-10 bottom-10 w-580 h-500 bg-black rounded-10 p10">
    <div class="relative w-full h-full flex flex-col">
      <div class="absolute right-0 top-0 cp flex items-center gap-x-10">
        <template v-if="show">
          <div title="Git Bash" @click="shell = ''">Bash</div>
          <div title="PowerShell" @click="shell = 'powershell.exe'">PowerShell</div>
        </template>
        <div class="i-carbon-close-outline" @click="close()"> </div>
      </div>

      <template v-if="show">
        <template v-if="isConnecting">
          <div class="flex flex-wrap gap-y-10 gap-x-20 mb-10">
            <div v-for="i, idx in commands" :key="idx" class="text-white cp" @click="setInputText(i)">{{ i }}</div>
          </div>

          <div ref="scrollDom" class="flex-1 h-0 overflow-y-auto overflow-hidden" @click="handleFocus($event)">
            <pre v-for="i, idx in history" :key="idx" class="text-white whitespace-pre-wrap break-words m-0"
              v-html="i.data"></pre>
            <div ref="divInputDom" contenteditable="true"
              class="outline-none text-white [font-family:var(--vp-font-family-mono)] break-all"></div>
            <div class="h-40"></div>
          </div>
        </template>
        <template v-else>
          <div class="text-white">连接失败</div>
        </template>
      </template>
    </div>
  </div>
</template>

<style lang='scss' scoped></style>
