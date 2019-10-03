<template>
<div class="container-fluid">
    <div class="row m-0">
     <div class="col mr-auto"></div>
    <vs-icon icon="fingerprint" size="medium" bg=""></vs-icon>
    <vs-breadcrumb :items="item" separator="|" class="font"></vs-breadcrumb>
    </div>
  <div>
    <HelloWorld />
    <br><br><br><br>
    <h3 id="h3n" class="mr-auto px-5">News</h3>
    <HomeNews />
    <br><br><br><br>
    <h3 id="h3p" class="mr-auto px-5">Product</h3>
    <hr />
    <HomeCard />
    <br><br><br>
  </div>
      <br><br><br><br><br>
  </div>
</template>
<style scoped>
.font{
  font-family: "Noto Sans TC", sans-serif;
  font-weight:bolder;
  color:#34332E;
}
#h3p,
#h3n {
border:1px solid #33322E;
padding:5px;
width:10px;
position:relative;
color:#33322E;
font-weight:bolder;

}
#h3p::after,#h3n::after{
  content:"";
  position:absolute;
  width:45%;
  height:100%;
  background:#3ACEDD;
  top:-20%;
  left:-15%;
  z-index:-1
}
#h3p:hover,
#h3n:hover {
}
</style>
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import HomeCard from "@/components/HomeCard.vue";
import HomeNews from "@/components/HomeNews.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    HomeCard,
    HomeNews
  },
  data() {
    let item = [
      { title: "Home", url: "#/idx" ,disabled: true},
    ];
    return {
      item
    };
  }
};
</script>
