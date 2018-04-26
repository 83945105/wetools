// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from './Index'
import router from './router'

Vue.config.productionTip = false;

import DemoBlock from './components/demo-block';
Vue.component(DemoBlock.name, DemoBlock);

import 'weview/lib/theme-chalk/index.css';
import 'weview/lib/web/theme-chalk/index.css';

import weview from 'weview';

Vue.use(weview);

/* eslint-disable no-new */
new Vue({
  el: '#index',
  router,
  components: {Index},
  template: '<Index/>'
});
