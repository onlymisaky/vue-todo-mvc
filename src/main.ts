import Vue from 'vue';
import 'todomvc-app-css/index.css';
import router from '@/route/router';
import store from '@/store/index';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
