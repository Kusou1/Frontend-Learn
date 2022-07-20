<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item to="/" icon="home-o">{{$t('nav.home')}}</van-tabbar-item>
      <van-tabbar-item to="/news" icon="desktop-o">{{$t('nav.news')}}</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">{{$t('nav.profile')}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'

export default {
  name: "LayoutFooter",
  setup () {
    const state = reactive({
      active: 0
    })

    return {
      ...toRefs(state),
    }
  },
}

</script>
<style lang="less" scoped>

</style>