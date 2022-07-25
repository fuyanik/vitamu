
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getStorage} from "firebase/storage";
import { getAuth } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKG2B6JBmAEyRMglBv4bL6dsjaRdQveEw",
    authDomain: "vitamureal.firebaseapp.com",
    projectId: "vitamureal",
    storageBucket: "vitamureal.appspot.com",
    messagingSenderId: "457271630348",
    appId: "1:457271630348:web:6f68307cd81b29370bac29",
    measurementId: "G-VLCS9Y7XF5"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  export const db = firebaseApp.firestore();
  export const storage = getStorage(firebaseApp);
  export const auth =getAuth(firebaseApp);
  




