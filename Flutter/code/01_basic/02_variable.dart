void main() {
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
}