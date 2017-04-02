import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import 'common/sass/index.scss';
// 路由
Vue.use(VueRouter);
// ajax
Vue.use(VueResource);

let app = Vue.extend(App);

let router = new VueRouter({
  // 配置项：选中状态class名
  linkActiveClass: 'active'
});
// 配置路由
router.map({
  '/goods': {
    component: goods
  },
  '/ratings': {
    component: ratings
  },
  '/seller': {
    component: seller
  }
});
router.start(app, '#app');
// 刷新后直接到goods页面上，即默认选项
router.go('/goods');
