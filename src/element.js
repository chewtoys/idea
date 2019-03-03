import Vue from 'vue';

import {
  Row,
  Col,
  Container,
  Header,
  Main,
  Footer,
  Message,
  Pagination,
} from 'element-ui';

Vue.use(Row);
Vue.use(Col);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Pagination);

Vue.prototype.$message = Message;
