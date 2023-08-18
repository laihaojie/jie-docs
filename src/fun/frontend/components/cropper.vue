<!-- eslint-disable no-console -->
<script setup lang="ts">
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'
import { nextTick, onMounted, ref } from 'vue'

const image = ref(null)

const cropper = ref<Cropper>(null)

onMounted(async () => {
  await nextTick()
  register()
})

async function register() {
  cropper.value = new Cropper(image.value, {
    aspectRatio: 16 / 9,
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
    <img ref="image" src="/logo.png" />
    <button class="btn mt-20" @click="download">下载</button>
  </div>
</template>

<style lang='scss' scoped></style>
