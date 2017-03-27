<template>
  <div>
    <div class="col-xs-2"><span class="fui-list" @click="showBar"></span></div>
    <div class="col-xs-8">{{title}}</div>
    <div class="col-xs-2"><span class="fui-search" @click="searchClick"></span></div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    searchClick () {
      console.log('click')
      this.$emit('searchClick')
    },
    showBar () {
      this.$emit('showBar')
    }
  }
}
</script>
