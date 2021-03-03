/**
 * 类型注解
 *
 * @flow
 */


//大多数情况下，flow可以帮助我们推断出参数的具体类型，但我们添加类型注解可以让我们更方便的去理解类型，所以对我们是有帮助的


function square (n: number) {
  return n * n
}
//给变量指定类型
let num: number = 100

// num = 'string' // error


//标记函数返回值的类型
function foo (): number {
  return 100 // ok
  // return 'string' // error
}


//对于没有返回值的函数，应把他标记为void
function bar (): void {
  // return undefined
}
