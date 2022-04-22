/**
 * - Koa 的中间件
 * - 中间件执行栈结构（洋葱模型）
 * - 异步中间件
 * - 中间件的合成
 * 
 *  多个中间件会形成一个栈结构（middle stack），以"先进后出"（first-in-last-out）的顺序执行。
 *  最外层的中间件首先执行。
 *  调用next函数，把执行权交给下一个中间件。
 *  ...
 *  最内层的中间件最后执行。
 *  执行结束后，把执行权交回上一层的中间件。
 *  ...
 *  最外层的中间件收回执行权之后，执行next函数后面的代码。
 */
const Koa = require('koa')
const fs = require('fs')
const util = require('util')
// 进行合并处理的中间件
const compose = require('koa-compose')

const app = new Koa()

const a1 = (ctx, next) => {
  console.log('a1')
  next()
}

const a2 = (ctx, next) => {
  console.log('a2')
  next()
}

const a3 = (ctx, next) => {
  console.log('a3')
  next()
}

// 合并处理
app.use(compose([a1, a2, a3]))
// app.use(a1)
// app.use(a2)
// app.use(a3)

// 异步中间件
app.use(async (ctx, next) => {
  const data = await util.promisify(fs.readFile)('./views/index.html')
  ctx.type = 'html'
  ctx.body = data
  next()
})

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

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
