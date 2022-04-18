const http = require('http')

const server = http.createServer((req, res) => {
  console.log('有请求进来了')

  // res
  // res.write('ok')
  // res.end()
  // res.end('test ok')
  // 设置响应码
  res.statusCode = 302
  // 设置响应头
  res.setHeader('Content-type', 'text/html;charset=utf-8')
  res.end('Kusou1')
})

server.listen(1234, () => {
  console.log('server is start.....')
})