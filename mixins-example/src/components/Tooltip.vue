<template>
  <div class="tooltip-demo">
    <h3 @click="toggleShow">
      <span v-if="isShowing">Click Me Again</span>
      <span v-else>Click Me Please</span>
    </h3>
    <div v-if="isShowing" class="tooltip">
      <h2>Here I am!</h2>
      <p>I'm a tooltip this time</p>
    </div>
  </div>
</template>


<script>
  import { toggle } from './../mixins/toggle'

  export default {
    mixins: [toggle],
  }
</script>

<style scoped>
  
</style>