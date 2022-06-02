import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import ImagePicker from 'react-native-image-picker';

// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
  title: '选择头像',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '去拍照',
  chooseFromLibraryButtonTitle: '从手机相册中选取'
};

export default class index extends Component {
  constructor() {
    super()

    this.state = {
      avatar: 'https://reactnative.dev/img/tiny_logo.png'
    }
  }


  changeImage = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatar: response.uri,
        });
      }
    });
  }


  render() {
    return (
      <View style={[styles.container]}>
        <TouchableOpacity
          onPress={this.changeImage}
        >
          <View style={[styles.avatar]}>
            <Image 
              style={[styles.avatar]}
              source={{ uri: this.state.avatar}}
            />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 200,
    height: 200
  }
})
