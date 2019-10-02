<template>
  <div id="news">
    <hr class="styleT">
    <vs-list>
            <div class="d-flex"><vs-icon icon="cast_connected" size="medium" color="#3ACEDD" class="mr-2"></vs-icon><vs-list-header
        title="最新消息"
        color="#33322E"
      ></vs-list-header></div>
      <div class="d-flex"><vs-icon icon="sort" size="small" color="#C2C2C2"></vs-icon><vs-list-item
        title=""
        subtitle="2019/10/01"
      ></vs-list-item><span class="ml-3 fontSize">Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur</span></div>
          <div class="d-flex"><vs-icon icon="sort" size="small" color="#C2C2C2"></vs-icon><vs-list-item
        title=""
        subtitle="2019/10/01"
      ></vs-list-item><span class="ml-3 fontSize">Lorem ipsum dolor sit amet, consectetur</span></div>
         <div class="d-flex"><vs-icon icon="sort" size="small" color="#C2C2C2"></vs-icon><vs-list-item
        title=""
        subtitle="2019/10/01"
      ></vs-list-item><span class="ml-3 fontSize">Lorem ipsum dolorLorem ipsum dolor sit amet, consectetur consectetur</span></div>
          <div class="d-flex"><vs-icon icon="sort" size="small" color="#C2C2C2"></vs-icon><vs-list-item
        title=""
        subtitle="2019/10/01"
      ></vs-list-item><span class="ml-3 fontSize">Lorem ipsum dolor sit amLdolor sit amet, consecteturet, consectetur</span></div>
   </vs-list>
   <br><br><br>
    <hr class="styleB">
  </div>
</template>
<style scoped>
#news{
  width:90%;
  position:relative;
  font-family: "Noto Sans TC", sans-serif;
  font-weight:bolder;
}
hr.styleT{
      height: 30px;
    border-style: solid;
    border-color: #33322E;
    border-width: 1.2px 0 0 0;
    border-radius: 20px;
}
hr.styleB{
    height: 30px;
    margin-top: -31px;
    border-style: solid;
    border-color: #33322E;
    border-width: 0 0 1.2px 0;
    border-radius: 20px;
}
li {
  text-align: start;
}
</style>
