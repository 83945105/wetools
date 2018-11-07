import {Element} from '../loading/src/element.js';
import {WeView} from '../loading/src/weview.js';
import {LoadingOptions} from "./src/loading.js";
import {isArray, isString, deepAssign} from "../src/utils/util.js";

const Loading = {

  Element: Element,

  WeView: WeView,

  install(Vue, {use = WeView, alias = "$Loading", options} = {use: WeView, alias: "$Loading"}) {
    deepAssign(LoadingOptions, options);
    let loading = new use();
    if (isString(alias)) {
      Vue.prototype[alias] = loading;
    } else if (isArray(alias)) {
      for (let idx in alias) {
        Vue.prototype[alias[idx]] = loading;
      }
    }
  }
};

export default Loading;
