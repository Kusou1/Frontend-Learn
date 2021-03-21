//Set 数据结构

//Set内部成员不允许重复,可用来存不重复的数据

const s=new Set()

s.add(1).add(2).add(3).add(4).add(2)

// console.log(s)

// for(let i of s){
//     console.log(i)
// }

// console.log(s.size)

// console.log(s.has(100))

// console.log(s.delete(3))

// s.clear()

// console.log(s)

const arr=[1,2,2,3,3,4,1]

// const result = Array.from(new Set(arr))
const result=[...new Set(arr)]

console.log(result);