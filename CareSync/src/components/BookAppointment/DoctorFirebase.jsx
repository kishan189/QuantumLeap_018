// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDn6dpAr3Rro3BKcCq7qrVA8JDSDtlKQj8",
  authDomain: "caresync-3911d.firebaseapp.com",
  databaseURL: "https://caresync-3911d-default-rtdb.firebaseio.com",
  projectId: "caresync-3911d",
  storageBucket: "caresync-3911d.firebasestorage.app",
  messagingSenderId: "136404051506",
  appId: "1:136404051506:web:918f2841610892d1877e2b"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, onValue };
