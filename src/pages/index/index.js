import Vue from 'vue';
import App from './index.vue';
import api from '../../api';

import '../../element';

import 'normalize.css';
import 'element-ui/lib/theme-chalk/index.css';
import '../../assets/stylesheets/reset.less';

Vue.prototype.$api = api;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
