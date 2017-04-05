<template>
  <div class="login-con">
    <div class="icon">
      <img src="../../../static/img/logo.jpg" alt="" width="200" height="200">
    </div>
    <div class="loginBtn-con">
      <input type="text" v-model="loginKey" v-on:keyup.enter="login">
      <button  class="btn btn-primary login-btn m-t-lg" @click="login">login</button>
    </div>
  </div>
</template>

<script>
import path from 'path'
export default {
  data () {
    return {
      loginKey: ''
    }
  },
  methods: {
    login () {
      this.$router.push({path: path.index.index, query: {key: this.loginKey}})
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
  margin-top: 30%;
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
