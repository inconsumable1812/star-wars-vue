import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import PlanetsView from '../views/PlanetsView.vue';
import PeopleView from '../views/PeopleView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'planets',
    component: PlanetsView
  },
  {
    path: '/people/:planetName',
    name: 'people',
    component: PeopleView
  },
  {
    path: '/:notFound(.*)',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
