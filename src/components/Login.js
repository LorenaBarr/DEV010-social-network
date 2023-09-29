import { login } from '../lib/FireBase';

export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const loginForm = document.createElement('form');
  const buttonHome = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const btnLogin = document.createElement('button');

  HomeDiv.textContent = 'Welcome to TechShare';
  document.body.classList.add('login-body');
  
  buttonHome.textContent = 'Return to Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));
  HomeDiv.appendChild(buttonHome);
  
  inputEmail.type = 'email';
  inputEmail.placeholder = 'Email';
  inputEmail.classList.add('email');
  HomeDiv.appendChild(inputEmail);

  inputPassword.type = 'password';
  inputPassword.placeholder = 'Password';
  inputPassword.classList.add('password');
  HomeDiv.appendChild(inputPassword);

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
      });
  });

  return HomeDiv;
};