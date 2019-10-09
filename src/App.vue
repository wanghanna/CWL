<template>
  <div id="app" class="vw-100 d-flex flex-column align-items-center">
    <!-- navbar -->
    <navbar class="sticky-top" style="" />
    <!-- top -->
    <a href="#" class="d-none d-lg-flex"><div id="topTo" class="fixed-bottom"><vs-icon icon="arrow_upward"></vs-icon></div></a>
    <!-- <vueToTop class="d-none" type=4 size=50 color="#1D1F29" top=100 bottom="5" right="10" style="z-index:9999"></vueToTop> -->
    <!-- content -->
    <router-view style="width:90%"/>
    <!-- footer -->
    <ft class="d-none d-lg-flex"/>
    <!-- bottom -->
    <bot />
  </div>
</template>

<style secoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#topTo{
  width:50px;
  height:50px;
  border-radius:50%;
  left:95%;
  bottom:30px;
  border:1px solid #b6b6b6b2;
  text-align:center;
  line-height:60px;
  color:#fff;
  background:rgba(124, 123, 121, 0.397);
  transition:0.5s;
}
#topTo:hover{
  transform:scale(1.1);
  background:white;
  color:black;
}
table {
  width: 100%;
  margin-top: 50px;
}
table td {
  /* border-bottom: 1px solid rgb(165, 165, 165); */
  /* padding-top: 50px; */
  padding-bottom: 30px;
  text-align: center;
}

table img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>
<script>
import Vue from "vue";
// plugin
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
// components
import navbar from "@/components/navbar.vue";
import ft from "@/components/footer.vue";
import bot from "@/components/bottom.vue";

export default {
  components: {
    navbar,
    ft,
    bot
  }
};
</script>
