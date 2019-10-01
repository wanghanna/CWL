<template>
  <div id="navbart" class="my-3" >
    <div class=" row m-0">
      <div class="col mr-auto mx-5">
        <router-link to="/"><span class="mr-3"><img src="../assets/LOGO_Lamp.svg" style="width:50px"></span></router-link>
        <span>辰偉照明</span></div>
      <div id="menu" class="d-none d-md-flex">
        <router-link to="/idx"><span class="mx-2 buttonOverlay">Home</span></router-link>
        <router-link to="/about"><span class="mx-2 buttonOverlay">Company</span></router-link>
        <router-link to="/light"><span class="mx-2 buttonOverlay">Product</span></router-link>
        <router-link to="/knowledge"><span class="ml-2 mr-5 buttonOverlay">About light</span></router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
  #navbart{
    box-shadow:inset 0 0px 5px #EDEAE5;
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
