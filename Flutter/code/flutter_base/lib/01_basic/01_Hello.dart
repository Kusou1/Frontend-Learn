import 'package:flutter/material.dart';

// scaffold使用组件
class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("首页"),
          leading: Icon(Icons.menu),
          actions: [Icon(Icons.settings)],
          elevation: 0.0, //去掉阴影
          centerTitle: true, // title居中
        ),
        body: HelloFlutter());
  }
}

class HelloFlutter extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        child: Center(
            child: Text(
      "Hello Flutter",
      textDirection: TextDirection.ltr,
    )));
  }
}
