import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Calendar'),
        centerTitle: true,
        elevation: 0.0,
        leading: Icon(Icons.menu),
        actions: [
          Icon(Icons.search)
        ],
        backgroundColor: Colors.blue,
      ),
      body: CalendarDemo(),
    );
  }
}

class CalendarDemo extends StatefulWidget {
  CalendarDemo({Key key}) : super(key: key);

  @override
  _CalendarDemoState createState() => _CalendarDemoState();
}

class _CalendarDemoState extends State<CalendarDemo> {
  @override
  Widget build(BuildContext context) {
    return Container(
       child: ListView(
        padding: EdgeInsets.all(15),
        children: [
          _showDatePicker(context),
          _showDatePickerForYear(context),
          _showDatePickerForInput(context),
          _showDatePickerForTheme(context),
          _showTimePicker(context),

          Text("CalendarDatePicker day"),
          SizedBox(height: 30),
          _calendarDatePicker(DatePickerMode.day),
          SizedBox(height: 30),
          Text("CalendarDatePicker year"),
          SizedBox(height: 30),
          _calendarDatePicker(DatePickerMode.year),
          SizedBox(height: 30),
          Text("_cupertinoTimePicker - hms"),
          SizedBox(height: 30),
          _cupertinoTimePicker(CupertinoTimerPickerMode.hms),
          SizedBox(height: 30),
          Text("_cupertinoTimePicker - hm"),
          SizedBox(height: 30),
          _cupertinoTimePicker(CupertinoTimerPickerMode.hm),
          SizedBox(height: 30),
          Text("_cupertinoTimePicker - ms"),
          SizedBox(height: 30),
          _cupertinoTimePicker(CupertinoTimerPickerMode.ms),
          SizedBox(height: 30),
          Text("CupertinoDatePicker - time"),
          SizedBox(height: 30),
          _cupertinoDatePicker(CupertinoDatePickerMode.time),
          SizedBox(height: 30),
          Text("CupertinoDatePicker - dateAndTime"),
          SizedBox(height: 30),
          _cupertinoDatePicker(CupertinoDatePickerMode.dateAndTime),
          SizedBox(height: 30),
          Text("CupertinoDatePicker - date"),
          SizedBox(height: 30),
          _cupertinoDatePicker(CupertinoDatePickerMode.date),
        ],
      ),
    );
  }

  ElevatedButton _showDatePicker(context) {
    return ElevatedButton(
      child: Text("showDatePicker"),
      onPressed: () {
        showDatePicker(
          context: context,
          initialDatePickerMode: DatePickerMode.day, // 日期选择模式，默认为天数选择
          initialDate: DateTime.now(), // 初始化选中日期
          firstDate: DateTime(2020, 6), // 开始日期
          lastDate: DateTime(2021, 6), // 结束日期
          initialEntryMode: DatePickerEntryMode.calendar, // 日历弹框样式

          currentDate: DateTime.now(), // 当前日期
          helpText: "日期选择器", // 左上方提示
          cancelText: "取消",  // 取消按钮文案
          confirmText: "确定",  // 确认按钮文案

          errorFormatText: "errorFormatText",  // 格式错误提示
          errorInvalidText: "errorInvalidText",  // 输入不在 first 与 last 之间日期提示
          fieldLabelText: "fieldLabelText",  // 输入框上方提示
          fieldHintText: "fieldHintText",  // 输入框为空时内部提示
          useRootNavigator: true, // 是否为根导航器
          // 设置不可选日期
          selectableDayPredicate: (dayTime) {
            if (dayTime == DateTime(2021, 1, 15)) {
              return false;
            }
            return true;
          }
        );
      },
    );
  }

  ElevatedButton _showDatePickerForYear(context) {
    return ElevatedButton(
      child: Text("showDatePicker - YearMode"),
      onPressed: (){
        showDatePicker(
          context: context,
          initialDatePickerMode: DatePickerMode.year, // 日期选择模式，默认为天数选择
          initialEntryMode: DatePickerEntryMode.calendar, // 日历弹框样式
          initialDate: DateTime.now(), // 初始化选中日期
          firstDate: DateTime(2015, 6), // 开始日期
          lastDate: DateTime(2025, 6), // 结束日期
          currentDate: DateTime.now(), // 当前日期
          helpText: "年份选择器", // 左上方提示
          cancelText: "取消", // 取消按钮文案
          confirmText: "确认", // 确认按钮文案
        );
      },
    );
  }

