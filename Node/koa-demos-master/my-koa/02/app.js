/**
 * - Koa 中间件功能
 *  + use 的时候收集起来
 *  + 请求进来的时候调用
 */

const Koa = require('./koa')

const app = new Koa()

const one = (ctx, next) => {
  console.log('>> one')
  next()
  console.log('<< one')
}

const two = (ctx, next) => {
  console.log('>> two')
  next()
  console.log('<< two')
}

const three = (ctx, next) => {
  console.log('>> three')
  next()
  console.log('<< three')
}

app.use(one)
app.use(two)
app.use(three)

// console.log(app.middleware)

app.listen(3000)
