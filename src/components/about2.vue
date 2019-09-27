<template>
  <div class="container">
    <vs-row vs-justify="center" class="flex-column flex-md-row">
      <!-- 1 -->
      <vs-col type="flex" vs-justify="center" vs-align="center" class="col">
        <vs-card>
          <div slot="header">
            <h3>
              項目
            </h3>
          </div>
          <div>
            <span class="f1">
              <ul>
                <li>電子電器買賣業務</li>
                <li>燈泡燈管燈具檯燈</li>
                <li>零配件照明設備買賣業務</li>
              </ul>
            </span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button
                type="gradient"
                color="warning"
                round
                icon="library_add"
              ></vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
      <!-- 2 -->
      <vs-col type="flex" vs-justify="center" vs-align="center" class="col">
        <vs-card>
          <div slot="header">
            <h3>
              類別
            </h3>
          </div>
          <div>
            <span class="f1">
              <ul>
                <li>
                  室內 | 室外 | 舞台 | 視聽 | 投影 | 幻燈 | 沖印 | 醫療 | 儀器 |
                  工廠設備.等專業照明燈泡燈管總匯
                </li>
              </ul>
            </span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button
                type="gradient"
                color="warning"
                icon="library_add"
              ></vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
      <!-- 3 -->
      <vs-col type="flex" vs-justify="center" vs-align="center" class="col">
        <vs-card>
          <div slot="header">
            <h3>
              經銷廠牌
            </h3>
          </div>
          <div>
            <span class="f1">
              <ul>
                <li>
                  德國歐司朗OSRAM專業照明 | 高氏 KAO'S | 飛利浦Philips |
                  美國奇異GE照明 | 喜萬年Sylvania | 國際National | 日立Hitachi |
                  日本NEC | USHIO | 及大陸各廠牌
                </li>
              </ul>
              <img src="../assets/as2_OSRAM.png" :style="as2_logo" /><img
                src="../assets/as2_KAOS.png"
                width="100px"
              /><img src="../assets/as2_philips.png" :style="as2_logo" /><img
                src="../assets/as2_ge.png"
                :style="as2_logo"
              /><img src="../assets/as2_sylvania.png" :style="as2_logo" /><img
                src="../assets/as2_national.png"
                :style="as2_logo"
              /><img src="../assets/as2_hitachi.png" :style="as2_logo" /><img
                src="../assets/as2_nec.png"
                :style="as2_logo"
              /><img src="../assets/as2_USHIO.png" :style="as2_logo" />
            </span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button
                type="gradient"
                color="warning"
                icon="library_add"
              ></vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>
<style scoped>
h3 {
  font-family: "Noto Sans TC", sans-serif;
  color:#656a6c
}
.f1 {
  font-family: "Noto Sans TC", sans-serif;
  font-size: 20px;
}
ul {
  list-style: none;
  line-height: 50px;
}
li {
}
</style>
<script>
export default {
  data() {
    let as2_logo = "width:100px";
    return {
      as2_logo
    };
  }
};
</script>
