//类的继承

class Person {
    constructor(name) {
        this.name = name
    }

    say() {
        console.log(`hi,my name is ${this.name}`)
    }

}

class Student extends Person {
    constructor(name, number) {
        super(name)
        this.number = number
    }
    hello(){
        super.say()
        console.log(`my school number is ${this.number}`)
    }
}
const s=new Student(`jack`,'100')
s.hello()