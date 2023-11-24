<!-- 代码高亮 -->

# 代码高亮

## 安装依赖

::: code-group

  ```bash [pnpm]
  pnpm add @highlightjs/vue-plugin@2.1.0 highlight.js@11.9.0
  ```

  ```bash [yarn]
  yarn add @highlightjs/vue-plugin@2.1.0 highlight.js@11.9.0
  ```

  ```bash [npm]
  npm install @highlightjs/vue-plugin@2.1.0 highlight.js@11.9.0
  ```

:::

## 使用

```vue
<script setup lang="ts">
// import 'highlight.js/styles/stackoverflow-light.css'
import 'highlight.js/styles/androidstudio.min.css'

import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'

const code = ref(`SELECT * FROM table_name;`)

</script>

<template>
  <hljsVuePlugin.component :code="code" language="sql">
  </hljsVuePlugin.component>
</template>

<style lang='scss' scoped></style>
```
