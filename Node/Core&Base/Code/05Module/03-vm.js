const fs = require('fs')
const vm = require('vm')

let age = 33
let content = fs.readFileSync('test.txt', 'utf-8')

// eval 直接用eval执行的话是不合适的，因为如果在这个文件中已定义同名变量，就会报错，因为他们用的是同一个上下文
// eval(content)

// new Function 虽然可以执行，但是比eval还要麻烦,还要考虑函数怎么去定义，只有一个变量还行，有多个的话就很麻烦
/* console.log(age)
let fn = new Function('age', "return age + 1")
console.log(fn(age)) */


// 基于这样的场景，在node底层都没有采用，而是使用vm的机制
 
// 沙箱的运行api
vm.runInThisContext("age += 10")

console.log(age)