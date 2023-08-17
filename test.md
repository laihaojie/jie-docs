
<script setup>
import { ref } from 'vue'
const count = ref(1)
</script>

<div class="cursor-pointer select-none" @click="count++">{{count}}</div>

# h1 {{count}}

## h2 {{count}}
