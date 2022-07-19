import 'lib/common.dart';
import 'lib/function.dart' as func; // 给库添加前缀，解决命名冲突问题

void main() {
  f1();

  func.f1();
}