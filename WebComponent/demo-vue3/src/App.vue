<template>
  <fc-bubbles click><img alt="Vue logo" src="./assets/logo.png"/></fc-bubbles>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import Jsx from './components/xxx'


export default {
  name: 'App',
  inheritAttrs:true,
  components: {
    HelloWorld,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
