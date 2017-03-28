<template>
  <div class="html">
    <transition name="slide-right">
      <side-bar class="side-bar" :data="data.departments" :idx="curIdx" v-on:selectApart="select" v-show="showBar"></side-bar>
    </transition>
    <div>
      <title-con class="title-con">
        <transition name="fade">
          <search-box class="title" v-if="isSearch" v-on:doSearch="doSearch" v-on:goBack="cancelSearch"></search-box>
          <page-title class="title" :title="title" v-else="isSearch" v-on:searchClick="searchClick" v-on:showBar="showSideBar"></page-title>
        </transition>
      </title-con>
      <contact-con :data="data.departments[curIdx]"></contact-con>
    </div>
  </div>
</template>

<script>
import titleCon from '@/components/titleCon'
import pageTitle from '@/components/pageTitle'
import searchBox from '@/components/searchBox'
import sideBar from '@/components/sideBar'
import contactCon from '@/components/contactCon'
import data from '@/mock/data'
export default {
  mounted () {
    console.log(data)
  },
  data () {
    return {
      data: data,
      title: data.department_belong,
      showBar: false,
      isSearch: false,
      curIdx: 0
    }
  },
  watch: {
    showBar (value) {
      console.log(value)
      /* global $ */
      // if (value) {
      //   $('html').css('overflow-y', 'hidden')
      // } else {
      //   $('html').css('overflow-y', 'auto')
      // }
      if (value) {
        $('body').on('touchmove', function (event) {
          event.preventDefault
        }, false)
      } else {
        $('body').off('touchmove')
      }
    }
  },
  components: {
    titleCon,
    pageTitle,
    searchBox,
    sideBar,
    contactCon
  },
  methods: {
    select (idx) {
      console.log(typeof idx)
      console.log(idx)
      this.showBar = false
      if (idx === -1) {
        return
      }
      this.title = data.departments[idx].name
      this.curIdx = idx
    },
    searchClick () {
      this.isSearch = true
      console.log(this.isSearch)
    },
    showSideBar () {
      this.showBar = true
    },
    doSearch (keyword) {
      console.log(keyword)
    },
    cancelSearch () {
      this.isSearch = false
    }
  }
}
</script>

<style scoped>
.notScroll{
  overflow: hidden;
}

.side-bar{
  transform: translate3d(0, 0, 0)
}

.title-con{
  position: relative;
  width: 100%;
}

.title{
  position: absolute;
  width: 100%;
  top: 0;
}

.slide-right-enter-active,
.slide-right-leave-active{
  transition: transform .5s
}

.slide-right-enter,
.slide-right-leave-to{
  transform: translate3d(-100%, 0, 0)
}

.fade-enter-active,
.fade-leave-active{
  transition: opacity .3s
}

.fade-enter,
.fade-leave-to{
  opacity: 0
}
</style>
