// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA-4rqDks1udqfd1iL1Q4owLk1awYreXto",
  authDomain: "fir-5978f.firebaseapp.com",
  databaseURL: "https://fir-5978f-default-rtdb.firebaseio.com/", 
  projectId: "fir-5978f",
  storageBucket: "fir-5978f.firebasestorage.app",
  messagingSenderId: "577928104761",
  appId: "1:577928104761:web:6916121a5341c228d3b6e8",
  measurementId: "G-J74PJLKMBW"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, onValue };
