<!-- eslint-disable no-console -->
<script setup lang="ts">
import Cropper from 'cropperjs'
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import 'cropperjs/dist/cropper.css'
import localImg from '/logo.png'

const image = ref(null)
const defaultImg = ref('')
const aspectRatio = ref(Number.NaN)
const fileInput = ref()

const cropper = ref<Cropper>(null)

onMounted(async () => {
  await nextTick()
  register()
})

async function register() {
  cropper.value = new Cropper(image.value, {
    aspectRatio: aspectRatio.value,
    minContainerWidth: 688,
    minContainerHeight: 688,
    crop(event) {
      console.log(event.detail.x)
      console.log(event.detail.y)
      console.log(event.detail.width)
      console.log(event.detail.height)
      console.log(event.detail.rotate)
      console.log(event.detail.scaleX)
      console.log(event.detail.scaleY)
    },
  })
}

const imgSrc = computed(() => defaultImg.value || localImg)

watch(
  () => defaultImg.value,
  () => {
    if (defaultImg.value)
      cropper.value.replace(defaultImg.value)
    else
      cropper.value.replace(localImg)
  },
)

watch(
  () => aspectRatio.value,
  () => {
    cropper.value.setAspectRatio(aspectRatio.value)
  },
)

async function download() {
  const canvas = cropper.value.getCroppedCanvas()
  const img = new Image()
  img.src = canvas.toDataURL('image/png')
  const link = document.createElement('a')
  link.href = img.src
  link.download = 'cropped.png'
  link.click()
}

async function chooseImage(e) {
  const file = e.target.files[0]
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => {
    cropper.value.replace(reader.result as string)
  }
}
</script>

<template>
  <div class="mt-20">
    <div class="flex flex-col mb-20">
      <div class="w-full flex items-center justify-between">
        <input
          v-model="defaultImg" class="flex-1 mr-10 border border-primary border-solid rounded-4 py-3.8 px-9"
          type="text" placeholder="输入图片地址或上传图片"
        >
        <button class="btn border border-primary" @click="fileInput.click">
          <input ref="fileInput" class="display-none" type="file" accept="image/*" @change="chooseImage"> 上传
        </button>
      </div>
      <div class="mt-20 flex items-center">
        <button
          class="btn border border-primary border-solid mr-10" :class="!aspectRatio ? '' : '!bg-transparent'"
          @click="aspectRatio = NaN"
        >
          默认
        </button>
        <button
          class="btn border border-primary border-solid mr-10"
          :class="aspectRatio === 16 / 9 ? '' : '!bg-transparent'" @click="aspectRatio = 16 / 9"
        >
          16 / 9
        </button>
        <button
          class="btn border border-primary border-solid mr-10"
          :class="aspectRatio === 4 / 3 ? '' : '!bg-transparent'" @click="aspectRatio = 4 / 3"
        >
          4 / 3
        </button>
        <button
          class="btn border border-primary border-solid mr-10"
          :class="aspectRatio === 1 / 1 ? '' : '!bg-transparent'" @click="aspectRatio = 1 / 1"
        >
          1 / 1
        </button>
        <div class="flex-1"></div>
        <button class="btn" @click="download">
          下载
        </button>
      </div>
    </div>

    <img ref="image" :src="imgSrc" />
  </div>
</template>

<style lang='scss' scoped></style>
