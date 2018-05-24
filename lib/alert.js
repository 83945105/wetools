!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("weview")):"function"==typeof define&&define.amd?define("wetools",["weview"],t):"object"==typeof exports?exports.wetools=t(require("weview")):e.wetools=t(e.weview)}(this,function(e){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=181)}({0:function(e,t,n){"use strict";function o(e){return"[object String]"===Object.prototype.toString.call(e)}function r(e){return"[object Object]"===Object.prototype.toString.call(e)}function c(e){return"[object Array]"===Object.prototype.toString.call(e)}function u(e){return"[object Null]"===Object.prototype.toString.call(e)}function a(e){return"[object Undefined]"===Object.prototype.toString.call(e)}function i(e){return!(u(e)||a(e))}function l(e,t,n,i,f,p,s,y,v,b){var h;o(b)?e.push(b):(h=b,"[object Number]"===Object.prototype.toString.call(h)?t.push(b):function(e){return"[object Boolean]"===Object.prototype.toString.call(e)}(b)?n.push(b):function(e){return"[object Function]"===Object.prototype.toString.call(e)}(b)?p.push(b):u(b)?s.push(b):a(b)?y.push(b):b instanceof HTMLElement?v.push(b):function(e,t,n,o,u,a,i,f,p,s){if(c(s))for(let r of s)l(e,t,n,o,u,a,i,f,p,r);else if(r(s))for(let e in s)o[e]=s[e]}(e,t,n,i,f,p,s,y,v,b))}t.d=o,t.c=r,t.b=c,t.e=function(e=[],t=[]){let n=[],o=[],r=[],c={},u=[],a=[],f=[],p=[],s=[];for(let e of t)l(n,o,r,c,u,a,f,p,s,e);let y={};for(let t of e)if(i(c[t.name]))y[t.name]=c[t.name];else switch(t.type){case"string":i(n[t.count-1])?y[t.name]=n[t.count-1]:y[t.name]=t.default;break;case"number":i(o[t.count-1])?y[t.name]=o[t.count-1]:y[t.name]=t.default;break;case"boolean":i(r[t.count-1])?y[t.name]=r[t.count-1]:y[t.name]=t.default;break;case"function":i(a[t.count-1])?y[t.name]=a[t.count-1]:y[t.name]=t.default;break;case"null":i(f[t.count-1])?y[t.name]=f[t.count-1]:y[t.name]=t.default;break;case"undefined":i(p[t.count-1])?y[t.name]=p[t.count-1]:y[t.name]=t.default;break;case"htmlElement":i(s[t.count-1])?y[t.name]=s[t.count-1]:y[t.name]=t.default}return y},t.a=function(e){e=function(e){if(null===e||void 0===e)throw new TypeError("Cannot convert undefined or null to object");return Object(e)}(e);for(let t=1;t<arguments.length;t++)y(e,arguments[t]);return e};const f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;function s(e,t,n){let o=t[n];if(void 0!==o&&null!==o){if(f.call(e,n)&&(void 0===e[n]||null===e[n]))throw new TypeError(`Cannot convert undefined or null to object(${n})`);f.call(e,n)&&r(o)?e[n]=y(Object(e[n]),t[n]):e[n]=o}}function y(e,t){if(e===t)return e;t=Object(t);for(let n in t)f.call(t,n)&&s(e,t,n);if(Object.getOwnPropertySymbols){let n=Object.getOwnPropertySymbols(t);for(let o=0;o<n.length;o++)p.call(t,n[o])&&s(e,t,n[o])}return e}},11:function(t,n){t.exports=e},181:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var c={title:void 0,iconName:void 0,showClose:!0,confirmButtonText:"确定",onClose:void 0,showHeader:!0},u=Object.assign({message:""},c);function a(e){return Object(o.e)([{name:"message",type:"string",count:1,default:u.message},{name:"title",type:"string",count:2,default:u.title},{name:"iconName",type:"string",count:3,default:u.iconName},{name:"showClose",type:"boolean",count:1,default:u.showClose},{name:"confirmButtonText",type:"string",count:4,default:u.confirmButtonText},{name:"onClose",type:"function",count:1,default:u.onClose},{name:"showHeader",type:"boolean",count:2,default:u.onClose}],e)}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"open",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return a(t)}},{key:"success",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return a(t)}},{key:"fail",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return a(t)}},{key:"error",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return a(t)}},{key:"warn",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return a(t)}},{key:"info",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return a(t)}},{key:"close",value:function(e){}},{key:"closeAll",value:function(){}}]),e}(),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var c=Object.getPrototypeOf(t);return null===c?void 0:e(c,n,o)}if("value"in r)return r.value;var u=r.get;return void 0!==u?u.call(o):void 0};var p=n(11).$Alert,s=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e._weview=void 0,e._weview=p,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i),l(t,[{key:"open",value:function(){for(var e,n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];var c=(e=f(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"open",this)).call.apply(e,[this].concat(o));return this._weview.open(c)}},{key:"success",value:function(){for(var e,n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];var c=(e=f(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"success",this)).call.apply(e,[this].concat(o));return this._weview.success(c)}},{key:"fail",value:function(){for(var e,n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];var c=(e=f(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"fail",this)).call.apply(e,[this].concat(o));return this._weview.fail(c)}},{key:"error",value:function(){for(var e,n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];var c=(e=f(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"error",this)).call.apply(e,[this].concat(o));return this._weview.error(c)}},{key:"warn",value:function(){for(var e,n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];var c=(e=f(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"warn",this)).call.apply(e,[this].concat(o));return this._weview.warn(c)}},{key:"info",value:function(){for(var e,n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];var c=(e=f(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"info",this)).call.apply(e,[this].concat(o));return this._weview.info(c)}},{key:"close",value:function(e){Object(o.c)(e)&&e.close()}},{key:"closeAll",value:function(){this._weview.closeAll()}}]),t}(),y={WeView:s,install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{use:s,alias:"$alert"},n=t.use,r=void 0===n?s:n,c=t.alias,a=void 0===c?"$alert":c,i=t.options;Object.assign(u,i);var l=new r,f=function(e){return l.open(e)};if(f.open=function(e){return l.open(e)},f.success=function(e){return l.success(e)},f.fail=function(e){return l.fail(e)},f.error=function(e){return l.error(e)},f.info=function(e){return l.info(e)},f.warn=function(e){return l.warn(e)},f.close=function(e){l.close(e)},f.closeAll=function(){l.closeAll()},Object(o.d)(a))e.prototype[a]=f;else if(Object(o.b)(a)){var p=!0,y=!1,v=void 0;try{for(var b,h=a[Symbol.iterator]();!(p=(b=h.next()).done);p=!0){var w=b.value;e.prototype[w]=f}}catch(e){y=!0,v=e}finally{try{!p&&h.return&&h.return()}finally{if(y)throw v}}}}};t.default=y}})});