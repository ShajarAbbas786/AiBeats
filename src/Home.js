import { ScrollView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import searchIcon from '../assets/search.png'; // Make sure the path to your icon is correct
import { useNavigation, useIsFocused } from '@react-navigation/native';
import notifyIcon from '../assets/notification.png';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider'; // Add this import

const Home = () => {
  const [paused, setPaused] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);
  const isFocused = useIsFocused();

  const handlePlayPause = () => {
    setPaused(!paused);
  };

  const handleProgress = (data) => {
    setCurrentTime(data.currentTime);
  };

  const handleLoad = (data) => {
    setDuration(data.duration);
  };

  const handleSlide = (value) => {
    videoRef.current.seek(value);
    setCurrentTime(value);
  };

  const navigation = useNavigation();
  const voice = () => {
    navigation.navigate('Voiceoverlapping');
  };
  const face = () => {
    navigation.navigate('Facedetection');
  };
  const singer = () => {
    navigation.navigate('Singermood');
  };
  const Detail = () => {
    navigation.navigate('Singerdetail');
  };

  useEffect(() => {
    if (!isFocused) {
      setPaused(true);
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImageTop} source={require('../assets/Ellipse2.png')} />
      <Image style={styles.backgroundImageCenter} source={require('../assets/centre_gradiend.png')} />
     
     <View> 
     <LinearGradient colors={['#A307CA', '#2059CA']} style={styles.linearGradient} />
      <View style={styles.searchContainer}>
        <Image source={searchIcon} style={styles.searchIcon} />
        <TextInput 
          style={[styles.searchInput, {color: 'white'}]} // Combining styles and setting text color to white
          placeholder="Track Artist, Album"
          placeholderTextColor="white"
        />
      </View>
</View>
      <ScrollView style={{position:'relative',zIndex:-1}}>
        <View style={styles.nav}>
          <Image style={styles.tinyLogo} source={require('../assets/icon.png')} />
          <View style={styles.welcome}>
            <Text style={styles.txt}>Welcome</Text>
            <Text style={styles.txt2}>"Where Your Emotions Meet Music!"</Text>
          </View>
          <Image source={notifyIcon} style={styles.notify} />
        </View>
        <View><Text style={[{marginTop:10,marginLeft:10,fontSize:20,color:'white'}]}>Singers</Text></View>
        <ScrollView horizontal  style={styles.cardScroll}>
          <View style={styles.cardContainer}>
            <Image source={require('../assets/argitsing.jpg')} style={styles.cardImage} resizeMode="stretch" />
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>Arijit Singh</Text>
              <Text style={styles.cardDescription}>Chor do mujhe</Text>
            </View>
          </View>

          <View style={styles.cardContainer}>
            <Image source={require('../assets/SelenaGomez.jpg')} style={styles.cardImage} resizeMode='cover' />
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>Selena Gomez</Text>
              <Text style={styles.cardDescription}>Sun Raha Hai</Text>
            </View>
          </View>

          <View style={styles.cardContainer}>
            <Image source={require('../assets/justinfibre.jpg')} style={styles.cardImage} resizeMode="stretch" />
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>Justin Bieber </Text>
              <Text style={styles.cardDescription}>Abhi Mujh Mein Kahin</Text>
            </View>
          </View>

          <View style={styles.cardContainer}>
            <Image source={require('../assets/MichaelJackson.jpg')} style={styles.cardImage} resizeMode="stretch" />
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>Michael </Text>
              <Text style={styles.cardDescription}>Sheila Ki Jawani</Text>
            </View>
          </View>

          <View style={styles.cardContainer}>
            <Image source={require('../assets/EnriqueIglesias.jpg')} style={styles.cardImage} resizeMode="cover" />
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>Enrique Iglesias</Text>
              <Text style={styles.cardDescription}>Tera Hone Laga Hoon</Text>
            </View>
          </View>
        </ScrollView>
<View><Text style={[styles.txt,{marginLeft:10,marginBottom:10}]}>Trending Song</Text></View>
        <View style={styles.container3}>
          <Video
            ref={videoRef}
            source={require('../assets/JustinBieber-Babyft.Ludacris.mp4')}
            style={styles.video}
            paused={paused}
            resizeMode="contain"
            onProgress={handleProgress}
            onLoad={handleLoad}
          />
          <TouchableOpacity style={styles.playPauseButton} onPress={handlePlayPause}>
            <Text style={styles.playPauseText}>{paused ? 'Play' : 'Pause'}</Text>
          </TouchableOpacity>
          <Slider
            style={styles.slider}
            value={currentTime}
            minimumValue={0}
            maximumValue={duration}
            onSlidingComplete={handleSlide}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            thumbTintColor="#FFFFFF"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  backgroundImageTop: {
    position: 'absolute',
    width: '100%',
    height: 800,
    top: -100,
    zIndex:-2
  },
  backgroundImageCenter: {
    position: 'absolute',
    width: '100%',
    height: 700,
    top: -20,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 150,
    borderBottomLeftRadius: 150,
    borderTopLeftRadius: 150,
    zIndex:-2
  },
  linearGradient: {
    position: 'absolute',
    top: -13,
    borderRadius: 40,
    width: 350,
    height: 50,
    marginTop: 20,
    marginLeft: 5,
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
  nav: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  tinyLogo: {
    width: 62,
    height: 62,
    marginLeft: 10,
  },
  welcome: {
    marginLeft: 20,
  },
  txt: {
    color: 'white',
    fontSize: 20,
  },
  txt2: {
    color: 'grey',
    fontSize: 12,
  },
  notify: {
    marginLeft: 40,
  },
  cardScroll: {
    marginVertical: 10,
  },
  cardContainer: {
    width: 150,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardTextContainer: {
    padding: 10,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  cardDescription: {
    fontSize: 14,
    color: 'white',
  },
  // Video
  container3: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  video: {
    width: '100%',
    height: 200, // You can make this dynamic based on your needs
  },
  playPauseButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playPauseText: {
    color: 'white',
    fontSize: 16,
  },
  slider: {
    width: '90%',
    position: 'absolute',
    bottom: 10,
  },
});
