import Vue from 'vue';
import Vant from 'vant';
import animated from 'animate.css';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vant/lib/index.css';
import 'lib-flexible';
import http from './api/index';
import '@/assets/css/main.css';

Vue.prototype.$http = http;

Vue.use(Vant);
Vue.use(animated);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
