import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import All from '@/views/all.vue';

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
  }
];

const router = new Router({ routes });

export default router;
