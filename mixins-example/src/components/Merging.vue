<template>
  <div>
    <h3>Merging</h3>
  </div>
</template>


<script>
  import { hi } from './../mixins/hi';

  export default {
    mixins: [hi],
    methods: {
      sayHello: function() {
        console.log('hello from Merging Component!')
      }
    },
    mounted() {
      this.sayHello()
    }
  }
</script>

<style scoped>
  
</style>