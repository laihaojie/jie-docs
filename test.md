---
layout: doc
---

<script setup>
import { ref } from 'vue'
import { useData  } from 'vitepress'

console.log(useData())
const count = ref(1);
</script>

<div class="cursor-pointer select-none" @click="count = count + 2">{{count}}</div>

## h1 {{count}}

## h2 {{count}}

:tada: :100:

| Tables        |      Are{{count}}      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col {{count}} is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
