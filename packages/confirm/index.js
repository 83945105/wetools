import {WeView} from '../confirm/src/weview.js';
import {ConfirmOptions} from "./src/confirm.js";
import {isArray, isString, deepAssign} from "../src/utils/util.js";

const Confirm = {

  WeView: WeView,

  install(Vue, {use = WeView, alias = "$confirm", options} = {use: WeView, alias: "$confirm"}) {
    deepAssign(ConfirmOptions, options);
    let alt = new use();

    let confirm = function (...opts) {
      return alt.open(opts);
    };
    confirm.open = function (...opts) {
      return alt.open(opts);
    };
    confirm.close = function (instance) {
      alt.close(instance);
    };
    confirm.closeAll = function () {
      alt.closeAll();
    };

    if (isString(alias)) {
      Vue.prototype[alias] = confirm;
    } else if (isArray(alias)) {
      for (let idx in alias) {
        Vue.prototype[alias[idx]] = confirm;
      }
    }
  }
};

export default Confirm;
