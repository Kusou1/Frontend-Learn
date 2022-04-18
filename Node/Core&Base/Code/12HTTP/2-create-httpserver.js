const http = require('http')

// 创建服务端 http模块，和net模块的区别是，http专门用来做web服务的
let server = http.createServer((req, res) => {
  // req请求，res响应
  // 针对于请求和响应完成各自的操作
  console.log('1111')
})
server.listen(1234, () => {
  console.log('server is running......')
})