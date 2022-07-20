import 'package:flutter/material.dart';
import 'package:dio/dio.dart';

// dio类似于flutter版的axios，可以发送http请求
class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Dio"),
          leading: Icon(Icons.menu),
          actions: [Icon(Icons.settings)],
          elevation: 0.0,
          centerTitle: true,
        ),
        body: DioDemo());
  }
}

class DioDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: ElevatedButton(
          child: Text('点击发送请求'),
          onPressed: () {
            // 调用 HTTP 请求
            getIpAddress();
          }),
    );
  }

  void getIpAddress() async {
    try {
      final url = "https://httpbin.org/ip";
      Response response = await Dio().get(url);
      String ip = response.data['origin'];
      print(ip);
    } catch (e) {
      print(e);
    }
  }
}
