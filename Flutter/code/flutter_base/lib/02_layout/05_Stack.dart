import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("层叠布局"),
          leading: Icon(Icons.menu),
          actions: [Icon(Icons.settings)],
          elevation: 0.0,
          centerTitle: true,
        ),
        body: StackDemo());
  }
}

// Stack类似Css中的z-indexs
class StackDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        child: Stack(
      // 声明未定位的子组件的排序方式
      textDirection: TextDirection.rtl,
      // 声明未定位的子组件的对齐方式
      alignment: AlignmentDirectional.bottomEnd,
      children: [
        CircleAvatar(
          backgroundImage: NetworkImage(
              'http://img12.360buyimg.com/n1/jfs/t1/133894/17/20175/388796/5fdb4134E17deda69/15535fe4303a1630.png'),
          radius: 200,
        ),
        Positioned(
            child: Container(
                color: Colors.red,
                padding: EdgeInsets.all(10),
                child: Text(
                  '热卖',
                  style: TextStyle(color: Colors.white, fontSize: 20),
                )),
            top: 50,
            right: 40),
        Text(
          'Hello',
          style: TextStyle(color: Colors.black, fontSize: 40),
        )
      ],
    ));
  }
}
