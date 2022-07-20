<template>
  <router-view/>
  <LayoutFooter />
</template>

<script>
import LayoutFooter from '@/components/LayoutFooter.vue'

export default {
  name: "App",
  components: {
    LayoutFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50; */
  min-height: 100vh;
}
</style>
