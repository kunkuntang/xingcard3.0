<template>
  <div class="sidebar-con" @click.self="hideBar">
    <ul class="side-bar palette-peter-river" :class="isShow ? 'show' : ''">
      <img src="/static/img/logo.jpg" class="img-circle img-response" alt="" width="90" height="90">
      <div class="title f-s-22 m-t-sm">
        <li class="department f-s-16 palette" :class="curIdx === index ? 'palette-belize-hole' : ''" v-for="(department, index) in data" @click="select(index)">{{department.name}}</li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['data', 'isShow'],
  data () {
    return {
      curIdx: 0
    }
  },
  // computed: {
  //   isShow () {

  //   }
  // },
  methods: {
    select (idx) {
      console.log(idx)
      this.curIdx = idx
      this.$emit('selectApart', idx)
    },
    hideBar () {
      this.$emit('selectApart', -1)
    }
  }
}
</script>

<style scoped>
.sidebar-con{
  width: 100%;
}
.side-bar{
  min-width: 150px;
  width: 75%;
  height: 100%;
  /*background-color: #2593DE;*/
  position: fixed;
  top: 0;
  color: #ffffff;
  padding: 10px 0 10px 0;
  z-index: 9999999;
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
