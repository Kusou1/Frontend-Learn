import 'package:fluro/fluro.dart';
import 'RoutesHandler.dart';

class Routes {
  static void configureRoutes(FluroRouter router) {
    router.define('/', handler: indexHandler);
    router.define('/login', handler: loginHandler);
    router.define('/provider_test', handler: providerTestHandler);
    router.define('/course_detail', handler: courseDetailHandler);
    router.define('/profile', handler: profileHandler);
    router.define('/pay', handler: payHandler);
    router.define('/splash', handler: splashHandler);
    router.notFoundHandler = notfoundHandler;
  }
}