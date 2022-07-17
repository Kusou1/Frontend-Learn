<template>
  <div id="app">
    <img class="logo" alt="CloudBase logo" src="./assets/cloudbase.png" />
    <img class="logo" alt="Vue logo" src="./assets/logo.png" />
    <Index msg="欢迎使用云开发 CloudBase Vue.js App" />
  </div>
</template>

<script>
import Index from "./components/Index.vue";

export default {
  name: "App",
  components: {
    Index,
  },
};
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

.logo {
  width: 120px;
  padding: 10px;
}
</style>
