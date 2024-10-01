import { StyleSheet,Image, Text, View,TouchableOpacity  } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const Login = () => {
  const navigation = useNavigation();
  const login = () => {
    // Navigate to the next screen here
    navigation.navigate('Login');
  };
  const nav = useNavigation();
  const signup = () => {
    // Navigate to the next screen here
    navigation.navigate('Signup');
  };
  return (
    <View style={[styles.container,{position:'relative'}]}>
    <Image
      source={require('../assets/icon.png')}
      style={styles.icon}
    />
    <Text style={styles.text}>
      AiBeats
    </Text>
    <LinearGradient colors={['#A307CA', '#2059CA']} style={styles.linearGradient1}>
    <TouchableOpacity style={styles.button} onPress={login}>
      <Text style={styles.buttonText1}>Login</Text>
    </TouchableOpacity>
    </LinearGradient>

    <TouchableOpacity style={styles.button2} onPress={signup}>
      <Text style={styles.buttonText2}>Signup</Text>
    </TouchableOpacity>

  </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    backgroundColor:'#080C0F'
  },
  icon: {
    position:'relative',
    width: 300,
    height:300,
    marginBottom: 20,
  },
  button2:{
        backgroundColor:'white',
        marginTop:30,
        position:'relative',
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom:10,
        paddingTop:10,
        borderRadius: 40,
  },
  text: {
    position:'relative',
    fontSize: 36.65,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    color:'white'
  },
  buttonText1: {
    fontSize: 30,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
  },
  buttonText2: {
    fontSize: 30,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: 'black',
  },
  linearGradient1: {
    position:'relative',
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom:10,
    paddingTop:10,
    borderRadius: 40,
  },
 
})