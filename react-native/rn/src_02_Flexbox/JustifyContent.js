import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'

export default class JustifyContent extends Component {
  render() {
    return (
      <View style={{height: '100%'}}>
        <Text style={[styles.h2]}>项目在主轴上的对齐方式</Text>
        <ScrollView>

          <Text style={[styles.h3]}>justifyContent: 'flex-start' (默认)</Text>
          <View style={[styles.containerBase, styles.flexRow, styles.JustifyContentStart]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>

          <Text style={[styles.h3]}>justifyContent: 'center'</Text>
          <View style={[styles.containerBase, styles.flexRow, styles.JustifyContentCenter]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>

          <Text style={[styles.h3]}>justifyContent: 'flex-end'</Text>
          <View style={[styles.containerBase, styles.flexRow, styles.JustifyContentEnd]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>

          <Text style={[styles.h3]}>justifyContent: 'space-around'</Text>
          <View style={[styles.containerBase, styles.flexRow, styles.JustifyContentAround]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>

          <Text style={[styles.h3]}>justifyContent: 'space-evenly'</Text>
          <View style={[styles.containerBase, styles.flexRow, styles.JustifyContentEvenly]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>

          <Text style={[styles.h3]}>justifyContent: 'space-between'</Text>
          <View style={[styles.containerBase, styles.flexRow, styles.JustifyContentBetween]}>
            <Text style={[styles.itemBase]}>刘备</Text>
            <Text style={[styles.itemBase]}>关羽</Text>
            <Text style={[styles.itemBase]}>张飞</Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerBase: {
    height: 100,
    margin: 10,
    borderWidth: 1,
    borderColor: 'grey'
  },
  itemBase: {
    height: 30,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: '#dfb',
    padding: 4,
    textAlign: 'center',
    fontSize: 18,
  },
  h2: {
    margin: 10,
    fontSize: 30,
    fontWeight: 'bold'
  },
  h3: {
    marginHorizontal: 10,
    fontSize: 24
  },
  flexRow: {
    flexDirection: 'row'
  },
  flexRowReverse: {
    flexDirection: 'row-reverse'
  },
  flexColumn: {
    flexDirection: 'column'
  },
  flexColumnReverse: {
    flexDirection: 'column-reverse'
  },
  JustifyContentStart: {
    justifyContent: 'flex-start'
  },
  JustifyContentCenter: {
    justifyContent: 'center'
  },
  JustifyContentEnd: {
    justifyContent: 'flex-end'
  },
  JustifyContentAround: {
    justifyContent: 'space-around'
  },
  JustifyContentEvenly: {
    justifyContent: 'space-evenly'
  },
  JustifyContentBetween: {
    justifyContent: 'space-between'
  },
})
