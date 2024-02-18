<script setup>
import { inject } from 'vue'

const studentName = inject('studentName')
const studentAge = inject('studentAge')
const studentLocation = inject('studentLocation')
</script>

<template>
  <h1>Student Component</h1>
  <p>{{ studentName }}</p>
  <p>{{ studentAge }}</p>
  <p>{{ studentLocation }}</p>
</template>
