<template>
  <div>
    <div>
      <div class="row m-0">
      <vs-icon icon="fingerprint" size="medium" bg=""></vs-icon>
    <vs-breadcrumb
      :items="item"
      class="break"
      separator="|"
    ></vs-breadcrumb>
    </div>
    <br id="a1" /><br /><br><br><br>
    <div>
    <h3 id="a11" class="mr-auto px-5">企業情報</h3>
    <br />
    <about1 />
    </div>
    <br id="a2" /><br /><br /><br /><br />
    <div>
    <h3 id="a21" class="mr-auto px-5">經營內容 - 全省服務</h3>
    <br /><br />
    <about2 />
    </div>
    <br id="a3" /><br /><br /><br /><br />
    <h3 id="a31" class="mr-auto px-5">如何抵達</h3>
    <br>
    <div class="row flex-md-row flex-column m-0 justify-content-center align-items-center">
      <vs-icon icon="commute" size="75px" color="#32312D" class="mr-3"></vs-icon>
      <img src="../assets/map.png" alt="" />
    </div>
        <br><br><br>
    </div>
  </div>
</template>
<style scoped>
#a11,
#a21,#a31 {
border:1px solid #33322E;
padding:5px;
width:10px;
position:relative;
color:#33322E;
font-weight:bolder;
white-space:nowrap;
}
#a11::after,#a21::after,#a31::after{
  content:"";
  position:absolute;
  width:45%;
  height:100%;
  background:#3ACEDD;
  top:-20%;
  left:-15%;
  z-index:-1
}
.break {
  font-family: "Noto Sans TC", sans-serif;
}
img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>
<script>
import about1 from "@/components/about1.vue";
import about2 from "@/components/about2.vue";
export default {
  components: {
    about1,
    about2
  },
  data() {
    return {
      item: [
        {
          title: "Home",
          url: "#/idx"
        },
        {
          title: "Company",
          url: "#/about",
          disabled: true
        },
        {
          title: "企業情報",
          url: "#a1"
        },
        {
          title: "經營內容",
          url: "#a2"
        },
        {
          title: "如何抵達",
          url: "#a3"
        }
      ]
    };
  }
};
</script>

<style scoped>
.examplex {
  display: flex;
  align-items: center;
  justify-content: center;
}

.a-icon {
  outline: none;
  text-decoration: none !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

i {
  font-size: 18px;
}
h3 {
  font-family: "Noto Sans TC", sans-serif;
}
</style>
