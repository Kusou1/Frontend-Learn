import 'package:flutter/material.dart';
import '../../utils/Global.dart';

class PurchaseCourse extends StatefulWidget {
  List courseList;
  PurchaseCourse({Key key, @required this.courseList}) : super(key: key);

  @override
  _PurchaseCourseState createState() => _PurchaseCourseState();
}

class _PurchaseCourseState extends State<PurchaseCourse> {
  @override
  Widget build(BuildContext context) {
    return SliverList(
      delegate: SliverChildBuilderDelegate(
        (BuildContext context, int index) {
          var course = widget.courseList[index];
          return GestureDetector(
            onTap: () {
              print(index);
              /// 跳转到课程详情页
              // print("/course_detail?id=222&title=课程标题");

              Map<String, dynamic> p = {
                'id': course['id'],
                'title': course['name'],
              };

              G.router.navigateTo(context, "/course_detail"+G.parseQuery(params: p));
            },
            child: Container(
              color: Colors.white,
              padding: EdgeInsets.all(10),
              child: Flex(
                direction: Axis.horizontal,
                children: [
                  Expanded(
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(10),
                      child: Image.network(
                        course['image'],
                        fit: BoxFit.cover,
                        height: 120,
                      )
                    ),
                    flex: 1,
                  ),
                  Expanded(
                    child: Container(
                      height: 120,
                      padding: EdgeInsets.symmetric(horizontal: 20),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Container(
                            width: double.infinity,
                            child: Text(
                              course['name'],
                              style: TextStyle(
                                fontSize: 16
                              ),
                              overflow: TextOverflow.ellipsis,
                            )
                          ),
                          Container(
                            width: double.infinity,
                            child: Text(
                              course['previewFirstField'],
                              style: TextStyle(
                                fontSize: 14
                              ),
                              overflow: TextOverflow.ellipsis,
                            )
                          ),
                          Row(
                            children: [
                              SizedBox(width: 10),
                              Container(
                                child: Text(
                                  course['lastLearnLessonName'].toString(),
                                  style: TextStyle(
                                    fontSize: 14,
                                  )
                                ),
                              )
                            ],
                          ),
                        ]
                      )
                    ),
                    flex: 3,
                  ),
                ]
              ),
            )
          );
        },
        childCount: widget.courseList.length
      )
    );
  }

  @override
  void dispose() {
    super.dispose();
  }
}