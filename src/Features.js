import { ScrollView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import searchIcon from '../assets/search.png'; // Make sure the path to your icon is correct
import {useNavigation} from '@react-navigation/native';
import notifyIcon from '../assets/notification.png'
import playIcon from '../assets/Play.png';
import pauseIcon from '../assets/Pause.png';
import Video from 'react-native-video';
import Singerdetail from './Singerdetail';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  const navigation = useNavigation();
  const voice = () => {
    // Navigate to the next screen here
    navigation.navigate('Voiceoverlapping');
  };
  const face = () => {
    // Navigate to the next screen here
    navigation.navigate('Facedetection');
  };
  const singer = () => {
    // Navigate to the next screen here
    navigation.navigate('Singermood');
  };
  const Detail = () => {
    // Navigate to the next screen here
    navigation.navigate('Singerdetail');
  };
  return (
    <View style={styles.container}>
    <Image style={{position:'absolute',width:"100%",height:800,top:-100}}  source={require('../assets/Ellipse2.png')}  />
<Image style={{position:'absolute',width:"100%",height:700,top:-20,borderTopRightRadius:100,borderBottomRightRadius:150,borderBottomLeftRadius:150,borderTopLeftRadius:150}}  source={require('../assets/centre_gradiend.png')}  />  
    <LinearGradient
         colors={['#A307CA', '#2059CA']}
         style={styles.linearGradient}>
      </LinearGradient>
      <View style={styles.searchContainer}>
        <Image source={searchIcon} style={styles.searchIcon} />
        <TextInput 
          style={[styles.searchInput, {color: 'white'}]} // Combining styles and setting text color to white
          placeholder="Track Artist, Album"
          placeholderTextColor="white"
        />
      </View>
        
      <View>
        <View style={styles.welcome}>
          <View>
            <Image 
              style={styles.tinyLogo}
              source={require('../assets/icon.png')}
            />
          </View>
          <View>
            <Text style={[styles.txt,{fontSize:20, fontWeight:'bold',marginLeft:10,}]}>Module Selection</Text>
          </View>
        </View>
      </View>

<View>
  <View style={{marginTop:10,marginBottom:20}}>
    <Text style={[styles.txt,{fontSize:18,marginLeft:10}]}>Select any one of these</Text>
  </View>

  <View style={styles.Module}>
          <View>
            <Image 
              style={styles.tinyLogo}
              source={require('../assets/Voiceoverlapping.png')}
            />
          </View>
          <View>
        <TouchableOpacity onPress={voice}>
        <Text style={[styles.txt,{fontSize:20, fontWeight:'bold',marginLeft:10,}]}>Voice Overlapping</Text></TouchableOpacity>  
            <Text style={[styles.txt,{fontSize:14,marginLeft:10,color:"grey"}]}>"Sing along. Your way."</Text>
          </View>
        </View>

        <View style={styles.Module}>
          <View>
            <Image 
              style={styles.tinyLogo}
              source={require('../assets/face.png')}
            />
          </View>
          <View>
         <TouchableOpacity onPress={face}><Text style={[styles.txt,{fontSize:20, fontWeight:'bold',marginLeft:10,}]}>Emotion Detection</Text></TouchableOpacity> 
            <Text style={[styles.txt,{fontSize:14,marginLeft:10,color:"grey"}]}>"Music for every mood."</Text>

          </View>
        </View>

        <View style={styles.Module}>
          <View>
            <Image 
              style={styles.tinyLogo}
              source={require('../assets/singer.png')}
            />
          </View>
          <View>
          <TouchableOpacity onPress={singer} ><Text style={[styles.txt,{fontSize:20, fontWeight:'bold',marginLeft:10,}]}>Find Song Mood</Text></TouchableOpacity>  
            <Text style={{fontSize:14,marginLeft:10,color:"grey"}}>"The music that feels you."</Text>

          </View>
        </View>

        <View style={styles.Module}>
          <View>
            <Image 
              style={styles.tinyLogo}
              source={require('../assets/detail.png')}
            />
          </View>
          <View>
          <TouchableOpacity  onPress={Detail}>
          <Text style={[styles.txt,{fontSize:20, fontWeight:'bold',marginLeft:10,}]}>Musician Details</Text>
        </TouchableOpacity>
            <Text style={{fontSize:14,marginLeft:10,color:"grey"}}>"Beyond the beats. Meet the artists."</Text>

          </View>
        </View>
</View>

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  linearGradient: {
    position:'absolute',
    top:-13,
    borderRadius: 40,
    width:350,
    height:50,
    marginTop:20,
    marginLeft:5,
  },
  txt:{
color:'white'
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor:'black'
    },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 12,
    backgroundColor: 'black',
    borderRadius: 50,
    marginHorizontal: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  welcome: {
    marginTop: 20,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal:10,
  },
  tinyLogo: {
    width: 62,
    height: 62,
    marginLeft:10
  },
//  Module
Module:{
  display:'flex',
  flexDirection:'row',
  marginVertical:10,
}
});
