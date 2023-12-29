import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeFirst from "../views/HomeFirst.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeFirst,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
