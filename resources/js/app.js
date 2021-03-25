require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { Api, formatLocation, route, vueRoute } from './helpers';
import Main from './layouts/Main';
import UserProfile from './pages/UserProfile';
import Products from './pages/Products';
import Login from './pages/Login';
import Orders from './pages/Orders';
import { method } from 'lodash';

Vue.use(BootstrapVue);
Vue.use(VueRouter);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const User = { template: `<h1>test</h1>` };
const props = () => ({ store: (window.app && window.app.$data) || {} });

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Products, props },
    { path: '/login', component: Login, props },
    { path: '/profile', component: UserProfile, props },
    { path: '/orders', component: Orders, props }
  ]
});

Vue.component('v-debug', {
  props: ['data'],
  template: `<pre style="text-align:left;" v-if="$root.debug">{{ data }}</pre>`
});

Vue.component('v-data', {
  props: ['data'],
  template: `<pre style="text-align:left;">{{ data }}</pre>`
});

window.app = new Vue({
  router,
  render: h => h(Main),
  data: () => ({
    me: { loading: true },
    products: { loading: true },
    orders: { loading: true },
    emptyState: {
      me: {},
      products: { loading: true },
      orders: { loading: true },
    },
    debug: false,
  }),
  mounted() {
    this.loadAppData()
  },
  updated() {
    this.loadAppData()
  },
  methods: {
    loadAppData() {
      this.getMe().then((res) => {
        this.getProducts()
        this.getOrders()
      })
    },
    logout() {
      axios.post('logout').then(res => {
        const emptyState = app.emptyState
        Object.keys(emptyState).forEach(key => {
          app[key] = emptyState[key]
        })
        app.$router.push('/login')
      });
    },
    getMe() {
      return Api.getMe().then(({ data }) =>
        app.me = data
      );
    },
    getProducts(payload = {}) {
      const pay = {
        query: {
          admin_id: app.me.id,
        },
        ...payload
      }
      return Api.getProducts(pay).then(({ data }) =>
        setTimeout(() => {
          app.products = data
        }, 800)
      );
    },
    getOrders(payload = {}) {
      const pay = {
        query: {
          admin_id: app.me.id,
        },
        ...payload
      }
      return Api.getOrders(pay).then(({ data }) =>
        setTimeout(() => {
          app.orders = data
        }, 800)
      );
    },
  }
}).$mount('#vue-app');
