<template>
  <section class="container">
    <div>
      <nuxt-link :to="{ name: 'index' }">Home</nuxt-link>
      <nuxt-link :to="{ name: 'test' }">Test</nuxt-link>
      <logo/>
      <h1 class="title">
        NUXT
      </h1>
      <h2 class="subtitle">
        Universal Vue.js Application
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">Github</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~components/Logo.vue'

export default {
  components: {
    Logo
  },
  transiton: {
    mode: 'out-in',
    css: false,
    beforeLeave (el) {
      console.log('index before leave')
    },
    leave (el, done) {
      console.log('index leave')
      done()
    },
    beforeEnter (el) {
      console.log('index before enter')
    },
    enter (el, done) {
      console.log('index enter')
      done()
    }
  }
}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
