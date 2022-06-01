import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator, Platform } from 'react-native'

export default function index() {
  if (Platform.OS === 'android') {
    alert('当前是安卓应用')
  } else if (Platform.OS === 'ios') {
    alert('当前应用是 iOS')
  }

  return (
    <View style={[styles.container]}>
      <ActivityIndicator color="blue" size={'large'} />
      <ActivityIndicator color="green" size={'small'} />
      {/* 数字指定大小，只在 Android 应用下有效 */}
      <ActivityIndicator color="#00d0ff" size={70} />
      <ActivityIndicator color="red" size={100} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'space-around'
  }
})
