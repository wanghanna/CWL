<template>
<div>
    <vs-breadcrumb :items="item" separator="chevron_right" class="font"></vs-breadcrumb>
  <div class="home d-flex flex-column align-items-center px-5">
    <HelloWorld />
    <h3 id="h3n" class="mr-auto px-5">News</h3>
    <HomeNews />
    <h3 id="h3p" class="mr-auto px-5">Product</h3>
    <hr />
    <HomeCard />
  </div>
  </div>
</template>
<style scoped>
.font{
  font-family: "Noto Sans TC", sans-serif;
}
#h3p,
#h3n {
  box-shadow: inset 0 0 5px #ffffff;
  transition: all 0.2s;
  color: #c5c5c5;
  background: #252439;
  /* background: #16b1b5;
  color: #fff; */

  border-radius: 2rem;
}
#h3p:hover,
#h3n:hover {
  box-shadow: inset 0 0 10px #ffffff;
  font-size: 30px;
  background: #16b1b5;
  color: #fff;
  /* color: #c5c5c5;
  background:#252439; */
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
      { title: "首頁", url: "#/idx" },
    ];
    return {
      item
    };
  }
};
</script>
