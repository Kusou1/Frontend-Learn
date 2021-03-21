
// function Person(params) {
//     this.name = name
// }
// Person.prototype.say=function () {
//     console.log(`hi,my name is ${this.name}`)
// }

//Class类

class Person {
    constructor(name) {
        this.name = name
    }

    say() {
        console.log(`hi,my name is ${this.name}`)
    }
}

const p = new Person('tom')
p.say