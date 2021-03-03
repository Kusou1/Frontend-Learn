/**
 * 类型推断
 *
 * @flow
 */
//在没有类型注解的情况下，会通过函数使用场景推断出传入的应为num类型而不是str

 
function square (n) {
  return n * n
}

// square('100')

square(100)
