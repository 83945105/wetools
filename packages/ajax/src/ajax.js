import {isObject, isArray, isString} from '../../src/utils/util.js';
import {WeView} from '../../message/src/weview.js';
import {Default} from "../../data-parser/src/default.js";
import {DefaultParserOptions} from "../../data-parser/src/parser.js";
import {DefaultMessageOptions} from "../../message/src/message.js";
import {isFormData} from "../../src/utils/util";

const merge = require('webpack-merge');

export const AjaxOptions = {
  baseURL: '',
  params: {},
  headers: {},
  timeout: 60000,
  showWaitPrompt: true,
  waitPromptTime: 10000,
  waitPromptText: '您的网速貌似不太给力...',
  responseType: 'json',
  messageOptions: {
    use: WeView,
    options: merge({}, DefaultMessageOptions)
  },
  dataParserOptions: {
    use: Default,
    options: merge({}, DefaultParserOptions)
  }
};

export class Ajax {

  get(url, params, options) {
    if (!isString(url)) {
      throw new Error(`Ajax get(): url必须为string类型`);
    }
    if (params && !isArray(params) && !isObject(params)) {
      throw new Error(`Ajax get(): params只能为Array或Object`);
    }
    if (options && !isObject(options)) {
      throw new Error(`Ajax get(): options必须为Object类型`);
    }
  };

  post(url, params, options) {
    if (!isString(url)) {
      throw new Error(`Ajax post(): url必须为string类型`);
    }
    if (params && !isObject(params) && !isFormData(params)) {
      throw new Error(`Ajax post(): params必须为Object类型或FormData`);
    }
    if (options && !isObject(options)) {
      throw new Error(`Ajax post(): options必须为Object类型`);
    }
  };

  put(url, params, options) {
    if (!isString(url)) {
      throw new Error(`Ajax put(): url必须为string类型`);
    }
    if (params && !isObject(params) && !isFormData(params)) {
      throw new Error(`Ajax put(): params必须为Object类型或FormData`);
    }
    if (options && !isObject(options)) {
      throw new Error(`Ajax put(): options必须为Object类型`);
    }
  };

  delete(url, params, options) {
    if (!isString(url)) {
      throw new Error(`Ajax delete(): url必须为string类型`);
    }
    if (params && !isObject(params)) {
      throw new Error(`Ajax delete(): params必须为Object类型`);
    }
    if (options && !isObject(options)) {
      throw new Error(`Ajax delete(): options必须为Object类型`);
    }
  };
}

export class AjaxUtil {
  getParamsToUrl(params = []) {
    let url = '';
    if (isObject(params)) {
      url += Object.getOwnPropertyNames(params).length > 0 ? '?' : '';
      for (let name in params) {
        url += `${name}=${params[name]}&`;
      }
      return url.substring(0, url.length - 1);
    } else if (isArray(params)) {
      for (let i in params) {
        url += `/${params[i]}`;
      }
      return url;
    }
    return url;
  };

  replaceUrlParams(url = '', params = []) {
    if (isObject(params) && Object.getOwnPropertyNames(params).length > 0) {
      let idx = url.indexOf("?");
      if (idx === -1) {
        url += '?';
      } else if (idx !== url.length - 1) {
        url += '&';
      }
      for (let name in params) {
        url += `${name}=${params[name]}&`;
      }
      return url.substring(0, url.length - 1);
    } else if (isArray(params)) {
      let i = 0;
      url = url.replace(/\{[^\}]+\}*/g, (val, start, res) => {
        console.log(params)
        return params[i++];
      });
      return url;
    } else {
      return url;
    }
  };

  nameReplaceUrlParams(url = '', params = {}) {
    if (isObject(params)) {
      url = url.replace(/\{[^\}]+\}*/g, (val, start, res) => {
        return params[val.match(/^\{(\S*)+\}$/)[1]];
      });
      return url;
    } else {
      return url;
    }
  };

}
