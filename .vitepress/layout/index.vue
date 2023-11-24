<script setup lang="ts">
import Theme from 'vitepress/theme'

const info = {
  name: '阿杰',
  github: 'https://www.github.com/laihaojie',
  email: ''
}

</script>

<template>
  <Theme.Layout>
    <template #aside-outline-after>
      <div class="p-10 fc mt-30 c-[var(--vp-c-brand)] fwbold flex flex-col">

        <div class="text-20 mb-16">{{ info.name }}</div>
        <div class="text-12"><a :href="info.github" target="_blank">GitHub: laihaojie</a> </div>
        <div class="text-12">邮箱: 17608421492@163.com</div>
        <div class="text-12">VX: l14367792992</div>

        <Eye class="mt-20"></Eye>
      </div>
    </template>
    <template #aside-ads-after>

    </template>
  </Theme.Layout>
</template>

<style lang='scss' scoped></style>