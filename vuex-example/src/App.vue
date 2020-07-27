<template>
  <div id="app">The counter amount is {{ counter }}</div>
</template>

<script>
import AppGetter from "@/components/AppGetter.vue";
import AppMutation from "@/components/AppMutation.vue";
import AppAction from "@/components/AppAction.vue";

export default {
  components: {
    AppGetter,
    AppMutation,
    AppAction,
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
