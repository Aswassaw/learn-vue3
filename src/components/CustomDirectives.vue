<script setup>
import { reactive } from 'vue'

const vFormateDiv = {
  mounted: (el, binding) => {
    if (binding.arg === 'boleh') {
      for (const key in binding.value) {
        el.style[key] = binding.value[key]
      }
      console.log('Boleh')
    } else {
      console.log('Jangan')
    }
  }
}

const style = reactive({
  color: 'red',
  fontSize: '2rem',
  fontStyle: 'italic',
  border: '2px solid black'
})
</script>

<template>
  <div>
    <div v-formate-div:jangan="style" style="border-radius: 10px">
      Using Simple Custom Directive
    </div>
    <div v-formate-div:boleh="style" style="border-radius: 10px">Using Simple Custom Directive</div>
  </div>
</template>
