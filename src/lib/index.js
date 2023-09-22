
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const provider = new GoogleAuthProvider();
const auth = getAuth();


