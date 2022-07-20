<template>
  <div>
    <van-nav-bar title="用户中心" left-text="返回" left-arrow />

    <van-cell-group>
      <van-cell center is-link :to="{name: 'Profile'}">
        <template #icon>
          <van-image :src="require('@/assets/logo.png')" fit="contain" width="4rem" height="4rem" />
        </template>
        <template #title>
          <span style="font-size: 2rem;">你好：张三</span>
        </template>
      </van-cell>
    </van-cell-group>

    <van-cell-group>
      <van-cell is-link title="我的余额" />
      <van-cell is-link title="我的积分" />
      <van-cell is-link title="收货地址" />
      <van-cell is-link title="订单中心" />
      <van-cell is-link title="我的客服" />
      <van-cell is-link title="退出" />
    </van-cell-group>
  </div>
</template>
<script>
import { reactive, toRefs, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: "User",
  setup () {
    const state = reactive({
      count: 0
    })

    const router = useRouter()

    // 自定义函数
    const increment = () => {
      state.count++
    }

    // 挂载完成
    onMounted (() => {
      state.value++
      console.log('onMounted', state.count)
    })

    return {
      ...toRefs(state),
      increment,
    }
  },
}

</script>
<style lang="less" scoped>

</style>