// import { onNavigate } from "../main.js";
import { login, googleSign } from '../lib/FireBase';
//import { auth } from "src/lib/FireBase.js";
;

export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const loginForm = document.createElement('form');
  HomeDiv.textContent = 'Welcome to TechShare';
  document.body.classList.add('login-body');
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

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = inputEmail.value;
    const password = inputPassword.value;

    login(email, password)
      .then((userCredential)  => {
        const user = userCredential.user;
        console.log(user);
        onNavigate('/feed');
      })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('error al iniciar sesión', errorCode, errorMessage);
    // Realizar la lógica de autenticación o cualquier acción necesaria aquí
    })
  });

  return HomeDiv;
};
