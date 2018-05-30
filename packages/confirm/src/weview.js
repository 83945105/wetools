import {Confirm} from "./confirm.js";
import {isObject} from "../../src/utils/util.js";

//TODO 待修改
// const WeViewConfirm = require('weview').$Confirm;

export class WeView extends Confirm {

  _weview = undefined;

  constructor() {
    super();
    this._weview = WeViewConfirm;
  }

  open(args) {
    let opts = super.open(args);
    return this._weview(opts);
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
