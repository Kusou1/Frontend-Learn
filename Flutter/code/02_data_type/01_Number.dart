void main() {
  // 声明整数
  int count = 3;
  print(count);

  // 声明浮点数
  double price = 3.7;
  print(price);

  // 声明数值类型
  num n1 = 3.7;
  print(n1);

  // 类型转换
  print(n1.toString());
  print(3.8.toInt()); // 向下取整

  // 四舍五入
  print(3.1415926.round());
  print(3.1415926.toStringAsFixed(4));

  // 返回余数
  print(10.remainder(4));

  // 数字比较: 0: 相同，1：大于，-1：小于
  print(10.compareTo(12));
  // 返回最大公约数
  print(12.gcd(18));

  // 科学计数法
  print(1000.toStringAsExponential(1));
}