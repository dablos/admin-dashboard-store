import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../views/Products.vue"),
    },
    {
      path: "/account",
      name: "account",
      component: () => import("../views/Account.vue"),
    },
    {
      path: "/product",
      name: "product",
      component: () => import("../views/Product.vue"),
    },
  ],
});

export default router;
