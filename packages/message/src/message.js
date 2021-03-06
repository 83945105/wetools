import {paramsMatching} from "../../src/utils/util.js";

export const DefaultMessageOptions = {
  html: false,
  customClass: undefined,
  duration: 3000,
  showClose: false,
  center: false,
  onClose() {
  }
};

const merge = require('webpack-merge');

export const MessageOptions = merge({message: ''}, DefaultMessageOptions);

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

function matchArgs(args) {
  return paramsMatching([{
    name: 'message',
    type: 'string',
    count: 1,
    default: MessageOptions.message
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
}

export class Message {

  open(args) {
    return matchArgs(args);
  };

  success(args) {
    return matchArgs(args);
  };

  fail(args) {
    return matchArgs(args);
  };

  error(args) {
    return matchArgs(args);
  };

  warn(args) {
    return matchArgs(args);
  };

  info(args) {
    return matchArgs(args);
  };

  close(instance) {
  };

  closeAll() {
  };
}
