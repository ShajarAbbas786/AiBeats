import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDRjI7_NNPjUMlgf6NGUwciP8DtXoGk-JU",
  authDomain: "aibeats-ce80d.firebaseapp.com",
  projectId: "aibeats-ce80d",
  storageBucket: "aibeats-ce80d.appspot.com",
  messagingSenderId: "419841373405",
  appId: "1:419841373405:android:3e25c4a9fc3e16722f5734"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize Firestore
const firestore = firebase.firestore();

export { firebase, firestore };