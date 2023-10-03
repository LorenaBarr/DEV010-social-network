import { initializeApp } from 'firebase/app';
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup,
} from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDUapyJiYR7BeMGzuAtLUTDJkaX7dTZA2s',
  authDomain: 'techshare-ahora-if.firebaseapp.com',
  projectId: 'techshare-ahora-if',
  storageBucket: 'techshare-ahora-if.appspot.com',
  messagingSenderId: '132208508253',
  appId: '1:132208508253:web:7b3c4a9040db69ec19fcb4',
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);

export const googleSign = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export const createAccount = (email, psw) => createUserWithEmailAndPassword(auth, email, psw);
export const login = (email, psw) => signInWithEmailAndPassword(auth, email, psw);

export const createPost = (obj) => {
  return addDoc(collection(db, "postFeed"), {
    ...obj
  })
};
