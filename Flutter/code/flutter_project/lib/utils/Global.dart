import 'package:flutter/material.dart';
import 'package:fluro/fluro.dart';
import '../api/API.dart';

class G {
  /// 导航唯一key
  static final GlobalKey<NavigatorState> navigatorKey = GlobalKey();

  /// 路由
  static FluroRouter router;

  /// 初始化 API
  static final API api = API();

  /// 获取构建上下文
  static BuildContext getCurrentContext() => navigatorKey.currentContext;

  /// 解析 Dart 对象 到 字符串
  static parseQuery({Map<String, dynamic> params}) {
    String query = "";
    if (params != null) {
      int index = 0;
      for (String key in params.keys) {
        final String value = Uri.encodeComponent(params[key].toString());
        if (index == 0) {
          query = "?";
        } else {
          query = query + "&";
        }
        query += "$key=$value";
        index++;
      }
    }

    return query;
  }
}