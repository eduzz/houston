(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3982],{93772:function(a,b,c){"use strict";c.d(b,{Z:function(){return j}});var d=c(25773),e=c(30808),f=c(73143),g=c(87761);let h=["sx"],i=a=>{let b={systemProps:{},otherProps:{}};return Object.keys(a).forEach(c=>{g.Gc[c]?b.systemProps[c]=a[c]:b.otherProps[c]=a[c]}),b};function j(a){let{sx:b}=a,c=(0,e.Z)(a,h),{systemProps:g,otherProps:j}=i(c),k;return k=Array.isArray(b)?[g,...b]:"function"==typeof b?(...a)=>{let c=b(...a);return(0,f.P)(c)?(0,d.Z)({},g,c):g}:(0,d.Z)({},g,b),(0,d.Z)({},j,{sx:k})}},69324:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Collapse",function(){return c(52462)}])},47610:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),!function(a,b){for(var c in b)Object.defineProperty(a,c,{get:b[c],enumerable:!0})}(b,{clsx:function(){return i},cx:function(){return h},default:function(){return j}});var d,e=c(87651),f=(d=c(69467),d&&d.__esModule?d:{default:d});function g(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var h=e.cx,i=e.cx;function j(a){return function(b){var c;return Object.keys(c="function"==typeof a?a((0,f.default)()):a).reduce(function(a,d){var f,h;return f=function(a){for(var b=arguments,c=1;c<arguments.length;c++)!function(c){var d=null!=b[c]?b[c]:{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){g(a,b,d[b])})}(c);return a}({},a),h=null!=(h=g({},d,(0,e.css)("function"==typeof c[d]?c[d](b):c[d])))?h:{},Object.getOwnPropertyDescriptors?Object.defineProperties(f,Object.getOwnPropertyDescriptors(h)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(h)).forEach(function(a){Object.defineProperty(f,a,Object.getOwnPropertyDescriptor(h,a))}),f},{})}}},22821:function(a,b,c){"use strict";Object.defineProperty(b,"Z",{get:function(){return l},enumerable:!0});var d=c(24246),e=function(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=j();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c.default=a,b&&b.set(a,c),c}(c(27378)),f=i(c(54964)),g=c(12103),h=i(c(82178));function i(a){return a&&a.__esModule?a:{default:a}}function j(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return j=function(){return a},a}var k=function(a){var b,c,e=a.children,i=a.className,j=a.paper,k=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["children","className","paper"]),l=(0,h.default)(a);return(0,d.jsx)(f.default,(b=function(a){for(var b=arguments,c=1;c<arguments.length;c++)!function(c){var d=null!=b[c]?b[c]:{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){var c,e,f;c=a,e=b,f=d[b],e in c?Object.defineProperty(c,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[e]=f})}(c);return a}({},k),c=(c={className:(0,g.cx)(i,l.box,j&&l.paper),children:e},c),Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(c)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(c)).forEach(function(a){Object.defineProperty(b,a,Object.getOwnPropertyDescriptor(c,a))}),b))},l=e.memo(k)},82178:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{get:function(){return g},enumerable:!0});var d,e=(d=c(47610),d&&d.__esModule?d:{default:d});function f(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var g=(0,e.default)(function(a){return{box:function(b){var c,d=b.xs,e=b.sm,g=b.md,h=b.lg,i=b.xl;return f(c={},a.breakpoints.up("xs"),{padding:null==d?void 0:d.padding,margin:null==d?void 0:d.margin}),f(c,a.breakpoints.up("sm"),{padding:null==e?void 0:e.padding,margin:null==e?void 0:e.margin}),f(c,a.breakpoints.up("md"),{padding:null==g?void 0:g.padding,margin:null==g?void 0:g.margin}),f(c,a.breakpoints.up("lg"),{padding:null==h?void 0:h.padding,margin:null==h?void 0:h.margin}),f(c,a.breakpoints.up("xlg"),{padding:null==i?void 0:i.padding,margin:null==i?void 0:i.margin}),c},paper:{background:"#fff",borderRadius:4}}})},30222:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{get:function(){return m},enumerable:!0});var d,e=c(24246),f=j(c(27378)),g=j(c(12103)),h=(d=c(15244),d&&d.__esModule?d:{default:d});function i(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return i=function(){return a},a}function j(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=i();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c.default=a,b&&b.set(a,c),c}function k(){var a,b,c=(a=["\n    border: none;\n    cursor: pointer;\n    text-transform: none;\n    height: ","rem;\n    min-width: ","rem;\n    padding: ",";\n    border-radius: ",";\n    font-weight: ",";\n    font-family: ",";\n    line-height: ",";\n    font-size: ",";\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n\n    :not(:focus) {\n      transition: 0.3s;\n    }\n\n    :focus,\n    .--active {\n      outline: solid "," ",";\n    }\n\n    &.--contained {\n      background-color: ",";\n      color: ",";\n\n      &:hover:not(:disabled),\n      &:focus,\n      &.--active {\n        background-color: ",";\n      }\n    }\n\n    &.--outlined {\n      background-color: transparent;\n      border: "," solid;\n      border-color: ",";\n      color: ",";\n\n      &:hover:not(:disabled),\n      &:focus,\n      &.--active {\n        background-color: ",";\n      }\n    }\n\n    &.--text {\n      background-color: ",";\n      color: ",";\n\n      &:hover:not(:disabled),\n      &:focus,\n      &.--active {\n        background-color: ",";\n      }\n    }\n\n    &.--disabled {\n      border: none;\n      background-color: ",";\n      color: ",";\n      cursor: not-allowed;\n    }\n\n    &.--full-width {\n      width: 100%;\n    }\n\n    & > .__loader {\n      position: absolute;\n      left: 50%;\n      transform: translate(-50%, 0);\n    }\n\n    & > .--hidden {\n      visibility: hidden;\n    }\n\n    & > .__startIcon {\n      margin-right: ",";\n    }\n\n    & > .__endIcon {\n      margin-left: ",";\n    }\n\n    & > .__startIcon,\n    & > .__endIcon {\n      line-height: 0;\n    }\n\n    & > .__startIcon > svg,\n    & > .__endIcon > svg {\n      vertical-align: middle;\n      font-size: ","rem;\n    }\n  "],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return k=function(){return c},c}var l=f.forwardRef(function(a,b){var c,d,f=a.children,i=a.disabled,j=void 0!==i&&i,k=a.startIcon,l=a.endIcon,m=a.variant,n=a.loading,o=void 0!==n&&n,p=a.className,q=a.fullWidth,r=a.active,s=a.type,t=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["children","disabled","startIcon","endIcon","variant","loading","className","fullWidth","active","type"]);return(0,e.jsxs)("button",(c=function(a){for(var b=arguments,c=1;c<arguments.length;c++)!function(c){var d=null!=b[c]?b[c]:{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){var c,e,f;c=a,e=b,f=d[b],e in c?Object.defineProperty(c,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[e]=f})}(c);return a}({ref:b,role:"button",className:(0,g.cx)(p,"hst-button","--".concat(null!=m?m:"contained"),{"--full-width":q,"--disabled":j||o,"--active":r}),type:void 0===s?"button":s},t),d={disabled:j||o,"aria-disabled":j,children:[!!k&&(0,e.jsx)("span",{className:(0,g.cx)("__startIcon",{"--hidden":o}),children:k}),!o&&(0,e.jsx)("span",{className:"__text",children:f}),o&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{className:"__loader",children:(0,e.jsx)(h.default,{size:20,color:"inherit"})}),(0,e.jsx)("span",{className:"__text --hidden",children:f})]}),!!l&&(0,e.jsx)("span",{className:(0,g.cx)("__endIcon",{"--hidden":o}),children:l})]},d=null!=d?d:{},Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(d)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(d)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(d,a))}),c))}),m=(0,g.default)(l,{label:"houston-button"})(function(a){var b=a.theme;return(0,g.css)(k(),b.pxToRem(48),b.pxToRem(96),b.spacing.squish.xxs,b.border.radius.xs,b.font.weight.semibold,b.font.family.base,b.line.height.default,b.font.size.xs,b.border.width.sm,b.feedbackColor.informative.pure,b.brandColor.primary.pure,b.neutralColor.high.pure,b.hexToRgba(b.brandColor.primary.pure,b.opacity.level[8]),b.border.width.xs,b.neutralColor.low.pure,b.neutralColor.low.pure,b.hexToRgba(b.neutralColor.low.pure,b.opacity.level[2]),b.hexToRgba(b.neutralColor.low.pure,b.opacity.level[0]),b.neutralColor.low.pure,b.hexToRgba(b.neutralColor.low.pure,b.opacity.level[2]),b.hexToRgba(b.neutralColor.low.pure,b.opacity.level[2]),b.hexToRgba(b.neutralColor.low.pure,b.opacity.level[6]),b.spacing.inline.nano,b.spacing.inline.nano,b.pxToRem(24))})},52462:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return n},meta:function(){return l}});var d=c(31373),e=c(52050),f=c(27378),g=c(35318),h=c(56100),i=c(22821),j=c(30222),k=c(26580),l={name:"Collapse",tableOfContents:{depth:0,children:[{depth:1,slug:"#collapse",title:"Collapse",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"}]}]}]}},m={meta:l};function n(a){var b=a.components,c=(0,d.Z)(a,["components"]);return(0,g.kt)("wrapper",Object.assign({},m,c,{components:b,mdxType:"MDXLayout"}),(0,g.kt)("h1",Object.assign({},{id:"collapse"}),"Collapse"),(0,g.kt)("p",null,"Expande verticalmente a partir do topo do elemento filho."),(0,g.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,g.kt)("pre",null,(0,g.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import Collapse from '@eduzz/houston-ui/Collapse';\n")),(0,g.kt)("h3",Object.assign({},{id:"exemplo"}),"Exemplo"),(0,g.kt)(h.X,{__position:0,code:"() => {\n  const [show, toggle] = React.useState(true)\n  return (\n    <>\n      <Box xs={{ margin: '10px 0' }}>\n        <Button onClick={() => toggle(!show)}>Exibir/esconder</Button>\n      </Box>\n      <Collapse visibled={show}>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae\n        error voluptates repellat blanditiis. Temporibus, ipsa. A nemo,\n        molestias quae nam perspiciatis nisi aut delectus ex, amet ut numquam\n        commodi quo.\n      </Collapse>\n    </>\n  )\n}",scope:{props:c,Playground:h.X,Box:i.Z,Button:j.default,Collapse:k.default,meta:l},mdxType:"Playground"},function(){var a=(0,e.Z)(f.useState(!0),2),b=a[0],c=a[1];return(0,g.kt)(f.Fragment,null,(0,g.kt)(i.Z,{xs:{margin:"10px 0"},mdxType:"Box"},(0,g.kt)(j.default,{onClick:function(){return c(!b)},mdxType:"Button"},"Exibir/esconder")),(0,g.kt)(k.default,{visibled:b,mdxType:"Collapse"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error voluptates repellat blanditiis. Temporibus, ipsa. A nemo, molestias quae nam perspiciatis nisi aut delectus ex, amet ut numquam commodi quo."))}),(0,g.kt)("table",null,(0,g.kt)("thead",{parentName:"table"},(0,g.kt)("tr",{parentName:"thead"},(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"))),(0,g.kt)("tbody",{parentName:"table"},(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"visibled"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"boolean")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"true")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onEnter"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"function")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"destroyOnClose"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"boolean")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false"))),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"mountOnEnter"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"boolean")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false"))))))}n.isMDXComponent=!0;var o={editThisPagePath:"src/pages/ui-components/Collapse/index.mdx"};for(var p in o)window[p]=o[p]},54964:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return r}});var d=c(25773),e=c(30808),f=c(27378),g=c(38944),h=c(89966),i=c(11652),j=c(93772),k=c(96206),l=c(24246);let m=["className","component"];var n=c(70544),o=c(15878),p=(0,o.Z)(),q=function(a={}){let{defaultTheme:b,defaultClassName:c="MuiBox-root",generateClassName:n,styleFunctionSx:o=i.Z}=a,p=(0,h.ZP)("div")(o),q=f.forwardRef(function(a,f){let h=(0,k.Z)(b),i=(0,j.Z)(a),{className:o,component:q="div"}=i,r=(0,e.Z)(i,m);return(0,l.jsx)(p,(0,d.Z)({as:q,ref:f,className:(0,g.default)(o,n?n(c):c),theme:h},r))});return q}({defaultTheme:p,defaultClassName:"MuiBox-root",generateClassName:n.Z.generate}),r=q},52050:function(a,b,c){"use strict";c.d(b,{Z:function(){return f}});var d=c(82126),e=c(12164);function f(a,b){return function(a){if(Array.isArray(a))return a}(a)||(0,d.Z)(a,b)||(0,e.Z)(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(a){a.O(0,[4526,7983,967,4109,6541,9774,2888,179],function(){var b;return a(a.s=69324)}),_N_E=a.O()}])