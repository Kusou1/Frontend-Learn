//Proxy代理对象，监视对象读写
// const person={
//     name:'zce',
//     age:20
// }

// const personProxy= new Proxy(person,{
//     //监视属性的访问
//     get(target,property){
//         return property in target ? target[property]:'default'
//         // console.log(target,property)
//         // return 100
//     },
//     //监视对象设置属性的过程
//     set(target,property,value){
//         if (property===age){
//             if(!Number.isInteger(value)){
//                 throw new TypeError(`${value} is not an int`)
//             }
//         }
//         // console.log(target, property, value)
//     }

// })

// console.log(personProxy.name)
// personProxy.gender=true


//Proxy对比defineProperty()
// const person={
//     name:'zce',
//     age:20
// }

// const personProxy= new Proxy(person,{
//     deleteProperty(target,property){
//         console.log("delete",property)
//         delete target[property]
//     }
// })

// delete personProxy.age
// console.log(person)

//监视数组
const list=[]

const listProxy=new Proxy(list,{
    set(target,property,value){
        console.log('set',property,value)
        target[property]=value
        return true //表示设置成功
    }
})

listProxy.push(100)