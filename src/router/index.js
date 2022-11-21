import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

const router = createRouter({
  //指定采用的模式（hash模式）
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home", // 让初识路由重定向到/home
    },
    {
      name: "home",
      path: "/home/",
      component: () => import("../views/home.vue"),
      children: [
        {
          path: 1,
          component: () => import("../views/home1.vue"),
        },
        {
          path: 2,
          component: () => import("../views/home2.vue"),
        },
      ],
    },
    {
      name: "about",
      path: "/about",
      component: () => import("../views/about.vue"),
    },
    {
      name: "user",
      path: "/user/:id",
      component: () => import("../views/user.vue"),
    },
    {
      name: "login",
      path: "/login", // 匹配上面的路由路径中没有的路由
      //   path: "/:pathMatch(.*)*", 将$route.params.pathMatch获得的数据以/为分隔符解析为数组的格式
      component: () => import("../views/login.vue"),
    },
    {
      name: "order",
      path: "/order", // 匹配上面的路由路径中没有的路由
      //   path: "/:pathMatch(.*)*", 将$route.params.pathMatch获得的数据以/为分隔符解析为数组的格式
      component: () => import("../views/order.vue"),
    },
    {
      name: "notfound",
      path: "/:pathMatch(.*)", // 匹配上面的路由路径中没有的路由
      //   path: "/:pathMatch(.*)*", 将$route.params.pathMatch获得的数据以/为分隔符解析为数组的格式
      component: () => import("../views/notfound.vue"),
    },
    //路由懒加载，只有需要加载路由切换的后的组件时才进行加载组件
  ],
});

let isadmin = true;
if (isadmin) {
  router.addRoute({
    path: "/admin",
    component: () => import("../views/admin.vue"),
  });
}

router.beforeEach((to, from) => {
  if (to.name == "order" && !localStorage.getItem("token")) return "/login";
});
export default router;
