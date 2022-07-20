import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  Home({Key key}) : super(key: key);

  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  final List<BottomNavigationBarItem> bottomNavItems = [
    BottomNavigationBarItem(
      backgroundColor: Colors.blue,
      icon: Icon(Icons.home),
      label: '首页',
    ),
    BottomNavigationBarItem(
      backgroundColor: Colors.green,
      icon: Icon(Icons.message),
      label: '消息',
    ),
    BottomNavigationBarItem(
      backgroundColor: Colors.amber,
      icon: Icon(Icons.shopping_cart),
      label: '购物车',
    ),
    BottomNavigationBarItem(
      backgroundColor: Colors.red,
      icon: Icon(Icons.person),
      label: '我',
    ),
  ];

  final pages = [
    Center(
      child: Text("Home", style: TextStyle(fontSize: 50)),
    ),
    Center(
      child: Text("Message", style: TextStyle(fontSize: 50)),
    ),
    Center(
      child: Text("Cart", style: TextStyle(fontSize: 50)),
    ),
    Center(
      child: Text("Profile", style: TextStyle(fontSize: 50)),
    ),
  ];

  int currentIndex;

  @override
  void initState() {
    // TODO: implement initState 设置默认状态
    super.initState();
    currentIndex = 0;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("底部导航"),
        leading: Icon(Icons.menu),
        actions: [Icon(Icons.settings)],
        elevation: 0.0,
        centerTitle: true,
      ),
      bottomNavigationBar: BottomNavigationBar(
          items: bottomNavItems,
          currentIndex: currentIndex,
          type: BottomNavigationBarType.fixed,
          // type: BottomNavigationBarType.shifting,
          onTap: (index) {
            _changePage(index);
          }),
      body: pages[currentIndex],
    );
  }

  void _changePage(int index) {
    if (index != currentIndex) {
      setState(() {
        currentIndex = index;
      });
    }
  }
}
