import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import { auth } from "@/services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import store from "../store";
// const store = useStore();

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Login.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/Profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "Profile" */ "../views/ProfileScreen.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/Manage",
    name: "Manage",
    component: () =>
      import(/* webpackChunkName: "Manage" */ "../views/ManageProfile.vue"),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.getIslogin) {
      next();
      return;
    } else {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          let data = {
            islogin: true,
            uid: user.uid,
            email: user.email,
          };
          store.dispatch("Login", data);
          next();
          return;
        }
      });
    }
    next("/");
  } else {
    next();
  }
});

export default router;
