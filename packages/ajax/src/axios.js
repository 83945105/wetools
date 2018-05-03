import {Ajax, AjaxUtil, AjaxOptions} from "./ajax.js";
import {deepAssign} from "../../../src/utils/util";

const util = new AjaxUtil();

export class Axios extends Ajax {

  _axios = undefined;
  _qs = undefined;

  constructor() {
    super();
    this._axios = require('axios');
    this._qs = require('qs');
  }

  get(url, params, options) {
    super.get(url, params, options);
    let opts = deepAssign({}, AjaxOptions, options);
    url += util.getParamsToUrl(params);

    let $parser = new opts.dataParserOptions.use();
    let $message = new opts.messageOptions.use();

    this._axios.get(url, opts).then(res => {

      $parser.parse(res.data, res);

    }).catch(err => {
      console.log(JSON.parse(JSON.stringify(err)));
      $message.open(Object.assign({}, opts.messageOptions.options, {
        message: `请求出错`
      }));
    });

    return $parser;
  };

  post(url, params, options) {
    super.post(url, params, options);
    let opts = Object.assign({}, AjaxOptions, options);
    this._axios.post(url, this._qs.stringify(params), opts).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    });
  };

  put(url, params, options) {
    super.put(url, params, options);
    let opts = Object.assign({}, AjaxOptions, options);
    this._axios.put(url, this._qs.stringify(params), opts).then(res => {
      console.log(res)
    }).catch(err => {
      console.log()
    });
  };

  delete(url, options) {
    super.delete(url, options);
    let opts = Object.assign({}, AjaxOptions, options);
    this._axios.delete(url, opts).then(res => {
      console.log(res)
    }).catch(err => {
      console.log()
    });
  };

}
