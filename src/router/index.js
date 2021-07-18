import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/ti",
    name: "TI",
    component: () => import("../components/TI.vue"),
  },
  {
    path: "/proyecciones",
    name: "Proyecciones",
    component: () => import("../components/Proyecciones.vue"),
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
