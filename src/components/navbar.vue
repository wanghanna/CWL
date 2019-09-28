<template>
  <div>
    <vs-navbar
      v-model="activeItem"
      class="nabarx px-3"
      color="rgba(37, 36, 57, 0.8)"
      text-color="rgba(255,255,255,.6)"
      active-text-color="rgba(255,255,255,1)"
      index="danger"
    >
      <div slot="title">
        <vs-navbar-title id="logo">
          <router-link to="/"
            ><img
              src="../assets/LOGO_Lamp.svg"
              width="50vh"
              class="mt-1"/></router-link
          >&nbsp;
          <span style="color:#ffffff" class="d-none d-md-inline-flex">ChenWeiLighting</span>
        </vs-navbar-title>
      </div>
      <vs-navbar-item index="0">
        <router-link to="/idx" style="font-size:15px">首頁</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <router-link to="/about" style="font-size:15px">關於辰偉</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <router-link to="/light" style="font-size:15px">產品介紹</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="3">
        <router-link to="/knowledge" style="font-size:15px"
          >了解光源</router-link
        >
      </vs-navbar-item>
            <vs-navbar-item index="4">
        <router-link to="/0_testPage" style="font-size:15px"
          >測試頁面</router-link
        >
      </vs-navbar-item>
      
    </vs-navbar>
  </div>
</template>
<style scoped>
* {
  font-family: "Noto Sans TC", sans-serif;
}
a:visited {
  color: #ebebeb;
}
a:hover {
  color: #ffffff;
}
</style>
<script>
export default {
  data: () => ({
    activeItem: 0
  })
};
</script>
