import { createRouter, createWebHistory } from 'vue-router'
import BookListView from '../views/BookListView.vue'
import Login from '../views/LoginView.vue';
import Signup from '../views/SignupView.vue';

const routes = [
  {
    path: '/',
    name: 'list',
    component: BookListView
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import( '../views/CartView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
