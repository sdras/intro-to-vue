<template>
  <div>The getter for triple counter from the store is {{ triple }}</div>
</template>

<script>
export default {
  computed: {
    triple() {
      return this.$store.getters.tripleCounter;
    },
  },
};
</script>