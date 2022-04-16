// 宏任务
setTimeout(() => {
  console.log('s1')
})

// 微任务
Promise.resolve().then(() => {
  console.log('p1')
})

// 同步代码
console.log('start')

// node平台下独有的微任务  nextTick的执行优先级高于promise
process.nextTick(() => {
  console.log('tick')
})

// 宏任务
setImmediate(() => {
  console.log('setimmediate')
})

console.log('end')

// start,  end, tick, p1, s1,  setimmediate