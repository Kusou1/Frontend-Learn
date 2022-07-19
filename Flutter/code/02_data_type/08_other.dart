void main() {
  var str = '😀';
  print(str);
  print(str.length); // UTF-16  2
  print(str.runes.length); // UTF-32   1
  
  // 符文
  // Runes 可以将 UTF-32 字符集表示的内容转成符号
  Runes input = new Runes('\u{1f680}');
  print(new String.fromCharCodes(input));

  // Symbol 用#开头表示的标识符
  var a = #abc;
  print(a);
  var b = new Symbol('abc');
  print(b);

  print(#abc == new Symbol('abc'));

  // 声明动态类型的变量 表示数据的类型是可变的
  dynamic foo = 'bar';
  foo = 123;
  print(foo);
}