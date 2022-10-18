// Import the functions you need from the SDKs you need
import firebase from "firebase/app";

import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAlZ0KtaGeDBUJZ7ePuUGYCsh6w6Zvgn0I",
    authDomain: "aula01-d5047.firebaseapp.com",
    databaseURL: "https://aula01-d5047-default-rtdb.firebaseio.com",
    projectId: "aula01-d5047",
    storageBucket: "aula01-d5047.appspot.com",
    messagingSenderId: "638400101069",
    appId: "1:638400101069:web:211b1afc7fa41ded6c0784"
  };

// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase;