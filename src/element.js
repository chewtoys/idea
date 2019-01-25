import Vue from 'vue';

import {
  Row,
  Col,
  Container,
  Header,
  Main,
  Footer,
  Message,
} from 'element-ui';

Vue.use(Row);
Vue.use(Col);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);

Vue.prototype.$message = Message;