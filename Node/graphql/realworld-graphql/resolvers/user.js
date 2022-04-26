const { UserInputError } = require('apollo-server-express')
const jwt = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')
const md5 = require('../util/md5')

const resolvers = {
  // 所有的 Query 都走这里
  Query: {
    foo (parent, args, context, info) {
      console.log('foo resolve => ', context.user)
      return 'hello'
    },
    currentUser (parent, args, context, info) {
      // 校验当前登录状态
      // 具体的操作
      // 获取当前登陆用户的信息
      // context在新建apolloServer时传入
      return context.user
    }
  },

  Mutation: {
    async createUser (parent, { user }, { dataSources }) {
      // 判断用户是否存在
      const users = dataSources.users
      // 判断邮箱是否被注册
      const user1 = await users.findByEmail(user.email)
      if (user1) {
        // UserInputError  apollo自带方法，返回一个用户输入错误
        throw new UserInputError('邮箱已存在')
      }

      // 判断用户名是否被注册
      const user2 = await users.findByUsername(user.username)
      if (user2) {
        throw new UserInputError('用户已存在')
      }

      // 判断邮箱是否存在
      // 保存用户
      // 生成 token 发送给客户端
      const userData = await users.saveUser(user)
      
      const token = await jwt.sign({
        userId: userData._id
      }, jwtSecret, {
        expiresIn: 60 * 60 * 24
      })

      return {
        user: {
          ...userData.toObject(),
          token
        }
      }
    },

    async login (parent, { user }, { dataSources }) {
      // 密码是否正确
      // 生成用户 token
      // 发送成功响应
      const userData = await dataSources.users.findByEmail(user.email)
      if (!userData) {
        throw new UserInputError('邮箱不存在')
      }

      if (md5(user.password) !== userData.password) {
        throw new UserInputError('密码错误')
      }

      const token = await jwt.sign({
        userId: userData._id
      }, jwtSecret, {
        expiresIn: 60 * 60 * 24
      })

      return {
        user: {
          ...userData.toObject(),
          token
        }
      }
    },

    async updateUser (parent, { user: userInput }, { user, dataSources }) {
      if (userInput.password) {
        userInput.password = md5(userInput.password)
      }
      const ret = await dataSources.users.updateUser(user._id, userInput)
      return {
        user: ret
      }
    }
  }
}

module.exports = resolvers
