// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOFqDvJqirEGcWCw6_axpf7S0wYzk2OVk",
  authDomain: "techshare-1e532.firebaseapp.com",
  projectId: "techshare-1e532",
  storageBucket: "techshare-1e532.appspot.com",
  messagingSenderId: "1011508380343",
  appId: "1:1011508380343:web:48ac981b6d61825ed00332",
  measurementId: "G-42JS3F2KXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
// Initialize Firebase



// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
