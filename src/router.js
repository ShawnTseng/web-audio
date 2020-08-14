import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'chapter1', component: () => import('./views/Index.vue') },
  { path: '/chapter2', name: 'chapter2', component: () => import('./views/Chapter2.vue') },
];

const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
});

export default router;
