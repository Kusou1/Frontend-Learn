import 'package:flutter/material.dart';
import '../../utils/Global.dart';
import 'package:provider/provider.dart';
import '../../providers/UserProvider.dart';
import 'package:url_launcher/url_launcher.dart';

class Pay extends StatefulWidget {
  final int id;
  final String title;
  Pay({Key key, @required this.id, @required this.title}) : super(key: key);

  @override
  _PayState createState() => _PayState();
}

class _PayState extends State<Pay> {
  // Map course = {};
  int payment = 2;
  String orderNo;

  @override
  void initState() {
    // 获取课程详情
    print('aaa');
    print(DateTime.now().microsecondsSinceEpoch);
    // G.api.course.courseDetail(id: widget.id).then((value) {
    //   setState(() {
    //     course = value;
    //     print('课程详情');
    //     print('bbb');
    //     print(DateTime.now().microsecondsSinceEpoch);
    //   });
    // });

    // 创建订单
    G.api.order.createOrder(goodsId: widget.id).then((value) {
      print('生成订单号');
      print(value);
      if (value == null) {
        print('创建订单失败');
      } else {
        setState(() {
          orderNo = value['orderNo'];
        });
      }
    });

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    UserProvider userProvider = Provider.of<UserProvider>(context);
    print('build');
    print(DateTime.now().microsecondsSinceEpoch);
    
    return Scaffold(
      appBar: AppBar(
        title: Text('支付'),
        centerTitle: true,
      ),
      body: FutureBuilder(
        // future: Future.delayed(Duration(seconds: 3), () async {
        //   return await G.api.course.courseDetail(id: widget.id);
        // }),
        future: G.api.course.courseDetail(id: widget.id),
        builder: (context, snapshot) {
          switch (snapshot.connectionState) {
            // case ConnectionState.none: // 初始态
            //   return ElevatedButton(
            //     onPressed: () {}, 
            //     child: Text('点击发送请求i')
            //   );
            //   break;
            case ConnectionState.waiting: // 正在等待
              return Center(
                child: CircularProgressIndicator()
              );
            case ConnectionState.done:
              if (snapshot.hasError) {
                return Center(
                  child: Text(
                    '${snapshot.error}',
                    style: TextStyle(color: Colors.red)
                  )
                );
              } else if (snapshot.hasData) {
                print('异步请求成功');
                var course = snapshot.data;
                return SingleChildScrollView(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      ListTile(
                        leading: course['courseImgUrl'] != null
                          ?
                          Image.network(
                            course['courseImgUrl'],
                            fit: BoxFit.cover,
                            height: 150,
                          )
                          :
                          Icon(Icons.hourglass_empty),
                        title: Text(
                          course['courseName'],
                          style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.w500
                          )
                        ),
                        subtitle: Text(
                          "￥"+course['discounts'].toString(),
                          style: TextStyle(
                            fontSize: 18,
                            fontWeight: FontWeight.w500,
                            color: Colors.red
                          )
                        ),
                      ),
                      Container(
                        margin: EdgeInsets.all(20),
                        child: Text('当前用户：'+userProvider.userInfo['userName'])
                      ),
                      Container(
                        margin: EdgeInsets.all(20),
                        child: Text(
                          '支付方式',
                          style: TextStyle(
                            fontSize: 28,
                            fontWeight: FontWeight.w500,
                          )
                        )
                      ),
                      Divider(),
                      RadioListTile(
                        value: 1, 
                        groupValue: this.payment, 
                        onChanged: (value) {
                          setState(() {
                            this.payment = value;
                          });
                        },
                        title: Text('微信支付'),
                        secondary: Image.network(
                          "http://www.lgstatic.com/lg-app-fed/pay/images/wechat_b787e2f4.png",
                          fit: BoxFit.cover
                        ),
                        selected: this.payment == 1,
                        selectedTileColor: Colors.green[100],
                        contentPadding: EdgeInsets.all(10),
                      ),
                      RadioListTile(
                        value: 2, 
                        groupValue: this.payment, 
                        onChanged: (value) {
                          setState(() {
                            this.payment = value;
                          });
                        },
                        title: Text('支付宝'),
                        secondary: Image.network(
                          "http://www.lgstatic.com/lg-app-fed/pay/images/ali_ed78fdae.png",
                          fit: BoxFit.cover
                        ),
                        selected: this.payment == 2,
                        selectedTileColor: Colors.green[100],
                        contentPadding: EdgeInsets.all(10),
                      ),
                      Container(
                        margin: EdgeInsets.all(20),
                        width: double.infinity,
                        child: ElevatedButton(
                          onPressed: () {
                            // 去支付
                            doPay();
                          },
                          child: Text('立即支付'),
                          style: ButtonStyle(
                            textStyle: MaterialStateProperty.all(
                              TextStyle(
                                fontSize: 26
                              )
                            )
                          )
                        )
                      )
                    ]
                  )
                );
              } else {
                return Center(
                  child: CircularProgressIndicator()
                );
              }
              break;
            default:
              return Container();
              break;
          }
        }
      )
    );
  }

  doPay() {
    // 发起支付
    G.api.order.createPay(orderNo: orderNo, channel: payment).then((value) {
      if (value != false) {
        print('支付成功');
        print(value);
        /// 跳转到支付链接
        _launchURL(value['payUrl']);
      } else {
        print('支付失败');
      }
    });
  }

  void _launchURL(_url) async => 
    await canLaunch(_url) 
    ? 
    await launch(_url) 
    : 
    throw '不能跳转到 $_url';

  @override
  void dispose() {
    super.dispose();
  }
}