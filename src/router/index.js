import Vue from 'vue'
import Router from 'vue-router'

import * as routePath from './route-path'

import index from '../views/index/route'
import login from '../views/login/route'

Vue.use(Router)

export default new Router({
  routes: [
    ...login,
    ...index
  ]
})
