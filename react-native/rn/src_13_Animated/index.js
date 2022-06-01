import React, { Component } from "react";
import { Animated, Text, View, StyleSheet, Button } from "react-native";

class App extends Component {
  // fadeAnim 将透明度设置为 0
  state = {
    fadeAnim: new Animated.Value(0),
    moveAnim: new Animated.Value(0)
  };

  fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 1, // 目标值
      duration: 5000, // 动画执行时间
      useNativeDriver: true // 启动原生方式，渲染动画（执行效率更高）
    }).start(() => {
      // 动画执行结束后的回调函数
      alert('我显示出来了')
    });
  };

  fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: true
    }).start(() => {
      // 动画执行结束后的回调函数
      alert('我藏起来了')
    });
  };

  componentDidMount() {
    // 组件加载后，触发动画
    this.scanMove()
  }

  scanMove = () => {
    // 将 moveAnim 的初始值，设置为0
    this.state.moveAnim.setValue(0)
    Animated.timing(this.state.moveAnim, {
      toValue: 200,
      duration: 2000,
      useNativeDriver: true
    }).start(() => {
      this.scanMove()
    })
  }
  

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: this.state.fadeAnim // Bind opacity to animated value
            }
          ]}
        >
          <Text style={styles.fadingText}>Fading View!</Text>
        </Animated.View>
        <View style={styles.buttonRow}>
          <Button title="Fade In" onPress={this.fadeIn} />
          <Button title="Fade Out" onPress={this.fadeOut} />
        </View>

        <View style={[styles.scanContainer]}>
          <Animated.View
            style={[
              styles.border,
              {
                transform: [{
                  translateY: this.state.moveAnim
                }]
              }
            ]}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 28,
    textAlign: "center",
    margin: 10
  },
  buttonRow: {
    flexDirection: "row",
    marginVertical: 16
  },
  scanContainer: {
    height: 200,
    width: 200,
    borderWidth: 1,
    borderColor: 'green'
  },
  border: {
    borderWidth: 1,
    borderColor: 'red'
  }
});

export default App;