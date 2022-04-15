const fs = require('fs')

// 第一个参数：可读流数据来源，底层数据存放的位置
let rs = fs.createReadStream('test.txt', {
  flags: 'r', // 表示以什么方式打开，用什么方式操作，默认为r
  encoding: null, // 对编码进行设置，默认为null，返回的数据类型为buffer
  fd: null, // 文件操作句柄，文件标识符，默认值为null，从3开始，0，1，2被标准的输入，输出，错误占用了
  mode: 438, // 权限位，默认值rw，八进制的话就是0O666，十进制的话就是438
  autoClose: true,  // 表示是否自动关闭文件
  start: 0, // 表示从底层数据的第几位开始读取，默认是0
  // end: 3, // 表示从底层数据的第几位结束读取，默认是文件的结束
  highWaterMark: 4 // 水位线，表示每次要从底层数据读多少个字节的数据，readable默认16kb，文件可读流默认64
})



/* rs.on('data', (chunk) => {
  console.log(chunk.toString())
  rs.pause() // 暂停
  setTimeout(() => {
    rs.resume() // 重新打开  
  }, 1000)
}) */

/* rs.on('readable', () => {
  let data = rs.read() // 主动调用read 方法
  console.log(data)
  let data
  // read() 传入的参数表示从缓存读取的位数，缓存区中还有的话，就不会从底层数据拿值，如果_readableState.length为0时，或read需要的位数大于剩余时，就再去调用push从底层数据取值
  while((data = rs.read(1)) !== null) {
    console.log(data.toString())
    console.log('----------', rs._readableState.length) //缓存区的字节数
  }
}) */

rs.on('open', (fd) => {
  console.log(fd, '文件打开了')
})

rs.on('close', () => {
  console.log('文件关闭了')
})
let bufferArr = []
rs.on('data', (chunk) => {
  // 拿到的chunk是个buffer，在这里处理数据并不合适，因为他是分段的
  bufferArr.push(chunk)
})

rs.on('end', () => {
  // 数据全部拿到，数据的使用合适时机
  console.log(Buffer.concat(bufferArr).toString())
  console.log('当数据被清空之后')
})

rs.on('error', (err) => {
  console.log('出错了')
})

// 生命周期 open data end close 