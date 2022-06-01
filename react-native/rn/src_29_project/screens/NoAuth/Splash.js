import React from 'react';

import { 
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet,
    StatusBar,
    ImageBackground
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../images/bg1.jpeg')} style={styles.image}>
          <StatusBar hidden={true} />
          <Animatable.View 
            animation="slideInDown"
            duraton="2000"
            style={styles.header}
          >
            <Text style={[styles.title]}>看更大的世界!</Text>
          </Animatable.View>
          <Animatable.View 
            style={[styles.footer]}
            animation="slideInUp"
            duraton="2000"
            direction="alternate"
          >
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.signIn}
              >
                <Text style={styles.textSign}>走起</Text>
              </LinearGradient>
            </TouchableOpacity>
          </Animatable.View>
        </ImageBackground>
      </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 50,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  title: {
    color: '#3a7',
    fontSize: 40,
    fontWeight: 'bold'
  },
  signIn: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textSign: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 100
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
