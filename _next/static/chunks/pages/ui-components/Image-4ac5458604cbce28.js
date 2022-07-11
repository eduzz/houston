(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8858],{8473:function(d,b,c){"use strict";b.Z=function(a,d){if(null==a)return{};var b,c,f=e.default(a,d);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(c=0;c<g.length;c++)b=g[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(f[b]=a[b])}return f};var a,e=(a=c(90518))&&a.__esModule?a:{default:a}},90518:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}},57452:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Image",function(){return c(62370)}])},16847:function(f,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{get:function(){return g},enumerable:!0});var c=b(67430).Z,d=b(42619).Z,e=d(c(b(96342),a)),g=e.default},53336:function(i,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{get:function(){return p},enumerable:!0});var d=a(42619).Z,c=a(96808).Z,j=a(62069).Z,k=a(8473).Z,l=a(9889).Z,m=a(24246),e=c(a(27378)),f=c(a(16847)),n=d(a(43342));function o(){var a=l(["\n    border-radius: ",";\n\n    &.--xl {\n      width: ","rem;\n      height: ","rem;\n    }\n\n    &.--lg {\n      width: ","rem;\n      height: ","rem;\n    }\n\n    &.--md {\n      width: ","rem;\n      height: ","rem;\n    }\n\n    &.--sm {\n      width: ","rem;\n      height: ","rem;\n    }\n  "]);return o=function(){return a},a}function g(){var a=l(["\n  ","\n"]);return g=function(){return a},a}var h=e.forwardRef(function(a,d){var b=a.size,c=void 0===b?"md":b,e=a.className,g=k(a,["size","className"]);return(0,m.jsx)(n.default,j({ref:d,className:(0,f.cx)(e,c&&"--".concat(c))},g))}),p=(0,f.default)(h,{label:"houston-thumbnail"})(g(),function(b){var a=b.theme;return(0,f.css)(o(),a.border.radius.xs,a.pxToRem(80),a.pxToRem(80),a.pxToRem(64),a.pxToRem(64),a.pxToRem(40),a.pxToRem(40),a.pxToRem(24),a.pxToRem(24))})},43342:function(l,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{get:function(){return r},enumerable:!0});var c=a(42619).Z,d=a(96808).Z,m=a(62069).Z,n=a(8473).Z,o=a(69854).Z,p=a(9889).Z,q=a(24246),e=d(a(27378)),f=d(a(16847)),g=c(a(40772)),h=c(a(53336));function i(){var a=p(["\n  display: block;\n  max-width: 100%;\n  height: auto;\n\n  &.--fit-fill {\n    object-fit: fill;\n  }\n\n  &.--fit-contain {\n    object-fit: contain;\n  }\n\n  &.--fit-cover {\n    object-fit: cover;\n  }\n\n  &.--fit-none {\n    object-fit: none;\n  }\n\n  &.--fit-scale-down {\n    object-fit: scale-down;\n  }\n"]);return i=function(){return a},a}var j=e.forwardRef(function(a,i){var b=a.fallbackSrc,c=a.src,j=a.className,d=a.fit,g=void 0===d?"cover":d,k=n(a,["fallbackSrc","src","className","fit"]),h=o(e.useState(b||c),2),l=h[0],p=h[1];return e.useEffect(function(){if(b){var a=new Image;a.src=c,a.onload=function(){return p(c)}}},[c,b]),(0,q.jsx)("img",m({ref:i,className:(0,f.cx)(j,g&&"--fit-".concat(g)),src:l},k))}),k=(0,f.default)(j,{label:"houston-image"})(i()),r=(0,g.default)(k,{Thumbnail:h.default})},40772:function(c,a,b){"use strict";function d(a,b){return Object.keys(b).forEach(function(c){a[c]=b[c]}),a}Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{get:function(){return d},enumerable:!0}),(0,b(96808).Z)(b(27378))},62370:function(g,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return f},meta:function(){return e}}),a(27378);var h=a(35318),i=a(56100),j=a(43342),e={name:"Image",tableOfContents:{depth:0,children:[{depth:1,slug:"#image",title:"Image",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"},{depth:3,slug:"#fallback",title:"Fallback"}]},{depth:2,slug:"#propriedades",title:"Propriedades"}]}]}},k={meta:e};function f(b){var c=b.components,a=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(b,["components"]);return(0,h.kt)("wrapper",Object.assign({},k,a,{components:c,mdxType:"MDXLayout"}),(0,h.kt)("h1",Object.assign({},{id:"image"}),"Image"),(0,h.kt)("p",null,"Componente utilizado para exibi\xe7\xe3o de imagens."),(0,h.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,h.kt)("pre",null,(0,h.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import Image from '@eduzz/houston-ui/Image';\n")),(0,h.kt)("h3",Object.assign({},{id:"exemplo"}),"Exemplo"),(0,h.kt)(i.X,{__position:0,code:'<div style={{ width: 300 }}>\n  <Image src="https://picsum.photos/300" />\n</div>',scope:{props:a,Playground:i.X,Image:j.default,meta:e},mdxType:"Playground"},(0,h.kt)("div",{style:{width:300}},(0,h.kt)(j.default,{src:"https://picsum.photos/300",mdxType:"Image"}))),(0,h.kt)("h3",Object.assign({},{id:"fallback"}),"Fallback"),(0,h.kt)(i.X,{__position:1,code:'<div style={{ width: 300 }}>\n  <Image src="" fallbackSrc="https://via.placeholder.com/300" />\n</div>',scope:{props:a,Playground:i.X,Image:j.default,meta:e},mdxType:"Playground"},(0,h.kt)("div",{style:{width:300}},(0,h.kt)(j.default,{src:"",fallbackSrc:"https://via.placeholder.com/300",mdxType:"Image"}))),(0,h.kt)("h2",Object.assign({},{id:"propriedades"}),"Propriedades"),(0,h.kt)("p",null,"Possui todas propriedades de uma tag ",(0,h.kt)("inlineCode",{parentName:"p"},"<img />")," comum e:"),(0,h.kt)("table",null,(0,h.kt)("thead",{parentName:"table"},(0,h.kt)("tr",{parentName:"thead"},(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,h.kt)("tbody",{parentName:"table"},(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"src"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"string")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"true")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Caminho da imagem.")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"fallbackSrc"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"string")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Caminho para imagem quando a imagem principal n\xe3o estiver carregada ou n\xe3o carregar. \xc9 recomend\xe1vel usar um caminho para uma imagem local.")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"fit"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"'fill', 'contain', 'cover', 'none', 'scale-down'")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")))))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/ui-components/Image/index.mdx"};for(var d in c)window[d]=c[d]}},function(a){a.O(0,[4526,6960,9961,7978,9774,2888,179],function(){return a(a.s=57452)}),_N_E=a.O()}])