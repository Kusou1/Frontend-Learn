/**
 * 需求：“拉勾教育” 写入指定的文件
 * 写入方式：
 * 01 一次性写入
 * 02 分批写入
 * 对比：对于大内存的文件来说，分批写入对于内存的消耗，在某个时间点肯定是更友好的
 */
let fs = require('fs')

let ws = fs.createWriteStream('test.txt', {
  highWaterMark: 3 // 三个字节可以显示一个完整的中文字符
})

// ws.write('拉勾教育')
let source = "拉勾教育".split('')
let num = 0
let flag = true

function executeWrite () {
  // 再次执行时，打开flag
  flag = true
  // 超出水位线，关掉
  while(num !== 4 && flag) {
    flag = ws.write(source[num])
    num++
  }
}

executeWrite()

// flag = false , 写入事件 > highWaterMark ， 当前的缓存区可以再继续进行写操作了，再次调用函数
ws.on('drain', () => {
  console.log('drain 执行了')
  executeWrite()
})


// 自己编码时候也不是特别需要，因为可以用pipe
// pipe
