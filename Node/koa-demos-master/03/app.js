/**
 * - 在 Koa 中配置路由
 * - 静态资源托管
 * - 路由重定向
 */
const Koa = require('koa')
const Router = require('@koa/router')
const static = require('koa-static')
const path = require('path')
const mount = require('koa-mount')

const app = new Koa()

// app.use(static('./public'))
// app.use(static(path.join(__dirname, './public')))
app.use(
  mount('/foo', static(path.join(__dirname, './public')))
)

const router = new Router()

router.get('/', ctx => {
  ctx.body = 'home page'
})

router.post('/', ctx => {
  ctx.body = 'post /'
})

router.get('/foo', ctx => {
  ctx.body = 'foo page'
})

router.get('/users/:id', ctx => {
  console.log(ctx.params)
  ctx.body = 'users page'
})

router.get('/bar', ctx => {
  // 重定向针对的同步请求
  ctx.redirect('/foo')
})

app
  .use(router.routes())
  .use(router.allowedMethods())

// app.use(ctx => {
//   // / 首页
//   // /foo foo页面
//   const path = ctx.path
//   if (path === '/') {
//     ctx.body = 'home page'
//   } else if (path === '/foo') {
//     ctx.body = 'foo page'
//   } else {
//     ctx.body = '404 Not Found.'
//   }
// })

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
