// pantalla de bienvenidad iniciar sesion y registrarse//

// import { onNavigate } from '../main.js';



export const Home = (onNavigate) => {
    const HomeDiv = document.createElement('div');
      const logoElement = document.createElement('img');
     logoElement.src = '../imagenes/logotechshare_360.png'; // Agrega la ruta de tu logo
     logoElement.alt = 'Logo de TechShare'; // Agrega un atributo alt para accesibilidad
     logoElement.classList.add('logo');
     // Crear un div para el título, el logo y el eslogan
     const headerDiv = document.createElement('div');
     headerDiv.classList.add('header'); // Agrega clases CSS según sea necesario
 
     // Crear elementos para el título, el logo y el eslogan
     const titleElement = document.createElement('h1');
     titleElement.textContent = 'TechShare'; 
 
    
 
     const sloganElement = document.createElement('p');
     sloganElement.textContent = 'Comparte tus ideas y conocimientos'; 
 
     // Agregar los elementos al div del encabezado
     // headerDiv.appendChild(logoElement); 
     headerDiv.appendChild(logoElement);
     headerDiv.appendChild(titleElement);
     headerDiv.appendChild(sloganElement);
    
 
     HomeDiv.appendChild(headerDiv);
     console.log(titleElement);
     console.log(sloganElement);

    
    const buttonLogin = document.createElement('button');
    const buttonRegister = document.createElement('button');

   
    buttonLogin.textContent = 'Log In';
     buttonRegister.textContent = 'Sign Up';

    buttonLogin.addEventListener('click', () => onNavigate('/login'));
    buttonRegister.addEventListener('click', () => onNavigate('/register'));

    
    HomeDiv.appendChild(buttonLogin);
    HomeDiv.appendChild(buttonRegister);

   



    return HomeDiv;
};

