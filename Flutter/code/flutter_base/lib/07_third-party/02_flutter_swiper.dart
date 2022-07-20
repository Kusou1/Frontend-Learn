import 'package:flutter/material.dart';
import 'package:flutter_swiper/flutter_swiper.dart';

// flutter中的轮博组件
class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("flutter_swiper"),
          leading: Icon(Icons.menu),
          actions: [Icon(Icons.settings)],
          elevation: 0.0,
          centerTitle: true,
        ),
        body: FlutterSwiperDemo());
  }
}

class FlutterSwiperDemo extends StatelessWidget {
  final List<String> imgs = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
  ];

  @override
  Widget build(BuildContext context) {
    return ListView(
      children: [
        Container(
          height: 200,
          child: Swiper(
            itemCount: imgs.length,
            itemBuilder: (context, index) {
              return Image.asset(imgs[index], fit: BoxFit.cover);
            },
            pagination: SwiperPagination(), // 轮播图的指示点
            control: SwiperControl(), // 左右箭头导航
          ),
        ),
        Container(
          height: 200,
          child: Swiper(
            itemCount: imgs.length,
            itemBuilder: (context, index) {
              return Image.asset(imgs[index], fit: BoxFit.cover);
            },
            viewportFraction: 0.7,
            scale: 0.7,
          ),
        ),
        Container(
          height: 200,
          child: Swiper(
            itemCount: imgs.length,
            itemBuilder: (context, index) {
              return Image.asset(imgs[index], fit: BoxFit.cover);
            },
            itemWidth: 300,
            layout: SwiperLayout.STACK,
          ),
        ),
        Container(
          height: 200,
          child: Swiper(
            itemCount: imgs.length,
            itemBuilder: (context, index) {
              return Image.asset(imgs[index], fit: BoxFit.cover);
            },
            itemWidth: 300,
            itemHeight: 200,
            layout: SwiperLayout.TINDER,
          ),
        )
      ],
    );
  }
}
