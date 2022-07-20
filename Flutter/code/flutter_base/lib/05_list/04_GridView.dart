import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("GridView"),
          leading: Icon(Icons.menu),
          actions: [Icon(Icons.settings)],
          elevation: 0.0,
          centerTitle: true,
        ),
        body: GridViewBuilderDemo());
  }
}

class GridViewCountDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: GridView.count(
        children:
            List.generate(10, (index) => Image.asset('images/flutter.jpg')),
        crossAxisCount: 2,
        mainAxisSpacing: 20,
        crossAxisSpacing: 20,
        padding: EdgeInsets.symmetric(horizontal: 40),
        childAspectRatio: 1.5,
      ),
    );
  }
}

class GridViewExtendDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: GridView.extent(
        children:
            List.generate(10, (index) => Image.asset('images/flutter.jpg')),
        maxCrossAxisExtent: 100, // 子组件的宽度
        mainAxisSpacing: 20,
        crossAxisSpacing: 20,
        padding: EdgeInsets.symmetric(horizontal: 40),
        // childAspectRatio: 1.5,
      ),
    );
  }
}

class GridViewBuilderDemo extends StatelessWidget {
  final List<dynamic> _tiles = [
    Container(color: Colors.tealAccent),
    Container(color: Colors.amberAccent),
    Container(color: Colors.redAccent),
    Container(color: Colors.blueGrey),
    Container(color: Colors.purpleAccent),
    Container(color: Colors.lightGreenAccent),
    Container(color: Colors.lightGreen),
    Container(color: Colors.black54),
    Container(color: Colors.yellowAccent),
    Container(color: Colors.grey),
    Container(color: Colors.deepOrangeAccent),
  ];

  @override
  Widget build(BuildContext context) {
    return Container(
      child: GridView.builder(
        padding: EdgeInsets.symmetric(horizontal: 40),
        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2,
            mainAxisSpacing: 20,
            crossAxisSpacing: 20,
            childAspectRatio: 1.0),
        itemCount: _tiles.length,
        itemBuilder: (context, index) {
          return _tiles[index];
        },
        physics: BouncingScrollPhysics(), // 反弹效果
        // physics: ClampingScrollPhysics(), // 夹住的效果
        // physics: AlwaysScrollableScrollPhysics(), // 滚动
        // physics: NeverScrollableScrollPhysics(), // 禁止滚动
      ),
    );
  }
}
