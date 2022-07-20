import 'package:flutter/material.dart';

// 命名路由
// routes 路由表(map类型)
// initialRoute 初始化路由
// onUnknownRoute (未知路由 - 404)
// 跳转到命名路由 (Navigator.pushNamed(context,'路由名称'))
class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("首页"),
        leading: Icon(Icons.menu),
        actions: [Icon(Icons.settings)],
        elevation: 0.0,
        centerTitle: true,
      ),
      body: Center(
        child: Column(
          children: [
            ElevatedButton(
              onPressed: () => Navigator.pushNamed(context, 'product'),
              child: Text('跳转'),
            ),
            ElevatedButton(
              onPressed: () => Navigator.pushNamed(context, 'user'),
              child: Text('未知路由'),
            ),
          ],
        ),
      ),
    );
  }
}

class Product extends StatelessWidget {
  const Product({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("商品页"),
        leading: Icon(Icons.menu),
        actions: [Icon(Icons.settings)],
        elevation: 0.0,
        centerTitle: true,
      ),
      body: Center(
        child: Column(
          children: [
            ElevatedButton(
              onPressed: () => Navigator.pop(context),
              child: Text('返回'),
            )
          ],
        ),
      ),
    );
  }
}

class UnknowPage extends StatelessWidget {
  const UnknowPage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("404"),
        leading: Icon(Icons.menu),
        actions: [Icon(Icons.settings)],
        elevation: 0.0,
        centerTitle: true,
      ),
      body: Center(
        child: Column(
          children: [
            ElevatedButton(
              onPressed: () => Navigator.pop(context),
              child: Text('返回'),
            )
          ],
        ),
      ),
    );
  }
}
