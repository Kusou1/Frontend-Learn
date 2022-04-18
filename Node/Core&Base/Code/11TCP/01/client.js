const net = require('net')

// 创建连接
const client = net.createConnection({
  port: 1234, 
  host: '127.0.0.1'
})

client.on('connect', () => {
  client.write('Kusou1')
})

client.on('data', (chunk) => {
  // 打印服务端传过来的数据
  console.log(chunk.toString())
})

client.on('error', (err) => {
  console.log(err)
})

client.on('close', () => {
  console.log('客户端断开连接')
})