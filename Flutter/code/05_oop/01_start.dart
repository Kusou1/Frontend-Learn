// 声明类
// 类是对象的抽象，对象是类的具体实现
// Dart 是面向对象编程（OOP）
class Person {
  // 类的属性
  String name = '张三';

  // 类的方法
  void getInfo() {
    print('我是 $name');
  }
}

void main() {
  // 实例化类，然后得到一个对象
  Person p = new Person();
  // 访问类中的属性
  print(p.name);

  // 访问类的方法
  p.getInfo();

  // Dart 中所有的内容都是对象
  Map m = new Map();
  print(m.length);
  m.addAll({'name': '李四', 'age': 20});
  print(m.length);
}
