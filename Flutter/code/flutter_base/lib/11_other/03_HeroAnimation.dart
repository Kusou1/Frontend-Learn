import 'package:flutter/material.dart';
import 'ImageDetail.dart';

// hero动画实现跨页面的动画效果
// 在不同页面中，声明一个共享组件（Hero）
// 由于共享组件在不同页面中的位置、外观等不同，路由切换时，形成动画效果

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Hero Animation"),
          leading: Icon(Icons.menu),
          actions: [Icon(Icons.settings)],
          elevation: 0.0,
          centerTitle: true,
        ),
        body: HeroAnimation());
  }
}

class HeroAnimation extends StatelessWidget {
  const HeroAnimation({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.symmetric(vertical: 20),
      child: GridView.extent(
          maxCrossAxisExtent: 200.0,
          mainAxisSpacing: 20,
          children: List.generate(20, (index) {
            String imageURL = "https://picsum.photos/id/$index/300/400";
            // GestureDetector手势识别
            return GestureDetector(
                onTap: () {
                  Navigator.push(context,
                      MaterialPageRoute(builder: (BuildContext ctx) {
                    return ImageDetail(imageURL);
                  }));
                },
                child: Hero(tag: imageURL, child: Image.network(imageURL)));
          })),
    );
  }
}
