import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("SingleChildScrollView"),
        leading: Icon(Icons.menu),
        actions: [
          Icon(Icons.settings)
        ],
        elevation: 0.0,
        centerTitle: true,
      ),
      body: SingleChildScrollViewDemo()
    );
  }
}

class SingleChildScrollViewDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        // 验证水平滚动
        SingleChildScrollView(
          scrollDirection: Axis.horizontal,
          padding: EdgeInsets.all(10),
          reverse: true,
          child: Row(
            children: [
              OutlinedButton(
                onPressed: () {},
                child: Text('按钮一')
              ),
              OutlinedButton(
                onPressed: () {},
                child: Text('按钮二')
              ),
              OutlinedButton(
                onPressed: () {},
                child: Text('按钮三')
              ),
              OutlinedButton(
                onPressed: () {},
                child: Text('按钮四')
              ),
              OutlinedButton(
                onPressed: () {},
                child: Text('按钮五')
              ),
              OutlinedButton(
                onPressed: () {},
                child: Text('按钮六')
              ),
            ]
          ),
        ),
        // 垂直方向的滚动
        SingleChildScrollView(
          scrollDirection: Axis.vertical,
          padding: EdgeInsets.all(10),
          reverse: true,
          physics: BouncingScrollPhysics(),
          child: Column(
            children: List.generate(
              100, 
              (index) => OutlinedButton(
                onPressed: () {},
                child: Text('按钮$index')
              ),
            )
          ),
        )
      ],
    );
  }
}