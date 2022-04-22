/**
 * - 使用 Koa 启动一个 HTTP 服务
 */
const Koa = require('koa')

const app = new Koa()

// Koa 没有路由系统，只有中间件功能
// ctx: context 上下文对象
//    请求
//    响应
app.use(ctx => {
  ctx.body = 'Hello Koa'
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
