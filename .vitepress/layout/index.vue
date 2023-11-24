<script setup lang="ts">
import Theme from 'vitepress/theme'
import { Toast, copyText } from 'root/utils'

const info = {
  name: '阿杰',
  github: 'https://www.github.com/laihaojie',
  email: '17608421492@163.com',
  wechat: 'fd_programmer',
}

async function copy(text) {
  await copyText(text)
  Toast('复制成功')
}
</script>

<template>
  <Theme.Layout>
    <template #aside-outline-after>
      <div class="p-10 fc mt-30 c-primary fwbold flex flex-col">

        <div class="text-20 mb-16">{{ info.name }}</div>
        <div class="flex">
          <a :href="info.github" target="_blank">
            <div class="i-carbon:logo-github mx-4 cp" :title="info.github"></div>
          </a>
          <div class="i-carbon:email-new mx-4 cp" :title="info.email" @click="copy(info.email)"></div>
          <div class="i-carbon:logo-wechat mx-4 cp" :title="info.wechat" @click="copy(info.wechat)"></div>
        </div>

        <Eye class="mt-20"></Eye>
      </div>
    </template>
    <template #aside-ads-after>

    </template>
  </Theme.Layout>
</template>

<style lang='scss' scoped></style>