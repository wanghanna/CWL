<template>
  <div id="app" class="container-fluid m-0 p-0 ">
    <!-- navbar -->
    <navbar class="sticky-top d-lg-none"/>
    <!-- top -->
    <vueToTop type=10 size=50 color="#000" top=100 style="z-index:9999"></vueToTop>
    <!-- content -->
    <div class="row m-0 nowrap mt-lg-3">
    <div id="menu" style="box-shadow:0 0 5px #B8C6C6;background:#fff;text-align:start;" class="row flex-column d-none d-lg-inline-block p-3 ml-3">
        <router-link to="/idx" style="font-size:12px;color:black" class="m-5"><div style="white-space:nowrap"><eva-icon name="home" fill="#8892B0"></eva-icon><span class="pl-3">Home</span></div></router-link>
        <router-link to="/about" style="font-size:12px;color:black" class="m-5"><div style="white-space:nowrap"><eva-icon name="briefcase" fill="#8892B0"></eva-icon><span class="pl-3">About US</span></div></router-link>
        <router-link to="/light" style="font-size:12px;color:black" class="m-5"><div style="white-space:nowrap"><eva-icon name="keypad" fill="#8892B0"></eva-icon><span class="pl-3">Product</span></div></router-link>
        <router-link to="/knowledge" style="font-size:12px;color:black" class="m-5"><div style="white-space:nowrap"><eva-icon name="bulb" fill="#8892B0"></eva-icon><span class="pl-3">About Light</span></div></router-link>
    




    </div>
     <router-view style="border-radius:20px 0 0 0;box-shadow:0 0 20px #B8C6C6;" class="col"/>   
    </div>
 
    <!-- footer -->
    <ft class="ml-3"/>
    <!-- bottom -->
    <bot class="fixed-bottom ml-3" />
  </div>
</template>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#menu{
  width:70px;
  transition:1s;
  border-radius:50px 0 0 0;
}
#menu:hover{
width:200px;
}
#menu a{
text-decoration:none;
}
#menu a span{
text-decoration:none;
transform:rotate(0);
transition:0.5s;
color:#8892B0;
position:relative;
}
#menu a span:hover{
  font-size:1rem;
color:black;
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
