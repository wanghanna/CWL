<template>
  <div id="front" class="m-0 row flex-column justify-content-center vh-100">
    <div class="in vh-100">
      <div class="ml-5 col col-md-6 mt-5 pt-5">
        <br /><br /><br /><br /><br /><br />
        <h1 class="chip size80">辰偉照明</h1>
        <p class="chip size30 mb-4">
          CHEN WEI LIGHTING CO., LTD
        </p>
        <h3 class="chip subheading text-start">offer the best service!</h3>
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
.in {
  background-image: linear-gradient(-20deg, #252439da 45%, #ebebeb1c 60%);
  /* background-image: linear-gradient(-20deg, #25243931 50%, #ebebeb00 50%); */
  background-attachment: fixed;
}
.size80 {
  font-size: 22vh;
  text-align: start;
}
.size16 {
  font-size: 10vh;
  text-align: start;
}
.size30 {
  font-size: 5vh;
  font-weight: bolder;
  text-align: start;
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
  background: linear-gradient(#ebebeb 45%, #252439 50%);
  background-attachment: fixed;
  -webkit-background-clip: text;
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
