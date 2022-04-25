<template>
  <AppHeader/>
  <AppSidebar/>
  <!-- 子路由出口 -->
  <router-view/>
</template>

<script lang="ts">
import AppSidebar from './AppSidebar.vue'
import AppHeader from './AppHeader.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    AppSidebar,
    AppHeader
  }
})
</script>
