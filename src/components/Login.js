// import { onNavigate } from "../main.js";
export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  
  HomeDiv.textContent = 'Welcome to TechShare';
  const buttonHome = document.createElement('button');

  buttonHome.textContent = 'Return to Home';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  HomeDiv.appendChild(buttonHome);

  const inputEmail = document.createElement('input');
  inputEmail.type = 'text';
  inputEmail.placeholder = 'Email';
  inputEmail.classList.add('email');

  HomeDiv.appendChild(inputEmail);

  const inputPassword = document.createElement('input');
  inputPassword.type = 'text';
  inputPassword.placeholder = 'Password';
  inputPassword.classList.add('password');

  HomeDiv.appendChild(inputPassword);

  const btnLogin = document.createElement('button');
  btnLogin.textContent = 'Log In';
  btnLogin.classList.add('btnTechShare');

  HomeDiv.appendChild(btnLogin);




  return HomeDiv;
};


