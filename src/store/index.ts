import Vue from 'vue';
import Vuex from 'vuex';

import TodoState from '@/store/modules/todo';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todo: TodoState
  }
});
