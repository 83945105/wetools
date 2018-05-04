import {paramsMatching} from "../../../src/utils/util.js";
import {Element} from "../../message/src/element.js";
import {DefaultMessageOptions} from "../../message/src/message";
import {deepAssign} from "../../../src/utils/util";

export const DefaultParserOptions = {
  successOptions: Object.assign({
    close: false,
    callback() {
    }
  }, DefaultMessageOptions),
  failOptions: Object.assign({
    close: false,
    callback() {
    }
  }, DefaultMessageOptions),
  errorOptions: Object.assign({
    close: false,
    callback() {
    }
  }, DefaultMessageOptions),
  infoOptions: Object.assign({
    close: false,
    callback() {
    }
  }, DefaultMessageOptions),
  warnOptions: Object.assign({
    close: false,
    callback() {
    }
  }, DefaultMessageOptions),
  notSuccessOptions: Object.assign({
    close: true,
    callback() {
    }
  }, DefaultMessageOptions),
  finallyOptions: Object.assign({
    close: true,
    callback() {
    }
  }, DefaultMessageOptions),
  needLoginOptions: Object.assign({
    close: true,
    callback() {
    }
  }, DefaultMessageOptions),
  noAuthorityOptions: Object.assign({
    close: true,
    callback() {
    }
  }, DefaultMessageOptions),
  notFoundOptions: Object.assign({
    close: true,
    callback() {
    }
  }, DefaultMessageOptions),
  messageOptions: {
    use: Element,
    options: Object.assign({}, DefaultMessageOptions)
  }
};

export const ParserOptions = {
  successOptions: Object.assign({
    close: false,
    callback() {
    }
  }, DefaultMessageOptions),
  failOptions: Object.assign({
    close: false,
    callback() {
    }
  }, DefaultMessageOptions),
  errorOptions: Object.assign({
    close: false,
    callback() {
    }
  }, DefaultMessageOptions),
  infoOptions: Object.assign({
    close: false,
    callback() {
    }
  }, DefaultMessageOptions),
  warnOptions: Object.assign({
    close: false,
    callback() {
    }
  }, DefaultMessageOptions),
  notSuccessOptions: Object.assign({
    close: true,
    callback() {
    }
  }, DefaultMessageOptions),
  finallyOptions: Object.assign({
    close: true,
    callback() {
    }
  }, DefaultMessageOptions),
  needLoginOptions: Object.assign({
    close: true,
    callback() {
    }
  }, DefaultMessageOptions),
  noAuthorityOptions: Object.assign({
    close: true,
    callback() {
    }
  }, DefaultMessageOptions),
  notFoundOptions: Object.assign({
    close: true,
    callback() {
    }
  }, DefaultMessageOptions),
  messageOptions: {
    use: Element,
    options: Object.assign({}, DefaultMessageOptions)
  }
};

const merge = require('webpack-merge');

export class Parser {

  _options = undefined;

  constructor(options = {}) {
    this._options = deepAssign({}, ParserOptions, options);
  }

  new() {
    alert(`未配置DataParser`);
  };


  parse(data, res) {
    alert(`没有设置使用的DataParser`);
    return this;
  };

  success(...args) {
    let opts = paramsMatching([{
      name: 'close',
      type: 'boolean',
      count: 1
    }, {
      name: 'callback',
      type: 'function',
      count: 1
    }, {
      name: 'message',
      type: 'string',
      count: 1,
      default: 'success'
    }, {
      name: 'iconClass',
      type: 'string',
      count: 3
    }, {
      name: 'html',
      type: 'boolean',
      count: 4
    }, {
      name: 'customClass',
      type: 'string',
      count: 2
    }, {
      name: 'duration',
      type: 'number',
      count: 1
    }, {
      name: 'showClose',
      type: 'boolean',
      count: 2
    }, {
      name: 'center',
      type: 'boolean',
      count: 3
    }, {
      name: 'onClose',
      type: 'function',
      count: 2
    }], args);
    this._options.successOptions = merge(this._options.successOptions, opts);
    return this;
  };

