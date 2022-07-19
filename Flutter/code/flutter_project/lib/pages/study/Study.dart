import 'package:flutter/material.dart';
import '../../utils/Global.dart';
import 'PurchaseCourse.dart';

class Study extends StatefulWidget {
  Study({Key key}) : super(key: key);

  @override
  _StudyState createState() => _StudyState();
}

class _StudyState extends State<Study> {
  List courseList = [];

  @override
  void initState() {
    // 调用购买课程接口
    G.api.user.getPurchaseCourse().then((value) {
      if (value != false) {
        setState(() {
          courseList = value;
        });
      }
    });

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return CustomScrollView(
      slivers: [
        SliverPadding(
          padding: EdgeInsets.all(5),
          sliver: PurchaseCourse(courseList: courseList),
        )
      ]
    );
  }

  @override
  void dispose() {
    super.dispose();
  }
}