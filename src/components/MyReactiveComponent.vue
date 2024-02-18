<script setup>
import { reactive } from 'vue'

let initialState = reactive({
  val: {
    count: 0,
    user: ['Andry', 'Pebrianto']
  }
})

const changeUser = () => {
  initialState.val.user[0] = 'Manusia'
  initialState.val.user[1] = 'Api'
}
</script>

<template>
  <h1>Count: {{ initialState.val.count }}</h1>
  <h2>Users: {{ initialState.val.user }}</h2>

  <button @click="initialState.val.count += 10">Add 10</button>
  <button @click="changeUser">Change User</button>
  <button @click="initialState.val.user.push('Human')">Add One More</button>
</template>
