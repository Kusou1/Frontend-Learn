import 'lib/Person.dart';

void main() {
  var p = new Person('张三');
  print(p.name);

  // 访问私有属性
  // print(p._money);

  print(p.getMoney());

  // 访问私有方法
  // print(p._wife());
}