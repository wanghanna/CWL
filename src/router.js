import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/idx",
      name: "idx",
      component: () => import("./views/idx.vue")
    },
    {
      path: "/product",
      name: "product",
      component: () => import("./views/Product.vue")
    },
    {
      path: "/light",
      name: "light",
      component: () => import("./views/light.vue")
    },
    {
      path: "/component",
      name: "component",
      component: () => import("./views/component.vue")
    },
    {
      path: "/knowledge",
      name: "knowledge",
      component: () => import("./views/knowledge.vue")
    },
    {
      path: "/0_testPage",
      name: "0_testPage",
      component: () => import("./views/0_testPage.vue")
    },
    // {
    //   path: "/manager",
    //   name: "manager",
    //   component: () => import("./views/manager.vue")
    // }
  ]
});
