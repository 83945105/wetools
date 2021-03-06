import {Ajax, AjaxUtil, AjaxOptions} from "./ajax.js";
import {isObject} from "../../src/utils/util.js";
import {isFormData} from "../../src/utils/util";

const merge = require('webpack-merge');

const util = new AjaxUtil();

const AxiosAjax = require('axios');
const Qs = require('qs');

const Default = {
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
};

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
    let opts = merge(Default, AjaxOptions, options);
    url = util.replaceUrlParams(url, params);

    let $parser = new opts.dataParserOptions.use(opts.dataParserOptions.options);
    let $message = new opts.messageOptions.use();

    let waitId;
    let instance;
    let status = 'pending';
    if (opts.showWaitPrompt) {
      setTimeout(() => {
        if (status === 'pending') {
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
      try {
        console.log(JSON.parse(JSON.stringify(err)));
      } catch (e) {
      }
      if(opts.showErrorPrompt) {
        $message.open(merge({}, opts.messageOptions.options, {
          message: opts.errorPromptText
        }));
      }
      $parser.executeFinally(null, err);
    });
    return $parser;
  };

  post(url, params, options) {
    super.post(url, params, options);
    let opts = merge(Default, AjaxOptions, options);

    let $parser = new opts.dataParserOptions.use(opts.dataParserOptions.options);
    let $message = new opts.messageOptions.use();

    url = util.nameReplaceUrlParams(url, params);

    let waitId;
    let instance;
    let status = 'pending';
    if (opts.showWaitPrompt) {
      setTimeout(() => {
        if (status === 'pending') {
          instance = $message.open(opts.waitPromptText);
        }
      }, opts.waitPromptTime);
    }
    if (isObject(params)) {
      params = this._qs.stringify(params);
    }
    this._axios.post(url, params, opts).then(res => {
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
      try {
        console.log(JSON.parse(JSON.stringify(err)));
      } catch (e) {
      }
      if(opts.showErrorPrompt) {
        $message.open(merge({}, opts.messageOptions.options, {
          message: opts.errorPromptText
        }));
      }
      $parser.executeFinally(null, err);
    });
    return $parser;
  };

  put(url, params, options) {
    super.put(url, params, options);
    let opts = merge(Default, AjaxOptions, options);

    let $parser = new opts.dataParserOptions.use(opts.dataParserOptions.options);
    let $message = new opts.messageOptions.use();

    url = util.nameReplaceUrlParams(url, params);

    let waitId;
    let instance;
    let status = 'pending';
    if (opts.showWaitPrompt) {
      setTimeout(() => {
        if (status === 'pending') {
          instance = $message.open(opts.waitPromptText);
        }
      }, opts.waitPromptTime);
    }
    if (isObject(params)) {
      params = this._qs.stringify(params);
    }
    this._axios.put(url, params, opts).then(res => {
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
      try {
        console.log(JSON.parse(JSON.stringify(err)));
      } catch (e) {
      }
      if(opts.showErrorPrompt) {
        $message.open(merge({}, opts.messageOptions.options, {
          message: opts.errorPromptText
        }));
      }
      $parser.executeFinally(null, err);
    });
    return $parser;
  };

  delete(url, params, options) {
    super.delete(url, params, options);
    let opts = merge(Default, AjaxOptions, options);

    let $parser = new opts.dataParserOptions.use(opts.dataParserOptions.options);
    let $message = new opts.messageOptions.use();

    url = util.nameReplaceUrlParams(url, params);

    let waitId;
    let instance;
    let status = 'pending';
    if (opts.showWaitPrompt) {
      setTimeout(() => {
        if (status === 'pending') {
          instance = $message.open(opts.waitPromptText);
        }
      }, opts.waitPromptTime);
    }
    opts.params = merge(params, opts.params);
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
      try {
        console.log(JSON.parse(JSON.stringify(err)));
      } catch (e) {
      }
      if(opts.showErrorPrompt) {
        $message.open(merge({}, opts.messageOptions.options, {
          message: opts.errorPromptText
        }));
      }
      $parser.executeFinally(null, err);
    });
    return $parser;
  };

}
