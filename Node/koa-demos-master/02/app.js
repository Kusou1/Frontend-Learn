/**
 * - Koa 中的 Context 上下文对象
 * 参考：https://koa.bootcss.com/#context
 */
const Koa = require('koa')

const app = new Koa()

app.use(ctx => {
  // ctx.body = 'Hello Koa'
  // console.log(ctx.req.method)
  // 通过ctx.request.path可以获取用户请求的路径
  // console.log(ctx.req.url)

  // ctx.res.end('res Hello Koa')

  // console.log(ctx.headers)
  console.log(ctx.method)
  ctx.body = 'Hello Koa'
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