  fail(...args) {
    let opts = paramsMatching([{
      name: 'close',
      type: 'boolean',
      count: 1
    }, {
      name: 'callback',
      type: 'function',
      count: 1
    }, {
      name: 'message',
      type: 'string',
      count: 1,
      default: 'fail'
    }, {
      name: 'iconClass',
      type: 'string',
      count: 3
    }, {
      name: 'html',
      type: 'boolean',
      count: 4
    }, {
      name: 'customClass',
      type: 'string',
      count: 2
    }, {
      name: 'duration',
      type: 'number',
      count: 1
    }, {
      name: 'showClose',
      type: 'boolean',
      count: 2
    }, {
      name: 'center',
      type: 'boolean',
      count: 3
    }, {
      name: 'onClose',
      type: 'function',
      count: 2
    }], args);
    this._options.failOptions = merge(this._options.failOptions, opts);
    return this;
  };

  error(...args) {
    let opts = paramsMatching([{
      name: 'close',
      type: 'boolean',
      count: 1
    }, {
      name: 'callback',
      type: 'function',
      count: 1
    }, {
      name: 'message',
      type: 'string',
      count: 1,
      default: 'error'
    }, {
      name: 'iconClass',
      type: 'string',
      count: 3
    }, {
      name: 'html',
      type: 'boolean',
      count: 4
    }, {
      name: 'customClass',
      type: 'string',
      count: 2
    }, {
      name: 'duration',
      type: 'number',
      count: 1
    }, {
      name: 'showClose',
      type: 'boolean',
      count: 2
    }, {
      name: 'center',
      type: 'boolean',
      count: 3
    }, {
      name: 'onClose',
      type: 'function',
      count: 2
    }], args);
    this._options.errorOptions = merge(this._options.errorOptions, opts);
    return this;
  };

  info(...args) {
    let opts = paramsMatching([{
      name: 'close',
      type: 'boolean',
      count: 1
    }, {
      name: 'callback',
      type: 'function',
      count: 1
    }, {
      name: 'message',
      type: 'string',
      count: 1,
      default: 'info'
    }, {
      name: 'iconClass',
      type: 'string',
      count: 3
    }, {
      name: 'html',
      type: 'boolean',
      count: 4
    }, {
      name: 'customClass',
      type: 'string',
      count: 2
    }, {
      name: 'duration',
      type: 'number',
      count: 1
    }, {
      name: 'showClose',
      type: 'boolean',
      count: 2
    }, {
      name: 'center',
      type: 'boolean',
      count: 3
    }, {
      name: 'onClose',
      type: 'function',
      count: 2
    }], args);
    this._options.infoOptions = merge(this._options.infoOptions, opts);
    return this;
  };

  warn(...args) {
    let opts = paramsMatching([{
      name: 'close',
      type: 'boolean',
      count: 1
    }, {
      name: 'callback',
      type: 'function',
      count: 1
    }, {
      name: 'message',
      type: 'string',
      count: 1,
      default: 'warn'
    }, {
      name: 'iconClass',
      type: 'string',
      count: 3
    }, {
      name: 'html',
      type: 'boolean',
      count: 4
    }, {
      name: 'customClass',
      type: 'string',
      count: 2
    }, {
      name: 'duration',
      type: 'number',
      count: 1
    }, {
      name: 'showClose',
      type: 'boolean',
      count: 2
    }, {
      name: 'center',
      type: 'boolean',
      count: 3
    }, {
      name: 'onClose',
      type: 'function',
      count: 2
    }], args);
    this._options.warnOptions = merge(this._options.warnOptions, opts);
    return this;
  };

  notSuccess(...args) {
    let opts = paramsMatching([{
      name: 'close',
      type: 'boolean',
      count: 1
    }, {
      name: 'callback',
      type: 'function',
      count: 1
    }, {
      name: 'message',
      type: 'string',
      count: 1,
      default: 'notSuccess'
    }, {
      name: 'iconClass',
      type: 'string',
      count: 3
    }, {
      name: 'html',
      type: 'boolean',
      count: 4
    }, {
      name: 'customClass',
      type: 'string',
      count: 2
    }, {
      name: 'duration',
      type: 'number',
      count: 1
    }, {
      name: 'showClose',
      type: 'boolean',
      count: 2
    }, {
      name: 'center',
      type: 'boolean',
      count: 3
    }, {
      name: 'onClose',
      type: 'function',
      count: 2
    }], args);
    this._options.notSuccessOptions = merge(this._options.notSuccessOptions, opts);
    return this;
  };

