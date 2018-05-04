import {Message} from "./message.js";

const ElementMessage = require('element-ui').Message;

export class Element extends Message {

  _element = undefined;

  constructor() {
    super();
    this._element = ElementMessage;
  }

  open(...args) {
    let opts = super.open(...args);
    this._element(opts);
  }

  success(...args) {
    let opts = super.success(...args);
    opts.type = 'success';
    this._element(opts);
  }

  fail(...args) {
    let opts = super.fail(...args);
    opts.type = 'error';
    this._element(opts);
  }

  error(...args) {
    let opts = super.error(...args);
    opts.type = 'error';
    this._element(opts);
  }

  warn(...args) {
    let opts = super.warn(...args);
    opts.type = 'warning';
    this._element(opts);
  }

  info(...args) {
    let opts = super.info(...args);
    opts.type = 'info';
    this._element(opts);
  }
}
