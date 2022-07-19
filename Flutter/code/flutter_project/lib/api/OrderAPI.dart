import 'package:dio/dio.dart';

class OrderAPI {
  final Dio _dio;

  OrderAPI(this._dio);

  /// 创建订单
  Future<dynamic> createOrder({ int goodsId }) async {
    Response res = await _dio.post('/front/order/saveOrder', data: {"goodsId": goodsId});
    if (res.data != null) {
      return res.data['content'];
    } else {
      return null;
    }
  }

  /// 发起支付
  Future<dynamic> createPay({
    String orderNo,
    int channel,
    String returnUrl = 'http://edufront.lagou.com'
  }) async {
    Map payData = {
      "goodsOrderNo": orderNo,
      "channel": channel == 1 ? 'weChat' : 'aliPay',
      "returnUrl": returnUrl
    };
    Response res = await _dio.post('/front/pay/saveOrder', data: payData);
    if (res.data != null) {
      return res.data['content'];
    } else {
      return false;
    }
  }
}