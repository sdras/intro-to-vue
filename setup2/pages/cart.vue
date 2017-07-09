<template>
  <div>
    <div class="cartunit">
      <h2>Your cart</h2>
      <p>Thank you for shopping with us.</p>
      <div v-if="cart"></div>
      <div v-else>
        <p>Your cart is empty, why not <nuxt-link exact to="/" class="logo">fill it up with something?</nuxt-link></p>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        cart : ''
      }
    },
  }
</script>

<style scoped>
  .cartunit {
    padding-top: 120px;
    width: 600px;
    padding: 120px 0 40px;
    max-width: 900px;
    margin: 0 auto;
  }

  h2 {
    margin-bottom: 40px;
  }
</style>