import {Loading} from "./loading";
import {isString} from "../../../src/utils/util";

const ElementLoading = require('element-ui').Loading;

let seed = 1;
let instance;
let instances = [];

export class Element extends Loading {

  _element = undefined;

  constructor() {
    super();
    this._element = ElementLoading;
  }

  service(...args) {
    let opts = super.service(args);
    instance = this._element.service(opts);
    instance.id = `loading-${seed++}`;
    instances.push(instance);
    return instance
  }

  close(target) {
    if (isString(target)) {
      for (let i = 0; i < instances.length; i++) {
        if (target === instances[i].id) {
          instances[i].close();
          instances.splice(i, 1);
          break;
        }
      }
    } else {
      for (let i = 0; i < instances.length; i++) {
        if (target.id === instances[i].id) {
          instances[i].close();
          instances.splice(i, 1);
          break;
        }
      }
    }
  }

  closeAll() {
    for (let ist of instances) {
      ist.close();
    }
    instances = [];
  }
}
