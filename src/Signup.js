import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const Signup = () => {
  const navigation = useNavigation();
  const handleGetStarted = () => {
    // Navigate to the next screen here
    navigation.navigate('Loginsignup');
  };
  const signin = () => {
    // Navigate to the next screen here
    navigation.navigate('Login');
  };
  return (
    <View style={[styles.container2,]}>
     <View>
      <Text style={[styles.heading,{fontSize:30,marginLeft:130,marginTop:20}]}>Signup</Text>
      </View>
      <View style={{marginLeft:20,marginRight:20}}>


      <LinearGradient
        colors={['#A307CA', '#2059CA']}
        style={styles.linearGradient0}>
       </LinearGradient>
        <Text style={styles.textcolor}>UserName</Text>
        <TextInput placeholder='Your UserName' placeholderTextColor='white' style={styles.textinput}></TextInput>

        <LinearGradient
        colors={['#A307CA', '#2059CA']}
        style={styles.linearGradient2}>
       </LinearGradient>
        <Text style={styles.textcolor}>Email</Text>
        <TextInput placeholder='Your Email' placeholderTextColor='white' style={styles.textinput}></TextInput>
      
      
        <LinearGradient
        colors={['#A307CA', '#2059CA']}
        style={styles.linearGradient3}>
       </LinearGradient>
        <Text style={styles.textcolor}>Password</Text>
        <TextInput placeholder='Enter Password' placeholderTextColor='white' style={styles.textinput}></TextInput>


        <LinearGradient
        colors={['#A307CA', '#2059CA']}
        style={styles.linearGradient4}>
       </LinearGradient>
        <Text style={styles.textcolor} >Confirm Password</Text>
        <TextInput  placeholder='Confirm Password' placeholderTextColor='white' style={styles.textinput}></TextInput>
      </View>
      <View style={{display:'flex',width:'100%',alignItems:'center'}}>
      <LinearGradient
        colors={['#A307CA', '#2059CA']}
        style={styles.linearGradient}>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Sign UP</Text>
        </TouchableOpacity>
      </LinearGradient>
      </View>
      {/* Already Have Account Section */}
      <View style={styles.already}>
        <Text style={{color:'white',textAlign:'center'}}>Already Have An Account?</Text>
        <TouchableOpacity  onPress={signin}>
          <Text style={{color:'#ADDFFF',textAlign:'center'}}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Signup

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
    paddingTop:10
  },
  already:{
    width:"100%",
      marginTop:100,
  },
  // Text input gradient
  linearGradient0: {
    position:'absolute',
    borderRadius: 40,
    width:330,
    height:60,
    top:20.5,
    marginTop:20,
    marginLeft:-5,
    zIndex:-2
  },

  linearGradient2: {
    position:'absolute',
    borderRadius: 40,
    width:330,
    height:60,
    top:117,
    marginTop:20,
    marginLeft:-5,
    zIndex:-2
  },
  linearGradient3: {
    position:'absolute',
    borderRadius: 40,
    width:330,
    height:60,
    top:215,
    marginTop:20,
    marginLeft:-5,
    zIndex:-2
  },

  linearGradient4: {
    position:'absolute',
    borderRadius: 40,
    width:330,
    height:60,
    top:311,
    marginTop:20,
    marginLeft:-5,
    zIndex:-2
  },
})