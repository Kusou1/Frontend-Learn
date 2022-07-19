import 'package:dio/dio.dart';
import '../utils/Global.dart';
import '../providers/UserProvider.dart';
import 'package:provider/provider.dart';

Dio initDio() {
  // 声明 Dio 的配置项
  BaseOptions _baseOptions = BaseOptions(
    baseUrl: "http://eduboss.lagou.com", // 接口请求地址
    connectTimeout: 5000, // 请求服务器的超时时间
  );

  Dio dio = Dio(_baseOptions); // 初始化

  // 添加拦截器
  dio.interceptors.add(
    InterceptorsWrapper(
      // 请求拦截
      onRequest: (RequestOptions options) {
        print('请求之前进行拦截');
        /// 将 access_token 封装到 header 中
        var user = G.getCurrentContext().read<UserProvider>().user;
        if (user.isNotEmpty) {
          // print(user['access_token']);
          options.headers['Authorization'] = user['access_token'];
        }
      },
      // 响应拦截
      onResponse: (Response response) {
        print('响应之前进行拦截');
        if (response.data == null || response.data['state'] != 1) {
          print('响应失败：'+response.data['message']);
          response.data = null;
        }
        return response;
      },
      // 报错拦截
      onError: (DioError e) {
        return e;
      }
    )
  );

  // 返回 dio
  return dio;
}