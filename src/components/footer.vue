<template>
  <div class="container-fluid main row flex-column flex-md-row mb-2 m-0">
    <div class="container-fluid col-md-8 row flex-column flex-md-row m-0">
      <div class="col">
        <h6><b>CHEN WEI LIGHTING</b></h6>
        <hr />
        <div style="text-align:start;">
          <img src="../assets/LOGO_Lamp.svg" width="100px" />
        </div>
        <p>服務範圍: 全台各區</p>
        <vs-button color="#207e89" size="large" type="filled" icon="input" @click ="go"></vs-button>
      </div>
      <div class="col">
        <h6><b>ADDRESS</b></h6>
        <hr />
        <p>高雄市新興區七賢一路199號</p>
        <p>
          No. 199,QIXIAN 1ST RD., XINXING DIST., KAOHSIUNG CITY
          800,TAIWAN(R.O.C)
        </p>
      </div>
      <div class="col">
        <h6><b>CONTACT</b></h6>
        <hr />
        <p><b>Phone: </b>+886-7-2382383</p>
        <p><b>Fax: </b>+886-7-2382385</p>
        <p><b>Email: </b>chenweilight@yahoo.com.tw</p>
      </div>
    </div>
    <div class="col">
      <img id="map" src="../assets/map.png" alt="" />
    </div>
  </div>
</template>
<style scoped>
.main {
  padding: 45px;
  background: #d9e1e8;
  background-attachment:fixed;
}
h6 {
  color: #282c37;
  font-family: "Teko", sans-serif;
  font-size: 20px;
  text-align: start;
}
p {
  font-family: "Noto Sans TC", sans-serif;
  color: #52616a;
  text-align: start;
}
#map {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>
<script>
export default {
  methods:{
    go: function(){
      // window.location.href = "http://220.128.133.15/s1080214/project/www_backside/admin.php"
      window.location.href = "http://127.0.0.1/myvue/vue2_backside/www_backside/admin.php"
    }
  }
};
</script>
