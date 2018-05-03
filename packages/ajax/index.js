import {Axios} from '../ajax/src/axios.js';
import {AjaxOptions} from "./src/ajax.js";
import {deepAssign, isArray, isString} from "../../src/utils/util.js";

const Ajax = {

  Axios: Axios,

  install(Vue, {use = Axios, alias = "$ajax", options} = {use: Axios, alias: "$ajax"}) {
    deepAssign(AjaxOptions, options);
    let a = new use();
    if (isString(alias)) {
      Vue.prototype[alias] = a;
    } else if (isArray(alias)) {
      for (let name of alias) {
        Vue.prototype[name] = a;
      }
    }
  }
};

export default Ajax;
