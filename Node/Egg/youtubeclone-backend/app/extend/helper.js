const crypto = require('crypto')
const _ = require('lodash')

exports.md5 = str => {
  return crypto.createHash('md5').update(str).digest('hex')
}

exports._ = _
