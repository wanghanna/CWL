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
         <vs-navbar-item index="1"><router-link to="/about"><span class="mx-2 buttonOverlay">關於辰偉</span></router-link></vs-navbar-item>
         <!-- light -->
         <vs-navbar-item index="2" class="dropdown">
         <router-link to="/light">
         <span class="mx-2 buttonOverlay dropbtn">光源產品資訊</span></router-link>
           <div class="py-2 position-absolute px-3 dropdown-content">
           <div class="py-1" href="#/light" @click="all" tyle="cursor:pointer"><router-link to="/light">全部光源產品</router-link></div>
           <hr class="styleT" />
           <div class="py-1  " @click="P1" ><router-link to="/light">省電燈管燈泡</router-link></div>
           <div class="py-1  " @click="P2" ><router-link to="/light">HID燈管燈泡</router-link></div>
           <div class="py-1  " @click="P3" ><router-link to="/light">鹵素光源</router-link></div>
           <div class="py-1  " @click="P4" ><router-link to="/light">影視舞台光源</router-link></div>
           <div class="py-1  " @click="P5" ><router-link to="/light">螢光燈管</router-link></div>
           <div class="py-1  " @click="P6" ><router-link to="/light">醫療光源</router-link></div>
           <div class="py-1  " @click="P7" ><router-link to="/light">鎢絲燈泡</router-link></div>
           <div class="py-1  " @click="P8" ><router-link to="/light">LED燈管燈泡</router-link></div>
         </div>        
         
         </vs-navbar-item>
          <!-- light-end -->
         <vs-navbar-item index="3" class="dropdown">
         <router-link to="/component">
         <span class="mx-2 buttonOverlay dropbtn" >燈具產品資訊</span></router-link>
         <div class="py-2 position-absolute px-3 dropdown-content">
           <div class="py-1" href="#/light" @click="all" style="cursor:pointer"><router-link to="/light">全部燈具產品</router-link></div>
           <hr class="styleT" />
           <div class="py-1  " @click="P1" ><router-link to="/light">一般燈具</router-link></div>
           <div class="py-1  " @click="P2" ><router-link to="/light">零配件</router-link></div>
           <div class="py-1  " @click="P3" ><router-link to="/light">LED燈具</router-link></div>
         </div>
         </vs-navbar-item>
         <vs-navbar-item index="3">
           <router-link to="/knowledge">
           <span class="ml-2 mr-5 buttonOverlay">充電站</span>
           </router-link>
         </vs-navbar-item>
      </div>
    </vs-navbar>
    <!-- 小尺寸 -->
    <div class="d-lg-none">
    <div id="small" class="bg-info row m-0 align-items-center">
      <vs-icon id="smalla" icon="menu" size="medium" class="ml-3 mr-auto" @click="cols = !cols"></vs-icon>
      <span style="color:#eaeaea;font-weight:bolder;font-size:20px">辰偉照明</span>
      <router-link to="/"><span class="px-4"><img src="../assets/LOGO_Lamp.svg" style="width:50px;" class="timg"></span></router-link>
    </div>
      <div id="menu" v-if="cols">
        <div class="menu1"><router-link to="/idx"><span @click="cols = !cols">Home</span></router-link></div>
        <hr class="styleT">
         <div class="menu1"><router-link to="/about"><span @click="cols = !cols">關於辰偉</span></router-link></div>
         <hr class="styleT">
         <div class="menu1"><router-link to="/product"><span @click="cols = !cols">產品資訊</span></router-link></div>
         <hr class="styleT">
         <div class="menu1"><router-link to="/knowledge"><span @click="cols = !cols">充電站</span></router-link></div>
         <hr class="styleT">
         <a href="#"><vs-icon id="smalla" icon="eject" size="medium" @click="cols = !cols"></vs-icon></a>
      </div>
      </div>
    <hr class="styleT">
  </div>
