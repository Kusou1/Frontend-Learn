const net = require('net')

// 创建服务端实例
const server = net.createServer()

const PORT = 1234
const HOST = 'localhost'

server.listen(PORT, HOST)


// 调用server.listen 方法之后触发
server.on('listening', () => {
  console.log(`服务端已经开启在 ${HOST}: ${PORT}`)
})

// 新的连接建立时触发 接收消息 回写消息
server.on('connection', (socket) => {
  socket.on('data', (chunk) => {
    const msg = chunk.toString()
    console.log(msg)

    // 回数据   传给客户端的数据
    socket.write(Buffer.from('您好' + msg))
  })
})

// 当server关闭时触发
server.on('close', () => {
  console.log('服务端关闭了')
})

// 当错误出现的时候触发
server.on('error', (err) => {
  // 状态为EADDRINUSE，代表地址被占用，端口被占用
  if (err.code == 'EADDRINUSE') {
    console.log('地址正在被使用')
  }else{
    console.log(err)
  }
})