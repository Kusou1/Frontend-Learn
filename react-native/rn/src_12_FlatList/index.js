import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, StatusBar,SafeAreaView, TouchableOpacity } from 'react-native'

export default class index extends Component {
  constructor() {
    super()
    
    this.state = {
      isLoading: false,
      selectedId: null,
      list: [
        {
          id: '1',
          title: '头条',
        },
        {
          id: '2',
          title: '娱乐',
        },
        {
          id: '3',
          title: '体育',
        },
        {
          id: '4',
          title: '军事',
        },
        {
          id: '5',
          title: '科技',
        },
        {
          id: '6',
          title: '财经',
        },
        {
          id: '7',
          title: '时尚',
        },
        {
          id: '8',
          title: '社会',
        },
      ]
    }
  }

  renderItem = ({ index, item }) => {
    console.log(item)
    const backgroundColor = item.id === this.state.selectedId ? '#dfb' : '#f9c2ff'
    return (
      <TouchableOpacity 
        style={[styles.item, { backgroundColor }]}
        onPress={() => {
          this.setState({
            selectedId: item.id
          })
        }} 
      >
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  }

  loadData = () => {
    this.setState({
      isLoading: true
    })

    // 模拟网络请求
    setTimeout(() => {
      // 模拟请求数据
      alert('刷新请求数据')
      
      this.setState({
          isLoading: false,
      })
    }, 2000);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.list}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          horizontal={false} // 水平布局模式
          initialScrollIndex={0} // 初始滚动索引
          initialNumToRender={4} // 指定初始渲染数据的数量，一般数量要填满一屏幕
          numColumns={1} // 指定列数，数据项必须登高 - 无法支持瀑布流
          inverted={false} // 列表反转
          extraData={this.state.selectedId}

          ItemSeparatorComponent={() => {
            // 声明项目之间的分隔符
            return <View style={[styles.itemSeporator]}></View>
          }}
          ListEmptyComponent={() => {
            // 列表数据为空时，展示的组件
            return <Text style={{fontSize: 30}}>空空如也！</Text>
          }}

          // 下拉刷新
          refreshing={this.state.isLoading}
          onRefresh={this.loadData}

          // 上拉刷新
          onEndReachedThreshold={0.1} // 声明触底的比率，0.1表示距离底部还有10%
          onEndReached={() => {
            alert('到底了')
          }}

          ListHeaderComponent={() => {
            // 声明列表的头部组件
            return <Text style={[styles.header]}>列表头部</Text>
          }}
          ListFooterComponent={() => {
            // 声明列表的尾部组件
            return <Text style={[styles.footer]}>没有更多了</Text>
          }}

        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 80
  },
  itemSeporator: {
    borderBottomWidth: 1,
    borderBottomColor: 'red',
    marginHorizontal: 20
  },
  title: {
    fontSize: 32,
  },
  header: {
    fontSize: 30, 
    margin: 20
  },
  footer: {
    fontSize: 20, 
    textAlign: 'center', 
    marginVertical: 40
  }
});
