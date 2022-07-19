void main() {
  // 必填参数
  // String userInfo(String name) {
  //   return '你好：$name';
  // }
  // String res = userInfo('张三');

  // 可选参数
  // String userInfo(String name, [int age = 0]) {
  //   return '你好：$name, 年龄：$age';
  // }

  // String res = userInfo('张三', 20);
  // print(res);

  // 命名参数
  String userInfo(String name, {int age = 0}) {
    return '你好：$name, 年龄：$age';
  }

  // 命名参数调用时，需要与声明时的形参一致
  String res = userInfo('张三', age: 20);
  print(res);

  // 函数参数
  var myPrint = (value) {
    print(value);
  };
  List fruits = ['苹果', '香蕉', '猕猴桃'];
  // 将匿名函数 myPrint 传递给函数 forEach
  fruits.forEach(myPrint);
}