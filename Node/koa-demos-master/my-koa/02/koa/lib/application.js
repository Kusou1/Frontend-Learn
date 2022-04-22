const http = require('http')

class Application {
  constructor () {
    this.middleware = [] // 保存用户添加的中间件函数
  }

  listen (...args) {
    const server = http.createServer(this.callback())
    server.listen(...args)
  }
  
  use (fn) {
    this.middleware.push(fn)
  }

  // 异步递归遍历调用中间件处理函数
  compose (middleware) {
    return function () {
      const dispatch = index => {
        if (index >= middleware.length) return Promise.resolve()
        const fn = middleware[index]
        return Promise.resolve(
          // TODO: 上下文对象
          fn({}, () => dispatch(index + 1)) // 这是 next 函数
        )
      }

      // 返回第 1 个中间件处理函数
      return dispatch(0)
    }
  }

  callback () {
    const fnMiddleware = this.compose(this.middleware)
    const handleRequest = (req, res) => {
      fnMiddleware().then(() => {
        console.log('end')
        res.end('My Koa')
      }).catch(err => {
        res.end(err.message)
      })
    }

    return handleRequest
  }
}

module.exports = Application
