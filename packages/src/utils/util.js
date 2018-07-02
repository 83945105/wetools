/**
 * 将字符串转换为大写
 * @param str 字符串
 * @param len 转换长度
 * @returns {string}
 */
export function toUpperCase(str = "", len) {
  if (isNaN(len)) {
    return str.toUpperCase();
  }
  len = parseInt(len);
  return `${str.substring(0, len).toUpperCase()}${str.substring(len)}`;
}

/**
 * 将字符串转驼峰
 * @param str
 */
export function toHumpFormat(str = "") {
  let re = /-(\w)/g;
  str = str.replace(re, function ($0, $1) {
    return $1.toUpperCase();
  });
  return str;
}

export function isString(obj) {
  return Object.prototype.toString.call(obj) === "[object String]";
}

export function isNumber(obj) {
  return Object.prototype.toString.call(obj) === "[object Number]";
}

export function isBoolean(obj) {
  return Object.prototype.toString.call(obj) === "[object Boolean]";
}

export function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

export function isFormData(obj) {
  return Object.prototype.toString.call(obj) === "[object FormData]";
}

export function isArray(obj) {
  return Object.prototype.toString.call(obj) === "[object Array]";
}

export function isFunction(obj) {
  return Object.prototype.toString.call(obj) === "[object Function]";
}

export function isNull(obj) {
  return Object.prototype.toString.call(obj) === "[object Null]";
}

export function isUndefined(obj) {
  return Object.prototype.toString.call(obj) === "[object Undefined]";
}

export function isExist(obj) {
  return !(isNull(obj) || isUndefined(obj));
}

function ___paramsMatching(strings, numbers, booleans, objects, arrays, funs, nulls, undefineds, htmlElements, param) {
  if (isArray(param)) {
    for (let idx in param) {
      __paramsMatching(strings, numbers, booleans, objects, arrays, funs, nulls, undefineds, htmlElements, param[idx]);
    }
  } else if (isObject(param)) {
    for (let name in param) {
      objects[name] = param[name];
    }
  }
}

function __paramsMatching(strings, numbers, booleans, objects, arrays, funs, nulls, undefineds, htmlElements, param) {
  if (isString(param)) {
    strings.push(param);
  } else if (isNumber(param)) {
    numbers.push(param);
  } else if (isBoolean(param)) {
    booleans.push(param);
  } else if (isFunction(param)) {
    funs.push(param);
  } else if (isNull(param)) {
    nulls.push(param);
  } else if (isUndefined(param)) {
    undefineds.push(param);
  } else if (param instanceof HTMLElement) {
    htmlElements.push(param);
  } else {
    ___paramsMatching(strings, numbers, booleans, objects, arrays, funs, nulls, undefineds, htmlElements, param);
  }
}

export function paramsMatching(matches = [], params = []) {
  let strings = [], numbers = [], booleans = [], objects = {}, arrays = [], funs = [], nulls = [], undefineds = [],
    htmlElements = [];
  if (!isArray(params)) {
    params = [params];
  }
  for (let idx in params) {
    __paramsMatching(strings, numbers, booleans, objects, arrays, funs, nulls, undefineds, htmlElements, params[idx]);
  }

  let opts = {};

  for (let idx in matches) {
    let match = matches[idx];
    if (isExist(objects[match.name])) {
      opts[match.name] = objects[match.name];
      continue;
    }
    switch (match.type) {
      case 'string':
        if (isExist(strings[match.count - 1])) {
          opts[match.name] = strings[match.count - 1];
        } else {
          opts[match.name] = match.default;
        }
        break;
      case 'number':
        if (isExist(numbers[match.count - 1])) {
          opts[match.name] = numbers[match.count - 1];
        } else {
          opts[match.name] = match.default;
        }
        break;
      case 'boolean':
        if (isExist(booleans[match.count - 1])) {
          opts[match.name] = booleans[match.count - 1];
        } else {
          opts[match.name] = match.default;
        }
        break;
      case 'function':
        if (isExist(funs[match.count - 1])) {
          opts[match.name] = funs[match.count - 1];
        } else {
          opts[match.name] = match.default;
        }
        break;
      case 'null':
        if (isExist(nulls[match.count - 1])) {
          opts[match.name] = nulls[match.count - 1];
        } else {
          opts[match.name] = match.default;
        }
        break;
      case 'undefined':
        if (isExist(undefineds[match.count - 1])) {
          opts[match.name] = undefineds[match.count - 1];
        } else {
          opts[match.name] = match.default;
        }
        break;
      case 'htmlElement':
        if (isExist(htmlElements[match.count - 1])) {
          opts[match.name] = htmlElements[match.count - 1];
        } else {
          opts[match.name] = match.default;
        }
        break;
    }

  }
  return opts;
}

const hasOwnProperty = Object.prototype.hasOwnProperty;
const propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError(`Cannot convert undefined or null to object`);
  }
  return Object(val);
}

function assignKey(to, from, key) {
  let val = from[key];

  if (val === undefined || val === null) {
    return;
  }
  if (hasOwnProperty.call(to, key)) {
    if (to[key] === undefined || to[key] === null) {
      throw new TypeError(`Cannot convert undefined or null to object(${key})`);
    }
  }
  if (!hasOwnProperty.call(to, key) || !isObject(val)) {
    to[key] = val;
  } else {
    to[key] = assign(Object(to[key]), from[key]);
  }
}

function assign(to, from) {
  if (to === from) {
    return to;
  }
  from = Object(from);
  for (let key in from) {
    if (hasOwnProperty.call(from, key)) {
      assignKey(to, from, key);
    }
  }
  if (Object.getOwnPropertySymbols) {
    let symbols = Object.getOwnPropertySymbols(from);
    for (let i = 0; i < symbols.length; i++) {
      if (propIsEnumerable.call(from, symbols[i])) {
        assignKey(to, from, symbols[i]);
      }
    }
  }
  return to;
}

/**
 * 深度合并对象
 * 注意:该方法合并的属性对象指向同一对象
 * 如 a = {}, b = {user: {}} 合并后, a中的user即为b中的user
 * @param target
 * @returns {*}
 */
export function deepAssign(target) {
  target = toObject(target);
  for (let s = 1; s < arguments.length; s++) {
    assign(target, arguments[s]);
  }
  return target;
};
