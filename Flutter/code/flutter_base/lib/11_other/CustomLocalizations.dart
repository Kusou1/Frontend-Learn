import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'dart:convert';

class CustomLocalizations {
  final Locale locale;

  CustomLocalizations(this.locale);

  // static Map<String, Map<String, String>> _localizedValues = {
    // "en": {
    //   "title": "Home",
    //   "greet": "Hello",
    // },
  //   "zh": {
  //     "title": "首页",
  //     "greet": "你好",
  //   },
  // };

  Map<String, String> _localizedValues;

  Future<bool> loadJSON() async {
    String jsonString = await rootBundle.loadString('lang/${locale.languageCode}.json');
    Map<String, dynamic> jsonMap = json.decode(jsonString);

    _localizedValues = jsonMap.map((key, value) {
      return MapEntry(key, value.toString());
    });

    return true;
  }

  String t(String key) {
    // _localizedValues['zh']['title']
    // return _localizedValues[locale.languageCode][key];
    return _localizedValues[key];
  }

  static CustomLocalizations of(BuildContext context) {
    return Localizations.of(context, CustomLocalizations);
  }

  static CustomLocalizationsDelegate delegate = CustomLocalizationsDelegate();
}

class CustomLocalizationsDelegate extends LocalizationsDelegate<CustomLocalizations> {
  @override
  bool isSupported(Locale locale) {
    return ["en", "zh"].contains(locale.languageCode);
  }

  @override
  Future<CustomLocalizations> load(Locale locale) async {
    // return SynchronousFuture(CustomLocalizations(locale));
    CustomLocalizations localizations = CustomLocalizations(locale);
    await localizations.loadJSON();
    return localizations;
  }

  @override
  bool shouldReload(covariant LocalizationsDelegate<CustomLocalizations> old) {
    return false;
  }
}