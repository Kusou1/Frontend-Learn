// 元数据
// 以@开头，可以给代码标记一些额外的信息
// 元数据可以用来库，类，构造器，函数，字段，参数或变量声明的前面

// @override （重写）
// 某方法添加该注解后，表示重写了父类中的同名方法

// @required (必填)
// 可以通过@required来注解Dart中的命名参数，用来指定它的必填参数

// @deprecated (弃用)
// 若某类或者某方法加上该注解后，表示此方法或类不再建议使用

class Phone {
  // 这是旧版本中的开机方法，会在将来的版本中移除
  @deprecated
  activate() {
    turnOn();
  }

  turnOn() {
    print('开机');
  }
}

void main() {
  var p = new Phone();
  p.activate();

  p.turnOn();
}
