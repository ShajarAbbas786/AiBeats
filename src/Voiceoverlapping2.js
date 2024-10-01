import { Image, StyleSheet, Text, View, TouchableOpacity ,TextInput} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const Voiceoverlapping2 = () => {
  const navigation = useNavigation();
  const Voiceoverlapping2 = () => {
    // Navigate to the next screen here
    navigation.navigate('Voiceoverlapping2');
  };
  const back = () => {
    // Navigate to the next screen here
    navigation.navigate('Voiceoverlapping');
  };
  return (
    <View style={{width:'100%',height:'100%',backgroundColor:'#080C0F'}}>
<Image style={{position:'absolute',width:"100%",height:800,top:-100}}  source={require('../assets/Ellipse2.png')}  />
<Image style={{position:'absolute',width:"100%",height:700,top:-20,borderTopRightRadius:100,borderBottomRightRadius:150,borderBottomLeftRadius:150,borderTopLeftRadius:150}}  source={require('../assets/centre_gradiend.png')}  />
<LinearGradient
        colors={['#A307CA', '#2059CA']}
        style={styles.linearGradient2}>
       </LinearGradient>
     <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:20}}>
   <TouchableOpacity onPress={back}>
    <Image style={{marginLeft:10,}} source={require('../assets/Back.png')} />
    </TouchableOpacity>
       <View>
       <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <Image 
              style={{borderRadius:50}}
              source={require('../assets/Voiceoverlapping.png')}
            />
          <View>
          <Text style={{fontSize:20, fontWeight:'bold',marginLeft:10,color:'white'}}>Voice Overlapping</Text>
            <Text style={{fontSize:14,marginLeft:10,color:"grey"}}>"Sing along. Your way."</Text>
          </View>
        </View>
       </View>
    </View>

     <View>
        <Text style={{fontSize:30,textAlign:'center',color:'white',marginTop:10,marginBottom:10}}>Upload or Record</Text>
        <Text style={{color:'white',textAlign:'center'}}>Select Duration to record your voice.</Text>
     </View>

     <View>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:20,gap:20}}>
        <Image 
              style={{marginLeft:10}}
              source={require('../assets/timer.png')}
            />
            <Text style={{fontSize:25,color:'white'}}>Duration</Text>
        </View>
       
       {/* Duration buttons */}
        <View>
            <View style={{display:'flex',flexDirection:'row',gap:20,marginVertical:20,marginLeft:20}}>
            <TouchableOpacity style={styles.btn} >
             <Text style={styles.btntext}>5 Seconds</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.btn} >
             <Text style={styles.btntext}>15 Seconds</Text>
           </TouchableOpacity>
            </View>
            <View style={{display:'flex',flexDirection:'row',gap:20,marginBottom:20,marginLeft:20}}>
            <TouchableOpacity style={styles.btn} >
             <Text style={styles.btntext}>30 Seconds</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.btn} >
             <Text style={styles.btntext}>full Video</Text>
           </TouchableOpacity>
            </View>
        </View>
     </View>
    
<View>
<LinearGradient
            colors={['#6B639C', '#C03EFE']}
            style={styles.gradient}
          >
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}> Record</Text>
              <Image
                source={require('../assets/Microphone_icon.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </LinearGradient>


          <LinearGradient
            colors={['#6B639C', '#C03EFE']}
            style={styles.gradient}
          >
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}> Upload</Text>
              <Image
                source={require('../assets/upload_icon.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </LinearGradient>
</View>

<View>
<TouchableOpacity style={styles.button2} >
    <LinearGradient colors={['#A307CA', '#2059CA']}
        style={styles.linearGradient}>
          <Text style={[styles.buttonText2,{textAlign:'center'}]}>Finish</Text>      
        </LinearGradient>
        </TouchableOpacity>
</View>
    </View>
  );
};

export default Voiceoverlapping2

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 25,
    padding: 15,
    width:150,
    marginTop:10,
    marginLeft:5,
    marginBottom:10
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
  
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },

  linearGradient: {
    borderRadius: 40,
    width:200,
    height:50,
    marginTop:60,
    marginLeft:70
  },
  linearGradient2: {
    position:'absolute',
    top:-21,
    borderRadius: 40,
    width:80,
    height:80,
    marginTop:20,
    marginLeft:49.5
  },
  button2: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize:25
  },
  buttonText2: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop:8
  },

 
// Duration button
  btn: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    borderRadius: 5,
    width:150
  },
  btntext: {
    color: 'black',
    textAlign: 'center',
  },
});
