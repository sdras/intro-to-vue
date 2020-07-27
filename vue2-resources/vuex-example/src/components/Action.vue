<template>
  <div>
    Let's increment by two with an action async:
    <button @click="asyncInc">Wait 1s and add 10</button>
  </div>
</template>


<script>
export default {
  methods: {
    asyncInc() {
      this.$store.dispatch("incrementAsync", 10);
    },
  },
};
</script>
