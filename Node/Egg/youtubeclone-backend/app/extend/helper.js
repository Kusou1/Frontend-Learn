const crypto = require('crypto')
const _ = require('lodash')

// 全局help方法
exports.md5 = str => {
  return crypto.createHash('md5').update(str).digest('hex')
}

// loadsh
exports._ = _
