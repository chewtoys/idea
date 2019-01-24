import Vue from 'vue';
import App from './index.vue';
import store from '../../store';
import api from '../../api';
import config from '../../config';

import '../../element';

import 'normalize.css';
import 'element-ui/lib/theme-chalk/index.css';
import '../../assets/stylesheets/reset.less';

Vue.prototype.$api = api;
Vue.prototype.$config = config;

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
