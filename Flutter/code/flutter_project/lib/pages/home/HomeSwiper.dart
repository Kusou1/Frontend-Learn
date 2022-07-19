import 'package:flutter/material.dart';
import 'package:flutter_swiper/flutter_swiper.dart';

class HomeSwiper extends StatelessWidget {
  List adList;
  HomeSwiper({Key key, @required this.adList}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Swiper(
      itemCount: adList.length,
      itemBuilder: (context, index) {
        return Image.network(
          adList[index]['img'],
          fit: BoxFit.cover
        );
      },
      pagination: SwiperPagination(), // 轮播图的指示点
      control: SwiperControl(),// 左右箭头导航
      autoplay: true,
      autoplayDelay: 3000,
    );
  }
}