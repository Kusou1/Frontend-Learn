import 'package:flutter/material.dart';
import 'dart:math';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Stagger Animation"),
        leading: Icon(Icons.menu),
        actions: [
          Icon(Icons.settings)
        ],
        elevation: 0.0,
        centerTitle: true,
      ),
      body: AnimationDemo()
    );
  }
}

class AnimationDemo extends StatefulWidget {
  AnimationDemo({Key key}) : super(key: key);

  @override
  _AnimationDemoState createState() => _AnimationDemoState();
}

class _AnimationDemoState extends State<AnimationDemo> with SingleTickerProviderStateMixin {
  AnimationController controller;
  Animation animation;
  Animation sizeAnimation;
  Animation colorAnimation;
  Animation rotationAnimation;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();

    // 1. 创建 AnimationController
    controller = AnimationController(
      duration: Duration(seconds: 3),
      vsync: this,
    );

    // 2. 创建动画
    animation = CurvedAnimation(
      parent: controller, 
      curve: Interval(0.0, 0.5)
    )..addListener(() {
      setState(() {
        
      });
      });

    // 3. 让动画反复运行
    animation.addStatusListener((status) {
      if (status == AnimationStatus.completed) {
        // 反向执行动画
        controller.reverse();
      } else if (status == AnimationStatus.dismissed) {
        // 正向执行动画
        controller.forward();
      }
    });

    // 4. 设置其他动画
    sizeAnimation = Tween(begin: 0.0, end: 200.0).animate(animation);
    colorAnimation = ColorTween(begin: Colors.yellow, end: Colors.red)
      .animate(CurvedAnimation(
        parent: controller, 
        curve: Interval(0.5, 0.8, curve: Curves.bounceIn)
      ))
      ..addListener(() { 
        setState(() {
          
        });
      });

    rotationAnimation = Tween(begin: 0.0, end: 2*pi).animate(
      CurvedAnimation(
        parent: controller, 
        curve: Interval(0.8, 1.0, curve: Curves.easeIn)
      )
    );
  }

  @override
  Widget build(BuildContext context) {
    return Center(
       child: Column(
         children: [
           ElevatedButton(
             onPressed: () {
              //  animation.addStatusListener((status) {
              //    if (status == AnimationStatus.completed) {
              //      // 反向执行动画
              //      controller.reverse();
              //    } else if (status == AnimationStatus.dismissed) {
              //      // 正向执行动画
              //      controller.forward();
              //    }
              //  });
               controller.forward();
             }, 
             child: Text('重复')
           ),
           ElevatedButton(
             onPressed: () {
               controller.stop();
             }, 
             child: Text('停止')
           ),
Opacity(
  opacity: controller.value,
  child: Transform.rotate(
    angle: rotationAnimation.value,
    child: Container(
      width: sizeAnimation.value,
      height: sizeAnimation.value,
      color: colorAnimation.value
    )
  )
)
         ],
       ),
    );
  }

  @override
  void dispose() {
    // TODO: implement dispose
    super.dispose();
    controller.dispose();
  }
}
