!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("weview"),require("element-ui"),require("vue")):"function"==typeof define&&define.amd?define("wetools",["weview","element-ui","vue"],t):"object"==typeof exports?exports.wetools=t(require("weview"),require("element-ui"),require("vue")):e.wetools=t(e.weview,e["element-ui"],e.Vue)}(this,function(e,t,n){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=183)}({0:function(e,t,n){"use strict";function o(e){return"[object String]"===Object.prototype.toString.call(e)}function r(e){return"[object Object]"===Object.prototype.toString.call(e)}function u(e){return"[object Array]"===Object.prototype.toString.call(e)}function i(e){return"[object Null]"===Object.prototype.toString.call(e)}function c(e){return"[object Undefined]"===Object.prototype.toString.call(e)}function l(e){return!(i(e)||c(e))}function a(e,t,n,l,f,p,s,b,y,v){var d;o(v)?e.push(v):(d=v,"[object Number]"===Object.prototype.toString.call(d)?t.push(v):function(e){return"[object Boolean]"===Object.prototype.toString.call(e)}(v)?n.push(v):function(e){return"[object Function]"===Object.prototype.toString.call(e)}(v)?p.push(v):i(v)?s.push(v):c(v)?b.push(v):v instanceof HTMLElement?y.push(v):function(e,t,n,o,i,c,l,f,p,s){if(u(s))for(let r of s)a(e,t,n,o,i,c,l,f,p,r);else if(r(s))for(let e in s)o[e]=s[e]}(e,t,n,l,f,p,s,b,y,v))}t.d=o,t.c=r,t.b=u,t.e=function(e=[],t=[]){let n=[],o=[],r=[],u={},i=[],c=[],f=[],p=[],s=[];for(let e of t)a(n,o,r,u,i,c,f,p,s,e);let b={};for(let t of e)if(l(u[t.name]))b[t.name]=u[t.name];else switch(t.type){case"string":l(n[t.count-1])?b[t.name]=n[t.count-1]:b[t.name]=t.default;break;case"number":l(o[t.count-1])?b[t.name]=o[t.count-1]:b[t.name]=t.default;break;case"boolean":l(r[t.count-1])?b[t.name]=r[t.count-1]:b[t.name]=t.default;break;case"function":l(c[t.count-1])?b[t.name]=c[t.count-1]:b[t.name]=t.default;break;case"null":l(f[t.count-1])?b[t.name]=f[t.count-1]:b[t.name]=t.default;break;case"undefined":l(p[t.count-1])?b[t.name]=p[t.count-1]:b[t.name]=t.default;break;case"htmlElement":l(s[t.count-1])?b[t.name]=s[t.count-1]:b[t.name]=t.default}return b},t.a=function(e){e=function(e){if(null===e||void 0===e)throw new TypeError("Cannot convert undefined or null to object");return Object(e)}(e);for(let t=1;t<arguments.length;t++)b(e,arguments[t]);return e};const f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;function s(e,t,n){let o=t[n];if(void 0!==o&&null!==o){if(f.call(e,n)&&(void 0===e[n]||null===e[n]))throw new TypeError(`Cannot convert undefined or null to object(${n})`);f.call(e,n)&&r(o)?e[n]=b(Object(e[n]),t[n]):e[n]=o}}function b(e,t){if(e===t)return e;t=Object(t);for(let n in t)f.call(t,n)&&s(e,t,n);if(Object.getOwnPropertySymbols){let n=Object.getOwnPropertySymbols(t);for(let o=0;o<n.length;o++)p.call(t,n[o])&&s(e,t,n[o])}return e}},11:function(t,n){t.exports=e},183:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var u={target:document.body,text:"加载中",background:void 0,fullscreen:!1},i=Object.assign({},u),c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"service",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(o.e)([{name:"target",type:"string",count:1,default:i.target},{name:"target",type:"htmlElement",count:1,default:i.target},{name:"text",type:"string",count:2,default:i.text},{name:"background",type:"string",count:3,default:i.background},{name:"fullscreen",type:"boolean",count:1,default:i.fullscreen}],t)}},{key:"close",value:function(e){}},{key:"closeAll",value:function(){}}]),e}(),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var a=n(76).Loading,f=1,p=void 0,s=[],b=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e._element=void 0,e._element=a,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c),l(t,[{key:"service",value:function(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];var r=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var u=Object.getPrototypeOf(t);return null===u?void 0:e(u,n,o)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(o):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"service",this).call(this,n);return(p=this._element.service(r)).id="loading-"+f++,s.push(p),p}},{key:"close",value:function(e){if(Object(o.d)(e)){for(var t=0;t<s.length;t++)if(e===s[t].id){s[t].close(),s.splice(t,1);break}}else for(var n=0;n<s.length;n++)if(e.id===s[n].id){s[n].close(),s.splice(n,1);break}}},{key:"closeAll",value:function(){var e=!0,t=!1,n=void 0;try{for(var o,r=s[Symbol.iterator]();!(e=(o=r.next()).done);e=!0){o.value.close()}}catch(e){t=!0,n=e}finally{try{!e&&r.return&&r.return()}finally{if(t)throw n}}s=[]}}]),t}(),y=n(184),v=n.n(y),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var h=n(11).$Loading,O=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e._weview=void 0,e._weview=h,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c),d(t,[{key:"service",value:function(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];var r=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var u=Object.getPrototypeOf(t);return null===u?void 0:e(u,n,o)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(o):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"service",this).call(this,n);return this._weview(r)}},{key:"close",value:function(e){Object(o.d)(e)?h.close(e):e instanceof v.a&&e.close()}},{key:"closeAll",value:function(){h.closeAll()}}]),t}(),g={Element:b,WeView:O,install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{use:O,alias:"$loading"},n=t.use,r=void 0===n?O:n,u=t.alias,c=void 0===u?"$loading":u,l=t.options;Object.assign(i,l);var a=new r;if(Object(o.d)(c))e.prototype[c]=a;else if(Object(o.b)(c)){var f=!0,p=!1,s=void 0;try{for(var b,y=c[Symbol.iterator]();!(f=(b=y.next()).done);f=!0){var v=b.value;e.prototype[v]=a}}catch(e){p=!0,s=e}finally{try{!f&&y.return&&y.return()}finally{if(p)throw s}}}}};t.default=g},184:function(e,t){e.exports=n},76:function(e,n){e.exports=t}})});