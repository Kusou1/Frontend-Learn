import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Animation"),
          leading: Icon(Icons.menu),
          actions: [Icon(Icons.settings)],
          elevation: 0.0,
          centerTitle: true,
        ),
        body: AnimationDemo());
  }
}

class AnimationDemo extends StatefulWidget {
  AnimationDemo({Key key}) : super(key: key);

  @override
  _AnimationDemoState createState() => _AnimationDemoState();
}

class _AnimationDemoState extends State<AnimationDemo>
    with SingleTickerProviderStateMixin {
  AnimationController controller;
  Animation animation;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();

    // 1.创建 AnimationController
    // duration 动画执行时间，reverseDuration动画反向执行时间
    // vsync 防止屏幕外动画消耗不必要的资源
    controller =
        AnimationController(duration: Duration(milliseconds: 400), vsync: this);

    // 2.1 声明动画曲线
    animation = CurvedAnimation(parent: controller, curve: Curves.bounceIn);

    // 2.2 设置动画值的范围 补间动画
    animation = Tween(begin: 50.0, end: 200.0).animate(controller);

    // 3. 监听动画
    animation.addListener(() {
      print(animation.value);
      setState(() {});
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
                animation.addStatusListener((status) {
                  // completed为动画结束状态
                  if (status == AnimationStatus.completed) {
                    // 正向执行动画
                    controller.stop();
                  }
                });
              },
              child: Text('放大')),
          ElevatedButton(
              onPressed: () {
                controller.reverse();
                animation.addStatusListener((status) {
                  // completed为动画结束状态
                  if (status == AnimationStatus.dismissed) {
                    // 正向执行动画
                    controller.stop();
                  }
                });
              },
              child: Text('缩小')),
          ElevatedButton(
              onPressed: () {
                animation.addStatusListener((status) {
                  // completed为动画结束状态
                  if (status == AnimationStatus.completed) {
                    // 反向执行动画
                    controller.reverse();
                    // dismissed为动画开始状态
                  } else if (status == AnimationStatus.dismissed) {
                    // 正向执行动画
                    controller.forward();
                  }
                });
                controller.forward();
              },
              child: Text('重复')),
          ElevatedButton(
              onPressed: () {
                controller.stop();
              },
              child: Text('停止')),
          Icon(Icons.favorite, color: Colors.red, size: animation.value),
          Opacity(opacity: controller.value, child: Text('Hello World'))
        ],
      ),
    );
  }

  @override
  void dispose() {
    // TODO: implement dispose
    super.dispose();
    controller.dispose();
    // 动画没有用了会及时的去释放资源
  }
}
