import Vue from 'vue';
import Router from 'vue-router';

import TestIndexView from '@/views/TestIndexView';
import TestIframeView from '@/views/TestIframeViewView';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView,
    },
    {
      path: 'test-route',
      component: TestRouteView,
    }
  ],
});

export default router;