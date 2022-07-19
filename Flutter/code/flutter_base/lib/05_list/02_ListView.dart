import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("ListView"),
        leading: Icon(Icons.menu),
        actions: [
          Icon(Icons.settings)
        ],
        elevation: 0.0,
        centerTitle: true,
      ),
      body: ListViewDemo()
    );
  }
}

class ListViewDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
        children: [
          ListViewBasic(),
          ListViewHorizontal(),
          ListViewBuilderDemo(),
          ListViewSeperatedDemo(),
        ]
      )
    );
  }
}

class ListViewBasic extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 200,
      child: ListView(
        scrollDirection: Axis.vertical,
        children: [
          ListTile(
            leading: Icon(Icons.access_alarm, size: 50),
            title: Text('access_alarm'),
            subtitle: Text('子标题'),
            trailing: Icon(Icons.keyboard_arrow_right),
          ),
          ListTile(
            leading: Icon(Icons.ac_unit, size: 50),
            title: Text('ac_unit'),
            subtitle: Text('子标题'),
            trailing: Icon(Icons.keyboard_arrow_right),
            selected: true,
            selectedTileColor: Colors.red[100],
          ),
          ListTile(
            leading: Icon(Icons.add_photo_alternate_rounded, size: 50),
            title: Text('add_photo_alternate_rounded'),
            subtitle: Text('子标题'),
            trailing: Icon(Icons.keyboard_arrow_right),
          ),
          ListTile(
            leading: Icon(Icons.fact_check_outlined, size: 50),
            title: Text('fact_check_outlined'),
            subtitle: Text('子标题'),
            trailing: Icon(Icons.keyboard_arrow_right),
          ),
        ]
      )
    );
  }
}

class ListViewHorizontal extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 100,
      child: ListView(
        scrollDirection: Axis.horizontal,
        children: [
          Container(
            width: 160,
            color: Colors.amber,
          ),
          Container(
            width: 160,
            color: Colors.blueAccent,
          ),
          Container(
            width: 160,
            color: Colors.black87,
          ),
          Container(
            width: 160,
            color: Colors.grey,
          ),
        ],
      )
    );
  }
}

class ListViewBuilderDemo extends StatelessWidget {
  final List<Widget> users = new List<Widget>.generate(20, (index) => OutlinedButton(
    onPressed: () {}, 
    child: Text('姓名 $index')
  ));

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 150,
      child: ListView.builder(
        itemCount: users.length,
        itemExtent: 30,
        padding: EdgeInsets.all(10),
        itemBuilder: (context, index) {
          return users[index];
        },
      )
    );
  }
}

class ListViewSeperatedDemo extends StatelessWidget {
  final List<Widget> products = List.generate(20, (index) => ListTile(
    leading: Image.asset('images/flutter.jpg'),
    title: Text('商品标题 $index'),
    subtitle: Text('子标题'),
    trailing: Icon(Icons.keyboard_arrow_right),
  ));

  @override
  Widget build(BuildContext context) {
    Widget dividerOdd = Divider(
      color: Colors.blue,
      thickness: 2
    );

    Widget dividerEven = Divider(
      color: Colors.red,
      thickness: 2
    );

    return Column(
      children: [
        ListTile(
          title: Text('商品列表'),
        ),
        Container(
          height: 200,
          child: ListView.separated(
            itemCount: products.length,
            itemBuilder: (context, index) {
              return products[index];
            },
            // 分隔器的构造器
            separatorBuilder: (context, index) {
              return index%2 == 0 ? dividerEven : dividerOdd;
            },
          )
        ),
      ],
    );
  }
}