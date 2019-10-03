<template>
  <div style="position:relative">
    <div id="bac" class="m-0 p-0"></div>
      <div>
      <div class="row m-0">
        <div class="col mr-auto"></div>
        <div class="row m-0">
      <vs-icon icon="fingerprint" size="medium" bg=""></vs-icon>
    <vs-breadcrumb
      :items="item"
      class="break font"
      separator="|"
    ></vs-breadcrumb>
    </div>
    </div>
        <div class="container">
          <br id="k0" /><br /><br /><br /><br />
          <h3 class="text-right">何謂光源</h3>
          <hr class="styleT">
          <k0 />
          <br id="k1" /><br /><br /><br /><br />
          <h3>光源分類</h3>
          <hr class="styleB">
          <k1 />
          <br id="k2" /><br /><br /><br /><br />
          <h3>
          <h3 class="text-right">注意事項</h3>
            <hr class="styleT">
          </h3>
          <k2 />
          <br id="k3" /><br /><br /><br /><br />
          <h3>品牌介紹</h3>
          <hr class="styleB">
          <k3 />
        </div>
      </div>
      <br><br><br><br><br>
  </div>
</template>
<style scoped>
#bac{
position:fixed;
background:linear-gradient(30deg,rgba(204, 204, 204, 0.486)10%,rgba(230, 230, 230, 0.164) 50%, rgb(255, 255, 255));
border-radius:100% 0 0 0;
z-index:-2;
width:100%;
height:95%;
overflow:hidden;
}

.break,h3 {
  font-family: "Noto Sans TC", sans-serif;
}
.font,h3{
    font-weight:bolder;
}
hr.styleT {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right,rgba(0, 0, 0, 0.75), rgba(0,0,0,0));
}
hr.styleB {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right,rgba(0, 0, 0, 0), rgba(0,0,0,0.75));
}
</style>
<script>
import k0 from "@/components/k0.vue";
import k1 from "@/components/k1.vue";
import k2 from "@/components/k2.vue";
import k3 from "@/components/k3.vue";
export default {
  components: {
    k0,
    k1,
    k2,
    k3
  },
  data() {
    return {
      item: [
        {
          title: "About Light",
          url: "#/knowledge",
          disabled: true
        },
        {
          title: "何謂光源",
          url: "#k0"
        },
        {
          title: "光源分類",
          url: "#k1"
        },
        {
          title: "注意事項",
          url: "#k2"
        },
        {
          title: "品牌介紹",
          url: "#k3"
        }
      ]
    };
  },
  methods: {


  }
};
</script>
