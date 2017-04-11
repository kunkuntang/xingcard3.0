// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'

import jQuery from 'jquery'
import $ from './assets/jquery-vendor'
// import spinkit from 'spinkit'

import 'normalize.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/ladda/dist/ladda.min.css'
import '../node_modules/spinkit/css/spinkit.css'
import 'static/css/flat-ui.min.css'
import 'static/css/iconfont.css'
import 'static/css/global.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
