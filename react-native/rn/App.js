import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Provider as StoreProvider } from 'react-redux'
import store from './src_29_project/redux/store'

// import Index from './src_01_StyleSheet'
// import Index from './src_02_Flexbox/FlexDirection'
// import Index from './src_02_Flexbox/JustifyContent'
// import Index from './src_02_Flexbox/AlignItems'
// import Index from './src_02_Flexbox/Flex'
// import Index from './src_03_Dimensions'
// import Index from './src_04_Alert_Button'
// import Index from './src_05_Switch_StatusBar'
// import Index from './src_06_ActivityIndicator'
// import Index from './src_07_Image'
// import Index from './src_08_TextInput'
// import Index from './src_09_Touchable'
// import Index from './src_10_ScrollView'
// import Index from './src_11_SectionList'
// import Index from './src_12_FlatList'
// import Index from './src_13_Animated'
// import Index from './src_14_WebView/WebViewURI'
// import Index from './src_14_WebView/WebViewHTML'
// import Index from './src_15_Picker'
// import Index from './src_16_Swiper'
// import Index from './src_17_AsyncStorage'
// import Index from './src_18_Geolocation'
// import Index from './src_19_Camera'
// import Index from './src_20_ImagePicker'
// import Index from './src_21_Loading'
// import Index from './src_22_StackNavigator'
// import Index from './src_23_BottomTab'
// import Index from './src_24_DrawerNavigator'
// import Index from './src_25_MaterailTopTabNavigator'
// import Index from './src_26_NestingNavigation'
// import Index from './src_27_PassingParameters'
// import Index from './src_28_API'
import Index from './src_29_project'

export default class App extends Component {
  render() {
    return (
      <StoreProvider store={store}>
        <NavigationContainer>
          <Index />
        </NavigationContainer>
      </StoreProvider>
    )
  }
}
