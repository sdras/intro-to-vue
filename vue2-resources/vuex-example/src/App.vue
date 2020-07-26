<template>
  <div id="app">
    State from the store is <span>{{ state }}</span>
    <getter />
    <mutation />
    <action />
    <adjust-state />
  </div>
</template>

<script>
import Getter from './components/Getter.vue';
import Mutation from './components/Mutation.vue';
import Action from './components/Action.vue';
import AdjustState from './components/AdjustState.vue';

export default {
  computed: {
    state() {
      return this.$store.state.counter;
    }
  },
  components: {
    Getter,
    Mutation,
    Action,
    AdjustState
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

div {
  margin: 20px 0;
  span {
    padding: 5px 10px;
    border: 1px solid #ccc;
  }
}

button {
  padding: 5px 10px 8px;
  border-radius: 3px;
  background: #eee;
  border: none;
  margin: 5px 2px;
  outline: 0;
  cursor: pointer;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
