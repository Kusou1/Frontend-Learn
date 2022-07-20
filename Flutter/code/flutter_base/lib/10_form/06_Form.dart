import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Form"),
          leading: Icon(Icons.menu),
          actions: [Icon(Icons.settings)],
          elevation: 0.0,
          centerTitle: true,
        ),
        body: FormDemo());
  }
}

class FormDemo extends StatefulWidget {
  FormDemo({Key key}) : super(key: key);

  @override
  _FormDemoState createState() => _FormDemoState();
}

class _FormDemoState extends State<FormDemo> {
  // 创建表单Form，并以GlobalKey作为唯一性表示
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(20),
      child: Column(
        children: [
          Form(
              key: _formKey,
              child: Column(
                children: [
                  // 添加带验证逻辑的TextFormField
                  TextFormField(
                      decoration: InputDecoration(hintText: '手机号'),
                      validator: (value) {
                        RegExp reg = new RegExp(r'^\d{11}$');
                        if (!reg.hasMatch(value)) {
                          return '手机号不符合，必须为11位';
                        }
                        return null;
                      })
                ],
              )),
          Row(
            children: [
              Expanded(
                  child: ElevatedButton(
                onPressed: () {
                  if (_formKey.currentState.validate()) {
                    print('提交成功');
                  }
                },
                child: Text('提交'),
              ))
            ],
          )
        ],
      ),
    );
  }
}
