<template>
  <div id="navbart" class="m-2 mx-3" >   
<vs-navbar type="shadow" class="nabarx">
      <div slot="title">
        <vs-navbar-title>
          <router-link to="/"><span class="mr-3"><img src="../assets/LOGO_Lamp.svg" style="width:50px"></span></router-link>
        <span>辰偉照明</span>
        </vs-navbar-title>
      </div>
      <vs-navbar-item index="0">
        <a href="#/idx" class="buttonOverlay">Home</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
       <a href="#/idx" class="buttonOverlay">Company</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
       <a href="#/idx" class="buttonOverlay">Product</a>
      </vs-navbar-item>
            <vs-navbar-item index="3">
       <a href="#/idx" class="buttonOverlay">AboutLight</a>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>
<style scoped>
  #navbart{
    /* box-shadow:inset 0 0px 5px #EDEAE5; */
    height:25px;
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
