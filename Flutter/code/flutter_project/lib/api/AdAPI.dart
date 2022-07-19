import 'package:dio/dio.dart';

class AdAPI {
  final Dio _dio;

  AdAPI(this._dio);

  /// 广告列表 = 首页
  Future<dynamic> adList({ String spaceKeys = '999'}) async {
    Response res = await _dio.get('/front/ad/getAllAds',
      queryParameters: {
        "spaceKeys": spaceKeys
      }
    );

    List adList = res.data['content'][0]['adDTOList'];
    return adList;
  }
}