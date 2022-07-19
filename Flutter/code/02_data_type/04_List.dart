void main() {
  // 声明List - 字面量  就是Dart中的数组
  List l1 = ['a', 'b', 'c', 1, 2, 3];
  print(l1);

  List l2 = <int>[1, 2, 3]; // 限定元素类型的声明方式
  print(l2);

  // 通过构造函数的声明方式 growable代表数组是否具有成长性 数组就可以变更大小
  var l3 = new List.empty(growable: true);
  l3.add(1);
  print(l3);

  // filled代表填充数组
  var l4 = new List.filled(3, 6);
  print(l4);   //[6,6,6]

  // 扩展操作符
  var l5 = [0, ...l4];
  print(l5);  // [0,6,6,6]

  var l6;
  var l7 = [7, ...?l6];  // null 类型不能用扩展运算符
  print(l7);

  // 返回列表的长度
  print(l1.length);

  // 列表的反转
  print(l1.reversed.toList());

  // 添加元素，添加多个元素
  l3.addAll([4,5,6]);
  print(l3);

  // 删除元素
  l3.remove(6);
  print(l3);
  // 根据下标删除元素
  l3.removeAt(1);
  print(l3);

  // 在指定的位置添加元素
  l3.insert(1, 9);
  print(l3);

  // 清空
  l3.clear();
  print(l3.length);
  print(l3.isEmpty);

  // 合并元素
  List words = ['Hello', 'World'];
  print(words.join('-'));
}