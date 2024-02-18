<script setup>
import { reactive } from 'vue'

const formData = reactive({
  username: '',
  email: '',
  password: ''
})

const handleSubmit = () => {
  console.log(formData)
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="formData.username" placeholder="Please enter your name" />
    <input type="email" v-model="formData.email" placeholder="Please enter your email" />
    <input type="password" v-model="formData.password" placeholder="Please enter your password" />
    <button type="submit">Submit</button>
  </form>

  <h1>{{ formData.username }}</h1>
  <h1>{{ formData.email }}</h1>
  <h1>{{ formData.password }}</h1>

  <br /><br /><br />
</template>
