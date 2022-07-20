import 'package:flutter/material.dart';

// DataTable是flutter中的表格   状态管理
class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("DataTable"),
          leading: Icon(Icons.menu),
          actions: [Icon(Icons.settings)],
          elevation: 0.0,
          centerTitle: true,
        ),
        body: UserList());
  }
}

class User {
  String name;
  int age;
  bool selected;

  User(this.name, this.age, {this.selected = false});
}

class UserList extends StatefulWidget {
  UserList({Key key}) : super(key: key);

  @override
  _UserListState createState() => _UserListState();
}

class _UserListState extends State<UserList> {
  List<User> data = [
    User('张三', 18),
    User('张三丰', 218, selected: true),
    User('张翠山', 30),
    User('张无忌', 60),
  ];

  var _sortAscending = true;

  List _getUserRows() {
    List<DataRow> dataRows = [];
    for (int i = 0; i < data.length; i++) {
      dataRows.add(DataRow(
          selected: data[i].selected,
          onSelectChanged: (selected) {
            setState(() {
              data[i].selected = selected;
            });
          },
          cells: [
            DataCell(Text('${data[i].name}')),
            DataCell(Text('${data[i].age}')),
            DataCell(Text('男')),
            DataCell(Text('---')),
          ]));
    }

    return dataRows;
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: SingleChildScrollView(
          scrollDirection: Axis.horizontal,
          child: DataTable(
            sortColumnIndex: 1,
            sortAscending: _sortAscending,
            dataRowHeight: 100,
            horizontalMargin: 20,
            columnSpacing: 100,
            columns: [
              DataColumn(label: Text('姓名')),
              DataColumn(
                  label: Text('年龄'),
                  numeric: true,
                  onSort: (int columnIndex, bool asscending) {
                    setState(() {
                      _sortAscending = asscending;
                      if (asscending) {
                        data.sort((a, b) => a.age.compareTo(b.age));
                      } else {
                        data.sort((a, b) => b.age.compareTo(a.age));
                      }
                    });
                  }),
              DataColumn(label: Text('性别')),
              DataColumn(label: Text('简介')),
            ],
            rows: _getUserRows(),
            // [
            //   DataRow(
            //     cells: [
            //       DataCell(Text('张三')),
            //       DataCell(Text('18')),
            //       DataCell(Text('男')),
            //       DataCell(Text('一个男人')),
            //     ]
            //   ),
            //   DataRow(
            //     cells: [
            //       DataCell(Text('张三')),
            //       DataCell(Text('18')),
            //       DataCell(Text('男')),
            //       DataCell(Text('一个男人')),
            //     ]
            //   ),
            //   DataRow(
            //     cells: [
            //       DataCell(Text('张三')),
            //       DataCell(Text('18')),
            //       DataCell(Text('男')),
            //       DataCell(Text('一个男人')),
            //     ]
            //   )
            // ]
          )),
    );
  }
}
