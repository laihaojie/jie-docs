<script setup lang="ts">
</script>

<template>
  <div class="spoiler">隐藏的文字</div>
</template>

<style lang='scss' scoped>
.spoiler {
  filter: blur(5px);
  font-size: 30px;
  color: var(--vp-c-brand-lighter);
}

.spoiler:hover {
  filter: blur(0px);
}
</style>
