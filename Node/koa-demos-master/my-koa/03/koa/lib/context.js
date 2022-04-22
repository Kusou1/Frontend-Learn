const context = {
  // get method () {
  //   return this.request.method
  // },

  // get url () {
  //   return this.request.url
  // }
}

defineProperty('request', 'method')
defineProperty('request', 'url')

function defineProperty (target, name) {
  context.__defineGetter__(name, function () {
    return this[target][name]
  })
  // Object.defineProperty(context, name, {
  //   get () {
  //     return this[target][name]
  //   }
  // })
}

module.exports = context
