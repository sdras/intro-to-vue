import Vue from 'vue'
import App from './App.vue'

// Vue.mixin({
//   mounted() {
//     console.log('hello from global mixin!')
//   }
// })

new Vue({
  el: '#app',
  render: h => h(App)
})
