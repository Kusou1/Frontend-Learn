import React, { Component } from 'react'
import { Text, StyleSheet, View, Alert, Button } from 'react-native'

export default class index extends Component {
  createTwoButtonAlert = () => {
    Alert.alert(
      "警告标题",
      "警告内容",
      [
        {
          text:"取消",
          onPress: () => console.log('Cancel'),
          style: 'cancel'
        },
        {
          text:"确认",
          onPress: () => console.log('OK'),
          style: 'default'
        }
      ]
    )
  }

  createThreeButtonAlert = () => {
    Alert.alert(
      "更新提示",
      "发现新版本，是否现在更新",
      [
        {
          text: '稍后再试',
          onPress: () => console.log('稍后提醒我'),
        },
        {
          text:"取消",
          onPress: () => console.log('Cancel'),
          style: 'cancel'
        },
        {
          text:"确认",
          onPress: () => console.log('OK'),
          style: 'default'
        }
      ]
    )
  }

  render() {
    return (
      <View style={[styles.container]}>
        <Button
          title="alert"
          onPress={() => {
            alert('我是一个按钮')
          }}
        />

        <Button 
          title="Alert.alert"
          onPress={() => {
            Alert.alert('我是一个按钮')
          }}
          color={'red'}
        />

        <Button 
          title="两个按钮"
          onPress={this.createTwoButtonAlert}
          color={'green'}
        />

        <Button 
          title="三个个按钮"
          onPress={this.createThreeButtonAlert}
          color={'tomato'}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})
