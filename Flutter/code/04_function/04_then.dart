import 'package:http/http.dart' as http;
import 'dart:convert';

// https://httpbin.org/ip 返回 IP 地址
Future getIPAddress() {
  final url = 'https://httpbin.org/ip';
  return http.get(url).then((response) {
    // print(response.body);
    String ip = jsonDecode(response.body)['origin'];
    return ip;
  });
}

void main() {
  // 调用 getIPAddress
  getIPAddress()
    .then((ip) => print(ip))
    .catchError((error) => print(error));
}