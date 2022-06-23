import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import NewsScreen from '../screens/News'
import DetailScreen from '../screens/News/Detail'

const Stack = createStackNavigator()

export default class NewsStack extends Component {
  render() {
    return (
      <Stack.Navigator >
        <Stack.Screen name="News" component={NewsScreen} 
          options={{
            title: "新闻列表",
            headerStyle: {
              backgroundColor: '#fff'
            }
          }}
        />
        <Stack.Screen name="NewsDetail" component={DetailScreen} 
          options={{
            title: "新闻详情",
            headerStyle: {
              backgroundColor: '#fff'
            }
          }}
        />
      </Stack.Navigator>
    )
  }
}

const styles = StyleSheet.create({})
