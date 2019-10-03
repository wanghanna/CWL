<template>
  <div id="navbart" class="container-fluid m-0 p-0" >
    <!-- 大尺寸 -->
    <vs-navbar class="nabarx d-none d-lg-flex pt-3" :style="navbarStyle">
      <div slot="title">
      <vs-navbar-title :class="titleClass">
        <router-link to="/"><span><img src="../assets/LOGO_Lamp.svg" style="width:50px" class="mx-3 timg" title="辰偉照明" alt="ChenWeiLighting"></span></router-link>
        <span>辰偉照明</span></vs-navbar-title>
        </div>
      <div id="menu" class="row m-0">
        <vs-navbar-item index="0"><router-link to="/idx"><span class="mx-2 buttonOverlay">Home</span></router-link></vs-navbar-item>
         <vs-navbar-item index="1"><router-link to="/about"><span class="mx-2 buttonOverlay">Company</span></router-link></vs-navbar-item>
         <vs-navbar-item index="2"><router-link to="/product"><span class="mx-2 buttonOverlay">Product</span></router-link></vs-navbar-item>
         <vs-navbar-item index="3"><router-link to="/knowledge"><span class="ml-2 mr-5 buttonOverlay">About light</span></router-link></vs-navbar-item>
      </div>
    </vs-navbar>
    <!-- 小尺寸 -->
        <vs-navbar class="nabarx d-lg-none bg-secondary" v-model="activeItem" :type="navbarType" :style="navbarStyle">
      <div slot="title" class="my-2">
      <vs-navbar-title :class="titleClass">
        <span class="mr-2" style="color:#3ACEDD;font-weight:bolder;font-size:3vh">辰偉照明</span>
        <router-link to="/"><span><img src="../assets/LOGO_Lamp.svg" style="width:50px;" class="timg"></span></router-link>
        </vs-navbar-title>
        </div>
      <div id="menu" class="row m-0">
        <vs-navbar-item index="0"><router-link to="/idx"><span>Home</span></router-link></vs-navbar-item>
         <vs-navbar-item index="1"><router-link to="/about"><span>Company</span></router-link></vs-navbar-item>
         <vs-navbar-item index="2"><router-link to="/product"><span>Product</span></router-link></vs-navbar-item>
         <vs-navbar-item index="3"><router-link to="/knowledge"><span>About light</span></router-link></vs-navbar-item>
      </div>
    </vs-navbar>
    <hr class="styleT">
  </div>
</template>
<style scoped>
.timg{
  transition:0.5s;
}
.timg:hover{
  transform:scale(1.2);
  filter:invert(1)
}
hr.styleT {
border: 0;
    height: 1.2px;
    background-image: linear-gradient(to right, transparent, #7C7B79, transparent);
}
  #navbart{
    font-family: "Noto Sans TC", sans-serif;
    font-weight:bolder;
  }
  a{
    text-decoration:none;
  }
  /* menu */
  .buttonOverlay {
    padding: 10px 25px;
    position: relative;
    color: #fff;
}

.buttonOverlay::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 5px;
    right: 5px;
    background-color: #949EAA;
    z-index: -1;
    transition: transform .2s ease-in-out;
}

.buttonOverlay::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 1px solid #474E51;
}

.buttonOverlay:hover::before {
    transform: translate(6px, -4px);
    background:rgb(58, 205, 221);
}

</style>
<script>
export default {
 data:()=>({
  activeItem: 0,
  navbarType: "shadow",
  navbarStyle: "background:#fff;box-shadow:0 0 0 #fff",
  titleClass: "row m-0 px-4 align-items-center",
})
};
</script>
