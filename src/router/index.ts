import * as VueRouter from "vue-router";

export const routes = [
  {
    path: "/",
    component: () => import("../components/Layout.vue"),
    meta: {
      icon: "carbon:user-role",
      title: "第一級",
    },
    children: [
      {
        path: "/level",
        name: "Level",
        component: () => import("../components/MainContent.vue"),
        redirect: "/level/menu1/menu1-1",
        meta: {
          icon: "carbon:user-role",
          title: "第一級－１",
        },
        children: [
          {
            path: "menu1",
            name: "Menu1Demo",
            meta: {
              title: "第一級－１－１",
            },
            component: () => import("../components/MainContent.vue"),
          },
        ],
      },
      {
        path: "/level2",
        name: "Level2",
        component: () => import("../components/MainContent.vue"),
        meta: {
          icon: "carbon:user-role",
          title: "第一級－２－１",
        },
        children: [
          {
            path: "menu12",
            name: "Menu1Demo",
            meta: {
              title: "Menu12",
            },
            component: () => import("../components/MainContent.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/level",
    name: "Level",
    component: () => import("../components/MainContent.vue"),
    meta: {
      icon: "carbon:user-role",
      title: "第二級",
    },
  },
];

export default VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});
