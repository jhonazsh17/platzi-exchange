import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/tailwind.css";
import Chart from 'chart.js';
import ChartKick from "vue-chartkick";
import { VueSpinners } from '@saeris/vue-spinners';
import { dollarFilter, percentFilter } from "@/filters";

Vue.use(VueSpinners);
Vue.use(ChartKick.use(Chart));
Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
