<template>
  <div id="app" class="container-fluid m-0 p-0" style="background:#172A3B">
    <!-- navbar -->
    <!-- <navbar class="fixed-top"/> -->
    <!-- top -->
    <vueToTop type=10 size=50 color="#207E89" top=100 style="z-index:9999"></vueToTop>
    <!-- content -->
    <router-view />
    <!-- footer -->
    <ft />
    <!-- bottom -->
    <bot class="fixed-bottom" />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
