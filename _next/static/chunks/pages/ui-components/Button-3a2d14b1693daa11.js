(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2238],{87651:function(j,d,c){"use strict";c.r(d),c.d(d,{cache:function(){return w},css:function(){return u},cx:function(){return p},flush:function(){return n},getRegisteredStyles:function(){return r},hydrate:function(){return o},injectGlobal:function(){return s},keyframes:function(){return t},merge:function(){return q},sheet:function(){return v}});var g=c(8786),k=c(74343),h=c(53211);function l(a,b){if(void 0===a.inserted[b.name])return a.insert("",b,a.sheet,!0)}function i(c,d,b){var a=[],e=(0,h.fp)(c,a,b);return a.length<2?b:e+d(a)}var e,b,f,m=function g(f){for(var c="",d=0;d<f.length;d++){var b=f[d];if(null!=b){var a=void 0;switch(typeof b){case"boolean":break;case"object":if(Array.isArray(b))a=g(b);else for(var e in a="",b)b[e]&&e&&(a&&(a+=" "),a+=e);break;default:a=b}a&&(c&&(c+=" "),c+=a)}}return c},a=(e={key:"css"},(b=(0,g.Z)(e)).sheet.speedy=function(a){this.isSpeedy=a},b.compat=!0,{css:f=function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];var e=(0,k.O)(d,b.registered,void 0);return(0,h.My)(b,e,!1),b.key+"-"+e.name},cx:function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];return i(b.registered,f,m(d))},injectGlobal:function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];var e=(0,k.O)(d,b.registered);l(b,e)},keyframes:function(){for(var d=arguments.length,e=new Array(d),a=0;a<d;a++)e[a]=arguments[a];var c=(0,k.O)(e,b.registered),f="animation-"+c.name;return l(b,{name:c.name,styles:"@keyframes "+f+"{"+c.styles+"}"}),f},hydrate:function(a){a.forEach(function(a){b.inserted[a]=!0})},flush:function(){b.registered={},b.inserted={},b.sheet.flush()},sheet:b.sheet,cache:b,getRegisteredStyles:h.fp.bind(null,b.registered),merge:i.bind(null,b.registered,f)}),n=a.flush,o=a.hydrate,p=a.cx,q=a.merge,r=a.getRegisteredStyles,s=a.injectGlobal,t=a.keyframes,u=a.css,v=a.sheet,w=a.cache},69805:function(c,b,a){"use strict";a.d(b,{Z:function(){return f}});var d=a(27378),e=a(18030);function f(a){const b=d.useRef(a);return(0,e.Z)(()=>{b.current=a}),d.useCallback((...a)=>(0,b.current)(...a),[])}},78510:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Button",function(){return c(68131)}])},16847:function(e,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=b(39037).interopRequireWildcard(b(96342));Object.keys(c).forEach(function(b){"default"!==b&&"__esModule"!==b&&(b in a&&a[b]===c[b]||Object.defineProperty(a,b,{enumerable:!0,get:function(){return c[b]}}))});var d=c.default;a.default=d},96342:function(n,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.breakpoints=a.css=a.clsx=a.cx=a.keyframes=void 0;var e=b(39037),c=b(87651),d=b(10043),f=e.interopRequireDefault(b(94408)),g=b(60921),h=d.keyframes;a.keyframes=h;var i=c.cx;a.cx=i;var j=c.cx;a.clsx=j;var k=d.css;a.css=k;var l=g.breakpoinstUtils;a.breakpoints=l;var m=f.default;a.default=m},59266:function(f,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var b=a(39037),g=a(24246);b.interopRequireWildcard(a(27378));var d=b.interopRequireWildcard(a(16847)),h=b.interopRequireDefault(a(72150)),i=b.interopRequireDefault(a(79955));function j(){var a=b.taggedTemplateLiteral(["\n    border: none;\n    cursor: pointer;\n    text-transform: none;\n    padding: 10px 16px;\n    height: 40px;\n    border-radius: ",";\n    font-weight: ",";\n    font-family: ",";\n    line-height: ",";\n    font-size: ",";\n    position: relative;\n    transition: 0.3s;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    &.--fullWidth {\n      width: 100%;\n    }\n\n    &.--contained {\n      background-color: ",";\n      color: white;\n\n      &:hover:not(:disabled) {\n        background-color: ",";\n      }\n\n      &:active:not(:disabled) {\n        background-color: ",";\n      }\n\n      &:disabled {\n        background-color: ",";\n      }\n    }\n\n    &.--outlined {\n      background-color: transparent;\n      color: ",";\n      border: 1px solid;\n      border-color: ",";\n\n      &:hover:not(:disabled),\n      &:active:not(:disabled) {\n        border-color: ",";\n        color: ",";\n      }\n    }\n\n    &.--text {\n      background-color: transparent;\n      color: ",";\n\n      &:hover:not(:disabled),\n      &:active:not(:disabled) {\n        background-color: ",";\n      }\n    }\n\n    &:disabled {\n      cursor: default;\n      color: ",";\n      border-color: ",";\n    }\n\n    &:before {\n      content: ' ';\n      position: absolute;\n      left: -4px;\n      right: -4px;\n      top: -4px;\n      bottom: -4px;\n      border: 2px solid transparent;\n      transition: 0.3s;\n      border-radius: ",";\n    }\n\n    &:focus:not(:active):not(:hover):before {\n      border-color: ",";\n    }\n\n    & > .__loader {\n      margin-right: ",";\n    }\n\n    & > .__startIcon {\n      margin-right: ",";\n    }\n\n    & > .__endIcon {\n      margin-left: ",";\n    }\n\n    & > .__startIcon > svg,\n    & > .__endIcon > svg {\n      vertical-align: middle;\n      font-size: 17px;\n    }\n  "]);return j=function(){return a},a}var e=d.default(function(a){var e=a.children,f=a.disabled,i=a.startIcon,j=a.endIcon,k=a.variant,l=a.loading,c=void 0!==l&&l,m=a.loadingText,n=a.className,o=a.fullWidth,p=b.objectWithoutProperties(a,["children","disabled","startIcon","endIcon","variant","loading","loadingText","className","fullWidth"]);return g.jsxs("button",b.objectSpread({role:"button",className:d.cx(n,"--".concat(null!=k?k:"contained"),{"--fullWidth":o})},p,{disabled:void 0!==f&&f||c,children:[!!i&&!c&&g.jsx("span",{className:"__startIcon",children:i}),!c&&g.jsx("span",{className:"__text",children:e}),c&&g.jsxs(g.Fragment,{children:[g.jsx(h.default,{size:15,color:"inherit",className:"__loader"}),g.jsx("span",{className:"__text",children:null!=m?m:e})]}),!!j&&g.jsx("span",{className:"__endIcon",children:j})]}))},{label:"houston-button"})(function(c){var a=c.theme,e=c.color,b=i.default(a,e);return d.css(j(),a.border.radius.xs,a.font.weight.bold,a.font.family.base,a.line.height.default,a.font.size.xxs,b.pure,b.light,b.dark,a.neutralColor.high.medium,b.pure,b.light,b.dark,b.dark,b.pure,a.neutralColor.high.light,a.hexToRgba(a.neutralColor.low.pure,a.opacity.level[6]),a.neutralColor.high.medium,a.border.radius.sm,a.neutralColor.high.medium,a.spacing.nano,a.spacing.nano,a.spacing.nano)});c.default=e},24885:function(f,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),g=a(24246),d=c.interopRequireWildcard(a(27378)),h=c.interopRequireDefault(a(36183)),e=d.forwardRef(function(a,b){var d=a.className,e=c.objectWithoutProperties(a,["className"]);return g.jsx(h.default,c.objectSpread({},e,{item:!0,className:d,ref:b}))});b.default=e},29618:function(g,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),h=a(24246),d=c.interopRequireWildcard(a(27378)),i=c.interopRequireDefault(a(36183)),j=a(55693),k=a(77097),l=a(2293),e=d.forwardRef(function(a,b){var e=a.className,f=a.spacing,g=c.objectWithoutProperties(a,["className","spacing"]),m=j.useContextSelector(k.GridContext,function(a){return a.spacing}),n=d.useMemo(function(){var a;return l.ContainerSizes[null!==(a=null!=f?f:m)&& void 0!==a?a:"cozy"]},[m,f]);return h.jsx(i.default,c.objectSpread({},g,{container:!0,ref:b,className:e,spacing:n}))}),f=d.memo(e);b.default=f},77097:function(e,a,c){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.GridContext=void 0;var b=c(55693).createContext({});a.GridContext=b;var d=b.Provider;a.default=d},2293:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ContainerSizes=void 0,a.ContainerSizes={comfortable:10,cozy:4,compact:2}},72150:function(h,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),i=a(24246);c.interopRequireWildcard(a(27378));var d=c.interopRequireWildcard(a(16847)),j=c.interopRequireDefault(a(79955));function e(){var a=c.taggedTemplateLiteral(["\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(270deg); }\n"]);return e=function(){return a},a}function k(){var a=c.taggedTemplateLiteral(["\n  0% { stroke-dashoffset: ","; }\n  50% { stroke-dashoffset: ","; transform: rotate(135deg); }\n  100% { stroke-dashoffset: ","; transform: rotate(450deg); }\n"]);return k=function(){return a},a}function l(){var a=c.taggedTemplateLiteral(["\n    animation: "," 1.4s linear infinite;\n    color: ",";\n\n    & > circle {\n      stroke: currentColor;\n      stroke-width: ",";\n      stroke-dasharray: ",";\n      stroke-dashoffset: 0;\n      transform-origin: center;\n      animation: "," 1.4s ease-in-out infinite;\n    }\n  "]);return l=function(){return a},a}function f(){var a=c.taggedTemplateLiteral(["\n  ","\n"]);return f=function(){return a},a}var m=d.keyframes(e()),g=d.default(function(c){var e=c.className,d=c.size,a=void 0===d?65:d,b=a/65*30;return i.jsx("svg",{className:e,width:"".concat(a,"px"),height:"".concat(a,"px"),viewBox:"0 0 ".concat(a+1," ").concat(a+1),children:i.jsx("circle",{fill:"none",strokeLinecap:"round",cx:b+.1*b,cy:b+.1*b,r:b})})},{label:"houston-loader"})(f(),function(b){var a,g=b.theme,e=b.color,f=b.size,c=void 0===f?65:f;return d.css(l(),m,"inherit"===e?"inherit":j.default(g,e).pure,c/65*6,c/65*187,(a=c,d.keyframes(k(),a/65*187,a/65*46.75,a/65*187)))});b.default=g},79955:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(b){var a=arguments.length>1&& void 0!==arguments[1]?arguments[1]:"primary";return["low","high"].includes(a)?b.neutralColor[a]:["positive","negative","warning","informative"].includes(a)?b.feedbackColor[a]:b.brandColor[a]}},68131:function(g,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return f},meta:function(){return e}}),a(27378);var h=a(35318),i=a(47249),j=a(56100),k=a(24885),l=a(29618),m=a(59266),e={name:"Button",tableOfContents:{depth:0,children:[{depth:1,slug:"#button",title:"Button",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#varia\xe7\xf5es",title:"Varia\xe7\xf5es"},{depth:3,slug:"#cores",title:"Cores"},{depth:3,slug:"#estados",title:"Estados"},{depth:3,slug:"#com-\xedcones",title:"Com \xedcones"}]}]}]}},n={meta:e};function f(b){var c=b.components,a=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(b,["components"]);return(0,h.kt)("wrapper",Object.assign({},n,a,{components:c,mdxType:"MDXLayout"}),(0,h.kt)("h1",Object.assign({},{id:"button"}),"Button"),(0,h.kt)("p",null,"Bot\xf5es permitem que os usu\xe1rios tomem a\xe7\xf5es e decis\xf5es com um simples toque."),(0,h.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,h.kt)("pre",null,(0,h.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import Button from '@eduzz/houston-ui/Button';\n")),(0,h.kt)("h3",Object.assign({},{id:"varia\xe7\xf5es"}),"Varia\xe7\xf5es"),(0,h.kt)(j.X,{__position:0,code:'<Row>\n  <Column>\n    <Button>Contained</Button>\n  </Column>\n  <Column>\n    <Button variant="outlined">Outlined</Button>\n  </Column>\n  <Column>\n    <Button variant="text">Text</Button>\n  </Column>\n</Row>',scope:{props:a,InsertEmoticonIcon:i.Z,Playground:j.X,Column:k.default,Row:l.default,Button:m.default,meta:e},mdxType:"Playground"},(0,h.kt)(l.default,{mdxType:"Row"},(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.default,{mdxType:"Button"},"Contained")),(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.default,{variant:"outlined",mdxType:"Button"},"Outlined")),(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.default,{variant:"text",mdxType:"Button"},"Text")))),(0,h.kt)("h3",Object.assign({},{id:"cores"}),"Cores"),(0,h.kt)(j.X,{__position:1,code:'<Row>\n  <Column>\n    <Button color="primary">Primary</Button>\n  </Column>\n  <Column>\n    <Button color="positive">Success</Button>\n  </Column>\n  <Column>\n    <Button color="negative">Error</Button>\n  </Column>\n  <Column>\n    <Button color="informative">Info</Button>\n  </Column>\n  <Column>\n    <Button color="warning">Warning</Button>\n  </Column>\n</Row>',scope:{props:a,InsertEmoticonIcon:i.Z,Playground:j.X,Column:k.default,Row:l.default,Button:m.default,meta:e},mdxType:"Playground"},(0,h.kt)(l.default,{mdxType:"Row"},(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.default,{color:"primary",mdxType:"Button"},"Primary")),(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.default,{color:"positive",mdxType:"Button"},"Success")),(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.default,{color:"negative",mdxType:"Button"},"Error")),(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.default,{color:"informative",mdxType:"Button"},"Info")),(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.default,{color:"warning",mdxType:"Button"},"Warning")))),(0,h.kt)("h3",Object.assign({},{id:"estados"}),"Estados"),(0,h.kt)(j.X,{__position:2,code:'<Row>\n  <Column>\n    <Button disabled>Disabled</Button>\n  </Column>\n  <Column>\n    <Button loading>loading</Button>\n  </Column>\n  <Column>\n    <Button loading loadingText="Carregando...">\n      loading\n    </Button>\n  </Column>\n</Row>',scope:{props:a,InsertEmoticonIcon:i.Z,Playground:j.X,Column:k.default,Row:l.default,Button:m.default,meta:e},mdxType:"Playground"},(0,h.kt)(l.default,{mdxType:"Row"},(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.default,{disabled:!0,mdxType:"Button"},"Disabled")),(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.default,{loading:!0,mdxType:"Button"},"loading")),(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.default,{loading:!0,loadingText:"Carregando...",mdxType:"Button"},"loading")))),(0,h.kt)("h3",Object.assign({},{id:"com-\xedcones"}),"Com \xedcones"),(0,h.kt)(j.X,{__position:3,code:"<Row>\n  <Column>\n    <Button startIcon={<InsertEmoticonIcon />}>Start</Button>\n  </Column>\n  <Column>\n    <Button endIcon={<InsertEmoticonIcon />}>End</Button>\n  </Column>\n</Row>",scope:{props:a,InsertEmoticonIcon:i.Z,Playground:j.X,Column:k.default,Row:l.default,Button:m.default,meta:e},mdxType:"Playground"},(0,h.kt)(l.default,{mdxType:"Row"},(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.default,{startIcon:(0,h.kt)(i.Z,{mdxType:"InsertEmoticonIcon"}),mdxType:"Button"},"Start")),(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.default,{endIcon:(0,h.kt)(i.Z,{mdxType:"InsertEmoticonIcon"}),mdxType:"Button"},"End")))),(0,h.kt)("table",null,(0,h.kt)("thead",{parentName:"table"},(0,h.kt)("tr",{parentName:"thead"},(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"))),(0,h.kt)("tbody",{parentName:"table"},(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"disabled"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"boolean")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false"))),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"startIcon"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"endIcon"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"variant"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"contained ","|"," outlined ","|"," text"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"contained"))),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"href"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"string")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"endIcon"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"fullWidth"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"boolean")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false"))),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"loading"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"boolean")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false"))),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"loadingText"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"string")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onClick"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"function")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"color"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"primary ","|"," success ","|"," error ","|"," info ","|"," warning"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"primary"))))))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/ui-components/Button/index.mdx"};for(var d in c)window[d]=c[d]},36183:function(c,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return d.ZP},getGridUtilityClass:function(){return e.H},gridClasses:function(){return e.Z}});var d=a(14360),e=a(92718)},98165:function(d,a,b){"use strict";var c=b(29490);a.Z=c.Z},5965:function(d,a,b){"use strict";var c=b(69805);a.Z=c.Z},34273:function(c,b,a){"use strict";a.d(b,{Z:function(){return l}});var d=a(27378);let e=!0,f=!1,g;const h={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i(a){a.metaKey||a.altKey||a.ctrlKey||(e=!0)}function j(){e=!1}function k(){"hidden"===this.visibilityState&&f&&(e=!0)}var l=function(){const a=d.useCallback(b=>{if(null!=b){var a;(a=b.ownerDocument).addEventListener("keydown",i,!0),a.addEventListener("mousedown",j,!0),a.addEventListener("pointerdown",j,!0),a.addEventListener("touchstart",j,!0),a.addEventListener("visibilitychange",k,!0)}},[]),b=d.useRef(!1);return{isFocusVisibleRef:b,onFocus:function(a){return!!function(b){const{target:a}=b;try{return a.matches(":focus-visible")}catch(c){}return e||function(a){const{type:c,tagName:b}=a;return"INPUT"===b&&!!h[c]&&!a.readOnly||"TEXTAREA"===b&&!a.readOnly||!!a.isContentEditable}(a)}(a)&&(b.current=!0,!0)},onBlur:function(){return!!b.current&&(f=!0,window.clearTimeout(g),g=window.setTimeout(()=>{f=!1},100),b.current=!1,!0)},ref:a}}}},function(a){a.O(0,[4526,7304,9961,4360,7249,7978,9774,2888,179],function(){return a(a.s=78510)}),_N_E=a.O()}])