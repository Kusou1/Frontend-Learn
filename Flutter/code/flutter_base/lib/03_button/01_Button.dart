import 'dart:ui';

import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Button"),
        leading: Icon(Icons.menu),
        actions: [Icon(Icons.settings)],
        elevation: 0.0,
        centerTitle: true,
      ),
      body: ButtonDemo(),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        tooltip: 'Increment',
        child: Icon(Icons.add),
        backgroundColor: Colors.green,
        elevation: 0,
      ),
    );
  }
}

class ButtonDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        padding: EdgeInsets.all(10),
        child: Wrap(
          children: [
            TextButton(
                onPressed: () {
                  print('点击 TextButton');
                },
                onLongPress: () {
                  print('长按 TextButton');
                },
                child: Text('TextButton')),
            ElevatedButton(
                onPressed: () {
                  print('点击 ElevatedButton');
                },
                onLongPress: () {
                  print('长按 ElevatedButton');
                },
                child: Text('ElevatedButton')),
            OutlinedButton(
                onPressed: () {
                  print('点击 OutlinedButton');
                },
                onLongPress: () {
                  print('长按 OutlinedButton');
                },
                child: Text('OutlinedButton')),
            OutlinedButton(
                onPressed: () {
                  print('点击 OutlinedButton');
                },
                onLongPress: () {
                  print('长按 OutlinedButton');
                },
                child: Text('轮廓按钮'),
                style: ButtonStyle(
                  textStyle: MaterialStateProperty.all(TextStyle(fontSize: 30)),
                  foregroundColor: MaterialStateProperty.resolveWith((states) {
                    if (states.contains(MaterialState.pressed)) {
                      // 按下按钮时的前景色
                      return Colors.red;
                    }
                    // 默认状态的颜色
                    return Colors.blue;
                  }),
                  backgroundColor: MaterialStateProperty.resolveWith((states) {
                    if (states.contains(MaterialState.pressed)) {
                      // 按下按钮时的前景色
                      return Colors.yellow;
                    }
                    // 默认状态的颜色
                    return Colors.white;
                  }),
                  shadowColor: MaterialStateProperty.all(Colors.yellow), // 阴影颜色
                  elevation: MaterialStateProperty.all(20),
                  side: MaterialStateProperty.all(BorderSide(
                    color: Colors.green,
                    width: 2,
                  )),
                  // 声明按钮形状
                  shape: MaterialStateProperty.all(StadiumBorder(
                      side: BorderSide(
                    color: Colors.green,
                    width: 2,
                  ))),
                  // 设置按钮大小
                  minimumSize: MaterialStateProperty.all(Size(200, 100)),
                  // 设置水波纹的颜色
                  overlayColor: MaterialStateProperty.all(Colors.purple),
                )),
            OutlinedButtonTheme(
                data: OutlinedButtonThemeData(
                    style: ButtonStyle(
                  overlayColor: MaterialStateProperty.all(Colors.red),
                )),
                child: OutlinedButton(
                    onPressed: () {
                      print('点击 OutlinedButton');
                    },
                    onLongPress: () {
                      print('长按 OutlinedButton');
                    },
                    child: Text('轮廓按钮'),
                    style: ButtonStyle(
                      overlayColor: MaterialStateProperty.all(Colors.blue),
                    ))),
            // 图标按钮
            IconButton(
              icon: Icon(Icons.add_alarm),
              onPressed: () {
                print('IconButton');
              },
              color: Colors.red,
              splashColor: Colors.lightBlue,
              highlightColor: Colors.purple,
              tooltip: "怎么了",
            ),
            TextButton.icon(
              icon: Icon(Icons.add_circle),
              label: Text('文本按钮'),
              onPressed: () {},
            ),
            ElevatedButton.icon(
              icon: Icon(Icons.add_circle),
              label: Text('凸起按钮'),
              onPressed: () {},
            ),
            OutlinedButton.icon(
              icon: Icon(Icons.add_circle),
              label: Text('轮廓按钮'),
              onPressed: () {},
            ),
            // 按钮组
            Container(
                color: Colors.pink[100],
                width: double.infinity,
                child: ButtonBar(
                  children: [
                    ElevatedButton(
                      onPressed: () {},
                      child: Text('按钮一'),
                    ),
                    ElevatedButton(
                      onPressed: () {},
                      child: Text('按钮二'),
                    ),
                    ElevatedButton(
                      onPressed: () {},
                      child: Text('按钮二'),
                    ),
                    ElevatedButton(
                      onPressed: () {},
                      child: Text('按钮二'),
                    ),
                    ElevatedButton(
                      onPressed: () {},
                      child: Text('按钮二'),
                    ),
                  ],
                )),
            BackButton(
              color: Colors.red,
              onPressed: () {},
            ),
            CloseButton(
              color: Colors.red,
              onPressed: () {},
            ),
          ],
        ));
  }
}
