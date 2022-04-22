/**
 * - Koa 中的错误处理
 * - ctx.throw()
 * - 全局异常处理
 * - app.on('error') 处理
 */
const Koa = require('koa')
const fs = require('fs')
const { promisify } = require('util')
const readFile = promisify(fs.readFile)

const app = new Koa()

// 在最外层添加异常捕获的中间件
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = 500
    ctx.body = err.message
    ctx.app.emit('error', err, ctx)
    // ctx.body = '服务端内部错误'
  }
})

app.use(async (ctx, next) => {
  JSON.parse('{}')
  // ctx.body = 'Hello Koa'
  // next() // 无法捕获后面的异步中间件
  // return next() // 可以捕获
  await next() // 可以捕获
})

app.use(async ctx => {
  const data = await readFile('./dnskjandsa.html')
  ctx.type = 'html'
  ctx.body = data
})

app.on('error', err => {
  console.log('app error', err)
})

// app.use(ctx => {
//   try {
//     JSON.parse('dnsakjndsa')
//     ctx.body = 'Hello Koa'
//   } catch (err) {
//     // ctx.response.status = 500
//     // ctx.response.body = '服务端内部错误'

//     ctx.throw(500)
//     // ctx.throw(404)
//   }
// })

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
