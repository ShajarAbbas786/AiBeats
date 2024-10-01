import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import notifyIcon from '../assets/notification.png';
import CamerIcon from '../assets/Camer_icon.png'; // Correctly import your camera icon
import LinearGradient from 'react-native-linear-gradient';
const Profile = () => {
  const navigation = useNavigation();

  const back = () => {
    // Navigate to the next screen here
    navigation.navigate('Feactures');
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ position: 'absolute', width: '100%', height: 1000, top: -300 }}
        source={require('../assets/Ellipse2.png')}
      />
      <Image
        style={{
          position: 'absolute',
          width: '100%',
          height: 1000,
          top: -200,
          borderTopRightRadius: 100,
          borderBottomRightRadius: 150,
          borderBottomLeftRadius: 150,
          borderTopLeftRadius: 150,
        }}
        source={require('../assets/centre_gradiend.png')}
      />

      <View style={styles.nav}>
        <View>
          <TouchableOpacity onPress={back}>
            <Image style={{ marginLeft: 10 }} source={require('../assets/Back.png')} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.txt}>Profile</Text>
        </View>
        <View>
          <Image source={notifyIcon} style={styles.notify} />
        </View>
      </View>

      {/* Camera section */}
      <View style={styles.container2}>
      <LinearGradient
        colors={['#A307CA', '#2059CA']}
        style={styles.linearGradient4}>
       </LinearGradient>
        <View style={styles.iconContainer}>
      
          <Image source={CamerIcon} style={styles.icon} />
        </View>
        <View>
        <Text style={styles.userName}>Shajar Abbas</Text>
        <Text style={styles.userEmail}>hguys7871@gmail.com</Text>
        </View>
      </View>

 <View style={{marginTop:20}}>
 <View style={[styles.card,{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}]}>
   <View style={{display:'flex',flexDirection:'row'}}>
   <Image style={{marginLeft:15}} source={require('../assets/profile_icon.png')} />
   <Text style={[styles.txt,{marginLeft:10}]}>Edit Profile</Text>
   </View>
   <View>
   <Image source={require('../assets/Next_icon.png')} style={[styles.searchIcon,{marginRight:15}]} />
   </View>
   </View>

   <View style={[styles.card,{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}]}>
   <View style={{display:'flex',flexDirection:'row'}}>
   <Image style={{marginLeft:15}} source={require('../assets/audioquality_icon.png')} />
   <Text style={[styles.txt,{marginLeft:10}]}>Audio Quality</Text>
   </View>
   <View>
   <Image source={require('../assets/Next_icon.png')} style={[styles.searchIcon,{marginRight:15}]} />
   </View>
   </View>

   <View style={[styles.card,{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}]}>
   <View style={{display:'flex',flexDirection:'row'}}>
   <Image style={{marginLeft:15}} source={require('../assets/videoqulaity_icon.png')} />
   <Text style={[styles.txt,{marginLeft:10}]}>Video Quality</Text>
   </View>
   <View>
   <Image source={require('../assets/Next_icon.png')} style={[styles.searchIcon,{marginRight:15}]} />
   </View>
   </View>

   <View style={[styles.card,{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}]}>
   <View style={{display:'flex',flexDirection:'row'}}>
   <Image style={{marginLeft:15}} source={require('../assets/download_icon.png')} />
   <Text style={[styles.txt,{marginLeft:10}]}>Download</Text>
   </View>
   <View>
   <Image source={require('../assets/Next_icon.png')} style={[styles.searchIcon,{marginRight:15}]} />
   </View>
   </View>

   <View style={[styles.card,{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}]}>
   <View style={{display:'flex',flexDirection:'row'}}>
   <Image style={{marginLeft:15}} source={require('../assets/language_icon.png')} />
   <Text style={[styles.txt,{marginLeft:10}]}>Language</Text>
   </View>
   <View>
   <Image source={require('../assets/Next_icon.png')} style={[styles.searchIcon,{marginRight:15}]} />
   </View>
   </View>

   <View style={[styles.card,{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}]}>
   <View style={{display:'flex',flexDirection:'row'}}>
   <Image style={{marginLeft:15}} source={require('../assets/storage_icon.png')} />
   <Text style={[styles.txt,{marginLeft:10}]}>Storage</Text>
   </View>
   <View>
   <Image source={require('../assets/Next_icon.png')} style={[styles.searchIcon,{marginRight:15}]} />
   </View>
   </View>

   <View style={[styles.card,{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}]}>
   <View style={{display:'flex',flexDirection:'row'}}>
   <Image style={{marginLeft:15}} source={require('../assets/setting_icon.png')} />
   <Text style={[styles.txt,{marginLeft:10}]}>Setting</Text>
   </View>
   <View>
   <Image source={require('../assets/Next_icon.png')} style={[styles.searchIcon,{marginRight:15}]} />
   </View>
   </View>


   <View style={[styles.card,{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}]}>
   <View style={{display:'flex',flexDirection:'row'}}>
   <Image style={{marginLeft:15}} source={require('../assets/feedback_icon.png')} />
   <Text style={[styles.txt,{marginLeft:10}]}>FeedBack</Text>
   </View>
   <View>
   <Image source={require('../assets/Next_icon.png')} style={[styles.searchIcon,{marginRight:15}]} />
   </View>
   </View>
   
 </View>

    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  notify: {
    marginRight: 10,
  },
  container: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
  },
  txt: {
    color: 'white',
    fontSize: 20,
  },
  nav: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  // profile camera
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    // backgroundColor: '#f8f8f8',
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    zIndex:2
  },
  iconContainer: {
    position:'relative',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    zIndex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  icon: {
    width: 40,
    height: 40,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  userEmail:{
     fontSize:12,
     color:'grey'
  },
  linearGradient4: {
    position:'absolute',
    borderRadius: 40,
    width:60,
    height:60,
    top:5,
    marginLeft:5
  },
  // Cards 
card:{
marginBottom:30
},

});
