// 在浏览器平台或node平台，setTimeout 0 都会有一些不稳定的因素，有些情况会产生一些延时，导致这两段代码的执行顺序不固定
// setTimeout(() => {
//   console.log('timeout')
// }, 0)

// setImmediate(() => {
//   console.log('immdieate')
// })


// 而在这个情况下immediate永远是先执行的，timeout永远是后执行的
const fs = require('fs')

fs.readFile('./m1.js', () => {
  setTimeout(() => {
    console.log('timeout')
  }, 0)
  
  setImmediate(() => {
    console.log('immdieate')
  })
})