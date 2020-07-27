import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
  },
  // showing things, not mutating state, like computed
  getters: {
    tripleCounter: (state) => {
      return state.counter * 3
    },
  },
  // mutating the state
  // mutations are always synchronous
  mutations: {
    // showing passed with payload, in this case num
    increment: (state, num) => {
      state.counter += num
    },
  },
  // commits the mutation, it's asynchronous
  // this is where you'll call APIs
  actions: {
    // showing passed with payload.
    // If we need more than one value, we would pass in an object
    incrementAsync({ commit }, num) {
      setTimeout(() => {
        // we are committing the mutation of increment here
        commit("increment", num)
      }, 1000)
    },
  },
})
