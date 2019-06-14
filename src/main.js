// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import router from './router'
import './assets/styles/reset.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'swiper/dist/css/swiper.css'

Vue.use(iView)
Vue.use(VueAwesomeSwiper,/*{ default global options } */)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', // 这个指向index.html的app
  router,
  store,
  components: { App },  //这个指向App.vue或者App.js  或者App.json等
  template: '<App/>'
})
