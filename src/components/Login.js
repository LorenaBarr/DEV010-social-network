// import { onNavigate } from "../main.js";
import { signInWithEmailAndPassword } from "firebase/auth";
//import { auth } from "src/lib/FireBase.js";
;

export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const loginForm = document.createElement('form');
  HomeDiv.textContent = 'Welcome to TechShare';
  const buttonHome = document.createElement('button');

  buttonHome.textContent = 'Return to Home';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  HomeDiv.appendChild(buttonHome);

  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.placeholder = 'Email';
  inputEmail.classList.add('email');

  HomeDiv.appendChild(inputEmail);

  const inputPassword = document.createElement('input');
  inputPassword.type = 'password';
  inputPassword.placeholder = 'Password';
  inputPassword.classList.add('password');

  HomeDiv.appendChild(inputPassword);

  const btnLogin = document.createElement('button');
  btnLogin.textContent = 'Log In';
  btnLogin.classList.add('btnTechShare');

  HomeDiv.appendChild(btnLogin);

  loginForm.appendChild(inputEmail);
  loginForm.appendChild(inputPassword);
  loginForm.appendChild(btnLogin);

  HomeDiv.appendChild(loginForm);

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = inputEmail.value;
    const password = inputPassword.value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('usuarioAutenticado', user);
      onNavigate('/');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('error al iniciar sesión', errorCode, errorMessage);
    // Realizar la lógica de autenticación o cualquier acción necesaria aquí
    }
  });

  return HomeDiv;
};
