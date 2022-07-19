class Father {
  String name = '刘备';
  num _money = 10000;
  String job;

  Father(this.job);

  // 命名构造函数
  Father.origin(this.job);

  say() {
    print('我是 $name');
  }

  get getMoney {
    return this._money;
  }
}