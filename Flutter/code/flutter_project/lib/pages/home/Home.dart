import 'package:flutter/material.dart';
import '../../utils/Global.dart';
import 'HomeSwiper.dart';
import 'HomeCourse.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class Home extends StatefulWidget {
  Home({Key key}) : super(key: key);

  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> with AutomaticKeepAliveClientMixin {
  List adList = [];
  List courseList = [];

  @override
  bool get wantKeepAlive => true;

  @override
  void initState() {
    print('=== initState 首页调用');
    /// 请求广告
    G.api.ad.adList().then((value) {
      // print(value);
      setState(() {
        adList = value.where((ad) => ad['status'] == 1).toList();
      });
    });

    // 请求课程
    G.api.course.courseList().then((value) {
      setState(() {
        courseList = value;
      });
    });

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    super.build(context);
    
    return Container(
      color: Colors.grey[200],
      child: CustomScrollView(
        slivers: [
          SliverToBoxAdapter(
            child: Container(
              height: 400.h,
              child: HomeSwiper(adList: adList),
            ),
          ),
          SliverPadding(
            padding: EdgeInsets.all(5),
            sliver: HomeCourse(courseList: courseList),
          )
        ]
      )
    );
  }

  @override
  void dispose() {
    super.dispose();
  }
}