import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import routes from "../routes/index.js";

const router = new VueRouter({
  routes // short for `routes: routes`
});
