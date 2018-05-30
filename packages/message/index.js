import {Element} from '../message/src/element.js';
import {WeView} from '../message/src/weview.js';
import {MessageOptions} from "./src/message.js";
import {isArray, isString} from "../src/utils/util.js";

const Message = {

  Element: Element,

  WeView: WeView,

  install(Vue, {use = WeView, alias = "$message", options} = {use: WeView, alias: "$message"}) {
    Object.assign(MessageOptions, options);
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
      for (let name of alias) {
        Vue.prototype[name] = message;
      }
    }
  }
};

export default Message;
