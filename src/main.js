// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', // 这个指向index.html的app
  router,
  components: { App },  //这个指向App.vue或者App.js  或者App.json等
  template: '<App/>'
})
