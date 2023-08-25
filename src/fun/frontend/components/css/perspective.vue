<script setup lang="ts">
</script>

<template>
  <div class="frame">
    <div class="shape"></div>
  </div>
</template>

<style lang='scss' scoped>
.frame {
  width: 200px;
  height: 200px;
  border: 3px solid var(--vp-c-brand-lighter);
  perspective: 400px;
}

.shape {
  width: 194px;
  height: 194px;
  background-color: var(--vp-c-brand-lighter);
  transform: rotateY(0deg);
  transition: all 1s ease;
}

.frame:hover .shape {
  transform: rotateY(45deg);
}
</style>
