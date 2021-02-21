import firebase from "firebase/app";
import 'firebase/auth';        
import 'firebase/storage';     
import 'firebase/database';    
import 'firebase/firestore';   



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDHg1_SYlIwV4FuPdv1U3Q-SHbLpM15f4k",
    authDomain: "iase-50d04.firebaseapp.com",
    databaseURL: "https://iase-50d04.firebaseio.com",
    projectId: "iase-50d04",
    storageBucket: "iase-50d04.appspot.com",
    messagingSenderId: "407137602710",
    appId: "1:407137602710:web:a1082ef850ba5effe4c6b7"
});

const db = firebaseApp.firestore();

export default db;

