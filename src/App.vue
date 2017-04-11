<template>
  <div id="app">
    <router-view></router-view>
    <transition name="loading-fade">
      <div class="loading" v-show="isLoading">
        <div class="sk-spinner sk-wandering-cubes">
          <div class="sk-cube"></div>
          <div class="sk-cube sk-cube2"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import store from './store'
import { mapMutations, mapState } from 'vuex'
import axios from 'axios'
import path from 'path'
export default {
  name: 'app',
  created () {
    let cookies = this.getCookies()
    let vm = this
    if (cookies) {
      vm.openLoading()
      axios.post('http://xingkongus.duapp.com/index.php/User/loginAPP', {
        key: 82015,
        name: cookies
      },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          transformRequest: [function (data) {
            /* global $ */
            data = $.param(data)
            return data
          }]
        }).then(function (response) {
          vm.closeLoading()
          vm.updateData(response.data)
          vm.$router.push({path: path.index.index})
        })
    } else {
      this.$router.push({path: path.login.login})
    }
  },
  computed: {
    ...mapState({
      isLoading: 'isLoading'
    })
  },
  methods: {
    getCookies () {
      let strCookie = document.cookie
      let arrCookie = strCookie.split('; ')
      for (let i = 0; i < arrCookie.length; i++) {
        let arr = arrCookie[i].split('=')
        if (arr[0] === 'www.xingkong.us') {
          return arr[1]
        }
      }
      return null
    },
    ...mapMutations({
      updateData: 'updateData',
      closeLoading: 'closeLoading',
      openLoading: 'openLoading'
    })
  },
  store
}
</script>

<style>
#app {
  font-family: 'Microsoft YaHei', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.loading{
  position: absolute;
  top: 50%;
  width: 100%;
  height: 120px;
  margin-top: -60px;
}

.loading .sk-wandering-cubes .sk-cube{
  background-color: #3498db;
}

.loading-fade-enter-active,
.loading-fade-leave-active{
  transition: all .5s ease;
  opacity: 0;
}

.loading-fade-enter,
.loading-fade-leave{
  opacity: 1;
}
</style>
