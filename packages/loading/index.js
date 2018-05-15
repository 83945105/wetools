import {Element} from '../loading/src/element.js';
import {WeView} from '../loading/src/weview.js';
import {LoadingOptions} from "./src/loading.js";
import {isArray, isString} from "../../src/utils/util.js";

const Loading = {

  Element: Element,

  WeView: WeView,

  install(Vue, {use = WeView, alias = "$loading", options} = {use: WeView, alias: "$loading"}) {
    Object.assign(LoadingOptions, options);
    let loading = new use();
    if (isString(alias)) {
      Vue.prototype[alias] = loading;
    } else if (isArray(alias)) {
      for (let name of alias) {
        Vue.prototype[name] = loading;
      }
    }
  }
};

export default Loading;
