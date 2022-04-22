/**
 * - 了解 Koa 源码结构
 */

const Koa = require('./koa')

const app = new Koa()

// app.use((ctx, next) => {
//   ctx.body = 'Hello Koa'
// })

app.listen(3000)
