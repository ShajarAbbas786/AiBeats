import { StyleSheet, Text, View,Image ,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const Login = () => {
  const navigation = useNavigation();
  const Main = () => {
    // Navigate to the next screen here
    navigation.navigate('Main');
  };

  const forgot = () => {
    // Navigate to the next screen here
    navigation.navigate('Forgot');
  };
  const signup = () => {
    // Navigate to the next screen here
    navigation.navigate('Signup');
  };
  return (
    <View style={[styles.container2]}>
     <View>
     <Image style={{width:150,height:150,marginLeft:100,marginTop:5}} source={require('../assets/icon.png')} />
      </View>
      <View style={{marginLeft:20,marginRight:20}}>
        <Text style={styles.textcolor}>UserName</Text>
        <LinearGradient
        colors={['#A307CA', '#2059CA']}
        style={styles.linearGradient2}>
       </LinearGradient>
        <TextInput placeholder='Your UserName' placeholderTextColor='white' style={styles.textinput}>
        </TextInput>
        <Text style={styles.textcolor}>Password</Text>
        <LinearGradient
        colors={['#A307CA', '#2059CA']}
        style={styles.linearGradient3}>
       </LinearGradient>
        <TextInput placeholder='Enter Password' placeholderTextColor='white' style={styles.textinput}></TextInput>
      </View>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',marginTop:15}}>
      <TouchableOpacity>
          <Text style={{color:'#ADDFFF',marginRight:70}}>Remember Me </Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={forgot}>
          <Text style={{color:'#ADDFFF',}}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
      <View style={{display:'flex',width:'100%',alignItems:'center'}}>
      <LinearGradient
        colors={['#A307CA', '#2059CA']}
        style={styles.linearGradient}>
        <TouchableOpacity style={styles.button} onPress={Main}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </LinearGradient>
      </View>

      {/* Or portion third party */}
      <View style={styles.container3}>
      <View style={styles.line}></View>
      <Text style={styles.text3}>Or</Text>
      <View style={styles.line}></View>
    </View>
    {/* Third Party signup */}
    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
    <Image style={{width:50,height:50,backgroundColor:'white',borderRadius:50}} source={require('../assets/facebook-icon.png')} />
    <Image style={{width:50,height:50}} source={require('../assets/google-icon.png')} />
    <Image style={{width:50,height:50}} source={require('../assets/twitter-icon.png')} />
    </View>
    
{/* Dont have an account Section */}
<View style={styles.already}>
        <Text style={{color:'white',textAlign:'center'}}>Don't Have An Account?</Text>
        <TouchableOpacity  onPress={signup}>
          <Text style={{color:'#ADDFFF',textAlign:'center'}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container2:{
 backgroundColor:'#080C0F',
 width:'100%',
 height:'100%',
 color:'white',
  },
  heading:{
    color:'white',
  },
  textcolor:{
 color:'white',
 marginTop:15,
marginBottom:10,
  },
  textinput:{
    borderWidth: 2, 
    borderColor: 'black', 
    borderStyle: 'solid',
    borderRadius:50,
    color:'white',
    paddingLeft:20,
    backgroundColor:'black'
  },
  linearGradient2: {
    position:'absolute',
    borderRadius: 40,
    width:330,
    height:60,
    top:21,
    marginTop:20,
    marginLeft:-5,
    zIndex:-2
  },
  linearGradient3: {
    position:'absolute',
    borderRadius: 40,
    width:330,
    height:60,
    top:117.5,
    marginTop:20,
    marginLeft:-5,
    zIndex:-2
  },
  container3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginLeft:20,
    marginRight:20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  text3: {
    marginHorizontal: 10,
    color: '#555555',
    fontSize: 16,
  },
  // Button sectionh
  linearGradient: {
    borderRadius: 40,
    width:200,
    height:50,
    marginTop:20,
  },
  buttonText:{
    textAlign:'center',
    fontSize:18,
    fontWeight:'900',
    color:'white',
    paddingTop:10,
  },
  already:{
    marginTop:50,
  }
})