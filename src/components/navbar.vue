<template>
  <div id="navbart" class="container-fluid m-0 p-0" >
    <vs-navbar class="nabarx" style="background:#fff">
      <div slot="title">
      <vs-navbar-title class="row m-0 px-5 align-items-center">
        <router-link to="/"><span><img src="../assets/LOGO_Lamp.svg" style="width:50px" class="d-none d-md-flex mx-3"></span></router-link>
        <span>辰偉照明</span></vs-navbar-title>
        </div>
      <div id="menu" class="row m-0">
        <vs-navbar-item index="0"><router-link to="/idx"><span class="mx-2 buttonOverlay">Home</span></router-link></vs-navbar-item>
         <vs-navbar-item index="1"><router-link to="/about"><span class="mx-2 buttonOverlay">Company</span></router-link></vs-navbar-item>
         <vs-navbar-item index="2"><router-link to="/light"><span class="mx-2 buttonOverlay">Product</span></router-link></vs-navbar-item>
         <vs-navbar-item index="3"><router-link to="/knowledge"><span class="ml-2 mr-5 buttonOverlay">About light</span></router-link></vs-navbar-item>
      </div>
    </vs-navbar>
  </div>
</template>
<style scoped>
  #navbart{
    height:50px;
    line-height:50px;
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

};
</script>
