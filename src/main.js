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

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  // eslint-disable-next-line no-use-before-define
  rootDiv.appendChild(routes[pathname](onNavigate));
};

export const routes = {
  '/': Home,
  '/register': Register,
  '/login': Login,
  '/feed': () => {
    const user = auth.currentUser;
    if (user) {
      return postFeed(onNavigate);
    }
    // onNavigate('/');
    // return null;
    return postFeed(onNavigate);
  },
};

const pathname = window.location.pathname;
const component = routes[pathname] || Home;

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(component(onNavigate));
};

rootDiv.appendChild(component(onNavigate));
