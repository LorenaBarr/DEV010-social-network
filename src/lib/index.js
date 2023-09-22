
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const provider = new GoogleAuthProvider();
const auth = getAuth();
//signInWithEmailAndPassword(email, password) {
signInWithEmailAndPassword(auth, email, password) 
  .then((userCredential) => {
    const user = userCredential.user;
    console.log('usuario');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('falla en la matrix', errorCode, errorMessage);
  });

createUserWithEmailAndPassword(auth, user, email, password, confirmPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("nombre");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("errores");
  });
