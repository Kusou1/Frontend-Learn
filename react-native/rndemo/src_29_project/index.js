import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import MainTab from './routes'
import { connect } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/NoAuth/Login'
import RegisterScreen from './screens/NoAuth/Register'
import SplashScreen from './screens/NoAuth/Splash'

const mapStateToProps = state => {
  return {
    isLogin: state.User.isLogin
  }
}

const Stack = createStackNavigator();

class index extends Component {
  render() {
    return (
      <>
      {
        this.props.isLogin
        ?
        (<MainTab />)
        :
        (
          <Stack.Navigator
            headerMode="none"
            initialRouteName={'Splash'} 
          >
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>
        )
      }
      </>
    )
  }
}

export default connect(mapStateToProps)(index)

const styles = StyleSheet.create({})
