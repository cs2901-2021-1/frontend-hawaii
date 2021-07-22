import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/Login.vue"),
    props: {
      login: "https://api.cs.mrg.com.pe/api-sec02-group02/viewers/auth",
    },
  },
  {
    path: "/ti",
    name: "TI",
    component: () => import("../components/Login.vue"),
    props: { login: "https://api.cs.mrg.com.pe/api-sec02-group02/ti/auth" },
  },
  {
    path: "/panel",
    name: "TIDashboard",
    component: () => import("../components/Panel.vue"),
  },
  {
    path: "/proyecciones",
    name: "Proyecciones",
    component: () => import("../components/Proyecciones.vue"),
  },
  {
    path: "/noautorizado",
    name: "NoAutorizado",
    component: () => import("../components/NoAutorizado.vue"),
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
