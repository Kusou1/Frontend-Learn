import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {Picker} from '@react-native-picker/picker';

export default class index extends Component {
  constructor() {
    super()

    this.state = {
      color: 'white'
    }
  }
  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.color}]}>
        <Picker
          selectedValue={this.state.color}
          style={{height: 50, width: 100}}
          mode={'dropdown'} // 只在 Android 下有效
          onValueChange={(itemValue, itemIndex) =>
            this.setState({color: itemValue})
          }>
          <Picker.Item label="白色" value="white" />
          <Picker.Item label="红色" value="red" />
        </Picker>
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
