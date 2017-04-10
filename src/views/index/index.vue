<template>
  <div class="html">
    <transition name="slide-right">
      <side-bar v-show="showBar"></side-bar>
    </transition>
    <div>
      <title-con class="title-con">
        <transition name="fade">
          <search-box class="title" v-if="isSearch" v-on:doSearch="doSearch" v-on:goBack="cancelSearch"></search-box>
          <page-title class="title" v-else="isSearch" v-on:searchClick="searchClick" v-on:showBar="showSideBar"></page-title>
        </transition>
      </title-con>
      <contact-con></contact-con>
    </div>
  </div>
</template>

<script>
import titleCon from '@/components/titleCon'
import pageTitle from '@/components/pageTitle'
import searchBox from '@/components/searchBox'
import sideBar from '@/components/sideBar'
import contactCon from '@/components/contactCon'
import axios from 'axios'

import { mapMutations, mapGetters, mapState } from 'vuex'

export default {
  beforeRouteEnter (to, from, next) {
    axios.post('http://xingkongus.duapp.com/index.php/User/loginAPP', {
      key: 82015,
      name: 'xingkongus'
    }).then(function (response) {
      console.log(response)
    })
    next()
  },
  created () {
    // console.log(data)
    // this.updateContactList(data)
  },
  mounted () {
  },
  data () {
    return {
      allData: this.$store.state.allData,
      isSearch: false,
      curIdx: 0
    }
  },
  computed: {
    ...mapState({
      showBar: 'isShowBar'
    })
  },
  watch: {
    showBar (value) {
      /* global $ */
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
      this.showBar = false
      if (idx === -1) {
        return
      }
      this.title = this.data.departments[idx].name
      this.curIdx = idx
    },
    searchClick () {
      this.isSearch = true
      console.log(this.isSearch)
    },
    doSearch (keyword) {
      console.log(keyword)
    },
    cancelSearch () {
      this.isSearch = false
    },
    ...mapMutations({
      showSideBar: 'toggleBar',
      updateContactList: 'updateContactList'
    })
  }
}
</script>

<style scoped>
.notScroll{
  overflow: hidden;
}

.side-bar{
  transform: translate3d(0, 0, 0);
}

.title-con{
  position: relative;
  width: 100%;
  height: 47px;
  background-color: #ffffff;
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