</template>
<style scoped>
.dropbtn {
  background-color: transparent;
  color: white;
  padding: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  left:20px;
  background:rgb(255, 255, 255);
  min-width: 200px;
  box-shadow:inset 0px 0px 20px rgba(207, 207, 207, 0.5);
  z-index: 1;
}

.dropdown-content a {
  font-size:2vh;
  color: rgb(151, 151, 151);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition:0.3s;
}

.dropdown-content a:hover {border:1px solid #7474748a;padding:10px;color:#000000}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: transparent;}

#smalla{
transition:0.5s;
color:#000;
cursor:pointer;
}
#smalla:hover{
color:#d1d1d1;
}
#small{
  height:90px;
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
    background:rgba(58, 205, 221, 0.616);
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
}),
 methods: {
    all: function() {
      this.axios
        .get("http://220.128.133.15/s1080214/project/axios.php?do=0")
        .then(response => {
          this.events = response.data;
          // console.log(response.data);
          let a = this.events;
          let b = "";
          for (let i = 0; i < a.length; i++) {
          b +=
            "<tr><td><div class='container row m-0 p-0 flex-column flex-md-row' style='border:0.5px solid #dedede;'><div class='col-md-7'><img src='http://220.128.133.15/s1080214/project/CWL_T/upload/" +
            a[i]["pic"] +
            "'/></div><div class='col-md-5 p-3'><div class='col mb-3 text-right' style='font-size:3vh; color:#000;'>" +
            a[i]["name"] +
            "<hr style='border:0;height: 1.2px;background-image: linear-gradient(to right, transparent, #7C7B79, transparent)'/></div><div class='col text-left'><pre style='font-size:2.2vh;font-family:微軟正黑體;font-weight:bolder;color:#666'>" +
            a[i]["des"] +
            "</pre></div></div></div></td></tr>";
        }
          var c = document.getElementById("a3");
          // console.log(c);
          c.innerHTML = b;
          document.getElementById("list").innerText = "全部光源商品"
        });
    },
    P1: function() {
      this.axios
        .get("http://220.128.133.15/s1080214/project/axios.php?do=1")
        .then(response => {
          this.events = response.data;
          // console.log(response.data);
          let a = this.events;
          let b = "";
          for (let i = 0; i < a.length; i++) {
          b +=
            "<tr><td><div class='container row m-0 p-0 flex-column flex-md-row' style='border:0.5px solid #dedede;'><div class='col-md-7'><img src='http://220.128.133.15/s1080214/project/CWL_T/upload/" +
            a[i]["pic"] +
            "'/></div><div class='col-md-5 p-3'><div class='col mb-3 text-right' style='font-size:3vh; color:#000;'>" +
            a[i]["name"] +
            "<hr style='border:0;height: 1.2px;background-image: linear-gradient(to right, transparent, #7C7B79, transparent)'/></div><div class='col text-left'><pre style='font-size:2.2vh;font-family:微軟正黑體;font-weight:bolder;color:#666'>" +
            a[i]["des"] +
            "</pre></div></div></div></td></tr>";
        }
          var c = document.getElementById("a3");
          // console.log(c);
          c.innerHTML = b;
          var d = document.getElementById("list").innerText = a[0]["type"];
        });
    },
    P2: function() {
      this.axios
        .get("http://220.128.133.15/s1080214/project/axios.php?do=2")
        .then(response => {
          this.events = response.data;
          // console.log(response.data);
          let a = this.events;
          let b = "";
          for (let i = 0; i < a.length; i++) {
                              b +=
            "<tr><td><div class='container row m-0 p-0 flex-column flex-md-row' style='border:0.5px solid #dedede;'><div class='col-md-7'><img src='http://220.128.133.15/s1080214/project/CWL_T/upload/" +
            a[i]["pic"] +
            "'/></div><div class='col-md-5 p-3'><div class='col mb-3 text-right' style='font-size:3vh; color:#000;'>" +
            a[i]["name"] +
            "<hr style='border:0;height: 1.2px;background-image: linear-gradient(to right, transparent, #7C7B79, transparent)'/></div><div class='col text-left'><pre style='font-size:2.2vh;font-family:微軟正黑體;font-weight:bolder;color:#666'>" +
            a[i]["des"] +
            "</pre></div></div></div></td></tr>";
        }
          var c = document.getElementById("a3");
          // console.log(c);
          c.innerHTML = b;
          var d = document.getElementById("list").innerText = a[0]["type"];
        });
    },
    P3: function() {
      this.axios
        .get("http://220.128.133.15/s1080214/project/axios.php?do=3")
        .then(response => {
          this.events = response.data;
          // console.log(response.data);
          let a = this.events;
          let b = "";
          for (let i = 0; i < a.length; i++) {
                               b +=
            "<tr><td><div class='container row m-0 p-0 flex-column flex-md-row' style='border:0.5px solid #dedede;'><div class='col-md-7'><img src='http://220.128.133.15/s1080214/project/CWL_T/upload/" +
            a[i]["pic"] +
            "'/></div><div class='col-md-5 p-3'><div class='col mb-3 text-right' style='font-size:3vh; color:#000;'>" +
            a[i]["name"] +
            "<hr style='border:0;height: 1.2px;background-image: linear-gradient(to right, transparent, #7C7B79, transparent)'/></div><div class='col text-left'><pre style='font-size:2.2vh;font-family:微軟正黑體;font-weight:bolder;color:#666'>" +
            a[i]["des"] +
            "</pre></div></div></div></td></tr>";
        }
          var c = document.getElementById("a3");
          // console.log(c);
          c.innerHTML = b;
var d = document.getElementById("list").innerText = a[0]["type"];
        });
    },
    P4: function() {
      this.axios
        .get("http://220.128.133.15/s1080214/project/axios.php?do=4")
        .then(response => {
          this.events = response.data;
          // console.log(response.data);
          let a = this.events;
          let b = "";
          for (let i = 0; i < a.length; i++) {
                               b +=
            "<tr><td><div class='container row m-0 p-0 flex-column flex-md-row' style='border:0.5px solid #dedede;'><div class='col-md-7'><img src='http://220.128.133.15/s1080214/project/CWL_T/upload/" +
            a[i]["pic"] +
            "'/></div><div class='col-md-5 p-3'><div class='col mb-3 text-right' style='font-size:3vh; color:#000;'>" +
            a[i]["name"] +
            "<hr style='border:0;height: 1.2px;background-image: linear-gradient(to right, transparent, #7C7B79, transparent)'/></div><div class='col text-left'><pre style='font-size:2.2vh;font-family:微軟正黑體;font-weight:bolder;color:#666'>" +
            a[i]["des"] +
            "</pre></div></div></div></td></tr>";
        }
          var c = document.getElementById("a3");
          // console.log(c);
          c.innerHTML = b;
 var d = document.getElementById("list").innerText = a[0]["type"];
        });
    },
    P5: function() {
      this.axios
        .get("http://220.128.133.15/s1080214/project/axios.php?do=5")
        .then(response => {
          this.events = response.data;
          // console.log(response.data);
          let a = this.events;
          let b = "";
          for (let i = 0; i < a.length; i++) {
                              b +=
            "<tr><td><div class='container row m-0 p-0 flex-column flex-md-row' style='border:0.5px solid #dedede;'><div class='col-md-7'><img src='http://220.128.133.15/s1080214/project/CWL_T/upload/" +
            a[i]["pic"] +
            "'/></div><div class='col-md-5 p-3'><div class='col mb-3 text-right' style='font-size:3vh; color:#000;'>" +
            a[i]["name"] +
            "<hr style='border:0;height: 1.2px;background-image: linear-gradient(to right, transparent, #7C7B79, transparent)'/></div><div class='col text-left'><pre style='font-size:2.2vh;font-family:微軟正黑體;font-weight:bolder;color:#666'>" +
            a[i]["des"] +
            "</pre></div></div></div></td></tr>";
        }
          var c = document.getElementById("a3");
          // console.log(c);
          c.innerHTML = b;
var d = document.getElementById("list").innerText = a[0]["type"];
        });
    },
    P6: function() {
      this.axios
        .get("http://220.128.133.15/s1080214/project/axios.php?do=6")
        .then(response => {
          this.events = response.data;
          // console.log(response.data);
          let a = this.events;
          let b = "";
          for (let i = 0; i < a.length; i++) {
                               b +=
            "<tr><td><div class='container row m-0 p-0 flex-column flex-md-row' style='border:0.5px solid #dedede;'><div class='col-md-7'><img src='http://220.128.133.15/s1080214/project/CWL_T/upload/" +
            a[i]["pic"] +
            "'/></div><div class='col-md-5 p-3'><div class='col mb-3 text-right' style='font-size:3vh; color:#000;'>" +
            a[i]["name"] +
            "<hr style='border:0;height: 1.2px;background-image: linear-gradient(to right, transparent, #7C7B79, transparent)'/></div><div class='col text-left'><pre style='font-size:2.2vh;font-family:微軟正黑體;font-weight:bolder;color:#666'>" +
            a[i]["des"] +
            "</pre></div></div></div></td></tr>";
        }
          var c = document.getElementById("a3");
          // console.log(c);
          c.innerHTML = b;
var d = document.getElementById("list").innerText = a[0]["type"];
        });
    },
    P7: function() {
      this.axios
        .get("http://220.128.133.15/s1080214/project/axios.php?do=7")
        .then(response => {
          this.events = response.data;
          // console.log(response.data);
          let a = this.events;
          let b = "";
          for (let i = 0; i < a.length; i++) {
                               b +=
            "<tr><td><div class='container row m-0 p-0 flex-column flex-md-row' style='border:0.5px solid #dedede;'><div class='col-md-7'><img src='http://220.128.133.15/s1080214/project/CWL_T/upload/" +
            a[i]["pic"] +
            "'/></div><div class='col-md-5 p-3'><div class='col mb-3 text-right' style='font-size:3vh; color:#000;'>" +
            a[i]["name"] +
            "<hr style='border:0;height: 1.2px;background-image: linear-gradient(to right, transparent, #7C7B79, transparent)'/></div><div class='col text-left'><pre style='font-size:2.2vh;font-family:微軟正黑體;font-weight:bolder;color:#666'>" +
            a[i]["des"] +
            "</pre></div></div></div></td></tr>";
        }
          var c = document.getElementById("a3");
          // console.log(c);
          c.innerHTML = b;
var d = document.getElementById("list").innerText = a[0]["type"];
        });
    },
    P8: function() {
      this.axios
        .get("http://220.128.133.15/s1080214/project/axios.php?do=8")
        .then(response => {
          this.events = response.data;
          // console.log(response.data);
          let a = this.events;
          let b = "";
          for (let i = 0; i < a.length; i++) {
                                b +=
            "<tr><td><div class='container row m-0 p-0 flex-column flex-md-row' style='border:0.5px solid #dedede;'><div class='col-md-7'><img src='http://220.128.133.15/s1080214/project/CWL_T/upload/" +
            a[i]["pic"] +
            "'/></div><div class='col-md-5 p-3'><div class='col mb-3 text-right' style='font-size:3vh; color:#000;'>" +
            a[i]["name"] +
            "<hr style='border:0;height: 1.2px;background-image: linear-gradient(to right, transparent, #7C7B79, transparent)'/></div><div class='col text-left'><pre style='font-size:2.2vh;font-family:微軟正黑體;font-weight:bolder;color:#666'>" +
            a[i]["des"] +
            "</pre></div></div></div></td></tr>";
        }
          var c = document.getElementById("a3");
          // console.log(c);
          c.innerHTML = b;
var d = document.getElementById("list").innerText = a[0]["type"];
        });
    },
    P9: function() {
      this.axios
        .get("http://220.128.133.15/s1080214/project/axios.php?do=9")
        .then(response => {
          this.events = response.data;
          // console.log(response.data);
          let a = this.events;
          let b = "";
          for (let i = 0; i < a.length; i++) {
                               b +=
            "<tr><td><div class='container row m-0 p-0 flex-column flex-md-row' style='border:0.5px solid #dedede;'><div class='col-md-7'><img src='http://220.128.133.15/s1080214/project/CWL_T/upload/" +
            a[i]["pic"] +
            "'/></div><div class='col-md-5 p-3'><div class='col mb-3 text-right' style='font-size:3vh; color:#000;'>" +
            a[i]["name"] +
            "<hr style='border:0;height: 1.2px;background-image: linear-gradient(to right, transparent, #7C7B79, transparent)'/></div><div class='col text-left'><pre style='font-size:2.2vh;font-family:微軟正黑體;font-weight:bolder;color:#666'>" +
            a[i]["des"] +
            "</pre></div></div></div></td></tr>";
        }
          var c = document.getElementById("a3");
          // console.log(c);
          c.innerHTML = b;
var d = document.getElementById("list").innerText = a[0]["type"];
        });
    },
    P10: function() {
      this.axios
        .get("http://220.128.133.15/s1080214/project/axios.php?do=10")
        .then(response => {
          this.events = response.data;
          // console.log(response.data);
          let a = this.events;
          let b = "";
          for (let i = 0; i < a.length; i++) {
                                b +=
            "<tr><td><div class='container row m-0 p-0 flex-column flex-md-row' style='border:0.5px solid #dedede;'><div class='col-md-7'><img src='http://220.128.133.15/s1080214/project/CWL_T/upload/" +
            a[i]["pic"] +
            "'/></div><div class='col-md-5 p-3'><div class='col mb-3 text-right' style='font-size:3vh; color:#000;'>" +
            a[i]["name"] +
            "<hr style='border:0;height: 1.2px;background-image: linear-gradient(to right, transparent, #7C7B79, transparent)'/></div><div class='col text-left'><pre style='font-size:2.2vh;font-family:微軟正黑體;font-weight:bolder;color:#666'>" +
            a[i]["des"] +
            "</pre></div></div></div></td></tr>";
        }
          var c = document.getElementById("a3");
          // console.log(c);
          c.innerHTML = b;
var d = document.getElementById("list").innerText = a[0]["type"];
        });
    },
    P11: function() {
      this.axios
        .get("http://220.128.133.15/s1080214/project/axios.php?do=11")
        .then(response => {
          this.events = response.data;
          // console.log(response.data);
          let a = this.events;
          let b = "";
          for (let i = 0; i < a.length; i++) {
                                b +=
            "<tr><td><div class='container row m-0 p-0 flex-column flex-md-row' style='border:0.5px solid #dedede;'><div class='col-md-7'><img src='http://220.128.133.15/s1080214/project/CWL_T/upload/" +
            a[i]["pic"] +
            "'/></div><div class='col-md-5 p-3'><div class='col mb-3 text-right' style='font-size:3vh; color:#000;'>" +
            a[i]["name"] +
            "<hr style='border:0;height: 1.2px;background-image: linear-gradient(to right, transparent, #7C7B79, transparent)'/></div><div class='col text-left'><pre style='font-size:2.2vh;font-family:微軟正黑體;font-weight:bolder;color:#666'>" +
            a[i]["des"] +
            "</pre></div></div></div></td></tr>";
        }
          var c = document.getElementById("a3");
          // console.log(c);
          c.innerHTML = b;
var d = document.getElementById("list").innerText = a[0]["type"];
        });
    }
  }
};
</script>
