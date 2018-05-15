import {Element} from '../message/src/element.js';
import {WeView} from '../message/src/weview.js';
import {MessageOptions} from "./src/message.js";
import {isArray, isString} from "../../src/utils/util.js";

const Message = {

  Element: Element,

  WeView: WeView,

  install(Vue, {use = WeView, alias = "$message", options} = {use: WeView, alias: "$message"}) {
    Object.assign(MessageOptions, options);
    let msg = new use();
    if (isString(alias)) {
      Vue.prototype[alias] = msg;
    } else if (isArray(alias)) {
      for (let name of alias) {
        Vue.prototype[name] = msg;
      }
    }
  }
};

export default Message;
