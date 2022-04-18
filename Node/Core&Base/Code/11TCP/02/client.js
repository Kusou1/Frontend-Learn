// 数据粘包问题
const net = require('net')

const client = net.createConnection({
  port: 1234, 
  host: '127.0.0.1'
})

let dataArr = [
  '拉勾教育2', 
  '拉勾教育3', 
  '拉勾教育4', 
  '拉勾教育5', 
]

client.on('connect', () => {
  client.write('拉勾教育1')
  // 把发送的时间间隔拉长，解决粘包问题，虽然解决了问题，但是会导致传输效率变低,这并不是一个好的解决方案
  for(let i=0; i<dataArr.length; i++) {
    (function (val, index) {
      setTimeout(() => {
        client.write(val)
      }, 1000 * (index +1))
    })(dataArr[i], i)
  }
})

client.on('data', (chunk) => {
  console.log(chunk.toString())
})

client.on('error', (err) => {
  console.log(err)
})

client.on('close', () => {
  console.log('客户端断开连接')
})