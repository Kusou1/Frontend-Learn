import 'package:flutter/material.dart';
import 'CustomLocalizations.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        // title: Text("Home"),
        // title: Text(Localizations.of(context, CustomLocalizations).t('title')),
        title: Text(CustomLocalizations.of(context).t('title')),
        leading: Icon(Icons.menu),
        actions: [
          Icon(Icons.settings)
        ],
        elevation: 0.0,
        centerTitle: true,
      ),
      body: HomePage()
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text(
        // "Hello",
        // Localizations.of(context, CustomLocalizations).t('greet'),
        CustomLocalizations.of(context).t('greet'),
        style: TextStyle(
          fontSize: 60
        )
      ),
    );
  }
}
