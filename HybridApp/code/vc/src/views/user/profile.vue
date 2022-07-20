<template>
  <div>
    <van-nav-bar title="个人资料" left-text="返回" right-text="按钮" left-arrow @click-left="goBack" />

    <van-cell-group>
      <van-cell title="头像" @click="show = true" >
        <template #default>
          <div>
            <img :src="require('@/assets/logo.png')" id="myImage" >
          </div>
        </template>
      </van-cell>
      <van-cell title="昵称" value="张三" />
    </van-cell-group>

    <van-action-sheet
      v-model:show="show"
      :actions="actions"
      cancel-text="取消"
      close-on-click-action
      @select="onCancel"
    />
  </div>
</template>
<script>
import { reactive, toRefs, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: "Profile",
  setup () {
    const state = reactive({
      show: false
    })

    const router = useRouter()

    const goBack = () => {
      router.back()
    }

    // 拍照
    const takePic = () => {
      alert('拍照')
      // 拍照
      navigator.camera.getPicture(onSuccess, onError, {
          quality: 50,
          destinationType: Camera.DestinationType.FILE_URI
      })

      function onSuccess(imageURI) {
          var image = document.getElementById('myImage')
          image.src = imageURI
      }

      function onError(message) {
          alert("拍照失败：" + message)
      }
    }

    // 从相册中选取
    const getPic = () => {
      alert('从相册中选取')
      navigator.camera.getPicture(onSuccess, onError, {
          quality: 50,
          destinationType: Camera.DestinationType.FILE_URI,
          sourceType: Camera.PictureSourceType.PHOTOLIBRARY
      })

      function onSuccess(imageURI) {
          var image = document.getElementById('myImage')
          image.src = imageURI
      }

      function onError(message) {
          alert("拍照失败：" + message)
      }
    }

    // 先声明回调函数，然后再将回调函数，放到 actions 当中（否则，回调函数无效）
    const actions = [
      { name: "拍照", callback: takePic },
      { name: "从相册中选取", callback: getPic }
    ]

    const onCancel = () => {
      state.show = false
    }

    // 挂载完成
    onMounted (() => {
    })

    return {
      ...toRefs(state),
      onCancel,
      actions,
      goBack
    }
  },
}

</script>
<style lang="less" scoped>
#myImage {
  width: 2rem;
  height: 2rem;
}
</style>