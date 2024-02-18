<script setup>
import { ref, computed } from 'vue'

// const number = ref(5)
// const squaredNumber = computed(() => {
//   return number.value * number.value
// })

const firstName = ref('Andry')
const lastName = ref('Pebrianto')

const fullName = computed(() => firstName.value + ' ' + lastName.value)
</script>

<template>
  <!-- <h1>Original Number {{ number }}</h1>
  <h1>Squared Number {{ squaredNumber }}</h1>
  <button @click="number++">Increase</button> -->

  <h1>Full Name: {{ fullName }}</h1>
</template>
