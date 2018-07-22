import Vue from 'vue';
import Router from 'vue-router';

import Index from '@/routes';
import ExchangeForm from '@/routes/exchange-form';
import Hello from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/exchange-form',
      name: 'ExchangeForm',
      component: ExchangeForm,
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello,
    },
  ],
});
