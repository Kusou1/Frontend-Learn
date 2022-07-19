// 工厂构造函数
// 通过factory 声明，工厂函数不会自动生成实例，而是通过代码来决定返回的实例
class Person {
  String name;

  static Person instance;

  // 工厂构造函数
  factory Person([String name = '刘备']) {
    // 工厂构造函数中，不能使用 this 关键字
    // print(this.name);
    if (Person.instance == null) {
      // 第一次实例化
      Person.instance = new Person.newSelf(name);
    }
    // 非第一次实例化
    return Person.instance;
  }

  // 命名构造函数
  Person.newSelf(this.name);
}

void main() {
  // 实例化操作
  Person p1 = new Person('关羽');
  print(p1.name); // 关羽

  Person p2 = new Person('张飞');
  print(p2.name); // 关羽

  print(p1 == p2); // true
}
