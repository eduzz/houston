(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3998],{87651:function(j,d,c){"use strict";c.r(d),c.d(d,{cache:function(){return w},css:function(){return u},cx:function(){return p},flush:function(){return n},getRegisteredStyles:function(){return r},hydrate:function(){return o},injectGlobal:function(){return s},keyframes:function(){return t},merge:function(){return q},sheet:function(){return v}});var g=c(8786),k=c(74343),h=c(53211);function l(a,b){if(void 0===a.inserted[b.name])return a.insert("",b,a.sheet,!0)}function i(c,d,b){var a=[],e=(0,h.fp)(c,a,b);return a.length<2?b:e+d(a)}var e,b,f,m=function g(f){for(var c="",d=0;d<f.length;d++){var b=f[d];if(null!=b){var a=void 0;switch(typeof b){case"boolean":break;case"object":if(Array.isArray(b))a=g(b);else for(var e in a="",b)b[e]&&e&&(a&&(a+=" "),a+=e);break;default:a=b}a&&(c&&(c+=" "),c+=a)}}return c},a=(e={key:"css"},(b=(0,g.Z)(e)).sheet.speedy=function(a){this.isSpeedy=a},b.compat=!0,{css:f=function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];var e=(0,k.O)(d,b.registered,void 0);return(0,h.My)(b,e,!1),b.key+"-"+e.name},cx:function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];return i(b.registered,f,m(d))},injectGlobal:function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];var e=(0,k.O)(d,b.registered);l(b,e)},keyframes:function(){for(var d=arguments.length,e=new Array(d),a=0;a<d;a++)e[a]=arguments[a];var c=(0,k.O)(e,b.registered),f="animation-"+c.name;return l(b,{name:c.name,styles:"@keyframes "+f+"{"+c.styles+"}"}),f},hydrate:function(a){a.forEach(function(a){b.inserted[a]=!0})},flush:function(){b.registered={},b.inserted={},b.sheet.flush()},sheet:b.sheet,cache:b,getRegisteredStyles:h.fp.bind(null,b.registered),merge:i.bind(null,b.registered,f)}),n=a.flush,o=a.hydrate,p=a.cx,q=a.merge,r=a.getRegisteredStyles,s=a.injectGlobal,t=a.keyframes,u=a.css,v=a.sheet,w=a.cache},76307:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Avatar",function(){return c(96210)}])},16847:function(e,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=b(39037).interopRequireWildcard(b(96342));Object.keys(c).forEach(function(b){"default"!==b&&"__esModule"!==b&&(b in a&&a[b]===c[b]||Object.defineProperty(a,b,{enumerable:!0,get:function(){return c[b]}}))});var d=c.default;a.default=d},96342:function(n,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.breakpoints=a.css=a.clsx=a.cx=a.keyframes=void 0;var e=b(39037),c=b(87651),d=b(10043),f=e.interopRequireDefault(b(94408)),g=b(60921),h=d.keyframes;a.keyframes=h;var i=c.cx;a.cx=i;var j=c.cx;a.clsx=j;var k=d.css;a.css=k;var l=g.breakpoinstUtils;a.breakpoints=l;var m=f.default;a.default=m},73635:function(g,b,a){"use strict";b.Z=void 0;var c=a(39037),h=a(24246),d=c.interopRequireWildcard(a(27378)),e=c.interopRequireWildcard(a(16847));function i(){var a=c.taggedTemplateLiteral(["\n    color: white;\n    overflow: hidden;\n    border-radius: 50%;\n    display: inline-flex;\n    vertical-align: middle;\n    justify-content: center;\n    background-color: ",";\n\n    img {\n      width: 100%;\n      height: 100%;\n      display: block;\n      object-fit: cover;\n    }\n\n    &.--xs {\n      width: ",";\n      height: ",";\n\n      .__text {\n        font-size: ",";\n        line-height: ",";\n      }\n    }\n\n    &.--sm {\n      width: ",";\n      height: ",";\n\n      .__text {\n        font-size: ",";\n        line-height: ",";\n      }\n    }\n\n    &.--md {\n      width: ",";\n      height: ",";\n\n      .__text {\n        font-size: ",";\n        line-height: ",";\n      }\n    }\n\n    &.--lg {\n      width: ",";\n      height: ",";\n\n      .__text {\n        font-size: ",";\n        line-height: ",";\n      }\n    }\n\n    &.--high {\n      color: ",";\n      background-color: ",";\n\n      .__icon svg {\n        fill: ",";\n      }\n    }\n\n    .__text {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-transform: uppercase;\n      font-weight: ",";\n      user-select: none;\n    }\n\n    .__icon {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      svg {\n        fill: white;\n        width: 100%;\n      }\n    }\n  "]);return i=function(){return a},a}var j={xs:"1.5rem",sm:"2rem",md:"2.5rem",lg:"4rem"},k=function(){return h.jsxs("svg",{viewBox:"0 0 192 192",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":"true",children:[h.jsx("path",{d:"M160 150.408C144.592 168.515 121.637 180 96 180C70.3625 180 47.4076 168.515 32 150.408V136C32 116.118 48.1178 100 68 100H124C143.882 100 160 116.118 160 136V150.408Z"}),h.jsx("path",{d:"M132 52C132 71.8823 115.882 88 96 88C76.1177 88 60 71.8823 60 52C60 32.1177 76.1177 16 96 16C115.882 16 132 32.1177 132 52Z"})]})},f=e.default(d.memo(function(a){var b,d,j=a.src,n=a.alt,f=a.children,o=a.className,l=a.color,m=a.size,p=c.objectWithoutProperties(a,["src","alt","children","className","color","size"]),g=!!j,i="string"==typeof f,q=null!==(d=i&&(null==f?void 0:null===(b=f[0])|| void 0===b?void 0:b.trim()))&& void 0!==d?d:" ";return h.jsxs("span",c.objectSpread({className:e.cx(o,"--".concat(void 0===l?"primary":l),"--".concat(void 0===m?"md":m))},p,{children:[g&&h.jsx("img",c.objectSpread({},{src:j,alt:n})),!g&&i&&h.jsx("span",{className:"__text",children:q}),!g&&!i&&h.jsx("span",{className:"__icon",role:"img","aria-label":"usu\xe1rio",children:h.jsx(k,{})})]}))}),{label:"houston-avatar"})(function(c){var a=c.theme,b={xs:a.font.size.xxs,sm:a.font.size.sm,md:a.font.size.md,lg:a.font.size.xl};return e.css(i(),a.brandColor.primary.pure,j.xs,j.xs,b.xs,b.xs,j.sm,j.sm,b.sm,b.sm,j.md,j.md,b.md,b.md,j.lg,j.lg,b.lg,b.lg,a.brandColor.primary.pure,a.neutralColor.high.pure,a.brandColor.primary.pure,a.font.weight.bold)});b.Z=f},24885:function(f,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),g=a(24246),d=c.interopRequireWildcard(a(27378)),h=c.interopRequireDefault(a(36183)),e=d.forwardRef(function(a,b){var d=a.className,e=c.objectWithoutProperties(a,["className"]);return g.jsx(h.default,c.objectSpread({},e,{item:!0,className:d,ref:b}))});b.default=e},29618:function(g,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),h=a(24246),d=c.interopRequireWildcard(a(27378)),i=c.interopRequireDefault(a(36183)),j=a(55693),k=a(77097),l=a(2293),e=d.forwardRef(function(a,b){var e=a.className,f=a.spacing,g=c.objectWithoutProperties(a,["className","spacing"]),m=j.useContextSelector(k.GridContext,function(a){return a.spacing}),n=d.useMemo(function(){var a;return l.ContainerSizes[null!==(a=null!=f?f:m)&& void 0!==a?a:"cozy"]},[m,f]);return h.jsx(i.default,c.objectSpread({},g,{container:!0,ref:b,className:e,spacing:n}))}),f=d.memo(e);b.default=f},77097:function(e,a,c){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.GridContext=void 0;var b=c(55693).createContext({});a.GridContext=b;var d=b.Provider;a.default=d},2293:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ContainerSizes=void 0,a.ContainerSizes={comfortable:10,cozy:4,compact:2}},96210:function(g,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return f},meta:function(){return e}}),a(27378);var h=a(35318),i=a(56100),j=a(24885),k=a(29618),l=a(73635),e={name:"Avatar",tableOfContents:{depth:0,children:[{depth:1,slug:"#avatar",title:"Avatar",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#tamanhos",title:"Tamanhos"},{depth:3,slug:"#tipos",title:"Tipos"},{depth:3,slug:"#cores",title:"Cores"}]},{depth:2,slug:"#propriedades",title:"Propriedades"}]}]}},m={meta:e};function f(b){var c=b.components,a=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(b,["components"]);return(0,h.kt)("wrapper",Object.assign({},m,a,{components:c,mdxType:"MDXLayout"}),(0,h.kt)("h1",Object.assign({},{id:"avatar"}),"Avatar"),(0,h.kt)("p",null,"Avatares podem ser usados \u200B\u200Bpara representar pessoas ou objetos."),(0,h.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,h.kt)("pre",null,(0,h.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import Avatar from '@eduzz/houston-ui/Avatar';\n")),(0,h.kt)("h3",Object.assign({},{id:"tamanhos"}),"Tamanhos"),(0,h.kt)("p",null,"Os tamanhos d\xedsponiveis s\xe3o: ",(0,h.kt)("inlineCode",{parentName:"p"},"xs"),", ",(0,h.kt)("inlineCode",{parentName:"p"},"sm"),", ",(0,h.kt)("inlineCode",{parentName:"p"},"md"),", ",(0,h.kt)("inlineCode",{parentName:"p"},"lg "),"."),(0,h.kt)(i.X,{__position:0,code:'<Row alignItems="center">\n  <Column>\n    <Avatar size="xs" />\n  </Column>\n  <Column>\n    <Avatar size="sm" />\n  </Column>\n  <Column>\n    <Avatar size="md" />\n  </Column>\n  <Column>\n    <Avatar size="lg" />\n  </Column>\n</Row>',scope:{props:a,Playground:i.X,Column:j.default,Row:k.default,Avatar:l.Z,meta:e},mdxType:"Playground"},(0,h.kt)(k.default,{alignItems:"center",mdxType:"Row"},(0,h.kt)(j.default,{mdxType:"Column"},(0,h.kt)(l.Z,{size:"xs",mdxType:"Avatar"})),(0,h.kt)(j.default,{mdxType:"Column"},(0,h.kt)(l.Z,{size:"sm",mdxType:"Avatar"})),(0,h.kt)(j.default,{mdxType:"Column"},(0,h.kt)(l.Z,{size:"md",mdxType:"Avatar"})),(0,h.kt)(j.default,{mdxType:"Column"},(0,h.kt)(l.Z,{size:"lg",mdxType:"Avatar"})))),(0,h.kt)("blockquote",null,(0,h.kt)("p",{parentName:"blockquote"},"N\xe3o \xe9 poss\xedvel inserir um tamanho diferente.")),(0,h.kt)("h3",Object.assign({},{id:"tipos"}),"Tipos"),(0,h.kt)("p",null,"Existem tr\xeas tipos: \xedcone (padr\xe3o), texto e imagem."),(0,h.kt)(i.X,{__position:1,code:'<Row alignItems="center">\n  <Column>\n    <Avatar size="lg" />\n  </Column>\n  <Column>\n    <Avatar size="lg">M</Avatar>\n  </Column>\n  <Column>\n    <Avatar size="lg" src="https://www.fillmurray.com/100/100" />\n  </Column>\n</Row>',scope:{props:a,Playground:i.X,Column:j.default,Row:k.default,Avatar:l.Z,meta:e},mdxType:"Playground"},(0,h.kt)(k.default,{alignItems:"center",mdxType:"Row"},(0,h.kt)(j.default,{mdxType:"Column"},(0,h.kt)(l.Z,{size:"lg",mdxType:"Avatar"})),(0,h.kt)(j.default,{mdxType:"Column"},(0,h.kt)(l.Z,{size:"lg",mdxType:"Avatar"},"M")),(0,h.kt)(j.default,{mdxType:"Column"},(0,h.kt)(l.Z,{size:"lg",src:"https://www.fillmurray.com/100/100",mdxType:"Avatar"})))),(0,h.kt)("blockquote",null,(0,h.kt)("p",{parentName:"blockquote"},"O tipo texto \xe9 considerado se o ",(0,h.kt)("inlineCode",{parentName:"p"},"children")," for do tipo ",(0,h.kt)("inlineCode",{parentName:"p"},"string")," (igual o exemplo acima).")),(0,h.kt)("blockquote",null,(0,h.kt)("p",{parentName:"blockquote"},"Use a prop ",(0,h.kt)("inlineCode",{parentName:"p"},"alt")," para espeficiar o texto alternativo para imagem.")),(0,h.kt)("h3",Object.assign({},{id:"cores"}),"Cores"),(0,h.kt)("p",null,"H\xe1 possibilidade de inverter as cores para dar suporte a contextos espec\xedficos. As cores d\xedsponiveis s\xe3o: ",(0,h.kt)("inlineCode",{parentName:"p"},"primary")," (padr\xe3o) e ",(0,h.kt)("inlineCode",{parentName:"p"},"high"),"."),(0,h.kt)(i.X,{__position:2,code:'<Row alignItems="center" className="bg-dark" style={{ paddingBottom: 16 }}>\n  <Column>\n    <Avatar size="lg" />\n  </Column>\n  <Column>\n    <Avatar size="lg">M</Avatar>\n  </Column>\n  <Column>\n    <Avatar size="lg" src="https://www.fillmurray.com/100/100" />\n  </Column>\n  <Column>\n    <Avatar size="lg" color="high" />\n  </Column>\n  <Column>\n    <Avatar size="lg" color="high">\n      M\n    </Avatar>\n  </Column>\n  <Column>\n    <Avatar size="lg" color="high" src="https://www.fillmurray.com/100/100" />\n  </Column>\n</Row>',scope:{props:a,Playground:i.X,Column:j.default,Row:k.default,Avatar:l.Z,meta:e},mdxType:"Playground"},(0,h.kt)(k.default,{alignItems:"center",className:"bg-dark",style:{paddingBottom:16},mdxType:"Row"},(0,h.kt)(j.default,{mdxType:"Column"},(0,h.kt)(l.Z,{size:"lg",mdxType:"Avatar"})),(0,h.kt)(j.default,{mdxType:"Column"},(0,h.kt)(l.Z,{size:"lg",mdxType:"Avatar"},"M")),(0,h.kt)(j.default,{mdxType:"Column"},(0,h.kt)(l.Z,{size:"lg",src:"https://www.fillmurray.com/100/100",mdxType:"Avatar"})),(0,h.kt)(j.default,{mdxType:"Column"},(0,h.kt)(l.Z,{size:"lg",color:"high",mdxType:"Avatar"})),(0,h.kt)(j.default,{mdxType:"Column"},(0,h.kt)(l.Z,{size:"lg",color:"high",mdxType:"Avatar"},"M")),(0,h.kt)(j.default,{mdxType:"Column"},(0,h.kt)(l.Z,{size:"lg",color:"high",src:"https://www.fillmurray.com/100/100",mdxType:"Avatar"})))),(0,h.kt)("h2",Object.assign({},{id:"propriedades"}),"Propriedades"),(0,h.kt)("table",null,(0,h.kt)("thead",{parentName:"table"},(0,h.kt)("tr",{parentName:"thead"},(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,h.kt)("tbody",{parentName:"table"},(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"src"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"string")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Caminho da imagem.")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"alt"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"string")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Texto alternativo quando n\xe3o houver imagem.")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"size"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"IAvatarSize")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"md")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"color"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"IAvatarColor")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"primary")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")))))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/ui-components/Avatar/index.mdx"};for(var d in c)window[d]=c[d]},36183:function(c,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return d.ZP},getGridUtilityClass:function(){return e.H},gridClasses:function(){return e.Z}});var d=a(14360),e=a(92718)}},function(a){a.O(0,[4526,7304,9961,4360,7978,9774,2888,179],function(){return a(a.s=76307)}),_N_E=a.O()}])