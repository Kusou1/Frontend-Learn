/**
 * 处理 ctx.body
 */

const Koa = require('./koa')
const fs = require('fs')
const app = new Koa()
const util = require('util')
const readFile = util.promisify(fs.readFile)

app.use(async ctx => {
  // ctx.body = 'string'

  // ctx.body = 123

  // const data = await readFile('./package.json')
  // ctx.body = data

  // ctx.body = fs.createReadStream('./package.json')

  // ctx.body = { foo: 'bar' }
  // ctx.body = [1, 2, 3]

  ctx.body = null
})

// app.use(async (ctx, next) => {
//   ctx.body = 'Hello Koa'
//   // ctx.response.body = 'Hello Koa'
//   next()

//   ctx.body = 'Hello Koa 3'
// })

// app.use(async (ctx, next) => {
//   console.log(ctx.response.body, ctx.body)
//   ctx.body = 'Hello Koa 2'
// })

app.listen(3000)
