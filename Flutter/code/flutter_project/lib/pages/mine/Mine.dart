import 'package:flutter/material.dart';
import '../../utils/Global.dart';
import 'package:provider/provider.dart';
import '../../providers/UserProvider.dart';

class Mine extends StatefulWidget {
  Mine({Key key}) : super(key: key);

  @override
  _MineState createState() => _MineState();
}

class _MineState extends State<Mine> {
  // Map _userInfo = {};
  double iconSize = 20;

  @override
  void initState() {
    // 获取用户基本信息
    // G.api.user.userInfo().then((value) {
    //   print('获取用户信息');
    //   print(value);
    //   if (value != null) {
    //     setState(() {
    //       _userInfo = value;
    //     });
    //   }
    // });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    UserProvider userProvider = Provider.of<UserProvider>(context);
    print(userProvider.userInfo);

    TextStyle ts1 = TextStyle(fontSize: 26);
    TextStyle ts2 = TextStyle(fontSize: 16, color: Colors.grey[600]);

    /// 垂直方向的分割线
    SizedBox vline = SizedBox(
      width: 1,
      height: 60,
      child: DecoratedBox(
        decoration: BoxDecoration(color: Colors.grey[300])
      )
    );

    return SingleChildScrollView(
      child: Container(
        child: Column(
          children: [
            Card(
              margin: EdgeInsets.all(30),
              // color: Colors.purpleAccent[100],
              shadowColor: Colors.yellow, // 阴影颜色
              elevation: 20, // 阴影高度
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(40),
                side: BorderSide(
                  color: Colors.yellow,
                  width: 3,
                ),
              ),
              child: Column(
                children: [
                  ListTile(
                    leading: userProvider.userInfo['portrait'] == null
                    ?
                    Icon(
                      Icons.supervised_user_circle_rounded,
                      size: 50
                    )
                    :
                    Image.network(
                      userProvider.userInfo['portrait'],
                      fit: BoxFit.cover
                    ),
                    
                    title: Text(
                      userProvider.userInfo['userName'],
                      style: TextStyle(
                        fontSize: 24
                      ),
                    ),
                    subtitle: InkWell(
                      child: Text(
                        "编辑个人资料",
                        style: TextStyle(
                          fontSize: 16
                        ),
                      ),
                      onTap: () {
                        G.router.navigateTo(context, '/profile');
                      }
                    )
                  ),
                  Divider(),
                  Container(
                    margin: EdgeInsets.all(10),
                    padding: EdgeInsets.all(10),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                      children: [
                        Column(
                          children: [
                            Text('14:06', style: ts1),
                            Text('学习时长', style: ts2)
                          ]
                        ),
                        vline,
                        Column(
                          children: [
                            Text('2', style: ts1),
                            Text('优惠券', style: ts2)
                          ]
                        ),
                        vline,
                        Column(
                          children: [
                            Text('75', style: ts1),
                            Text('学分', style: ts2)
                          ]
                        )
                      ],
                    )
                  )
                ],
              )
            ),
            ListTile(
              leading: Icon(Icons.settings, size: iconSize),
              title: Text('设置'),
              trailing: Icon(Icons.arrow_forward_ios, size: iconSize),
              onTap: () {

              },
            ),
            ListTile(
              leading: Icon(Icons.help_outline, size: iconSize),
              title: Text('ProviderTest'),
              trailing: Icon(Icons.arrow_forward_ios, size: iconSize),
              onTap: () {
                G.router.navigateTo(context, '/provider_test');
              },
            ),
            ListTile(
              leading: Icon(Icons.info_outline, size: iconSize),
              title: Text('登录'),
              trailing: Icon(Icons.arrow_forward_ios, size: iconSize),
              onTap: () {
                G.router.navigateTo(context, '/login');
              },
            ),
            ListTile(
              leading: Icon(Icons.login_outlined, size: iconSize),
              title: Text('退出'),
              trailing: Icon(Icons.arrow_forward_ios, size: iconSize),
              onTap: () async {
                var res = await G.api.user.logout();
                if (res == true) {
                  // 更改用户状态
                  userProvider.doLogout();
                  // 跳转到 用户登录页
                  G.router.navigateTo(context, '/login');
                  return;
                }
              },
            ),

          ]
        )
      )
    );
  }
}