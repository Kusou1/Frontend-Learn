class Phone {
  // 这是旧版本中的开机方法，会在将来的版本中移除
  @deprecated
  activate() {
    turnOn();
  }

  turnOn() {
    print('开机');
  }
}

void main() {
  var p = new Phone();
  p.activate();

  p.turnOn();
}