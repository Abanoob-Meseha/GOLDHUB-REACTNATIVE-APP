// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  , getReactNativePersistence, initializeAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8InPuG9Lu7nJlnB1MO-IVGHw00qO5Cgs",
  authDomain: "goldhub-21a44.firebaseapp.com",
  projectId: "goldhub-21a44",
  storageBucket: "goldhub-21a44.appspot.com",
  messagingSenderId: "354333400509",
  appId: "1:354333400509:web:3da04f198466d241b446d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const auth = getAuth(app , AsyncStorage)
const auth = getAuth(app ,{
  persistence: getReactNativePersistence(AsyncStorage)
})
module.exports = {app , db , auth}