import React, { Component } from 'react'
import { Text, StyleSheet, View, Alert } from 'react-native'
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-async-storage/async-storage'
import storage from '../src_17_AsyncStorage/storage'


export default class index extends Component {
  componentDidMount() {

    const location = storage.get('coords')
    // 如果本地存储中，没有位置信息，则获取地理位置
    if (location === undefined || location == '') {
      // 组件加载时，获取地理位置信息
      Geolocation.getCurrentPosition(
        info => {
          console.log(info)
          // 获取地理位置成功后，将其保存下来
          AsyncStorage.setItem('coords', JSON.stringify(info.coords))
        },
        error => Alert.alert('报错', JSON.stringify(error)),
        {
          timeout: 20000
        }
      );
    }
  }
  
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
