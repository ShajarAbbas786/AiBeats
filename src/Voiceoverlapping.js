import { Image, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const Voiceoverlapping = () => {
  const navigation = useNavigation();
  const Voiceoverlapping2 = () => {
    // Navigate to the next screen here
    navigation.navigate('Voiceoverlapping2');
  };
  const back = () => {
    // Navigate to the next screen here
    navigation.navigate('Feactures');
  };
  return (
   <View style={{backgroundColor:'#080C0F',width:'100%',height:'100%'}}>
<Image style={{position:'absolute',width:"100%",height:700,top:-20,borderTopRightRadius:100,borderBottomRightRadius:150,borderBottomLeftRadius:150,borderTopLeftRadius:150}}  source={require('../assets/Ellipse2.png')}  />
   
   <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:20,marginBottom:15}}>
   <LinearGradient
        colors={['#A307CA', '#2059CA']}
        style={styles.linearGradient2}>
       </LinearGradient>
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
<Image 
              style={{width:'100%',}}
              source={require('../assets/Voiceover.png')}
            />
            <Text style={styles.heading}> Sing Any Song!</Text>
    <View style={styles.txts}>
    <Text style={styles.txt}>
      1)Share Your Voice
    </Text>
    <Text style={styles.txt}>
      2)Upload or record voice
    </Text>
    <Text style={styles.txt}>
      3)Let Al Do Its Magic
    </Text>
    <Text style={styles.txt}>
      4)Your Unique Al Voice is Ready!
    </Text>
    </View>
    <View>
    <LinearGradient
        colors={['#A307CA', '#2059CA']}
        style={styles.linearGradient}>
        <TouchableOpacity style={styles.button} onPress={Voiceoverlapping2}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
</View>
    </View>

    
  )
}

export default Voiceoverlapping

const styles = StyleSheet.create({
  heading:{
    textAlign:'center',
    fontSize:25,
    color:'white'
  },
  txt:{
    color:'white',
    marginVertical:5,
    marginLeft:5,
    letterSpacing:1,
    fontWeight:'bold'
  },
  linearGradient: {
    borderRadius: 40,
    width:200,
    height:50,
    marginTop:20,
    marginLeft:65
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
  buttonText:{
    textAlign:'center',
    fontSize:18,
    fontWeight:'900',
    color:'white',
    paddingTop:10
  },
})