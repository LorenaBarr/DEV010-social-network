// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

const rootDiv = document.getElementById("root");

const inputEmail = document.createElement('input');
  inputEmail.type = 'text';
  inputEmail.placeholder = 'Email';
  inputEmail.id = "email";

 rootDiv.appendChild(inputEmail);

const inputPassword = document.createElement('input');
inputPassword.type = 'text';
inputPassword.placeholder = "Password";
inputEmail.id = 'password';


