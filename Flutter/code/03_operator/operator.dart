void main() {
  // 地板除
  print(7 ~/ 4);

  // 类型判断运算符
  List list = [];
  if (list is List) {
    print('list is List');
  } else {
    print('list is not List');
  }

  if (list is! List) {
    print('不是列表');
  } else {
    print('是列表');
  }

  // 避空运算符
  print(1 ?? 3); // 返回 1
  print(null ?? 12); // 返回 12

  var foo;
  // foo = 6;
  print(foo ?? 0); // 如果 foo 是 null，则返回 0

  var a;
  // if (a == null) {
  //   a = 3;
  // }
  a ??= 3;
  print(a);
  a ??= 6; // 如果 a 不是 null。则赋值失败
  print(a);

  // 条件属性运算符（保护可能为空的属性）
  var m = new Map();
  print(m.length);
  var obj;
  // print(obj.length); // The getter 'length' was called on null.
  print(obj?.length);

  // 级联运算符
  // Set s = new Set();
  // s.add(1);
  // s.add(2);
  // s.add(3);
  // s.remove(2);
  // print(s);

  Set s = new Set();
  s..add('a')..add('b')
   ..add('c')
   ..remove('b');
  print(s);
}