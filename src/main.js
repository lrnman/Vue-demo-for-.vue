// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//vue
import Vue from 'vue';
import App from './App';

//vue-router
import router from './router';
//vuex
import store from './store/main';

//api
import { storageGetSync } from '@/api/api';

Vue.config.productionTip = false

/* eslint-disable no-new */
const $vm = new Vue({
    router,
	  store,
	  components: { App },
	  template: '<App />',
	  beforeMount() {
	      //如果用户是刷新的话，先登录
	      let user = storageGetSync('user');
	      user && this.$store.commit('user/USER_SIGNIN', JSON.parse(user));
	  },
}).$mount('#app');

export { $vm };
