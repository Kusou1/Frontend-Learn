enum Color { red, green, blue }

// 枚举是数量固定的常量值，通过enum关键字声明
void main() {
  // 通过 index 返回枚举中具体常量的值
  print(Color.green.index);

  // 通过 values 返回常量列表
  print(Color.values);
  List<Color> colors = Color.values;
  print(colors);

  // 通过下标，访问列表中的内容
  print(colors[0]);
  // 通过 forEach 去遍历列表的内容
  colors.forEach((element) {
    print('value: $element, index: ${element.index}');
  });
}
