import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class MyInlineWeb extends Component {
  render() {
    return (
      <WebView
        originWhitelist={['*']}
        source={{ html: '<h1 style="color: red">Hello world</h1>' }}
      />
    );
  }
}

export default MyInlineWeb