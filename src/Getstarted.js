
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const Getstarted = () => {
  const navigation = useNavigation();
  const handleGetStarted = () => {
    // Navigate to the next screen here
    navigation.navigate('Loginsignup');
  };
  return (
    <View style={[styles.container,{position:'relative'}]}>
        <View style={{position:'absolute'}}>
          {/* <Image style={{width:100,height:100,marginLeft:-170,borderRadius:50}} source={require('../assets/Ellipse5.png')}  /> */}
          {/* <Image style={{position:'absolute',width:100,height:100,top:250,borderRadius:50,}}  source={require('../assets/Ellipse6.png')}  /> */}
          <Image style={{position:'absolute',width:600,height:500,marginLeft:-280,top:-150}}  source={require('../assets/Ellipsegroup.png')}  />
        </View>
      <Image source={require('../assets/headset.png')} style={styles.icon} />
      <Text style={styles.text}>Getting Started.</Text>
      <LinearGradient
        colors={['#A307CA', '#2059CA']}
        style={styles.linearGradient}>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Lets Go</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  )
};
export default Getstarted

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    // eslint-disable-next-line no-dupe-keys
    backgroundColor:'#080C0F',
  },
  icon: {
    position:'relative',
    top:-70,
    width: 1100,
    height:1100,
    marginBottom: 20,
  },
  text: {
    position:'relative',
    top:-450,
    fontSize: 36.65,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    color:'white'
  },
  buttonText: {
    fontSize: 30,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
  },
  linearGradient: {
    position:'relative',
    top:-450,
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom:10,
    paddingTop:10,
    borderRadius: 40,
    
  },
});