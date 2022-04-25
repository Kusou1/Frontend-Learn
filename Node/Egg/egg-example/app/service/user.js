// app/service/user.js

// 从 egg 上获取（推荐）
const Service = require('egg').Service;
class UserService extends Service {
  // implement
  getUserList() {
      // ... 操作数据库
      return [
          {name: '张三',age: 19},
          {name: '张三',age: 19},
          {name: '张三',age: 19},
          {name: '张三',age: 19}
      ]
  }
}
module.exports = UserService;