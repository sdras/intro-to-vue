<template>
  <div>
    Let's increment by one with a mutation:
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.commit("increment", 1);
    },
  },
};
</script>