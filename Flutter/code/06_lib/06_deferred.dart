import 'lib/function.dart' deferred as func;

// 延迟引入（懒加载） deferred  loadLibrary
void main() {
  // func.hello();

  print('1');
  greet();
  print('2');
  print('3');
}

Future greet() async {
  await func.loadLibrary(); // 加载异步加载的库
  func.hello();
}
