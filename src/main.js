// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import plugin from '../src/plugin/plugin.js'
Vue.use(plugin)
Vue.use(Vuex)
// Vue.myPlugin()

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  },
  actions: {
    increment ({commit}) {
      commit('increment')
    },
    decrement ({commit}) {
      commit('decrement')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  myOption: 'Hello Vue.js!',
  store
})
