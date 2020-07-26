import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  //showing things, not mutating state
  getters: {
    tripleCounter: state => {
      return state.counter * 3;
    }
  },
  //mutating the state
  //mutations are always synchronous
  mutations: {
    //showing passed with payload, represented as num
    increment: (state, num) => {
      state.counter += num;
    }
  }, 
  //commits the mutation, it's asynchronous
  actions: {
    // showing passed with payload
    incrementAsync ({ commit }, num) {
      setTimeout(() => {
        commit('increment', num)
      }, 1000)
    }
  }
});