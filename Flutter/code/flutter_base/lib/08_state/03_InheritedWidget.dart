import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("InheritedWidget"),
        leading: Icon(Icons.menu),
        actions: [
          Icon(Icons.settings)
        ],
        elevation: 0.0,
        centerTitle: true,
      ),
      body: MyState()
    );
  }
}

class MyState extends StatefulWidget {
  @override
  _MyStateState createState() => _MyStateState();
}

class _MyStateState extends State<MyState> {
  int _num = 0;

  void _increment() {
    setState(() {
      _num++;
    });
  }

  void _decrement() {
    setState(() {
      _num--;
    });
  }

  @override
  Widget build(BuildContext context) {
    return ShareDataWidget(
      num: _num,
      child: Center(
        child: Column(
          children: [
            ElevatedButton(
              onPressed: _decrement, 
              child: Text('-')
            ),
            Padding(
              padding: EdgeInsets.all(20),
              // child: Text('$_num')
              // 跨组件访问数据
              child: MyCounter(),
            ),
            ElevatedButton(
              onPressed: _increment, 
              child: Icon(Icons.add)
            )
          ],
        )
      ),
    );
  }
}

class MyCounter extends StatefulWidget {
  MyCounter({Key key}) : super(key: key);

  @override
  _MyCounterState createState() => _MyCounterState();
}

class _MyCounterState extends State<MyCounter> {
  @override
  Widget build(BuildContext context) {
    // 使用 InheritedWidget 中的共享数据
    return Text(ShareDataWidget.of(context).num.toString());
  }
}

// 数据共享组件
class ShareDataWidget extends InheritedWidget {
  final int num;
  final Widget child;

  ShareDataWidget({Key key, this.child, @required this.num}) : super(key: key, child: child);

  static ShareDataWidget of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<ShareDataWidget>();
  }

  @override
  bool updateShouldNotify(ShareDataWidget oldWidget) {
    return true;
  }
}