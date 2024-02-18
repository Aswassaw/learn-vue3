<script setup>
import { ref, defineAsyncComponent } from 'vue'
// import RenderFriends from './RenderFriends.vue'

const RenderFriends = defineAsyncComponent(() => import('./RenderFriends.vue'))

let showFriends = ref(false)
const toggleFriends = () => (showFriends.value = !showFriends.value)
</script>

<template>
  <div>
    <div v-if="showFriends">
      <RenderFriends />
    </div>
    <button @click="() => toggleFriends()">Toggle</button>
  </div>
</template>
