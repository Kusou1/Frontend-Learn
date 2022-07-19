import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("GridView"),
        leading: Icon(Icons.menu),
        actions: [
          Icon(Icons.settings)
        ],
        elevation: 0.0,
        centerTitle: true,
      ),
      body: GridViewDemo()
    );
  }
}

class GridViewDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(10),
      child: 
      // GridView(
      //   gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
      //     crossAxisCount: 2, // 指定列数
      //     mainAxisSpacing: 20, // 主轴方向的间距
      //     crossAxisSpacing: 10, // 交叉轴的间距
      //     childAspectRatio: 1.5, // 子组件的宽高比例
      //   ),
      //   children: [
      //     Container(color: Colors.tealAccent),
      //     Container(color: Colors.amberAccent),
      //     Container(color: Colors.redAccent),
      //     Container(color: Colors.blueGrey),
      //     Container(color: Colors.purpleAccent),
      //     Container(color: Colors.lightGreenAccent),
      //     Container(color: Colors.lightGreen),
      //     Container(color: Colors.black54),
      //     Container(color: Colors.yellowAccent),
      //     Container(color: Colors.grey),
      //     Container(color: Colors.deepOrangeAccent),
      //   ],
      // ),
      GridView(
        gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(
          maxCrossAxisExtent: 190, // 子组件的宽度
          mainAxisSpacing: 30,
          crossAxisSpacing: 10,
          childAspectRatio: 0.8,
        ),
        children: [
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

        ],
      )
    );
  }
}