(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1435],{19806:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/useBoolean",function(){return c(99940)}])},89015:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{get:function(){return g},enumerable:!0});var d=function(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=f();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var g=d?Object.getOwnPropertyDescriptor(a,e):null;g&&(g.get||g.set)?Object.defineProperty(c,e,g):c[e]=a[e]}return c.default=a,b&&b.set(a,c),c}(c(27378));function e(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function f(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return f=function(){return a},a}function g(a){var b,c,f=(b=d.useState(null!=a&&a),c=2,function(a){if(Array.isArray(a))return a}(b)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(b,c)||function a(b,c){if(b){if("string"==typeof b)return e(b,c);var d=Object.prototype.toString.call(b).slice(8,-1);if("Object"===d&&b.constructor&&(d=b.constructor.name),"Map"===d||"Set"===d)return Array.from(d);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return e(b,c)}}(b,c)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),g=f[0],h=f[1],i=d.useCallback(function(){return h(function(a){return!a})},[]),j=d.useCallback(function(){return h(function(){return!0})},[]),k=d.useCallback(function(){return h(function(){return!1})},[]);return[g,i,j,k]}},12103:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{get:function(){return h},enumerable:!0});var d,e,f,g,h=(f=(d=c(45336),e=b,Object.keys(d).forEach(function(a){"default"===a||Object.prototype.hasOwnProperty.call(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:function(){return d[a]}})}),d),f&&f.__esModule?f:{default:f}).default},30222:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{get:function(){return m},enumerable:!0});var d,e=c(24246),f=j(c(27378)),g=j(c(12103)),h=(d=c(15244),d&&d.__esModule?d:{default:d});function i(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return i=function(){return a},a}function j(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=i();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c.default=a,b&&b.set(a,c),c}function k(){var a,b,c=(a=["\n    border: none;\n    cursor: pointer;\n    text-transform: none;\n    height: ","rem;\n    min-width: ","rem;\n    padding: ",";\n    border-radius: ",";\n    font-weight: ",";\n    font-family: ",";\n    line-height: ",";\n    font-size: ",";\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n\n    :not(:focus) {\n      transition: 0.3s;\n    }\n\n    :focus,\n    .--active {\n      outline: solid "," ",";\n    }\n\n    &.--contained {\n      background-color: ",";\n      color: ",";\n\n      &:hover:not(:disabled),\n      &:focus,\n      &.--active {\n        background-color: ",";\n      }\n    }\n\n    &.--outlined {\n      background-color: transparent;\n      border: "," solid;\n      border-color: ",";\n      color: ",";\n\n      &:hover:not(:disabled),\n      &:focus,\n      &.--active {\n        background-color: ",";\n      }\n    }\n\n    &.--text {\n      background-color: ",";\n      color: ",";\n\n      &:hover:not(:disabled),\n      &:focus,\n      &.--active {\n        background-color: ",";\n      }\n    }\n\n    &.--disabled {\n      border: none;\n      background-color: ",";\n      color: ",";\n      cursor: not-allowed;\n    }\n\n    &.--full-width {\n      width: 100%;\n    }\n\n    & > .__loader {\n      position: absolute;\n      left: 50%;\n      transform: translate(-50%, 0);\n    }\n\n    & > .--hidden {\n      visibility: hidden;\n    }\n\n    & > .__startIcon {\n      margin-right: ",";\n    }\n\n    & > .__endIcon {\n      margin-left: ",";\n    }\n\n    & > .__startIcon,\n    & > .__endIcon {\n      line-height: 0;\n    }\n\n    & > .__startIcon > svg,\n    & > .__endIcon > svg {\n      vertical-align: middle;\n      font-size: ","rem;\n    }\n  "],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return k=function(){return c},c}var l=f.forwardRef(function(a,b){var c,d,f=a.children,i=a.disabled,j=void 0!==i&&i,k=a.startIcon,l=a.endIcon,m=a.variant,n=a.loading,o=void 0!==n&&n,p=a.className,q=a.fullWidth,r=a.active,s=a.type,t=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["children","disabled","startIcon","endIcon","variant","loading","className","fullWidth","active","type"]);return(0,e.jsxs)("button",(c=function(a){for(var b=arguments,c=1;c<arguments.length;c++)!function(c){var d=null!=b[c]?b[c]:{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){var c,e,f;c=a,e=b,f=d[b],e in c?Object.defineProperty(c,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[e]=f})}(c);return a}({ref:b,role:"button",className:(0,g.cx)(p,"hst-button","--".concat(null!=m?m:"contained"),{"--full-width":q,"--disabled":j||o,"--active":r}),type:void 0===s?"button":s},t),d={disabled:j||o,"aria-disabled":j,children:[!!k&&(0,e.jsx)("span",{className:(0,g.cx)("__startIcon",{"--hidden":o}),children:k}),!o&&(0,e.jsx)("span",{className:"__text",children:f}),o&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{className:"__loader",children:(0,e.jsx)(h.default,{size:20,color:"inherit"})}),(0,e.jsx)("span",{className:"__text --hidden",children:f})]}),!!l&&(0,e.jsx)("span",{className:(0,g.cx)("__endIcon",{"--hidden":o}),children:l})]},d=null!=d?d:{},Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(d)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(d)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(d,a))}),c))}),m=(0,g.default)(l,{label:"houston-button"})(function(a){var b=a.theme;return(0,g.css)(k(),b.pxToRem(48),b.pxToRem(96),b.spacing.squish.xxs,b.border.radius.xs,b.font.weight.semibold,b.font.family.base,b.line.height.default,b.font.size.xs,b.border.width.sm,b.feedbackColor.informative.pure,b.brandColor.primary.pure,b.neutralColor.high.pure,b.hexToRgba(b.brandColor.primary.pure,b.opacity.level[8]),b.border.width.xs,b.neutralColor.low.pure,b.neutralColor.low.pure,b.hexToRgba(b.neutralColor.low.pure,b.opacity.level[2]),b.hexToRgba(b.neutralColor.low.pure,b.opacity.level[0]),b.neutralColor.low.pure,b.hexToRgba(b.neutralColor.low.pure,b.opacity.level[2]),b.hexToRgba(b.neutralColor.low.pure,b.opacity.level[2]),b.hexToRgba(b.neutralColor.low.pure,b.opacity.level[6]),b.spacing.inline.nano,b.spacing.inline.nano,b.pxToRem(24))})},15244:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{get:function(){return p},enumerable:!0});var d,e=c(24246),f=function(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=h();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c.default=a,b&&b.set(a,c),c}(c(12103)),g=(d=c(96576),d&&d.__esModule?d:{default:d});function h(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return h=function(){return a},a}function i(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function j(){var a=i(["\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(270deg); }\n"]);return j=function(){return a},a}function k(){var a=i(["\n  0% { stroke-dashoffset: ","; }\n  50% { stroke-dashoffset: ","; transform: rotate(135deg); }\n  100% { stroke-dashoffset: ","; transform: rotate(450deg); }\n"]);return k=function(){return a},a}function l(){var a=i(["\n    animation: "," 1.4s linear infinite;\n    color: ",";\n\n    & > circle {\n      stroke: currentColor;\n      stroke-width: ",";\n      stroke-dasharray: ",";\n      stroke-dashoffset: 0;\n      transform-origin: center;\n      animation: "," 1.4s ease-in-out infinite;\n    }\n  "]);return l=function(){return a},a}function m(){var a=i(["\n  ","\n"]);return m=function(){return a},a}var n=function(a){var b=a.className,c=a.size,d=void 0===c?65:c,f=d/65*30;return(0,e.jsx)("svg",{className:b,width:"".concat(d,"px"),height:"".concat(d,"px"),viewBox:"0 0 ".concat(d+1," ").concat(d+1),children:(0,e.jsx)("circle",{fill:"none",strokeLinecap:"round",cx:f+.1*f,cy:f+.1*f,r:f})})},o=(0,f.keyframes)(j()),p=(0,f.default)(n,{label:"houston-loader"})(m(),function(a){var b,c=a.theme,d=a.color,e=a.size,h=void 0===e?65:e;return(0,f.css)(l(),o,"inherit"===d?"inherit":(0,g.default)(c,d).pure,h/65*6,h/65*187,(b=h,(0,f.keyframes)(k(),b/65*187,b/65*46.75,b/65*187)))})},96576:function(a,b){"use strict";function c(a){var b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:"primary";return["low","high"].includes(b)?a.neutralColor[b]:["positive","negative","warning","informative"].includes(b)?a.feedbackColor[b]:a.brandColor[b]}Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{get:function(){return c},enumerable:!0})},99940:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return m},meta:function(){return k}});var d=c(31373),e=c(52050);c(27378);var f=c(35318),g=c(56100),h=c(30222),i=c(38861),j=c(89015),k={name:"useBoolean",tableOfContents:{depth:0,children:[{depth:1,slug:"#useboolean",title:"useBoolean",children:[{depth:2,slug:"#como-usar",title:"Como usar"},{depth:2,slug:"#par\xe2metros-e-retorno",title:"Par\xe2metros e Retorno"}]}]}},l={meta:k};function m(a){var b=a.components,c=(0,d.Z)(a,["components"]);return(0,f.kt)("wrapper",Object.assign({},l,c,{components:b,mdxType:"MDXLayout"}),(0,f.kt)("h1",Object.assign({},{id:"useboolean"}),"useBoolean"),(0,f.kt)("p",null,"Esse \xe9 um hooks apenas para facilitar o uso de booleanos, \xfatil quando deseja passar como callback de uma fun\xe7\xe3o"),(0,f.kt)("h2",Object.assign({},{id:"como-usar"}),"Como usar"),(0,f.kt)("pre",null,(0,f.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"const [value, toggleValue, toTrue, toFalse] = useBoolean();\n")),(0,f.kt)(g.X,{__position:0,code:"() => {\n  const [value, toggleValue, toTrue, toFalse] = useBoolean()\n  return (\n    <div>\n      <Typography>Value: {value.toString()}</Typography>\n      <Button onClick={toggleValue}>Click to toggle</Button>\n      <span style={{ marginLeft: 10 }} />\n      <Button onClick={toTrue} disabled={value}>\n        Click to set true\n      </Button>\n      <span style={{ marginLeft: 10 }} />\n      <Button onClick={toFalse} disabled={!value}>\n        Click to set false\n      </Button>\n    </div>\n  )\n}",scope:{props:c,Playground:g.X,Button:h.default,Typography:i.default,useBoolean:j.default,meta:k},mdxType:"Playground"},function(){var a=(0,e.Z)((0,j.default)(),4),b=a[0],c=a[1],d=a[2],g=a[3];return(0,f.kt)("div",null,(0,f.kt)(i.default,{mdxType:"Typography"},"Value: ",b.toString()),(0,f.kt)(h.default,{onClick:c,mdxType:"Button"},"Click to toggle"),(0,f.kt)("span",{style:{marginLeft:10}}),(0,f.kt)(h.default,{onClick:d,disabled:b,mdxType:"Button"},"Click to set true"),(0,f.kt)("span",{style:{marginLeft:10}}),(0,f.kt)(h.default,{onClick:g,disabled:!b,mdxType:"Button"},"Click to set false"))}),(0,f.kt)("h2",Object.assign({},{id:"par\xe2metros-e-retorno"}),"Par\xe2metros e Retorno"),(0,f.kt)("pre",null,(0,f.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"/**\n * Simplify the way to use a boolean state\n * @param initial A boolen of a function that return a  boolean\n * @returns [value, toogleValue, toTrue, toFalse]\n */\nexport default function useBoolean(initial?: boolean | (() => boolean)): [boolean, () => void, () => void, () => void];\n")))}m.isMDXComponent=!0;var n={editThisPagePath:"src/pages/hooks/useBoolean/index.mdx"};for(var o in n)window[o]=n[o]},52050:function(a,b,c){"use strict";c.d(b,{Z:function(){return f}});var d=c(82126),e=c(12164);function f(a,b){return function(a){if(Array.isArray(a))return a}(a)||(0,d.Z)(a,b)||(0,e.Z)(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(a){a.O(0,[4526,7983,967,4109,8861,9774,2888,179],function(){var b;return a(a.s=19806)}),_N_E=a.O()}])