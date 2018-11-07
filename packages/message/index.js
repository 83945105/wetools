import {Element} from '../message/src/element.js';
import {WeView} from '../message/src/weview.js';
import {MessageOptions} from "./src/message.js";
import {isArray, isString, deepAssign} from "../src/utils/util.js";

const Message = {

  Element: Element,

  WeView: WeView,

  install(Vue, {use = WeView, alias = "$Message", options} = {use: WeView, alias: "$Message"}) {
    deepAssign(MessageOptions, options);
    let msg = new use();

    let message = function (...opts) {
      return msg.open(opts);
    };
    message.open = function (...opts) {
      return msg.open(opts);
    };
    message.success = function (...opts) {
      return msg.success(opts);
    };
    message.fail = function (...opts) {
      return msg.fail(opts);
    };
    message.error = function (...opts) {
      return msg.error(opts);
    };
    message.info = function (...opts) {
      return msg.info(opts);
    };
    message.warn = function (...opts) {
      return msg.warn(opts);
    };
    message.close = function (instance) {
      msg.close(instance);
    };
    message.closeAll = function () {
      msg.closeAll();
    };

    if (isString(alias)) {
      Vue.prototype[alias] = message;
    } else if (isArray(alias)) {
      for (let idx in alias) {
        Vue.prototype[alias[idx]] = message;
      }
    }
  }
};

export default Message;
