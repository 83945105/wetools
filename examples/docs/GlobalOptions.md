# 完整的全局配置列表如下:

```javascript

import wetools from '../packages/index.js';
import {Ajax, DataParser, Message} from '../packages/index.js';
import 'weview/lib/theme-chalk/we-index.css';//引入weview组件库的样式文件
import('element-ui/lib/theme-chalk/index.css');//引入element-ui组件库的样式文件
Vue.use(wetools, {
  Message: {//消息提示
    use: Message.Element,//使用element-ui的消息提示组件
    alias: "$message",//调用别名,支持字符串和数组
    options: {
      iconClass: undefined,//自定义图标样式
      html: false,//是否将文本内容转义为html
      customClass: undefined,//自定义样式名
      duration: 3000,//持续时间，设置0不自动关闭
      showClose: false,//是否显示关闭按钮
      center: false,//文本是否居中
      onClose() {//点击关闭按钮时的回调
      }
    }
  },
  Ajax: {
    use: Ajax.Axios,//使用axios发送ajax
    alias: ["$ajax", "$Ajax", "$AJAX"],//调用别名,支持字符串和数组
    options: {
      baseURL: 'http://192.168.0.136:8080/ssm-vue-frame',//URL默认前缀
      params: {},//请求参数
      headers: {},//请求头信息
      timeout: 60000,//请求持续时间
      showWaitPrompt: true,//是否开启等待提示功能
      waitPromptTime: 10000,//等待提示时间
      waitPromptText: '您的网速貌似不太给力...',//等待提示内容
      responseType: 'json',//响应类型
      messageOptions: {//相关消息提示配置
        //TODO 同Message配置
      },
      dataParserOptions: {//解析器配置
        //TODO 同DataParser配置
      }
    }
  },
  DataParser: {
    use: DataParser.DataView,//使用DataView解析器,该解析器需要后台数据格式支持
    alias: "$dataParser",//调用别名,支持字符串和数组
    options: {
      messageOptions: {//消息配置
        use: Message.WeView,//使用WeView组件库进行消息提示
        options: {
          //TODO 同Message配置
        }
      },
      successOptions: {//成功状态配置
        close:false,//是否显示消息提示
        callback(){},//回调函数
        //TODO 其余同Message配置
      },
      failOptions: {//失败状态配置
        close:false,//是否显示消息提示
        callback(){},//回调函数
        //TODO 其余同Message配置
      },
      errorOptions: {//错误状态配置
        close:false,//是否显示消息提示
        callback(){},//回调函数
        //TODO 其余同Message配置
      },
      infoOptions: {//信息提示状态配置
        close:false,//是否显示消息提示
        callback(){},//回调函数
        //TODO 其余同Message配置
      },
      warnOptions: {//警告状态配置
        close:false,//是否显示消息提示
        callback(){},//回调函数
        //TODO 其余同Message配置
      },
      notSuccessOptions: {//非成功状态配置
        close:false,//是否显示消息提示
        callback(){},//回调函数
        //TODO 其余同Message配置
      },
      finallyOptions: {//无论如何都会触发的配置
        close:false,//是否显示消息提示
        callback(){},//回调函数
        //TODO 其余同Message配置
      },
      needLoginOptions: {//需要登录状态配置
        close:false,//是否显示消息提示
        callback(){},//回调函数
        //TODO 其余同Message配置
      },
      noAuthorityOptions: {//无权状态配置
        close:false,//是否显示消息提示
        callback(){},//回调函数
        //TODO 其余同Message配置
      },
      notFoundOptions: {//404状态配置
        close:false,//是否显示消息提示
        callback(){},//回调函数
        //TODO 其余同Message配置
      }
    }
  }
});

```
