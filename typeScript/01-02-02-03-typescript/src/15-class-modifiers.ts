// 类的访问修饰符

export {} // 确保跟其它示例没有成员冲突




class Person {
  public name: string // = 'init name'
  private age: number
  protected gender: boolean
  
  constructor (name: string, age: number) {
    this.name = name
    this.age = age
    this.gender = true
  }

  sayHi (msg: string): void {
    console.log(`I am ${this.name}, ${msg}`)
    console.log(this.age)
  }
}

class Student extends Person {
  private constructor (name: string, age: number) {
    super(name, age)
    console.log(this.gender)
  }

  static create (name: string, age: number) {
    return new Student(name, age)
  }
}

const tom = new Person('tom', 18)
//public公有属性可直接访问
console.log(tom.name)
//访问private的私有属性就会报错
// console.log(tom.age)
//访问protected的受保护的属性也不能在外部访问,表示只允许在子类中访问
// console.log(tom.gender)

const jack = Student.create('jack', 18)