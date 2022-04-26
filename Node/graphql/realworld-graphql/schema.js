const { makeExecutableSchema } = require('apollo-server-express')
const typeDefs = require('./type-defs')
const UpperCaseDirective = require('./schema-directives/upper')
const AuthCaseDirective = require('./schema-directives/auth')
const userResolvers = require('./resolvers/user')
const articleResolvers = require('./resolvers/article')

// 合并
const schema = makeExecutableSchema({
  typeDefs,
  resolvers: [userResolvers, articleResolvers],
  // 要在schema中定义好自定义指令，才能在type-defs中用
  schemaDirectives: {
    upper: UpperCaseDirective,
    auth: AuthCaseDirective
  }
})

module.exports = schema
