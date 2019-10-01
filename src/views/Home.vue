<template>
  <div id="front" class="vh-100 vw-100 d-flex justify-content-center">


    <router-link to="/idx"></router-link>
    <div id="imgb" class="d-xl-flex d-none"><img src="../assets/LOGO_Lamp.svg" alt=""></div>
    <div id="imgt" class="d-xl-none d-flex"><img src="../assets/LOGO_Lamp.svg" alt=""></div>
    <div id="title">
    <div id="cwlc" class="row flex-column flex-md-row">
      <h1>CHEN WEI</h1>
      <h1>LIGHTING</h1>
    </div>
    </div>
  </div>
</template>
<style scoped>
#imgb img{
  animation-name:imgb;
  animation-duration:3s;
  animation-fill-mode:forwards;
  animation-timing-function:cubic-bezier(0.215, 0.610, 0.355, 1);
  width:100vh;
  position:absolute;
  top:18%;
}
@keyframes imgb{
  from{
    right:100%;
    transform:rotate(0);
    opacity:0;
  }
  to{
    right:-15vw;
    transform:rotate(360deg);
    opacity:0.6;
  }
}
#imgt img{
  width:100vh;
  position:absolute;
  left:35%;
  top:18%;
  opacity:0.2
}

#title{
  position:absolute;
  top:30%;
  left:5%;
  animation-name:title;
  animation-duration:3s;
  animation-fill-mode:forwards;
  /* animation-timing-function:cubic-bezier(0,1.79,.28,-0.04); */
}
#cwlc::before{
  content:"";
  position:absolute;
  top:5vh;
  left:-5%;
  background:#3ACEDD;
  height:10vh;
  width:10vh;
  z-index:-1;
}
@keyframes title{
  from{
        /* left:100%; */
    opacity:0;
  }
  to{
    /* left:5%; */
    opacity:1;
  }
}
#cwlc::after{
  content:"";
  position:absolute;
  top:-2vh;
  left:95%;
  background:rgba(58, 205, 221, 0.288);
  height:10vh;
  width:10vh;
  z-index:0;
}
#cwlc h1{
  z-index:2;
  color:#33322D;
  font-size:8vh;
  font-weight:bolder;
  font-family: 'Syncopate';
}


#front{
  position:relative;
  background:#32312D;
     animation-name:front;
    animation-duration:3s;
    animation-timing-function:ease-in-out;
    animation-fill-mode:forwards;
    overflow:hidden;
}
@keyframes front{
  from{
      background:#32312D;

  }
  to{
    background:#ebebeb;

  }
}


</style>
