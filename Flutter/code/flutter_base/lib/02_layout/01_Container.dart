import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Text"),
          leading: Icon(Icons.menu),
          actions: [Icon(Icons.settings)],
          elevation: 0.0,
          centerTitle: true,
        ),
        body: ContainerDemo());
  }
}

// Container类似Flutter中的盒模型
class ContainerDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        child: Text(
          "Flutter 是谷歌开发的一款开源、免费的，基于 Dart 语言的移动 UI 框架，可以快速在 iOS 和 Android 上构建高质量的原生应用。",
          style: TextStyle(fontSize: 20),
        ),
        // width: 200,
        // height: 200,
        width: double.infinity, // infinity无限，父元素的宽
        height: double.infinity,
        padding: EdgeInsets.all(10.0), // 边缘填充
        margin: EdgeInsets.fromLTRB(
            10.0, 30.0, 0.0, 5.0), //fromLTRB Left Top Right Bottom
        alignment: Alignment.center,
        // 平移
        // transform: Matrix4.translationValues(100, 0, 0),
        // 旋转
        // transform: Matrix4.rotationZ(-0.1),
        // 斜切
        transform: Matrix4.skewX(0.1),
        decoration: BoxDecoration(
            // border: Border(
            //     top: BorderSide(width: 10.0, color: Colors.red),
            //     bottom: BorderSide(width: 10.0, color: Colors.red),
            //     left: BorderSide(width: 10.0, color: Colors.red),
            //     right: BorderSide(width: 10.0, color: Colors.red)),
            border: Border.all(width: 10.0, color: Colors.blue),
            // borderRadius: BorderRadius.all(Radius.circular(30)))
            borderRadius: BorderRadius.only(topLeft: Radius.circular(30)),
            // color: Colors.lightGreen),
            gradient: LinearGradient(
                colors: [Colors.blue, Colors.white]))); // gridient声明后color失效
  }
}
