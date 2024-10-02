import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './src/AuthContext';
import Getstarted from './src/Getstarted';
import Splash from './src/Splash';
import Loginsignup from './src/Loginsignup';
import Login from './src/Login';
import Signup from './src/Signup';
import Forgot from './src/Forgot';
import Main from './src/Main';
import Feactures from './src/Features'
import Singerdetail from './src/Singerdetail';
import Voiceoverlapping from './src/Voiceoverlapping';
import Singermood from './src/Singermood';
import Facedetection from './src/Facedetection';
import Voiceoverlapping2 from './src/Voiceoverlapping2';
import Profile from './src/Profile';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Getstarted" component={Getstarted} />
          <Stack.Screen name="Loginsignup" component={Loginsignup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Forgot" component={Forgot} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Singerdetail" component={Singerdetail} />
          <Stack.Screen name="Voiceoverlapping" component={Voiceoverlapping} />
          <Stack.Screen name="Voiceoverlapping2" component={Voiceoverlapping2} />
          <Stack.Screen name="Facedetection" component={Facedetection} />
          <Stack.Screen name="Singermood" component={Singermood} />
          <Stack.Screen name="Feactures" component={Feactures} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
// eslint-disable-next-line prettier/prettier
const styles = StyleSheet.create({})
