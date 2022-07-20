import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'dart:io';

// Material提供安卓风格的组件
// Cuperitina提供ios风格的组件

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Cupertino"),
          leading: Icon(Icons.menu),
          actions: [Icon(Icons.settings)],
          elevation: 0.0,
          centerTitle: true,
        ),
        body: MyBody());
  }
}

class MyBody extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    Widget dialogBox;
    // 判断当前的平台信息
    if (Platform.isIOS) {
      // 加载 iOS 风格的组件
      dialogBox = CupertinoDemo();
    } else if (Platform.isAndroid) {
      // 加载 Android 风格的组件
      dialogBox = MaterialDemo();
    }

    return Container(
        child:
            Column(mainAxisAlignment: MainAxisAlignment.spaceAround, children: [
      // 安装风格的组件
      Text('Material - 安卓风格'),
      MaterialDemo(),

      // iOS 风格的组件
      Text('Cupertino - iOS 风格'),
      CupertinoDemo()
    ]));
  }
}

class MaterialDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        child:
            AlertDialog(title: Text('提示'), content: Text('确认删除吗？'), actions: [
      TextButton(
          child: Text('取消'),
          onPressed: () {
            print('取消的逻辑');
          }),
      TextButton(
          child: Text('确认'),
          onPressed: () {
            print('确认的逻辑');
          }),
    ]));
  }
}

class CupertinoDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        child: CupertinoAlertDialog(
      title: Text('提示'),
      content: Text('确认删除吗？'),
      actions: [
        CupertinoDialogAction(
            child: Text('取消'),
            onPressed: () {
              print('取消的逻辑');
            }),
        CupertinoDialogAction(
            child: Text('确认'),
            onPressed: () {
              print('确认的逻辑');
            })
      ],
    ));
  }
}
