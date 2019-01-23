/* eslint-disable */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    site_title: null,
    site_desc: '',
    site_nav: [],
  },
  mutations: {
    setSiteTitle: (_state, _payload) => {
      _state.site_title = _payload;
    },
    setSiteNav: (_state, _payload) => {
      _state.site_nav = _payload;
    },
    setSiteDesc: (_state, _payload) => {
      _state.site_desc = _payload;
    },
  },
  actions: {

  },
});
