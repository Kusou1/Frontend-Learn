import 'lib/Father.dart';
import 'lib/Son.dart';

// 对象 继承
// 子类通过extends 关键字继承父类
// 继承后，子类可以使用父类中，可见的属性和方法
// 子类中可以通过@override 元数据来标记覆写方法
// 覆写方法：子类中与父类中同名的方法
// 子类中可以通过super关键字来引用父类中， 可见的内容
// 属性和方法

void main() {
  var f = new Father('皇帝');
  print(f.name);

  // var s = new Son('皇帝');
  var s = new Son.origin('卖草鞋的');
  print(s.name);
  // print(s._money); // 子类不能访问父类中的私有内容
  print(s.getMoney);
  s.say();
}
