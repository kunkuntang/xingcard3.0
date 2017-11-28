<template>
  <div class="sidebar-con" @click.self="hideSideBar">
    <ul class="side-bar palette-peter-river" :class="isShow ? 'show' : ''">
      <img src="../../static/img/logo.jpg" class="img-circle img-response" alt="" width="90" height="90">
      <div class="title f-s-22 m-t-sm">
        <li class="department f-s-16 palette" :class="curIdx === index ? 'palette-belize-hole' : ''" v-for="(department, index) in departList" :key="index" @click="select(index)">{{department}}</li>
      </div>
      <div class="exit text-center">
        <span class="iconfont icon-exit" style="font-size: 28px" @click="logout"></span>
      </div>
    </ul>
  </div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'
export default {
  data () {
    return {
      // curIdx: 0
    }
  },
  computed: {
    ...mapState({
      curIdx: 'curIdx',
      isShow: state => state.isShowBar,
      departList: state => state.departList
    })
  },
  methods: {
    logout () {
      this.hideSideBar()
      this.$router.go(-1)
      document.cookie = 'www.xingkong.us='
    },
    select (idx) {
      this.changeDepart(idx)
      this.updateCurIdx(idx)
    },
    ...mapMutations({
      hideSideBar: 'toggleBar',
      updateCurIdx: 'updateCurIdx'
    }),
    ...mapActions({
      changeDepart: 'changeDepart'
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
  position: relative;
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
.exit{
  position: absolute;
  width: 100%;
  bottom: 40px;
  font-size: 30px;
  color: #3498db;
}
.exit span{
  display: inline-block;
  border-radius: 50%;
  background: #ffffff;
  width: 70px;
  line-height: 70px;
  transform: rotateY(180deg)
}
</style>
