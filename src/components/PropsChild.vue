<script setup>
// const props = defineProps(['name', 'identity'])
// const props = defineProps({
//   name: String,
//   identity: Object
// })
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  identity: {
    type: Object,
    required: true
  },
  fire: {
    type: String,
    default: 'No Fire'
  }
})


console.log(props)
</script>

<template>
  <h1>{{ props.name }}</h1>
  <h1>{{ props.identity.nation }}</h1>
  <h1>{{ props.fire }}</h1>
</template>
