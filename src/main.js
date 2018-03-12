// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex/store'
import router from './router/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  template:'<App/>',
  components: {App},
  render: (createElement) => createElement(App)
}).$mount('#app')
// router.push({ path: '/login' })
