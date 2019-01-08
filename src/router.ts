import VueRouter from 'vue-router';
import Version from './components/pages/Version.vue';
import Vue from 'vue';
import Num from "./components/pages/Num.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/version',
      component: Version,
      name: 'auth',
    },
    {
      path: '/num',
      component: Num,
      name: 'auth',
    },
  ],
});