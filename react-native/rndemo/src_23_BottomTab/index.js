import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {NavigationContainer} from '@react-navigation/native';
Ionicons.loadFont()
function HomeScreen(prop) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Home Screen</Text>
    </View>
  );
}

function NewsScreen(prop) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>News Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default class index extends Component {
  
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'add-circle' : 'add-circle-outline';
              } else if (route.name === 'News') {
                iconName = focused ? 'person' : 'person-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          // 活跃状态的颜色
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="News" component={NewsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
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
