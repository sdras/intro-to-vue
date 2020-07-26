<template>
  <div class="container">
    <h1>Welcome!</h1>
    <p><nuxt-link to="/product">Product page</nuxt-link></p>
    <p><nuxt-link to="/contact">Contact page</nuxt-link></p>
  </div>
</template>

<script>
import { TweenMax, Back } from 'gsap'

export default {
  transition: {
    mode: 'out-in',
    css: false,
    beforeEnter (el) {
      TweenMax.set(el, {
        transformPerspective: 600,
        perspective: 300,
        transformStyle: 'preserve-3d'
      })
    },
    enter (el, done) {
      TweenMax.to(el, 1, {
        rotationY: 360,
        transformOrigin: '50% 50%',
        ease: Back.easeOut
      })
      done()
    },
    leave (el, done) {
      TweenMax.to(el, 1, {
        rotationY: 0,
        transformOrigin: '50% 50%',
        ease: Back.easeIn
      })
      done()
    }
  }
}
</script>

<style scoped>
  .container {
    background: #444;
  }
</style>
