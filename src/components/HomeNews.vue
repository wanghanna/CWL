<template>
  <div id="news">
    <vs-list>
            <div class="d-flex"><vs-icon icon="cast_connected" size="medium" color="#3ACEDD" class="mr-2"></vs-icon><vs-list-header
        title="最新消息"
        color="#33322E"
      ></vs-list-header></div>
      <hr class="styleT">
       <br><br>
      <div class="d-flex">
        <vs-icon icon="sort" size="small" color="#C2C2C2"></vs-icon>
        <span><h6>2019/10/02</h6></span>
        <span class="ml-3 fontSize"><p>Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur</p></span>
      </div>
          <div class="d-flex"><vs-icon icon="sort" size="small" color="#C2C2C2"></vs-icon><span><h6>2019/10/02</h6></span><span class="ml-3 fontSize"><p>Lorem ipsum dolor sit amet, consectetur</p></span></div>
         <div class="d-flex"><vs-icon icon="sort" size="small" color="#C2C2C2"></vs-icon><span><h6>2019/10/02</h6></span><span class="ml-3 fontSize"><p>Lorem ipsum dolorLorem ipsum dolor sit amet, consectetur consectetur</p></span></div>
          <div class="d-flex"><vs-icon icon="sort" size="small" color="#C2C2C2"></vs-icon><span><h6>2019/10/02</h6></span><span class="ml-3 fontSize"><p>Lorem ipsum dolor sit amLdolor sit amet, consecteturet, consectetur</p></span></div>
   </vs-list>
    <br><br>
             <br><br><br>
  </div>
</template>
<style scoped>
hr.styleT {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.75), rgba(0,0,0,0));
}
h6{
  font-size:1.8vh;
  font-weight:bolder;
}
p{
  font-size:2vh;
  font-weight:lighter;
}
#news{
  width:90%;
  position:relative;
  font-family: "Noto Sans TC", sans-serif;
  font-weight:bolder;
}

li {
  text-align: start;
}
</style>
