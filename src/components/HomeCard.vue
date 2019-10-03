<template>
    <div class="d-flex flex-column flex-lg-row">
    <!-- 1 -->
<div class="cardS col bg-light">
  <div class="text-center"><h1>Lorem, ipsum</h1></div>
  <div class="text-center"><img src="../assets/logo.png"></div>
  <div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, suscipit.</p>
  </div>
</div>
<!-- 2 -->
<div class="cardS col bg-light">
  <div class="text-center"><h1>Lorem, ipsum</h1></div>
  <div class="text-center"><img src="../assets/logo.png"></div>
  <div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, suscipit.</p>
  </div>
</div>
<!-- 3 -->
<div class="cardS col bg-light">
  <div class="text-center"><h1>Lorem, ipsum</h1></div>
  <div class="text-center"><img src="../assets/logo.png"></div>
  <div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, suscipit.</p>
  </div>
</div>
<!-- 4 -->
</div>
</template>
<style scoped>
.cardS{
  font-family: "Noto Sans TC", sans-serif;
  margin:5px;
  transition:1s;
}
.cardS:hover{
  transform:scale(0.9);
  box-shadow:inset 10px 10px 30px rgba(170, 170, 170, 0.295),inset -20px -20px 10px rgb(241, 241, 241);
  border-radius:20px;
}
.cardS img{
width:20vh;
}
.cardS div{
  margin:1vh 2vh;
}

h1{
  font-size:3vh;
  color:rgb(63, 63, 63);
  line-height:8vh;
  font-weight:bolder;
}
p{
  font-size:2vh;
  color:rgb(31, 30, 30);
  line-height:5vh;
}
</style>