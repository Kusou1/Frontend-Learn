import 'package:dio/dio.dart';

class UserAPI {
  final Dio _dio;

  UserAPI(this._dio);

  /// 用户登录
  Future<dynamic> login({ String phone, String password }) async {
    // 表单数据
    FormData formData = FormData.fromMap({
      "phone": phone, 
      "password": password,
    });
    // 发送 post 请求
    Response res = await _dio.post('/front/user/login', data: formData);

    if (res.data != null) {
      return res.data['content'];
    } else {
      return false;
    }
  }

  /// 获取用户基本信息
  Future<dynamic> userInfo() async {
    Response res = await _dio.get('/front/user/getInfo');
    if (res.data != null) {
      return res.data['content'];
    } else {
      return null;
    }
  }

  /// 获取用户基本信息
  Future<dynamic> logout() async {
    Response res = await _dio.post('/front/user/logout');
    if (res.data != null) {
      return true;
    } else {
      return false;
    }
  }

  /// 获取购买课程
  Future<dynamic> getPurchaseCourse() async {
    Response res = await _dio.get('/front/course/getPurchaseCourse');
    if (res.data != null) {
      return res.data['content'];
    } else {
      return false;
    }
  }
}