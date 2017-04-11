<template>
  <div id="app">
    <router-view></router-view>
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
    console.log(cookies)
    if (cookies) {
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
          vm.updateData(response.data)
          vm.$router.push({path: path.index.index})
        })
    }
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
      updateData: 'updateData'
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
</style>
