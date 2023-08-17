<script setup lang="ts">
import Climb from './components/climb.vue'
import Washing from './components/washing.vue'
import Driver from './components/driver.vue'
</script>

<template>
  <Driver></Driver>
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
