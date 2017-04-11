<template>
  <transition name="toast-fade">
    <div class="text-danger toast text-center" v-show="showToast">
      <span>{{text}}</span>
    </div>
  </transition>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  props: ['isShow', 'text'],
  computed: {
    ...mapState({
      showToast: 'isShowToast'
    })
  },
  methods: {
    ...mapMutations({
      hideToast: 'hideToast'
    })
  },
  beforeUpdate () {
    setTimeout(() => {
      this.hideToast()
    }, 1000)
  }
}
</script>

<style scoped>
.toast{
  position: absolute;
  bottom: 40px;
  width: 60%;
  left: 50%;
  margin-left: -30%;
  font-size: 14px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  padding: 5px 10px;
}

.toast-fade-leave-active{
  transition: all .5s ease;
  opacity: 0;
}

.toast-fade-enter,
.toast-fade-leave{
  opacity: 1;
}
</style>
