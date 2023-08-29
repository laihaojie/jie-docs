<!-- eslint-disable no-console -->
<script setup lang="ts">
import 'cropperjs/dist/cropper.css'
import localImg from '/logo.png'
import Cropper from 'cropperjs'
import { nextTick, onMounted, ref, watch } from 'vue'

const image = ref(null)
const defaultImg = ref()
const aspectRatio = ref(NaN)

const cropper = ref<Cropper>(null)

onMounted(async () => {
  await nextTick()
  register()
})

async function register() {
  cropper.value = new Cropper(image.value, {
    aspectRatio: aspectRatio.value,
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

watch(
  () => defaultImg.value,
  () => {
    if (defaultImg.value)
      cropper.value.replace(defaultImg.value)
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
</script>

<template>
  <div class="mt-20">
    <div class="flex flex-col mb-20">
      <input v-model="defaultImg" class="border border-primary border-solid rounded-4 py-6 px-9" type="text"
        placeholder="输入在线图片地址裁剪">
      <div class="mt-20">
        <button class="btn border border-primary border-solid mr-10" :class="!aspectRatio ? '' : '!bg-transparent'"
          @click="aspectRatio = NaN">
          默认
        </button>
        <button class="btn border border-primary border-solid mr-10"
          :class="aspectRatio === 16 / 9 ? '' : '!bg-transparent'" @click="aspectRatio = 16 / 9">
          16 / 9
        </button>
        <button class="btn border border-primary border-solid mr-10"
          :class="aspectRatio === 4 / 3 ? '' : '!bg-transparent'" @click="aspectRatio = 4 / 3">
          4 / 3
        </button>
        <button class="btn border border-primary border-solid mr-10"
          :class="aspectRatio === 1 / 1 ? '' : '!bg-transparent'" @click="aspectRatio = 1 / 1">
          1 / 1
        </button>
      </div>
    </div>

    <img ref="image" :src="defaultImg ?? localImg" />
    <button class="btn mt-20" @click="download">下载</button>
  </div>
</template>

<style lang='scss' scoped></style>
