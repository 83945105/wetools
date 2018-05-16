import Vue from 'vue';
import {Loading} from "./loading";
import {isString} from "../../../src/utils/util";

const WeViewLoading = require('weview').$Loading;


export class WeView extends Loading {

  _weview = undefined;

  constructor() {
    super();
    this._weview = WeViewLoading;
  }

  service(...args) {
    let opts = super.service(args);
    return this._weview(opts);
  }

  close(target) {
    if(isString(target)) {
      WeViewLoading.close(target);
    }else if(target instanceof Vue) {
      target.close();
    }
  }

  closeAll() {
    WeViewLoading.closeAll();
  }
}
