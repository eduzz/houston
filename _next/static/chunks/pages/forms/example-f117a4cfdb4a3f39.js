(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[158],{5966:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms/example",function(){return c(9298)}])},7833:function(a,b){"use strict";function c(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{get:function(){return e},enumerable:!0});function d(a,b){return Array(a).fill(b).join("")}var e={apply:function(a){return null==a||""===a?"":new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(Number(a)||0)},clean:function(a){(a=(a||"").toString().replace(/[^\d,]/gi,"")).includes(",")||(a="0,"+(b=a,e=2,f="0",g=e?b.length:0,g<e?d(e-g,"0")+b:b||""));var b,e,f,g,h,i,j=(h=a.split(","),i=2,function(a){if(Array.isArray(a))return a}(h)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(h,i)||function a(b,d){if(b){if("string"==typeof b)return c(b,d);var e=Object.prototype.toString.call(b).slice(8,-1);if("Object"===e&&b.constructor&&(e=b.constructor.name),"Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c(b,d)}}(h,i)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[1];return j&&2!==j.length&&(a=a.replace(",","").replace(/(\d+)?(\d{2})/gi,"$1,$2").replace(/^,/gi,"0,")),parseFloat(a.replace(/\./gi,"").replace(",","."))}}},43347:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),!function(a,b){for(var c in b)Object.defineProperty(a,c,{get:b[c],enumerable:!0})}(b,{default:function(){return h},useFieldArray:function(){return i}}),c(29580);var d=c(26593),e=c(42192),f=function(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=g();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c.default=a,b&&b.set(a,c),c}(c(14633));function g(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return g=function(){return a},a}function h(a){var b,c,g=a.validationSchema,h=a.defaultValues,i=a.initialValues,j=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["validationSchema","defaultValues","initialValues"]),k=(b=function(a){for(var b=arguments,c=1;c<arguments.length;c++)!function(c){var d=null!=b[c]?b[c]:{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){var c,e,f;c=a,e=b,f=d[b],e in c?Object.defineProperty(c,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[e]=f})}(c);return a}({},j),c=(c={defaultValues:null!=h?h:i},c),Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(c)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(c)).forEach(function(a){Object.defineProperty(b,a,Object.getOwnPropertyDescriptor(c,a))}),b);return g&&Object.assign(k,{resolver:(0,d.yupResolver)("function"==typeof g?g(f):g)}),(0,e.useForm)(k)}var i=e.useFieldArray},94358:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{get:function(){return g},enumerable:!0});var d,e=c(24246),f=(d=c(16849),d&&d.__esModule?d:{default:d}),g=function(a){var b,c;return(0,e.jsxs)(f.default,(b=function(a){for(var b=arguments,c=1;c<arguments.length;c++)!function(c){var d=null!=b[c]?b[c]:{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){var c,e,f;c=a,e=b,f=d[b],e in c?Object.defineProperty(c,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[e]=f})}(c);return a}({},a),c=(c={children:[(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M76.5 16C71.8056 16 68 19.8056 68 24.5V27H40C35.5817 27 32 30.5817 32 35C32 39.4183 35.5817 43 40 43H152C156.418 43 160 39.4183 160 35C160 30.5817 156.418 27 152 27H125V24.5C125 19.8056 121.194 16 116.5 16H76.5Z"}),(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M46 55C49.3137 55 52 57.6863 52 61V62.0583V65.1333V164H139V65.1333V62.0583V61C139 57.6863 141.686 55 145 55C148.314 55 151 57.6863 151 61V62.0583V65.1333V166C151 171.523 146.523 176 141 176H50C44.4772 176 40 171.523 40 166V65.1333V62.0583V61C40 57.6863 42.6863 55 46 55Z"})]},c),Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(c)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(c)).forEach(function(a){Object.defineProperty(b,a,Object.getOwnPropertyDescriptor(c,a))}),b))}},30222:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{get:function(){return m},enumerable:!0});var d,e=c(24246),f=j(c(27378)),g=j(c(12103)),h=(d=c(15244),d&&d.__esModule?d:{default:d});function i(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return i=function(){return a},a}function j(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=i();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c.default=a,b&&b.set(a,c),c}function k(){var a,b,c=(a=["\n    border: none;\n    cursor: pointer;\n    text-transform: none;\n    height: ","rem;\n    min-width: ","rem;\n    padding: ",";\n    border-radius: ",";\n    font-weight: ",";\n    font-family: ",";\n    line-height: ",";\n    font-size: ",";\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n\n    :not(:focus) {\n      transition: 0.3s;\n    }\n\n    :focus,\n    .--active {\n      outline: solid "," ",";\n    }\n\n    &.--contained {\n      background-color: ",";\n      color: ",";\n\n      &:hover:not(:disabled),\n      &:focus,\n      &.--active {\n        background-color: ",";\n      }\n    }\n\n    &.--outlined {\n      background-color: transparent;\n      border: "," solid;\n      border-color: ",";\n      color: ",";\n\n      &:hover:not(:disabled),\n      &:focus,\n      &.--active {\n        background-color: ",";\n      }\n    }\n\n    &.--text {\n      background-color: ",";\n      color: ",";\n\n      &:hover:not(:disabled),\n      &:focus,\n      &.--active {\n        background-color: ",";\n      }\n    }\n\n    &.--disabled {\n      border: none;\n      background-color: ",";\n      color: ",";\n      cursor: not-allowed;\n    }\n\n    &.--full-width {\n      width: 100%;\n    }\n\n    & > .__loader {\n      position: absolute;\n      left: 50%;\n      transform: translate(-50%, 0);\n    }\n\n    & > .--hidden {\n      visibility: hidden;\n    }\n\n    & > .__startIcon {\n      margin-right: ",";\n    }\n\n    & > .__endIcon {\n      margin-left: ",";\n    }\n\n    & > .__startIcon,\n    & > .__endIcon {\n      line-height: 0;\n    }\n\n    & > .__startIcon > svg,\n    & > .__endIcon > svg {\n      vertical-align: middle;\n      font-size: ","rem;\n    }\n  "],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return k=function(){return c},c}var l=f.forwardRef(function(a,b){var c,d,f=a.children,i=a.disabled,j=void 0!==i&&i,k=a.startIcon,l=a.endIcon,m=a.variant,n=a.loading,o=void 0!==n&&n,p=a.className,q=a.fullWidth,r=a.active,s=a.type,t=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["children","disabled","startIcon","endIcon","variant","loading","className","fullWidth","active","type"]);return(0,e.jsxs)("button",(c=function(a){for(var b=arguments,c=1;c<arguments.length;c++)!function(c){var d=null!=b[c]?b[c]:{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){var c,e,f;c=a,e=b,f=d[b],e in c?Object.defineProperty(c,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[e]=f})}(c);return a}({ref:b,role:"button",className:(0,g.cx)(p,"hst-button","--".concat(null!=m?m:"contained"),{"--full-width":q,"--disabled":j||o,"--active":r}),type:void 0===s?"button":s},t),d={disabled:j||o,"aria-disabled":j,children:[!!k&&(0,e.jsx)("span",{className:(0,g.cx)("__startIcon",{"--hidden":o}),children:k}),!o&&(0,e.jsx)("span",{className:"__text",children:f}),o&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{className:"__loader",children:(0,e.jsx)(h.default,{size:20,color:"inherit"})}),(0,e.jsx)("span",{className:"__text --hidden",children:f})]}),!!l&&(0,e.jsx)("span",{className:(0,g.cx)("__endIcon",{"--hidden":o}),children:l})]},d=null!=d?d:{},Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(d)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(d)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(d,a))}),c))}),m=(0,g.default)(l,{label:"houston-button"})(function(a){var b=a.theme;return(0,g.css)(k(),b.pxToRem(48),b.pxToRem(96),b.spacing.squish.xxs,b.border.radius.xs,b.font.weight.semibold,b.font.family.base,b.line.height.default,b.font.size.xs,b.border.width.sm,b.feedbackColor.informative.pure,b.brandColor.primary.pure,b.neutralColor.high.pure,b.hexToRgba(b.brandColor.primary.pure,b.opacity.level[8]),b.border.width.xs,b.neutralColor.low.pure,b.neutralColor.low.pure,b.hexToRgba(b.neutralColor.low.pure,b.opacity.level[2]),b.hexToRgba(b.neutralColor.low.pure,b.opacity.level[0]),b.neutralColor.low.pure,b.hexToRgba(b.neutralColor.low.pure,b.opacity.level[2]),b.hexToRgba(b.neutralColor.low.pure,b.opacity.level[2]),b.hexToRgba(b.neutralColor.low.pure,b.opacity.level[6]),b.spacing.inline.nano,b.spacing.inline.nano,b.pxToRem(24))})},54843:function(a,b,c){"use strict";Object.defineProperty(b,"Z",{get:function(){return l},enumerable:!0});var d,e=c(24246),f=function(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=j();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c.default=a,b&&b.set(a,c),c}(c(27378)),g=c(14150),h=c(42192),i=(d=c(38861),d&&d.__esModule?d:{default:d});function j(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return j=function(){return a},a}var k=function(a){var b=a.name,c=a.className,d=(0,h.useFormState)({name:b,exact:!0});return(0,e.jsx)(g.ErrorMessage,{errors:d.errors,name:b,render:function(a){var b=a.message;return(0,e.jsx)(i.default,{className:c,children:b})}})},l=f.memo(k)},42900:function(a,b,c){"use strict";Object.defineProperty(b,"Z",{get:function(){return j},enumerable:!0});var d=c(24246),e=function(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=g();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c.default=a,b&&b.set(a,c),c}(c(27378)),f=c(42192);function g(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return g=function(){return a},a}function h(a){for(var b=arguments,c=1;c<arguments.length;c++)!function(c){var d=null!=b[c]?b[c]:{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){var c,e,f;c=a,e=b,f=d[b],e in c?Object.defineProperty(c,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[e]=f})}(c);return a}function i(a,b){return b=null!=b?b:{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))}),a}var j=function(a){var b=a.context,c=a.onSubmit,g=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["context","onSubmit"]),j=e.useCallback(function(){return b.reset()},[b]);return(0,d.jsx)(f.FormProvider,i(h({},b),{children:(0,d.jsx)("form",i(h({},g),{onReset:j,onSubmit:b.handleSubmit(c),noValidate:!0}))}))}},72399:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{get:function(){return m},enumerable:!0});var d=c(24246),e=h(c(27378)),f=h(c(12103));function g(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return g=function(){return a},a}function h(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=g();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c.default=a,b&&b.set(a,c),c}function i(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function j(){var a=i(["\n    border: none;\n    background-color: ",";\n    border-radius: ",";\n    cursor: pointer;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n\n    :not(:focus) {\n      transition: 0.3s;\n    }\n\n    &.--lg,\n    &.--large {\n      width: ","rem;\n      height: ","rem;\n    }\n\n    &.--md,\n    &.--medium,\n    &.--small {\n      width: ","rem;\n      height: ","rem;\n    }\n\n    &:disabled {\n      cursor: default;\n    }\n\n    .__icon {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      &.--disabled {\n        color: ",";\n      }\n\n      &.--lg,\n      &.--large {\n        width: ","rem;\n        height: ","rem;\n\n        > svg {\n          vertical-align: middle;\n          font-size: ","rem;\n        }\n      }\n\n      &.--md,\n      &.--medium,\n      &.--small {\n        width: ","rem;\n        height: ","rem;\n\n        > svg {\n          vertical-align: middle;\n          font-size: ","rem;\n        }\n      }\n    }\n\n    &:focus {\n      outline: solid "," ",";\n    }\n\n    &:hover:not(:disabled),\n    &:focus,\n    &.--active {\n      background-color: ",";\n    }\n  "]);return j=function(){return a},a}function k(){var a=i(["\n  ","\n"]);return k=function(){return a},a}var l=function(a){var b,c,e=a.className,g=a.size,h=a.children,i=a.disabled,j=void 0!==i&&i,k=a.active,l=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["className","size","children","disabled","active"]);return(0,d.jsx)("button",(b=function(a){for(var b=arguments,c=1;c<arguments.length;c++)!function(c){var d=null!=b[c]?b[c]:{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){var c,e,f;c=a,e=b,f=d[b],e in c?Object.defineProperty(c,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[e]=f})}(c);return a}({role:"button",disabled:j,className:(0,f.cx)(e,"--".concat(null!=g?g:"lg"),{"--active":k}),"aria-disabled":j},l),c=(c={children:(0,d.jsx)("div",{className:(0,f.cx)("__icon","--".concat(null!=g?g:"lg"),{"--disabled":j}),children:h})},c),Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(c)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(c)).forEach(function(a){Object.defineProperty(b,a,Object.getOwnPropertyDescriptor(c,a))}),b))},m=e.memo((0,f.default)(l,{label:"houston-icon-button"})(k(),function(a){var b=a.theme;return(0,f.css)(j(),b.hexToRgba(b.neutralColor.low.pure,b.opacity.level[0]),b.border.radius.circular,b.pxToRem(48),b.pxToRem(48),b.pxToRem(32),b.pxToRem(32),b.hexToRgba(b.neutralColor.low.pure,b.opacity.level[6]),b.pxToRem(24),b.pxToRem(24),b.pxToRem(24),b.pxToRem(16),b.pxToRem(16),b.pxToRem(16),b.border.width.sm,b.feedbackColor.informative.pure,b.hexToRgba(b.neutralColor.low.pure,b.opacity.level[2]))}))},9298:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return u},meta:function(){return s}});var d=c(31373),e=c(52050),f=c(27378),g=c(35318),h=c(56100),i=c(7833),j=c(43347),k=c.n(j),l=c(94358),m=c(30222),n=c(54843),o=c(42900),p=c(42680),q=c(56990),r=c(72399),s={name:"Exemplo",tableOfContents:{depth:0,children:[{depth:1,slug:"#exemplo-de-valida\xe7\xe3o",title:"Exemplo de Valida\xe7\xe3o",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"},{depth:3,slug:"#campos-din\xe2micos",title:"Campos din\xe2micos"},{depth:3,slug:"#hooks-para-valida\xe7\xe3o-de-formul\xe1rios-e-m\xe1scaras",title:"Hooks para valida\xe7\xe3o de formul\xe1rios e m\xe1scaras"},{depth:3,slug:"#useform-props",title:"useForm props"}]}]}]}},t={meta:s};function u(a){var b=a.components,c=(0,d.Z)(a,["components"]);return(0,g.kt)("wrapper",Object.assign({},t,c,{components:b,mdxType:"MDXLayout"}),(0,g.kt)("h1",Object.assign({},{id:"exemplo-de-valida\xe7\xe3o"}),"Exemplo de Valida\xe7\xe3o"),(0,g.kt)("p",null,"Este \xe9 um exemplo utilzando o @eduzz/houston-ui."),(0,g.kt)("p",null,"O componente de formul\xe1rio (Form) \xe9 utilizado para a cria\xe7\xe3o, valida\xe7\xe3o e controle de formul\xe1rios de uma aplica\xe7\xe3o,\npodendo ser utilizado atrav\xe9s de um contexto ou hook."),(0,g.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,g.kt)("pre",null,(0,g.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import useForm, { FormModel } from '@eduzz/houston-forms/useForm';\nimport Form from '@eduzz/houston-ui/Forms/Form';\n")),(0,g.kt)("h3",Object.assign({},{id:"exemplo"}),"Exemplo"),(0,g.kt)(h.X,{__position:0,code:'() => {\n  const form = useForm({\n    defaultValues: { money: 5 }, //estado inicial, n\xe3o precisa passar todas as propriedades\n    validationSchema: (yup) =>\n      yup.object().shape({\n        name: yup.string().required(),\n        money: yup.number().required().min(10),\n        option: yup.number().required().min(3),\n      }),\n  })\n  // Pode tipar o data com FormModel<typeof form>\n  const onSubmit = React.useCallback((data) => {\n    // onSubmit pode retornar uma promise, desse jeito ele ir\xe1\n    // setar corretamente o isSubmitting\n    return new Promise((resolve) => {\n      setTimeout(() => {\n        console.log(\'saved!\')\n        resolve(null)\n      }, 3000)\n    })\n  }, [])\n  const [options] = React.useState(() => [\n    { value: 1, label: \'Option 1\' },\n    { value: 2, label: \'Option 2\' },\n    { value: 3, label: \'Option 3 (disabled)\', disabled: true }, // \xe9 poss\xedvel desativar alguma op\xe7\xe3o\n    { value: 4, label: \'Option 4\' },\n    { value: 5, label: \'Option 5\' },\n  ])\n  return (\n    //Criando o contexto do form n\xe3o \xe9 preciso usar o register para os componentes filhos\n    <Form context={form} onSubmit={onSubmit}>\n      {/* a prop name que ir\xe1 dizer o campo que receber\xe1 o valor */}\n      <Input label="Name" name="name" />\n      {/* voc\xea passar uma fun\xe7\xe3o de mascara, voc\xea pode importar uma pronta ou criar a sua */}\n      <Input label="Money" name="money" mask={moneyMask} />\n      <Select label="Options" name="option" options={options} />\n      <Button type="submit" loading={form.formState.isSubmitting}>\n        Submit\n      </Button>\n      {/* Por ser um type reset n\xe3o precisa passar o form.handleReset */}\n      <Button\n        variant="text"\n        type="reset"\n        disabled={form.formState.isSubmitting}\n      >\n        Reset\n      </Button>\n    </Form>\n  )\n}',scope:{props:c,Playground:h.X,moneyMask:i.default,useForm:k(),useFieldArray:j.useFieldArray,TrashOutline:l.default,Button:m.default,ErrorMessage:n.Z,Form:o.Z,Input:p.default,Select:q.default,IconButton:r.default,meta:s},mdxType:"Playground"},function(){var a=k()({defaultValues:{money:5},validationSchema:function(a){return a.object().shape({name:a.string().required(),money:a.number().required().min(10),option:a.number().required().min(3)})}}),b=f.useCallback(function(a){return new Promise(function(a){setTimeout(function(){console.log("saved!"),a(null)},3e3)})},[]),c=(0,e.Z)(f.useState(function(){return[{value:1,label:"Option 1"},{value:2,label:"Option 2"},{value:3,label:"Option 3 (disabled)",disabled:!0},{value:4,label:"Option 4"},{value:5,label:"Option 5"}]}),1)[0];return(0,g.kt)(o.Z,{context:a,onSubmit:b,mdxType:"Form"},(0,g.kt)(p.default,{label:"Name",name:"name",mdxType:"Input"}),(0,g.kt)(p.default,{label:"Money",name:"money",mask:i.default,mdxType:"Input"}),(0,g.kt)(q.default,{label:"Options",name:"option",options:c,mdxType:"Select"}),(0,g.kt)(m.default,{type:"submit",loading:a.formState.isSubmitting,mdxType:"Button"},"Submit"),(0,g.kt)(m.default,{variant:"text",type:"reset",disabled:a.formState.isSubmitting,mdxType:"Button"},"Reset"))}),(0,g.kt)("h3",Object.assign({},{id:"campos-din\xe2micos"}),"Campos din\xe2micos"),(0,g.kt)(h.X,{__position:1,code:'() => {\n  const form = useForm({\n    defaultValues: {\n      users: [{ id: Date.now() }],\n    },\n    validationSchema: (yup) =>\n      yup.object().shape({\n        users: yup\n          .array(\n            yup.object().shape({\n              id: yup.number().required(),\n              name: yup.string().required(),\n              age: yup.number().required(),\n            }),\n          )\n          .min(1),\n      }),\n  })\n  const { fields, append, remove } = useFieldArray({\n    control: form.control,\n    name: \'users\',\n  })\n  const handleClickAdd = React.useCallback(\n    () => append({ id: Date.now() }),\n    [append],\n  )\n  const handleClickRemove = React.useCallback(\n    (index) => remove(index),\n    [remove],\n  )\n  const onSubmit = React.useCallback((data) => console.log({ data }), [])\n  return (\n    <Form context={form} onSubmit={onSubmit}>\n      {fields.map((user, index) => (\n        <div key={user.id}>\n          <Input\n            name={`users.${index}.name`}\n            label="Nome"\n            fullWidth={false}\n          />\n          <Input\n            name={`users.${index}.age`}\n            label="Idade"\n            fullWidth={false}\n          />\n          <IconButton\n            style={{ marginTop: 30 }}\n            onClick={() => handleClickRemove(index)}\n          >\n            <TrashOutline />\n          </IconButton>\n        </div>\n      ))}\n      <ErrorMessage name="users" />\n      <Button variant="text" onClick={handleClickAdd}>\n        Adicionar linha\n      </Button>\n      <Button type="submit">Enviar</Button>\n    </Form>\n  )\n}',scope:{props:c,Playground:h.X,moneyMask:i.default,useForm:k(),useFieldArray:j.useFieldArray,TrashOutline:l.default,Button:m.default,ErrorMessage:n.Z,Form:o.Z,Input:p.default,Select:q.default,IconButton:r.default,meta:s},mdxType:"Playground"},function(){var a=k()({defaultValues:{users:[{id:Date.now()}]},validationSchema:function(a){return a.object().shape({users:a.array(a.object().shape({id:a.number().required(),name:a.string().required(),age:a.number().required()})).min(1)})}}),b=(0,j.useFieldArray)({control:a.control,name:"users"}),c=b.fields,d=b.append,e=b.remove,h=f.useCallback(function(){return d({id:Date.now()})},[d]),i=f.useCallback(function(a){return e(a)},[e]),q=f.useCallback(function(a){return console.log({data:a})},[]);return(0,g.kt)(o.Z,{context:a,onSubmit:q,mdxType:"Form"},c.map(function(a,b){return(0,g.kt)("div",{key:a.id},(0,g.kt)(p.default,{name:"users.".concat(b,".name"),label:"Nome",fullWidth:!1,mdxType:"Input"}),(0,g.kt)(p.default,{name:"users.".concat(b,".age"),label:"Idade",fullWidth:!1,mdxType:"Input"}),(0,g.kt)(r.default,{style:{marginTop:30},onClick:function(){return i(b)},mdxType:"IconButton"},(0,g.kt)(l.default,{mdxType:"TrashOutline"})))}),(0,g.kt)(n.Z,{name:"users",mdxType:"ErrorMessage"}),(0,g.kt)(m.default,{variant:"text",onClick:h,mdxType:"Button"},"Adicionar linha"),(0,g.kt)(m.default,{type:"submit",mdxType:"Button"},"Enviar"))}),(0,g.kt)("h3",Object.assign({},{id:"hooks-para-valida\xe7\xe3o-de-formul\xe1rios-e-m\xe1scaras"}),"Hooks para valida\xe7\xe3o de formul\xe1rios e m\xe1scaras"),(0,g.kt)("p",null,"Veja os hooks do Houston para validar formul\xe1rios e m\xe1scaras em ",(0,g.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/eduzz/houston/tree/master/src/pages/forms"}),"@eduzz/houston-forms"),"."),(0,g.kt)("h3",Object.assign({},{id:"useform-props"}),"useForm props"),(0,g.kt)("p",null,"O \xfanico parametro especifico \xe9 o validationSchema, o resto \xe9 configura\xe7\xe3o padr\xe3o do ",(0,g.kt)("a",Object.assign({parentName:"p"},{href:"https://react-hook-form.com/api/useform"}),"react-hook-form"),"."),(0,g.kt)("table",null,(0,g.kt)("thead",{parentName:"table"},(0,g.kt)("tr",{parentName:"thead"},(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,g.kt)("tbody",{parentName:"table"},(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"validationSchema"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"function")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"true")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Utilizado para valida\xe7\xe3o do formul\xe1rio")))))}u.isMDXComponent=!0;var v={editThisPagePath:"src/pages/forms/example.mdx"};for(var w in v)window[w]=v[w]}},function(a){a.O(0,[4526,7983,967,8194,9978,2192,2122,2968,4109,8861,418,2680,897,6990,9774,2888,179],function(){var b;return a(a.s=5966)}),_N_E=a.O()}])