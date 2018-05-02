import {Element} from '../message/src/element.js';

const Message = {

  install(Vue, {use = new Element(), options} = {use: new Element()}) {
    use.setOptions(options);
    Vue.prototype.$message = use;
    if(use instanceof Element) {
      import('element-ui/lib/theme-chalk/index.css');
    }
  }
};

export default Message;
