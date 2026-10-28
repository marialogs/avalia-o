import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjmvZf5fpf88lxQWgioAzKbfU1pIR8ptA",
  authDomain: "banco-de-dados---mobile.firebaseapp.com",
  databaseURL: "https://banco-de-dados---mobile-default-rtdb.firebaseio.com",
  projectId: "banco-de-dados---mobile",
  storageBucket: "banco-de-dados---mobile.firebasestorage.app",
  messagingSenderId: "1088455177665",
  appId: "1:1088455177665:web:efc5f26747cdeb01632b40",
};

export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false,
});

// Realtime Database (usado pelo ranking do jogo)
export const rtdb = getDatabase(app);
