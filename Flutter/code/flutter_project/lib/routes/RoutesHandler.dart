import 'package:flutter/material.dart';
import 'package:fluro/fluro.dart';
import '../pages/Index.dart';
import '../pages/notfound/NotFound.dart';
import '../pages/user/Login.dart';
import '../pages/mine/ProviderTest.dart';
import '../pages/course/CourseDetail.dart';
import '../pages/mine/Profile.dart';
import '../pages/pay/Pay.dart';
import '../pages/splash/Splash.dart';

/// 空页面
var notfoundHandler = Handler(
  handlerFunc: (BuildContext context, Map<String, List<String>> params) {
    return NotFound();
  }
);

/// 首页
var indexHandler = Handler(
  handlerFunc: (BuildContext context, Map<String, List<String>> params) {
    return Index();
  }
);

/// 登陆页
var loginHandler = Handler(
  handlerFunc: (BuildContext context, Map<String, List<String>> params) {
    return Login();
  }
);

/// Provider 功能测试页
var providerTestHandler = Handler(
  handlerFunc: (BuildContext context, Map<String, List<String>> params) {
    return ProviderTest();
  }
);

/// 课程详情
var courseDetailHandler = Handler(
  handlerFunc: (BuildContext context, Map<String, List<String>> params) {
    print('详情参数');
    print(params);
    return CourseDetail(id: int.parse(params['id'].first), title: params['title'].first);
  }
);

/// 编辑个人信息
var profileHandler = Handler(
  handlerFunc: (BuildContext context, Map<String, List<String>> params) {
    return Profile();
  }
);

/// 支付页面
var payHandler = Handler(
  handlerFunc: (BuildContext context, Map<String, List<String>> params) {
    print(params);
    return Pay(id: int.parse(params['id'].first), title: params['title'].first);
  }
);

/// Splash 页
var splashHandler = Handler(
  handlerFunc: (BuildContext context, Map<String, List<String>> params) {
    return Splash();
  }
);