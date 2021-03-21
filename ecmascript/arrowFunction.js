//箭头函数

// function inc1(params) {
//     return params+2
// }
// const inc =n => 5n+1

// console.log(inc(2))

// const arr=[1,2,3,4,5]

// arr.filter(function (item) {
//     return item%2
// })
// console.log(arr.filter(i=> i%2))

//箭头函数this

const person={
    name:'tom',
    sayHi: ()=> {
        console.log(`hi , my Name is ${this.name}`)
    },
    
    sayHiAsync:function () {
        setTimeout(() => {
            console.log(this.name)
        }, 1000);
    }
}

//箭头函数的外面this是什么，里面的this就是什么
person.sayHi()