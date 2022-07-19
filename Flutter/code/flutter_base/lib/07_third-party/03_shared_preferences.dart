import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("shared_preferences"),
        leading: Icon(Icons.menu),
        actions: [
          Icon(Icons.settings)
        ],
        elevation: 0.0,
        centerTitle: true,
      ),
      body: SharedPreferencesDemo()
    );
  }
}

class SharedPreferencesDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          ElevatedButton(
            onPressed: _incrementCounter, 
            child: Text('递增')
          ),
          ElevatedButton(
            onPressed: _decrementCounter, 
            child: Text('递减')
          ),
          ElevatedButton(
            onPressed: _removeCounter, 
            child: Text('删除')
          ),
          ElevatedButton(
            onPressed: _addMyContent, 
            child: Text('设置字符串')
          ),
          ElevatedButton(
            onPressed: _getMyContent, 
            child: Text('获取字符串')
          ),
          ElevatedButton(
            onPressed: _clearContent, 
            child: Text('清空')
          ),
        ],
      )
    );
  }

  _incrementCounter() async {
    // 获取保存实例
    SharedPreferences prefs = await SharedPreferences.getInstance();
    int counter = (prefs.getInt('counter') ?? 0) + 1;
    print('Pressed $counter times.');
    await prefs.setInt('counter', counter);
  }

  _decrementCounter() async {
    // 获取保存实例
    SharedPreferences prefs = await SharedPreferences.getInstance();
    int counter = prefs.getInt('counter') ?? 0;
    if (counter > 0) {
      counter--;
    }
    print('Pressed $counter times.');
    await prefs.setInt('counter', counter);
  }

  _removeCounter() async {
    // 获取保存实例
    SharedPreferences prefs = await SharedPreferences.getInstance();
    await prefs.remove('counter');
    int counter = (prefs.getInt('counter') ?? 0) + 1;
    print('Pressed $counter times.');
  }

  _addMyContent() async {
    // 获取保存实例
    SharedPreferences prefs = await SharedPreferences.getInstance();
    await prefs.setString('hi', 'Hello World');
    String content = prefs.getString('hi') ?? "";
    print('设置字符串的内容是 $content');
  }

  _getMyContent() async {
    // 获取保存实例
    SharedPreferences prefs = await SharedPreferences.getInstance();
    String content = prefs.getString('hi') ?? "";
    print('获取字符串的内容是 $content');
  }

  _clearContent() async {
    // 获取保存实例
    SharedPreferences prefs = await SharedPreferences.getInstance();
    await prefs.clear();
  }
}