import 'Father.dart';

class Son extends Father {
  String name = "刘禅";

  // 通过 super 继承父类的普通构造函数
  Son(String job) : super(job);

  // 继承命名构造函数
  // Son(String job) : super.origin(job);
  Son.origin(String job) : super.origin(job);

  @override
  say() {
    super.say();
    print('我是 刘禅, 我爹是 ${super.name}，他的工作${super.job}');
  }
}