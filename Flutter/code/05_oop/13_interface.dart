// 接口在Dart中就是一个类
// 与Java不同，Java中的接口需要用interface关键字声明；Dart中不需要
// 接口可以是任意类，但一般使用抽象类做接口
// 一个接口可以实现（implements）多个接口，多个接口用逗号分隔
// 接口可以看成一个个小零件。类实现接口就相当于组装零件
// 普通类实现接口后，必须重写接口中所有属性和方法

// 手机的处理器
abstract class Processor {
  String cores; // 内核：2核，4核
  arch(String name); // 芯片制程：7nm, 5nm
}

// 手机的摄像头
abstract class Camera {
  String resolution; // 分辨率：1000万，3000万
  brand(String name); // 品牌：三星，徕卡，蔡司
}

// 通过普通类实现接口
class Phone implements Processor, Camera {
  @override
  String cores;

  @override
  String resolution;

  Phone(this.cores, this.resolution);

  @override
  arch(String name) {
    print('芯片制程：' + name);
  }

  @override
  brand(String name) {
    print('相机品牌：' + name);
  }
}

void main() {
  Phone p = new Phone('4核', '3000万');
  p.arch('5nm');
  p.brand('徕卡');
}
