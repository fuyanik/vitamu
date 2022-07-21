
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
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
  
  const db = firebaseApp.firestore();

  export const auth =getAuth(firebaseApp);



  export default db;
