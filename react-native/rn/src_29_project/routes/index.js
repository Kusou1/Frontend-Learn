import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'


import HomeScreen from './HomeStack'
import NewsScreen from './NewsStack'
import UserScreen from './UserStack'

const Tab = createBottomTabNavigator()

export default class index extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="News"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === 'Home') {
              iconName = focused ? 'add-circle' : 'add-circle-outline'
            } else if (route.name === 'News') {
              iconName = focused ? 'settings' : 'settings-outline'
            } else if (route.name === 'User') {
              iconName = focused ? 'person' : 'person-outline'
            }
            return <Ionicons name={iconName} size={size} color={color} />
          }
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray'
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen name="User" component={UserScreen} />
      </Tab.Navigator>
    )
  }
}

const styles = StyleSheet.create({})
