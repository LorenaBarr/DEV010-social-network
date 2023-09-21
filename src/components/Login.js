// import { onNavigate } from "../main.js";
//import { signInWithEmailAndPassword } from './firebaseAuth';
import { signInWithEmailAndPassword } from "firebase/auth";

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
  
  // Agregar elementos al formulario
  loginForm.appendChild(inputEmail);
  loginForm.appendChild(inputPassword);
  loginForm.appendChild(btnLogin);

  // Agregar el formulario al div principal
  HomeDiv.appendChild(loginForm);

  // Agregar un evento de envío del formulario
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = inputEmail.value;
    const password = inputPassword.value;
  
    signInWithEmailAndPassword(email, password);
    // Realizar la lógica de autenticación o cualquier acción necesaria aquí
  });
  return HomeDiv;
};



