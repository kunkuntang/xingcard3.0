<template>
  <div>
    <div class="col-xs-2"><span class="iconfont icon-category" @click="showBar"></span></div>
    <div class="col-xs-8">{{pageTitle}}</div>
    <div class="col-xs-2"><span class="iconfont icon-search" @click="searchClick"></span></div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'pageTitle'
    ])
  },
  methods: {
    searchClick () {
      this.$emit('searchClick')
    },
    ...mapMutations({
      showBar: 'toggleBar'
    })
  }
}
</script>
