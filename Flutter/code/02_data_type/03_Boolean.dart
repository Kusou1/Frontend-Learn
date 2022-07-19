void main() {
  // 声明布尔类型
  bool flag1 = true;
  print(flag1);

  bool flag2 = false;
  print(flag2);

  // 显式地进行判断
  var flag3;
  if (flag3 == null) {
    print('真');
  } else {
    print('假');
  }

  // 一些特殊的判断场景
  var n1 = 0 / 0;
  print(n1);
  print(n1.isNaN);
}