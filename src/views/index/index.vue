<template>
  <div class="html">
    <side-bar :data="data.departments" :idx="curIdx" v-on:selectApart="select" v-if="showBar"></side-bar>
    <div>
      <title-con>
        <search-box v-if="isSearch" v-on:doSearch="doSearch" v-on:goBack="cancelSearch"></search-box>
        <page-title :title="title" v-else="isSearch" v-on:searchClick="searchClick" v-on:showBar="showSideBar"></page-title>
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
      if (value) {
        $('html').css('overflow-y', 'hidden')
      } else {
        $('html').css('overflow-y', 'auto')
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
      console.log(idx)
      this.title = data.departments[idx].name
      this.curIdx = idx
      this.showBar = false
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

<style>
.notScroll{
  overflow: hidden;
}
</style>
