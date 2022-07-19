import 'package:flutter/material.dart';

class CustomTheme {
  // 公共样式
  static const double _CardBorderWidth = 20;
  static const double _CardElevation = 20;

  // 高亮主题
  static final ThemeData lightTheme = ThemeData(
    primaryColor: Colors.red,
    cardTheme: CardTheme(
      color: Colors.red[100],
      shape: Border.all(width: _CardBorderWidth, color: Colors.red),
      elevation: _CardElevation,
    )
  );

  // 黑暗主题
  static final ThemeData darkTheme = ThemeData(
    primaryColor: Colors.grey,
    cardTheme: CardTheme(
      color: Colors.grey[100],
      shape: Border.all(width: _CardBorderWidth, color: Colors.black45),
      elevation: _CardElevation,
    )
  );
}