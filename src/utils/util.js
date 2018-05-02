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

function ___paramsMatching(strings, numbers, booleans, objects, arrays, funs, nulls, undefineds, param) {
  if (isArray(param)) {
    for (let p of param) {
      __paramsMatching(strings, numbers, booleans, objects, arrays, funs, nulls, undefineds, p);
    }
  } else if (isObject(param)) {
    for (let name in param) {
      objects[name] = param[name];
    }
  }
}

function __paramsMatching(strings, numbers, booleans, objects, arrays, funs, nulls, undefineds, param) {
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
  } else {
    ___paramsMatching(strings, numbers, booleans, objects, arrays, funs, nulls, undefineds, param);
  }
}

export function paramsMatching(matches = [], params = []) {
  let strings = [], numbers = [], booleans = [], objects = {}, arrays = [], funs = [], nulls = [], undefineds = [];
  for (let param of params) {
    __paramsMatching(strings, numbers, booleans, objects, arrays, funs, nulls, undefineds, param);
  }

  let opts = {};

  for (let match of matches) {
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
    }

  }

  return opts;
}
