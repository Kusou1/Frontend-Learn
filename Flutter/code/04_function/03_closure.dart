// 全局变量
var globalNum = 100;

void main() {
  printInfo() {
    // 局部变量
    var localNum = 10;
    localNum--;
    print(localNum);
    print(globalNum); // 我们可以在函数作用域中，访问全局变量
  }

  printInfo();
  // print(localNum); // 不能在全局作用域中，访问局部变量

  // 闭包
  printInfo();
  printInfo();

  parent() {
    var money = 1000;
    return () {
      money -= 100;
      print(money);
    };
  }

  var p = parent();
  p();
  p();
  p();
}