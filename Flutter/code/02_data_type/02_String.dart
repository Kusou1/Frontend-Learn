void main() {
  // 声明字符串
  // var str1 = 'Hello, World'; // 单引号
  // print(str1);
  // var str2 = "你好，世界"; // 双引号
  // print(str2);

  String str1 = 'Hello, World'; // 单引号
  print(str1);
  String str2 = "你好，世界"; // 双引号
  print(str2);

  // 通过三个引号声明字符串 包含换行符的字符串
  String str3 = '''Hello
  World
  ''';
  print(str3);

  // 常见操作
  // 字符串拼接
  print(str1 + str2);
  print("$str1 $str2");

  // 字符串的分隔
  print(str1.split(''));

  // 字符串的裁切  去掉前后多余空格
  print('  abc   '.trim());

  // 判断字符串是否为空
  print(''.isEmpty);
  print(''.isNotEmpty);

  // 字符串替换
  print(str1.replaceAll('World', 'Dart'));
  // 支持正则替换
  print('h1k2d3n4n5n'.replaceAll(RegExp(r'\d+'), '_'));

  // 通过正则匹配手机号
  var isPhone = RegExp(r'^1\d{10}$');
  print(isPhone.hasMatch('13333333333'));
  print(isPhone.hasMatch('1333333333'));

  // 查找字符串
  print(str1.contains('e'));
  // 定位字符串
  print(str1.indexOf('e'));
}