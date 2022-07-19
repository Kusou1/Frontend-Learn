void main() {
  // 变量是一个引用，Dart万物皆为对象，变量存储的是对象的引用
  // 变量名是大小写敏感的
  // 变量的默认值是null
  // Dart变量的值不会进行隐式转换
  // 声明变量
  var age = '18';
  print(age);

  // 指定数据类型的方式
  String name = '张三';
  print(name);

  // dynamic myname = '李四';
  dynamic myname = 20;
  print(myname);

  // 变量的默认值
  var defaultName;
  print(defaultName);

  // 变量名大小写敏感
  var Age = 30;
  print(Age);

  // 常量
  const n1 = 1;
  // n1 = 6; // 常量一旦声明不能再改
  print(n1);

  final n2 = 2;
  print(n2);

  // const time = DateTime.now(); // 报错 - 无法将运行时的值分配给const变量
  // final time = DateTime.now(); // 成功 - 可以将运行时的值分配给final变量
}