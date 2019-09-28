<template>
  <div>
      <div>
        <vs-breadcrumb
          :items="item"
          class="break"
          separator="•"
        ></vs-breadcrumb>
        <div class="container">
          <br id="k0" /><br /><br /><br /><br />
          <vs-divider><h3>何謂光源</h3></vs-divider>
          <k0 />
          <br id="k1" /><br /><br /><br /><br />
          <vs-divider><h3>光源分類</h3></vs-divider>
          <k1 />
          <br id="k2" /><br /><br /><br /><br />
          <h3>
            <vs-divider><h3>注意事項</h3></vs-divider>
          </h3>
          <k2 />
          <br id="k3" /><br /><br /><br /><br />
          <vs-divider><h3>品牌介紹</h3></vs-divider>
          <k3 />
        </div>
      </div>
  </div>
</template>
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
          title: "首頁",
          url: "#/idx"
        },
        {
          title: "了解光源",
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
