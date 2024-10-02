import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { signUp } from './AuthService';

const Signup = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSignUp = async () => {
    // Basic input validation
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
  
    // Email format validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }
  
    // Password length and complexity validation
    if (password.length < 6) {
      Alert.alert("Error", "Password should be at least 6 characters");
      return;
    }
  
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords don't match");
      return;
    }
  
    setLoading(true);
  
    try {
      // Attempt sign up
      await signUp(username, email, password);
      Alert.alert("Success", "User registered successfully");
      navigation.navigate('Login');
    } catch (error) {
      let errorMessage = "An error occurred during signup";
  
      // Handle Firebase or custom error codes
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = "This email is already registered";
          break;
        case 'auth/invalid-email':
          errorMessage = "Please enter a valid email address";
          break;
        case 'auth/weak-password':
          errorMessage = "Password should be at least 6 characters";
          break;
        case 'auth/network-request-failed':
          errorMessage = "Network error, please check your connection";
          break;
        default:
          errorMessage = error.message; // Display detailed message for debugging
      }
  
      // Alert the user
      Alert.alert("Error", errorMessage);
  
      // Optional: log error to an external service for debugging (e.g., Sentry)
      console.error("Signup Error: ", error);
    } finally {
      setLoading(false);
    }
  };
  

  const signin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={[styles.container2]}>
      <View>
        <Text style={[styles.heading, { fontSize: 30, marginLeft: 130, marginTop: 20 }]}>Signup</Text>
      </View>
      <View style={{ marginLeft: 20, marginRight: 20 }}>
        <LinearGradient colors={['#A307CA', '#2059CA']} style={styles.linearGradient0} />
        <Text style={styles.textcolor}>UserName</Text>
        <TextInput 
          placeholder='Your UserName' 
          placeholderTextColor='white' 
          style={styles.textinput}
          value={username}
          onChangeText={setUsername}
        />

        <LinearGradient colors={['#A307CA', '#2059CA']} style={styles.linearGradient2} />
        <Text style={styles.textcolor}>Email</Text>
        <TextInput 
          placeholder='Your Email' 
          placeholderTextColor='white' 
          style={styles.textinput}
          value={email}
          onChangeText={setEmail}
        />

        <LinearGradient colors={['#A307CA', '#2059CA']} style={styles.linearGradient3} />
        <Text style={styles.textcolor}>Password</Text>
        <TextInput 
          placeholder='Enter Password' 
          placeholderTextColor='white' 
          style={styles.textinput}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <LinearGradient colors={['#A307CA', '#2059CA']} style={styles.linearGradient4} />
        <Text style={styles.textcolor}>Confirm Password</Text>
        <TextInput  
          placeholder='Confirm Password' 
          placeholderTextColor='white' 
          style={styles.textinput}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </View>
      <View style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
        <LinearGradient colors={['#A307CA', '#2059CA']} style={styles.linearGradient}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={handleSignUp}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.buttonText}>Sign UP</Text>
            )}
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View style={styles.already}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Already Have An Account?</Text>
        <TouchableOpacity onPress={signin}>
          <Text style={{ color: '#ADDFFF', textAlign: 'center' }}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container2:{
 backgroundColor:'#080C0F',
 width:'100%',
 height:'100%',
 color:'white',
  },
  heading:{
    color:'white',
  },
  textcolor:{
 color:'white',
 marginTop:15,
marginBottom:10,
  },
  textinput:{
    borderWidth: 2, 
    borderColor: 'black', 
    borderStyle: 'solid',
    borderRadius:50,
    color:'white',
    paddingLeft:20,
    backgroundColor:'black'
  },
  linearGradient: {
    borderRadius: 40,
    width:200,
    height:50,
    marginTop:20,
  },
  buttonText:{
    textAlign:'center',
    fontSize:18,
    fontWeight:'900',
    color:'white',
    paddingTop:10
  },
  already:{
    width:"100%",
      marginTop:100,
  },
  // Text input gradient
  linearGradient0: {
    position:'absolute',
    borderRadius: 40,
    width:330,
    height:60,
    top:20.5,
    marginTop:20,
    marginLeft:-5,
    zIndex:-2
  },

  linearGradient2: {
    position:'absolute',
    borderRadius: 40,
    width:330,
    height:60,
    top:117,
    marginTop:20,
    marginLeft:-5,
    zIndex:-2
  },
  linearGradient3: {
    position:'absolute',
    borderRadius: 40,
    width:330,
    height:60,
    top:215,
    marginTop:20,
    marginLeft:-5,
    zIndex:-2
  },

  linearGradient4: {
    position:'absolute',
    borderRadius: 40,
    width:330,
    height:60,
    top:311,
    marginTop:20,
    marginLeft:-5,
    zIndex:-2
  },
})