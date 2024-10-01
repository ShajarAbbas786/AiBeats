import { Image, StyleSheet, Text, View, TouchableOpacity ,TextInput} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Singermood = () => {
  const navigation = useNavigation();
  const back = () => {
    // Navigate to the next screen here
    navigation.navigate('Feactures');
  };
  return (
    <View style={{backgroundColor:'black',width:'100%',height:'100%'}}>
<Image style={{position:'absolute',width:"100%",height:800,top:-100}}  source={require('../assets/Ellipse2.png')}  />
<Image style={{position:'absolute',width:"100%",height:700,top:-20,borderTopRightRadius:100,borderBottomRightRadius:150,borderBottomLeftRadius:150,borderTopLeftRadius:150}}  source={require('../assets/centre_gradiend.png')}  />  
    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20,paddingVertical:5, }}>
       <TouchableOpacity onPress={back}>
        <Image style={{ marginLeft: 10 }} source={require('../assets/Back.png')} />
        </TouchableOpacity>
        <View>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <LinearGradient
        colors={['#A307CA', '#2059CA']}
        style={styles.linearGradient2}>
       </LinearGradient>
            <Image style={{borderRadius:50}} source={require('../assets/singer.png')} />
            <View>
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10, color: 'white' }}>Find Song Mood</Text>
              <Text style={{ fontSize: 14, marginLeft: 10, color: "grey" }}>"The music that feels you."</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{marginTop:20}}>
        <View>
          <LinearGradient
            colors={['#886AE2','#A284F6']}
            style={styles.gradient}
          >
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}> Upload the song</Text>
              <Image
                source={require('../assets/upload_icon.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </LinearGradient>
<View style={{marginVertical:20}}>
<LinearGradient
        colors={['#A307CA', '#2059CA']}
        style={styles.linearGradient4}>
       </LinearGradient>
<TextInput placeholder='Paste the Link' placeholderTextColor='black' style={styles.textinput}></TextInput>
<Text style={{textAlign:'center',color:'white',marginTop:10,fontSize:24}}>OR</Text>
<LinearGradient
        colors={['#A307CA', '#2059CA']}
        style={styles.linearGradient5}>
       </LinearGradient>
<TextInput placeholder='Search by Name' placeholderTextColor='black' style={styles.textinput}></TextInput>
</View>
        </View>
      </View>
    
<View>
<LinearGradient
        colors={['#A307CA', '#2059CA']}
        style={styles.linearGradient}>
        <TouchableOpacity style={styles.button2} >
          <Text style={styles.buttonText2}>Start Detection</Text>
        </TouchableOpacity>
      </LinearGradient>


      <LinearGradient
        colors={['#A307CA', '#2059CA']}
        style={styles.linearGradient3}>
        <TouchableOpacity style={styles.button2} >
          <Text style={styles.buttonText3}>Save and Play</Text>
        </TouchableOpacity>
      </LinearGradient>
</View>


    </View>
  );
};

export default Singermood

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 25,
    padding: 15,
    width:350,
    marginTop:10,
    marginLeft:5
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    fontSize:25
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  linearGradient2: {
    position:'absolute',
    top:-22,
    borderRadius: 40,
    width:80,
    height:80,
    marginTop:20,
    marginLeft:-3
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  
  textinput:{
    borderWidth: 2, 
    borderColor: 'white', 
    borderStyle: 'solid',
    width:300,
    borderRadius:50,
    color:'black',
    paddingLeft:20,
    backgroundColor:'white',
    marginLeft:28,
    marginTop:20,
    marginBottom:20
  },

  linearGradient: {
    borderRadius: 40,
    width:250,
    height:50,
    marginTop:20,
    marginLeft:50
  },
  buttonText2:{
        fontSize:18,
    fontWeight:'900',
    color:'white',  
    paddingLeft:60,
    paddingTop:10  
  },

  linearGradient3: {
    borderRadius: 40,
    width:250,
    height:50,
    marginTop:20,
    marginLeft:50
  },
  buttonText3:{
    fontSize:18,
fontWeight:'900',
color:'white',  
paddingLeft:60,
paddingTop:10  
},

// text input linear gradient
linearGradient4: {
  position:'absolute',
  borderRadius: 40,
  width:310,
  height:60,
  top:-3,
  marginTop:20,
  marginLeft:-5,
  zIndex:-2,
  marginLeft:23
},
linearGradient5: {
  position:'absolute',
  borderRadius: 40,
  width:310,
  height:60,
  top:132,
  marginTop:20,
  marginLeft:-5,
  zIndex:-2,
  marginLeft:23
},
});
