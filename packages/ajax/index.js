import {Axios} from './src/axios.js';
import {AjaxOptions} from "./src/ajax.js";
import {deepAssign, isArray, isString} from "../src/utils/util.js";

const Ajax = {

  Axios: Axios,

  install(Vue, {use = Axios, alias = "$Ajax", options} = {use: Axios, alias: "$Ajax"}) {
    deepAssign(AjaxOptions, options);
    let a = new use();
    if (isString(alias)) {
      Vue.prototype[alias] = a;
    } else if (isArray(alias)) {
      for (let idx in alias) {
        Vue.prototype[alias[idx]] = a;
      }
    }
  }
};

export default Ajax;
