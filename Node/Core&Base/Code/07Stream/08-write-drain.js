const fs = require('fs')

let ws = fs.createWriteStream('test.txt', {
  highWaterMark: 3
})

// 第一次写入往文件内部写入
let flag = ws.write('1')
console.log(flag)

// 第二次写入往缓存中写入
flag = ws.write('2')
console.log(flag)

// 累计写入量没达到水位线就不触发drain事件
flag = ws.write('3')
console.log(flag)

// 如果 flag 为 false 并不是说明当前数据不能被执行写入
// 控制的是上游数据的产量问题，返回的flag = false代表，通知当前生产者，当前消费速度跟不上生产速度，应该将生产行为停掉

// 在下次在缓存里消费完数据之后，又可以往缓存里添加数据时，，如果flag为false，两个条件成立，就会触发drain事件

ws.on('drain', () => {
  console.log('11')
})