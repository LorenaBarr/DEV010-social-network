// import { onNavigate } from "../main.js";
import { Home } from "./Home";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Register = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const registerForm = document.createElement('form');

  HomeDiv.textContent = 'WelcometoTechShare';
  const buttonHome = document.createElement('button');

  buttonHome.textContent = 'Return to Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  HomeDiv.appendChild(buttonHome);

  const inputUser = document.createElement('input');
  inputUser.type = 'text';
  inputUser.placeholder = 'User';
  inputUser.classList.add('user');

  HomeDiv.appendChild(inputUser);

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

  const inputConfirmPassword = document.createElement('input');
  inputConfirmPassword.type = 'password';
  inputConfirmPassword.placeholder = 'Confirm Password';
  inputConfirmPassword.classList.add('confirmPassword');

  HomeDiv.appendChild(inputConfirmPassword);

  const btnCreate = document.createElement('button');
  btnCreate.textContent = 'Create Account';

  HomeDiv.appendChild(btnCreate);

  const btnGoogle = document.createElement('button');
  btnGoogle.textContent = 'Google';

  HomeDiv.appendChild(btnGoogle);

  registerForm.appendChild(inputUser);
  registerForm.appendChild(inputEmail);
  registerForm.appendChild(inputPassword);
  registerForm.appendChild(inputConfirmPassword);
  registerForm.appendChild(btnCreate);

  HomeDiv.appendChild(registerForm);


  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userRe = inputUser.value;
    const emailRe = inputEmail.value;
    const passwordRe = inputPassword.value;
    const confirmPasswordRe = inputConfirmPassword.value;

    createUserWithEmailAndPassword(userRe, emailRe, passwordRe, confirmPasswordRe);
  });
  return HomeDiv;
};
// const nameApp = document.createElement('h1');
//   nameApp.textContent('TechShare');
//   nameApp.id = 'nameApp';
//   HomeDiv.appendChild(nameApp);