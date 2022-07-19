void main() {
  var nums = [1, 2, 3];

  // for 循环进行遍历
  for (var i = 0; i < nums.length; i++) {
    print(nums[i]);
  }

  // for ... in
  for (var item in nums) {
    print(item);
  }

  // forEach
  nums.forEach((element) {
    print(element);
  });

  // var newNums = [];
  // for (var i = 0; i < nums.length; i++) {
  //   newNums.add(nums[i] * nums[i]);
  // }
  // print(newNums);

  // map 循环之后会得到一个处理后的列表
  var newNums = nums.map((e) {
    return e * e;
  });
  print(newNums.toList());

  // where() 返回符合条件的元素
  // 判断数字是否是奇数
  bool isOdd(n) => n % 2 == 1;
  var oddNum = nums.where((element) => isOdd(element));
  print(oddNum.toList());

  // 使用 any() 来检测是否有奇数（至少一个）
  print(nums.any(isOdd));

  // 使用 every() 来判断是否都是奇数
  print(nums.every(isOdd));

  // 扩展
  var pairs = [[1, 2], [3, 4]];
  var flattened = pairs.expand((element) => element).toList();
  print(flattened); // [1, 2, 3, 4]

  // 折叠 - 对列表中的每一个元素，做一个累计操作
  int result = nums.fold(2, (p, element) => p * element); // 2 * (1*2*3)
  print(result);
}