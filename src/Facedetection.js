import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const Facedetection = () => {
  const navigation = useNavigation();
  const back = () => {
    // Navigate to the next screen here
    navigation.navigate('Feactures');
  };
  return (
    <View style={{backgroundColor:'black',width:'100%',height:'100%'}}>
     <Image style={{position:'absolute',width:"100%",height:800,top:-20}}  source={require('../assets/Ellipse2.png')}  />
<Image style={{position:'absolute',width:"100%",height:700,top:-20,borderTopRightRadius:100,borderBottomRightRadius:150,borderBottomLeftRadius:150,borderTopLeftRadius:150}}  source={require('../assets/centre_gradiend.png')}  />  

      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20 }}>
     <TouchableOpacity onPress={back}><Image style={{ marginLeft: 10 }} source={require('../assets/Back.png')} /></TouchableOpacity>
        <View>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../assets/face.png')} />
            <View>
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10, color: 'white' }}>Emotion Detection</Text>
              <Text style={{ fontSize: 14, marginLeft: 10, color: "grey" }}>"Music for every mood."</Text>
            </View>
          </View>
        </View>
      </View>

      <View>
        <Image
          style={{ width: '100%', marginTop: 20 }}
          source={require('../assets/Facedetected.png')}
        />       
        <View style={{display:'flex',flexDirection:'column',alignContent:'center',alignItems:'center',width:'100%'}}>
          <LinearGradient
            colors={['#886AE2','#A284F6']}
            style={styles.gradient}
          >
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Gallery</Text>
              <Image
                source={require('../assets/upload_icon.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          
          </LinearGradient>
          <LinearGradient
            colors={['#886AE2','#A284F6']}
            style={styles.gradient}
          >
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Camera</Text>
              <Image
                source={require('../assets/Camer_icon.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={['#A307CA', '#2059CA']}
            style={styles.gradient2}
          >
            <TouchableOpacity style={[styles.button,{}]}>
              <Text style={styles.buttonText}>Analyze your Emotion</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default Facedetection;

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 25,
    padding: 15,
    width:200,
    marginTop:20,
  },
  gradient2:{
    borderRadius: 25,
    padding: 15,
    marginTop:20,
    width:284,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-evenly'
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    width: 26,
    height: 26,
    marginLeft: 10,
  },
});
