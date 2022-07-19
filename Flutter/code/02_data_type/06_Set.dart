void main() {
  // 字面量
  var nums = <int>{1, 2, 3};
  print(nums);

  // 构造函数
  var fruits = new Set();
  fruits.add('香蕉');
  fruits.add('苹果');
  fruits.add('橘子');
  print(fruits);
  print(fruits.toList());

  List myNums = [1, 2, 3, 3, 4];
  print(myNums.toSet()); // 可以将重复的元素过滤掉

  // 集合特有的操作
  var caocao = new Set();
  caocao.addAll(['张辽', '司马懿', '关羽']);

  var liubei = new Set();
  liubei.addAll(['关羽', '张飞', '诸葛亮']);

  // 求交集
  print(caocao.intersection(liubei));

  // 求并集
  print(caocao.union(liubei));

  // 求差集
  print(caocao.difference(liubei));

  // 返回第一个元素
  print(caocao.first);
  // 返回最后一个
  print(caocao.last);

  // 集合不能通过下标取值
  // print(caocao[1]);
}