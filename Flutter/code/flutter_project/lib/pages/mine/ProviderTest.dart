import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class Counter with ChangeNotifier {
  int _count = 0;
  int get count => _count;

  void increment() {
    _count++;
    notifyListeners();
  }
}

class ProviderTest extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    print('ProviderTest build');
    return MaterialApp(
      title: 'Provider Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Provider Demo'),
      debugShowCheckedModeBanner: false,
    );
  }
}

class MyHomePage extends StatelessWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;
  Counter _counter = Counter();
  
  @override
  Widget build(BuildContext context) {
    print('MyHomePage build');
    return ChangeNotifierProvider.value(
      value: _counter,
      child: Scaffold(
        appBar: AppBar(
          title: Text(title),
          centerTitle: true,
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: <Widget>[
              ExampleProviderWidget(),
              ExampleConsumerWidget(),
              ExampleNoListenWidget()
            ],
          ),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () => _counter.increment(),
          tooltip: 'Increment',
          child: Icon(Icons.add),
        ),
      ),
    );
  }
}

class ExampleProviderWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    print('ExampleProviderWidget build');
    Counter counter = Provider.of<Counter>(context);

    return Expanded(
      child: Container(
        color: Colors.green,
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text(
                'Provider.of<Counter>(context):',
                style: TextStyle(fontSize: 20),
              ),
              Text(
                '${counter.count}',
                style: Theme.of(context).textTheme.headline1,
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class ExampleConsumerWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    print('ExampleConsumerWidget build');
    return Expanded(
      child: Consumer<Counter>(
        builder: (context, counter, _) {
          return Container(
            color: Colors.blue,
            child: Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Text(
                    'Consumer<Counter>(context):',
                    style: TextStyle(fontSize: 20),
                  ),
                  Text(
                    '${counter.count}',
                    style: Theme.of(context).textTheme.headline1,
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}

class ExampleNoListenWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    print('ExampleNoListenWidget build');
    Counter counter = Provider.of<Counter>(context, listen: false);

    return Expanded(
      child: Container(
        color: Colors.red,
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text(
                'Provider.of<Counter>(context, listen: false):',
                style: TextStyle(fontSize: 20),
              ),
              Text(
                '${counter.count}',
                style: Theme.of(context).textTheme.headline1,
              ),
              RaisedButton(
                child: Text("Increment"),
                onPressed: () => counter.increment(),
              )
            ],
          ),
        ),
      ),
    );
  }
}