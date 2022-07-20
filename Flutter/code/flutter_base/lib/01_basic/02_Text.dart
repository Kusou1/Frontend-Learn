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
        body: TextDemo());
  }
}

class TextDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(
          "Flutter 是谷歌开发的一款开源、免费的，基于 Dart 语言的移动 UI 框架，可以快速在 iOS 和 Android 上构建高质量的原生应用。",
          textDirection: TextDirection.ltr,
          style: TextStyle(
            fontSize: 30,
            color: Colors.red,
            fontWeight: FontWeight.w500,
            fontStyle: FontStyle.italic,
            decoration: TextDecoration.lineThrough,
            decorationColor: Colors.blue,
            fontFamily: 'SourceSansPro',
          ),
          textAlign: TextAlign.left,
          maxLines: 3,
          overflow: TextOverflow.ellipsis, // 文本溢出
          textScaleFactor: 1.5,
        ),
        RichText(
          text: TextSpan(
              text: "Hello",
              style: TextStyle(
                  fontSize: 40, color: Color.fromARGB(255, 0, 0, 255)),
              children: [
                TextSpan(
                  text: "Flutter",
                  style: TextStyle(
                      fontSize: 40, color: Color.fromRGBO(255, 0, 0, 0.5)),
                ),
                TextSpan(
                  text: "你好世界",
                  style: TextStyle(
                      fontSize: 30,
                      color: Color.fromARGB(0xFF, 0x00, 0xFF, 0x00)),
                )
              ]),
        )
      ],
    );
  }
}
