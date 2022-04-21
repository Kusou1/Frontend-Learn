const jwt = require('jsonwebtoken')
const { promisify } = require('util')

// 生成jwt
exports.sign = promisify(jwt.sign)

// 验证通过后解析
exports.verify = promisify(jwt.verify)

// 不做验证，直接解析
exports.decode = promisify(jwt.decode)
