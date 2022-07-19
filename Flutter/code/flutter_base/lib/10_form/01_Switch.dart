import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Switch"),
        leading: Icon(Icons.menu),
        actions: [
          Icon(Icons.settings)
        ],
        elevation: 0.0,
        centerTitle: true,
      ),
      body: SwitchDemo()
    );
  }
}

class SwitchDemo extends StatefulWidget {
  SwitchDemo({Key key}) : super(key: key);

  @override
  _SwitchDemoState createState() => _SwitchDemoState();
}

class _SwitchDemoState extends State<SwitchDemo> {
  bool _switchValue = false;

  @override
  Widget build(BuildContext context) {
    return Container(
       child: ListView(
         children: [
           ListTile(
             leading: Switch(
               value: _switchValue,
               onChanged: (bool val) {
                 setState(() {
                   _switchValue = val;
                 });
               },
               activeColor: Colors.orange,
               activeTrackColor: Colors.pink,
               inactiveTrackColor: Colors.grey,
               inactiveThumbColor: Colors.blue[100],
             ),
             title: Text("当前的状态是: ${_switchValue == true ? "选中" : "未选中"}"),
           ),
           ListTile(
             leading: CupertinoSwitch(
               value: _switchValue, 
               onChanged: (bool val) {
                 setState(() {
                   _switchValue = val;
                 });
               },
               activeColor: Colors.red,
               trackColor: Colors.yellow,
             ),
             title: Text('iOS 风格的 Switch'),
           )
         ]
       ),
    );
  }
}