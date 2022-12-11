import { AsyncStorageStatic } from '@react-native-async-storage/async-storage'
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';



let firebaseConfig = {
  apiKey: "AIzaSyDYlHW__F0LTQWi90LNzf3SBhMisDOUOok",
  authDomain: "financeiroapp-6c4cf.firebaseapp.com",
  projectId: "financeiroapp-6c4cf",
  storageBucket: "financeiroapp-6c4cf.appspot.com",
  messagingSenderId: "196694916738",
  appId: "1:196694916738:web:6bf50ce3a773b228c2be9b"
};

// Initialize Firebase


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)  
    
}

export default firebase;