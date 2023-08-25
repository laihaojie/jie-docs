<script setup lang="ts">
</script>

<template>
  <div class="clip_path"></div>
</template>

<style lang="scss">
.clip_path {
  width: 100px;
  height: 100px;
  background-color: var(--vp-c-brand-lighter);
  clip-path: circle(50% at -10px -10px);
  transition: all 1s ease;
}

.clip_path:hover {
  clip-path: circle(100%);
}
</style>
