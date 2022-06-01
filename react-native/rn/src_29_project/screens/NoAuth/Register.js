import React from 'react';
import { 
  View, 
  Text, 
  Button, 
  TouchableOpacity, 
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  ImageBackground
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

const Register = ({navigation}) => {

  const [data, setData] = React.useState({
    username: '',
    password: '',
    confirmPassword: '',
    validateUsername: false,
    secureTextEntry: true,
    confirmSecureTextEntry: true,
  });

  const validateUsername = (val) => {
    if (val.length >= 2) {
      setData({
        ...data,
        username: val,
        validateUsername: true
      });
    } else {
      setData({
        ...data,
        username: val,
        validateUsername: false
      });
    }
  }

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val
    });
  }

  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirmPassword: val
    });
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirmSecureTextEntry: !data.confirmSecureTextEntry
    });
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../images/bg3.jpeg')} style={[styles.bgImage]}>
        <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
          <Text style={styles.textHeader}>用户注册</Text>
        </View>

        <Animatable.View animation="fadeInUpBig" style={styles.footer} >
          <ScrollView>
            <View style={styles.action}>
              <Ionicons name={'person-outline'} size={20} />
              <TextInput 
                placeholder="用户名"
                style={styles.textInput}
                onChangeText={(val) => validateUsername(val)}
              />
              {
                data.validateUsername
                ? 
                <Animatable.View animation="bounceIn" >
                  <Ionicons name={'checkmark-circle-outline'} size={20} />
                </Animatable.View>
                : 
                null
              }
            </View>

            <View style={styles.action}>
              <Ionicons name={'lock-closed-outline'} size={20} />
              <TextInput 
                placeholder="密码"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
                onChangeText={(val) => handlePasswordChange(val)}
              />
              <TouchableOpacity onPress={updateSecureTextEntry} >
              {
                data.secureTextEntry
                ? 
                <Ionicons name={'eye-off-outline'} size={20} />
                :
                <Ionicons name={'eye-outline'} size={20} />
              }
              </TouchableOpacity>
            </View>

            <View style={styles.action}>
              <Ionicons name={'lock-closed-outline'} size={20} />
              <TextInput 
                placeholder="确认密码"
                secureTextEntry={data.confirmSecureTextEntry ? true : false}
                style={styles.textInput}
                onChangeText={(val) => handleConfirmPasswordChange(val)}
              />
              <TouchableOpacity onPress={updateConfirmSecureTextEntry} >
              {
                data.confirmSecureTextEntry
                ? 
                <Ionicons name={'eye-off-outline'} size={20} />
                :
                <Ionicons name={'eye-outline'} size={20} />
              }
              </TouchableOpacity>
            </View>
            
            <View style={styles.button}>
              <TouchableOpacity style={styles.signIn} onPress={() => {}} >
                <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn} >
                  <Text style={[styles.textSign, { color:'#fff' }]}>注册</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={[styles.signIn, {
                  borderColor: '#009387',
                  borderWidth: 1,
                  marginTop: 15
                }]}
              >
                <Text style={[styles.textSign, { color: '#009387' }]}>登录</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <Text style={{textAlign: 'center', paddingVertical: 35}}>
            &copy;2020 版权所有 lagou.com
          </Text>
        </Animatable.View>
      </ImageBackground>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === 'ios' ? 120 : 80,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  textHeader: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  action: {
    flexDirection: 'row',
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  textColor: {
    color: 'green'
  },
  button: {
    alignItems: 'center',
    marginTop: 30
  },
  signIn: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
