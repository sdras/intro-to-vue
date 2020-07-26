<template>
  <div id="app">
    <modal />
    <tooltip />
    <hr>
    <merging />
  </div>
</template>

<script>
import Modal from './components/Modal.vue';
import Tooltip from './components/Tooltip.vue';
import Merging from './components/Merging.vue';

export default {
  components: {
    Modal,
    Tooltip,
    Merging
  }
}
</script>

<style>
body {
  font-family: 'Roboto Mono', serif;
  display: flex;
  justify-content: center;
}

#app {
  text-align: center;
  margin: 60px;
  max-width: 370px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

button {
  font-family: 'Roboto Mono';
  border: 2px solid black;
  background: white;
  padding: 10px 15px;
  margin: 0 10px;
  outline: 0;
  width: 60%;
  cursor: pointer;
}

h4 {
  margin: 0 0 15px;
}

.modal {
  background: cyan;
  color: black;
  padding: 20px;
  width: 200px;
  position: absolute;
  top: 50px;
  z-index: 2000;
  left: 50%;
  transform: translateX(-120px)
}

hr {
  margin-top: 30px;
  width: 100%;
  border-bottom: 1px solid #eee;
}

h3 span {
  cursor: pointer;
}

form {
  text-align: left;
  line-height: 1.5em;
}

.tooltip-demo {
  position: relative;
}

.tooltip {
  position: absolute;
  transform: translate3d(-20%, -160%, 0);
  background: #000000;
  color: white;
  width: 280px;
  border: 1px solid #8ef5c5;
}
.tooltip:after, .tooltip:before {
  top: 100%;
  left: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}
.tooltip:after {
  border-color: rgba(0, 0, 0, 0);
  border-top-color: #000000;
  border-width: 10px;
  margin-left: -10px;
}
.tooltip:before {
  border-color: rgba(142, 245, 197, 0);
  border-top-color: #8ef5c5;
  border-width: 11px;
  margin-left: -11px;
}
</style>
