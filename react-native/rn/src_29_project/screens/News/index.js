import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, TouchableOpacity,Image,Dimensions } from 'react-native'
import { getNewsList } from '../../utils/api'
import Loading from '../../components/Loading'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class index extends Component {
  constructor() {
    super()

    this.state = {
      type: 'top',
      list: [],
      types: [
        {key: 'top', title: '头条'},
        {key: 'shehui', title: '社会'},
        {key: 'guonei', title: '国内'},
        {key: 'guoji', title: '国际'},
        {key: 'yule', title: '娱乐'},
        {key: 'tiyu', title: '体育'},
        {key: 'junshi', title:  '军事'},
        {key: 'keji', title: '科技'},
        {key: 'caijing', title: '财经'},
        {key: 'shishang', title: '时尚'}
      ],
      initialTypeIndex: 0
    }
  }
  componentDidMount() {
    this.getList()
  }

  getList = () => {
    const type = this.state.type
    getNewsList(type).then(res => {
      this.setState({
        list: res
      })
    }).catch(err => {
      alert(JSON.stringify(err))
    })
  }

  newsItem = ({index, item}) => {
    if (item.thumbnail_pic_s02 && item.thumbnail_pic_s03) {
      return this.newsItemThreeImages({index, item})
    } else {
      return this.newsItemSingleImage({index, item})
    }

    // return this.newsItemSingleImage({index, item})
  }

  newsItemSingleImage = ({index, item}) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('NewsDetail', {
          url: item.url,
          title: item.title,
          uniquekey: item.uniquekey
        })}
      >
        <View style={[styles.newsItem1Container]}>
          <View style={[styles.newsItem1Text]}>
            <Text 
              style={[styles.newsItem1Title]}
              numberOfLines={2}
            >
              {item.title}
            </Text>
            <View style={[styles.newsItem1Footer]}>
              <Text 
                style={[styles.newsItem1Meta]}
                numberOfLines={1}
              >
                {item.date} {item.author_name}
              </Text>
              <Ionicons name={'heart-outline'} size={18} />
            </View>
          </View>
          <Image
            source={{uri: item.thumbnail_pic_s}}
            style={[styles.newsItem1Image]}
          />
        </View>
      </TouchableOpacity>
    )
  }

  // 展示新闻列表中的一条新闻
  newsItemThreeImages = ({index, item}) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('NewsDetail', {
          url: item.url,
          title: item.title,
          uniquekey: item.uniquekey
        })}
        style={{marginVertical: 5}}
      >
        <View style={[styles.newsItemContainer]}>
          <Text 
            style={[styles.newsItemHeader]}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {item.title}
          </Text>

          <View>
            <View style={[styles.newsItemImageContainer]}>
              <Image
                source={{uri: item.thumbnail_pic_s}}
                style={[styles.newsItemImage]}
              />
              <Image
                source={{uri: item.thumbnail_pic_s02}}
                style={[styles.newsItemImage]}
              />
              <Image
                source={{uri: item.thumbnail_pic_s03}}
                style={[styles.newsItemImage]}
              />
            </View>
          </View>

          <View style={[styles.newsItemFooter]}>
            <Text style={[styles.newsItemMeta]}>{item.date}  {item.author_name}</Text>
            <Ionicons name={'heart-outline'} size={18}  />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  newsType = ({index, item}) => {
    let isActive = item.key == this.state.type
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({
            type: item.key,
            initialTypeIndex: index > 3 ? index - 3 : 0
          }, () => {
            this.getList()
          })
        }}
      >
        <View style={{width: 65, height: 46, padding: 10, backgroundColor: isActive ? "#dfb" : "#fff"}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: isActive ? 'red' : "#333",
              textAlign: 'center'
            }}
          >{item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  
  render() {
    return (
      <>
        {
          this.state.list.length 
          ?
          <FlatList 
            data={this.state.list}
            renderItem={this.newsItem}
            keyExtractor={item => item.uniquekey}
            ListHeaderComponent={() => {
              return <FlatList 
                horizontal={true}
                data={this.state.types}
                keyExtractor={item => item.key}
                renderItem={this.newsType}
                initialScrollIndex={this.state.initialTypeIndex}
              />
            }}
            ListFooterComponent={() => {
              return <Text style={{fontSize: 20, textAlign: 'center', marginVertical: 40}}>---- 没有更多了 ----</Text>
            }}
            ItemSeparatorComponent={() => {
              return <View style={{
                borderBottomWidth: 1, 
                borderBottomColor: '#ccc', 
                marginVertical: 5
              }}></View>
            }}
          />
          :
          <Loading />
        }
      </>
    )
  }
}

const styles = StyleSheet.create({
  newsItem1Container: {
    flexDirection: 'row', 
    justifyContent: "space-between", 
    alignItems: 'center',
    marginVertical: 10
  },
  newsItem1Text: {
    flexDirection: 'column', 
    justifyContent: "space-between", 
    width: Dimensions.get('window').width * 2/3 - 20 
  },
  newsItem1Title: {
    paddingHorizontal: 10, 
    fontSize: 18, 
    width: Dimensions.get('window').width * 2/3, 
    marginBottom: 20
  },
  newsItem1Footer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  newsItem1Meta: {
    fontSize: 13
  },
  newsItem1Image: {
    width: Dimensions.get('window').width/3,
    height: 80,
    marginVertical: 5,
    marginHorizontal: 10
  },

  newsItemContainer: {
    margin: 10
  },
  newsItemHeader: {
    fontSize: 18,
    width: Dimensions.get('window').width - 20,
  },
  newsItemImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  newsItemImage: {
    width: Dimensions.get('window').width/3-20,
    height: 80,
    marginVertical: 10
  },

  newsItemFooter: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
    // flexWrap: 'wrap'
  },
  
  newsItemMeta: {
    fontSize: 13
  },
})
