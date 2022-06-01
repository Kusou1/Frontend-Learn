import React, { Component } from 'react'
import { Text, StyleSheet, View, Alert, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { logout } from '../../redux/actions/User'
import { connect } from 'react-redux'

class index extends Component {
  doLogout = () => {
    this.props.logout()
    Alert.alert('成功', '退出成功')
  }

  render() {
    return (
      <SafeAreaView style={[styles.container]}>
        <ScrollView>
          <View style={[styles.avatar]}>
            <Image 
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
              style={{width: 80, height: 80, marginVertical: 10, borderRadius: 40}}
            />
          </View>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('About')}
          >
            <View style={[styles.listItem]}>
              <View style={{flexDirection: 'row'}}>
                <Ionicons name={'information-circle-outline'} size={20} color={'#2d3'} />
                <Text style={{marginLeft: 10,fontSize: 18}}>关于</Text>
              </View>
              <Ionicons name={'chevron-forward-outline'} size={20} color={'#bbb'} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => alert('aaa')}
          >
            <View style={[styles.listItem]}>
              <View style={{flexDirection: 'row'}}>
                <Ionicons name={'settings-outline'} size={20} color={'#22d'} />
                <Text style={{marginLeft: 10,fontSize: 18}}>设置</Text>
              </View>
              <Ionicons name={'chevron-forward-outline'} size={20} color={'#bbb'} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}
          >
            <View style={[styles.listItem]}>
              <View style={{flexDirection: 'row'}}>
                <Ionicons name={'settings-outline'} size={20} color={'#22d'} />
                <Text style={{marginLeft: 10,fontSize: 18}}>登录</Text>
              </View>
              <Ionicons name={'chevron-forward-outline'} size={20} color={'#bbb'} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Counter')}
          >
            <View style={[styles.listItem]}>
              <View style={{flexDirection: 'row'}}>
                <Ionicons name={'settings-outline'} size={20} color={'#22d'} />
                <Text style={{marginLeft: 10,fontSize: 18}}>计数器</Text>
              </View>
              <Ionicons name={'chevron-forward-outline'} size={20} color={'#bbb'} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={ this.doLogout }
          >
            <View style={[styles.listItem]}>
              <View style={{flexDirection: 'row'}}>
                <Ionicons name={'settings-outline'} size={20} color={'#22d'} />
                <Text style={{marginLeft: 10,fontSize: 18}}>退出</Text>
              </View>
              <Ionicons name={'chevron-forward-outline'} size={20} color={'#bbb'} />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default connect(null, { logout })(index)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start'
  },
  avatar: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    height: 50,
    paddingHorizontal: 20
  }
})
