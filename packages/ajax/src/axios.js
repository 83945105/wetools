import {Ajax, AjaxUtil, AjaxOptions} from "./ajax.js";
import {isObject} from "../../src/utils/util.js";

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
    let $Message = new opts.messageOptions.use();

    let waitId = undefined;
    let instance = undefined;
    let status = 'pending';
    if (opts.showWaitPrompt) {
      waitId = setTimeout(() => {
        if (status === 'pending') {
          instance = $Message.open(opts.waitPromptText);
        }
      }, opts.waitPromptTimeout);
    }
    /*模拟开始*/
    if (opts.mock === true) {
      setTimeout(() => {
        if (opts.showWaitPrompt) {
          waitId && clearTimeout(waitId);
          instance && $Message.close(instance);
        }
        $parser.parse(this.mockData);
      }, opts.mockTimeout);
      return $parser;
    }
    /*模拟结束*/
    this._axios.get(url, opts).then(res => {
      status = 'resolved';
      if (opts.showWaitPrompt) {
        waitId && clearTimeout(waitId);
        instance && $Message.close(instance);
      }
      $parser.parse(res.data, res);
    }).catch(err => {
      $parser.executeCatch(err);
      $parser.executeBefore(null, err);
      status = 'rejected';
      if (opts.showWaitPrompt) {
        waitId && clearTimeout(waitId);
        instance && $Message.close(instance);
      }
      console.log(err);
      try {
        console.log(JSON.parse(JSON.stringify(err)));
      } catch (e) {
      }
      if (opts.showErrorPrompt) {
        $Message.open(merge({}, opts.messageOptions.options, {
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
    let $Message = new opts.messageOptions.use();

    url = util.nameReplaceUrlParams(url, params);

    let waitId = undefined;
    let instance = undefined;
    let status = 'pending';
    if (opts.showWaitPrompt) {
      waitId = setTimeout(() => {
        if (status === 'pending') {
          instance = $Message.open(opts.waitPromptText);
        }
      }, opts.waitPromptTimeout);
    }
    if (isObject(params)) {
      params = this._qs.stringify(params);
    }
    /*模拟开始*/
    if (opts.mock === true) {
      setTimeout(() => {
        if (opts.showWaitPrompt) {
          waitId && clearTimeout(waitId);
          instance && $Message.close(instance);
        }
        $parser.parse(this.mockData);
      }, opts.mockTimeout);
      return $parser;
    }
    /*模拟结束*/
    this._axios.post(url, params, opts).then(res => {
      status = 'resolved';
      if (opts.showWaitPrompt) {
        waitId && clearTimeout(waitId);
        instance && $Message.close(instance);
      }
      $parser.parse(res.data, res);
    }).catch(err => {
      $parser.executeCatch(err);
      $parser.executeBefore(null, err);
      status = 'rejected';
      if (opts.showWaitPrompt) {
        waitId && clearTimeout(waitId);
        instance && $Message.close(instance);
      }
      console.log(err);
      try {
        console.log(JSON.parse(JSON.stringify(err)));
      } catch (e) {
      }
      if (opts.showErrorPrompt) {
        $Message.open(merge({}, opts.messageOptions.options, {
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
    let $Message = new opts.messageOptions.use();

    url = util.nameReplaceUrlParams(url, params);

    let waitId = undefined;
    let instance = undefined;
    let status = 'pending';
    if (opts.showWaitPrompt) {
      waitId = setTimeout(() => {
        if (status === 'pending') {
          instance = $Message.open(opts.waitPromptText);
        }
      }, opts.waitPromptTimeout);
    }
    if (isObject(params)) {
      params = this._qs.stringify(params);
    }
    /*模拟开始*/
    if (opts.mock === true) {
      setTimeout(() => {
        if (opts.showWaitPrompt) {
          waitId && clearTimeout(waitId);
          instance && $Message.close(instance);
        }
        $parser.parse(this.mockData);
      }, opts.mockTimeout);
      return $parser;
    }
    /*模拟结束*/
    this._axios.put(url, params, opts).then(res => {
      status = 'resolved';
      if (opts.showWaitPrompt) {
        waitId && clearTimeout(waitId);
        instance && $Message.close(instance);
      }
      $parser.parse(res.data, res);
    }).catch(err => {
      $parser.executeCatch(err);
      $parser.executeBefore(null, err);
      status = 'rejected';
      if (opts.showWaitPrompt) {
        waitId && clearTimeout(waitId);
        instance && $Message.close(instance);
      }
      console.log(err);
      try {
        console.log(JSON.parse(JSON.stringify(err)));
      } catch (e) {
      }
      if (opts.showErrorPrompt) {
        $Message.open(merge({}, opts.messageOptions.options, {
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
    let $Message = new opts.messageOptions.use();

    url = util.nameReplaceUrlParams(url, params);

    let waitId = undefined;
    let instance = undefined;
    let status = 'pending';
    if (opts.showWaitPrompt) {
      waitId = setTimeout(() => {
        if (status === 'pending') {
          instance = $Message.open(opts.waitPromptText);
        }
      }, opts.waitPromptTimeout);
    }
    opts.params = merge(params, opts.params);
    /*模拟开始*/
    if (opts.mock === true) {
      setTimeout(() => {
        if (opts.showWaitPrompt) {
          waitId && clearTimeout(waitId);
          instance && $Message.close(instance);
        }
        $parser.parse(this.mockData);
      }, opts.mockTimeout);
      return $parser;
    }
    /*模拟结束*/
    this._axios.delete(url, opts).then(res => {
      status = 'resolved';
      if (opts.showWaitPrompt) {
        waitId && clearTimeout(waitId);
        instance && $Message.close(instance);
      }
      $parser.parse(res.data, res);
    }).catch(err => {
      $parser.executeCatch(err);
      $parser.executeBefore(null, err);
      status = 'rejected';
      if (opts.showWaitPrompt) {
        waitId && clearTimeout(waitId);
        instance && $Message.close(instance);
      }
      console.log(err);
      try {
        console.log(JSON.parse(JSON.stringify(err)));
      } catch (e) {
      }
      if (opts.showErrorPrompt) {
        $Message.open(merge({}, opts.messageOptions.options, {
          message: opts.errorPromptText
        }));
      }
      $parser.executeFinally(null, err);
    });
    return $parser;
  };

}
