import 'lib/Person.dart';

// Dart 与 TypeScript 不同，没有访问修饰符(public、protected、private)
// Dart 默认的访问修饰符是公开的 （public）
// 如果属性或方法以_（下划线)开通，则表示私有(private)
// 只有把类单独抽离出去，私有属性和方法才起作用

void main() {
  var p = new Person('张三');
  print(p.name);

  // 访问私有属性
  // print(p._money);

  print(p.getMoney());

  // 访问私有方法
  // print(p._wife());
}
