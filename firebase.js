// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  asyncStorage  from "module";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getReactNativePersistence, inicializeAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjmvZf5fpf88lxQWgioAzKbfU1pIR8ptA",
  authDomain: "banco-de-dados---mobile.firebaseapp.com",
  projectId: "banco-de-dados---mobile",
  storageBucket: "banco-de-dados---mobile.firebasestorage.app",
  messagingSenderId: "1088455177665",
  appId: "1:1088455177665:web:efc5f26747cdeb01632b40",
  databaseURL: 'https://banco-de-dados---mobile-default-rtdb.firebaseio.com/',
  measurementId: "G-VZZZBCQCG4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence{AsyncStorage},
})

export const db = getFirestore(app);

export const analytics = getAnalytics(app);