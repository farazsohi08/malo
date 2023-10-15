import { createRouter, createWebHistory } from 'vue-router';
import Layout from './layout.vue';
import Problem1 from './problem1/problem1.vue';
import Problem2 from './problem2/problem2.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/problems',
      name: 'problems',
      component: Layout,
      children: [
        {
          path: 'problem1',
          name: 'problem1',
          component: Problem1,
          meta: { title: 'Problem 1: Wehnelt Electron Gun', link: 'Problem 1' },
        },
        {
          path: 'problem2',
          name: 'problem2',
          component: Problem2,
          meta: { title: 'Problem 2: Deflection Tube', link: 'Problem 2' },
        },
      ],
    },
    { path: '/:catchAll(.*)', redirect: { name: 'problem1' } },
  ],
});
