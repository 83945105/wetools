import {Message} from "./message.js";

const WeViewMessage = require('weview').$Message;

export class WeView extends Message {

  _weview = undefined;

  constructor() {
    super();
    this._weview = WeViewMessage;
  }

  open(...args) {
    let opts = super.open(...args);
    this._weview(opts);
  }

  success(...args) {
    let opts = super.success(...args);
    opts.type = 'success';
    this._weview(opts);
  }

  fail(...args) {
    let opts = super.fail(...args);
    opts.type = 'error';
    this._weview(opts);
  }

  error(...args) {
    let opts = super.error(...args);
    opts.type = 'error';
    this._weview(opts);
  }

  warn(...args) {
    let opts = super.warn(...args);
    opts.type = 'warning';
    this._weview(opts);
  }

  info(...args) {
    let opts = super.info(...args);
    opts.type = 'info';
    this._weview(opts);
  }
}
