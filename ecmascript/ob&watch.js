// 实现 ob 和 watch 方法，希望当方法传入 watch 函数时会执行一次，之后每次修改 data 上的属性时，会触发对应的 console
let callbackList = new Map()
let currentProperty
const data = ob({ count: 0, foo: 'test' })

watch(() => {
  console.log('watch-count', data.count)
})
watch(() => {
  console.log('watch-foo', data.foo)
})

data.count += 1
console.log('showcount', data.count)
delete data.count
data.foo = 'test2'

function ob(obj) {
  return new Proxy(obj, {
    get(target, property, value) {
      currentProperty = property
      return target[property]
    },
    set(target, property, value) {
      target[property] = value
      for (let [key, cb] of callbackList) {
        if (key === property && cb && typeof cb === 'function') {
          cb()
        }
      }
    },
    deleteProperty(target, property) {
      delete target[property]
      for (let [key, cb] of callbackList) {
        if (key === property && cb && typeof cb === 'function') {
          cb()
        }
      }
    },
  })
}
function watch(func) {
  func()
  if (func && typeof func === 'function') {
    callbackList.set(currentProperty, func)
  }
}
