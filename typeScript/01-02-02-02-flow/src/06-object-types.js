/**
 * 对象类型
 *
 * @flow
 */


 //当前这个变量存放的变量必须要有foo，bar这两个值
const obj1: { foo: string, bar: number } = { foo: 'string', bar: 100 }

//？代表可选
const obj2: { foo?: string, bar: number } = { bar: 100 }

const obj3: { [string]: string } = {}

obj3.key1 = 'value1'
obj3.key2 = 'value2'

