<script setup>
import { ref } from 'vue'

let count = ref(0)

const incrementHandler = () => count.value++
const decrementHandler = () => count.value--

const submitHandler = (e) => {
  e.preventDefault();
  console.log("Submit");
}
</script>

<template>
  <h1>Count: {{ count }}</h1>
  <button v-on:click="incrementHandler">Increment</button>
  <button @click="decrementHandler">Decrement</button>

  <h1>Form Input:</h1>
  <form @submit="submitHandler">
    <input type="text" placeholder="Please enter your name" />
    <input type="email" placeholder="Please enter your email" />
    <button type="submit">Submit</button>
  </form>
</template>
