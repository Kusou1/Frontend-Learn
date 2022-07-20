<template>
  <div>
    <van-nav-bar title="扫一扫" left-text="返回" right-text="按钮" left-arrow />

    <div class="scan-container">
      <div class="scan-none-1"></div>
      <div class="scan-box-container">
        <div class="scan-none-2"></div>
        <div class="scan-box">
          <div class="scan-box-area">
            <div class="top-half top-left"></div>
            <div class="top-half top-right"></div>
            <div class="bottom-half bottom-left"></div>
            <div class="bottom-half bottom-right"></div>
          </div>
        </div>
        <div class="scan-none-2"></div>
      </div>
      <div class="scan-none-1">
        <van-tag type="primary" plain size="large">放入框内，自动扫描</van-tag>
        <div id="scanMenu">
          <van-button round color="#00ddaa" @click="toggleLight()">
            {{lightOn ? '关闭' : '打开'}}
          </van-button>
          <van-button round color="#00ddaa" @click="toggleCamera()">
            {{frontCamera ? '后摄' : '前摄'}}
          </van-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: "Scan",
  setup () {
    const state = reactive({
      lightOn: false,
      frontCamera: false
    })

    const router = useRouter()

    // 切换闪光灯
    const toggleLight = () => {
      alert('切换闪光灯')
      if (state.lightOn === false) {
        QRScanner.enableLight((err, status) => {
          err && console.log(err)
          state.lightOn = true;
        })        
      } else {
        QRScanner.disableLight((err, status) => {
          err && console.log(err)
          state.lightOn = false;
        }) 
      }
    }

    // 切换摄像头
    const toggleCamera = () => {
      alert('切换摄像头')
      if (state.frontCamera === false) {
        QRScanner.useFrontCamera((err, status) => {
          err && console.log(err)
          state.frontCamera = true
        })
      } else {
        QRScanner.useBackCamera((err, status) => {
          err && console.log(err)
          state.frontCamera = false
        })
      }
    }

    const doScan = () => {
      if (typeof QRScanner !== 'object') {
        alert('QRScanner 不存在')
        return;
      }

      QRScanner.prepare(onDone)
      function onDone(err, status) {
        if (err) {
          console.log(err._message)
        }

        if (status.authorized) {
          QRScanner.scan(displayContents)
          function displayContents(err, text) {
            if (err) {
              console.error(err)
            } else {
              alert(text)
              // 后续操作
            }
          }

          // 让 webview 透明，执行扫码操作
          QRScanner.show()
        } else if (status.denied) {
          alert('用户拒绝扫码')
        } else {
          alert('未获取数据')
        }
      }
    }

    // 挂载完成
    onMounted (() => {
      doScan()
    })

    onUnmounted(() => {
      document.getElementById('app').style.backgroundColor = "#FFFFFF"
      document.querySelector('body').style.backgroundColor = "#FFFFFF"
      
      try {
        QRScanner.hide(status => {
          console.log('关闭扫描' + JSON.stringify(status))
        })
        QRScanner.destroy(status => {
          console.log('销毁扫描' + JSON.stringify(status))
        })
      } catch (error) {
        console.log(error)
      }
    })

    return {
      ...toRefs(state),
      toggleLight,
      toggleCamera
    }
  },
}
</script>

<style lang="less" scoped>
#scanMenu {
  position: absolute;
  bottom: 60px;
  width: 100vw;
}

@primary: rgb(74, 243, 220);
@bg: rgba(0, 0, 56, 0.4);

.scan-container {
  background: rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 50px);

  .scan-none-1 {
    flex: 1;
    width: 100%;
    background: @bg;
    text-align: center;
    padding-top: 0.32rem;
    color: rgba(255, 255, 255, 0.8);

    &:first-child {
      flex: 0.6;
    }
  }

  .scan-box-container {
    display: flex;

    .scan-none-2 {
      flex: 1;
      height: calc(8rem + 2px);
      background: @bg;
    }

    .scan-box {
      width: 8rem;
      height: 8rem;
      border: 1px solid @primary;
      background: rgba(0, 0, 0, 0);

      .scan-box-area {
        width: 8rem;
        height: 8rem;
        position: relative;

        .top-half {
          position: absolute;
          top: -3px;
          width: 1rem;
          height: 1rem;
          border-top: 6px solid @primary;
        }.top-left {
          left: -3px;
          border-left: 6px solid @primary;
        }.top-right {
          right: -3px;
          border-right: 6px solid @primary;
        }

        .bottom-half {
          position: absolute;
          bottom: -3px;
          width: 1rem;
          height: 1rem;
          border-bottom: 6px solid @primary;
        }.bottom-left {
          left: -3px;
          border-left: 6px solid @primary;
        }
        .bottom-right {
          right: -3px;
          border-right: 6px solid @primary;
        }
      }
    }
  }
}
</style>