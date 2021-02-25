// Promise 链式调用

function ajax (url) {
  return new Promise(function (resolve, reject) {
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

// var promise = ajax('/api/users.json')

// var promise2 = promise.then(
//   function onFulfilled (value) {
//     console.log('onFulfilled', value)
//   },
//   function onRejected (error) {
//     console.log('onRejected', error)
//   }
// )

// console.log(promise2 === promise)

ajax('/api/users.json')
  .then(function (value) {
    console.log(1111)
    return ajax('/api/urls.json')
  }) // => Promise
  .then(function (value) {
    console.log(2222)
    console.log(value)
    return ajax('/api/urls.json')
  }) // => Promise
  .then(function (value) {
    console.log(3333)
    return ajax('/api/urls.json')
  }) // => Promise
  .then(function (value) {
    console.log(4444)
    return 'foo'
  }) // => Promise
  .then(function (value) {
    console.log(5555)
    console.log(value)
  })
//Promise对象的then方法会返回一个全新的Promise对象
//后面的then方法就是在为上一个then返回的Promise注册回调
//前面then方法中回调函数的返回值会作为后面then方法回调的参数
//如果回调中返回的是Promise，那后面then方法的回调会等待它的结束