// Promise 并行执行

function ajax(url) {
  return new Promise(function (resolve, reject) {
    // foo()
    // throw new Error()
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.responseType = 'json'
    xhr.onload = function () {
      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
    xhr.send()
  })
}

// ajax('/api/users.json')
// ajax('/api/posts.json')


//接收一个数组，一个个的Promise对象，会返回一个全新的Promise对象
// var promise = Promise.all([
//   ajax('/api/users.json'),
//   ajax('/api/posts.json')
// ])


//当里面的异步任务都完成过后，返回的Promise才会完成，拿到的是一个数组，数组里是每个Promise完成的结果
// promise.then(function (values) {
//   console.log(values)
// }).catch(function (error) {
//   console.log(error)
// })

//同时请求urls中的所有地址
//Promise.all是等待数组的所有任务结束结束
// ajax('/api/urls.json')
//   .then(value => {

//     const urls = Object.values(value)
//     const tasks = urls.map(url => ajax(url))
//     return Promise.all(tasks)
//   })
//   .then(values => {
//     console.log(values)
//   })

// Promise.race 实现超时控制
// Promise.race只会等待第一个结束的任务
const request = ajax('/api/posts.json')
const timeout = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('timeout')), 500)
})
//在500毫秒内，第一个请求完成，500毫秒后，超时任务完成，提示报错，race结束
Promise.race([
  request,
  timeout
])
  .then(value => {
    console.log(value)
  })
  .catch(error => {
    console.log(error)
  })