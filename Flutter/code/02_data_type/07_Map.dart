void main() {
  // 字面量
  var person = {
    'name': '张三', 
    'age': 20
  };
  print(person);

  // 构造函数
  var p = Map();
  p['name'] = '李四';
  p['age'] = 22;
  print(p);

  // 访问属性
  print(p['name']);

  // 判断 Map 中的 key 是否存在
  print(p.containsKey('name'));
  print(p.containsKey('aaa'));

  // 赋值
  // 如果 key 不存在，我们才赋值（如果key已经存在，则不赋值）
  p.putIfAbsent('gender', () => '男');
  print(p);
  p.putIfAbsent('gender', () => '女');
  print(p);

  // 获取 Map 中所有的 key
  print(p.keys);
  // 获取 Map 中所有的 value
  print(p.values);

  // 根据条件进行删除
  p.removeWhere((key, value) => key == 'gender');
  print(p);
}