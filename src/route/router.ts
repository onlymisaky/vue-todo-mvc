import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import All from '@/views/all.tsx';

Vue.use(Router);

const routes: RouteConfig[] = [
  {
    name: "",
    path: "/",
    component: All
  },
  {
    name: 'all',
    path: '/all',
    component: All
  },
  {
    name: 'active',
    path: '/active',
    component: () => import('@/views/active.tsx')
  },
  {
    name: 'completed',
    path: '/completed',
    component: () => import('@/views/completed.tsx')
  },
  {
    path: '*',
    redirect: { name: "all" }
  }
];

const router = new Router({ routes, linkActiveClass: 'selected' });

export default router;
