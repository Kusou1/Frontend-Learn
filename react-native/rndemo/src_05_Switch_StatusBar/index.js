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
  
  render() {
    return (
      <View style={[styles.container]}>
        <StatusBar 
          hidden={this.state.hideStatusBar}
          backgroundColor="red" // 仅在 Android 应用下有效
          barStyle={'light-content'}
        />

        <Text style={{fontSize: 30, marginVertical: 20}}>是否隐藏状态条</Text>
        <Switch 
         trackColor={{ false: '#999', true: '#666' }}
         thumbColor={this.state.hideStatusBar ? "red" : "white"}
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
