import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("首页"),
        leading: Icon(Icons.menu),
        actions: [
          Icon(Icons.settings)
        ],
        elevation: 0.0,
        centerTitle: true,
      ),
      body: Center(
        child: Column(
          children: [
            ElevatedButton(
              onPressed: () => Navigator.pushNamed(context, '/product'), 
              child: Text('跳转'),
            ),
            ElevatedButton(
              onPressed: () => Navigator.pushNamed(context, '/product/1'), 
              child: Text('商品1'),
            ),
            ElevatedButton(
              onPressed: () => Navigator.pushNamed(context, '/product/2'), 
              child: Text('商品2'),
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
        actions: [
          Icon(Icons.settings)
        ],
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

class ProductDetail extends StatelessWidget {
  // product/1
  final String id;

  const ProductDetail({Key key, this.id}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("商品详情页"),
        leading: Icon(Icons.menu),
        actions: [
          Icon(Icons.settings)
        ],
        elevation: 0.0,
        centerTitle: true,
      ),
      body: Center(
        child: Column(
          children: [
            Text('当前商品的id是：'+this.id),
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
        actions: [
          Icon(Icons.settings)
        ],
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