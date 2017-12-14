<template>
  <div class="login-con">
    <div class="icon">
      <img src="../../../static/img/logo.jpg" alt="" width="170" height="170">
    </div>
    <div class="loginBtn-con">
      <input type="text" v-model="loginKey" v-on:keyup.enter="login">
      <button class="btn btn-primary login-btn m-t-lg ladda-button" data-style="zoom-in" @click="login"><span class="ladda-label">login</span></button>
    </div>
    <toast :isShow="isShowToast" :text="toastText"></toast>
  </div>
</template>

<script>
import path from 'path'
import axios from 'axios'
import Ladda from 'ladda'

import { mapMutations, mapState } from 'vuex'
import utils from 'utils'
import toast from '@/components/toast'

export default {
  data () {
    return {
      loginKey: '',
      toastText: '出现了点小错误...'
    }
  },
  computed: {
    ...mapState({
      title: 'title',
      isShowToast: 'isShowToast'
    })
  },
  methods: {
    login () {
      this.$router.push({path: path.index.index})
    },
    authLogin (next) {
      // 按钮Loading动画
      let l = Ladda.create(document.querySelector('.login-btn'))
      let progress = 0.1
      l.start()
      let play = setInterval(() => {
        l.setProgress(progress)
        progress += 0.1
        if (Math.floor(progress) === 1) {
          l.stop()
          clearInterval(play)
        }
      }, 200)
      // 请求服务器带数据
      let vm = this
      utils.axiosPost('https://lenkuntang.cn/xingcardServer', this.loginKey, (response) => {
        // 登陆状态判断
        let data = response.data
        if (data.result === 201) {
          vm.toastText = '别闹，又想搞事情！'
          vm.showToast()
          if (l.isLoading) {
            l.stop()
            clearInterval(play)
          }
          next(false)
        } else if (data.result === 211) {
          vm.toastText = '服务器开小差了，请联系管理员'
          vm.showToast()
          next(false)
        } else if (data.result === 200) {
          vm.toastText = '社团ID错误，请重试'
          vm.showToast()
          if (l.isLoading) {
            l.stop()
            clearInterval(play)
          }
          next(false)
        } else {
          // 登陆成功，设置cookies
          utils.setCookies(30, vm.loginKey)
          vm.updateData(data)
          if (l.isLoading) {
            l.stop()
            clearInterval(play)
          }
          next()
        }
      }, () => {
        vm.toastText = '服务器走了一下神，请重试 >_<'
        vm.showToast()
      })
    },
    ...mapMutations({
      updateData: 'updateData',
      showToast: 'showToast'
    })
  },
  components: {
    toast
  },
  beforeRouteLeave (to, from, next) {
    if (this.loginKey) {
      this.authLogin(next)
    } else {
      this.toastText = '密码不能为空 =_=||'
      this.showToast()
    }
  }
}
</script>

<style scoped>
.login-con{
  background-color: #ffffff;
}
.icon{
  margin-top: 20%;
}
.loginBtn-con{
  margin: 0 auto;
  margin-top: 15%;
  width: 70%;
}

.loginBtn-con input{
  padding-left: 10px;
  width: 100%;
  border: 2px solid #bdc3c7;
  border-radius: 4px;
}

.login-btn{
  width: 100%;
}
</style>
