import 'package:flutter/material.dart';
import 'dart:async';
import '../../utils/Global.dart';

class Splash extends StatefulWidget {
  Splash({Key key}) : super(key: key);

  @override
  _SplashState createState() => _SplashState();
}

class _SplashState extends State<Splash> {
  Timer _timer;
  int counter = 3;

  /// 倒计时
  countDown() async {
    var _duration = Duration(seconds: 1);
    Timer(_duration, () {
      /// 等待1秒之后，再计时
      _timer = Timer.periodic(_duration, (timer) {
        counter--;
        if (counter == 0) {
          // 执行跳转
          goHome();
        } else {
          setState(() {
            // 标记当前组件为 dirty，然后触发 rebuild
          });
        }
      });
      return _timer;
    });
  }

  void goHome() {
    _timer.cancel();
    G.router.navigateTo(context, '/');
  }

  @override
  void initState() {
    super.initState();

    countDown(); // 指定倒计时
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      alignment: Alignment(1.0, -1.0),
      children: [
        ConstrainedBox(
          constraints: BoxConstraints.expand(),
          child: Image.asset(
            "lib/assets/images/splash.jpeg",
            fit: BoxFit.fill
          )
        ),
        Container(
          color: Colors.grey,
          margin: EdgeInsets.fromLTRB(0, 50, 10, 0),
          padding: EdgeInsets.all(5),
          child: TextButton(
            onPressed: () {
              goHome();
            }, 
            child: Text(
              "$counter 跳过广告",
              style: TextStyle(
                color: Colors.white,
                fontSize: 14
              )
            ),
          )
        ),
      ]
    );
  }

  @override
  void dispose() {
    super.dispose();
  }
}