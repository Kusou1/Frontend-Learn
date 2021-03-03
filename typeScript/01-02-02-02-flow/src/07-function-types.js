/**
 * 函数类型
 *
 * @flow
 */

 //要求回调函数的第一个参数为string，第二个为number
function foo (callback: (string, number) => void) {
  callback('string', 100)
}

foo(function (str, n) {
  // str => string
  // n => number
})