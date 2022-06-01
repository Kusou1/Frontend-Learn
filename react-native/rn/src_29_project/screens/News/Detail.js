import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { WebView } from 'react-native-webview';

export default class Detail extends Component {
  render() {
    return (
      <WebView
        source={{ uri: this.props.route.params.url }}
      />
    )
  }
}

const styles = StyleSheet.create({})
