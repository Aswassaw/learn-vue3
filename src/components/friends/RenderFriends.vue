<script setup>
import { ref } from 'vue'

const friends = ref(['HuXn', 'Jordan', 'Alex', 'Maroon 5'])
</script>

<template>
  <div>
    <h3 v-for="(friend, index) in friends" :key="index">
      {{ friend }}
    </h3>
  </div>
</template>
