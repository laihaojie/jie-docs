<!-- 粒子效果 -->

## 预览效果

<script setup>
import { ref, watch } from 'vue'
import { useLocalStorage } from '@vueuse/core'

const isShow = useLocalStorage('particles',false)

watch(isShow,()=>{
  if(isShow.value){
    window.registerParticles()
  }else{
    window.unregisterParticles()
  }
})
</script>

<div class="flex items-center select-none">
  <label class="" for="particle">开关</label>
  <input v-model="isShow" type="checkbox" class="w-20 h-20" id="particle" />
</div>

## 代码实现

```html

<div id="particles-js"></div>

<script src="particles.js"></script>
```

<<< @/public/js/index.js#snippet
