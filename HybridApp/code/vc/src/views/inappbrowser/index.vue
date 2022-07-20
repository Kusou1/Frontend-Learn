<template>
  <div>
    <van-nav-bar title="应用内跳转" left-text="返回" right-text="按钮" left-arrow @click-left="goHome" @click-right=""/>

    <van-search 
      v-model="url" 
      placeholder="请输入跳转地址" 
      label="地址"
      show-action
      @search="onSearch"
    >
      <template #action>
        <div @click="onSearch">
          跳转
        </div>
      </template>
    </van-search>

    <van-dropdown-menu>
       <van-dropdown-item v-model="target" :options="targetList"/>
       <van-dropdown-item v-model="options" :options="optionsList"/>
    </van-dropdown-menu>

    <van-button type="primary" @click="goBaidu">跳转到百度</van-button>
  </div>
</template>
<script>
import { reactive, toRefs, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: "Inappbrowser",
  setup () {
    const state = reactive({
      url: "https://m.lagou.com",
      target: '_blank', // _blank 新页面打开 | _self 当前页打开 | _system 在系统浏览器中打开
      options: 'location=yes', // 显示地址栏
    })

    const router = useRouter()

    const goHome = () => {
      router.push('/')
    }

    const targetList = [
      { text: '当前页打开', value: '_self' },
      { text: '新页面打开', value: '_blank' },
      { text: '系统浏览器打开', value: '_system' },
    ]

    const optionsList = [
      { text: '显示地址栏', value: 'location=yes' },
      { text: '隐藏地址栏', value: 'location=no' },
    ]

    const goBaidu = () => {
      location.href = "https://m.baidu.com"
    }

    // 自定义函数
    const onSearch = () => {
      var ref = cordova.InAppBrowser.open(state.url, state.target, state.options)

      ref.addEventListener('loadstart', loadstartCallback)
      ref.addEventListener('loadstop', loadstopCallback)
      ref.addEventListener('loaderror', loaderrorCallback)
      ref.addEventListener('exit', exitCallback)

      function loadstartCallback(event) {
        alert('Loading started: ' + event.url)
      }

      function loadstopCallback(event) {
        alert('Loading finished: ' + event.url)
      }

      function loaderrorCallback(event) {
        alert('Loading error: ' + event.message)
      }

      function exitCallback() {
        alert('浏览器已关闭')
      }
    }

    // 挂载完成
    onMounted (() => {

    })

    return {
      ...toRefs(state),
      onSearch,
      goBaidu,
      targetList,
      optionsList,
      goHome
    }
  },
}

</script>
<style lang="less" scoped>

</style>