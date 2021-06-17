import Vue from "vue";

Vue.component('hello-world', () => import("./HelloWorld.vue"));
Vue.component("full-hero", () => import("./pages/FullHero.vue"));

const vm = new Vue({
  el: '#app',
  data: {
    appUrl: 'http://proto-bm.dev.dd'
  }
});
