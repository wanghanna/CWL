<template>
<div id="bottom">
  <div id="bottomB"  class="row d-none d-lg-flex fixed-bottom flex-column m-0 align-items-center justify-content-md-center">
    2019 Chen Wei Lighting CO., LTD
    <!-- <div class="d-md-none row m-0" style="font-family: 'Noto Sans TC', sans-serif">
      <a href="tel:+886-7-2382383">直接來電&nbsp;<eva-icon name="phone-call-outline" animation="shake" fill="#33322E" class="my-1"></eva-icon></a>
    </div> -->
  </div>
<!-- 小尺寸 -->
<div id="bottomS" class="row m-0 d-lg-none row m-0 fixed-bottom bg-light">
<a class="sM col" href="#/idx"><div class="row flex-column"><vs-icon icon="home"></vs-icon><div>首頁</div></div></a>
<a class="sM col" href="tel:+886-7-2382383"><div class="row flex-column"><vs-icon icon="phone"></vs-icon><div>通訊</div></div></a>
<a class="sM col" href="mailto:chenweilight@yahoo.com.tw"><div class="row flex-column"><vs-icon icon="mail"></vs-icon><div>通信</div></div></a>
<a class="sM col" href="#/about/#"><div class="row flex-column"><vs-icon icon="dashboard"></vs-icon><div>詳細</div></div></a>
<a class="sM col" href="#"><div class="row flex-column"><vs-icon size="20px" icon="vertical_align_top"></vs-icon><div>Top</div></div></a>
</div>

  </div>
</template>
<style scoped>
.sM{
  background:rgba(0, 0, 0, 0.5);
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  color:#ebebeb;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:2px;
  transition:0.5s;
  font-size:12px;
}
.sM:hover{
  padding:5px;
  /* transform:scale(1.1); */
  border:0px;
  /* border-radius:5px; */
  /* box-shadow:inset 0px 0px 10px rgb(255, 255, 255),0px 0px 1px rgb(0, 0, 0); */
  background:#3acddd;
  color:rgb(0, 0, 0);
  transform:scale(1.1);
}
#bottomS{
  box-sizing:border-box;
  height:50px;
  width:100%;
  font-family: "Noto Sans TC", sans-serif;
  font-weight:lighter;
}
#bottomB{
  background:#FFFFFF;
}
#bottom {
  color: #1F1F1E;
  font-weight:bolder;
  font-size:15px;
  background:#fff;
  font-family:"Noto Sans TC", sans-serif;
}
a{
  color:#1F1F1E;
  text-decoration:none;
}
</style>
