<script setup lang="ts">
import { autoToast } from 'root/utils/autolog'
import { type PropType, nextTick, ref, watch } from 'vue'

defineProps({
  commands: {
    type: Array as PropType<string[]>,
    required: true,
  },
  close: {
    type: Function,
    required: true,
  },
})

const inputDom = ref(null)
const scrollDom = ref(null)

const show = ref(false)
const pwd = ref('')

function setCommand(c = '') {
  inputDom.value.value = `${pwd.value}> ${c}`
  inputDom.value.focus()
}

watch(show, (v) => {
  if (v) {
    nextTick(() => {
      inputDom.value.focus()
      if (inputDom.value.value === '') {
        setCommand()
        inputDom.value.value = `${pwd.value}> `
      }
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

const command = ref('')
const history = ref([])
function exec() {
  if (!command.value.trim()) return
  if (command.value === 'clear') {
    history.value = []
    setCommand()
    return
  }
  fetch(baseApi, {
    method: 'POST',
    body: JSON.stringify({ cmd: command.value }),
  }).then(res => res.json()).then((r) => {
    // eslint-disable-next-line no-console
    console.log(r)
    history.value.push(`${inputDom.value.value}\n${r.data.data}`)
    pwd.value = r.data.pwd
    setCommand()

    // 如果出现滚动条，滚动到底部
    nextTick(() => {
      scrollDom.value.scrollTop = scrollDom.value.scrollHeight
    })
  }).catch((e) => {
    autoToast(e)
  })
}

function inputChange(e: InputEvent) {
  const value = (e.target as HTMLTextAreaElement).value
  const textarea = e.target as HTMLTextAreaElement
  // 取消默认行为
  e.preventDefault()

  if (value.startsWith(`${pwd.value}> `)) {
    inputDom.value.value = value
  }
  else {
    setCommand()
  }
  command.value = value.replace(`${pwd.value}> `, '')

  // 获取textarea的scrollHeight
  const scrollHeight = textarea.scrollHeight

  // 获取textarea的上下边框的高度
  // 由于textarea的边框可能有别的地方定义了更高级别的样式
  // 使用getComputedStyle 读取的样式是最终样式，包括了内联样式、嵌入样式和外部样式
  // document.defaultView.getComputedStyle(element[,pseudo-element]);
  // 或者
  // window.getComputedStyle(element[,pseudo-element]);
  const style = getComputedStyle(textarea)

  const borderTop = Number.parseInt(style.borderTopWidth)
  const borderBottom = Number.parseInt(style.borderBottomWidth)
  const height = scrollHeight + borderTop + borderBottom

  textarea.style.height = `${height}px`
}
</script>

<template>
  <div class="absolute right-10 bottom-10 w-580 h-500 bg-black rounded-10 p10">
    <div class="relative w-full h-full flex flex-col">
      <div class="i-carbon-close-outline absolute right-0 top-0 cp" @click="close()"> </div>
      <template v-if="show">
        <template v-if="isConnecting">
          <div v-for="i, idx in commands" :key="idx" class="text-white cp" @click="setCommand(i)">{{ i }}</div>
          <div ref="scrollDom" class="flex-1 h-0 overflow-y-auto overflow-hidden">
            <pre v-for="i, idx in history" :key="idx" class="text-white whitespace-pre-wrap break-words">{{ i }}</pre>
            <textarea
              ref="inputDom" class="w-full bg-black text-white text-16 [word-wrap:break-word]!" @input="inputChange"
              @keydown.enter.prevent="exec()"
            />
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
