<template>
  <div>
    Let's increment by ten with an action async:
    <button @click="asyncIncrement">Wait 1s and add 10</button>
  </div>
</template>


<script>
export default {
  methods: {
    asyncIncrement() {
      this.$store.dispatch("incrementAsync", 10);
    },
  },
};
</script>