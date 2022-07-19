import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Checkbox"),
        leading: Icon(Icons.menu),
        actions: [
          Icon(Icons.settings)
        ],
        elevation: 0.0,
        centerTitle: true,
      ),
      body: CheckboxDemo()
    );
  }
}

class CheckboxDemo extends StatefulWidget {
  CheckboxDemo({Key key}) : super(key: key);

  @override
  _CheckboxDemoState createState() => _CheckboxDemoState();
}

class _CheckboxDemoState extends State<CheckboxDemo> {
  bool _male = true;
  bool _female = false;
  bool _transgender = true;
  bool _value1 = true;
  bool _value2 = false;

  @override
  Widget build(BuildContext context) {
    return Column(
       children: [
         ListTile(
           leading: Checkbox(
             value: this._male,
             onChanged: (bool value) {
               setState(() {
                 this._male = value;
               });
             },
           ),
           title: Text('男'),
         ),
         ListTile(
           leading: Checkbox(
             value: this._female,
             onChanged: (bool value) {
               setState(() {
                 this._female = value;
               });
             },
           ),
           title: Text('女'),
         ),
         ListTile(
           leading: Checkbox(
             value: this._transgender,
             onChanged: (bool value) {
               setState(() {
                 this._transgender = value;
               });
             },
             activeColor: Colors.pink,
             checkColor: Colors.yellow,
           ),
           title: Text('人妖'),
         ),
         CheckboxListTile(
           secondary: Icon(Icons.settings, size: 50),
           value: this._value1, 
           onChanged: (bool value) {
            setState(() {
              this._value1 = value;
            });
           },
           title: Text('1:00 叫我起床'),
           subtitle: Text('太困了,起不来'),
           activeColor: Colors.green,
           checkColor: Colors.green,
           selected: this._value1,
         ),
         CheckboxListTile(
           secondary: Icon(Icons.settings, size: 50),
           value: this._value2, 
           onChanged: (bool value) {
            setState(() {
              this._value2 = value;
            });
           },
           title: Text('2:00 叫我起床'),
           subtitle: Text('这还差不多'),
         ),
       ],
    );
  }
}