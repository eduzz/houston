(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8255],{92793:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Showcase",function(){return c(21791)}])},54703:function(a,b,c){"use strict";Object.defineProperty(b,"Z",{enumerable:!0,get:function(){return o}});var d=c(24246),e=h(c(27378)),f=h(c(12103));function g(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(g=function(a){return a?c:b})(a)}function h(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=g(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var h=e?Object.getOwnPropertyDescriptor(a,f):null;h&&(h.get||h.set)?Object.defineProperty(d,f,h):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}function i(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function j(){var a=i(["\n        &.--","-"," {\n          flex-basis: ",";\n          flex: ",";\n        }\n      "]);return j=function(){return a},a}function k(){var a=i(["\n      "," {\n        ","\n      }\n    "]);return k=function(){return a},a}var l=[1,2,3,4,5,6,7,8,9,10,11,12,"auto","fill"],m=["xs","sm","md","lg","xlg"],n=e.forwardRef(function(a,b){var c=a.className,e=a.children,g=a.xs,h=void 0===g?"fill":g,i=a.sm,j=a.md,k=a.lg,l=a.xlg;return(0,d.jsx)("div",{ref:b,className:(0,f.cx)(c,"__houston_grid_column",h&&"--xs-".concat(h),i&&"--sm-".concat(i),j&&"--md-".concat(j),k&&"--lg-".concat(k),l&&"--xlg-".concat(l)),children:e})}),o=(0,f.default)(n,{label:"houston-grid-column"})(function(a){var b=a.theme;return m.map(function(a){var c=l.map(function(b){return(0,f.css)(j(),a,b,"string"==typeof b?"auto":"".concat(b/12*100,"%"),"fill"===b?1:null)});return"xs"===a?c:(0,f.css)(k(),b.breakpoints.up(a),c)})})},2756:function(a,b,c){"use strict";Object.defineProperty(b,"Z",{enumerable:!0,get:function(){return k}});var d=c(24246),e=h(c(27378)),f=h(c(12103));function g(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(g=function(a){return a?c:b})(a)}function h(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=g(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var h=e?Object.getOwnPropertyDescriptor(a,f):null;h&&(h.get||h.set)?Object.defineProperty(d,f,h):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}function i(){var a,b,c=(a=["\n    width: 100%;\n    max-width: ",";\n    margin: 0 auto;\n\n    &.--layout-fluid {\n      max-width: 100%;\n    }\n  "],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return i=function(){return c},c}var j=e.forwardRef(function(a,b){var c=a.className,e=a.children,g=a.layout;return(0,d.jsx)("div",{ref:b,className:(0,f.cx)(c,"--layout-".concat(null!=g?g:"solid")),children:e})}),k=(0,f.default)(j,{label:"houston-grid-container"})(function(a){var b=a.theme;return(0,f.css)(i(),b.breakpoints.xlg)})},78983:function(a,b,c){"use strict";Object.defineProperty(b,"Z",{enumerable:!0,get:function(){return u}});var d,e,f,g=c(24246),h=k(c(27378)),i=k(c(12103));function j(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(j=function(a){return a?c:b})(a)}function k(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=j(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}function l(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function m(){var a=l(["\n        &.--justify-content-"," {\n          justify-content: ",";\n        }\n      "]);return m=function(){return a},a}function n(){var a=l(["\n        &.--align-items-"," {\n          align-items: ",";\n        }\n      "]);return n=function(){return a},a}function o(){var a=l(["\n        &.--spacing-"," {\n          width: calc(100% + ",");\n          margin: calc(-"," / 2);\n\n          & > .__houston_grid_column {\n            box-sizing: border-box;\n            padding: calc("," / 2);\n          }\n        }\n      "]);return o=function(){return a},a}function p(){var a=l(["\n    display: flex;\n    flex-wrap: wrap;\n\n    ","\n\n    ","\n\n    ","\n  "]);return p=function(){return a},a}var q=["flex-start","flex-end","space-between","center","space-around"],r=["flex-start","flex-end","center","baseline","stretch"],s=["none","nano","xxxs","xxs","xs","md","xl"],t=h.forwardRef(function(a,b){var c=a.className,d=a.children,e=a.spacing,f=a.justifyContent,h=a.alignItems;return(0,g.jsx)("div",{ref:b,className:(0,i.cx)(c,"--spacing-".concat(void 0===e?"xxxs":e),"--justify-content-".concat(void 0===f?"flex-start":f),"--align-items-".concat(void 0===h?"flex-start":h)),children:d})}),u=(0,i.default)(t,{label:"houston-grid-row"})(function(a){var b=a.theme;return(0,i.css)(p(),q.map(function(a){return(0,i.css)(m(),a,a)}),r.map(function(a){return(0,i.css)(n(),a,a)}),s.map(function(a){return(0,i.css)(o(),a,null!==(d=b.spacing.inline[a])&& void 0!==d?d:"0rem",null!==(e=b.spacing.inline[a])&& void 0!==e?e:"0rem",null!==(f=b.spacing.inline[a])&& void 0!==f?f:"0rem")}))})},60401:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return k}});var d,e=c(24246);c(27378);var f=c(55693),g=(d=c(12103),d&&d.__esModule?d:{default:d}),h=c(11811);function i(){var a,b,c=(a=["\n  display: flex;\n  position: relative;\n  top: 0;\n  left: 0;\n  transition: transform ease-in-out 0.5s;\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return i=function(){return c},c}var j=function(a){var b,c,d=a.children,g=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["children"]),i=(0,f.useContextSelector)(h.ShowcaseContext,function(a){return a.currentStep}),j=(0,f.useContextSelector)(h.ShowcaseContext,function(a){return a.stepSize});return(0,e.jsx)("div",(b=function(a){for(var b=arguments,c=1;c<arguments.length;c++)!function(c){var d=null!=b[c]?b[c]:{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){var c,e,f;c=a,e=b,f=d[b],e in c?Object.defineProperty(c,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[e]=f})}(c);return a}({},g),c=(c={style:{transform:"translateX(".concat(-((i-1)*j),"px)")},children:d},c),Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(c)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(c)).forEach(function(a){Object.defineProperty(b,a,Object.getOwnPropertyDescriptor(c,a))}),b))},k=(0,g.default)(j,{label:"hst-showcase-content"})(i())},44741:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return m}});var d=c(24246),e=c(55693),f=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=h(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}(c(45336)),g=c(11811);function h(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(h=function(a){return a?c:b})(a)}function i(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function j(){var a=i(["\n    padding: ",";\n\n    & .hst-dots {\n      height: ","rem;\n      width: ","rem;\n      margin-right: ","rem;\n      background-color: ",";\n      border: solid "," ",";\n      border-radius: ",";\n      display: inline-block;\n    }\n\n    & .--hst-dots-active {\n      background-color: ",";\n      border: none;\n    }\n  "]);return j=function(){return a},a}function k(){var a=i(["\n  ","\n"]);return k=function(){return a},a}var l=function(a){var b=a.className,c=(0,e.useContextSelector)(g.ShowcaseContext,function(a){return a.currentStep}),h=(0,e.useContextSelector)(g.ShowcaseContext,function(a){return a.controlDots}),i=(0,e.useContextSelector)(g.ShowcaseContext,function(a){return a.totalSteps});if(!h)return null;var j=Array(i).fill(0);return(0,d.jsx)("div",{className:b,children:j.map(function(a,b){var e=c-1===b;return(0,d.jsx)("span",{className:(0,f.cx)("hst-dots","".concat(e&&"--hst-dots-active"))},"dot-".concat(b))})})},m=(0,f.default)(l,{label:"hst-control-dots"})(k(),function(a){var b=a.theme;return(0,f.css)(j(),b.spacing.inset.sm,b.pxToRem(10),b.pxToRem(10),b.pxToRem(10),b.neutralColor.high.pure,b.border.width.xs,b.neutralColor.high.dark,b.border.radius.circular,b.brandColor.primary.pure)})},55734:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return n}});var d=c(24246),e=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=i(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}(c(12103)),f=h(c(69828)),g=h(c(44741));function h(a){return a&&a.__esModule?a:{default:a}}function i(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(i=function(a){return a?c:b})(a)}function j(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function k(){var a=j(["\n    background-color: ",";\n    position: sticky;\n    bottom: 0;\n    width: 100%;\n  "]);return k=function(){return a},a}function l(){var a=j(["\n  ","\n"]);return l=function(){return a},a}var m=function(a){var b,c,e=a.children,h=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["children"]);return(0,d.jsxs)("div",(b=function(a){for(var b=arguments,c=1;c<arguments.length;c++)!function(c){var d=null!=b[c]?b[c]:{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){var c,e,f;c=a,e=b,f=d[b],e in c?Object.defineProperty(c,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[e]=f})}(c);return a}({},h),c=(c={children:[(0,d.jsx)(g.default,{}),(0,d.jsx)(f.default.Footer,{children:e})]},c),Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(c)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(c)).forEach(function(a){Object.defineProperty(b,a,Object.getOwnPropertyDescriptor(c,a))}),b))},n=(0,e.default)(m,{label:"hst-showcase-footer"})(l(),function(a){var b=a.theme;return(0,e.css)(k(),b.neutralColor.high.pure)})},59052:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return k}});var d=c(24246),e=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=f(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if("default"!==g&&Object.prototype.hasOwnProperty.call(a,g)){var h=e?Object.getOwnPropertyDescriptor(a,g):null;h&&(h.get||h.set)?Object.defineProperty(d,g,h):d[g]=a[g]}return d.default=a,c&&c.set(a,d),d}(c(12103));function f(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(f=function(a){return a?c:b})(a)}function g(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function h(){var a=g(["\n    width: 100%;\n    height: ","rem;\n    border-radius: "," "," 0 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    & img {\n      max-width: 100%;\n    }\n  "]);return h=function(){return a},a}function i(){var a=g(["\n  ","\n"]);return i=function(){return a},a}var j=function(a){var b,c,e=a.src,f=a.alt,g=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["src","alt"]);return(0,d.jsx)("div",(b=function(a){for(var b=arguments,c=1;c<arguments.length;c++)!function(c){var d=null!=b[c]?b[c]:{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){var c,e,f;c=a,e=b,f=d[b],e in c?Object.defineProperty(c,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[e]=f})}(c);return a}({},g),c=(c={children:(0,d.jsx)("img",{src:e,alt:f})},c),Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(c)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(c)).forEach(function(a){Object.defineProperty(b,a,Object.getOwnPropertyDescriptor(c,a))}),b))},k=(0,e.default)(j,{label:"hst-showcase-image"})(i(),function(a){var b=a.theme;return(0,e.css)(h(),b.pxToRem(235),b.border.radius.sm,b.border.radius.sm)})},80988:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return m}});var d=c(24246);c(27378);var e=c(55693),f=function a(b,c){if(!c&&b&&b.__esModule)return b;if(null===b||"object"!=typeof b&&"function"!=typeof b)return{default:b};var d=h(c);if(d&&d.has(b))return d.get(b);var e={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in b)if("default"!==g&&Object.prototype.hasOwnProperty.call(b,g)){var i=f?Object.getOwnPropertyDescriptor(b,g):null;i&&(i.get||i.set)?Object.defineProperty(e,g,i):e[g]=b[g]}return e.default=b,d&&d.set(b,e),e}(c(12103)),g=c(11811);function h(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(h=function(a){return a?c:b})(a)}function i(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function j(){var a=i(["\n      width: ","rem;\n      flex-shrink: 0;\n    "]);return j=function(){return a},a}function k(){var a=i(["\n  ","\n"]);return k=function(){return a},a}var l=function(a){var b,c,e=a.children,f=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["children"]);return(0,d.jsx)("div",(b=function(a){for(var b=arguments,c=1;c<arguments.length;c++)!function(c){var d=null!=b[c]?b[c]:{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){var c,e,f;c=a,e=b,f=d[b],e in c?Object.defineProperty(c,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[e]=f})}(c);return a}({},f),c=(c={children:e},c),Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(c)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(c)).forEach(function(a){Object.defineProperty(b,a,Object.getOwnPropertyDescriptor(c,a))}),b))},m=(0,f.default)(l,{label:"hst-showcase-step"})(k(),function(a){var b=a.theme,c=(0,e.useContextSelector)(g.ShowcaseContext,function(a){return a.stepSize});return(0,f.css)(j(),b.pxToRem(c))})},7180:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return m}});var d,e=c(24246),f=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=h(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}(c(12103)),g=(d=c(74449),d&&d.__esModule?d:{default:d});function h(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(h=function(a){return a?c:b})(a)}function i(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function j(){var a=i(["\n    padding: ",";\n  "]);return j=function(){return a},a}function k(){var a=i(["\n  ","\n"]);return k=function(){return a},a}var l=function(a){var b=a.children,c=a.className;return(0,e.jsx)(g.default,{className:c,size:"sm",color:"neutralColor.low.medium",children:b})},m=(0,f.default)(l,{label:"hst-showcase-text"})(k(),function(a){var b=a.theme;return(0,f.css)(j(),b.spacing.inset.sm)})},36965:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return m}});var d,e=c(24246),f=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=h(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}(c(12103)),g=(d=c(46411),d&&d.__esModule?d:{default:d});function h(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(h=function(a){return a?c:b})(a)}function i(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function j(){var a=i(["\n    padding: ",";\n\n    padding-bottom: 0;\n  "]);return j=function(){return a},a}function k(){var a=i(["\n  ","\n"]);return k=function(){return a},a}var l=function(a){var b=a.children,c=a.className;return(0,e.jsx)(g.default,{size:"sm",as:"h6",className:c,color:"neutralColor.low.dark",children:b})},m=(0,f.default)(l,{label:"hst-showcase-title"})(k(),function(a){var b=a.theme;return(0,f.css)(j(),b.spacing.inset.sm)})},11811:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),!function(a,b){for(var c in b)Object.defineProperty(a,c,{enumerable:!0,get:b[c]})}(b,{ShowcaseContext:function(){return d},ShowcaseContextProvider:function(){return e},default:function(){return f}});var d=(0,c(55693).createContext)({}),e=d.Provider,f=e},95123:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),!function(a,b){for(var c in b)Object.defineProperty(a,c,{enumerable:!0,get:b[c]})}(b,{MAX_SHOWCASE_WIDTH:function(){return D},MIN_WINDOW_SIZE:function(){return E},OFFSET:function(){return F},default:function(){return J}});var d=c(24246),e=v(c(27378)),f=v(c(12103)),g=t(c(34166)),h=t(c(25989)),i=t(c(34324)),j=t(c(48649)),k=t(c(60401)),l=t(c(11811)),m=t(c(55734)),n=t(c(59052)),o=t(c(80988)),p=t(c(7180)),q=t(c(36965)),r=t(c(61757));function s(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function t(a){return a&&a.__esModule?a:{default:a}}function u(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(u=function(a){return a?c:b})(a)}function v(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=u(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}function w(a){for(var b=arguments,c=1;c<arguments.length;c++)!function(c){var d=null!=b[c]?b[c]:{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){var c,e,f;c=a,e=b,f=d[b],e in c?Object.defineProperty(c,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[e]=f})}(c);return a}function x(a,b){return b=null!=b?b:{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))}),a}function y(a,b){if(null==a)return{};var c,d,e=z(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function z(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}function A(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function B(){var a=A(["\n      width: ","rem;\n      max-width: ","rem;\n      max-height: 90%;\n      overflow-x: hidden;\n      box-shadow: none;\n    "]);return B=function(){return a},a}function C(){var a=A(["\n  ","\n"]);return C=function(){return a},a}var D=400,E=440,F=40,G=function(a){var b=a.open,c=a.currentStep,e=a.children,f=a.className,j=a.widthSize,k=a.controlDots,m=y(a,["open","currentStep","children","className","widthSize","controlDots"]);if(!b)return null;var n,o,p=(o=1,function(a){if(Array.isArray(a))return a}(n=e)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(n,o)||function a(b,c){if(b){if("string"==typeof b)return s(b,c);var d=Object.prototype.toString.call(b).slice(8,-1);if("Object"===d&&b.constructor&&(d=b.constructor.name),"Map"===d||"Set"===d)return Array.from(d);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return s(b,c)}}(n,o)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0].props.children;return(0,d.jsx)(i.default,{target:"houston-showcase",children:(0,d.jsx)(h.default,{visible:!0,children:(0,d.jsx)(g.default,x(w({className:f},m),{children:(0,d.jsx)(l.default,{value:{currentStep:c,totalSteps:p.length,stepSize:j<E?j-F:D,controlDots:void 0===k||k},children:e})}))})})},H=(0,f.default)(G,{label:"houston-showcase"})(C(),function(a){var b=a.theme,c=a.widthSize;return(0,f.css)(B(),b.pxToRem(c-F),b.pxToRem(D))}),I=function(a){var b=a.children,c=y(a,["children"]),e=(0,r.default)().width;return(0,d.jsx)(H,x(w({},c),{widthSize:e,children:b}))},J=(0,j.default)(e.memo(I),{Title:q.default,Step:o.default,Content:k.default,Image:n.default,Text:p.default,Footer:m.default})},61757:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return g}});var d=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=f(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if("default"!==g&&Object.prototype.hasOwnProperty.call(a,g)){var h=e?Object.getOwnPropertyDescriptor(a,g):null;h&&(h.get||h.set)?Object.defineProperty(d,g,h):d[g]=a[g]}return d.default=a,c&&c.set(a,d),d}(c(27378));function e(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function f(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(f=function(a){return a?c:b})(a)}var g=function(){var a,b,c=(a=d.useState({width:0,height:0}),b=2,function(a){if(Array.isArray(a))return a}(a)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(a,b)||function a(b,c){if(b){if("string"==typeof b)return e(b,c);var d=Object.prototype.toString.call(b).slice(8,-1);if("Object"===d&&b.constructor&&(d=b.constructor.name),"Map"===d||"Set"===d)return Array.from(d);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return e(b,c)}}(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),f=c[0],g=c[1];return d.useEffect(function(){var a=function(){g({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",a),a(),function(){return window.removeEventListener("resize",a)}},[]),f}},21791:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return q},meta:function(){return o}});var d=c(31373),e=c(52050),f=c(27378),g=c(35318),h=c(56100),i=c(30222),j=c(54703),k=c(2756),l=c(78983),m=c(95123),n=c.n(m),o={name:"Showcase",tableOfContents:{depth:0,children:[{depth:1,slug:"#showcase",title:"Showcase",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"},{depth:3,slug:"#showcase-1",title:"Showcase"},{depth:3,slug:"#showcaseimage",title:"Showcase.Image"}]}]}]}},p={meta:o};function q(a){var b=a.components,c=(0,d.Z)(a,["components"]);return(0,g.kt)("wrapper",Object.assign({},p,c,{components:b,mdxType:"MDXLayout"}),(0,g.kt)("h1",Object.assign({},{id:"showcase"}),"Showcase"),(0,g.kt)("p",null,"O componente Showcase \xe9 utilizado para exibir informa\xe7\xf5es de forma interativa ao usu\xe1rio."),(0,g.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,g.kt)("pre",null,(0,g.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import Showcase from '@eduzz/houston-ui/Showcase';\n")),(0,g.kt)("h3",Object.assign({},{id:"exemplo"}),"Exemplo"),(0,g.kt)(h.X,{__position:0,code:'() => {\n  const [step, setStep] = React.useState(1)\n  const [open, setOpen] = React.useState(false)\n  const isFirstStep = step === 1\n  const isLastStep = step === 4\n  return (\n    <Container>\n      <Row justifyContent="space-around">\n        <Column xs={12} md={4}>\n          <Button onClick={() => setOpen(true)} variant="outlined">\n            Abrir Showcase\n          </Button>\n          <Showcase open={open} currentStep={step} controlDots>\n            <Showcase.Content>\n              <Showcase.Step>\n                <Showcase.Image\n                  src="https://cdn.pixabay.com/photo/2021/05/22/17/06/hybrid-6274156_960_720.jpg"\n                  alt="Image 1"\n                />\n                <Showcase.Title>\n                  Nova forma de enviar os v\xeddeos!\n                </Showcase.Title>\n                <Showcase.Text>\n                  Lorem ipsum consectetur amet. Lorem ipsum consectetur amet.\n                  Lorem ipsum consectetur amet. Lorem ipsum consectetur amet.\n                  Lorem ipsum consectetur amet.\n                </Showcase.Text>\n              </Showcase.Step>\n              <Showcase.Step>\n                <Showcase.Image\n                  src="https://cdn.pixabay.com/photo/2021/05/22/17/06/hybrid-6274156_960_720.jpg"\n                  alt="Image 2"\n                />\n                <Showcase.Title>\n                  Nova forma de enviar os v\xeddeos!\n                </Showcase.Title>\n                <Showcase.Text>\n                  Lorem ipsum consectetur amet. Lorem ipsum consectetur amet.\n                  Lorem ipsum consectetur amet. Lorem ipsum consectetur amet.\n                  Lorem ipsum consectetur amet.\n                </Showcase.Text>\n              </Showcase.Step>\n              <Showcase.Step>\n                <Showcase.Image\n                  src="https://cdn.pixabay.com/photo/2021/05/22/17/06/hybrid-6274156_960_720.jpg"\n                  alt="Image 3"\n                />\n                <Showcase.Title>\n                  Nova forma de enviar os v\xeddeos!\n                </Showcase.Title>\n                <Showcase.Text>\n                  Lorem ipsum consectetur amet. Lorem ipsum consectetur amet.\n                  Lorem ipsum consectetur amet. Lorem ipsum consectetur amet.\n                  Lorem ipsum consectetur amet.\n                </Showcase.Text>\n              </Showcase.Step>\n              <Showcase.Step>\n                <Showcase.Image\n                  src="https://cdn.pixabay.com/photo/2021/05/22/17/06/hybrid-6274156_960_720.jpg"\n                  alt="Image 4"\n                />\n                <Showcase.Title>\n                  Nova forma de enviar os v\xeddeos!\n                </Showcase.Title>\n                <Showcase.Text>\n                  Lorem ipsum consectetur amet. Lorem ipsum consectetur amet.\n                  Lorem ipsum consectetur amet. Lorem ipsum consectetur amet.\n                  Lorem ipsum consectetur amet.\n                </Showcase.Text>\n              </Showcase.Step>\n            </Showcase.Content>\n            <Showcase.Footer>\n              {isFirstStep ? (\n                <>\n                  <Button onClick={() => setOpen(false)} variant="text">\n                    Agora n\xe3o\n                  </Button>\n                  <Button onClick={() => setStep((step) => step + 1)}>\n                    Pr\xf3ximo\n                  </Button>\n                </>\n              ) : isLastStep ? (\n                <>\n                  <Button\n                    variant="text"\n                    onClick={() => setStep((step) => step - 1)}\n                  >\n                    Anterior\n                  </Button>\n                  <Button onClick={() => setOpen(false)}>Entendi</Button>\n                </>\n              ) : (\n                <>\n                  <Button\n                    variant="text"\n                    onClick={() => setStep((step) => step - 1)}\n                  >\n                    Anterior\n                  </Button>\n                  <Button onClick={() => setStep((step) => step + 1)}>\n                    Pr\xf3ximo\n                  </Button>\n                </>\n              )}\n            </Showcase.Footer>\n          </Showcase>\n        </Column>\n      </Row>\n    </Container>\n  )\n}',scope:{props:c,useState:f.useState,Playground:h.X,Button:i.default,Column:j.Z,Container:k.Z,Row:l.Z,Showcase:n(),meta:o},mdxType:"Playground"},function(){var a=(0,e.Z)(f.useState(1),2),b=a[0],c=a[1],d=(0,e.Z)(f.useState(!1),2),h=d[0],m=d[1];return(0,g.kt)(k.Z,{mdxType:"Container"},(0,g.kt)(l.Z,{justifyContent:"space-around",mdxType:"Row"},(0,g.kt)(j.Z,{xs:12,md:4,mdxType:"Column"},(0,g.kt)(i.default,{onClick:function(){return m(!0)},variant:"outlined",mdxType:"Button"},"Abrir Showcase"),(0,g.kt)(n(),{open:h,currentStep:b,controlDots:!0,mdxType:"Showcase"},(0,g.kt)(n().Content,null,(0,g.kt)(n().Step,null,(0,g.kt)(n().Image,{src:"https://cdn.pixabay.com/photo/2021/05/22/17/06/hybrid-6274156_960_720.jpg",alt:"Image 1"}),(0,g.kt)(n().Title,null,"Nova forma de enviar os v\xeddeos!"),(0,g.kt)(n().Text,null,"Lorem ipsum consectetur amet. Lorem ipsum consectetur amet. Lorem ipsum consectetur amet. Lorem ipsum consectetur amet. Lorem ipsum consectetur amet.")),(0,g.kt)(n().Step,null,(0,g.kt)(n().Image,{src:"https://cdn.pixabay.com/photo/2021/05/22/17/06/hybrid-6274156_960_720.jpg",alt:"Image 2"}),(0,g.kt)(n().Title,null,"Nova forma de enviar os v\xeddeos!"),(0,g.kt)(n().Text,null,"Lorem ipsum consectetur amet. Lorem ipsum consectetur amet. Lorem ipsum consectetur amet. Lorem ipsum consectetur amet. Lorem ipsum consectetur amet.")),(0,g.kt)(n().Step,null,(0,g.kt)(n().Image,{src:"https://cdn.pixabay.com/photo/2021/05/22/17/06/hybrid-6274156_960_720.jpg",alt:"Image 3"}),(0,g.kt)(n().Title,null,"Nova forma de enviar os v\xeddeos!"),(0,g.kt)(n().Text,null,"Lorem ipsum consectetur amet. Lorem ipsum consectetur amet. Lorem ipsum consectetur amet. Lorem ipsum consectetur amet. Lorem ipsum consectetur amet.")),(0,g.kt)(n().Step,null,(0,g.kt)(n().Image,{src:"https://cdn.pixabay.com/photo/2021/05/22/17/06/hybrid-6274156_960_720.jpg",alt:"Image 4"}),(0,g.kt)(n().Title,null,"Nova forma de enviar os v\xeddeos!"),(0,g.kt)(n().Text,null,"Lorem ipsum consectetur amet. Lorem ipsum consectetur amet. Lorem ipsum consectetur amet. Lorem ipsum consectetur amet. Lorem ipsum consectetur amet."))),(0,g.kt)(n().Footer,null,1===b?(0,g.kt)(f.Fragment,null,(0,g.kt)(i.default,{onClick:function(){return m(!1)},variant:"text",mdxType:"Button"},"Agora n\xe3o"),(0,g.kt)(i.default,{onClick:function(){return c(function(a){return a+1})},mdxType:"Button"},"Pr\xf3ximo")):4===b?(0,g.kt)(f.Fragment,null,(0,g.kt)(i.default,{variant:"text",onClick:function(){return c(function(a){return a-1})},mdxType:"Button"},"Anterior"),(0,g.kt)(i.default,{onClick:function(){return m(!1)},mdxType:"Button"},"Entendi")):(0,g.kt)(f.Fragment,null,(0,g.kt)(i.default,{variant:"text",onClick:function(){return c(function(a){return a-1})},mdxType:"Button"},"Anterior"),(0,g.kt)(i.default,{onClick:function(){return c(function(a){return a+1})},mdxType:"Button"},"Pr\xf3ximo")))))))}),(0,g.kt)("h3",Object.assign({},{id:"showcase-1"}),"Showcase"),(0,g.kt)("table",null,(0,g.kt)("thead",{parentName:"table"},(0,g.kt)("tr",{parentName:"thead"},(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,g.kt)("tbody",{parentName:"table"},(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"open"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"boolean")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"true")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Controla o estado aberto/fechado do componente")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"currentStep"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"number")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"true")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Indica em qual passo o componente ser\xe1 renderizado")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"controlDots"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"boolean")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"true")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Se ",(0,g.kt)("inlineCode",{parentName:"td"},"true"),", exibe o contador de passos totais e o atual")))),(0,g.kt)("h3",Object.assign({},{id:"showcaseimage"}),"Showcase.Image"),(0,g.kt)("table",null,(0,g.kt)("thead",{parentName:"table"},(0,g.kt)("tr",{parentName:"thead"},(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,g.kt)("tbody",{parentName:"table"},(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"src"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"string")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"true")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"alt"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"string")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"true")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")))))}q.isMDXComponent=!0;var r={editThisPagePath:"src/pages/ui-components/Showcase/index.mdx"};for(var s in r)window[s]=r[s]},52050:function(a,b,c){"use strict";c.d(b,{Z:function(){return f}});var d=c(82126),e=c(12164);function f(a,b){return function(a){if(Array.isArray(a))return a}(a)||(0,d.Z)(a,b)||(0,e.Z)(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(a){a.O(0,[4526,3531,164,4183,4109,9774,2888,179],function(){var b;return a(a.s=92793)}),_N_E=a.O()}])