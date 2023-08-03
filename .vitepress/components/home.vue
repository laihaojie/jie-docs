<script setup>
import Climb from './components/climb.vue'
import Washing from './components/washing.vue'
</script>

<template>
  <div class="home-wrapper">
    <Climb></Climb>
    <Washing></Washing>
  </div>
</template>

<style>
.home-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
