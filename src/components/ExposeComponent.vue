<script setup>
import { ref } from 'vue'

const count = ref(10)
const increment = () => count.value++
const decrement = () => count.value--

defineExpose({ count, increment, decrement })
</script>

<template>
  <div>
    <h1>Count: {{ count }}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>
