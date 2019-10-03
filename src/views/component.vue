<template>
  <div id="light" class="about">
<!-- vs-breadcrumb -->
<div class="row m-0 d-none d-lg-flex">
    <div class="col mr-atuo"><h1>零組件商品</h1></div>
    <div class="row m-0">
    <vs-icon icon="fingerprint" size="medium" bg="" class=""></vs-icon>
    <vs-breadcrumb class="font" :items="item" separator="|"></vs-breadcrumb>
    </div>
</div>
<!-- vs-breadcrumb end --> 
<!-- small_nav    -->
<div class="d-lg-none mb-3">
<div class="col row m-0 justify-content-center text-center mb-3">
  <div class="col bg-light border p-2" style="height:50px"><a href="#/light" class="text-dark">光源商品</a></div>
  <div class="col bg-info border p-2" style="height:50px"><a href="#/component" class="text-light">零組件商品</a></div>
</div>
<div class="text-right"><vs-icon icon="wb_incandescent" class="ho" @click="clos = !clos"></vs-icon></div>
<div v-if="clos" class="bg-info">
  <div class="mmenu" @click="clos = !clos">零組件 - 全部商品</div>
  <hr class="hrs"/>
  <div class="mmenu" @click="clos = !clos">123456</div>
  <div class="mmenu" @click="clos = !clos">123456</div>
  <div class="mmenu" @click="clos = !clos">123456</div>
  <div class="mmenu" @click="clos = !clos"><a href="#"><vs-icon icon="eject"></vs-icon></a></div>
</div>
</div>
<!-- small_nav_end -->
    <br><br><br><br><br>
      </div>
</template>
<style scoped>
hr.hrs{
  border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.75), rgba(0,0,0,0));
}
.mmenu,.mmenu a{
  color:rgb(67, 75, 97);
  height:50px;
  padding:20px 10px;
  font-size:15px;
  line-height:15px;
  font-family: "Noto Sans TC", sans-serif;
  text-align:center;
  cursor:crosshair;
}
.mmenu:hover,.mmenu a:hover{
  background:linear-gradient(to right,transparent,#fff,transparent);
  color:#000;
}

.ho{
  transition:1s;
   color: rgb(28, 29, 32);
   animation-name:ho;
   animation-fill-mode:forwards;
   animation-duration:1s;
   animation-timing-function:cubic-bezier(.02,1.95,.36,-0.13);
   
}
@keyframes ho{
  from{
transform:scale(0)
  }
  to{
transform:scale(2)
  }
}
.ho:hover{
filter:invert(1);
}
  a{
    text-decoration:none;
  }
#light {
  font-family: "Noto Sans TC", sans-serif;
}
#ltitle {
  border:1px solid #000;
  color: #ebebeb;
  padding: 10px;
  text-align: center;
  position:relative;
}
#ltitle::before{
  content:'';
  position:absolute;
  height:100%;
  width:100%;
  background: #7d7c85;
  top:-10px;
  left:10px;
  z-index:-1;
}
#list{
  border:1px solid #000;
  color: #2D354B;
  font-weight:bolder;
  padding: 10px;
  text-align: center;
  position:relative;
  white-space:nowrap;
  width:50px;
  height:50px;
}
#list::before{
content:"";
width:100%;
height:100%;
position:absolute;
top:-15px;
left:-15px;
background:#3ACEDD
;
z-index:-1
}
#navbar{
box-shadow:0 0 0 #fff;
}
.font{
    font-weight:bolder;
    font-family: "Noto Sans TC", sans-serif;
}
h1{
    font-family: "Noto Sans TC", sans-serif;
}
</style>
<script>

export default {
  data(){
      let btns = "m-1";
    let btnc = "#268893";
    let btnt = "flat";
 let item = [
      { title: "Product", url: "#/product",disabled: true },
      { title: "光源商品", url: "#/light"},
      { title: "零組件商品", url: "#/component",disabled: true},
    ];
    let clos = false;
    return{
      btns,
      btnc,
      btnt,
      item,
      clos
    }
  },
};
</script>