<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import store from './store'
export default {
  name: 'app',
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
