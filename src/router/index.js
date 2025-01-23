import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.PUBLIC_PATH),
  // history: createWebHistory(),
  routes: [
    {
      path: import.meta.env.VITE_PUBLICPATH,
      name: 'home',
      component: App,
    },
    {
      path: import.meta.env.VITE_PUBLICPATH,
      name: 'address',
      component: App,
    },
  ]
})

router.afterEach((to, from) => {
  console.log('router.afterEach to:', to, 'from:', from);
})

export default router
