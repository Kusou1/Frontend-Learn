// String getData(String value) {
//   return value;
// }

// int getData(int value) {
//   return value;
// }

// 不指定数据类型的函数
// getData(value) {
//   return value;
// }

// 泛型函数
// T getData<T>(T value) {
//   return value;
// }

// 只约定参数类型，不约定函数返回值的类型
getData<T>(T value) {
  return value;
}

void main() {
  // print(getData('Hello'));
  // print(getData(10));

  // 调用泛型函数
  print(getData<int>(20));

  print(getData<String>('Hello'));
}