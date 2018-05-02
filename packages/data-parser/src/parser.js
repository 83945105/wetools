import {MessageOptions} from "../../message/src/message.js";
import {paramsMatching} from "../../../src/utils/util.js";

export const ParserOptions = {
  successOptions: Object.assign({
    close: false,
    callback() {
    }
  }, MessageOptions),
  failOptions: Object.assign({
    close: false,
    callback() {
    }
  }, MessageOptions),
  errorOptions: Object.assign({
    close: false,
    callback() {
    }
  }, MessageOptions),
  infoOptions: Object.assign({
    close: false,
    callback() {
    }
  }, MessageOptions),
  warnOptions: Object.assign({
    close: false,
    callback() {
    }
  }, MessageOptions),
  finallyOptions: Object.assign({
    close: false,
    callback() {
    }
  }, MessageOptions),
};

export class Parser {

  _options = ParserOptions;

  setOptions(options = ParserOptions) {
    Object.assign(this._options, options.prototype, options)
  }

  success(...args) {
    let opts = paramsMatching([{
      name: 'close',
      type: 'boolean',
      count: 1,
      default: this._options.successOptions.close
    }, {
      name: 'callback',
      type: 'function',
      count: 1,
      default: this._options.successOptions.callback
    }, {
      name: 'message',
      type: 'string',
      count: 1,
      default: 'success'
    }, {
      name: 'iconClass',
      type: 'string',
      count: 3,
      default: this._options.successOptions.iconClass
    }, {
      name: 'html',
      type: 'boolean',
      count: 4,
      default: this._options.successOptions.html
    }, {
      name: 'customClass',
      type: 'string',
      count: 2,
      default: this._options.successOptions.customClass
    }, {
      name: 'duration',
      type: 'number',
      count: 1,
      default: this._options.successOptions.duration
    }, {
      name: 'showClose',
      type: 'boolean',
      count: 2,
      default: this._options.successOptions.showClose
    }, {
      name: 'center',
      type: 'boolean',
      count: 3,
      default: this._options.successOptions.center
    }, {
      name: 'onClose',
      type: 'function',
      count: 2,
      default: this._options.successOptions.onClose
    }], args);

    Object.assign(this._options.successOptions, opts);

    console.log(this._options.successOptions)

    return this;
  };

  finally(...args) {
    return this;
  };

  start(data) {

  };

}
