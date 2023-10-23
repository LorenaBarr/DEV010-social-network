// router.js

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: Home }, // Importa tus componentes
  { path: '/about', component: About },
  // Define más rutas según tus necesidades
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
