<template>
  <div class="hello container-fluid">
    <!-- <h1>{{ msg }}</h1> -->
    <carousel
      :autoplay="true"
      :autoplayHoverPause="false"
      paginationActiveColor="#268893"
      :autoplayTimeout="3000"
      :perPage=1
      
    >
      <slide>
        <img src="../assets/1_HBO_XBO.jpg" width="100%" />
        <h3>HBO_XBO</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis,
          aperiam.
        </p>
      </slide>
      <slide>
        <img src="../assets/2_HTI_HMI.jpg" width="100%" />
        <h3>HTI_HMI</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis,
          aperiam.
        </p>
      </slide>
      <slide>
        <img src="../assets/3_MSR_HSD.jpg" width="100%" />
        <h3>MSR_HSD</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis,
          aperiam.
        </p>
      </slide>
      <slide>
        <img src="../assets/4_水銀燈泡.jpg" width="100%" />
        <h3>水銀燈泡</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis,
          aperiam.
        </p>
      </slide>
      <slide>
        <img src="../assets/5_低壓鈉燈.jpg" width="100%" />
        <h3>低壓鈉燈</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis,
          aperiam.
        </p>
      </slide>
      <slide>
        <img src="../assets/4_水銀燈泡.jpg" width="100%" />
        <h3>水銀燈泡</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis,
          aperiam.
        </p>
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p,h3 {
  color: #656a6c;
  font-family: "Noto Sans TC", sans-serif;
}
h3{
  font-size:2.5vh;
}
p{
  font-size:2vh;
}
</style>
