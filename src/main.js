import { Home } from './components/Home.js';
import { Register } from './components/Register.js';
import { Login } from './components/Login.js';
// import { Feed } from './components/Feed.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': Home,
  '/register': Register,
  '/login': Login,
  // '/feed': Feed,
};

// export const upDateBackground = (pathname) => {
//   if(pathname.includes('/login')){
//     document.body.classList.remove('home-body');
//     document.body.classList.add('login-body');
//   } else if (pathname.includes('/home')){
//     document.body.classList.remove('login-body');
//     document.body.classList.add('home-body');
//   }
// };

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  //upDateBackground(pathname);

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

//upDateBackground(pathname);
rootDiv.appendChild(component(onNavigate));
