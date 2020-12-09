//Symbol数据结构,对象没有办法判断是否已经存在相同的键值容易产生冲突
//以前解决的方法是约定,但是只是规避了问题，并没有真正的解决了问题
//Symbol就是用来解决这个问题的，表示，独一无二的值

// const cache={}

// //a.js
// cache['a_foo']=Math.random()

// //b.js
// cache['b_foo']='123'

// console.log(cache)

// const s=Symbol()
// console.log(s);

// console.log(Symbol('foo'));
// console.log(Symbol('bar'));
// console.log(Symbol('baz'));


// const obj={
//     [Symbol()]:123
// }
// console.log(obj)



// const name=Symbol()
// const person={
//     [name]:'zce',
//     say(){
//         console.log(this[name])
//     }
// }

// person.say()

//最主要的作用给对象添加一个独一无二的标识符


// console.log(
//     Symbol('foo')===Symbol('foo')
// )
//返回false

//Symbol的for方法，接受字符串作为参数，相同的字符串将会返回相同的Symbol,内部维护了一个全局的注册表，为字符串和值提供了一一对应的关系
// const s1= Symbol.for('foo')
// const s2= Symbol.for('foo')

// console.log(s1===s2)

//需要注意的是，这个方法维护的是字符串和Symbol之间一一对应的关系，也就是说传入的不是字符串，方法内部将自动转换成字符串，将导致
// console.log(
//     Symbol.for(true)===Symbol.for('true')
// )

//Symbol内部提供了很多内置常量

// console.log(Symbol.iterator)
// console.log(Symbol.hasInstance)


// const obj={
//     [Symbol.toStringTag]:'xObject'
// }
// console.log(obj.toString())
//返回对象的自定义标签

const obj={
    [Symbol()]:'symbol value',
    foo:'normal value'
}
//用Symbol作为属性名，用传统的for in 循环是无法拿到的
for(var key in obj){
    console.log (key)
}
//也拿不到
console.log(Object.keys(obj));
//会将我们的Symbol属性忽略掉
console.log(JSON.stringify(obj));

//这些属性导致Symbol特别适合作为对象的私有属性


//获取所有的Symbol属性名
console.log(Object.getOwnPropertySymbols(obj));