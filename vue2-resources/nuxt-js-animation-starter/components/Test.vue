<template>
  <div>
    <p class="test">This is a test</p>
  </div>
</template>


<script>
  import { TimelineMax, Back } from 'gsap'

  export default {
    mounted () {
      const tl = new TimelineMax()

      tl.add('enter')

      tl.fromTo('.test', 0.4, {
        rotation: 0
      }, {
        rotation: 180,
        delay: 1,
        transformOrigin: '50% 50%',
        ease: Back.easeOut
      }, 'enter')
    }
  }
</script>

<style scoped>
  .test {
    width: 100px;
  }
</style>
