<script setup lang="ts">
import { driver } from 'driver.js'
import 'driver.js/dist/driver.css'
import { nextTick, onMounted } from 'vue'
import { useLocalStorage } from '@vueuse/core'

const isDriver = useLocalStorage('isDriver', false)

const driverObj = driver({
  steps: [
    {
      element: '#docsearch',
      popover: {
        title: '快速搜索',
        description: '输入标题或关键字可快速搜索。',
        prevBtnText: '上一个',
        nextBtnText: '下一个',
      },
    },
    {
      element: '.VPSwitchAppearance',
      popover: {
        title: '暗黑模式切换',
        description: '点击这里切换网页主题模式。',
        prevBtnText: '上一个',
        nextBtnText: '下一个',
      },
    },
    {
      element: '.VPSocialLink',
      popover: {
        title: '作者的GitHub',
        description: '点击访问作者GitHub，欢迎关注。',
        prevBtnText: '上一个',
        nextBtnText: '下一个',
      },
    },
    {
      element: '.container .action .VPButton',
      popover: {
        title: '网页代码仓库地址',
        description: '点击访问代码仓库，欢迎Star。',
        prevBtnText: '上一个',
        nextBtnText: '结束',
      },
    },
  ],
})

onMounted(async () => {
  await nextTick()

  if (!isDriver.value)
    driverObj.drive()
  isDriver.value = true
})
</script>

<template>
  <div></div>
</template>

<style lang='scss' scoped></style>