  ElevatedButton _showDatePickerForInput(context) {
    return ElevatedButton(
      child: Text("showDatePicker - InputMode"),
      onPressed: (){
        showDatePicker(
            context: context,
            initialEntryMode: DatePickerEntryMode.input,  // 日历弹框样式
            initialDate: DateTime.now(), // 初始化选中日期
            firstDate: DateTime(2020, 6), // 开始日期
            lastDate: DateTime(2021, 6), // 结束日期
            textDirection: TextDirection.rtl, // 文字方向

            currentDate: DateTime(2020, 10, 20), // 当前日期
            helpText: "helpText", // 左上方提示
            cancelText: "cancelText", // 取消按钮文案
            confirmText: "confirmText", // 确认按钮文案

            errorFormatText: "errorFormatText",  // 格式错误提示
            errorInvalidText: "errorInvalidText",  // 输入不在 first 与 last 之间日期提示

            fieldLabelText: "fieldLabelText",  // 输入框上方提示
            fieldHintText: "fieldHintText",  // 输入框为空时内部提示

            // initialDatePickerMode: DatePickerMode.day, // 日期选择模式，默认为天数选择
            useRootNavigator: true, // 是否为根导航器
            // 设置不可选日期，这里将 2020-10-15，2020-10-16，2020-10-17 三天设置不可选
            selectableDayPredicate: (dayTime){
              if (dayTime == DateTime(2020, 10, 15) || dayTime == DateTime(2020, 10, 16) || dayTime == DateTime(2020, 10, 17)) {
                return false;
              }
              return true;
            }
        );
      },
    );
  }

  ElevatedButton _showDatePickerForTheme(context) {
    return ElevatedButton(
      child: Text("showDatePicker - InputMode"),
      onPressed: (){
        showDatePicker(
          context: context,
          builder: (context, child) {
            return Theme(
              data: ThemeData(
                cardColor: Colors.red,
                brightness: Brightness.dark,
              ),
              child: child,
            );
          },
          initialDatePickerMode: DatePickerMode.year, // 日期选择模式，默认为天数选择
          initialDate: DateTime.now(), // 初始化选中日期
          firstDate: DateTime(2018, 6),  // 开始日期
          lastDate: DateTime(2025, 6),  // 结束日期
          currentDate: DateTime(2020, 10, 20),  // 当前日期
          helpText: "helpText", // 左上方提示
          cancelText: "cancelText",  // 取消按钮文案
          confirmText: "confirmText",  // 确认按钮文案
        );
      },
    );
  }

  ElevatedButton _showTimePicker(context) {
    return ElevatedButton(
      child: Text("showTimePicker - InputMode"),
      onPressed: (){
        showTimePicker(
          context: context,
          initialTime: TimeOfDay(hour: 10, minute: 30),
          initialEntryMode: TimePickerEntryMode.input,
          helpText: "时间选择器",
          cancelText: "取消",
          confirmText: "确定"
        );
      },
    );
  }

  CalendarDatePicker _calendarDatePicker(DatePickerMode mode) {
    return CalendarDatePicker(
      initialCalendarMode: mode, // 日期选择样式
      initialDate: DateTime.now(), // 初始化选中日期~
      currentDate: DateTime.now(), // 当前日期~
      firstDate: DateTime(2010, 9, 10),  // 开始日期
      lastDate: DateTime(2030, 9, 10),  // 结束日期
      
      // 选中日期改变回调函数
      onDateChanged: (dateTime){
        print("选择日期 $dateTime");
      },
      // 月份改变回调函数
      onDisplayedMonthChanged: (dateTime){
        print("选择月份 $dateTime");
      },
      // 筛选日期可不可点回调函数
      selectableDayPredicate: (dayTime) {
        if (dayTime == DateTime(2021, 1, 15)) {
          return false;
        }
        return true;
      }
    );
  }

  CupertinoTimerPicker _cupertinoTimePicker(CupertinoTimerPickerMode mode) {
    return CupertinoTimerPicker(
      mode: mode, // 展示模式，默认为 hms
      initialTimerDuration: Duration(hours: 5, minutes: 10), // 默认选中时间
      minuteInterval: 10, // 分钟间隔
      secondInterval: 10, // 秒间隔
      alignment: Alignment.center, // 对齐方式
      backgroundColor: Colors.amber[200], // 背景颜色
      // 滑动后，每次改变回调函数
      onTimerDurationChanged: (dayTime){
        print("选中时间 $dayTime");
      },
    );
  }

  Container _cupertinoDatePicker(CupertinoDatePickerMode mode) {
    return Container(
      height: 300,
      child: CupertinoDatePicker(
        mode: mode, // 展示模式, 默认为 dateAndTime
        initialDateTime: DateTime(2020, 10, 10), // 默认选中日期
        minimumDate: DateTime(2010, 10, 10), // 最小可选日期
        maximumDate: DateTime(2021, 10, 10), // 最大可选日期
        minuteInterval: 10, // 分钟间隔
        use24hFormat: true, // 是否采用24小时制
        backgroundColor: Colors.greenAccent[200], // 背景色
        onDateTimeChanged: (dayTime) {
          print("选择日期时间 $dayTime");
        },
      ),
    );
  }
}