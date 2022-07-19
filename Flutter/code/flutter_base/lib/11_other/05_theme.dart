import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Theme"),
        leading: Icon(Icons.menu),
        actions: [
          Icon(Icons.settings)
        ],
        elevation: 0.0,
        centerTitle: true,
      ),
      body: ThemeDemo()
    );
  }
}

class ThemeDemo extends StatelessWidget {
  const ThemeDemo({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: [
          Text(
            'Theme Example',
            style: Theme.of(context).textTheme.subtitle1
          ),
          ElevatedButton(
            onPressed: (){}, 
            child: Text('按钮'),
          ),
          RaisedButton(
            onPressed: (){},
            child: Text('有背景色的'),
          ),
          Icon(Icons.person),
          Icon(Icons.access_alarm),
          Icon(
            Icons.ac_unit_rounded,
            // color: Colors.green
            color: Theme.of(context).accentColor
          ),
          // 通过 Theme 来设置局部样式
          Theme(
            data: ThemeData(
              iconTheme: IconThemeData(
                color: Colors.blue,
                size: 60
              ),
            ),
            child: Icon(Icons.person),
          ),
          Card(
            margin: EdgeInsets.all(30),
            child: Column(
              children: [
                ListTile(
                  leading: Icon(
                    Icons.supervised_user_circle_rounded,
                    size: 50
                  ),
                  title: Text(
                    "李四",
                    style: TextStyle(
                      fontSize: 30
                    ),
                  ),
                  subtitle: Text(
                    "总经理",
                    style: TextStyle(
                      fontSize: 20
                    ),
                  ),
                ),
                Divider(),
                ListTile(
                  title: Text(
                    "电话：13333333333",
                    style: TextStyle(
                      fontSize: 20
                    ),
                  ),
                ),
                ListTile(
                  title: Text(
                    "地址：XXXXXXXX",
                    style: TextStyle(
                      fontSize: 20
                    ),
                  ),
                )
              ],
            )
          )
      
        ],
      ),
    );
  }
}