(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[158],{5966:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms/example",function(){return r(9298)}])},96541:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return p}});var n,o=r(24246),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(r(27378)),u=r(4316),i=(n=r(73087),n&&n.__esModule?n:{default:n});function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}var s=a.forwardRef(function(e,t){var r,n,i=e.value,f=e.onChange,s=e.multiple,p=e.checkedValue,d=void 0===p||p,b=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["value","onChange","multiple","checkedValue"]),m=a.useCallback(function(e){if(f){var t=e.target.checked?d:"boolean"==typeof d?!d:null;if(!s){f(t);return}var r,n=new Set([t].concat(function(e){if(Array.isArray(e))return l(e)}(r=(null!=i?i:[]).filter(function(e){return e!==d}))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).filter(function(e){return!!e}));f(Array.from(n))}},[d,s,i,f]),y=Array.isArray(i)?null==i?void 0:i.includes(d):i===d;return(0,o.jsx)(u.Checkbox,(r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){c(e,t,r[t])})}return e}({ref:t,checked:null!=y&&y},b),n=(n={onChange:m},n),Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}),r))}),p=(0,i.default)(s,{disableMargin:!0})},40330:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return O}});var n=r(24246),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=b(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(r(27378)),a=r(4316);r(2342),r(34863);var u=d(r(27693)),i=d(r(69746)),l=d(r(79913)),c=d(r(36487)),f=d(r(73087)),s=d(r(11850));function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){return e&&e.__esModule?e:{default:e}}function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(b=function(e){return e?r:t})(e)}u.default.extend(c.default),u.default.extend(l.default),u.default.extend(i.default),u.default.locale("pt-br");var m={date:"DD/MM/YYYY",datetime:"DD/MM/YYYY HH:mm"},y=o.forwardRef(function(e,t){var r=e.value,i=e.format,l=e.showTime,c=e.minDate,f=e.maxDate,d=e.onChange,b=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["value","format","showTime","minDate","maxDate","onChange"]),y=null!=i?i:m["".concat(l?"datetime":"date")],O=o.useRef(),v=o.useCallback(function(e){return d(null==e?void 0:e.toDate())},[d]),g=o.useCallback(function(e){return!e||(c?e<c:!!f&&e>f)},[f,c]),j=o.useCallback(function(e){if(!i&&!l){var t=e.target;O.current&&clearTimeout(O.current),O.current=setTimeout(function(){t.value=null!==(r=s.default.apply(t.value))&&void 0!==r?r:"";var e,r,n=(0,u.default)(t.value,y),o=(null===(e=t.value)||void 0===e?void 0:e.length)===y.length;if(n.isValid()&&o){d(n.toDate());return}t.value||d(null)},0)}},[y,i,d,l]),h=o.useMemo(function(){return r?(0,u.default)(r):r},[r]);return(0,n.jsx)(a.DatePicker,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){p(e,t,r[t])})}return e}({ref:t,disabledDate:g,format:y,value:h,showTime:l,onChange:v,onKeyDown:j},b))}),O=(0,f.default)(y)},28824:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});var n=r(24246),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(r(27378)),a=r(42192),u=r(4316),i=r(14150);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}var f=function(e){var t=e.name,r=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["name"]),o=(0,a.useFormState)({name:t,exact:!0});return(0,n.jsx)(i.ErrorMessage,{errors:o.errors,name:t,render:function(e){var t,o,a=e.message;return(0,n.jsx)(u.Typography.Text,(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){l(e,t,r[t])})}return e}({type:"danger"},r),o=(o={children:a},o),Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}),t))}})},s=o.memo(f)},42581:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});var n=r(24246),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(r(27378)),a=r(42192);function u(e,t,r,n,o,a,u){try{var i=e[a](u),l=i.value}catch(c){r(c);return}i.done?t(l):Promise.resolve(l).then(n,o)}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){i(e,t,r[t])})}return e}function f(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}var s=function(e){var t,r,i=e.context,l=e.onSubmit,s=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["context","onSubmit"]),p=o.useCallback(function(){return i.reset()},[i]),d=o.useCallback((t=function(e){var t,r,n,o,a,u,i,c,f;return t=this,r=function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,l(e)];case 1:case 2:return t.sent(),[3,3];case 3:return[2]}},n=function(e){return function(t){return o([e,t])}},o=function(e){if(a)throw TypeError("Generator is already executing.");for(;f;)try{if(a=1,u&&(i=2&e[0]?u.return:e[0]?u.throw||((i=u.return)&&i.call(u),0):u.next)&&!(i=i.call(u,e[1])).done)return i;switch(u=0,i&&(e=[2&e[0],i.value]),e[0]){case 0:case 1:i=e;break;case 4:return f.label++,{value:e[1],done:!1};case 5:f.label++,u=e[1],e=[0];continue;case 7:e=f.ops.pop(),f.trys.pop();continue;default:if(!(i=(i=f.trys).length>0&&i[i.length-1])&&(6===e[0]||2===e[0])){f=0;continue}if(3===e[0]&&(!i||e[1]>i[0]&&e[1]<i[3])){f.label=e[1];break}if(6===e[0]&&f.label<i[1]){f.label=i[1],i=e;break}if(i&&f.label<i[2]){f.label=i[2],f.ops.push(e);break}i[2]&&f.ops.pop(),f.trys.pop();continue}e=r.call(t,f)}catch(n){e=[6,n],u=0}finally{a=i=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}},f={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},c={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c},r=function(){var e=this,r=arguments;return new Promise(function(n,o){var a=t.apply(e,r);function i(e){u(a,n,o,i,l,"next",e)}function l(e){u(a,n,o,i,l,"throw",e)}i(void 0)})},function(e){return r.apply(this,arguments)}),[l]);return(0,n.jsx)(a.FormProvider,f(c({},i),{children:(0,n.jsx)("form",f(c({},s),{onReset:p,onSubmit:i.handleSubmit(d),noValidate:!0}))}))}},43145:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});var n,o=r(24246),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(r(27378)),u=r(4316),i=(n=r(73087),n&&n.__esModule?n:{default:n});function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}var f=a.forwardRef(function(e,t){var r,n,i=e.value,c=e.onChange,f=e.checkedValue,s=void 0===f||f,p=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["value","onChange","checkedValue"]),d=a.useCallback(function(e){var t=e.target.checked;null==c||c(t?s:"boolean"==typeof s?!s:null)},[s,c]);return(0,o.jsx)(u.Radio,(r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){l(e,t,r[t])})}return e}({ref:t,checked:i===s},p),n=(n={onChange:d},n),Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}),r))}),s=(0,i.default)(f,{disableMargin:!0})},28339:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return p}});var n=r(24246),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(r(27378)),a=r(4316),u=c(r(73087)),i=c(r(35569));function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){return e&&e.__esModule?e:{default:e}}function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}var s=o.forwardRef(function(e,t){var r=e.value,o=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["value"]);return(0,n.jsx)(a.Select,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){l(e,t,r[t])})}return e}({ref:t,value:r},o))}),p=(0,i.default)((0,u.default)(s),{Option:a.Select.Option,OptGroup:a.Select.OptGroup})},65243:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});var n=r(24246),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(r(27378)),a=r(4316),u=c(r(21671)),i=c(r(73087));function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){return e&&e.__esModule?e:{default:e}}function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function s(){var e,t,r=(e=["\n  display: flex;\n  gap: ","px;\n  align-items: flex-start;\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return s=function(){return r},r}var p=o.forwardRef(function(e,t){var r,u,i=e.value,c=e.onChange,f=e.checkedValue,s=void 0===f||f,p=e.children,d=e.className,b=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["value","onChange","checkedValue","children","className"]),m=o.useCallback(function(e){null==c||c(e?s:"boolean"==typeof s?!s:null)},[s,c]);return(0,n.jsxs)("div",{className:d,children:[(0,n.jsx)(a.Switch,(r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){l(e,t,r[t])})}return e}({ref:t,checked:i===s},b),u=(u={onChange:m},u),Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(u)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(u)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(u,e))}),r)),(0,n.jsx)("div",{children:"string"==typeof p?(0,n.jsx)(a.Typography.Text,{children:p}):p})]})}),d=(0,u.default)(p)(s(),function(e){return 2*e.theme.antd.sizeUnit}),b=(0,i.default)(d,{disableMargin:!0})},46573:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});var n,o=r(24246),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(r(27378)),u=r(4316),i=(n=r(73087),n&&n.__esModule?n:{default:n});function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}var f=a.forwardRef(function(e,t){var r=e.value,n=e.onChange,i=e.onBlur,c=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["value","onChange","onBlur"]),f=a.useCallback(function(e){n&&n(e.target.value,e)},[n]),s=a.useCallback(function(e){i&&i(e.target.value,e)},[i]);return(0,o.jsx)(u.Input.TextArea,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){l(e,t,r[t])})}return e}({ref:t,value:r,onChange:f,onBlur:s,rows:4},c))}),s=(0,i.default)(f)},12713:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});var n=r(24246),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(r(27378)),a=r(4316);r(2342),r(34863);var u=p(r(27693)),i=p(r(69746)),l=p(r(79913)),c=p(r(36487)),f=p(r(73087));function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}u.default.extend(c.default),u.default.extend(l.default),u.default.extend(i.default),u.default.locale("pt-br");var b=o.forwardRef(function(e,t){var r=e.value,i=e.format,l=e.showTime,c=e.minDate,f=e.maxDate,p=e.onChange,d=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["value","format","showTime","minDate","maxDate","onChange"]);i=(null!=i?i:d.showSecond)?"HH:mm:ss":"HH:mm";var b=o.useCallback(function(e){return p(e.toDate())},[p]),m=o.useCallback(function(e){return!e||(c?e<c:!!f&&e>f)},[f,c]),y=o.useMemo(function(){return r?(0,u.default)(r):r},[r]);return(0,n.jsx)(a.TimePicker,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){s(e,t,r[t])})}return e}({ref:t,disabledDate:m,format:i,value:y,showTime:l,onChange:b},d))}),m=(0,f.default)(b)},5044:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{Checkbox:function(){return m},DatePicker:function(){return y},ErrorMessage:function(){return O},Form:function(){return v},Input:function(){return g},Radio:function(){return j},Select:function(){return h},Switch:function(){return x},Textarea:function(){return P},TimePicker:function(){return w},useForm:function(){return k}});var n=b(r(96541)),o=b(r(40330)),a=b(r(28824)),u=b(r(42581)),i=b(r(56013)),l=b(r(43145)),c=b(r(28339)),f=b(r(65243)),s=b(r(46573)),p=b(r(12713)),d=b(r(43347));function b(e){return e&&e.__esModule?e:{default:e}}var m=n.default,y=o.default,O=a.default,v=u.default,g=i.default,j=l.default,h=c.default,x=f.default,P=s.default,w=p.default,k=d.default},29580:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),(0,r(55484).setLocale)({mixed:{default:"Inv\xe1lido",required:"Obrigat\xf3rio",oneOf:"Deve ser um dos seguintes valores: ${values}",notOneOf:"N\xe3o pode ser um dos seguintes valores: ${values}",notType:function(e){return"number"===e.type?"Deve ser um n\xfamero":"Inv\xe1lido"}},string:{length:"Deve ter exatamente ${length} caracteres",min:"Deve ter pelo menos ${min} caracteres",max:"Deve ter no m\xe1ximo ${max} caracteres",email:"E-mail inv\xe1lido",url:"Deve ter um formato de URL v\xe1lida",trim:"N\xe3o deve conter espa\xe7os no in\xedcio ou no fim.",lowercase:"Deve estar em mai\xfasculo",uppercase:"Deve estar em min\xfasculo"},number:{min:"Deve ser no m\xednimo ${min}",max:"Deve ser no m\xe1ximo ${max}",lessThan:"Deve ser menor que ${less}",moreThan:"Deve ser maior que ${more}",positive:"Deve ser um n\xfamero positivo",negative:"Deve ser um n\xfamero negativo",integer:"Deve ser um n\xfamero inteiro"},date:{min:"Deve ser maior que a data ${min}",max:"Deve ser menor que a data ${max}"},array:{min:"Deve ter no m\xednimo ${min} itens",max:"Deve ter no m\xe1ximo ${max} itens"}})},11850:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}});var r={apply:function(e){return e?e.replace(/\D/gi,"").replace(/^(\d{0,2})(\d{0,2})(\d{0,4}).*/,"$1/$2/$3").trim().replace(/\/$/gi,"").replace(/\/$/gi,""):""},clean:function(e){return(e||"").replace(/\D/gi,"").substring(0,8)}}},43347:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},useFieldArray:function(){return p}}),r(29580);var n=r(27378),o=r(42192),a=r(26593),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(r(55484));function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){i(e,t,r[t])})}return e}function f(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}function s(e){var t=e.validationSchema,r=e.defaultValues,i=e.initialValues,l=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["validationSchema","defaultValues","initialValues"]),s=f(c({},l),{defaultValues:null!=r?r:i});t&&Object.assign(s,{resolver:(0,a.yupResolver)("function"==typeof t?t(u):t)});var p=(0,o.useForm)(s),d=(0,n.useCallback)(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p.reset(e,c({keepDefaultValues:!0},t))},[p]);return f(c({},p),{setValues:d})}var p=o.useFieldArray},35569:function(e,t,r){"use strict";function n(e,t){return Object.keys(t).forEach(function(r){e[r]=t[r]}),e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r(27378)},9298:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y},meta:function(){return b}});var n=r(31373),o=r(52050),a=r(27378),u=r(35318),i=r(54483),l=r(56591),c=r(41875),f=r(56100),s=r(5044),p=r(43347),d=r.n(p),b={name:"Exemplo",tableOfContents:{depth:0,children:[{depth:1,slug:"#exemplo-de-valida\xe7\xe3o",title:"Exemplo de Valida\xe7\xe3o",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"},{depth:3,slug:"#campos-din\xe2micos",title:"Campos din\xe2micos"},{depth:3,slug:"#hooks-para-valida\xe7\xe3o-de-formul\xe1rios-e-m\xe1scaras",title:"Hooks para valida\xe7\xe3o de formul\xe1rios e m\xe1scaras"},{depth:3,slug:"#useform-props",title:"useForm props"}]}]}]}},m={meta:b};function y(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,u.kt)("wrapper",Object.assign({},m,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",Object.assign({},{id:"exemplo-de-valida\xe7\xe3o"}),"Exemplo de Valida\xe7\xe3o"),(0,u.kt)("p",null,"Este \xe9 um exemplo utilzando o @eduzz/houston-ui."),(0,u.kt)("p",null,"O componente de formul\xe1rio (Form) \xe9 utilizado para a cria\xe7\xe3o, valida\xe7\xe3o e controle de formul\xe1rios de uma aplica\xe7\xe3o,\npodendo ser utilizado atrav\xe9s de um contexto ou hook."),(0,u.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,u.kt)("pre",null,(0,u.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import useForm, { FormModel } from '@eduzz/houston-forms/useForm';\nimport Form from '@eduzz/houston-ui/Forms/Form';\n")),(0,u.kt)("h3",Object.assign({},{id:"exemplo"}),"Exemplo"),(0,u.kt)(f.X,{__position:0,code:'() => {\n  const form = useForm({\n    defaultValues: { money: 5 }, //estado inicial, n\xe3o precisa passar todas as propriedades\n    validationSchema: (yup) =>\n      yup.object().shape({\n        name: yup.string().required(),\n        money: yup.number().required().min(10),\n        option: yup.number().required().min(3),\n      }),\n  })\n  // Pode tipar o data com FormModel<typeof form>\n  const onSubmit = React.useCallback((data) => {\n    // onSubmit pode retornar uma promise, desse jeito ele ir\xe1\n    // setar corretamente o isSubmitting\n    return new Promise((resolve) => {\n      setTimeout(() => {\n        console.log(\'saved!\')\n        resolve(null)\n      }, 3000)\n    })\n  }, [])\n  const [options] = React.useState(() => [\n    { value: 1, label: \'Option 1\' },\n    { value: 2, label: \'Option 2\' },\n    { value: 3, label: \'Option 3 (disabled)\', disabled: true }, // \xe9 poss\xedvel desativar alguma op\xe7\xe3o\n    { value: 4, label: \'Option 4\' },\n    { value: 5, label: \'Option 5\' },\n  ])\n  return (\n    //Criando o contexto do form n\xe3o \xe9 preciso usar o register para os componentes filhos\n    <Form context={form} onSubmit={onSubmit}>\n      {/* a prop name que ir\xe1 dizer o campo que receber\xe1 o valor */}\n      <Input label="Name" name="name" />\n      {/* voc\xea passar uma fun\xe7\xe3o de mascara, voc\xea pode importar uma pronta ou criar a sua */}\n      <Input label="Money" name="money" mask="money" />\n      <Select label="Options" name="option" options={options} />\n      <Space>\n        <Button\n          htmlType="submit"\n          type="primary"\n          loading={form.formState.isSubmitting}\n        >\n          Submit\n        </Button>\n        {/* Por ser um type reset n\xe3o precisa passar o form.handleReset */}\n        <Button\n          danger\n          type="text"\n          htmlType="reset"\n          disabled={form.formState.isSubmitting}\n        >\n          Reset\n        </Button>\n      </Space>\n    </Form>\n  )\n}',scope:{props:r,DeleteOutlined:i.Z,Button:l.ZP,Space:c.Z,Playground:f.X,Form:s.Form,Input:s.Input,Select:s.Select,ErrorMessage:s.ErrorMessage,useForm:d(),useFieldArray:p.useFieldArray,meta:b},mdxType:"Playground"},function(){var e=d()({defaultValues:{money:5},validationSchema:function(e){return e.object().shape({name:e.string().required(),money:e.number().required().min(10),option:e.number().required().min(3)})}}),t=a.useCallback(function(e){return new Promise(function(e){setTimeout(function(){console.log("saved!"),e(null)},3e3)})},[]),r=(0,o.Z)(a.useState(function(){return[{value:1,label:"Option 1"},{value:2,label:"Option 2"},{value:3,label:"Option 3 (disabled)",disabled:!0},{value:4,label:"Option 4"},{value:5,label:"Option 5"}]}),1)[0];return(0,u.kt)(s.Form,{context:e,onSubmit:t,mdxType:"Form"},(0,u.kt)(s.Input,{label:"Name",name:"name",mdxType:"Input"}),(0,u.kt)(s.Input,{label:"Money",name:"money",mask:"money",mdxType:"Input"}),(0,u.kt)(s.Select,{label:"Options",name:"option",options:r,mdxType:"Select"}),(0,u.kt)(c.Z,{mdxType:"Space"},(0,u.kt)(l.ZP,{htmlType:"submit",type:"primary",loading:e.formState.isSubmitting,mdxType:"Button"},"Submit"),(0,u.kt)(l.ZP,{danger:!0,type:"text",htmlType:"reset",disabled:e.formState.isSubmitting,mdxType:"Button"},"Reset")))}),(0,u.kt)("h3",Object.assign({},{id:"campos-din\xe2micos"}),"Campos din\xe2micos"),(0,u.kt)(f.X,{__position:1,code:'() => {\n  const form = useForm({\n    defaultValues: {\n      users: [{ id: Date.now() }],\n    },\n    validationSchema: (yup) =>\n      yup.object().shape({\n        users: yup\n          .array(\n            yup.object().shape({\n              id: yup.number().required(),\n              name: yup.string().required(),\n              age: yup.number().required(),\n            }),\n          )\n          .min(1),\n      }),\n  })\n  const { fields, append, remove } = useFieldArray({\n    control: form.control,\n    name: \'users\',\n  })\n  const handleClickAdd = React.useCallback(\n    () => append({ id: Date.now() }),\n    [append],\n  )\n  const handleClickRemove = React.useCallback(\n    (index) => remove(index),\n    [remove],\n  )\n  const onSubmit = React.useCallback((data) => console.log({ data }), [])\n  return (\n    <Form context={form} onSubmit={onSubmit}>\n      {fields.map((user, index) => (\n        <Space key={user.id}>\n          <Input\n            name={`users.${index}.name`}\n            label="Nome"\n            fullWidth={false}\n          />\n          <Input\n            name={`users.${index}.age`}\n            label="Idade"\n            fullWidth={false}\n          />\n          <Button\n            danger\n            icon={<DeleteOutlined />}\n            shape="circle"\n            onClick={() => handleClickRemove(index)}\n          ></Button>\n        </Space>\n      ))}\n      <ErrorMessage name="users" />\n      <Space>\n        <Button type="text" onClick={handleClickAdd}>\n          Adicionar linha\n        </Button>\n        <Button htmlType="submit" type="primary">\n          Enviar\n        </Button>\n      </Space>\n    </Form>\n  )\n}',scope:{props:r,DeleteOutlined:i.Z,Button:l.ZP,Space:c.Z,Playground:f.X,Form:s.Form,Input:s.Input,Select:s.Select,ErrorMessage:s.ErrorMessage,useForm:d(),useFieldArray:p.useFieldArray,meta:b},mdxType:"Playground"},function(){var e=d()({defaultValues:{users:[{id:Date.now()}]},validationSchema:function(e){return e.object().shape({users:e.array(e.object().shape({id:e.number().required(),name:e.string().required(),age:e.number().required()})).min(1)})}}),t=(0,p.useFieldArray)({control:e.control,name:"users"}),r=t.fields,n=t.append,o=t.remove,f=a.useCallback(function(){return n({id:Date.now()})},[n]),b=a.useCallback(function(e){return o(e)},[o]),m=a.useCallback(function(e){return console.log({data:e})},[]);return(0,u.kt)(s.Form,{context:e,onSubmit:m,mdxType:"Form"},r.map(function(e,t){return(0,u.kt)(c.Z,{key:e.id,mdxType:"Space"},(0,u.kt)(s.Input,{name:"users.".concat(t,".name"),label:"Nome",fullWidth:!1,mdxType:"Input"}),(0,u.kt)(s.Input,{name:"users.".concat(t,".age"),label:"Idade",fullWidth:!1,mdxType:"Input"}),(0,u.kt)(l.ZP,{danger:!0,icon:(0,u.kt)(i.Z,{mdxType:"DeleteOutlined"}),shape:"circle",onClick:function(){return b(t)},mdxType:"Button"}))}),(0,u.kt)(s.ErrorMessage,{name:"users",mdxType:"ErrorMessage"}),(0,u.kt)(c.Z,{mdxType:"Space"},(0,u.kt)(l.ZP,{type:"text",onClick:f,mdxType:"Button"},"Adicionar linha"),(0,u.kt)(l.ZP,{htmlType:"submit",type:"primary",mdxType:"Button"},"Enviar")))}),(0,u.kt)("h3",Object.assign({},{id:"hooks-para-valida\xe7\xe3o-de-formul\xe1rios-e-m\xe1scaras"}),"Hooks para valida\xe7\xe3o de formul\xe1rios e m\xe1scaras"),(0,u.kt)("p",null,"Veja os hooks do Houston para validar formul\xe1rios e m\xe1scaras em ",(0,u.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/eduzz/houston/tree/master/src/pages/forms"}),"@eduzz/houston-forms"),"."),(0,u.kt)("h3",Object.assign({},{id:"useform-props"}),"useForm props"),(0,u.kt)("p",null,"O \xfanico parametro especifico \xe9 o validationSchema, o resto \xe9 configura\xe7\xe3o padr\xe3o do ",(0,u.kt)("a",Object.assign({parentName:"p"},{href:"https://react-hook-form.com/api/useform"}),"react-hook-form"),"."),(0,u.kt)("table",null,(0,u.kt)("thead",{parentName:"table"},(0,u.kt)("tr",{parentName:"thead"},(0,u.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,u.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,u.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,u.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,u.kt)("tbody",{parentName:"table"},(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",Object.assign({parentName:"tr"},{align:null}),"validationSchema"),(0,u.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,u.kt)("inlineCode",{parentName:"td"},"function")),(0,u.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,u.kt)("inlineCode",{parentName:"td"},"true")),(0,u.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Utilizado para valida\xe7\xe3o do formul\xe1rio")))))}y.isMDXComponent=!0;var O={editThisPagePath:"src/pages/forms/example.mdx"};for(var v in O)window[v]=O[v]}},function(e){e.O(0,[4526,7898,2885,2192,6803,4109,6013,9774,2888,179],function(){return e(e.s=5966)}),_N_E=e.O()}]);