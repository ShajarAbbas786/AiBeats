import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { firebase } from './src/FirebaseConfig'; 

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebase.app().options);
}

AppRegistry.registerComponent(appName, () => App);