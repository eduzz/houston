(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1124],{87651:function(j,d,c){"use strict";c.r(d),c.d(d,{cache:function(){return w},css:function(){return u},cx:function(){return p},flush:function(){return n},getRegisteredStyles:function(){return r},hydrate:function(){return o},injectGlobal:function(){return s},keyframes:function(){return t},merge:function(){return q},sheet:function(){return v}});var g=c(8786),k=c(74343),h=c(53211);function l(a,b){if(void 0===a.inserted[b.name])return a.insert("",b,a.sheet,!0)}function i(c,d,b){var a=[],e=(0,h.fp)(c,a,b);return a.length<2?b:e+d(a)}var e,b,f,m=function g(f){for(var c="",d=0;d<f.length;d++){var b=f[d];if(null!=b){var a=void 0;switch(typeof b){case"boolean":break;case"object":if(Array.isArray(b))a=g(b);else for(var e in a="",b)b[e]&&e&&(a&&(a+=" "),a+=e);break;default:a=b}a&&(c&&(c+=" "),c+=a)}}return c},a=(e={key:"css"},(b=(0,g.Z)(e)).sheet.speedy=function(a){this.isSpeedy=a},b.compat=!0,{css:f=function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];var e=(0,k.O)(d,b.registered,void 0);return(0,h.My)(b,e,!1),b.key+"-"+e.name},cx:function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];return i(b.registered,f,m(d))},injectGlobal:function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];var e=(0,k.O)(d,b.registered);l(b,e)},keyframes:function(){for(var d=arguments.length,e=new Array(d),a=0;a<d;a++)e[a]=arguments[a];var c=(0,k.O)(e,b.registered),f="animation-"+c.name;return l(b,{name:c.name,styles:"@keyframes "+f+"{"+c.styles+"}"}),f},hydrate:function(a){a.forEach(function(a){b.inserted[a]=!0})},flush:function(){b.registered={},b.inserted={},b.sheet.flush()},sheet:b.sheet,cache:b,getRegisteredStyles:h.fp.bind(null,b.registered),merge:i.bind(null,b.registered,f)}),n=a.flush,o=a.hydrate,p=a.cx,q=a.merge,r=a.getRegisteredStyles,s=a.injectGlobal,t=a.keyframes,u=a.css,v=a.sheet,w=a.cache},94907:function(e,a){"use strict";const b=a=>a;let c;const d=(c=b,{configure(a){c=a},generate:a=>c(a),reset(){c=b}});a.Z=d},93772:function(c,b,a){"use strict";a.d(b,{Z:function(){return j}});var d=a(25773),e=a(30808),f=a(73143),g=a(67351);const h=["sx"],i=a=>{const b={systemProps:{},otherProps:{}};return Object.keys(a).forEach(c=>{g.Gc[c]?b.systemProps[c]=a[c]:b.otherProps[c]=a[c]}),b};function j(b){const{sx:a}=b,j=(0,e.Z)(b,h),{systemProps:c,otherProps:k}=i(j);let g;return g=Array.isArray(a)?[c,...a]:"function"==typeof a?(...e)=>{const b=a(...e);return(0,f.P)(b)?(0,d.Z)({},c,b):c}:(0,d.Z)({},c,a),(0,d.Z)({},k,{sx:g})}},67046:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Box",function(){return c(39059)}])},62550:function(f,c,a){"use strict";c.Z=void 0;var b=a(39037),g=a(24246),d=b.interopRequireWildcard(a(27378)),h=a(87651),i=b.interopRequireDefault(a(54964)),j=b.interopRequireDefault(a(55869)),e=d.memo(function(a){var d=a.children,e=a.className,f=a.paper,k=b.objectWithoutProperties(a,["children","className","paper"]),c=j.default(a);return g.jsx(i.default,b.objectSpread({},k,{className:h.cx(e,c.box,f&&c.paper),children:d}))});c.Z=e},55869:function(e,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=b(39037),d=c.interopRequireDefault(b(35686)).default(function(a){return{box:function(d){var b,e=d.xs,f=d.sm,g=d.md,h=d.lg,i=d.xl;return b={},c.defineProperty(b,a.breakpoints.up("xs"),{padding:null==e?void 0:e.padding,margin:null==e?void 0:e.margin}),c.defineProperty(b,a.breakpoints.up("sm"),{padding:null==f?void 0:f.padding,margin:null==f?void 0:f.margin}),c.defineProperty(b,a.breakpoints.up("md"),{padding:null==g?void 0:g.padding,margin:null==g?void 0:g.margin}),c.defineProperty(b,a.breakpoints.up("lg"),{padding:null==h?void 0:h.padding,margin:null==h?void 0:h.margin}),c.defineProperty(b,a.breakpoints.up("xl"),{padding:null==i?void 0:i.padding,margin:null==i?void 0:i.margin}),b},paper:{background:"#fff",borderRadius:4}}});a.default=d},35686:function(d,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){return function(d){var b;return b="function"==typeof a?a(f.default()):a,Object.keys(b).reduce(function(f,a){return c.objectSpread({},f,c.defineProperty({},a,e.css("function"==typeof b[a]?b[a](d):b[a])))},{})}};var c=a(39037),e=a(87651),f=c.interopRequireDefault(a(44659))},44659:function(c,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return d.useTheme()};var d=b(151)},39059:function(g,b,a){"use strict";a.r(b),a.d(b,{meta:function(){return e},"default":function(){return f}}),a(27378);var h=a(35318),i=a(56100),j=a(62550),e={name:"Box",tableOfContents:{depth:0,children:[{depth:1,slug:"#box",title:"Box",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"},{depth:3,slug:"#background",title:"Background"},{depth:3,slug:"#com-sombra",title:"Com sombra"}]}]}]}},k={meta:e};function f(b){var c=b.components,a=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(b,["components"]);return(0,h.kt)("wrapper",Object.assign({},k,a,{components:c,mdxType:"MDXLayout"}),(0,h.kt)("h1",Object.assign({},{id:"box"}),"Box"),(0,h.kt)("p",null,"O componente de caixa (Box) funciona como um encapsulador de outros componentes, auxiliando na estiliza\xe7\xe3o e padroniza\xe7\xe3o dos espa\xe7amentos (",(0,h.kt)("inlineCode",{parentName:"p"},"margin")," e ",(0,h.kt)("inlineCode",{parentName:"p"},"padding"),")."),(0,h.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,h.kt)("pre",null,(0,h.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import Box from '@eduzz/houston-ui/Box';\n")),(0,h.kt)("h3",Object.assign({},{id:"exemplo"}),"Exemplo"),(0,h.kt)("p",null,"Padding e margin ",(0,h.kt)("inlineCode",{parentName:"p"},"20px"),"."),(0,h.kt)(i.X,{__position:0,code:"<Box xs={{ padding: 20, margin: 20 }}>\n  <div style={{ textAlign: 'center' }}>\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iusto\n    consequuntur molestias, eligendi perspiciatis commodi error vero tempora\n    voluptatum accusamus similique molestiae iste reiciendis animi, nisi\n    mollitia debitis repudiandae soluta.\n  </div>\n</Box>",scope:{props:a,Playground:i.X,Box:j.Z,meta:e},mdxType:"Playground"},(0,h.kt)(j.Z,{xs:{padding:20,margin:20},mdxType:"Box"},(0,h.kt)("div",{style:{textAlign:"center"}},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iusto consequuntur molestias, eligendi perspiciatis commodi error vero tempora voluptatum accusamus similique molestiae iste reiciendis animi, nisi mollitia debitis repudiandae soluta."))),(0,h.kt)("h3",Object.assign({},{id:"background"}),"Background"),(0,h.kt)("p",null,"Adiciona ",(0,h.kt)("inlineCode",{parentName:"p"},"background")," no elemento."),(0,h.kt)(i.X,{__position:1,code:"<div className=\"bg-grey\">\n  <Box xs={{ padding: 20 }} paper>\n    <div style={{ textAlign: 'center' }}>\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iusto\n      consequuntur molestias, eligendi perspiciatis commodi error vero tempora\n      voluptatum accusamus similique molestiae iste reiciendis animi, nisi\n      mollitia debitis repudiandae soluta.\n    </div>\n  </Box>\n</div>",scope:{props:a,Playground:i.X,Box:j.Z,meta:e},mdxType:"Playground"},(0,h.kt)("div",{className:"bg-grey"},(0,h.kt)(j.Z,{xs:{padding:20},paper:!0,mdxType:"Box"},(0,h.kt)("div",{style:{textAlign:"center"}},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iusto consequuntur molestias, eligendi perspiciatis commodi error vero tempora voluptatum accusamus similique molestiae iste reiciendis animi, nisi mollitia debitis repudiandae soluta.")))),(0,h.kt)("h3",Object.assign({},{id:"com-sombra"}),"Com sombra"),(0,h.kt)("p",null,"Adiciona sombra externa no elemento."),(0,h.kt)(i.X,{__position:2,code:"<div className=\"bg-grey\">\n  <Box xs={{ padding: 20 }} boxShadow={2} paper>\n    <div style={{ textAlign: 'center' }}>\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iusto\n      consequuntur molestias, eligendi perspiciatis commodi error vero tempora\n      voluptatum accusamus similique molestiae iste reiciendis animi, nisi\n      mollitia debitis repudiandae soluta.\n    </div>\n  </Box>\n</div>",scope:{props:a,Playground:i.X,Box:j.Z,meta:e},mdxType:"Playground"},(0,h.kt)("div",{className:"bg-grey"},(0,h.kt)(j.Z,{xs:{padding:20},boxShadow:2,paper:!0,mdxType:"Box"},(0,h.kt)("div",{style:{textAlign:"center"}},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iusto consequuntur molestias, eligendi perspiciatis commodi error vero tempora voluptatum accusamus similique molestiae iste reiciendis animi, nisi mollitia debitis repudiandae soluta.")))),(0,h.kt)("table",null,(0,h.kt)("thead",{parentName:"table"},(0,h.kt)("tr",{parentName:"thead"},(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,h.kt)("tbody",{parentName:"table"},(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"xs"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"IBoxSpacement")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Se for definido valor apenas para a propriedade ",(0,h.kt)("inlineCode",{parentName:"td"},"xs")," todos os outros pontos de quebra v\xe3o ter os mesmos valores")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"sm"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"IBoxSpacement")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"md"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"IBoxSpacement")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"lg"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"IBoxSpacement")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"xl"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"IBoxSpacement")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"paper"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"boolean")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"boxShadow"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"number")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Aceita valores de 0 a 24")))))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/ui-components/Box/index.mdx"};for(var d in c)window[d]=c[d]},54964:function(g,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return r}});var h=a(25773),i=a(30808),j=a(27378),k=a(38944),l=a(89966),m=a(11652),n=a(93772),o=a(96206),p=a(24246);const q=["className","component"];var c=a(94907),d=a(70310),e=(0,d.Z)(),f=function(a={}){const{defaultTheme:d,defaultClassName:e="MuiBox-root",generateClassName:f,styleFunctionSx:b=m.Z}=a,g=(0,l.ZP)("div")(b),c=j.forwardRef(function(b,c){const j=(0,o.Z)(d),a=(0,n.Z)(b),{className:l,component:m="div"}=a,r=(0,i.Z)(a,q);return(0,p.jsx)(g,(0,h.Z)({as:m,ref:c,className:(0,k.Z)(l,f?f(e):e),theme:j},r))});return c}({defaultTheme:e,defaultClassName:"MuiBox-root",generateClassName:c.Z.generate}),r=f}},function(a){a.O(0,[4526,4356,9961,3245,9774,2888,179],function(){return a(a.s=67046)}),_N_E=a.O()}])