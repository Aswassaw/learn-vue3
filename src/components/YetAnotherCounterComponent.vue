<script setup>
import useCounter from './shared/useCounter'
const { count, increment, decrement } = useCounter(10)
</script>

<template>
  <div>
    <h1>Count: {{ count }}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>
