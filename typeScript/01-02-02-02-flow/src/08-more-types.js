/**
 * 特殊类型
 *
 * @flow
 */

// 字面量类型

// 只能是foo字符串，如果是其他的字符串就会报错
const a: 'foo' = 'foo'


// 一般是使用联合类型，组合

const type: 'success' | 'warning' | 'danger' = 'success'

// ------------------------

// 声明类型

type StringOrNumber = string | number

const b: StringOrNumber = 'string' // 100

// ------------------------

// Maybe 类型

const gender: ?number = undefined
// 相当于
// const gender: number | null | void = undefined
