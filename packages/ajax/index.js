import Axios from '../ajax/src/axios.js';

const Ajax = {

  install(Vue, {use = Axios, options} = {use: Axios}) {
    use.setOptions(options);
    Vue.prototype.$Ajax = use;
    Vue.prototype.$ajax = use;
    Vue.prototype.$AJAX = use;
  }
};

export default Ajax;
