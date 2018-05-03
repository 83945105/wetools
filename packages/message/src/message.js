import {paramsMatching} from "../../../src/utils/util";

export const DefaultMessageOptions = {
  iconClass: undefined,
  html: false,
  customClass: undefined,
  duration: 3000,
  showClose: false,
  center: false,
  onClose() {
  }
};

export const MessageOptions = Object.assign({message: ''}, DefaultMessageOptions);

export const MessageType = {
  /** 失败 */
  FAIL: 0,
  /** 成功 */
  SUCCESS: 1,
  /** 警告 */
  WARN: 2,
  /** 信息 */
  INFO: 3,
  /** 错误 */
  ERROR: 4,
  /** 需要登录 */
  NEED_LOGIN: 5,
  /** 没有权限 */
  NO_AUTHORITY: 6,
  /** 找不到 */
  NOT_FOUND: 404
};

export class Message {

  open(...args) {
    return paramsMatching([{
      name: 'message',
      type: 'string',
      count: 1,
      default: MessageOptions.message
    }, {
      name: 'iconClass',
      type: 'string',
      count: 3,
      default: MessageOptions.iconClass
    }, {
      name: 'html',
      type: 'boolean',
      count: 3,
      default: MessageOptions.html
    }, {
      name: 'customClass',
      type: 'string',
      count: 2,
      default: MessageOptions.customClass
    }, {
      name: 'duration',
      type: 'number',
      count: 1,
      default: MessageOptions.duration
    }, {
      name: 'showClose',
      type: 'boolean',
      count: 1,
      default: MessageOptions.showClose
    }, {
      name: 'center',
      type: 'boolean',
      count: 2,
      default: MessageOptions.center
    }, {
      name: 'onClose',
      type: 'function',
      count: 1,
      default: MessageOptions.onClose
    }], args);
  };

  success(...args) {
    return paramsMatching([{
      name: 'message',
      type: 'string',
      count: 1,
      default: MessageOptions.message
    }, {
      name: 'iconClass',
      type: 'string',
      count: 3,
      default: MessageOptions.iconClass
    }, {
      name: 'html',
      type: 'boolean',
      count: 3,
      default: MessageOptions.html
    }, {
      name: 'customClass',
      type: 'string',
      count: 2,
      default: MessageOptions.customClass
    }, {
      name: 'duration',
      type: 'number',
      count: 1,
      default: MessageOptions.duration
    }, {
      name: 'showClose',
      type: 'boolean',
      count: 1,
      default: MessageOptions.showClose
    }, {
      name: 'center',
      type: 'boolean',
      count: 2,
      default: MessageOptions.center
    }, {
      name: 'onClose',
      type: 'function',
      count: 1,
      default: MessageOptions.onClose
    }], args);
  };

  fail(...args) {
    return paramsMatching([{
      name: 'message',
      type: 'string',
      count: 1,
      default: MessageOptions.message
    }, {
      name: 'iconClass',
      type: 'string',
      count: 3,
      default: MessageOptions.iconClass
    }, {
      name: 'html',
      type: 'boolean',
      count: 3,
      default: MessageOptions.html
    }, {
      name: 'customClass',
      type: 'string',
      count: 2,
      default: MessageOptions.customClass
    }, {
      name: 'duration',
      type: 'number',
      count: 1,
      default: MessageOptions.duration
    }, {
      name: 'showClose',
      type: 'boolean',
      count: 1,
      default: MessageOptions.showClose
    }, {
      name: 'center',
      type: 'boolean',
      count: 2,
      default: MessageOptions.center
    }, {
      name: 'onClose',
      type: 'function',
      count: 1,
      default: MessageOptions.onClose
    }], args);
  };

  error(...args) {
    return paramsMatching([{
      name: 'message',
      type: 'string',
      count: 1,
      default: MessageOptions.message
    }, {
      name: 'iconClass',
      type: 'string',
      count: 3,
      default: MessageOptions.iconClass
    }, {
      name: 'html',
      type: 'boolean',
      count: 3,
      default: MessageOptions.html
    }, {
      name: 'customClass',
      type: 'string',
      count: 2,
      default: MessageOptions.customClass
    }, {
      name: 'duration',
      type: 'number',
      count: 1,
      default: MessageOptions.duration
    }, {
      name: 'showClose',
      type: 'boolean',
      count: 1,
      default: MessageOptions.showClose
    }, {
      name: 'center',
      type: 'boolean',
      count: 2,
      default: MessageOptions.center
    }, {
      name: 'onClose',
      type: 'function',
      count: 1,
      default: MessageOptions.onClose
    }], args);
  };

  warn(...args) {
    return paramsMatching([{
      name: 'message',
      type: 'string',
      count: 1,
      default: MessageOptions.message
    }, {
      name: 'iconClass',
      type: 'string',
      count: 3,
      default: MessageOptions.iconClass
    }, {
      name: 'html',
      type: 'boolean',
      count: 3,
      default: MessageOptions.html
    }, {
      name: 'customClass',
      type: 'string',
      count: 2,
      default: MessageOptions.customClass
    }, {
      name: 'duration',
      type: 'number',
      count: 1,
      default: MessageOptions.duration
    }, {
      name: 'showClose',
      type: 'boolean',
      count: 1,
      default: MessageOptions.showClose
    }, {
      name: 'center',
      type: 'boolean',
      count: 2,
      default: MessageOptions.center
    }, {
      name: 'onClose',
      type: 'function',
      count: 1,
      default: MessageOptions.onClose
    }], args);
  };

  info(...args) {
    return paramsMatching([{
      name: 'message',
      type: 'string',
      count: 1,
      default: MessageOptions.message
    }, {
      name: 'iconClass',
      type: 'string',
      count: 3,
      default: MessageOptions.iconClass
    }, {
      name: 'html',
      type: 'boolean',
      count: 3,
      default: MessageOptions.html
    }, {
      name: 'customClass',
      type: 'string',
      count: 2,
      default: MessageOptions.customClass
    }, {
      name: 'duration',
      type: 'number',
      count: 1,
      default: MessageOptions.duration
    }, {
      name: 'showClose',
      type: 'boolean',
      count: 1,
      default: MessageOptions.showClose
    }, {
      name: 'center',
      type: 'boolean',
      count: 2,
      default: MessageOptions.center
    }, {
      name: 'onClose',
      type: 'function',
      count: 1,
      default: MessageOptions.onClose
    }], args);
  };


}
