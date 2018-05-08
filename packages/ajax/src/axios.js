import {Ajax, AjaxUtil, AjaxOptions} from "./ajax.js";
import {deepAssign} from "../../../src/utils/util";

const util = new AjaxUtil();

const AxiosAjax = require('axios');
const Qs = require('qs');

export class Axios extends Ajax {

  _axios = undefined;
  _qs = undefined;

  constructor() {
    super();
    this._axios = AxiosAjax;
    this._qs = Qs;
  }

  get(url, params, options) {
    super.get(url, params, options);
    let opts = deepAssign({}, AjaxOptions, options);
    url = util.replaceUrlParams(url, params);

    let $parser = new opts.dataParserOptions.use(opts.dataParserOptions.options);
    let $message = new opts.messageOptions.use();

    this._axios.get(url, opts).then(res => {

      $parser.parse(res.data, res);

    }).catch(err => {
      console.log(err);
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

    let $parser = new opts.dataParserOptions.use(opts.dataParserOptions.options);
    let $message = new opts.messageOptions.use();

    url = util.nameReplaceUrlParams(url, params);

    this._axios.post(url, this._qs.stringify(params), opts).then(res => {

      $parser.parse(res.data, res);

    }).catch(err => {
      console.log(err);
      console.log(JSON.parse(JSON.stringify(err)));
      $message.open(Object.assign({}, opts.messageOptions.options, {
        message: `请求出错`
      }));
    });

    return $parser;
  };

  put(url, params, options) {
    super.put(url, params, options);
    let opts = Object.assign({}, AjaxOptions, options);

    let $parser = new opts.dataParserOptions.use(opts.dataParserOptions.options);
    let $message = new opts.messageOptions.use();

    url = util.nameReplaceUrlParams(url, params);

    this._axios.put(url, this._qs.stringify(params), opts).then(res => {

      $parser.parse(res.data, res);

    }).catch(err => {
      console.log(err);
      console.log(JSON.parse(JSON.stringify(err)));
      $message.open(Object.assign({}, opts.messageOptions.options, {
        message: `请求出错`
      }));
    });

    return $parser;
  };

  delete(url, params, options) {
    super.delete(url, params, options);
    let opts = Object.assign({}, AjaxOptions, options);

    let $parser = new opts.dataParserOptions.use(opts.dataParserOptions.options);
    let $message = new opts.messageOptions.use();

    url = util.nameReplaceUrlParams(url, params);
    Object.assign(opts.params, params);

    this._axios.delete(url, opts).then(res => {

      $parser.parse(res.data, res);

    }).catch(err => {
      console.log(err);
      console.log(JSON.parse(JSON.stringify(err)));
      $message.open(Object.assign({}, opts.messageOptions.options, {
        message: `请求出错`
      }));
    });

    return $parser;
  };

}
