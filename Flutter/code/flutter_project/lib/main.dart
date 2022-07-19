import 'package:fluro/fluro.dart';
import 'package:flutter/material.dart';
import 'pages/Index.dart';
import 'routes/Routes.dart';
import 'utils/Global.dart';
import 'package:provider/provider.dart';
import 'providers/CurrentIndexProvider.dart';
import 'providers/UserProvider.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

void main() {
  // 初始化路由
  FluroRouter router = new FluroRouter();
  Routes.configureRoutes(router);
  // 初始化后的路由，放到全局组件中
  G.router = router;

  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider.value(value: CurrentIndexProvider()),
        ChangeNotifierProvider.value(value: UserProvider()),
        // 若干个类似的 Provider
      ],
      child: MyApp()
    ),
  );
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    // 屏幕适配的初始化
    return ScreenUtilInit(
      designSize: Size(750, 1334),
      allowFontScaling: false,
      builder: () => MaterialApp(
        navigatorKey: G.navigatorKey,
        title: 'Flutter Demo',
        // home: Index(),
        onGenerateRoute: G.router.generator,
        initialRoute: '/splash',
      ),
    );
  }
}
