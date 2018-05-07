// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from './Index'
import router from './router'

Vue.config.productionTip = false;

import DemoBlock from './components/demo-block';
Vue.component(DemoBlock.name, DemoBlock);

import 'weview/lib/theme-chalk/we-index.css';
import 'weview/lib/web/theme-chalk/index.css';

import weview from 'weview';
Vue.use(weview);

import wetools from '../packages/index.js';
import {DataParser, Message} from '../packages/index.js';
import('element-ui/lib/theme-chalk/index.css');
Vue.use(wetools, {
  Ajax: {
    alias: ["$ajax", "$Ajax", "$AJAX"],
    options: {
      baseURL: 'http://192.168.0.136:8081/ssm-vue-frame',
      messageOptions: {
        options: {
          duration: 3000
        }
      },
      dataParserOptions: {
        use: DataParser.DataView,
        options: {
          errorOptions: {
            close:true
          },
          needLoginOptions: {
            callback() {
              alert(`该操作需要登陆后进行`);
            }
          }
        }
      }
    }
  },
  Message: {
    options: {
      duration: 1000,
      showClose: true
    }
  },
  DataParser: {
    options: {
      successOptions: {
        duration: 5000
      }
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#index',
  router,
  components: {Index},
  template: '<Index/>'
});
