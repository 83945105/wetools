import {Alert} from "./alert.js";
import {isObject} from "../../src/utils/util.js";

const WeViewAlert = require('weview').$Alert;

export class WeView extends Alert {

  _weview = undefined;

  constructor() {
    super();
    this._weview = WeViewAlert;
  }

  open(args) {
    let opts = super.open(args);
    return this._weview.open(opts);
  }

  success(args) {
    let opts = super.success(args);
    return this._weview.success(opts);
  }

  fail(args) {
    let opts = super.fail(args);
    return this._weview.fail(opts);
  }

  error(args) {
    let opts = super.error(args);
    return this._weview.error(opts);
  }

  warn(args) {
    let opts = super.warn(args);
    return this._weview.warn(opts);
  }

  info(args) {
    let opts = super.info(args);
    return this._weview.info(opts);
  }

  close(instance) {
    if (isObject(instance)) {
      instance.close();
    }
  };

  closeAll() {
    this._weview.closeAll();
  };
}
