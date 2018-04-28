import {Ajax, AjaxUtil, AjaxOptions} from "./ajax.js";

const util = new AjaxUtil();

export class Axios extends Ajax {

  _axios = undefined;
  _qs = require('qs');

  constructor(options = AjaxOptions) {
    super();
    this._axios = require('axios');
    this.setOptions(options);
  }

  get(url, params, options) {
    super.get(url, params, options);
    let opts = Object.assign({}, this._options, options);
    url += util.getParamsToUrl(params);
    this._axios.get(url, opts).then(res => {
      console.log(res)
    }).catch(err => {
      console.log()
    });
  };

  post(url, params, options) {
    super.post(url, params, options);
    let opts = Object.assign({}, this._options, options);
    this._axios.post(url, this._qs.stringify(params), opts).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    });
  };

  put(url, params, options) {
    super.put(url, params, options);
    let opts = Object.assign({}, this._options, options);
    this._axios.put(url, this._qs.stringify(params), opts).then(res => {
      console.log(res)
    }).catch(err => {
      console.log()
    });
  };

  delete(url, options) {
    super.delete(url, options);
    let opts = Object.assign({}, this._options, options);
    this._axios.delete(url, opts).then(res => {
      console.log(res)
    }).catch(err => {
      console.log()
    });
  };

}
