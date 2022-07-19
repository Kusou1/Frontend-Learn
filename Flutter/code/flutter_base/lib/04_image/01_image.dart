import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Image"),
        leading: Icon(Icons.menu),
        actions: [
          Icon(Icons.settings)
        ],
        elevation: 0.0,
        centerTitle: true,
      ),
      body: ImageDemo()
    );
  }
}

class ImageDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        // 加载本地图片
        Image.asset(
          'images/bg1.jpg',
          width: 200,
          height: 200,
          fit: BoxFit.fill,
        ),
        // 加载网络图片
        Image.network(
          'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5a260090e0e08770b0bd865845a4b4ab.jpg',
          repeat: ImageRepeat.repeat,
          colorBlendMode: BlendMode.colorDodge,
          color: Colors.green,
        ),
      ],
    );
  }
}