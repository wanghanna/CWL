<template>
  <div id="about" class="about container-fluid">
    <div class="sticky-top">
      <vs-breadcrumb :items="item" separator="chevron_right"></vs-breadcrumb>
      <!-- light-navbar -->
      <div>
        <vs-navbar class="nabarx pt-2 row m-0" color="#ffffff">
          <div slot="title" class="col">
            <vs-navbar-title
              ><vs-button
                line-position="bottom"
                line-origin="left"
                color="#268893"
                type="filled"
                >光源產品</vs-button
              >&nbsp;&nbsp;•&nbsp;&nbsp;<vs-button
                line-position="bottom"
                line-origin="left"
                color="#268893"
                type="border"
                ><router-link
                  to="/component"
                  style="color:#268893;text-decoration:none"
                  >零組件產品</router-link
                ></vs-button
              ></vs-navbar-title
            >
          </div>
          <vs-navbar-item index="0">
            <vs-button :class="btns" :color="btnc" :type="btnt" v-on:click="all"
              >光源 - 全部產品</vs-button
            >
          </vs-navbar-item>
          <vs-navbar-item index="1">
            <vs-button :class="btns" :color="btnc" :type="btnt" v-on:click="P1"
              >LED燈管燈泡</vs-button
            >
          </vs-navbar-item>
          <vs-navbar-item index="2">
            <vs-button :class="btns" :color="btnc" :type="btnt" v-on:click="P2"
              >LED櫥櫃嵌燈</vs-button
            >
          </vs-navbar-item>
          <vs-navbar-item index="3">
            <vs-button :class="btns" :color="btnc" :type="btnt" v-on:click="P3"
              >LED投光燈具</vs-button
            >
          </vs-navbar-item>
          <vs-navbar-item index="4">
            <vs-button :class="btns" :color="btnc" :type="btnt" v-on:click="P4"
              >省電燈管燈泡</vs-button
            >
          </vs-navbar-item>
          <vs-navbar-item index="5">
            <vs-button :class="btns" :color="btnc" :type="btnt" v-on:click="P5"
              >鹵素燈管燈泡</vs-button
            >
          </vs-navbar-item>
          <vs-navbar-item index="6">
            <vs-button :class="btns" :color="btnc" :type="btnt" v-on:click="P6"
              >鎢絲燈管燈泡</vs-button
            >
          </vs-navbar-item>
          <vs-navbar-item index="7">
            <vs-button :class="btns" :color="btnc" :type="btnt" v-on:click="P7"
              >螢光燈管系列</vs-button
            >
          </vs-navbar-item>
          <vs-navbar-item index="8">
            <vs-button :class="btns" :color="btnc" :type="btnt" v-on:click="P8"
              >HID燈泡燈管</vs-button
            >
          </vs-navbar-item>
          <vs-navbar-item index="9">
            <vs-button :class="btns" :color="btnc" :type="btnt" v-on:click="P9"
              >醫療系列</vs-button
            >
          </vs-navbar-item>
          <vs-navbar-item index="10">
            <vs-button :class="btns" :color="btnc" :type="btnt" v-on:click="P10"
              >影視舞台專用</vs-button
            >
          </vs-navbar-item>
          <vs-navbar-item index="11">
            <vs-button :class="btns" :color="btnc" :type="btnt" v-on:click="P11"
              >一般燈具</vs-button
            >
          </vs-navbar-item>
        </vs-navbar>
      </div>
    </div>
    <div class="container-fluid row">
      <div class="col-md-9 col">
        <table>
          <thead>
            <!-- v-for使用 -->
            <!-- <tr>
          <th>產品類別</th>
          <th>樣式</th>
          <th>名稱</th>
          <th>說明</th>
          </tr> -->
            <tr>
              <th>
                <div id="title" class="row m-0 flex-column flex-md-row">
                  <div class="col">產品類別</div>
                  <div class="col">樣式</div>
                  <div class="col">名稱</div>
                  <div class="col">說明</div>
                </div>
              </th>
            </tr>
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
  </div>
