<template>
  <div>
    <van-nav-bar title="首页" left-text="返回" right-text="按钮" left-arrow />

    <van-grid :gutter="6" border>
       <van-grid-item icon="scan" :text="$t('common.scan')" :to="{ name: 'Scan' }" />
       <van-grid-item icon="revoke" text="浏览器" :to="{ name: 'Inappbrowser' }" />
       <van-grid-item icon="peer-pay" text="网络" @click="checkConnection" />
       <van-grid-item icon="phone-o" text="电话"/>
    </van-grid>

    <van-list finished-text="没有更多了" >
       <van-cell v-for="item in weather" :key="item.fxDate" >
        <template #icon>
          <img :src="require('../../assets/color-64/'+item.iconDay+'.png')" alt="" style="width: 3rem; height:3rem; margin-right:.2rem;">
        </template>
        <template #title>
          <span>{{item.textDay}}</span>
        </template>
        <template #label>
          <span>风向：{{item.windDirDay}}</span>&nbsp;&nbsp;
          <span>温度：{{item.tempMin}} - {{item.tempMax}}</span>
        </template>
       </van-cell>
    </van-list>

    <van-field label="开关" name="switch" >
      <template #input>
        <van-switch v-model="switchChecked" size="20" @change="toggleStatusBar" />
      </template>
    </van-field>
  </div>
</template>
<script>
import { get3d } from '@/api'
import { reactive, toRefs, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: "Home",
  setup () {
    const state = reactive({
      weather: [],
      switchChecked: true
    })

    const router = useRouter()

    // 检测网络状态
    function checkConnection() {
      var networkState = navigator.connection.type;
  
      var states = {};
      states[Connection.UNKNOWN]  = 'Unknown connection';
      states[Connection.ETHERNET] = 'Ethernet connection';
      states[Connection.WIFI]     = 'WiFi connection';
      states[Connection.CELL_2G]  = 'Cell 2G connection';
      states[Connection.CELL_3G]  = 'Cell 3G connection';
      states[Connection.CELL_4G]  = 'Cell 4G connection';
      states[Connection.CELL]     = 'Cell generic connection';
      states[Connection.NONE]     = 'No network connection';
  
      alert('Connection type: ' + states[networkState]);
    }

    // 检测电池状态
    const onBatteryStatus = (info) => {
      alert('剩余电量：' + info.level + "\n 是否正在充电：" + info.isPlugged)
    }
    window.addEventListener('batterystatus', onBatteryStatus, false)

    // 切换状态栏的显示状态
    const toggleStatusBar = (checked) => {
      if (checked) {
        alert('状态栏显示')
        StatusBar.show()
      } else {
        alert('状态栏隐藏')
        StatusBar.hide()
      }
    }
    
    // 自定义函数
    const getPosition = () => {
      var options = {
        enableHighAccuracy: true,
        maximumAge: 1000, // 毫秒为单位
      }
      navigator.geolocation.getCurrentPosition(onSuccess, onError, options)
      function onSuccess(position) {
        alert('经度：' + position.coords.longitude + "\n" +
              '纬度：' + position.coords.latitude + "\n"
        );
        // 调用天气预报接口
        const location = position.coords.longitude+","+position.coords.latitude
        get3d(location).then(res => {
          console.log(res)
          if (res.code == '200') {
            state.weather = res.daily
          } else {
            console.log('获取天气失败')
          }
        }).catch(err => {
          console.log(err)
        })
      }

      function onError(error) {
          alert("Code: " + error.code + "\n Message: " + error.message)
      }
    }

    const getLanguage= () => {
      navigator.globalization.getPreferredLanguage(onSuccess, onError)

      function onSuccess(language) {
        alert(language.value) // zh-CN | en-US
        localStorage.setItem('lang', language.value.substr(0, 2))
      }

      function onError() {
        console.log('获取语言失败')
      }
    }

    getLanguage()
    
    // 挂载完成
    onMounted (() => {
      getPosition()
    })

    return {
      ...toRefs(state),
      checkConnection,
      onBatteryStatus, 
      toggleStatusBar
    }
  },
}

</script>
<style lang="less" scoped>

</style>