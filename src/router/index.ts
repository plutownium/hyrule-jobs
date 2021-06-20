import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import AddJob from "../views/AddJob.vue";
import Test from "../views/Test.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/add",
    name: "Add Job",
    // component: () => import(/* webpackChunkName: "add" */ "../views/AddJob.vue")
    component: AddJob
  },
  {
    path: "/test",
    name: "foo",
    component: Test
  }
];

// todo: make the vue router send me to another page onclick. Specifically the AddJob vue, and then send me back
// once im done

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
