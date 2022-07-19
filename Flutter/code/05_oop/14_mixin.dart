// 混入（mixin）是一段公共代码。混入有两种声明方式：
// 将类当作混入
// 作为Mixin的类只能继承自Object，不能继承其他类
// 作为Mixin的类不能有构造函数
// 使用mixin关键字声明
// 混入（mixin）可以提高代码的服用效率，普通类可以通过with来使用混入
// 使用多个混入时，后引入的混入会覆盖之前混入的重复的内容

class Father {}

// class MixinA extends Father { // 用作混入的类，不能继承除了 Object 以外的其他类
// class MixinA extends Object {
class MixinA {
  String name = 'MixinA';

  // MixinA(); // 用作混入的类，不能拥有构造函数

  void printA() {
    print('A');
  }

  void run() {
    print('A is running');
  }
}

mixin MixinB {
  String name = 'MixinB';

  void printB() {
    print('B');
  }

  void run() {
    print('B is running');
  }
}

class MyClass with MixinA, MixinB {}

void main() {
  var c = new MyClass();
  c.printA();
  c.printB();

  // 后引入的混入，会覆盖之前引入的混入中重复的内容
  print(c.name); // MixinB
  c.run(); // B is running
}
