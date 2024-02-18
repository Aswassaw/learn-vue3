<script setup>
import { ref } from 'vue';

const isTrue = true
const isFalse = false

const showMe = ref(false);
</script>

<template>
  <div>
    <p v-if="isTrue">This will show if isTrue is true.</p>
    <p v-if="isFalse === false">This will show if isFalse is false.</p>

    <button v-if="!showMe" @click="showMe = !showMe">Show Me</button>
    <button v-if="showMe" @click="showMe = !showMe">Hide Me</button>
    <h1 v-if="showMe">KAMU BABI</h1>
    <h1 v-show="showMe">INI SHOW</h1>
  </div>

  <br><br><br>
</template>