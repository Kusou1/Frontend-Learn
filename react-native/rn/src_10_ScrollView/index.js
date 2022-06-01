import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Platform, SafeAreaView } from 'react-native'

export default class index extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView
          style={{backgroundColor: '#dfb'}}
          horizontal={true}
        >
          <Text style={[styles.nav]}>新闻</Text>
          <Text style={[styles.nav]}>娱乐</Text>
          <Text style={[styles.nav]}>体育</Text>
          <Text style={[styles.nav]}>财经</Text>
          <Text style={[styles.nav]}>军事</Text>
          <Text style={[styles.nav]}>新闻</Text>
          <Text style={[styles.nav]}>时尚</Text>
          <Text style={[styles.nav]}>科技</Text>
        </ScrollView>
        <ScrollView
          style={[styles.scrollView]}
          contentContainerStyle={{margin: 30}}
          showsVerticalScrollIndicator={false}
        >
          <Text style={[styles.text]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus amet culpa nisi beatae explicabo! Molestiae, deserunt laboriosam harum inventore adipisci nihil commodi ipsa et, libero deleniti iste repellat blanditiis corporis veritatis illo officia placeat? Ipsa enim exercitationem maxime officia sunt fugit incidunt vero, voluptates reprehenderit! Amet et veritatis necessitatibus ad libero, corrupti dolor voluptatum molestiae delectus labore odit, eius illum sed rem in, tenetur error nihil a? Id doloribus reiciendis ratione quae ullam vel consequatur, quod dolore possimus quos blanditiis minima, iste quidem? Velit voluptas at, atque et ea facere quo ducimus laboriosam accusamus quia deserunt perspiciatis? Harum, voluptas porro.</Text>
          {/* 解决 ScrollView 在 Android 下，滚动不到底的问题 */}
          <View style={{height: Platform.OS === 'ios' ? 0 : 100}}></View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  scrollView: {
    backgroundColor: '#ddd',
    marginHorizontal: 20
  },
  nav: {
    margin: 10,
    height: 50,
    fontSize: 30
  }
})
