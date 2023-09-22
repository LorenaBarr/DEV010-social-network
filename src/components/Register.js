// import { onNavigate } from "../main.js";
import { Home } from './Home';
import { createAccount, googleSign } from '../lib/FireBase';

export const Register = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const registerForm = document.createElement('form');

  HomeDiv.textContent = 'WelcometoTechShare';
  const buttonHome = document.createElement('button');

  buttonHome.textContent = 'Return to Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  HomeDiv.appendChild(buttonHome);

  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.placeholder = 'Email';
  inputEmail.classList.add('Email');

  HomeDiv.appendChild(inputEmail);

  const inputPassword = document.createElement('input');
  inputPassword.type = 'password';
  inputPassword.placeholder = 'Password';
  inputPassword.classList.add('password');

  HomeDiv.appendChild(inputPassword);

  const btnCreate = document.createElement('button');
  btnCreate.textContent = 'Create Account';

  HomeDiv.appendChild(btnCreate);

  const btnGoogle = document.createElement('button');
  btnGoogle.textContent = 'Google';
  btnGoogle.classList.add('btnGoogle');

  btnGoogle.addEventListener('click', () => {
    googleSign()
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Usuario autenticado con Google', user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error al iniciar sesión con Google', errorCode, errorMessage);
    });
  });

  HomeDiv.appendChild(btnGoogle);

  registerForm.appendChild(inputEmail);
  registerForm.appendChild(inputPassword);
  registerForm.appendChild(btnCreate);

  HomeDiv.appendChild(registerForm);

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailRe = inputEmail.value;
    const passwordRe = inputPassword.value;
    // saber como confirmar la contraseña condicional o funcion//

    createAccount(emailRe, passwordRe)
      .then((userCredential) => {
      // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(error);
      });
  });
  return HomeDiv;
};
