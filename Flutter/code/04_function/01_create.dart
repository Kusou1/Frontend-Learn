// Dart 中声明函数，不需要 function 关键字
void printInfo() {
  print('Hello, World');
}

// 返回值，与函数声明的类型要一致
int getNum() {
  // return 'Hello'; // 不能返回字符串类型
  return 1;
}

void main() {
  // 调用函数
  printInfo();

  print(getNum());

  // 匿名函数
  var myPrint = (value) {
    print(value);
  };
  List fruits = ['苹果', '香蕉', '猕猴桃'];
  fruits.forEach(myPrint);

  // 箭头函数
  fruits.forEach((element) => { 
    print(element) // 箭头函数中，不能写结束的分号(;)
  });
  fruits.forEach((element) => print(element));

  // 立即执行函数
  ((int n){
    print(n);
  }) (17);
}