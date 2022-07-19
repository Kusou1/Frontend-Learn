// 1. 抽象类，必须通过 abstract 关键字声明
// 2. 抽象类中，可以有抽象方法，也可以没有抽象方法，一般来说，抽象类都有抽象方法。
// 抽象类的作用是充当普通类的模板，约定一些必要的属性和方法
// 抽象方法是指没有方法体的方法
// 抽象类不能被实例化
// 抽象类可以被普通类继承
// 如果普通类继承抽象类，必须实现抽象类中所有的抽象方法
// 抽象类还可以充当接口被实现
// 如果把抽象类当作接口实现的话，普通类必须得实现抽象类里面定义的所有属性和方法
abstract class Phone {
  // 声明抽象方法
  void processor(); // 手机的处理器

  void camera(); // 手机的摄像头

  void info() {
    print('我是抽象类中的一个普通方法');
  }
}

class Xiaomi extends Phone {
  // 普通类继承了抽象类，就必须实现抽象类中所有的抽象方法
  @override
  void processor() {
    print('骁龙888');
  }

  @override
  void camera() {
    print('三星摄像头');
  }

  // 普通类中，不能有抽象方法
  // void aaa();
}

class Huawei extends Phone {
  // 普通类继承了抽象类，就必须实现抽象类中所有的抽象方法
  @override
  void processor() {
    print('麒麟990');
  }

  @override
  void camera() {
    print('徕卡摄像头');
  }
}

void main() {
  // 抽象类，不能被实例化
  // var p1 = new Phone();

  Xiaomi m = new Xiaomi();
  m.processor();
  m.camera();
  m.info();

  Huawei h = new Huawei();
  h.processor();
  h.camera();
  h.info();
}
