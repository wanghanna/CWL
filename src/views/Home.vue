<template>
  <div id="front" class="m-0 row flex-column justify-content-center vh-100">
    <div class="in vh-100 container-fluid row m-0 m-0d-none d-md-block">
      <div class="po vh-100 d-none d-md-block">
        <br /><br /><br /><br /><br /><br />
        <h1 class="chip size80"><router-link to="/idx">辰偉照明</router-link></h1>
        <p class="chip size30 mt-5">
          CHEN WEI LIGHTING CO., LTD
        </p>
        <p class="chip size16 subheading">offer the best service!</p>
      </div>
            <div class="po vh-100 text-light d-md-none">
        <br /><br /><br /><br /><br /><br />
        <h1 class="size80"><router-link class="idx" style="text-decoration:none" to="/idx">辰偉照明</router-link></h1>
        <p class="size30 mt-5">
          CHEN WEI LIGHTING CO., LTD
        </p>
        <p class="size16 subheading">offer the best service!</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
#front {
  background-image: linear-gradient(#252439 20%, #ebebeb 80%);
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
  font-family: "Noto Sans TC", sans-serif;
}
.po{
  position:absolute;
  left:10%;
  top:20%;
}
.in {
  background-image: linear-gradient(-20deg, #252439da 45%, #ebebeb1c 60%);
  /* background-image: linear-gradient(-20deg, #25243931 50%, #ebebeb00 50%); */
  background-attachment: fixed;
  /* position:relative; */
}
.size80 {
  font-size: 8vw;
  text-align: start;
}
.idx{
  color:white;
}
.idx:hover{
  font-size:9vh;
  color:#232439;
  transition: 2s;
}

.size30 {
  font-size: 2.5vw;
  font-weight: bolder;
  text-align: center;
}
.size16 {
  font-size: 1.5vw;
  text-align: end;
}

.chip {
  position: relative;
  display: block;
  overflow: hidden;
  color: #fff;
  /* color:#252439; */
  -webkit-text-fill-color: transparent;
  /* background: linear-gradient(20deg, #252439 50%, #ebebeb 50%); */
  /* background: linear-gradient(#252439 50%, #ebebeb 50%); */
  background: linear-gradient(#ebebeb 45%, #252439 48%, #ebebeb 60%, #252439 65%);
  background-attachment: fixed;
  -webkit-background-clip: text;
  filter:drop-shadow( 0 0 2px rgb(41, 41, 41))
}
#front::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, transparent, white, transparent);
  left: -100%;
  /* transition: 5s; */
  animation-name: ani;
  animation-duration: 5s;
  animation-fill-mode: forwards;
}
/* #front:hover::before {
    left: 100%;
} */
@keyframes ani {
  from {
    left: -100%;
  }
  to {
    left: 20%;
  }
}
</style>
