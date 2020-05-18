import vue from 'vue';
import VueRouter from 'vue-router';

import Home from './view/Main/Home.vue';
import About from './view/Main/About.vue';
import Main from './view/Main/Main.vue';
import Login from './view/Main/Login.vue';
import Register from './view/Main/Register.vue';
import Dashboard from './view/Main/Dashboard.vue';
import Detail from './view/Main/Detail.vue';
import Logout from './view/auth/Logout.vue';
import Activation from './view/Main/Activation.vue';

vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    redirect: { name: 'Home' },
    meta: {
      title: 'Most Populer Library',
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
          title: 'Library',
        },
      },
      {
        path: '/auth',
        name: 'auth',
        component: Activation,
      },
      {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
          title: 'Login',
        },
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
          title: 'Library | Most Populer Library',
        },
      },
      {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
          title: 'Regist your acount',
        },
      },
      {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
          title: 'About | Library',
        },
      },
      {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail,
        meta: {
          title: 'Detail | Libarary',
        },
      },
      {
        path: '/logout',
        name: 'Logout',
        component: Logout,
      },
    ],
  },
];
const router = new VueRouter({
  mode: 'history',
  routes,
});
export default router;
