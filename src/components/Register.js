import { createAccount } from '../lib/FireBase';

export const Register = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.id = 'divRegister';
  const registerForm = document.createElement('form');
  document.body.classList.add('register-body');

  const buttonHome = document.createElement('button');
  buttonHome.id = 'return';
  buttonHome.textContent = 'Return';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.placeholder = 'Email';
  inputEmail.classList.add('email', 'inputs');

  const inputPassword = document.createElement('input');
  inputPassword.type = 'password';
  inputPassword.placeholder = 'Password';
  inputPassword.classList.add('password', 'inputs');

  HomeDiv.append(buttonHome, inputEmail, inputPassword);

  const btnCreate = document.createElement('button');
  btnCreate.textContent = 'Create Account';
  btnCreate.id = 'create';

  HomeDiv.appendChild(btnCreate);

  registerForm.append(inputEmail, inputPassword, btnCreate);

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
        onNavigate('/feed');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(error, errorCode, errorMessage);
      });
  });
  return HomeDiv;
};
