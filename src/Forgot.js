import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const Forgot = () => {
  const navigation = useNavigation();
  const handleGetStarted = () => {
    // Navigate to the next screen here
    navigation.navigate('Loginsignup');
  };
  const back = () => {
    // Navigate to the next screen here
    navigation.navigate('Login');
  };
  return (
    <View style={[styles.container2,{position:'relative'}]}>
    <View>
    <Image style={{position:'absolute',width:"100%",height:1000,top:-100}}  source={require('../assets/Ellipse2.png')}  />
    </View>
     <View>
      <Text style={[styles.heading,{fontSize:30,marginLeft:70}]}>Forgot Password</Text>
      </View>
      <View style={{marginLeft:20,marginRight:20}}>
        <Text style={styles.textcolor}>Email</Text>
        <LinearGradient
        colors={['#A307CA', '#2059CA']}
        style={styles.linearGradient4}>
       </LinearGradient>
        <TextInput placeholder='Your Email' placeholderTextColor='white' style={styles.textinput}/>
        <Text style={styles.textcolor}>Change Password</Text>
        <LinearGradient
        colors={['#A307CA', '#2059CA']}
        style={styles.linearGradient3}>
       </LinearGradient>
        <TextInput placeholder='
        Password' placeholderTextColor='white' style={styles.textinput}></TextInput>

      </View>
      <View>
      <LinearGradient
        colors={['#A307CA', '#2059CA']}
        style={styles.linearGradient}>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Change</Text>
        </TouchableOpacity>
      </LinearGradient>
      </View>
      <View style={{marginTop:30,display:'flex',flexDirection:'row',gap:30}}>
        <Image style={{marginLeft:80}} source={require('../assets/Vector2.png')} />
        <TouchableOpacity onPress={back}>
          <Text style={{color:'white'}}>Back to Login Page</Text>
        </TouchableOpacity>
      </View>
      <View>
        
      </View>
    </View>

   
  );
};

export default Forgot;

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
       marginLeft:80
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
         marginTop:30,
     },
    //  Linear gradient text input
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
  
    linearGradient4: {
      position:'absolute',
      borderRadius: 40,
      width:330,
      height:60,
      top:20.5,
      marginTop:20,
      marginLeft:-5,
      zIndex:-2
    },
});
