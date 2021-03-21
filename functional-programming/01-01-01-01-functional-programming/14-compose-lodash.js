// lodash 中的函数组合的方法 _.flowRight()
const _ = require('lodash')

const reverse = arr => arr.reverse()
const first = arr => arr[0]
const toUpper = s => s.toUpperCase()

//_.flow方法是从左到右执行，_.flowRight方法是从右到左执行

const f = _.flowRight(toUpper, first, reverse)
console.log(f(['one', 'two', 'three']))