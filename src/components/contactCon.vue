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

<style>
.content{
  padding-top: 70px;
}
.contact{
  background-color: #f3f3f4;
  border: 1px solid #E3E3E4;
  padding: 10px;
}
</style>
