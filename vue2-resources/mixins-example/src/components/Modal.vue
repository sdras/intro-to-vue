<template>
  <div>
    <h3>Let's trigger this here modal!</h3>
    <button @click="toggleShow">
      <span v-if="isShowing">Hide child</span>
      <span v-else>Show child</span>
    </button>
    <div v-if="isShowing" class="modal">
      <h2>Here I am!</h2>
      <button @click="toggleShow">Close</button>
    </div>
  </div>
</template>


<script>
  import { toggle } from './../mixins/toggle';

  export default {
    mixins: [toggle]
  }
</script>

<style scoped>
  
</style>