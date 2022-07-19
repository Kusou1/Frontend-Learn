import 'package:flutter/material.dart';
import 'dart:convert';

class UserProvider with ChangeNotifier {
  bool _isLogin = false;
  Map _user = {};
  Map _userInfo = {};

  bool get isLogin => _isLogin;
  Map get user => _user;
  Map get userInfo => _userInfo;

  doLogin(data) {
    if (data != false) {
      _isLogin = true;
      _user = json.decode(data);

      notifyListeners();
    }
  }

  doLogout() {
    _isLogin = false;
    _user = {};
    _userInfo = {};

    notifyListeners();
  }

  // 获取用户信息后，给状态赋值
  setUserInfo(data) {
    _userInfo = data;
  }
}