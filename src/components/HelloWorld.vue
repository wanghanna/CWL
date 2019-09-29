<template>
  <div class="hello container-fluid">
    <!-- <h1>{{ msg }}</h1> -->
    <carousel
    :perPageCustom="[[100, 1], [1024, 2]]"
     :autoplay= true
      paginationActiveColor="#268893"
      :autoplayTimeout=3000
      :navigationEnabled = true
      :paginationSize = 10
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
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p,h3 {
  color: #656a6c;
  font-family: "Noto Sans TC", sans-serif;
}
h3{
  font-size:20px
}
p{
  font-size:12px;
}
</style>
