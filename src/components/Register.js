// import { onNavigate } from "../main.js";

export const Register = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'WelcometoTechShare';
  const buttonHome = document.createElement('button');

  buttonHome.textContent = 'Return to Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  HomeDiv.appendChild(buttonHome);

  
const inputElement = document.createElement('input');
inputElement.type = 'text';
inputElement.placeholder = 'User';
inputElement.classList.add('user');

HomeDiv.appendChild(inputElement);

  return HomeDiv;
};

// const nameApp = document.createElement('h1');
//   nameApp.textContent('TechShare');
//   nameApp.id = 'nameApp';
//   HomeDiv.appendChild(nameApp);