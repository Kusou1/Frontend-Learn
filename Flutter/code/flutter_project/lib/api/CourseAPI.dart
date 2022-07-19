import 'package:flutter/material.dart';
import 'package:dio/dio.dart';

class CourseAPI {
  final Dio _dio;

  CourseAPI(this._dio);

  /// 课程列表
  Future<dynamic> courseList() async {
    Response res = await _dio.get('/front/course/getAllCourse');

    List target = res.data['content'];
    return target;
  }

  /// 课程详情
  Future<dynamic> courseDetail({@required int id}) async {
    Response res = await _dio.get('/front/course/getCourseById',
      queryParameters: {
        'courseId': id
      }
    );

    return res.data['content'];
  }

  /// 课程章节
  Future<dynamic> courseSection({@required int id}) async {
    Response res = await _dio.get('/front/course/session/getSectionAndLesson',
      queryParameters: {
        'courseId': id
      }
    );

    return res.data['content'];
  }
}