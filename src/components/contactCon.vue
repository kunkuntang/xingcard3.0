<template>
  <div class="content">
    <!--<div class="title m-b-md">{{data.name}}</div>-->
    <div class="m-l-sm m-r-sm">
      <div class="contact m-b-md" v-for="(contact, index) in contactList" :key="index">
        <div class="col-xs-4 m-t-sm">
          <img src="../../static/img/icon.png" alt="" class="contact-img img-circle">
        </div>
        <div class="col-xs-8 text-left">
          <span class="f-s-22">{{contact.username}}</span>
          <div class="f-s-14">短号：{{contact.tel}}</div>
          <div class="f-s-14">长号：{{contact.phone}}</div>
        </div>
        <div class="operate col-xs-12 m-t-sm">
          <div class="btn-group row">
            <button type="button" class="col-xs-4 btn btn-sm btn-white palette-belize-hole"><a :href="['tel:' + contact.phone]"><span class="iconfont icon-phone"></span></a></button>
            <button type="button" class="col-xs-4 btn btn-sm btn-white palette-emerald"><a :href="['tel:' + contact.tel]"><span class="iconfont">&#xe604;</span></a></button>
            <button type="button" class="col-xs-4 btn btn-sm btn-white palette-orange"><a :href="['sms:' + contact.phone]"><span class="iconfont">&#xe676;</span></a></button>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      contactList: 'contactList'
    })
  }
}
</script>

<style scoped>
.content{
  padding-top: 70px;
}
.contact{
  background-color: #f3f3f4;
  border: 1px solid #E3E3E4;
  padding: 10px;
}

.contact .contact-img{
  width: 70px;
  height: 70px;
}

.operate a{
  color: #ffffff;
  display: block;
}
.btn-group{
  display: block
}
.btn-group .btn:active{
  box-shadow: inset 0 3px 5px rgba(0,0,0,.125)
}
.btn-group .btn:last-child{
  border-top-right-radius: 4px !important;
  border-bottom-right-radius: 4px;
}

</style>
