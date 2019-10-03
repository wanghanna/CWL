<template>
  <div id="navbart" class="container-fluid m-0 p-0" >
    <!-- 大尺寸 -->
    <vs-navbar class="nabarx d-none d-lg-flex pt-3" :style="navbarStyle">
      <div slot="title">
      <vs-navbar-title :class="titleClass">
        <router-link to="/"><span><img src="../assets/LOGO_Lamp.svg" style="width:50px" class="mx-3 timg" title="辰偉照明" alt="ChenWeiLighting"></span></router-link>
        <span>辰偉照明</span></vs-navbar-title>
        </div>
      <div class="row m-0">
        <vs-navbar-item index="0"><router-link to="/idx"><span class="mx-2 buttonOverlay">Home</span></router-link></vs-navbar-item>
         <vs-navbar-item index="1"><router-link to="/about"><span class="mx-2 buttonOverlay">Company</span></router-link></vs-navbar-item>
         <vs-navbar-item index="2"><router-link to="/product"><span class="mx-2 buttonOverlay">Product</span></router-link></vs-navbar-item>
         <vs-navbar-item index="3"><router-link to="/knowledge"><span class="ml-2 mr-5 buttonOverlay">About light</span></router-link></vs-navbar-item>
      </div>
    </vs-navbar>
    <!-- 小尺寸 -->
    <div class="d-lg-none">
    <div id="small" class="bg-info row m-0 align-items-center">
      <vs-icon id="smalla" icon="menu" size="medium" class="ml-3 mr-auto" @click="cols = !cols"></vs-icon>
      <span style="color:#eaeaea;font-weight:bolder;font-size:30px">辰偉照明</span>
      <router-link to="/"><span class="px-4"><img src="../assets/LOGO_Lamp.svg" style="width:50px;" class="timg"></span></router-link>
    </div>
      <div id="menu" v-if="cols">
        <div class="menu1"><router-link to="/idx"><span @click="cols = !cols">Home</span></router-link></div>
        <hr class="styleT">
         <div class="menu1"><router-link to="/about"><span @click="cols = !cols">Company</span></router-link></div>
         <hr class="styleT">
         <div class="menu1"><router-link to="/product"><span @click="cols = !cols">Product</span></router-link></div>
         <hr class="styleT">
         <div class="menu1"><router-link to="/knowledge"><span @click="cols = !cols">About light</span></router-link></div>
         <hr class="styleT">
         <vs-icon id="smalla" icon="eject" size="medium" @click="cols = !cols"></vs-icon>
      </div>
      </div>
    <hr class="styleT">
  </div>
</template>
<style scoped>
#smalla{
transition:0.5s;
border-radius:50%;
color:#000;
cursor:pointer;
}
#smalla:hover{
color:#d1d1d1;
}
#small{
  height:100px;
  background:linear-gradient(to bottom, #17A2B8 50%,#6C757D 50%);
}
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
  #menu{
    padding:10px 20px;
    background:#ebebeb;
    text-align:center;
  }
  #menu a{
   line-height:35px;
   color:black; 
   transition:0.5s;
  }
  #menu a:hover{
    color:#fff;
  }
.menu1{
  transition:0.5s;
}
.menu1:hover{
  background:linear-gradient(to right, transparent,#3acddd,transparent);
}
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
  cols: false,
})
};
</script>
