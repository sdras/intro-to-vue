<template>
  <div>
    Let's increment by two with a mutation: <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.commit('increment', 2)
    }
  }
}
</script>
