<template>
  <div>
    This is a simple adjustment of the store state with a component:
    <button
      @click="increment"
    >Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.state.counter++;
    },
    decrement() {
      this.$store.state.counter--;
    },
  },
};
</script>

<style scoped>
</style>