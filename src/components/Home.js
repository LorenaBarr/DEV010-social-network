// pantalla de bienvenidad iniciar sesion y registrarse//

// import { onNavigate } from '../main.js';

export const Home = (onNavigate) => {
    const HomeDiv = document.createElement('div');
    const buttonRegister = document.createElement('button');
    const buttonLogin = document.createElement('button');

    buttonRegister.textContent = 'Sign Up';
    buttonLogin.textContent = 'Log In';

    buttonRegister.addEventListener('click', () => onNavigate('/register'));

    buttonLogin.addEventListener('click', () => onNavigate('/login'));

    HomeDiv.appendChild(buttonRegister);
    HomeDiv.appendChild(buttonLogin);

    return HomeDiv;
};