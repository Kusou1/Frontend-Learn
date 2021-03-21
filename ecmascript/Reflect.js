//Reflect统一的对象操作API
//静态类，不能new一个实例对象，只能调用其中的方法
//Reflect内部封装了一系列对对象的底层操作

// const obj={
//     foo:'123',
//     bar:'456'
// }

// const proxy=new Proxy(obj,{
//     get(target,property){
//         console.log(`watch login`)
//         return Reflect.get(target,property)
//     }
// })
// console.log(proxy.foo)

const obj = {
    foo:'123',
    bar:'456'
}

// console.log('name' in obj)
// console.log(delete obj['age'])
// console.log(Object.keys(obj))

console.log(Reflect.has(obj,'name'))
console.log(Reflect.deleteProperty(obj,'bar'))
console.log(Reflect.ownKeys(obj))