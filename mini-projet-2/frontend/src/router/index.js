import { createRouter, createWebHistory } from 'vue-router';
import Register from '../components/RegisterVIew.vue';
import Login    from '../components/LoginView.vue';
import Home     from '../components/HomeView.vue';

const routes = [
  { path: '/register', component: Register },
  { path: '/login',    component: Login },
  {
    path: '/',
    component: Home,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('user-token');
  if (to.meta.requiresAuth && !token) next('/login');
  else next();
});

export default router;
