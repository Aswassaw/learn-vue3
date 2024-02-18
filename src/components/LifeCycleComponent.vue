<script setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue'

const message = ref('Hello World')

onBeforeMount(() => {
  console.log('Component is about to be mounted!')
})

onMounted(() => {
  console.log('Component has been mounted!')
})

onBeforeUpdate(() => {
  console.log('Component is about to be updated!')
})

onUpdated(() => {
  console.log('Component has been updated!')
})

onBeforeUnmount(() => {
  console.log('Component is about to be unmounted!')
})

onUnmounted(() => {
  console.log('Component has been unmounted!')
})
</script>

<template>
  <div>
    <h1>LifeCycle Component</h1>
    <p>{{ message }}</p>
    <button @click="message = 'Updated Message'">Update Message</button>
  </div>
</template>
