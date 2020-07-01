import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Pos from "../components/Pos.vue"
import Chat from "../components/Centimeter.vue"
import library from "../components/Library.vue"
import Carent from "../components/carent.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/point-of-sale",
    name: "Pos",
    component: Pos
  },
  {
    path: "/centimeter",
    name: "Centimeter",
    component: Chat
  },
  {
    path: "/library",
    name: "library",
    component: library
  }
  ,
  {
    path: "/carent",
    name: "Carent",
    component: Carent
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
