<template>
  <div class="item">
    <h2>{{ item }}</h2>
    <img :src="url" width="235" height="300"/>
    <div class="quantity">
      <button class="inc" @click="counter > 0 ? counter -= 1 : 0">-</button>
      <span class="quant-text">Quantity: {{ counter }}</span>
      <button class="inc" @click="counter += 1">+</button>
    </div>
    <button class="submit">Submit</button>
  </div><!--item-->
</template>


<script>
  export default {
   data() {
      return {
        counter: 0
      }
    },
    props: ["item", "url"]
  }
</script>

<style scoped>
  
</style>