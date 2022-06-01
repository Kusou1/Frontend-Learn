import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

function FeedScreen(props) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Feed Screen</Text>
      <Button title={"跳到 Profile"} onPress={() => props.navigation.navigate('Profile')} />
      <Button title={"跳到 Settings"} onPress={() => props.navigation.navigate('Settings')} />
    </View>
  )
}

function MessagesScreen(props) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Messages Screen</Text>
    </View>
  )
}

function ProfileScreen(props) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Profile Screen</Text>
    </View>
  )
}

function SettingsScreen(props) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Settings Screen</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator()

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator()

export default class index extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40
  }
})

