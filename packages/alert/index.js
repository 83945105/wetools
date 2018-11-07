import {WeView} from '../alert/src/weview.js';
import {AlertOptions} from "./src/alert.js";
import {isArray, isString, deepAssign} from "../src/utils/util.js";

const Alert = {

  WeView: WeView,

  install(Vue, {use = WeView, alias = "$Alert", options} = {use: WeView, alias: "$Alert"}) {
    deepAssign(AlertOptions, options);
    let alt = new use();

    let alert = function (...opts) {
      return alt.open(opts);
    };
    alert.open = function (...opts) {
      return alt.open(opts);
    };
    alert.success = function (...opts) {
      return alt.success(opts);
    };
    alert.fail = function (...opts) {
      return alt.fail(opts);
    };
    alert.error = function (...opts) {
      return alt.error(opts);
    };
    alert.info = function (...opts) {
      return alt.info(opts);
    };
    alert.warn = function (...opts) {
      return alt.warn(opts);
    };
    alert.close = function (instance) {
      alt.close(instance);
    };
    alert.closeAll = function () {
      alt.closeAll();
    };

    if (isString(alias)) {
      Vue.prototype[alias] = alert;
    } else if (isArray(alias)) {
      for (let idx in alias) {
        Vue.prototype[alias[idx]] = alert;
      }
    }
  }
};

export default Alert;
