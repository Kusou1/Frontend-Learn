// class Point {
//   // num x;
//   // num y;
//   num x, y;

//   // 声明普通构造函数
//   Point() {
//     print('我是默认构造函数，实例化时，会第一个被调用');

//     // this 可以省略
//     // x = 0;
//     // y = 0;

//     // 当命名指向有歧义时，this 不能省略
//     this.x = 0;
//     this.y = 0;
//   }
// }

// class Point {
//   num x, y;

//   // 声明普通构造函数
//   Point(num x, num y) {
//     // 当命名指向有歧义时，this 不能省略
//     this.x = x;
//     this.y = y;
//   }
// }

class Point {
  num x, y;

  // 声明普通构造函数
  Point(this.x, this.y);
}

void main() {
  // var p = new Point();
  // print(p.x);

  var p = new Point(3, 4);
  print(p.y);
}