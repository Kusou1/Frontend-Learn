const EventEmitter = require('events')

const ev = new EventEmitter()

// on 
/* ev.on('事件1', () => {
  console.log('事件1执行了---2')
})

ev.on('事件1', () => {
  console.log('事件1执行了')
})

// emit 给一个事件注册多个监听，注册过的都会依次执行一遍,多次触发了就多次调用
ev.emit('事件1')
ev.emit('事件1') */

// once 和on使用上结果一样，不同的是两次emit只会触发一次
/* ev.once('事件1', () => {
  console.log('事件1执行了')
})
ev.once('事件1', () => {
  console.log('事件1执行了--2')
})

ev.emit('事件1')
ev.emit('事件1') */

// off 取消事件
/* let cbFn = (...args) => {
  console.log(args)
}
ev.on('事件1', cbFn) */

/* ev.emit('事件1')
ev.off('事件1', cbFn) */
// ev.emit('事件1', 1, 2, 3)

/* ev.on('事件1', function () {
  console.log(this)
})
ev.on('事件1', function () {
  console.log(2222)
})

ev.on('事件2', function () {
  console.log(333)
})

ev.emit('事件1') */

// 很多模块本身就继承自event，可以直接去调用on
const fs = require('fs')

const crt = fs.createReadStream()

// 模块本身有很多定义好的事件
crt.on('data')