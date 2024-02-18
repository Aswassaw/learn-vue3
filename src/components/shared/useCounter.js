import { ref } from 'vue'

// Counter Composable
function useCounter(initialValue = 0) {
  const count = ref(initialValue)

  const increment = () => count.value++
  const decrement = () => count.value--

  return { count, increment, decrement }
}

export default useCounter
