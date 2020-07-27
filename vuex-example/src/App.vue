<template>
  <main>
    <div>The counter amount is {{ counter }}</div>
    <app-getter></app-getter>
    <app-mutation></app-mutation>
    <app-action></app-action>
  </main>
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
main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 18px;
}

div {
  margin: 20px 0;
}
</style>
