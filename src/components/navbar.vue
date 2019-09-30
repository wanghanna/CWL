<template>
  <div class="container-fluid m-0 p-0">
    <vs-navbar
      v-model="activeItem"
      class="nabarx p-1 row m-0"
      color="white"
      text-color="#989BAC"
      active-text-color="rgba(255,255,255,1)"
      index="danger"
      id="navbar-t"
    >
      <div slot="title" class=title>
        <vs-navbar-title>
          <router-link to="/"
            ><img id="logo-t"
              src="../assets/LOGO_Lamp.svg"
              class="mt-1 d-none d-md-inline-flex"/></router-link
          >&nbsp;
          <span style="color:black">ChenWeiLighting</span>
        </vs-navbar-title>
      </div>
      <div id="menu" class="row m-0">
      <vs-navbar-item index="0">
        <router-link to="/idx" style="font-size:12px">Home</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <router-link to="/about" style="font-size:12px">About US</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <router-link to="/light" style="font-size:12px">Products</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="3">
        <router-link to="/knowledge" style="font-size:12px"
          >About Light</router-link
        >
      </vs-navbar-item>
            <vs-navbar-item index="4">
        <router-link to="/0_testPage" style="font-size:12px"
          >測試頁面</router-link
        >
      </vs-navbar-item>
      </div>
    </vs-navbar>
  </div>
</template>
<style scoped>
#title {
  font-family: "Noto Sans TC", sans-serif;
}
#menu{
  font-family: 'Syncopate', sans-serif;
  font-weight:bolder;
  padding:10px;
  border-radius:20px;
  color:#989BAC;
}
#navbar-t{
  font-family: 'Monoton', cursive;
}

#logo-t{
  width:55px;
  height:55px;
  /* box-shadow:inset 0 0 10px rgb(146, 146, 146); */
  padding:5px;
  border-radius:50%;
  transition:5s;
}
#logo-t:hover{

}
a:visited {
  color:"#55586B"
}
a:hover {
  color: #0E0F14;
}
</style>
<script>
export default {
  data: () => ({
    activeItem: 0
  })
};
</script>
