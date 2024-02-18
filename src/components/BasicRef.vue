<script setup>
import { ref, onMounted } from 'vue'
import ExposeComponent from './ExposeComponent.vue';
const myRef = ref('MANUSIA')
const loRef = ref(null)

onMounted(() => {
  console.log(myRef.value)
  myRef.value.value = 'Babi'

  console.log(loRef.value);
})

function refFungsi(e) {
  console.log(e.textContent)
  e.classList.add('babi')
}
</script>

<template>
  <div>
    <input type="text" placeholder="Enter your name" ref="myRef" />
    <h1 :ref="refFungsi">Manusia Api</h1>
  </div>

  <ExposeComponent ref="loRef" />
</template>

<style>
.babi {
  background-color: blue;
}
</style>
