<script setup>
import { ref } from 'vue'
import ComponentOne from './ComponentOne.vue'
import ComponentThree from './ComponentThree.vue'
import ComponentTwo from './ComponentTwo.vue'

const currentTab = ref('ComponentTwo')

const tabs = {
  ComponentOne,
  ComponentTwo,
  ComponentThree
}
</script>

<template>
  <div>
    <h1>Main Component</h1>
    <button @click="currentTab = 'ComponentOne'">What is HTML?</button>
    <button @click="currentTab = 'ComponentTwo'">What is CSS?</button>
    <button @click="currentTab = 'ComponentThree'">What is JS?</button>

    <!-- Dynamic Component -->
    <component :is="tabs[currentTab]" />
  </div>
</template>
