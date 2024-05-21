<!-- 拼音首字母 -->

# 根据中文汉字获取拼音首字母

## 预览效果

<!-- region snippet -->
<script setup lang="ts">
import { pinyin } from 'pinyin-pro';

import Name from './assets/name.json'

const names = Name.slice(0,2).map(i=>{
 return  {
  pingyin: pinyin(i.name, { pattern: 'first' }).replace(/\s/g, ''),
  name: i.name
 }
})
// .filter(i=>['shz','hjh'].includes(i.pingyin))

</script>

<div v-for="i,idx in names" :key="idx" >{{i}}</div>
<!-- endregion snippet -->

## 代码实现

<<< @/src/fun/frontend/pingyin.md#snippet
