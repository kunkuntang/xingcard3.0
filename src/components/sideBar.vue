<template>
  <div class="sidebar-con" @click.self="hideSideBar">
    <ul class="side-bar palette-peter-river" :class="isShow ? 'show' : ''">
      <img src="/static/img/logo.jpg" class="img-circle img-response" alt="" width="90" height="90">
      <div class="title f-s-22 m-t-sm">
        <li class="department f-s-16 palette" :class="curIdx === index ? 'palette-belize-hole' : ''" v-for="(department, index) in departList" @click="select(index)">{{department}}</li>
      </div>
    </ul>
  </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'
export default {
  data () {
    return {
      curIdx: 0
    }
  },
  computed: {
    ...mapState({
      isShow: state => state.isShowBar,
      departList: state => state.departList
    })
  },
  methods: {
    ...mapMutations({
      hideSideBar: 'toggleBar'
    }),
    ...mapActions({
      select: 'changeDepart'
    })
  }
}
</script>

<style scoped>
.sidebar-con{
  width: 100%;
  position: fixed;
  top: 0;
  height: 100%;
  color: #ffffff;
  z-index: 9999999;
}
.side-bar{
  min-width: 150px;
  width: 60%;
  padding: 10px 0 10px 0;
  height: 100%;
}
.title{
  border-top: 1px solid #f3f3f4;
}
.img-con{
  width: 90px;
  height: 90px;
  background-color: #ffffff;
}
.department{
  /*background-color: peachpuff;*/
}
</style>
