(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8858],{2671:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Image",function(){return c(62370)}])},12103:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{get:function(){return h},enumerable:!0});var d,e,f,g,h=(f=(d=c(45336),e=b,Object.keys(d).forEach(function(a){"default"===a||Object.prototype.hasOwnProperty.call(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:function(){return d[a]}})}),d),f&&f.__esModule?f:{default:f}).default},85769:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{get:function(){return o},enumerable:!0});var d,e=c(24246),f=j(c(27378)),g=j(c(12103)),h=(d=c(42128),d&&d.__esModule?d:{default:d});function i(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return i=function(){return a},a}function j(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=i();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c.default=a,b&&b.set(a,c),c}function k(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function l(){var a=k(["\n    border-radius: ",";\n\n    &.--xl {\n      width: ","rem;\n      height: ","rem;\n    }\n\n    &.--lg {\n      width: ","rem;\n      height: ","rem;\n    }\n\n    &.--md {\n      width: ","rem;\n      height: ","rem;\n    }\n\n    &.--sm {\n      width: ","rem;\n      height: ","rem;\n    }\n  "]);return l=function(){return a},a}function m(){var a=k(["\n  ","\n"]);return m=function(){return a},a}var n=f.forwardRef(function(a,b){var c=a.size,d=void 0===c?"md":c,f=a.className,i=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["size","className"]);return(0,e.jsx)(h.default,function(a){for(var b=arguments,c=1;c<arguments.length;c++)!function(c){var d=null!=b[c]?b[c]:{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){var c,e,f;c=a,e=b,f=d[b],e in c?Object.defineProperty(c,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[e]=f})}(c);return a}({ref:b,className:(0,g.cx)(f,d&&"--".concat(d))},i))}),o=(0,g.default)(n,{label:"houston-thumbnail"})(m(),function(a){var b=a.theme;return(0,g.css)(l(),b.border.radius.xs,b.pxToRem(80),b.pxToRem(80),b.pxToRem(64),b.pxToRem(64),b.pxToRem(40),b.pxToRem(40),b.pxToRem(24),b.pxToRem(24))})},42128:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{get:function(){return p},enumerable:!0});var d=c(24246),e=l(c(27378)),f=l(c(12103)),g=j(c(48649)),h=j(c(85769));function i(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function j(a){return a&&a.__esModule?a:{default:a}}function k(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return k=function(){return a},a}function l(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=k();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c.default=a,b&&b.set(a,c),c}function m(){var a,b,c=(a=["\n  display: block;\n  max-width: 100%;\n  height: auto;\n\n  &.--fit-fill {\n    object-fit: fill;\n  }\n\n  &.--fit-contain {\n    object-fit: contain;\n  }\n\n  &.--fit-cover {\n    object-fit: cover;\n  }\n\n  &.--fit-none {\n    object-fit: none;\n  }\n\n  &.--fit-scale-down {\n    object-fit: scale-down;\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return m=function(){return c},c}var n=e.forwardRef(function(a,b){var c,g,h=a.fallbackSrc,j=a.src,k=a.className,l=a.fit,m=void 0===l?"cover":l,n=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["fallbackSrc","src","className","fit"]),o=(c=e.useState(h||j),g=2,function(a){if(Array.isArray(a))return a}(c)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(c,g)||function a(b,c){if(b){if("string"==typeof b)return i(b,c);var d=Object.prototype.toString.call(b).slice(8,-1);if("Object"===d&&b.constructor&&(d=b.constructor.name),"Map"===d||"Set"===d)return Array.from(d);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return i(b,c)}}(c,g)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),p=o[0],q=o[1];return e.useEffect(function(){if(h){var a=new Image;a.src=j,a.onload=function(){return q(j)}}},[j,h]),(0,d.jsx)("img",function(a){for(var b=arguments,c=1;c<arguments.length;c++)!function(c){var d=null!=b[c]?b[c]:{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){var c,e,f;c=a,e=b,f=d[b],e in c?Object.defineProperty(c,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[e]=f})}(c);return a}({ref:b,className:(0,f.cx)(k,m&&"--fit-".concat(m)),src:p},n))}),o=(0,f.default)(n,{label:"houston-image"})(m()),p=(0,g.default)(o,{Thumbnail:h.default})},48649:function(a,b,c){"use strict";function d(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return d=function(){return a},a}function e(a,b){return Object.keys(b).forEach(function(c){a[c]=b[c]}),a}Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{get:function(){return e},enumerable:!0}),function(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=d();if(b&&b.has(a))return b.get(a);var c={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if(Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(c,f,g):c[f]=a[f]}c.default=a,b&&b.set(a,c)}(c(27378))},62370:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return j},meta:function(){return h}});var d=c(31373);c(27378);var e=c(35318),f=c(56100),g=c(42128),h={name:"Image",tableOfContents:{depth:0,children:[{depth:1,slug:"#image",title:"Image",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"},{depth:3,slug:"#fallback",title:"Fallback"}]},{depth:2,slug:"#propriedades",title:"Propriedades"}]}]}},i={meta:h};function j(a){var b=a.components,c=(0,d.Z)(a,["components"]);return(0,e.kt)("wrapper",Object.assign({},i,c,{components:b,mdxType:"MDXLayout"}),(0,e.kt)("h1",Object.assign({},{id:"image"}),"Image"),(0,e.kt)("p",null,"Componente utilizado para exibi\xe7\xe3o de imagens."),(0,e.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,e.kt)("pre",null,(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import Image from '@eduzz/houston-ui/Image';\n")),(0,e.kt)("h3",Object.assign({},{id:"exemplo"}),"Exemplo"),(0,e.kt)(f.X,{__position:0,code:'<div style={{ width: 300 }}>\n  <Image src="https://picsum.photos/300" />\n</div>',scope:{props:c,Playground:f.X,Image:g.default,meta:h},mdxType:"Playground"},(0,e.kt)("div",{style:{width:300}},(0,e.kt)(g.default,{src:"https://picsum.photos/300",mdxType:"Image"}))),(0,e.kt)("h3",Object.assign({},{id:"fallback"}),"Fallback"),(0,e.kt)(f.X,{__position:1,code:'<div style={{ width: 300 }}>\n  <Image src="" fallbackSrc="https://via.placeholder.com/300" />\n</div>',scope:{props:c,Playground:f.X,Image:g.default,meta:h},mdxType:"Playground"},(0,e.kt)("div",{style:{width:300}},(0,e.kt)(g.default,{src:"",fallbackSrc:"https://via.placeholder.com/300",mdxType:"Image"}))),(0,e.kt)("h2",Object.assign({},{id:"propriedades"}),"Propriedades"),(0,e.kt)("p",null,"Possui todas propriedades de uma tag ",(0,e.kt)("inlineCode",{parentName:"p"},"<img />")," comum e:"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"src"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"string")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"true")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Caminho da imagem.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"fallbackSrc"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"string")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Caminho para imagem quando a imagem principal n\xe3o estiver carregada ou n\xe3o carregar. \xc9 recomend\xe1vel usar um caminho para uma imagem local.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"fit"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"'fill', 'contain', 'cover', 'none', 'scale-down'")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")))))}j.isMDXComponent=!0;var k={editThisPagePath:"src/pages/ui-components/Image/index.mdx"};for(var l in k)window[l]=k[l]}},function(a){a.O(0,[4526,7983,967,4109,9774,2888,179],function(){var b;return a(a.s=2671)}),_N_E=a.O()}])