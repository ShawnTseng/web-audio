import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: () => import('./views/Home.vue') },
  { path: '/chapter1', name: 'chapter1', component: () => import('./views/Chapter1.vue') },
  { path: '/chapter2', name: 'chapter2', component: () => import('./views/Chapter2.vue') },
];

const router = new VueRouter({
  mode: 'history',
  routes, // (缩写) 相当于 routes: routes
});

export default router;
