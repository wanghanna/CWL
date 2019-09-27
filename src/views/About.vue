<template>
  <div>
    <div>
    <vs-breadcrumb
      :items="item"
      class="break position-fixed"
      separator="•"
    ></vs-breadcrumb>
    <br id="a1" /><br /><br /><br /><br />
    <vs-divider><h3>企業情報</h3></vs-divider>
    <br />
    <about1 />
    <br id="a2" /><br /><br /><br /><br />
    <vs-divider><h3>經營內容 - 全省服務</h3></vs-divider>
    <br /><br />
    <about2 />
    <br id="a3" /><br /><br /><br /><br />
    <vs-divider><h3>如何抵達</h3></vs-divider>
    <div class="vh-100">
      <img src="../assets/map.png" alt="" />
    </div>
    </div>
  </div>
</template>
<style scoped>
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
          title: "首頁",
          url: "#/idx"
        },
        {
          title: "關於辰偉",
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
