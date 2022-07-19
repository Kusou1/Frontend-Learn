import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("TextField"),
        leading: Icon(Icons.menu),
        actions: [
          Icon(Icons.settings)
        ],
        elevation: 0.0,
        centerTitle: true,
      ),
      body: TextFieldDemo()
    );
  }
}

class TextFieldDemo extends StatefulWidget {
  TextFieldDemo({Key key}) : super(key: key);

  @override
  _TextFieldDemoState createState() => _TextFieldDemoState();
}

class _TextFieldDemoState extends State<TextFieldDemo> {
  String phone;
  String password;
  String description;

  _register() {
    print(phone);
    print(password);
    print(description);
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(20),
       child: Column(
         children: [
           TextField(
             autofocus: true,
             keyboardType: TextInputType.phone,
             decoration: InputDecoration(
               prefixIcon: Icon(Icons.mobile_screen_share),
               // 获取焦点时,高亮的边框样式
               focusedBorder: UnderlineInputBorder(
                 borderSide: BorderSide(
                   color: Colors.green,
                 )
               ),
               // 默认边框样式
               enabledBorder: UnderlineInputBorder(
                 borderSide: BorderSide(
                   color: Colors.yellow,
                 )
               ),
               labelText: "手机号",
               hintText: "请输入手机号",
               hintStyle: TextStyle(
                 color: Colors.green,
                 fontSize: 14,
               ),
             ),
             maxLength: 11,
             onChanged: (value) {
               setState(() {
                 phone = value;
               });
             },
           ),
           TextField(
             obscureText: true,
             keyboardType: TextInputType.text,
             decoration: InputDecoration(
               prefixIcon: Icon(Icons.code_outlined),
               // 获取焦点时,高亮的边框样式
               focusedBorder: UnderlineInputBorder(
                 borderSide: BorderSide(
                   color: Colors.green,
                 )
               ),
               // 默认边框样式
               enabledBorder: UnderlineInputBorder(
                 borderSide: BorderSide(
                   color: Colors.yellow,
                 )
               ),
               labelText: "密码",
               hintText: "请输入密码",
               hintStyle: TextStyle(
                 color: Colors.green,
                 fontSize: 14,
               ),
             ),
             onChanged: (value) {
               setState(() {
                 password = value;
               });
             },
           ),
           TextField(
             maxLines: 5,
             keyboardType: TextInputType.text,
             decoration: InputDecoration(
               prefixIcon: Icon(Icons.person),
               // 获取焦点时,高亮的边框样式
               focusedBorder: UnderlineInputBorder(
                 borderSide: BorderSide(
                   color: Colors.green,
                 )
               ),
               // 默认边框样式
               enabledBorder: UnderlineInputBorder(
                 borderSide: BorderSide(
                   color: Colors.yellow,
                 )
               ),
               labelText: "简介",
               hintText: "请介绍一下自己",
               hintStyle: TextStyle(
                 color: Colors.green,
                 fontSize: 14,
               ),
             ),
             onChanged: (value) {
               setState(() {
                 description = value;
               });
             },
           ),
         
           // 声明按钮
           Container(
             width: double.infinity,
             child: ElevatedButton(
              onPressed: () {
                _register();
              }, 
              child: Text('提交'),
            ),
           )
         ],
       ),
    );
  }
}