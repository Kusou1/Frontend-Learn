import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Drawer"),
        leading: Icon(Icons.menu),
        actions: [
          Icon(Icons.settings)
        ],
        elevation: 0.0,
        centerTitle: true,
      ),
      body: HomePage(),
      drawer: DrawerList(),
      endDrawer: DrawerList(),
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Center(
        child: Text('Home'),
      ),
    );
  }
}

class DrawerList extends StatelessWidget {
  const DrawerList({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        padding: EdgeInsets.all(0),
        children: [
          UserAccountsDrawerHeader(
            accountName: Text('初六'),
            accountEmail: Text('whoicliu@163.com'),
            decoration: BoxDecoration(
              image: DecorationImage(
                image: AssetImage('images/bg1.jpg'),
                fit: BoxFit.cover,
              )
            ),
            currentAccountPicture: CircleAvatar(
              backgroundImage: AssetImage('images/flutter.jpg'),
            ),
          ),
          ListTile(
            leading: Icon(Icons.settings),
            title: Text('设置'),
            trailing: Icon(Icons.arrow_forward_ios),
          ),
          Divider(thickness: 2,),
          ListTile(
            leading: Icon(Icons.account_balance),
            title: Text('余额'),
            trailing: Icon(Icons.arrow_forward_ios),
          ),
          Divider(thickness: 2,),
          ListTile(
            leading: Icon(Icons.person),
            title: Text('我的'),
            trailing: Icon(Icons.arrow_forward_ios),
          ),
          Divider(thickness: 2,),
          ListTile(
            leading: Icon(Icons.person),
            title: Text('回退'),
            onTap: () => Navigator.pop(context),
            trailing: Icon(Icons.arrow_forward_ios),
          ),
          AboutListTile(
            child: Text('关于'),
            applicationName: "你的应用名称",
            applicationVersion: "1.0.0",
            icon: CircleAvatar(
              child: Text('aaa')
            ),
            applicationLegalese: "应用法律条例",
            aboutBoxChildren: [
              Text('条例一：xxxx'),
              Text('条例二：xxxx'),
            ],
            applicationIcon: Image.asset(
              'images/flutter.jpg',
              width: 50,
              height: 50,
            )
          ),
          // Text('Drawer')
        ]
      ),
    );
  }
}