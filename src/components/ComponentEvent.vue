<script setup>
import { ref } from 'vue'

defineProps(['justIncrement'])
defineEmits(['incrementCounter', 'userInfo'])

const username = ref('')
const email = ref('')
const password = ref('')
</script>

<template>
  <button @click="$emit('incrementCounter')">+</button>
  <button @click="justIncrement">+</button>

  <form @submit.prevent="$emit('userInfo', username, email, password)">
    <input type="text" v-model="username" />
    <input type="email" v-model="email" />
    <input type="password" v-model="password" />
    <button type="submit">Submit Bro</button>
  </form>
</template>
