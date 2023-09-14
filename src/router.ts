import { createRouter, createWebHistory } from 'vue-router';
import Home from './home.vue';
import DefaultLayout from './layout.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [{ path: '', name: 'home', component: Home }],
    },
  ],
});
