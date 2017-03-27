<template>
  <div>
    <div class="col-xs-2"><span class="fui-arrow-left" @click="goBack"></span></div>
    <div class="search-box col-xs-8 p-l">
      <div class="row">
        <input class="search form-control" type="search" v-model="keyword" placeholder="请输入联系人...">
        <span class="clear-btn fui-cross f-s-14" @click="clearSearch"></span>
      </div>
    </div>
    <div class="col-xs-2"><span class="fui-search" @click="doSearch"></span></div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    clearSearch () {
      this.keyword = ''
    },
    doSearch () {
      this.$emit('doSearch', this.keyword)
    },
    goBack () {
      this.$emit('goBack')
    }
  }
}
</script>

<style scoped>
.search-box{
  position: relative;
}
.search-box .search{
  height: 30px;
  padding: 0 10px 0 10px;
  border-width: 1px;
  border-radius: 3px;
  margin-top: 7.5px;
}
.search-box .clear-btn{
  position: absolute;
  top: 0px;
  right: 10px;
  color: #848484;
}
.search-box .search:focus{
  /*border-color: #bdc3 c7;*/
  /*box-shadow: none;*/
  border-color: #5dade2;
  /*outline-color: #5dade2;*/
}
</style>
