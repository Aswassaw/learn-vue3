<script setup>
import { ref } from 'vue'
const peoples = ref(['Andry', 'Pebrianto', 'Kurniawan'])

const movies = ref([
  {
    name: 'Human Movies',
    title: ['The Dark Lord', 'Human Fire Beast', 'Nightmare Fighter', 'Numoron Furious']
  },
  {
    name: 'Animal Movies',
    title: ['The Dark Lion', 'Deer Fire Beast', 'Nightmare Rat Fighter', 'Numoron Furious Elephant']
  }
])

const identity = ref({
  name: 'Andry',
  age: 21,
  isMarried: false,
  address: 'Trenggalek',
  hobbies: ['Hobi1', 'Hobi2', 'Hobi3']
})

const objectCoba = ref({
  data1: {
    name: 'AAA',
    age: 11
  },
  data2: {
    name: 'BBB',
    age: 13
  }
})
</script>

<template>
  <h1>v-for</h1>

  <p v-for="(person, index) in peoples" v-bind:key="index">{{ person }}</p>

  <div v-for="(movie, i) in movies" :key="i">
    <h1>{{ movie.name }}</h1>
    <p v-for="(title, ii) in movie.title" :key="ii">
      {{ title }}
    </p>
  </div>

  <ul v-for="(value, keys, index) in identity" :key="value">
    <li>{{ index }}. {{ keys }} - {{ value }}</li>
  </ul>

  <ul v-for="(coba, keys, index) in objectCoba" :key="index">
    <li>{{ coba }}</li>
    <li>{{ keys }}</li>
    <li>{{ index }}</li>
    <br />
  </ul>

  <ul v-for="number in 10" :key="number">
    <li>{{ number }}</li>
  </ul>
</template>
