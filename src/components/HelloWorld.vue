<!-- JS -->
<script setup>
import AnotherComponent from './AnotherComponent.vue'
import DuelImage from '../../public/duel.jpg'

const myChannel = 'https://youtube.com/c/ProgrammingKnowledge'

const imageInfo = {
  src: DuelImage,
  alt: 'Duel Yugi vs Kaiba',
  width: 400,
  height: 300
}
console.log(imageInfo);
</script>

<!-- HTML -->
<template>
  <h1>This is a parent component</h1>
  <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, illum.</h2>

  <AnotherComponent />

  <a v-bind:href="myChannel">Super Channel</a>
  <img :="imageInfo" />
</template>

<!-- CSS -->
<style>
h1 {
  color: red;
}
</style>
