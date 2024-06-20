<script setup lang="ts">
import { useEventListener } from '@vueuse/core'
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
const pwd = ref('')
const pwdHtml = computed(() => `<span contenteditable="false" class="c-#12BC69 fw-bold">${pwd.value}&gt;&nbsp;</span>`)

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

fetch(baseApi, { method: 'POST', body: JSON.stringify({ cmd: 'pwd' }) }).then(res => res.json()).then((res) => {
  if (res.code === 1) {
    isConnecting.value = true
    pwd.value = res.data.pwd
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
  fetch(baseApi, {
    method: 'POST',
    body: JSON.stringify({ cmd: command }),
  }).then(res => res.json()).then((r) => {
    // eslint-disable-next-line no-console
    import.meta.env.MODE === "development" && console.log(r)
    history.value.push({
      command,
      data: `${divInputDom.value.innerHTML}\n${r.data.data}`
    })
    pwd.value = r.data.pwd
    setInputText()

    // 如果出现滚动条，滚动到底部
    nextTick(() => {
      scrollDom.value.scrollTop = scrollDom.value.scrollHeight
    })
  }).catch((e) => {
    autoToast(e)
  })
}

function focus() {
  divInputDom.value.focus()
  document.execCommand('selectAll', false, null)
  document.getSelection().collapseToEnd()
}

</script>

<template>
  <div class="absolute right-10 bottom-10 w-580 h-500 bg-black rounded-10 p10">
    <div class="relative w-full h-full flex flex-col">
      <div class="i-carbon-close-outline absolute right-0 top-0 cp" @click="close()"> </div>
      <template v-if="show">
        <template v-if="isConnecting">
          <div class="flex flex-wrap gap-y-10 gap-x-20 mb-10">
            <div v-for="i, idx in commands" :key="idx" class="text-white cp" @click="setInputText(i)">{{ i }}</div>
          </div>

          <div ref="scrollDom" class="flex-1 h-0 overflow-y-auto overflow-hidden">
            <pre v-for="i, idx in history" :key="idx" class="text-white whitespace-pre-wrap break-words m-0"
              v-html="i.data"></pre>
            <div ref="divInputDom" contenteditable="true"
              class="outline-none text-white [font-family:var(--vp-font-family-mono)] break-all"></div>
            <div class="h-30"></div>
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
