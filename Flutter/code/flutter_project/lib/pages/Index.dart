import 'package:flutter/material.dart';
import 'home/Home.dart';
import 'study/Study.dart';
import 'mine/Mine.dart';
import 'package:provider/provider.dart';
import '../providers/CurrentIndexProvider.dart';
import '../providers/UserProvider.dart';
import '../utils/Global.dart';

class Index extends StatefulWidget {
  Index({Key key}) : super(key: key);

  @override
  _IndexState createState() => _IndexState();
}

class _IndexState extends State<Index> {
  // 1. 声明 PageController
  PageController _pageController;

  final List<BottomNavigationBarItem> bottomNavItems = [
    BottomNavigationBarItem(
      backgroundColor: Colors.blue,
      icon: Icon(Icons.home),
      label: '首页',
    ),
    BottomNavigationBarItem(
      backgroundColor: Colors.green,
      icon: Icon(Icons.message),
      label: '学习',
    ),
    BottomNavigationBarItem(
      backgroundColor: Colors.red,
      icon: Icon(Icons.person),
      label: '我',
    ),
  ];

  final List pages = [
    {
      "appBar": AppBar(
        title: Text("拉勾教育"),
        centerTitle: true,
        elevation: 0,
      ),
      "page": Home(),
    },
    {
      "appBar": AppBar(
        title: Text("学习中心"),
        centerTitle: true,
        elevation: 0,
      ),
      "page": Study(),
    },
    {
      "appBar": AppBar(
        title: Text("个人中心"),
        centerTitle: true,
        elevation: 0,
      ),
      "page": Mine(),
    },
  ];

  @override
  void initState() {
    // 2. 初始化 PageController
    _pageController = PageController(
      initialPage: G.getCurrentContext().watch<CurrentIndexProvider>().currentIndex
    );
    super.initState();
  }

  // int currentIndex = 0;

  @override
  Widget build(BuildContext context) {
    // int curIndex = Provider.of<CurrentIndexProvider>(context).currentIndex;
    int curIndex = context.watch<CurrentIndexProvider>().currentIndex;
    UserProvider userProvider = Provider.of<UserProvider>(context);

    return Scaffold(
      appBar: pages[curIndex]['appBar'],
      bottomNavigationBar: BottomNavigationBar(
        items: bottomNavItems,
        currentIndex: curIndex,
        selectedItemColor: Colors.green,
        type: BottomNavigationBarType.fixed,
        onTap: (index) async {
          if (index == 1 || index == 2) {
            if (userProvider.isLogin == false) {
              print('跳转到登录页面');
              G.router.navigateTo(context, '/login');
              return;
            } else {
              print('用户已登录，可以访问页面');
              // 获取用户信息
              Map userInfo = await G.api.user.userInfo();
              userProvider.setUserInfo(userInfo);
            }
          }
          // Provider.of<CurrentIndexProvider>(context, listen: false).changeIndex(index);
          context.read<CurrentIndexProvider>().changeIndex(index);
          // 4. 跳转到指定页面
          setState(() {
            _pageController.jumpToPage(index);
          });
        },
      ),
      // body: pages[curIndex]['page'],
      // body: IndexedStack(
      //   index: curIndex,
      //   children: pages.map<Widget>((e) => e['page']).toList(),
      // ),
      // 3. 将 body 改成 PageView
      body: PageView(
        controller: _pageController,
        children: pages.map<Widget>((e) => e['page']).toList(),
      )
    );
  }
}
