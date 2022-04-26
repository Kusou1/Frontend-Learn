'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // Application
    // 1. 定义：Application 是全局应用对象，在一个应用中，只会实例化一个，它继承自 Koa.Application，
    // 在它上面我们可以挂载一些全局的方法和对象。我们可以轻松的在插件或者应用中扩展 Application 对象。
    // 2. 获取方式： Application 对象几乎可以在编写应用时的任何一个地方获取到，下面介绍几个经常用到的获取方式：
    // 几乎所有被框架 Loader 加载的文件（Controller，Service，Schedule 等），
    // 都可以 export 一个函数，这个函数会被 Loader 调用，并使用 app 作为参数：
    // 3. 扩展 Application 对象
    // 4. Application 的事件

    // Context
    // 1. 定义：Context 是一个请求级别的对象，继承自 Koa.Context。在每一次收到用户请求时，
    // 框架会实例化一个 Context 对象，这个对象封装了这次用户请求的信息，并提供了许多便捷的方法来获取请求参数或者设置响应信息。框架会将所有的 Service 挂载到 Context 实例上，一些插件也会将一些其他的方法和对象挂载到它上面（egg-sequelize 会将所有的 model 挂载在 Context 上）。
    // 获取方式：最常见的 Context 实例获取方式是在 Middleware, Controller 以及 Service 中。Controller 中的获取方式在上面的例子中已经展示过了，在 Service 中获取和 Controller 中获取的方式一样，在 Middleware 中获取 Context 实例则和 Koa 框架在中间件中获取 Context 对象的方式一致。
    // 框架的 Middleware 同时支持 Koa v1 和 Koa v2 两种不同的中间件写法，根据不同的写法，获取 Context 实例的方式也稍有不同：


    // Request & Response
    // Request 是一个请求级别的对象，继承自 Koa.Request。封装了 Node.js 原生的 HTTP Request 对象，提供了一系列辅助方法获取 HTTP 请求常用参数。

    // Response 是一个请求级别的对象，继承自 Koa.Response。封装了 Node.js 原生的 HTTP Response 对象，提供了一系列辅助方法设置 HTTP 响应。
    console.log(this.ctx.request.query);

    const users = this.service.user.getUserList
    this.ctx.body=users

    console.log(this.ctx.helper.hello())

    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
