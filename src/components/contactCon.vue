<template>
  <div class="content">
    <!--<div class="title m-b-md">{{data.name}}</div>-->
    <div class="m-l-sm m-r-sm">
      <div class="contact m-b-md" v-for="contact in data.members">
        <div class="col-xs-4 m-t-sm">
          <img src="/static/img/icon.gif" alt="" class="img-circle">
        </div>
        <div class="col-xs-8 text-left">
          <span class="f-s-22">{{contact.username}}</span>
          <div class="f-s-14">短号：{{contact.tel}}</div>
          <div class="f-s-14">长号：{{contact.phone}}</div>
        </div>
        <div class="operate col-xs-12 m-t-sm">
          <div class="btn-group row">
            <button type="button" class="col-xs-4 btn btn-sm btn-white palette-belize-hole"><a href="tel:contact.phone"><span class="fui-video"></span></a></button>
            <button type="button" class="col-xs-4 btn btn-sm btn-white palette-silver"><a href="tel:contact.tel"><span class="fui-mic"></span></a></button>
            <button type="button" class="col-xs-4 btn btn-sm btn-white palette-concrete"><a href="sms:contact.phone"><span class="fui-chat"></span></a></button>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
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
