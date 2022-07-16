async function initServiceWorker () {
  // 注册 Service Worker
  // 兼容性检查
  if ('serviceWorker' in navigator) {
    try {
      navigator.serviceWorker.register('/service-worker/sw.js', {
        // scope 参数是选填的，可以被用来指定你想让 service worker 控制的内容的子目录，注意路径中最后的斜杠
        scope: '/service-worker/'
      })
      console.log('Registration succeeded. Scope is ' + reg.scope)
    } catch (err) {
      console.log('Registration failed with ' + err)
    }
  }
}

initServiceWorker()

// window.onload = () => {
//   axios.get('./gallery/bountyHunters.jpg').then(res => {
//     console.log(res)
//   })
// }
