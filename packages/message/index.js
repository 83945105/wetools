import {Element} from '../message/src/element.js';
import {Element as ElementMessage} from '../message/src/element.js';
import {MessageOptions} from "./src/message";
import {isArray, isString} from "../../src/utils/util";

const Message = {

  Element: Element,

  install(Vue, {use = Element, alias = "$message", options} = {use: Element, alias: "$message"}) {
    Object.assign(MessageOptions, options);
    let msg = new use();
    if (isString(alias)) {
      Vue.prototype[alias] = msg;
    } else if (isArray(alias)) {
      for (let name of alias) {
        Vue.prototype[name] = msg;
      }
    }
    if (msg instanceof ElementMessage) {
      import('element-ui/lib/theme-chalk/index.css');
    }
  }
};

export default Message;