</template>
<style>
div {
  font-family: "Noto Sans TC", sans-serif;
}
#title {
  background: #252439;
  color: #ebebeb;
  font-size: 15px;
  padding: 10px;
  text-align: center;
  border-radius: 20px;
}
table {
  width: 100%;
  margin-top: 50px;
}
td {
  border-bottom: 1px solid rgb(165, 165, 165);
  padding-top: 50px;
  padding-bottom: 20px;
  text-align: center;
}
table img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
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
    let btns = "m-1";
    let btnc = "#268893";
    let btnt = "flat";
    let item = [
      { title: "首頁", url: "#/idx" },
      { title: "產品介紹", url: "#/light", disabled: true },
      { title: "光源產品", url: "#/light", disabled: true }
    ];
    return {
      events,
      btns,
      btnc,
      btnt,
      item
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
            "<tr><td><div class='row flex-column flex-md-row'><div class='col'>" +
            a[i]["type"] +
            "</div><div class='col'><img src='http://220.128.133.15/s1080214/project/dist/img/" +
            a[i]["pic"] +
            "'/></div><div class='col'>" +
            a[i]["name"] +
            "</div><div class='col'>" +
            a[i]["des"] +
            "</div></div></td></tr>";
        }
        var c = document.getElementById("a3");
        // console.log(c);
        c.innerHTML = b;
      });
  },
  methods: {
    all: function() {
      this.axios
        .get("http://220.128.133.15/s1080214/project/axios.php?do=p0")
        .then(response => {
          this.events = response.data;
          // console.log(response.data);
          let a = this.events;
          let b = "";
          for (let i = 0; i < a.length; i++) {
            b +=
              "<tr><td><div class='row flex-column flex-md-row'><div class='col'>" +
              a[i]["type"] +
              "</div><div class='col'><img src='http://220.128.133.15/s1080214/project/dist/img/" +
              a[i]["pic"] +
              "'/></div><div class='col'>" +
              a[i]["name"] +
              "</div><div class='col'>" +
              a[i]["des"] +
              "</div></div></td></tr>";
          }
          var c = document.getElementById("a3");
          // console.log(c);
          c.innerHTML = b;
        });
    },
    P1: function() {
      this.axios
        .get("http://220.128.133.15/s1080214/project/axios.php?do=p1")
        .then(response => {
          this.events = response.data;
          // console.log(response.data);
          let a = this.events;
          let b = "";
          for (let i = 0; i < a.length; i++) {
            b +=
              "<tr><td><div class='row flex-column flex-md-row'><div class='col'>" +
              a[i]["type"] +
              "</div><div class='col'><img src='http://220.128.133.15/s1080214/project/dist/img/" +
              a[i]["pic"] +
              "'/></div><div class='col'>" +
              a[i]["name"] +
              "</div><div class='col'>" +
              a[i]["des"] +
              "</div></div></td></tr>";
          }
          var c = document.getElementById("a3");
          // console.log(c);
          c.innerHTML = b;
        });
    },
    P2: function() {
      this.axios
        .get("http://220.128.133.15/s1080214/project/axios.php?do=p2")
        .then(response => {
          this.events = response.data;
          // console.log(response.data);
          let a = this.events;
          let b = "";
          for (let i = 0; i < a.length; i++) {
            b +=
              "<tr><td><div class='row flex-column flex-md-row'><div class='col'>" +
              a[i]["type"] +
              "</div><div class='col'><img src='http://220.128.133.15/s1080214/project/dist/img/" +
              a[i]["pic"] +
              "'/></div><div class='col'>" +
              a[i]["name"] +
              "</div><div class='col'>" +
              a[i]["des"] +
              "</div></div></td></tr>";
          }
          var c = document.getElementById("a3");
          // console.log(c);
          c.innerHTML = b;
        });
    },
    P3: function() {
      this.axios
        .get("http://220.128.133.15/s1080214/project/axios.php?do=p3")
        .then(response => {
          this.events = response.data;
          // console.log(response.data);
          let a = this.events;
          let b = "";
          for (let i = 0; i < a.length; i++) {
            b +=
              "<tr><td><div class='row flex-column flex-md-row'><div class='col'>" +
              a[i]["type"] +
              "</div><div class='col'><img src='http://220.128.133.15/s1080214/project/dist/img/" +
              a[i]["pic"] +
              "'/></div><div class='col'>" +
              a[i]["name"] +
              "</div><div class='col'>" +
              a[i]["des"] +
              "</div></div></td></tr>";
          }
          var c = document.getElementById("a3");
          // console.log(c);
          c.innerHTML = b;
        });
    },
    P4: function() {
      this.axios
        .get("http://220.128.133.15/s1080214/project/axios.php?do=p4")
        .then(response => {
          this.events = response.data;
          // console.log(response.data);
          let a = this.events;
          let b = "";
          for (let i = 0; i < a.length; i++) {
            b +=
              "<tr><td><div class='row flex-column flex-md-row'><div class='col'>" +
              a[i]["type"] +
              "</div><div class='col'><img src='http://220.128.133.15/s1080214/project/dist/img/img/" +
              a[i]["pic"] +
              "'/></div><div class='col'>" +
              a[i]["name"] +
              "</div><div class='col'>" +
              a[i]["des"] +
              "</div></div></td></tr>";
          }
          var c = document.getElementById("a3");
          // console.log(c);
          c.innerHTML = b;
        });
    },
    P5: function() {
      this.axios
        .get("http://220.128.133.15/s1080214/project/axios.php?do=p5")
        .then(response => {
          this.events = response.data;
          // console.log(response.data);
          let a = this.events;
          let b = "";
          for (let i = 0; i < a.length; i++) {
            b +=
              "<tr><td><div class='row flex-column flex-md-row'><div class='col'>" +
              a[i]["type"] +
              "</div><div class='col'><img src='http://220.128.133.15/s1080214/project/dist/img/" +
              a[i]["pic"] +
              "'/></div><div class='col'>" +
              a[i]["name"] +
              "</div><div class='col'>" +
              a[i]["des"] +
              "</div></div></td></tr>";
          }
          var c = document.getElementById("a3");
          // console.log(c);
          c.innerHTML = b;
        });
    },
    P6: function() {
      this.axios
        .get("http://220.128.133.15/s1080214/project/axios.php?do=p6")
        .then(response => {
          this.events = response.data;
          // console.log(response.data);
          let a = this.events;
          let b = "";
          for (let i = 0; i < a.length; i++) {
            b +=
              "<tr><td><div class='row flex-column flex-md-row'><div class='col'>" +
              a[i]["type"] +
              "</div><div class='col'><img src='http://220.128.133.15/s1080214/project/dist/img/" +
              a[i]["pic"] +
              "'/></div><div class='col'>" +
              a[i]["name"] +
              "</div><div class='col'>" +
              a[i]["des"] +
              "</div></div></td></tr>";
          }
          var c = document.getElementById("a3");
          // console.log(c);
          c.innerHTML = b;
        });
    },
    P7: function() {
      this.axios
        .get("http://220.128.133.15/s1080214/project/axios.php?do=p7")
        .then(response => {
          this.events = response.data;
          // console.log(response.data);
          let a = this.events;
          let b = "";
          for (let i = 0; i < a.length; i++) {
            b +=
              "<tr><td><div class='row flex-column flex-md-row'><div class='col'>" +
              a[i]["type"] +
              "</div><div class='col'><img src='http://220.128.133.15/s1080214/project/dist/img/" +
              a[i]["pic"] +
              "'/></div><div class='col'>" +
              a[i]["name"] +
              "</div><div class='col'>" +
              a[i]["des"] +
              "</div></div></td></tr>";
          }
          var c = document.getElementById("a3");
          // console.log(c);
          c.innerHTML = b;
        });
    },
    P8: function() {
      this.axios
        .get("http://220.128.133.15/s1080214/project/axios.php?do=p8")
        .then(response => {
          this.events = response.data;
          // console.log(response.data);
          let a = this.events;
          let b = "";
          for (let i = 0; i < a.length; i++) {
            b +=
              "<tr><td><div class='row flex-column flex-md-row'><div class='col'>" +
              a[i]["type"] +
              "</div><div class='col'><img src='http://220.128.133.15/s1080214/project/dist/img/" +
              a[i]["pic"] +
              "'/></div><div class='col'>" +
              a[i]["name"] +
              "</div><div class='col'>" +
              a[i]["des"] +
              "</div></div></td></tr>";
          }
          var c = document.getElementById("a3");
          // console.log(c);
          c.innerHTML = b;
        });
    },
    P9: function() {
      this.axios
        .get("http://220.128.133.15/s1080214/project/axios.php?do=p9")
        .then(response => {
          this.events = response.data;
          // console.log(response.data);
          let a = this.events;
          let b = "";
          for (let i = 0; i < a.length; i++) {
            b +=
              "<tr><td><div class='row flex-column flex-md-row'><div class='col'>" +
              a[i]["type"] +
              "</div><div class='col'><img src='http://220.128.133.15/s1080214/project/dist/img/" +
              a[i]["pic"] +
              "'/></div><div class='col'>" +
              a[i]["name"] +
              "</div><div class='col'>" +
              a[i]["des"] +
              "</div></div></td></tr>";
          }
          var c = document.getElementById("a3");
          // console.log(c);
          c.innerHTML = b;
        });
    },
    P10: function() {
      this.axios
        .get("http://220.128.133.15/s1080214/project/axios.php?do=p10")
        .then(response => {
          this.events = response.data;
          // console.log(response.data);
          let a = this.events;
          let b = "";
          for (let i = 0; i < a.length; i++) {
            b +=
              "<tr><td><div class='row flex-column flex-md-row'><div class='col'>" +
              a[i]["type"] +
              "</div><div class='col'><img src='http://220.128.133.15/s1080214/project/dist/img/" +
              a[i]["pic"] +
              "'/></div><div class='col'>" +
              a[i]["name"] +
              "</div><div class='col'>" +
              a[i]["des"] +
              "</div></div></td></tr>";
          }
          var c = document.getElementById("a3");
          // console.log(c);
          c.innerHTML = b;
        });
    },
    P11: function() {
      this.axios
        .get("http://220.128.133.15/s1080214/project/axios.php?do=p11")
        .then(response => {
          this.events = response.data;
          // console.log(response.data);
          let a = this.events;
          let b = "";
          for (let i = 0; i < a.length; i++) {
            b +=
              "<tr><td><div class='row flex-column flex-md-row'><div class='col'>" +
              a[i]["type"] +
              "</div><div class='col'><img src='http://220.128.133.15/s1080214/project/dist/img/" +
              a[i]["pic"] +
              "'/></div><div class='col'>" +
              a[i]["name"] +
              "</div><div class='col'>" +
              a[i]["des"] +
              "</div></div></td></tr>";
          }
          var c = document.getElementById("a3");
          // console.log(c);
          c.innerHTML = b;
        });
    }
  }
};
</script>
