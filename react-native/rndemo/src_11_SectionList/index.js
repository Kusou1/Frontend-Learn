import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList
} from "react-native";

const DATA = [
  {
    title: "魏国",
    data: ["曹操", "司马懿", "张辽"]
  },
  {
    title: "蜀国",
    data: ["刘备", "关羽", "张飞"]
  },
  {
    title: "吴国",
    data: ["孙权", "周瑜", "黄盖"]
  }
];

Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

class App extends Component {
  constructor() {
    super()

    this.state = {
      isFresh: false
    }
  }

  loadData = () => {
    // 开启加载动画
    this.setState({
      isFresh: true
    })

    // 模拟请求数据
    setTimeout(() => {
      this.setState({
        isFresh: false
      })
      alert('下拉刷新')
    }, 2000);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
          ItemSeparatorComponent={() => {
            // 声明项目之间的分隔符
            return <View style={{borderBottomWidth:1,borderBottomColor: 'red'}}></View>
          }}
          ListEmptyComponent={() => {
            // 列表数据为空时，展示的组件
            return <Text style={{fontSize: 30}}>空空如也！</Text>
          }}

          // 下拉刷新
          refreshing={this.state.isFresh}
          onRefresh={this.loadData}

          // 上拉刷新
          onEndReachedThreshold={0.1} // 声明触底的比率，0.1表示距离底部还有10%
          onEndReached={() => {
            alert('到底了')
          }}

          ListHeaderComponent={() => {
            // 声明列表的头部组件
            return <Text style={{fontSize: 40}}>三国英雄榜</Text>
          }}
          ListFooterComponent={() => {
            // 声明列表的尾部组件
            return <Text style={{fontSize: 30}}>没有更多了</Text>
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});

export default App;
