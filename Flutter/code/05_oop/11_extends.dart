import 'lib/Father.dart';
import 'lib/Son.dart';

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