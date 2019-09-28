import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
// vuesax
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css"; //Vuesax styles
// icon
import "material-icons/iconfont/material-icons.css";
// carcousel
import VueCarousel from "vue-carousel";
// axios
import axios from "axios";
import VueAxios from "vue-axios";
//eve icon
import EvaIcons from "vue-eva-icons";
//fontawesome libary
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import vueToTop from 'vue-totop'

Vue.use(vueToTop)
library.add(faCoffee, faGooglePlus);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(EvaIcons);

Vue.use(VueAxios, axios);
Vue.use(VueCarousel);
Vue.use(Vuesax, {
  // options here
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
