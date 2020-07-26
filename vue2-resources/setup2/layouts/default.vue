<template>
  <div>
    <MainMenu />
    <nuxt/>
  </div>
</template>

<script>
  import MainMenu from './../components/MainMenu.vue';
  
  export default {
    components: {
      MainMenu
    }
  }
</script>

<style>
body, html {
  font-family: 'PT Serif', serif;
  margin: 0;
}

a {
  transition: 0.2s all ease;
  text-decoration: none;
  color: #E6534B;
}

a:hover {
  color: #fc7c5f;
}

.flexrow {
  padding-top: 80px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.special, h1, h2, h3, li, button.submit, .quant-text {
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
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
}
button.inc {
  background: white;
  color: black;
}
button.submit {
  background: black;
  color: white;
  margin-left: 20px;
  padding: 12px 14px;
  width: 240px;
  -webkit-transition: 0.25s all ease-in;
  transition: 0.25s all ease-in;
}
button.submit:hover {
  opacity: 0.8;
  -webkit-transition: 0.25s all ease-out;
  transition: 0.25s all ease-out;
}

.quant-text {
  display: inline-block;
  text-align: center;
  width: 140px;
  padding: 8px;
  padding: 8px;
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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  width: 280px;
  height: 440px;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  background: #eee;
  padding: 20px 10px;
  margin: 30px;
}
.item img {
  -ms-flex-item-align: center;
      -ms-grid-row-align: center;
      align-self: center;
}
</style>
