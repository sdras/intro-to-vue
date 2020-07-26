<template>
  <div class="container">
    <h1>This is the contact page</h1>
    <Test />
    <p><nuxt-link to="/">Home page</nuxt-link></p>
  </div>
</template>

<script>
import Test from '~components/Test.vue'
import { TweenMax, Back } from 'gsap'

export default {
  components: {
    Test
  },
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
