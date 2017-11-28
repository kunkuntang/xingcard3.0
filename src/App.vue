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
import utils from 'utils'
export default {
  name: 'app',
  created () {
    // 取消首屏加载动画
    document.getElementById('loading').style.display = 'none'
    let cookies = utils.getCookies('www.xingkong.us')
    console.log('cookies: ', cookies)
    let vm = this
    if (cookies) {
      vm.openLoading()
      utils.axiosPost('https://lenkuntang.cn/xingcardServer', cookies, (response) => {
        vm.closeLoading()
        if (response.data.result === 80805012) {
          vm.updateData(response.data)
          vm.$router.push({path: path.index.index})
        } else {
          vm.$router.push({path: path.login.login})
        }
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
