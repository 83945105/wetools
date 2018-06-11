// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from './Index'
import router from './router'

Vue.config.productionTip = false;

import DemoBlock from './components/demo-block';

Vue.component(DemoBlock.name, DemoBlock);

import wetemplate from 'wetemplate';
import 'wetemplate/lib/theme-chalk/index.css';
Vue.use(wetemplate);

import weview from 'weview';
import 'weview/lib/theme-chalk/index.css';//引入weview组件库的样式文件
Vue.use(weview);

// import ElementUI from 'element-ui';
// Vue.use(ElementUI);
// import('element-ui/lib/theme-chalk/index.css');//引入element-ui组件库的样式文件

import wetools from '../packages/index.js';
import {Ajax, DataParser, Message} from '../packages/index.js';

// import wetools from '../lib/index.js';
// import {Ajax, DataParser, Message} from '../lib/index.js';

Vue.use(wetools, {
/*  Message: {//消息提示
    //use: Message.Element,//使用element-ui的消息提示组件
    options: {
      html: false,//是否将message作为HTML片段处理
      customClass: undefined,//自定义样式名
      duration: 3000,//持续时间，设置0不自动关闭
      showClose: false,//是否显示关闭按钮
      center: false,//文本是否居中
      onClose() {//点击关闭按钮时的回调
      }
    }
  },*/
  Ajax: {
    // use: Ajax.Axios,//使用axios发送ajax
    options: {
      baseURL: '/api',//URL默认前缀
      withCredentials:true,//允许跨域携带cookie
      showWaitPrompt: true,
      waitPromptTime: 3000,
      waitPromptText: '您的网速貌似不太给力...',
      messageOptions: {//相关消息提示配置
        //TODO 同Message配置
      },
      dataParserOptions: {//解析器配置
        use: DataParser.DataView
        //TODO 同DataParser配置
      }
    }
  },
  /*DataParser: {
    use: DataParser.DataView,//使用DataView解析器,该解析器需要后台数据格式支持
    options: {
      messageOptions: {//消息配置
        use: Message.WeView,//使用WeView组件库进行消息提示
        options: {
          //TODO 同Message配置
        }
      },
      successOptions: {//成功状态配置
        close: false,//是否显示消息提示
        callback() {
        },//回调函数
        //TODO 其余同Message配置
      },
      failOptions: {//失败状态配置
        close: false,//是否显示消息提示
        callback() {
        },//回调函数
        //TODO 其余同Message配置
      },
      errorOptions: {//错误状态配置
        close: false,//是否显示消息提示
        callback() {
        },//回调函数
        //TODO 其余同Message配置
      },
      infoOptions: {//信息提示状态配置
        close: false,//是否显示消息提示
        callback() {
        },//回调函数
        //TODO 其余同Message配置
      },
      warnOptions: {//警告状态配置
        close: false,//是否显示消息提示
        callback() {
        },//回调函数
        //TODO 其余同Message配置
      },
      notSuccessOptions: {//非成功状态配置
        close: false,//是否显示消息提示
        callback() {
        },//回调函数
        //TODO 其余同Message配置
      },
      finallyOptions: {//无论如何都会触发的配置
        close: false,//是否显示消息提示
        callback() {
        },//回调函数
        //TODO 其余同Message配置
      },
      needLoginOptions: {//需要登录状态配置
        close: false,//是否显示消息提示
        callback() {
        },//回调函数
        //TODO 其余同Message配置
      },
      noAuthorityOptions: {//无权状态配置
        close: false,//是否显示消息提示
        callback() {
        },//回调函数
        //TODO 其余同Message配置
      },
      notFoundOptions: {//404状态配置
        close: false,//是否显示消息提示
        callback() {
        },//回调函数
        //TODO 其余同Message配置
      }
    }
  }*/
});

/* eslint-disable no-new */
new Vue({
  el: '#index',
  router,
  components: {Index},
  template: '<Index/>'
});
