import 'package:dio/dio.dart';
import 'InitDio.dart';
import 'AdAPI.dart';
import 'CourseAPI.dart';
import 'UserAPI.dart';
import 'OrderAPI.dart';

class API {
  Dio _dio;

  API() {
    _dio = initDio();
  }

  /// 广告接口
  AdAPI get ad => AdAPI(_dio);

  /// 课程接口
  CourseAPI get course => CourseAPI(_dio);

  /// 用户接口
  UserAPI get user => UserAPI(_dio);

  /// 订单接口
  OrderAPI get order => OrderAPI(_dio);
}