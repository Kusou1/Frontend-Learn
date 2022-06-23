import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/Home'
import TakePictureScreen from '../screens/Home/TakePicture'

const Stack = createStackNavigator()

export default class HomeStack extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Stack.Navigator 
        initialRouteName="Home" 
        // headerMode={'none'}
      >
        <Stack.Screen name="TakePicture" component={TakePictureScreen} />
        <Stack.Screen name="Home" component={HomeScreen} 
          options={{
            title: "首页",
            headerStyle: {
              backgroundColor: '#00b38a',
              elevation: 0, // 删除 Android 上的阴影
              shadowOpacity: 0, // 删除 iOS 下的阴影
            },
            headerTintColor: '#fff',
            headerRight: () => (
              <TouchableOpacity onPress={() => this.props.navigation.navigate('TakePicture')}>
                <Text style={{fontSize: 18, color: 'white', marginRight: 10}}>拍照</Text>
              </TouchableOpacity> 
            )
          }}
        />
      </Stack.Navigator>
    )
  }
}

const styles = StyleSheet.create({})
