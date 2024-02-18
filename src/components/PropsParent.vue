<script setup>
import { reactive, ref } from 'vue'
import PropsChild from './PropsChild.vue'
import ComplexProps from './ComplexProps.vue'
import ValidatorProps from './ValidatorProps.vue'

const name = ref('Andry Pebrianto')
const identity = reactive({
  nation: 'Indonesia',
  age: 20,
  isMarried: false
})
</script>

<template>
  <PropsChild :name="name" :identity="identity" />
  <button @click="name = 'HAHAHAHA'">Update</button>
  <ComplexProps
    :friends="['Alex', 'John', 'Jordan', 'Huxn']"
    :userInfo="{ name: 'Alex', age: 20, location: ['Earth', 'IDK'] }"
  />
  <ValidatorProps name="Andry" :age="20" password="12345678" />
</template>
