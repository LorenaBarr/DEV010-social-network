import { googleSign } from '../lib/FireBase';

export const Home = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const logoElement = document.createElement('img');

  document.body.classList.add('home-body');
  logoElement.src = '../imagenes/logotechshare_360.png'; // Agrega la ruta de tu logo
  logoElement.alt = 'Logo de TechShare'; // Agrega un atributo alt para accesibilidad
  logoElement.classList.add('logo');

  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header');

  const titleElement = document.createElement('h1');
  titleElement.textContent = 'TechShare';
  titleElement.classList.add('title');

  const sloganElement = document.createElement('p');
  sloganElement.textContent = 'Share your ideas & thoughts';
  sloganElement.classList.add('slogan');

 
  headerDiv.appendChild(logoElement);
  headerDiv.appendChild(titleElement);
  headerDiv.appendChild(sloganElement);

  HomeDiv.appendChild(headerDiv);

  // contenedor para los botones//
  const buttonContainer = document.createElement('div');
  buttonContainer.id = 'button-container';

  const buttonLogin = document.createElement('button');
  buttonLogin.classList.add('btnAll');
  buttonLogin.textContent = 'Log In';
  buttonLogin.id = 'loginButton';

  const buttonRegister = document.createElement('button');
  buttonRegister.classList.add('btnAll');
  buttonRegister.textContent = 'Sign Up';
  buttonRegister.id = 'registerButton';

  const buttonGoogle = document.createElement('button');
  const imgGoogle = document.createElement('img');
  imgGoogle.src = '../imagenes/signin-assets (1)/google_signin_buttons/web/2x/btn_google_signin_light_pressed_web@2x.png';
  imgGoogle.alt = 'diseño botón de google';
  imgGoogle.id = 'imgGoogle';
  buttonGoogle.classList.add('btnGoogle');
  buttonGoogle.id = 'googleButton';
  buttonGoogle.appendChild(imgGoogle);
  buttonLogin.addEventListener('click', () => onNavigate('/login'));
  buttonRegister.addEventListener('click', () => onNavigate('/register'));

  buttonGoogle.addEventListener('click', () => {
    googleSign()
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User identified with Google', user);
        onNavigate('/feed');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        //console.error('error when starting with google', errorCode, errorMessage);
      });
  });
  // botones al contenddor//
  buttonContainer.appendChild(buttonLogin);
  buttonContainer.appendChild(buttonRegister);

  HomeDiv.appendChild(buttonContainer);
  HomeDiv.appendChild(buttonGoogle);

  return HomeDiv;
};
