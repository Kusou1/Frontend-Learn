class SomeBaseClass {
  // ...
}

class Foo<T extends SomeBaseClass> {
  String toString() => "Instance of 'Foo<$T>'";
}

// 子类
class Extender extends SomeBaseClass {

}

class AnotherClass {
  // ...
}

void main() {
  var someBaseClassFoo = Foo<SomeBaseClass>();
  print(someBaseClassFoo);

  var extenderFoo = Foo<Extender>();
  print(extenderFoo);

  var foo = Foo();
  print(foo);

  // var f = Foo<AnotherClass>(); // 类型不对，报错
  // print(f);
}