import 'package:flutter/material.dart';
import '../../utils/Global.dart';
import 'package:flutter_html/flutter_html.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:provider/provider.dart';
import '../../providers/UserProvider.dart';

class CourseDetail extends StatefulWidget {
  final int id;
  final String title;
  CourseDetail({Key key, @required this.id, @required this.title}) : super(key: key);

  @override
  _CourseDetailState createState() => _CourseDetailState();
}

class _CourseDetailState extends State<CourseDetail> {
  Map course = {};
  Map section = {};

  final List<Widget> _tabs = [
    Tab(text: "详情"),
    Tab(text: "目录"),
  ];

  List<Widget> _tabViews = [];

  @override
  void initState() {
    /// 调用详情接口
    G.api.course.courseDetail(id: widget.id).then((value) {
      print(value);
      setState(() {
        course = value;
      });
    });

    /// 调用课程章节
    G.api.course.courseSection(id: widget.id).then((value) {
      print('课程章节');
      print(value);
      setState(() {
        section = value;
      });
    });

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    UserProvider userProvider = Provider.of<UserProvider>(context);

    _tabViews = [
      Html(data: course['courseDescription'].toString()),
      // Text("这里是章节"),
      renderCourseSection(),
    ];

    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
        centerTitle: true,
      ),
      body: ListView(
        children: [
          course['courseImgUrl'] != null
          ?
          Image.network(
            course['courseImgUrl'],
            fit: BoxFit.cover,
            height: 200
          )
          :
          Icon(Icons.settings),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                margin: EdgeInsets.all(10),
                child: Text(
                  course['courseName'].toString() + " - " + widget.id.toString(),
                  style: TextStyle(
                    fontSize: 22,
                    fontWeight: FontWeight.w500
                  )
                ),
              ),
              Container(
                margin: EdgeInsets.fromLTRB(10, 0, 10, 10),
                child: Text(
                  course['previewFirstField'].toString(),
                  style: TextStyle(
                    fontSize: 16,
                    color: Colors.grey
                  )
                ),
              ),
              Container(
                margin: EdgeInsets.fromLTRB(10, 0, 10, 20),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      '￥' + course['discounts'].toString(),
                      style: TextStyle(
                        fontSize: 28,
                        fontWeight: FontWeight.w500,
                        color: Colors.red,
                      )
                    ),
                    SizedBox(
                      width: 10,
                    ),
                    Text(
                      '￥' + course['price'].toString(),
                      style: TextStyle(
                        fontSize: 18,
                        decoration: TextDecoration.lineThrough
                      )
                    ),
                    SizedBox(
                      width: 10,
                    ),
                    Text(
                      course['sales'].toString() + ' 已购',
                      style: TextStyle(
                        fontSize: 18,
                      )
                    ),
                  ]
                ),
              ),
              // Html(data: "<h1>Hello Flutter</h1>"),

              // 展示详情和章节
              Container(
                height: double.maxFinite,
                width: double.infinity,
                child: DefaultTabController(
                  length: _tabs.length,
                  child: Column(
                    children: [
                      TabBar(
                        tabs: _tabs,
                        labelColor: Colors.blue,
                        unselectedLabelColor: Colors.black45,
                        indicatorSize: TabBarIndicatorSize.label,
                      ),
                      Expanded(
                        child: TabBarView(
                          children: _tabViews
                        )
                      )
                    ]
                  )
                ),
              )
            ],
          ),
        ],
      ),
      bottomNavigationBar: Row(
        children: [
          InkWell(
            onTap: () {
              if (userProvider.isLogin == true) {
                
                Map<String, dynamic> p = {
                  'id': course['id'],
                  'title': course['courseName'],
                };
                print(p);

                G.router.navigateTo(context, "/pay"+G.parseQuery(params: p));
                return;
              } else {
                G.router.navigateTo(context, '/login');
              }
            },
            child: Container(
              width: 375.w,
              height: 100.h,
              color: Colors.green,
              alignment: Alignment.center,
              child: Text(
                "立即购买",
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 50.sp
                )
              ),
            ),
          ),
          InkWell(
            onTap: () {

            },
            child: Container(
              width: 375.w,
              height: 100.h,
              color: Colors.pink,
              alignment: Alignment.center,
              child: Text(
                "砍价1元",
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 50.sp
                )
              ),
            ),
          )
        ],
      ),
    );
  }

  Widget renderCourseSection() {
    return Column(
      children: section['courseSectionList'] != null
      ?
      section['courseSectionList'].map<Widget>((module) {
        return Column(
          children: [
            ListTile(
              title: Text(
                module['sectionName'],
                style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.w500
                )
              ),
            ),
            Column(
              children: module['courseLessons'] != null
              ?
              module['courseLessons'].map<Widget>((subsection) {
                return ListTile(
                  onTap: () {

                  },
                  title: Text(
                    subsection['theme'],
                    style: Theme.of(context).textTheme.bodyText2
                  ),
                  trailing: subsection['canPlay'] 
                  ? 
                  Icon(Icons.play_circle_outline)
                  :
                  Icon(Icons.lock, color: Colors.grey[400])
                  ,
                );
              }).toList()
              :
              [],
            ),
          ],
        );
      }).toList()
      :
      [Text('没有课程')],
    );
  }

  @override
  void dispose() {
    super.dispose();
  }
}