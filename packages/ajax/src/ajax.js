import {isObject, isArray, isString} from '../../../src/utils/util.js';

export const AjaxOptions = {
  baseURL: '',
  params: {},
  headers: {},
  timeout: 30000,
  responseType: 'json'
};

export class Ajax {

  _options = AjaxOptions;

  setOptions(options = AjaxOptions) {
    Object.assign(this._options, options)
  }

  get(url, params, options) {
    if (!isString(url)) {
      throw new Error(`Ajax get(): url必须为string类型`);
    }
    if (params && !isArray(params) && !isObject(params)) {
      throw new Error(`Ajax get(): params只能为Array和Object`);
    }
    if (options && !isObject(options)) {
      throw new Error(`Ajax get(): options必须为Object类型`);
    }
  };

  post(url, params, options) {
    if (!isString(url)) {
      throw new Error(`Ajax post(): url必须为string类型`);
    }
    if (params && !isObject(params)) {
      throw new Error(`Ajax post(): params必须为Object类型`);
    }
    if (options && !isObject(options)) {
      throw new Error(`Ajax post(): options必须为Object类型`);
    }
  };

  put(url, params, options) {
    if (!isString(url)) {
      throw new Error(`Ajax put(): url必须为string类型`);
    }
    if (params && !isObject(params)) {
      throw new Error(`Ajax put(): params必须为Object类型`);
    }
    if (options && !isObject(options)) {
      throw new Error(`Ajax put(): options必须为Object类型`);
    }
  };

  delete(url, options) {
    if (!isString(url)) {
      throw new Error(`Ajax delete(): url必须为string类型`);
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
  }
}
