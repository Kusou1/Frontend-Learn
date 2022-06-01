import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Image, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'

export default class index extends Component {
  render() {
    return (
      <ScrollView>
        <Swiper 
          style={[styles.wrapper]}
          showsButtons={true}
          autoplay={true}
        >
          <Image 
            style={[styles.slideImage]}
            source={require('./images/1.jpg')}
          />
          <Image 
            style={[styles.slideImage]}
            source={require('./images/2.jpg')}
          />
          <Image 
            style={[styles.slideImage]}
            source={require('./images/3.jpg')}
          />
        </Swiper>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: 200
  },
  slideImage: {
    height: 200,
    width: Dimensions.get('window').width
  }
})
