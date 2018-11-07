import {paramsMatching} from "../../src/utils/util.js";
import {WeView} from "../../message/src/weview.js";
import {DefaultMessageOptions} from "../../message/src/message.js";
import {deepAssign} from "../../src/utils/util.js";

const merge = require('webpack-merge');

export const DefaultParserOptions = {
  successOptions: merge({
    close: false,
    callback() {
    }
  }, DefaultMessageOptions),
  failOptions: merge({
    close: false,
    callback() {
    }
  }, DefaultMessageOptions),
  errorOptions: merge({
    close: false,
    callback() {
    }
  }, DefaultMessageOptions),
  infoOptions: merge({
    close: false,
    callback() {
    }
  }, DefaultMessageOptions),
  warnOptions: merge({
    close: false,
    callback() {
    }
  }, DefaultMessageOptions),
  notSuccessOptions: merge({
    close: true,
    callback() {
    }
  }, DefaultMessageOptions),
  beforeOptions: merge({
    close: true,
    callback() {
    }
  }, DefaultMessageOptions),
  catchOptions: merge({
    close: true,
    callback() {
    }
  }, DefaultMessageOptions),
  finallyOptions: merge({
    close: true,
    callback() {
    }
  }, DefaultMessageOptions),
  needLoginOptions: merge({
    close: true,
    callback() {
    }
  }, DefaultMessageOptions),
  noAuthorityOptions: merge({
    close: true,
    callback() {
    }
  }, DefaultMessageOptions),
  notFoundOptions: merge({
    close: true,
    callback() {
    }
  }, DefaultMessageOptions),
  messageOptions: {
    use: WeView,
    options: merge({}, DefaultMessageOptions)
  }
};

export const ParserOptions = {
  successOptions: merge({
    close: false,
    callback() {
    }
  }, DefaultMessageOptions),
  failOptions: merge({
    close: false,
    callback() {
    }
  }, DefaultMessageOptions),
  errorOptions: merge({
    close: false,
    callback() {
    }
  }, DefaultMessageOptions),
  infoOptions: merge({
    close: false,
    callback() {
    }
  }, DefaultMessageOptions),
  warnOptions: merge({
    close: false,
    callback() {
    }
  }, DefaultMessageOptions),
  notSuccessOptions: merge({
    close: true,
    callback() {
    }
  }, DefaultMessageOptions),
  beforeOptions: merge({
    close: true,
    callback() {
    }
  }, DefaultMessageOptions),
  catchOptions: merge({
    close: true,
    callback() {
    }
  }, DefaultMessageOptions),
  finallyOptions: merge({
    close: true,
    callback() {
    }
  }, DefaultMessageOptions),
  needLoginOptions: merge({
    close: true,
    callback() {
    }
  }, DefaultMessageOptions),
  noAuthorityOptions: merge({
    close: true,
    callback() {
    }
  }, DefaultMessageOptions),
  notFoundOptions: merge({
    close: true,
    callback() {
    }
  }, DefaultMessageOptions),
  messageOptions: {
    use: WeView,
    options: merge({}, DefaultMessageOptions)
  }
};

function matchArgs(args) {
  return paramsMatching([{
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
    count: 1
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
}

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

  executeBefore(data, res) {
    let {callback: beforeCallback} = this._options.beforeOptions;
    beforeCallback(data, res);
  };

  executeCatch(err) {
    let {callback: catchCallback} = this._options.catchOptions;
    catchCallback(err);
  };

  executeFinally(data, res) {
    let {callback: finallyCallback} = this._options.finallyOptions;
    finallyCallback(data, res);
  };

  success(...args) {
    let opts = matchArgs(args);
    this._options.successOptions = merge(this._options.successOptions, opts);
    return this;
  };

  fail(...args) {
    let opts = matchArgs(args);
    this._options.failOptions = merge(this._options.failOptions, opts);
    return this;
  };

  error(...args) {
    let opts = matchArgs(args);
    this._options.errorOptions = merge(this._options.errorOptions, opts);
    return this;
  };

  info(...args) {
    let opts = matchArgs(args);
    this._options.infoOptions = merge(this._options.infoOptions, opts);
    return this;
  };

  warn(...args) {
    let opts = matchArgs(args);
    this._options.warnOptions = merge(this._options.warnOptions, opts);
    return this;
  };

  notSuccess(...args) {
    let opts = matchArgs(args);
    this._options.notSuccessOptions = merge(this._options.notSuccessOptions, opts);
    return this;
  };

  before(...args) {
    let opts = matchArgs(args);
    this._options.beforeOptions = merge(this._options.beforeOptions, opts);
    return this;
  };

  catch(...args) {
    let opts = matchArgs(args);
    this._options.catchOptions = merge(this._options.catchOptions, opts);
    return this;
  };

  finally(...args) {
    let opts = matchArgs(args);
    this._options.finallyOptions = merge(this._options.finallyOptions, opts);
    return this;
  };

  needLogin(...args) {
    let opts = matchArgs(args);
    this._options.needLoginOptions = merge(this._options.needLoginOptions, opts);
    return this;
  };

  noAuthority(...args) {
    let opts = matchArgs(args);
    this._options.noAuthorityOptions = merge(this._options.noAuthorityOptions, opts);
    return this;
  };

  notFound(...args) {
    let opts = matchArgs(args);
    this._options.notFoundOptions = merge(this._options.notFoundOptions, opts);
    return this;
  };

}
