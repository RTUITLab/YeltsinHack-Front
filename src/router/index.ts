import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Statistics from "../views/Statistics/Statistics.vue";
import EditingAreas from "../views/EditingAreas/EditingAreas.vue";
import VisitMap from "../views/VisitMap/VisitMap.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {
    path: "/",
    name: "statisticts",
    component: Statistics,
  },
  {
    path: "/editing-areas",
    name: "editing-areas",
    component: EditingAreas,
  },
  {
    path: "/visit-map",
    name: "visit-map",
    component: VisitMap,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
