import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, BackHandler} from 'react-native';
const Splash = ({navigation}) => {
  const [splashShown, setSplashShown] = useState(false);
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        // If splash screen is already shown, prevent going back
        if (!splashShown) {
          return true;
        }
        // If splash screen is shown, allow default back behavior
        return false;
      }
    );

    // Navigate to 'Home' screen after 5000 milliseconds
    const timer = setTimeout(() => {
      setSplashShown(true); // Mark splash screen as shown
      navigation.replace('Getstarted'); // Use replace instead of navigate to prevent back navigation to Splash
    }, 5000);

    // Cleanup function to clear timer
    return () => {
      clearTimeout(timer);
      backHandler.remove();
    };
  }, [navigation, splashShown]);

  // If splash screen is already shown, render null
  if (splashShown) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/icon.png')}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#080C0F',
  },
  tinyLogo: {
    width: 300,
    height: 300,
  },
});
