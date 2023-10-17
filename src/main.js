import { Home } from './components/Home.js';
import { Register } from './components/Register.js';
import { Login } from './components/Login.js';
import { postFeed } from './components/Feed.js';
import { auth } from './lib/FireBase.js';

const rootDiv = document.getElementById('root');

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  renderRoute(pathname);
};

const renderRoute = (pathname) => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  const component = routes[pathname] || Home;
  rootDiv.appendChild(component(onNavigate));
};

// while (rootDiv.firstChild) {
//   rootDiv.removeChild(rootDiv.firstChild);
// }


export const routes = {
  '/': Home,
  '/register': Register,
  '/login': Login,
  '/feed': () => {
    const user = auth.currentUser;
    if (user) {
      return postFeed(onNavigate);
    }
    // Si no estás autenticado, redirige a la ruta de inicio
    // onNavigate('/');
    // return null;
    return postFeed(onNavigate);
  },
};

const pathname = window.location.pathname;
renderRoute(pathname);

window.onpopstate = () => {
  const pathname = window.location.pathname;
  renderRoute(pathname);
};

// export const routes = {
//   '/': Home,
//   '/register': Register,
//   '/login': Login,
//   '/feed': () => {
//     const user = auth.currentUser;
//     if (user) {
//       return postFeed(onNavigate);
//     }
//     // onNavigate('/');
//     // return null;
//     return postFeed(onNavigate);
//   },
// };

// const pathname = window.location.pathname;
// const component = routes[pathname] || Home;

// window.onpopstate = () => {
//   while (rootDiv.firstChild) {
//     rootDiv.removeChild(rootDiv.firstChild);
//   }
//   rootDiv.appendChild(component(onNavigate));
// };

// rootDiv.appendChild(component(onNavigate));
