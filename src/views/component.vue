<template>
  <div id="about" class="about container-fluid">
    <div class="sticky-top">
      <vs-breadcrumb :items="item" separator="chevron_right"></vs-breadcrumb>
      <div>
        <!-- component navbar -->
        <vs-navbar v-model="activeItem" class="nabarx pt-2 row m-0" color="#ffffff">
          <div slot="title" class="col">
            <vs-navbar-title><vs-button line-position="bottom" line-origin="left" color="#268893" type="border"><router-link to="/light" style="color:#268893;text-decoration:none">光源產品</router-link></vs-button>&nbsp;&nbsp;•&nbsp;&nbsp;<vs-button line-position="bottom" line-origin="left" color="#268893" type="filled">零組件產品</vs-button></vs-navbar-title>
          </div>
          <vs-navbar-item index="0">
            <vs-button
              :class="btns"
              :color="btnc" :type="btnt"
              v-on:click="all"
              >零組件 - 全部產品</vs-button
            >
          </vs-navbar-item>
          </vs-navbar>
      </div>
      </div>

  </div>
</template>
<script>

export default {
  data(){
      let btns = "m-1";
    let btnc = "#268893";
    let btnt = "flat";
    let item = [
      { title: "首頁", url: "#/idx"},
      { title: "產品介紹", url: "#/light", disabled: true },
      { title: "零組件產品", url: "#/component", disabled: true },
    ];
    return{
      btns,
      btnc,
      btnt,
      item
    }
  }
};
</script>