import {paramsMatching} from "../../../src/utils/util.js";
import {Element} from "../../message/src/element.js";
import {DefaultMessageOptions} from "../../message/src/message";

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
    close: false,
    callback() {
    }
  }, DefaultMessageOptions),
  finallyOptions: Object.assign({
    close: false,
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
    close: false,
    callback() {
    }
  }, DefaultMessageOptions),
  finallyOptions: Object.assign({
    close: false,
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

  constructor() {
    this._options = merge({}, ParserOptions);
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
      count: 1,
      default: ParserOptions.successOptions.close
    }, {
      name: 'callback',
      type: 'function',
      count: 1,
      default: ParserOptions.successOptions.callback
    }, {
      name: 'message',
      type: 'string',
      count: 1,
      default: 'success'
    }, {
      name: 'iconClass',
      type: 'string',
      count: 3,
      default: ParserOptions.successOptions.iconClass
    }, {
      name: 'html',
      type: 'boolean',
      count: 4,
      default: ParserOptions.successOptions.html
    }, {
      name: 'customClass',
      type: 'string',
      count: 2,
      default: ParserOptions.successOptions.customClass
    }, {
      name: 'duration',
      type: 'number',
      count: 1,
      default: ParserOptions.successOptions.duration
    }, {
      name: 'showClose',
      type: 'boolean',
      count: 2,
      default: ParserOptions.successOptions.showClose
    }, {
      name: 'center',
      type: 'boolean',
      count: 3,
      default: ParserOptions.successOptions.center
    }, {
      name: 'onClose',
      type: 'function',
      count: 2,
      default: ParserOptions.successOptions.onClose
    }], args);
    Object.assign(this._options.successOptions, opts);
    return this;
  };

  fail(...args) {
    let opts = paramsMatching([{
      name: 'close',
      type: 'boolean',
      count: 1,
      default: ParserOptions.failOptions.close
    }, {
      name: 'callback',
      type: 'function',
      count: 1,
      default: ParserOptions.failOptions.callback
    }, {
      name: 'message',
      type: 'string',
      count: 1,
      default: 'fail'
    }, {
      name: 'iconClass',
      type: 'string',
      count: 3,
      default: ParserOptions.failOptions.iconClass
    }, {
      name: 'html',
      type: 'boolean',
      count: 4,
      default: ParserOptions.failOptions.html
    }, {
      name: 'customClass',
      type: 'string',
      count: 2,
      default: ParserOptions.failOptions.customClass
    }, {
      name: 'duration',
      type: 'number',
      count: 1,
      default: ParserOptions.failOptions.duration
    }, {
      name: 'showClose',
      type: 'boolean',
      count: 2,
      default: ParserOptions.failOptions.showClose
    }, {
      name: 'center',
      type: 'boolean',
      count: 3,
      default: ParserOptions.failOptions.center
    }, {
      name: 'onClose',
      type: 'function',
      count: 2,
      default: ParserOptions.failOptions.onClose
    }], args);
    Object.assign(this._options.failOptions, opts);
    return this;
  };

  error(...args) {
    let opts = paramsMatching([{
      name: 'close',
      type: 'boolean',
      count: 1,
      default: ParserOptions.errorOptions.close
    }, {
      name: 'callback',
      type: 'function',
      count: 1,
      default: ParserOptions.errorOptions.callback
    }, {
      name: 'message',
      type: 'string',
      count: 1,
      default: 'error'
    }, {
      name: 'iconClass',
      type: 'string',
      count: 3,
      default: ParserOptions.errorOptions.iconClass
    }, {
      name: 'html',
      type: 'boolean',
      count: 4,
      default: ParserOptions.errorOptions.html
    }, {
      name: 'customClass',
      type: 'string',
      count: 2,
      default: ParserOptions.errorOptions.customClass
    }, {
      name: 'duration',
      type: 'number',
      count: 1,
      default: ParserOptions.errorOptions.duration
    }, {
      name: 'showClose',
      type: 'boolean',
      count: 2,
      default: ParserOptions.errorOptions.showClose
    }, {
      name: 'center',
      type: 'boolean',
      count: 3,
      default: ParserOptions.errorOptions.center
    }, {
      name: 'onClose',
      type: 'function',
      count: 2,
      default: ParserOptions.errorOptions.onClose
    }], args);
    Object.assign(this._options.errorOptions, opts);
    return this;
  };

  info(...args) {
    let opts = paramsMatching([{
      name: 'close',
      type: 'boolean',
      count: 1,
      default: ParserOptions.infoOptions.close
    }, {
      name: 'callback',
      type: 'function',
      count: 1,
      default: ParserOptions.infoOptions.callback
    }, {
      name: 'message',
      type: 'string',
      count: 1,
      default: 'info'
    }, {
      name: 'iconClass',
      type: 'string',
      count: 3,
      default: ParserOptions.infoOptions.iconClass
    }, {
      name: 'html',
      type: 'boolean',
      count: 4,
      default: ParserOptions.infoOptions.html
    }, {
      name: 'customClass',
      type: 'string',
      count: 2,
      default: ParserOptions.infoOptions.customClass
    }, {
      name: 'duration',
      type: 'number',
      count: 1,
      default: ParserOptions.infoOptions.duration
    }, {
      name: 'showClose',
      type: 'boolean',
      count: 2,
      default: ParserOptions.infoOptions.showClose
    }, {
      name: 'center',
      type: 'boolean',
      count: 3,
      default: ParserOptions.infoOptions.center
    }, {
      name: 'onClose',
      type: 'function',
      count: 2,
      default: ParserOptions.infoOptions.onClose
    }], args);
    Object.assign(this._options.infoOptions, opts);
    return this;
  };

  warn(...args) {
    let opts = paramsMatching([{
      name: 'close',
      type: 'boolean',
      count: 1,
      default: ParserOptions.warnOptions.close
    }, {
      name: 'callback',
      type: 'function',
      count: 1,
      default: ParserOptions.warnOptions.callback
    }, {
      name: 'message',
      type: 'string',
      count: 1,
      default: 'warn'
    }, {
      name: 'iconClass',
      type: 'string',
      count: 3,
      default: ParserOptions.warnOptions.iconClass
    }, {
      name: 'html',
      type: 'boolean',
      count: 4,
      default: ParserOptions.warnOptions.html
    }, {
      name: 'customClass',
      type: 'string',
      count: 2,
      default: ParserOptions.warnOptions.customClass
    }, {
      name: 'duration',
      type: 'number',
      count: 1,
      default: ParserOptions.warnOptions.duration
    }, {
      name: 'showClose',
      type: 'boolean',
      count: 2,
      default: ParserOptions.warnOptions.showClose
    }, {
      name: 'center',
      type: 'boolean',
      count: 3,
      default: ParserOptions.warnOptions.center
    }, {
      name: 'onClose',
      type: 'function',
      count: 2,
      default: ParserOptions.warnOptions.onClose
    }], args);
    Object.assign(this._options.warnOptions, opts);
    return this;
  };

  notSuccess(...args) {
    let opts = paramsMatching([{
      name: 'close',
      type: 'boolean',
      count: 1,
      default: true
    }, {
      name: 'callback',
      type: 'function',
      count: 1,
      default: ParserOptions.notSuccessOptions.callback
    }, {
      name: 'message',
      type: 'string',
      count: 1,
      default: 'notSuccess'
    }, {
      name: 'iconClass',
      type: 'string',
      count: 3,
      default: ParserOptions.notSuccessOptions.iconClass
    }, {
      name: 'html',
      type: 'boolean',
      count: 4,
      default: ParserOptions.notSuccessOptions.html
    }, {
      name: 'customClass',
      type: 'string',
      count: 2,
      default: ParserOptions.notSuccessOptions.customClass
    }, {
      name: 'duration',
      type: 'number',
      count: 1,
      default: ParserOptions.notSuccessOptions.duration
    }, {
      name: 'showClose',
      type: 'boolean',
      count: 2,
      default: ParserOptions.notSuccessOptions.showClose
    }, {
      name: 'center',
      type: 'boolean',
      count: 3,
      default: ParserOptions.notSuccessOptions.center
    }, {
      name: 'onClose',
      type: 'function',
      count: 2,
      default: ParserOptions.notSuccessOptions.onClose
    }], args);
    Object.assign(this._options.notSuccessOptions, opts);
    return this;
  };

  finally(...args) {
    let opts = paramsMatching([{
      name: 'close',
      type: 'boolean',
      count: 1,
      default: true
    }, {
      name: 'callback',
      type: 'function',
      count: 1,
      default: ParserOptions.finallyOptions.callback
    }, {
      name: 'message',
      type: 'string',
      count: 1,
      default: 'finally'
    }, {
      name: 'iconClass',
      type: 'string',
      count: 3,
      default: ParserOptions.finallyOptions.iconClass
    }, {
      name: 'html',
      type: 'boolean',
      count: 4,
      default: ParserOptions.finallyOptions.html
    }, {
      name: 'customClass',
      type: 'string',
      count: 2,
      default: ParserOptions.finallyOptions.customClass
    }, {
      name: 'duration',
      type: 'number',
      count: 1,
      default: ParserOptions.finallyOptions.duration
    }, {
      name: 'showClose',
      type: 'boolean',
      count: 2,
      default: ParserOptions.finallyOptions.showClose
    }, {
      name: 'center',
      type: 'boolean',
      count: 3,
      default: ParserOptions.finallyOptions.center
    }, {
      name: 'onClose',
      type: 'function',
      count: 2,
      default: ParserOptions.finallyOptions.onClose
    }], args);
    Object.assign(this._options.finallyOptions, opts);
    return this;
  };

}
