<template>
  <div id="app">
    <div class="unit" v-for="unit in manifest">
      <child :item="unit.item" :url="unit.url"></child>
    </div>
  </div>
</template>

<script>
import Child from './components/Child.vue';
export default {
  name: 'app',
  components: {
    Child
  },
  data() {
    return {
      manifest: [
        {
          item: "backpack",
          url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/backpack.jpg"
        },
        {
          item: "tshirt",
          url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/tshirt.jpg"
        },
         {
          item: "sweatshirt",
          url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/sweatshirt.jpg"
        },
      ]
    };
  }
}
</script>

<style lang="scss">
body, html {
  font-family: 'PT Serif', serif;
}

#app {
  display: flex;
  justify-content: center;
}

.special {
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
}

h1, h2, h3, li {
  @extend .special;
}

h2 {
  font-size: 20px;
  margin: 0 0 5px;
  text-align: center;
}

li {
  list-style: none;
  display: inline-block;
}

input {
  background: #eee;
}

button {
  border: none;
  border-radius: 1000px;
  padding: 8px 13px;
  outline: none;
  cursor: pointer;
  &.inc {
    background: white;
    color: black;
  }
  &.submit {
    background: black;
    color: white;
    @extend .special;
    margin-left: 20px;
    padding: 12px 14px;
    width: 240px;
    transition: 0.25s all ease-in;
    &:hover {
      opacity: 0.8;
      transition: 0.25s all ease-out;
    }
  }
}

.quant-text {
  display: inline-block;
  text-align: center;
  width: 140px;
  padding: 8px;
  padding: 8px;
  @extend .special;
}

.quantity {
  border: 2px solid black;
  width: 235px;
  padding-left: 3px;
  border-radius: 1000px;
  background: #fff;
  margin-left: 20px;
}

.item {
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 440px;
  justify-content: space-around;
  background: #eee;
  padding: 20px 10px;
  margin: 30px;
  img {
    align-self: center;
  }
}
</style>
