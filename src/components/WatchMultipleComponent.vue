<script setup>
import { ref, reactive, watch } from 'vue'

const name = ref('Andry Pebrianto')
const identity = reactive({
  age: 20,
  isMarried: false,
  nation: 'Indonesia'
})

watch([name, () => identity.nation], (newVal, oldVal) => {
  console.log(newVal)
  console.log(oldVal)
})
</script>

<template>
  <div>
    <button @click="name = 'Bagad Ihwalubin'">Change Name</button>
    <button @click="identity.nation = 'Japan'">Change Identity Nation</button>
  </div>
</template>
