<script setup>
import { ref, watch } from 'vue'

const message = ref('Halo Bang!')
const inputText = ref('')

// Warch for changes in inputText and update message accordingly
watch(inputText, (newVal, oldVal) => {
  console.log(newVal)
  console.log(oldVal)

  if (newVal.length >= 5) inputText.value = oldVal
})
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
    <input type="text" v-model="inputText" placeholder="Type Something..." />
  </div>
</template>
