// import { onNavigate } from "../main.js";

import { Home } from "./Home";

export const Register = (onNavigate) => {
  const HomeDiv = document.createElement('div');
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
inputEmail.type = 'text';
inputEmail.placeholder = 'Email';
inputEmail.classList.add('Email');

HomeDiv.appendChild(inputEmail);

const inputPassword = document.createElement('input');
inputPassword.type = 'text';
inputPassword.placeholder = 'Password';
inputPassword.classList.add('password');

HomeDiv.appendChild(inputPassword);

const inputConfirmPassword = document.createElement('input');
inputConfirmPassword.type = 'text';
inputConfirmPassword.placeholder = 'Confirm Password';
inputConfirmPassword.classList.add('confirmPassword');

HomeDiv.appendChild(inputConfirmPassword);

const btnCreate = document.createElement('button');
btnCreate.textContent = 'Create Account';

HomeDiv.appendChild(btnCreate);

const btnGoogle = document.createElement('button');
btnGoogle.textContent = 'Google';

HomeDiv.appendChild(btnGoogle);


  return HomeDiv;
};


// const nameApp = document.createElement('h1');
//   nameApp.textContent('TechShare');
//   nameApp.id = 'nameApp';
//   HomeDiv.appendChild(nameApp);