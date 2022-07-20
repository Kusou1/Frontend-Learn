import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Life Cycle"),
          leading: Icon(Icons.menu),
          actions: [Icon(Icons.settings)],
          elevation: 0.0,
          centerTitle: true,
        ),
        body: MyState());
  }
}

class MyState extends StatefulWidget {
  @override
  // _MyStateState createState() => _MyStateState();
  _MyStateState createState() {
    print('create state');
    return _MyStateState();
  }
}

class _MyStateState extends State<MyState> {
  int _num;

  @override
  void initState() {
    // TODO: implement initState
    super.initState(); // 初始化状态
    print('init state');
    _num = 1;
  }

  @override
  void didChangeDependencies() {
    // TODO: implement didChangeDependencies
    super.didChangeDependencies();
    print('didChangeDependencies');
  }

  @override
  void didUpdateWidget(covariant MyState oldWidget) {
    // TODO: implement didUpdateWidget
    super.didUpdateWidget(oldWidget);
    print('didUpdateWidget');
  }

  @override
  void deactivate() {
    // TODO: implement deactivate
    super.deactivate();
    print('deactivate');
  }

  @override
  void dispose() {
    // TODO: implement dispose
    super.dispose();
    print('dispose');
  }

  void _increment() {
    setState(() {
      print('setState');
      _num++;
    });
  }

  void _decrement() {
    setState(() {
      print('setState');
      _num--;
    });
  }

  @override
  Widget build(BuildContext context) {
    print('build');
    return Center(
        child: Column(
      children: [
        ElevatedButton(onPressed: _decrement, child: Text('-')),
        Padding(padding: EdgeInsets.all(20), child: Text('$_num')),
        ElevatedButton(onPressed: _increment, child: Icon(Icons.add))
      ],
    ));
  }
}
