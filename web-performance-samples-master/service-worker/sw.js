console.log('我是 sw.js')

this.addEventListener('install', function (event) {
  // 确保 Service Worker 不会在 waitUntil() 里面的代码执行完毕之前安装完成。
  event.waitUntil(
    // 创建了一个叫做 v1 的新的缓存，将会是我们的站点资源缓存的第一个版本
    caches.open('v1').then(function (cache) {
      // 添加缓存资源列表
      return cache.addAll([
        '/service-worker/',
        '/service-worker/node_modules/axios/dist/axios.js',
        '/service-worker/index.html',
        '/service-worker/style.css',
        '/service-worker/main.js',
        '/service-worker/image-list.js',
        '/service-worker/star-wars-logo.jpg',
        '/service-worker/gallery/',
        '/service-worker/gallery/bountyHunters.jpg',
        '/service-worker/gallery/myLittleVader.jpg',
        '/service-worker/gallery/snowTroopers.jpg'
      ])
    })
  )
})

// 每次任何被 service worker 控制的资源被请求到时，都会触发 fetch 事件，这些资源包括了指定的 scope 内的文档，和这些文档内引用的其他任何资源（比如 index.html 发起了一个跨域的请求来嵌入一个图片，这个也会通过 service worker 。）
this.addEventListener('fetch', function (event) {
  console.log(event)
  // event.request.url
  // event.request.method
  // event.request.headers
  // event.request.body
  event
    .respondWith
    // magic goes here
    (
      // caches.match(event.request) 允许我们对网络请求的资源和 cache 里可获取的资源进行匹配，查看是否缓存中有相应的资源。这个匹配通过 url 和 vary header进行，就像正常的 http 请求一样。
      caches.match(event.request)
    )
})
