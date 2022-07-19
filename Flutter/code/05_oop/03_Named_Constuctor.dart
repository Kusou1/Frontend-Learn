// 命名构造函数
// 在类中使用命名构造器（类名.函数名）实现多个构造器，可以提供额外的清晰度
class Point {
  num x, y;

  Point(this.x, this.y);

  // 命名构造函数
  Point.origin() {
    x = 0;
    y = 0;
  }

  // 命名构造函数
  Point.fromJson({x: 0, y: 0}) {
    this.x = x;
    this.y = y;
  }
}

void main() {
  // 默认坐标
  Point p1 = new Point.origin();
  print(p1.x); // 0

  // 手动设置坐标
  Point p2 = new Point.fromJson(x: 6, y: 6);
  print(p2.x); // 6
}
