/**
 * - 在 Koa 中配置路由
 * - 静态资源托管
 * - 路由重定向
 */
const Koa = require('koa')
// 路由中间件包
const Router = require('@koa/router')
// 静态资源托管中间件包
const static = require('koa-static')
const path = require('path')
// 添加虚拟路径需要用这个包
const mount = require('koa-mount')

const app = new Koa()

// app.use(static('./public'))
// app.use(static(path.join(__dirname, './public')))
// 在koa中，中间件是不用第一个参数来设置他的请求路径的
app.use(
  mount('/public', static(path.join(__dirname, './public')))
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
  // 路由重定向针对的同步请求
  // 异步请求不行
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
