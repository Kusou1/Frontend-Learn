import 'package:flutter/material.dart';
import 'ImageDetail.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Hero Animation"),
        leading: Icon(Icons.menu),
        actions: [
          Icon(Icons.settings)
        ],
        elevation: 0.0,
        centerTitle: true,
      ),
      body: HeroAnimation()
    );
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
          return GestureDetector(
            onTap: () {
              Navigator.push(context, MaterialPageRoute(builder: (BuildContext ctx) {
                return ImageDetail(imageURL);
              }));
            },
            child: Hero(
              tag: imageURL, 
              child: Image.network(imageURL)
            )
          );
        })
      ),
    );
  }
}