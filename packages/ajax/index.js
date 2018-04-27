import {Axios} from '../ajax/src/axios';

const Ajax = {
  install(Vue, target = new Axios()) {
    Vue.prototype.$Ajax = target;
    Vue.prototype.$ajax = target;
    Vue.prototype.$AJAX = target;
  }
};

export default Ajax;
