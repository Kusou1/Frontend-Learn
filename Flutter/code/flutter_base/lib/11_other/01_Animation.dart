import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Animation"),
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

  @override
  void initState() {
    // TODO: implement initState
    super.initState();

    // 1.创建 AnimationController
    controller = AnimationController(
      duration: Duration(milliseconds: 400),
      vsync: this
    );

    // 2.1 声明动画曲线
    animation = CurvedAnimation(parent: controller, curve: Curves.bounceIn);

    // 2.2 设置动画值的范围
    animation = Tween(begin: 50.0, end: 400.0).animate(controller);

    // 3. 监听动画
    animation.addListener(() {
      print(animation.value);
      setState(() {
        
      });
    });

    // 4. 执行动画
    // controller.forward();
  }

  @override
  Widget build(BuildContext context) {
    return Center(
       child: Column(
         children: [
           ElevatedButton(
             onPressed: () {
               controller.forward();
             }, 
             child: Text('放大')
           ),
           ElevatedButton(
             onPressed: () {
               controller.reverse();
             }, 
             child: Text('缩小')
           ),
           ElevatedButton(
             onPressed: () {
               animation.addStatusListener((status) {
                 if (status == AnimationStatus.completed) {
                   // 反向执行动画
                   controller.reverse();
                 } else if (status == AnimationStatus.dismissed) {
                   // 正向执行动画
                   controller.forward();
                 }
               });
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
           Icon(
             Icons.favorite,
             color: Colors.red,
             size: animation.value
           ),
           Opacity(
             opacity: controller.value,
             child: Text('Hello World')
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