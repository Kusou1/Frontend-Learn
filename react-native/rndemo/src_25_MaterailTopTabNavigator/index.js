import * as React from 'react';
import {Text, StyleSheet, View, Button,SafeAreaView} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';

Ionicons.loadFont();

function OrderunpayScreen() {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>待付款</Text>
    </View>
  );
}

function OrderPaidScreen() {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>待发货</Text>
    </View>
  );
}

function OrderSentScreen() {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>待收货</Text>
    </View>
  );
}

function OrderFinishScreen() {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>待评价</Text>
    </View>
  );
}

const MTab = createMaterialTopTabNavigator();

export default function index( ) {
    return (
      <NavigationContainer>
        <MTab.Navigator
          tabBarPosition="top"
          tabBarOptions={{
            tabStyle: {
              borderWidth: 1,
              borderColor: 'red',
            },
            labelStyle: {
              fontSize: 20,
            },
            activeTintColor: 'red',
            inactiveTintColor: '#666',
            showIcon: true,
          }}>
          <MTab.Screen
            name="OrderUnpay"
            component={OrderunpayScreen}
            options={{
              title: '待付款',
              tabBarIcon: ({focused, color}) => {
                return (
                  <Ionicons name="hammer-outline" size={20} color={color} />
                );
              },
            }}
          />
          <MTab.Screen
            name="OrderPaid"
            component={OrderPaidScreen}
            options={{
              title: '待发货',
              tabBarIcon: ({focused, color}) => {
                return (
                  <Ionicons
                    name="arrow-redo-circle-outline"
                    size={20}
                    color={color}
                  />
                );
              },
            }}
          />
          <MTab.Screen
            name="OrderSent"
            component={OrderSentScreen}
            options={{
              title: '待收货',
              tabBarIcon: ({focused, color}) => {
                return (
                  <Ionicons name="arrow-redo-outline" size={20} color={color} />
                );
              },
            }}
          />
          <MTab.Screen
            name="OrderFinish"
            component={OrderFinishScreen}
            options={{
              title: '待评价',
              tabBarIcon: ({focused, color}) => {
                return (
                  <Ionicons
                    name="chatbubble-ellipses-outline"
                    size={20}
                    color={color}
                  />
                );
              },
            }}
          />
        </MTab.Navigator>
      </NavigationContainer>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
});
