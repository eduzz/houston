(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2238,8300],{47249:function(g,b,a){"use strict";var c=a(73203);b.Z=void 0;var d=c(a(19124)),e=a(24246),f=(0,d.default)((0,e.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"}),"InsertEmoticon");b.Z=f},19124:function(c,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{enumerable:!0,get:function(){return d.createSvgIcon}});var d=b(36805)},96793:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Button",function(){return c(68131)}])},12103:function(f,b,d){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{get:function(){return h},enumerable:!0});var c,e,a,g,h=(a=(c=d(45336),e=b,Object.keys(c).forEach(function(a){"default"===a||Object.prototype.hasOwnProperty.call(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:function(){return c[a]}})}),c),a&&a.__esModule?a:{default:a}).default},30222:function(g,c,b){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{get:function(){return m},enumerable:!0});var a,h=b(24246),d=k(b(27378)),e=k(b(12103)),i=(a=b(15244),a&&a.__esModule?a:{default:a});function j(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return j=function(){return a},a}function k(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=j();if(b&&b.has(a))return b.get(a);var c={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in a)if(Object.prototype.hasOwnProperty.call(a,d)){var e=f?Object.getOwnPropertyDescriptor(a,d):null;e&&(e.get||e.set)?Object.defineProperty(c,d,e):c[d]=a[d]}return c.default=a,b&&b.set(a,c),c}function l(){var a,b,c=(a=["\n    border: none;\n    cursor: pointer;\n    text-transform: none;\n    height: ","rem;\n    min-width: ","rem;\n    padding: ",";\n    border-radius: ",";\n    font-weight: ",";\n    font-family: ",";\n    line-height: ",";\n    font-size: ",";\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n\n    :not(:focus) {\n      transition: 0.3s;\n    }\n\n    :focus {\n      outline: solid "," ",";\n    }\n\n    &.--contained {\n      background-color: ",";\n      color: ",";\n\n      &:hover:not(:disabled),\n      &:focus {\n        background-color: ",";\n      }\n    }\n\n    &.--outlined {\n      background-color: transparent;\n      border: "," solid;\n      border-color: ",";\n      color: ",";\n\n      &:hover:not(:disabled),\n      &:focus {\n        background-color: ",";\n      }\n    }\n\n    &.--text {\n      background-color: ",";\n      color: ",";\n\n      &:hover:not(:disabled),\n      &:focus {\n        background-color: ",";\n      }\n    }\n\n    &.--disabled {\n      border: none;\n      background-color: ",";\n      color: ",";\n      cursor: default;\n    }\n\n    &.--full-width {\n      width: 100%;\n    }\n\n    & > .__loader {\n      position: absolute;\n      left: 50%;\n      transform: translate(-50%, 0);\n    }\n\n    & > .--hidden {\n      visibility: hidden;\n    }\n\n    & > .__startIcon {\n      margin-right: ",";\n    }\n\n    & > .__endIcon {\n      margin-left: ",";\n    }\n\n    & > .__startIcon,\n    & > .__endIcon {\n      line-height: 0;\n    }\n\n    & > .__startIcon > svg,\n    & > .__endIcon > svg {\n      vertical-align: middle;\n      font-size: ","rem;\n    }\n  "],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return l=function(){return c},c}var f=d.forwardRef(function(a,p){var d,b,g=a.children,j=a.disabled,f=void 0!==j&&j,k=a.startIcon,l=a.endIcon,m=a.variant,n=a.loading,c=void 0!==n&&n,q=a.className,r=a.fullWidth,o=a.type,s=function(a,d){if(null==a)return{};var b,c,e=function g(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(a,["children","disabled","startIcon","endIcon","variant","loading","className","fullWidth","type"]);return(0,h.jsxs)("button",(d=function(b){for(var c=arguments,a=1;a<arguments.length;a++)!function(d){var e=null!=c[d]?c[d]:{},a=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(e).filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),a.forEach(function(f){var a,c,d;a=b,c=f,d=e[f],c in a?Object.defineProperty(a,c,{value:d,enumerable:!0,configurable:!0,writable:!0}):a[c]=d})}(a);return b}({ref:p,role:"button",className:(0,e.cx)(q,"--".concat(null!=m?m:"contained"),{"--fullWidth":r},{"--disabled":f||c}),type:void 0===o?"button":o},s),b={disabled:f||c,"aria-disabled":f,children:[!!k&&(0,h.jsx)("span",{className:(0,e.cx)("__startIcon",{"--hidden":c}),children:k}),!c&&(0,h.jsx)("span",{className:"__text",children:g}),c&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("span",{className:"__loader",children:(0,h.jsx)(i.default,{size:20,color:"inherit"})}),(0,h.jsx)("span",{className:"__text --hidden",children:g})]}),!!l&&(0,h.jsx)("span",{className:(0,e.cx)("__endIcon",{"--hidden":c}),children:l})]},b=null!=b?b:{},Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(b)):(function(b,d){var a=Object.keys(b);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(b);a.push.apply(a,c)}return a})(Object(b)).forEach(function(a){Object.defineProperty(d,a,Object.getOwnPropertyDescriptor(b,a))}),d))}),m=(0,e.default)(f,{label:"houston-button"})(function(b){var a=b.theme;return(0,e.css)(l(),a.pxToRem(48),a.pxToRem(96),a.spacing.squish.xxs,a.border.radius.xs,a.font.weight.semibold,a.font.family.base,a.line.height.default,a.font.size.xs,a.border.width.sm,a.feedbackColor.informative.pure,a.brandColor.primary.pure,a.neutralColor.high.pure,a.hexToRgba(a.brandColor.primary.pure,a.opacity.level[8]),a.border.width.xs,a.neutralColor.low.pure,a.neutralColor.low.pure,a.hexToRgba(a.neutralColor.low.pure,a.opacity.level[2]),a.hexToRgba(a.neutralColor.low.pure,a.opacity.level[0]),a.neutralColor.low.pure,a.hexToRgba(a.neutralColor.low.pure,a.opacity.level[2]),a.hexToRgba(a.neutralColor.low.pure,a.opacity.level[2]),a.hexToRgba(a.neutralColor.low.pure,a.opacity.level[6]),a.spacing.inline.nano,a.spacing.inline.nano,a.pxToRem(24))})},54703:function(f,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{get:function(){return o},enumerable:!0});var g=a(24246),c=k(a(27378)),d=k(a(12103)),h=a(5742);function i(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=Array(a);b<a;b++)d[b]=c[b];return d}function j(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return j=function(){return a},a}function k(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=j();if(b&&b.has(a))return b.get(a);var c={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in a)if(Object.prototype.hasOwnProperty.call(a,d)){var e=f?Object.getOwnPropertyDescriptor(a,d):null;e&&(e.get||e.set)?Object.defineProperty(c,d,e):c[d]=a[d]}return c.default=a,b&&b.set(a,c),c}function l(){var a,b,c=(a=["\n      &.--spacing-none {\n        ","\n      }\n\n      &.--spacing-nano {\n        ","\n      }\n\n      &.--spacing-xxxs {\n        margin: calc("," / 2);\n        ","\n      }\n\n      &.--spacing-xxs {\n        ","\n      }\n\n      &.--spacing-xs {\n        ","\n      }\n\n      &.--spacing-md {\n        ","\n      }\n\n      &.--spacing-xl {\n        ","\n      }\n    "],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return l=function(){return c},c}var e=c.forwardRef(function(a,l){var m=a.className,n=a.children,b=a.xs,c=void 0===b||b,e=a.sm,f=a.md,i=a.lg,j=a.xlg,o=(0,h.useRow)(),k=o.spacing;return(0,g.jsx)("div",{ref:l,className:(0,d.cx)(m,"--spacing-".concat(void 0===k?"xxs":k),c&&"--xs-".concat(c),e&&"--sm-".concat(e),f&&"--md-".concat(f),i&&"--lg-".concat(i),j&&"--xlg-".concat(j)),children:n})}),m="0rem",n=function(b,a,c){return Object.entries(a).map(function(n){var e,f,g,h,j,l=(f=2,function(a){if(Array.isArray(a))return a}(e=n)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(e,f)||function d(a,c){if(a){if("string"==typeof a)return i(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return i(a,c)}}(e,f)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=l[0],k=l[1];return"boolean"==typeof k?"\n        &.--".concat(d,"-").concat(k," {\n          ").concat(b.breakpoints.up(d)," {\n            flex-grow: 1;\n            width: auto;\n            margin: calc(").concat(null!==(g=b.spacing.inline[c])&& void 0!==g?g:m," / 2);\n          }\n        }"):"\n      &.--".concat(d,"-").concat(k," {\n        ").concat(b.breakpoints.up(d)," { \n          width: calc(").concat(a[d]/12*100,"% - ").concat(null!==(h=b.spacing.inline[c])&& void 0!==h?h:m,");\n          margin: calc(").concat(null!==(j=b.spacing.inline[c])&& void 0!==j?j:m," / 2);\n        }\n      }")}).join("")},o=c.memo((0,d.default)(e,{label:"houston-grid-column"})(function(c){var a=c.theme,e=c.xs,f=void 0===e||e,g=c.sm,h=c.md,i=c.lg,j=c.xlg,b=function(b){for(var c=arguments,a=1;a<arguments.length;a++)!function(d){var e=null!=c[d]?c[d]:{},a=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(e).filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),a.forEach(function(f){var a,c,d;a=b,c=f,d=e[f],c in a?Object.defineProperty(a,c,{value:d,enumerable:!0,configurable:!0,writable:!0}):a[c]=d})}(a);return b}({},f&&{xs:f},g&&{sm:g},h&&{md:h},i&&{lg:i},j&&{xlg:j});return(0,d.css)(l(),n(a,b,"none"),n(a,b,"nano"),a.spacing.xxxs,n(a,b,"xxxs"),n(a,b,"xxs"),n(a,b,"xs"),n(a,b,"md"),n(a,b,"xl"))}))},78983:function(g,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{get:function(){return o},enumerable:!0});var h=a(24246),c=k(a(27378)),d=k(a(12103)),i=a(5742);function j(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return j=function(){return a},a}function k(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=j();if(b&&b.has(a))return b.get(a);var c={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in a)if(Object.prototype.hasOwnProperty.call(a,d)){var e=f?Object.getOwnPropertyDescriptor(a,d):null;e&&(e.get||e.set)?Object.defineProperty(c,d,e):c[d]=a[d]}return c.default=a,b&&b.set(a,c),c}function l(b,a){return a||(a=b.slice(0)),Object.freeze(Object.defineProperties(b,{raw:{value:Object.freeze(a)}}))}function m(){var a=l(["\n      display: flex;\n      flex-wrap: wrap;\n      align-items: ",";\n      justify-content: ",";\n\n      &.--spacing-"," {\n        width: calc(100% + ",");\n        margin: calc(-"," / 2);\n      }\n    "]);return m=function(){return a},a}function e(){var a=l(["\n  ","\n"]);return e=function(){return a},a}var f=c.forwardRef(function(a,e){var f=a.className,g=a.children,b=a.spacing,c=void 0===b?"xxxs":b;return(0,h.jsx)(i.RowProvider,{spacing:c,children:(0,h.jsx)("div",{ref:e,className:(0,d.cx)(f,"--spacing-".concat(c)),children:g})})}),n="0rem",o=c.memo((0,d.default)(f,{label:"houston-grid-row"})(e(),function(a){var b,c,f=a.theme,h=a.alignItems,i=a.justifyContent,g=a.spacing,e=void 0===g?"xxxs":g;return(0,d.css)(m(),h,i,e,null!==(b=f.spacing.inline[e])&& void 0!==b?b:n,null!==(c=f.spacing.inline[e])&& void 0!==c?c:n)}))},5742:function(d,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),!function(c,a){for(var b in a)Object.defineProperty(c,b,{get:a[b],enumerable:!0})}(b,{RowContext:function(){return h},RowProvider:function(){return i},useRow:function(){return j}});var e=a(24246),f=function(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=g();if(b&&b.has(a))return b.get(a);var c={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in a)if(Object.prototype.hasOwnProperty.call(a,d)){var e=f?Object.getOwnPropertyDescriptor(a,d):null;e&&(e.get||e.set)?Object.defineProperty(c,d,e):c[d]=a[d]}return c.default=a,b&&b.set(a,c),c}(a(27378)),c=a(55693);function g(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return g=function(){return a},a}var h=(0,c.createContext)(null);function i(a){var b=a.children,c=a.spacing,d=f.useMemo(function(){return{spacing:c}},[c]);return(0,e.jsx)(h.Provider,{value:d,children:b})}function j(){var a=(0,c.useContextSelector)(h,function(a){return a});if(!a)throw Error("You must provide a `RowProvider` in order to use `useRow`");return a}},15244:function(g,c,b){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{get:function(){return o},enumerable:!0});var a,h=b(24246),d=function(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=j();if(b&&b.has(a))return b.get(a);var c={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in a)if(Object.prototype.hasOwnProperty.call(a,d)){var e=f?Object.getOwnPropertyDescriptor(a,d):null;e&&(e.get||e.set)?Object.defineProperty(c,d,e):c[d]=a[d]}return c.default=a,b&&b.set(a,c),c}(b(12103)),i=(a=b(96576),a&&a.__esModule?a:{default:a});function j(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return j=function(){return a},a}function k(b,a){return a||(a=b.slice(0)),Object.freeze(Object.defineProperties(b,{raw:{value:Object.freeze(a)}}))}function e(){var a=k(["\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(270deg); }\n"]);return e=function(){return a},a}function l(){var a=k(["\n  0% { stroke-dashoffset: ","; }\n  50% { stroke-dashoffset: ","; transform: rotate(135deg); }\n  100% { stroke-dashoffset: ","; transform: rotate(450deg); }\n"]);return l=function(){return a},a}function m(){var a=k(["\n    animation: "," 1.4s linear infinite;\n    color: ",";\n\n    & > circle {\n      stroke: currentColor;\n      stroke-width: ",";\n      stroke-dasharray: ",";\n      stroke-dashoffset: 0;\n      transform-origin: center;\n      animation: "," 1.4s ease-in-out infinite;\n    }\n  "]);return m=function(){return a},a}function f(){var a=k(["\n  ","\n"]);return f=function(){return a},a}var n=(0,d.keyframes)(e()),o=(0,d.default)(function(c){var e=c.className,d=c.size,a=void 0===d?65:d,b=a/65*30;return(0,h.jsx)("svg",{className:e,width:"".concat(a,"px"),height:"".concat(a,"px"),viewBox:"0 0 ".concat(a+1," ").concat(a+1),children:(0,h.jsx)("circle",{fill:"none",strokeLinecap:"round",cx:b+.1*b,cy:b+.1*b,r:b})})},{label:"houston-loader"})(f(),function(b){var a,g=b.theme,e=b.color,f=b.size,c=void 0===f?65:f;return(0,d.css)(m(),n,"inherit"===e?"inherit":(0,i.default)(g,e).pure,c/65*6,c/65*187,(a=c,(0,d.keyframes)(l(),a/65*187,a/65*46.75,a/65*187)))})},96576:function(b,a){"use strict";function c(b){var a=arguments.length>1&& void 0!==arguments[1]?arguments[1]:"primary";return["low","high"].includes(a)?b.neutralColor[a]:["positive","negative","warning","informative"].includes(a)?b.feedbackColor[a]:b.brandColor[a]}Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{get:function(){return c},enumerable:!0})},68131:function(g,b,a){"use strict";a.r(b),a.d(b,{default:function(){return f},meta:function(){return e}});var h=a(31373);a(27378);var i=a(35318),j=a(47249),k=a(56100),l=a(54703),m=a(78983),n=a(30222),e={name:"Button",tableOfContents:{depth:0,children:[{depth:1,slug:"#button",title:"Button",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#varia\xe7\xf5es",title:"Varia\xe7\xf5es"},{depth:3,slug:"#estados",title:"Estados"},{depth:3,slug:"#com-\xedcones",title:"Com \xedcones"}]}]}]}},o={meta:e};function f(b){var c=b.components,a=(0,h.Z)(b,["components"]);return(0,i.kt)("wrapper",Object.assign({},o,a,{components:c,mdxType:"MDXLayout"}),(0,i.kt)("h1",Object.assign({},{id:"button"}),"Button"),(0,i.kt)("p",null,"Bot\xf5es permitem que os usu\xe1rios tomem a\xe7\xf5es e decis\xf5es com um simples toque."),(0,i.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import Button from '@eduzz/houston-ui/Button';\n")),(0,i.kt)("h3",Object.assign({},{id:"varia\xe7\xf5es"}),"Varia\xe7\xf5es"),(0,i.kt)(k.X,{__position:0,code:'<Row>\n  <Column>\n    <Button>Contained</Button>\n  </Column>\n  <Column>\n    <Button variant="outlined">Outlined</Button>\n  </Column>\n  <Column>\n    <Button variant="text">Text</Button>\n  </Column>\n</Row>',scope:{props:a,InsertEmoticonIcon:j.Z,Playground:k.X,Column:l.default,Row:m.default,Button:n.default,meta:e},mdxType:"Playground"},(0,i.kt)(m.default,{mdxType:"Row"},(0,i.kt)(l.default,{mdxType:"Column"},(0,i.kt)(n.default,{mdxType:"Button"},"Contained")),(0,i.kt)(l.default,{mdxType:"Column"},(0,i.kt)(n.default,{variant:"outlined",mdxType:"Button"},"Outlined")),(0,i.kt)(l.default,{mdxType:"Column"},(0,i.kt)(n.default,{variant:"text",mdxType:"Button"},"Text")))),(0,i.kt)("h3",Object.assign({},{id:"estados"}),"Estados"),(0,i.kt)(k.X,{__position:1,code:"<Row>\n  <Column>\n    <Button disabled>Disabled</Button>\n  </Column>\n  <Column>\n    <Button loading>loading</Button>\n  </Column>\n</Row>",scope:{props:a,InsertEmoticonIcon:j.Z,Playground:k.X,Column:l.default,Row:m.default,Button:n.default,meta:e},mdxType:"Playground"},(0,i.kt)(m.default,{mdxType:"Row"},(0,i.kt)(l.default,{mdxType:"Column"},(0,i.kt)(n.default,{disabled:!0,mdxType:"Button"},"Disabled")),(0,i.kt)(l.default,{mdxType:"Column"},(0,i.kt)(n.default,{loading:!0,mdxType:"Button"},"loading")))),(0,i.kt)("h3",Object.assign({},{id:"com-\xedcones"}),"Com \xedcones"),(0,i.kt)(k.X,{__position:2,code:'<Row>\n  <Column>\n    <Button startIcon={<InsertEmoticonIcon />}>Start</Button>\n  </Column>\n  <Column>\n    <Button variant="outlined" endIcon={<InsertEmoticonIcon />}>\n      End\n    </Button>\n  </Column>\n</Row>',scope:{props:a,InsertEmoticonIcon:j.Z,Playground:k.X,Column:l.default,Row:m.default,Button:n.default,meta:e},mdxType:"Playground"},(0,i.kt)(m.default,{mdxType:"Row"},(0,i.kt)(l.default,{mdxType:"Column"},(0,i.kt)(n.default,{startIcon:(0,i.kt)(j.Z,{mdxType:"InsertEmoticonIcon"}),mdxType:"Button"},"Start")),(0,i.kt)(l.default,{mdxType:"Column"},(0,i.kt)(n.default,{variant:"outlined",endIcon:(0,i.kt)(j.Z,{mdxType:"InsertEmoticonIcon"}),mdxType:"Button"},"End")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"disabled"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"startIcon"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"endIcon"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"variant"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"contained ","|"," outlined ","|"," text"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"contained"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"href"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"endIcon"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"fullWidth"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"loading"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onClick"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"function")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")))))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/ui-components/Button/index.mdx"};for(var d in c)window[d]=c[d]},36805:function(d,b,a){"use strict";a.r(b),a.d(b,{capitalize:function(){return f.Z},createChainedFunction:function(){return g},createSvgIcon:function(){return h.Z},debounce:function(){return i.Z},deprecatedPropType:function(){return j},isMuiElement:function(){return l},ownerDocument:function(){return m.Z},ownerWindow:function(){return n.Z},requirePropFactory:function(){return o},setRef:function(){return p},unstable_ClassNameGenerator:function(){return x},unstable_useEnhancedEffect:function(){return q.Z},unstable_useId:function(){return r},unsupportedProp:function(){return s},useControlled:function(){return t.Z},useEventCallback:function(){return u.Z},useForkRef:function(){return v.Z},useIsFocusVisible:function(){return w.Z}});var e=a(70544),f=a(98165),g=a(36397).Z,h=a(75917),i=a(66187),j=function(a,b){return()=>null},k=a(27378),l=function(a,b){return k.isValidElement(a)&& -1!==b.indexOf(a.type.muiName)},m=a(52127),n=a(16103);a(25773);var o=function(a,b){return()=>null},p=a(40514).Z,q=a(57925),r=a(56320).Z;function c(a,b,c,d,e){return null}var s=c,t=a(94065),u=a(5965),v=a(63202),w=a(34273),x={configure:function(a){console.warn("MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.\n\nYou should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead\n\nThe detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401\n\nThe updated documentation: https://mui.com/guides/classname-generator/"),e.Z.configure(a)}}},73203:function(a){a.exports=function(a){return a&&a.__esModule?a:{default:a}},a.exports.__esModule=!0,a.exports.default=a.exports}},function(a){a.O(0,[4526,430,2242,4109,9774,2888,179],function(){var b;return a(a.s=96793)}),_N_E=a.O()}])