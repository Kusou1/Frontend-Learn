import 'package:flutter/material.dart';

// Route 一个路由是一个屏幕或页面的抽象
// Navigator 管理路由的组件。Navigator可以通过路由入栈和出栈实现路由之间的跳转
class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("匿名路由"),
          leading: Icon(Icons.menu),
          actions: [Icon(Icons.settings)],
          elevation: 0.0,
          centerTitle: true,
        ),
        body: HomePage());
  }
}

class HomePage extends StatelessWidget {
  const HomePage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Center(
          child: ElevatedButton(
        onPressed: () {
          return Navigator.push(
              context, MaterialPageRoute(builder: (context) => Product()));
        },
        child: Text('跳转到商品页面'),
      )),
    );
  }
}

class Product extends StatelessWidget {
  const Product({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("商品页面"),
        leading: Icon(Icons.menu),
        actions: [Icon(Icons.settings)],
        elevation: 0.0,
        centerTitle: true,
      ),
      body: Container(
        child: Center(
            child: ElevatedButton(
                onPressed: () => Navigator.pop(context), child: Text('返回'))),
      ),
    );
  }
}
