// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAi_a2KYVBGClU2wFvdfktocAHmdVl0Dk",
  authDomain: "shedsoncode-aac3c.firebaseapp.com",
  projectId: "shedsoncode-aac3c",
  storageBucket: "shedsoncode-aac3c.firebasestorage.app",
  messagingSenderId: "206933938157",
  appId: "1:206933938157:web:14e752915f19cb91fe61e4",
  measurementId: "G-W7PKH8ZFJH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
