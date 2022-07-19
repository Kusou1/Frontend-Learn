class Person {
  String name;

  // 声明私有属性
  num _money = 100;

  Person(this.name);

  num getMoney() {
    return this._money;
  }

  // 声明私有方法
  void _wife() {
    print('我是 $name 的老婆');
  }
}