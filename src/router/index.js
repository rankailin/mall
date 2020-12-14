import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

VueRouter.prototype.back = false;
VueRouter.prototype.goBack = function goBack() {
  this.back = true;
  this.go(-1);
};
Vue.use(VueRouter);

const routes = [{
  path: '/home',
  name: 'Home',
  component: Home,
  children: [{
    path: 'classify',
    name: 'Classify',
    component: () => import('@/views/Classify.vue'),
  }, {
    path: 'cart',
    name: 'Cart',
    component: () => import('@/views/Cart.vue'),
  }],
}, {
  path: '/search',
  name: 'Search',
  component: () => import('@/views/Search.vue'),
},
{
  path: '*',
  redirect: '/home/classify',
},
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
