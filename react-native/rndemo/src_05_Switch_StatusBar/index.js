import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar, Switch } from 'react-native'

export default class index extends Component {
  constructor() {
    super()

    this.state = {
      hideStatusBar: false
    }
  }

  toggleStatusBar = () => {
    this.setState({
      hideStatusBar: !this.state.hideStatusBar
    })
  }
  // StatusBar控制手机顶部状态栏
  render() {
    return (
      <View style={[styles.container]}>
        <StatusBar 
          hidden={this.state.hideStatusBar} // 隐藏StatusBar
          backgroundColor="black" // 仅在 Android 应用下有效 头部状态栏颜色
          barStyle={'light-content'}
        />

        <Text style={{fontSize: 30, marginVertical: 20}}>是否隐藏状态条</Text>
        <Switch 
         trackColor={{ false: '#000', true: '#000' }}
         thumbColor={this.state.hideStatusBar ? "#ccc" : "white"}
         value={this.state.hideStatusBar}
         onValueChange={this.toggleStatusBar}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
