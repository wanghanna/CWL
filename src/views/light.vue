<template>
  <div id="light" class="about">
    <div>
<div class="d-lg-none mb-3">
<div class="col row m-0 justify-content-center text-center mb-3">
  <div class="col bg-info border p-2 text-light" style="height:50px">光源商品</div>
  <div class="col bg-light border p-2" style="height:50px"><a href="#/component" class="text-dark">零組件商品</a></div>
</div>
      <div><vs-icon icon="wb_incandescent" class="ho" @click="cols = !cols"></vs-icon></div>
      <br>
      <div v-if="cols" class="bg-info">
      <div class="mmenu" v-on:click="all" @click="cols = !cols">光源 - 全部商品<hr class="hrs"/></div>
      <div class="mmenu" v-on:click="P1" @click="cols = !cols">LED燈管燈泡</div>
      <div class="mmenu" v-on:click="P2" @click="cols = !cols">LED櫥櫃嵌燈</div>
      <div class="mmenu" v-on:click="P3" @click="cols = !cols">LED投光燈具</div>
      <div class="mmenu" v-on:click="P4" @click="cols = !cols">省電燈管燈泡</div>
      <div class="mmenu" v-on:click="P5" @click="cols = !cols">鹵素燈管燈泡</div>
      <div class="mmenu" v-on:click="P6" @click="cols = !cols">鎢絲燈管燈泡</div>
      <div class="mmenu " v-on:click="P7" @click="cols = !cols">螢光燈管系列</div>
      <div class="mmenu" v-on:click="P8" @click="cols = !cols">HID燈泡燈管</div>
      <div class="mmenu" v-on:click="P9" @click="cols = !cols">醫療系列</div>
      <div class="mmenu" v-on:click="P10" @click="cols = !cols">影視舞台專用</div>
      <div class="mmenu" v-on:click="P11" @click="cols = !cols">一般燈具</div>
      <div class="mmenu"><a href="#"><vs-icon icon="eject" @click="cols = !cols" href="#"></vs-icon></a></div>
      </div>
  </div>
</div>
    <!-- <vs-icon icon="highlight" size="medium"></vs-icon> -->
    <br><br>
    <h3 id="list"></h3>
    <div class="container-fluid row">
      <div class="col-md-9 col">
        <table>
          <thead>
            <!-- v-for使用 -->
            <!-- <tr>
          <th>商品類別</th>
          <th>樣式</th>
          <th>名稱</th>
          <th>說明</th>
          </tr> -->
          </thead>
          <tbody id="a3">
            <!-- v-for使用 -->
            <!-- <tr v-for="(item, index) in events" :key="index">
          <td>{{ item.item }}</td>
          <td>{{ item.pic }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.des }}</td>
        </tr> -->
          </tbody>
        </table>
      </div>
      <div class="col-md-3 d-none d-md-block row m-0 flex-column">
        <helloworld1 />
        <homenews />
        <mincontact />
      </div>
    </div>
        <br><br><br><br><br>
  </div>
</template>
<style scoped>
hr.hrs{
  border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.75), rgba(0,0,0,0));
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
  background:linear-gradient(to right,transparent,rgb(255, 255, 255),transparent);
  color:#000;
}

.ho{
  transition:1s;
   color: rgb(28, 29, 32);
   animation-name:ho;
   animation-fill-mode:forwards;
   animation-duration:1s;
   animation-timing-function:cubic-bezier(.02,1.95,.36,-0.13);
   cursor:pointer;
   
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
.font{
    font-weight:bolder;
    font-family: "Noto Sans TC", sans-serif;
}
h1{
    font-family: "Noto Sans TC", sans-serif;
}
.name{
  font-size:2vh;
  color:#3ACEDD;
}
</style>
<script>
import homenews from "@/components/HomeNews.vue";
import helloworld1 from "@/components/HelloWorld1.vue";
import mincontact from "@/components/mincontact.vue";
export default {
  name: "about",
  components: {
    homenews,
    helloworld1,
    mincontact
  },
  data() {
    let events = [];
    let btns = "m-1 col";
    let btnc = "#2D354B";
    let btnt = "line";
    let cols =  false;
let item = [
      { title: "產品資訊", url: "#/product", disabled: true },
      { title: "光源商品", url: "#/light", disabled: true },
      { title: "零組件商品", url: "#/component"},
    ];
    return {
      events,
      btns,
      btnc,
      btnt,
      item,
      activeItem: 0,
      cols
    };
  },
  created() {
    this.axios
      .get("http://220.128.133.15/s1080214/project/axios.php?do=p0")
      .then(response => {
        this.events = response.data;
        // console.log(response.data);
        let a = this.events;
        let b = "";
        for (let i = 0; i < a.length; i++) {
          b +=
            "<tr><td><div class='container row m-0 p-0 flex-column flex-md-row' style='border:0.5px solid #dedede;'><div class='col-md-7'><img src='http://220.128.133.15/s1080214/project/CWL_T/upload/" +
            a[i]["pic"] +
            "'/></div><div class='col-md-5 p-3' style='box-shadow:-1px 1px 5px #ddd'><div class='col mb-3 text-right' style='font-size:2.5vh; color:#000;'>" +
            a[i]["name"] +
            "<hr style='border:0;height: 1.2px;background-image: linear-gradient(to right, transparent, #7C7B79, transparent)'/></div><div class='col text-left'>" +
            a[i]["des"] +
            "</div></div></div></td></tr>";
        }
        var c = document.getElementById("a3");
        // console.log(c);
        c.innerHTML = b;
      });
  },
};
</script>
