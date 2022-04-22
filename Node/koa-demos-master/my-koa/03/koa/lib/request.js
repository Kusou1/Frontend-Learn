const url = require('url')

const request = {
  get method () {
    return this.req.method
  },

  get header () {
    return this.req.headers
  },

  get url () {
    return this.req.url
  },

  get path () {
    return url.parse(this.req.url).pathname
  },

  get query () {
    return url.parse(this.req.url, true).query
  }
}

module.exports = request
