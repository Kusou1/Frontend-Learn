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
  print(p1.name);

  Person p2 = new Person('张飞');
  print(p2.name);

  print(p1 == p2);
}