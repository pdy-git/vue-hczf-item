import Vue from "vue";
import App from "./App.vue";

import router from "@/router";
import {
  Col,
  Row,
  Tabbar,
  TabbarItem,
  Icon,
  Swipe,
  SwipeItem,
  Search,
  SwipeCell,
  Cell,
  Button,
} from "vant";
Vue.use(Cell);
Vue.use(Button);
Vue.use(SwipeCell);
Vue.use(Col);
Vue.use(Row);
Vue.use(Search);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Icon);
Vue.use(Tabbar);
Vue.use(TabbarItem);

Vue.config.productionTip = false;

//测试封装的api方法
// import { recommendHomeTextAPI } from "@/api/index";
// function fn() {
//   recommendHomeTextAPI().then((res) => console.log(res));
// }
// fn();

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
