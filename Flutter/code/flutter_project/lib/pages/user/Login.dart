import 'package:flutter/material.dart';
import '../../utils/Global.dart';
import '../../providers/UserProvider.dart';
import 'package:provider/provider.dart';

class Login extends StatefulWidget {
  Login({Key key}) : super(key: key);

  @override
  _LoginState createState() => _LoginState();
}

class _LoginState extends State<Login> {
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  String _phone;
  String _password;
  
  @override
  Widget build(BuildContext context) {
    UserProvider userProvider = Provider.of<UserProvider>(context);

    return Scaffold(
      appBar: AppBar(
        title: Text('用户登陆'),
        centerTitle: true,
      ),
      body: Container(
        padding: EdgeInsets.all(20),
        child: Column(
          children: [
            Form(
              key: _formKey,
              child: Column(
                children: [
                  TextFormField(
                    decoration: InputDecoration(
                      hintText: '手机号'
                    ),
                    validator: (value) {
                      RegExp reg = new RegExp(r'^\d{11}$');
                      if (!reg.hasMatch(value)) {
                        return '手机号非法111';
                      }
                      return null;
                    },
                    onSaved: (value) {
                      print('_phone onSaved');
                      _phone = value;
                    },
                  ),
                  TextFormField(
                    obscureText: true,
                    decoration: InputDecoration(
                      hintText: '密码'
                    ),
                    validator: (value) {
                      return value.length < 6 ? "密码长度不够": null;
                    },
                    onSaved: (value) {
                      print('_password onSaved');
                      _password = value;
                    },
                  )
                ],
              )
            ),
            Row(
              children: [
                Expanded(
                  child: ElevatedButton(
                    onPressed: () async {
                      if (_formKey.currentState.validate()) {
                        // print('提交成功');
                        // 提交表单
                        // print('_formKey.currentState.save() - Before');
                        _formKey.currentState.save();
                        // print('_formKey.currentState.save() - After');
                        
                        // 调用登录接口
                        var res = await G.api.user.login(phone: _phone, password: _password);
                        if (res != false) {
                          print('登录成功');
                          userProvider.doLogin(res); // 修改用户的登录状态
                          G.router.pop(context);
                        } else {
                          print('登录失败');
                          _formKey.currentState.reset();
                        }
                      }
                    }, 
                    child: Text('提交'),
                  )
                ),
                SizedBox(
                  width: 20,
                ),
                Expanded(
                  child: ElevatedButton(
                    onPressed: () {
                      _formKey.currentState.reset();
                    }, 
                    child: Text('重置'),
                  )
                )
              ],
            )
          ],
        ),
      ),
    );
  }

  @override
  void dispose() {
    super.dispose();
  }
}