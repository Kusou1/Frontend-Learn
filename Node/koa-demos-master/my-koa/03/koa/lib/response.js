const response = {
  set status (value) {
    this.res.statusCode = value
  }
}

module.exports = response
