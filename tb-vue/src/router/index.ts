import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/login/index.vue';
import File from '../views/project/index.vue';
import Demo from '../views/demo/index.vue';

Vue.use(VueRouter);

type RouteConfig = {
  path: string;
  name: string;
  component: any;
}

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/project',
    name: 'File',
    component: File,
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo,
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import(/* webpackChunkName: "error" */ '../views/Error.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
