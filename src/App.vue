<template>
  <div id="app" class="vw-100">
    <!-- navbar -->

     <navbar class="" style="" />

    <!-- top -->
    <vueToTop type=10 size=50 color="#1D1F29" top=100 style="z-index:9999"></vueToTop>
    <!-- content -->
    <router-view />
    <!-- footer -->
    <ft />
    <!-- bottom -->
    <bot class="" />
  </div>
</template>

<style>

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

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
