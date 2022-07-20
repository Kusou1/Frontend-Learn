import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("StatefulWidget"),
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
  _MyStateState createState() => _MyStateState(); // createState必须要有
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
