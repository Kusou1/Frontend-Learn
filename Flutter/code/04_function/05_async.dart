import 'package:http/http.dart' as http;
import 'dart:convert';

// https://httpbin.org/ip 返回 IP 地址
Future getIPAddress() async {
  final url = 'https://httpbin.org/ip';
  final response = await http.get(url);
  String ip = jsonDecode(response.body)['origin'];
  return ip;
}

void main() async {
  // 调用 getIPAddress
  try {
    final ip = await getIPAddress();
    print(ip);
  } catch (error) {
    print(error);
  }
}