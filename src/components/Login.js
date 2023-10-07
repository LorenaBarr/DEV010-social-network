import { login } from '../lib/FireBase';

export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const loginForm = document.createElement('form');
  const imgHome = document.createElement('img');
  const buttonHome = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const btnLogin = document.createElement('button');

  document.body.classList.add('login-body');

  buttonHome.id = 'buttonHome';
  buttonHome.classList.add('btnHome');
  buttonHome.appendChild(document.createTextNode('Return'));
  document.body.appendChild(buttonHome);
  HomeDiv.appendChild(buttonHome);

  buttonHome.addEventListener('click', () => onNavigate('/'));

  loginForm.id = 'loginForm';
  inputEmail.type = 'email';
  inputEmail.placeholder = 'Email';
  inputEmail.id = 'inputEmail';
  inputEmail.classList.add('inputLogin', 'inputEm');

  inputPassword.type = 'password';
  inputPassword.placeholder = 'Password';
  inputPassword.id = 'inputPassword';
  inputPassword.classList.add('inputLogin', 'inputPw');

  HomeDiv.append(inputEmail, inputPassword);

  btnLogin.textContent = 'Log In';
  btnLogin.id = 'buttonLogIn';
  btnLogin.classList.add('btnEnterTS');
  HomeDiv.appendChild(btnLogin);

  loginForm.appendChild(inputEmail);
  loginForm.appendChild(inputPassword);
  loginForm.appendChild(btnLogin);
  HomeDiv.appendChild(loginForm);

  const modal = document.createElement('div');
  const modalContent = document.createElement('div');
  const close = document.createElement('span');
  close.innerHTML = '&times;';
  close.classList.add('closeModal');
  modal.classList.add('modal');
  modalContent.classList.add('modalContent');

  modal.append(close, modalContent);

  document.body.appendChild(modal);

  const openModal = () => {
    modal.style.display = 'block';
    modalContent.textContent = 'Verificar datos';
  };

  close.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();

    const email = inputEmail.value;
    const password = inputPassword.value;

    login(email, password)
      .then(() => {
        onNavigate('/feed');
      })
      .catch((error) => {
        openModal(error.message);
      });
  });
  return HomeDiv;
};
