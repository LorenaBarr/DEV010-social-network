// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

import { Home } from './components/Home.js';
import { Register } from './components/Register.js';
import { Login } from './components/Login.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': Home,
  '/register': Register,
  '/login': Login,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname](onNavigate));
};

const pathname = window.location.pathname;
const component = routes[pathname] || Home;

window.onpopstate = () => {
  rootDiv.appendChild(component(onNavigate));
};

rootDiv.appendChild(component(onNavigate));


