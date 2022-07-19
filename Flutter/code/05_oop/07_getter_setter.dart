// getter获取器是通过get关键字修饰的方法
// 函数没有小括号，访问时也没有小括号，像访问属性一样
// setter 修改器是通过set关键字修饰的方法
// 访问时，像设置属性一样给函数传参
class Circle {
  final double PI = 3.1415;
  num r;

  Circle(this.r);

  // num area() {
  //   return this.PI * this.r * this.r;
  // }

  // 使用 get 声明的方法，不能有小括号
  num get area {
    return this.PI * this.r * this.r;
  }

  // Setter
  set setR(value) {
    this.r = value;
  }
}

void main() {
  var c = new Circle(10);
  // print(c.area());

  // 通过 Setter 修改属性
  c.setR = 20;

  print(c.area); // 使用getter方法像访问属性一样
}
