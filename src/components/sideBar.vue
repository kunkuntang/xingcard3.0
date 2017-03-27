<template>
  <ul class="side-bar palette-peter-river" :class="isShow ? 'show' : ''">
    <li class="title f-s-22 m-t-sm">apartments</li>
    <li class="department f-s-16 palette" :class="curIdx === index ? 'palette-belize-hole' : ''" v-for="(department, index) in data" @click="select(index)">{{department.name}}</li>
  </ul>
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
    }
  }
}
</script>

<style scoped>
.show{

}
.side-bar{
  min-width: 150px;
  height: 100%;
  /*background-color: #2593DE;*/
  position: fixed;
  top: 0;
  color: #ffffff;
  padding: 10px 0 10px 0;
  z-index: 9999999;
}
.title{
  border-bottom: 1px solid #f3f3f4;
}
.department{
  /*background-color: peachpuff;*/
}
</style>
