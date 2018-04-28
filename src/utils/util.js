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

export function isNull(obj) {
  return Object.prototype.toString.call(obj) === "[object Null]";
}

export function isUndefined(obj) {
  return Object.prototype.toString.call(obj) === "[object Undefined]";
}
