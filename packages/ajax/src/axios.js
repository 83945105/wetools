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

    let waitId;
    let instance;
    let status = 'pending';
    if (opts.showWaitPrompt) {
      setTimeout(() => {
        if(status === 'pending') {
          instance = $message.open(opts.waitPromptText);
        }
      }, opts.waitPromptTime);
    }
    this._axios.get(url, opts).then(res => {
      status = 'resolved';
      if (opts.showWaitPrompt) {
        clearTimeout(waitId);
        $message.close(instance);
      }
      $parser.parse(res.data, res);
    }).catch(err => {
      status = 'rejected';
      if (opts.showWaitPrompt) {
        clearTimeout(waitId);
        $message.close(instance);
      }
      console.log(err);
      console.log(JSON.parse(JSON.stringify(err)));
      $message.open(Object.assign({}, opts.messageOptions.options, {
        message: `请求出错`
      }));
      $parser.executeFinally(null, err);
    });
    return $parser;
  };

  post(url, params, options) {
    super.post(url, params, options);
    let opts = Object.assign({}, AjaxOptions, options);

    let $parser = new opts.dataParserOptions.use(opts.dataParserOptions.options);
    let $message = new opts.messageOptions.use();

    url = util.nameReplaceUrlParams(url, params);

    let waitId;
    let instance;
    let status = 'pending';
    if (opts.showWaitPrompt) {
      setTimeout(() => {
        if(status === 'pending') {
          instance = $message.open(opts.waitPromptText);
        }
      }, opts.waitPromptTime);
    }
    this._axios.post(url, this._qs.stringify(params), opts).then(res => {
      status = 'resolved';
      if (opts.showWaitPrompt) {
        clearTimeout(waitId);
        $message.close(instance);
      }
      $parser.parse(res.data, res);
    }).catch(err => {
      status = 'rejected';
      if (opts.showWaitPrompt) {
        clearTimeout(waitId);
        $message.close(instance);
      }
      console.log(err);
      console.log(JSON.parse(JSON.stringify(err)));
      $message.open(Object.assign({}, opts.messageOptions.options, {
        message: `请求出错`
      }));
      $parser.executeFinally(null, err);
    });
    return $parser;
  };

  put(url, params, options) {
    super.put(url, params, options);
    let opts = Object.assign({}, AjaxOptions, options);

    let $parser = new opts.dataParserOptions.use(opts.dataParserOptions.options);
    let $message = new opts.messageOptions.use();

    url = util.nameReplaceUrlParams(url, params);

    let waitId;
    let instance;
    let status = 'pending';
    if (opts.showWaitPrompt) {
      setTimeout(() => {
        if(status === 'pending') {
          instance = $message.open(opts.waitPromptText);
        }
      }, opts.waitPromptTime);
    }
    this._axios.put(url, this._qs.stringify(params), opts).then(res => {
      status = 'resolved';
      if (opts.showWaitPrompt) {
        clearTimeout(waitId);
        $message.close(instance);
      }
      $parser.parse(res.data, res);
    }).catch(err => {
      status = 'rejected';
      if (opts.showWaitPrompt) {
        clearTimeout(waitId);
        $message.close(instance);
      }
      console.log(err);
      console.log(JSON.parse(JSON.stringify(err)));
      $message.open(Object.assign({}, opts.messageOptions.options, {
        message: `请求出错`
      }));
      $parser.executeFinally(null, err);
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

    let waitId;
    let instance;
    let status = 'pending';
    if (opts.showWaitPrompt) {
      setTimeout(() => {
        if(status === 'pending') {
          instance = $message.open(opts.waitPromptText);
        }
      }, opts.waitPromptTime);
    }
    this._axios.delete(url, opts).then(res => {
      status = 'resolved';
      if (opts.showWaitPrompt) {
        clearTimeout(waitId);
        $message.close(instance);
      }
      $parser.parse(res.data, res);
    }).catch(err => {
      status = 'rejected';
      if (opts.showWaitPrompt) {
        clearTimeout(waitId);
        $message.close(instance);
      }
      console.log(err);
      console.log(JSON.parse(JSON.stringify(err)));
      $message.open(Object.assign({}, opts.messageOptions.options, {
        message: `请求出错`
      }));
      $parser.executeFinally(null, err);
    });
    return $parser;
  };

}