  finally(...args) {
    let opts = paramsMatching([{
      name: 'close',
      type: 'boolean',
      count: 1
    }, {
      name: 'callback',
      type: 'function',
      count: 1
    }, {
      name: 'message',
      type: 'string',
      count: 1,
      default: 'finally'
    }, {
      name: 'iconClass',
      type: 'string',
      count: 3
    }, {
      name: 'html',
      type: 'boolean',
      count: 4
    }, {
      name: 'customClass',
      type: 'string',
      count: 2
    }, {
      name: 'duration',
      type: 'number',
      count: 1
    }, {
      name: 'showClose',
      type: 'boolean',
      count: 2
    }, {
      name: 'center',
      type: 'boolean',
      count: 3
    }, {
      name: 'onClose',
      type: 'function',
      count: 2
    }], args);
    this._options.finallyOptions = merge(this._options.finallyOptions, opts);
    return this;
  };

  needLogin(...args) {
    let opts = paramsMatching([{
      name: 'close',
      type: 'boolean',
      count: 1
    }, {
      name: 'callback',
      type: 'function',
      count: 1
    }, {
      name: 'message',
      type: 'string',
      count: 1,
      default: 'needLogin'
    }, {
      name: 'iconClass',
      type: 'string',
      count: 3
    }, {
      name: 'html',
      type: 'boolean',
      count: 4
    }, {
      name: 'customClass',
      type: 'string',
      count: 2
    }, {
      name: 'duration',
      type: 'number',
      count: 1
    }, {
      name: 'showClose',
      type: 'boolean',
      count: 2
    }, {
      name: 'center',
      type: 'boolean',
      count: 3
    }, {
      name: 'onClose',
      type: 'function',
      count: 2
    }], args);
    this._options.needLoginOptions = merge(this._options.needLoginOptions, opts);
    return this;
  };

  noAuthority(...args) {
    let opts = paramsMatching([{
      name: 'close',
      type: 'boolean',
      count: 1
    }, {
      name: 'callback',
      type: 'function',
      count: 1
    }, {
      name: 'message',
      type: 'string',
      count: 1,
      default: 'noAuthority'
    }, {
      name: 'iconClass',
      type: 'string',
      count: 3
    }, {
      name: 'html',
      type: 'boolean',
      count: 4
    }, {
      name: 'customClass',
      type: 'string',
      count: 2
    }, {
      name: 'duration',
      type: 'number',
      count: 1
    }, {
      name: 'showClose',
      type: 'boolean',
      count: 2
    }, {
      name: 'center',
      type: 'boolean',
      count: 3
    }, {
      name: 'onClose',
      type: 'function',
      count: 2
    }], args);
    this._options.noAuthorityOptions = merge(this._options.noAuthorityOptions, opts);
    return this;
  };

  notFound(...args) {
    let opts = paramsMatching([{
      name: 'close',
      type: 'boolean',
      count: 1
    }, {
      name: 'callback',
      type: 'function',
      count: 1
    }, {
      name: 'message',
      type: 'string',
      count: 1,
      default: '404'
    }, {
      name: 'iconClass',
      type: 'string',
      count: 3
    }, {
      name: 'html',
      type: 'boolean',
      count: 4
    }, {
      name: 'customClass',
      type: 'string',
      count: 2
    }, {
      name: 'duration',
      type: 'number',
      count: 1
    }, {
      name: 'showClose',
      type: 'boolean',
      count: 2
    }, {
      name: 'center',
      type: 'boolean',
      count: 3
    }, {
      name: 'onClose',
      type: 'function',
      count: 2
    }], args);
    this._options.notFoundOptions = merge(this._options.notFoundOptions, opts);
    return this;
  };

}
