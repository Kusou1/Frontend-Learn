import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // 2. 创建 Provider （注册数据模型）
    return ChangeNotifierProvider(
      create: (BuildContext context) => new LikesModel(),
      child: Scaffold(
        appBar: AppBar(
          title: Text("Provider"),
          leading: Icon(Icons.menu),
          actions: [
            Icon(Icons.settings)
          ],
          elevation: 0.0,
          centerTitle: true,
        ),
        body: MyHomePage()
      ),
    );
  }
}

// 1. 创建数据模型
class LikesModel extends ChangeNotifier {
  int _counter = 0;

  int get counter => _counter;

  incrementCounter() {
    // 累加
    _counter++;

    // 通过 UI 更新
    notifyListeners();
  }
}

class MyHomePage extends StatelessWidget {
  const MyHomePage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          // 3. 在子组件中使用数据模型
          Text(
            '${context.watch<LikesModel>().counter}'
          ),
          TextButton(
            // 3. 在子组件中使用数据模型
            onPressed: Provider.of<LikesModel>(context).incrementCounter, 
            child: Icon(Icons.thumb_up)
          )
        ],
      ),
    );
  }
}