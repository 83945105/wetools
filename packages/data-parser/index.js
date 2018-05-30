import {Default} from '../data-parser/src/default.js';
import {DataView} from "../data-parser/src/dataview.js";
import {deepAssign, isArray, isString} from "../src/utils/util";
import {ParserOptions} from "./src/parser";

const DataParser = {

  Default: Default,

  DataView: DataView,

  install(Vue, {use = Default, alias = "$dataParser", options} = {use: Default, alias: "$dataParser"}) {
    deepAssign(ParserOptions, options);
    let dp = new use();
    if (isString(alias)) {
      Vue.prototype[alias] = dp;
    } else if (isArray(alias)) {
      for (let name of alias) {
        Vue.prototype[name] = dp;
      }
    }
  }
};

export default DataParser;
