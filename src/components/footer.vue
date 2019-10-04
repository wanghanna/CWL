<template>
  <div class="container-fluid main row mb-2 m-0">
    <div class="container-fluid col-md-8 row flex-column flex-md-row m-0">
      <div class="col">
        <h6><b>CHEN WEI LIGHTING</b></h6>
        <hr class="styleT"/>
        <div style="text-align:start">
          <img src="../assets/LOGO_Lamp.svg" width="100px" />
          <p><b>Business Hour: </b>Mon~Fri 09:00~18:00</p>
        </div>

        <!-- <p>服務範圍: 全台各區</p> -->
        <vs-button color="#33322E" size="large" type="flat" icon="input" @click ="go"></vs-button>
        <br>
      </div>
      <div class="col">
        <h6><b>ADDRESS</b></h6>
        <hr class="styleT"/>
        <p><b>辰偉照明股份有限公司</b></p>
        <p>高雄市新興區七賢一路199號</p>
        <p>
          No. 199,QIXIAN 1ST RD., XINXING DIST., KAOHSIUNG CITY
          800,TAIWAN(R.O.C)
        </p>
      </div>
      <div class="col">
        <h6><b>CONTACT</b></h6>
        <hr class="styleT"/>
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
  padding:100px 50px 100px 50px;
  line-height:35px;
  background:#C2C2C2
}
h6 {
  color: #EBEBEB;
  font-family: "Noto Sans TC", sans-serif;
  font-size: 20px;
  text-align: start;
}
p {
  font-family: "Noto Sans TC", sans-serif;
  color: #32312D;
  text-align: start;
}
#map {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
hr.styleT {
    border: 0;
    height: 1.5px;
    background: #333;
    background-image: linear-gradient(to right, #ccc, #333, #ccc);
}

</style>
<script>
export default {
  methods:{
    go: function(){
      // window.location.href = "http://220.128.133.15/s1080214/project/www_backside/admin.php"
      window.location.href = "http://127.0.0.1/gitkaren/CWL_T/CWL_T/admin.php"
    }
  }
};
</script>
