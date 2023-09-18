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

  return HomeDiv;
};


