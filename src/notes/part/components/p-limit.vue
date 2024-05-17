<!-- eslint-disable no-console -->
<script setup lang="ts">
import pLimit from 'p-limit'
import { ref } from 'vue'

const result = ref<string[]>([])
const fetchDataList = ref<string[]>([])

const limit = pLimit(1)

async function fetchSomething(value: string) {
  console.log(`fetching ${value}`)
  await new Promise(resolve => setTimeout(resolve, 1000))
  fetchDataList.value.push(value)
  return value
}

async function loadData() {
  result.value = []
  fetchDataList.value = []
  // Only one promise is run at once
  const res = await Promise.all([
    limit(() => fetchSomething('foo')),
    limit(() => fetchSomething('bar')),
    limit(() => fetchSomething('test')),
  ])
  console.log(res)
  result.value = res
}
</script>

<template>
  <div>
    <div btn @click="loadData()">试一下</div>
    <p>Promise Limit 限制并发量为1</p>
    <div v-for="i, idx in fetchDataList" :key="idx">单次结果：{{ i }}</div>
    <p>result: {{ result }}</p>
  </div>
</template>

<style lang='scss' scoped></style>
