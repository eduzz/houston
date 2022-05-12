(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9869],{79798:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Tooltip",function(){return c(14119)}])},16847:function(e,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=b(39037).interopRequireWildcard(b(96342));Object.keys(c).forEach(function(b){"default"!==b&&"__esModule"!==b&&(b in a&&a[b]===c[b]||Object.defineProperty(a,b,{enumerable:!0,get:function(){return c[b]}}))});var d=c.default;a.default=d},96342:function(n,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.breakpoints=a.css=a.clsx=a.cx=a.keyframes=void 0;var e=b(39037),c=b(87651),d=b(10043),f=e.interopRequireDefault(b(94408)),g=b(60921),h=d.keyframes;a.keyframes=h;var i=c.cx;a.cx=i;var j=c.cx;a.clsx=j;var k=d.css;a.css=k;var l=g.breakpoinstUtils;a.breakpoints=l;var m=f.default;a.default=m},59266:function(f,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var b=a(39037),g=a(24246);b.interopRequireWildcard(a(27378));var d=b.interopRequireWildcard(a(16847)),h=b.interopRequireDefault(a(72150)),i=b.interopRequireDefault(a(79955));function j(){var a=b.taggedTemplateLiteral(["\n    border: none;\n    cursor: pointer;\n    text-transform: none;\n    padding: 10px 16px;\n    height: 40px;\n    border-radius: ",";\n    font-weight: ",";\n    font-family: ",";\n    line-height: ",";\n    font-size: ",";\n    position: relative;\n    transition: 0.3s;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    &.--fullWidth {\n      width: 100%;\n    }\n\n    &.--contained {\n      background-color: ",";\n      color: white;\n\n      &:hover:not(:disabled) {\n        background-color: ",";\n      }\n\n      &:active:not(:disabled) {\n        background-color: ",";\n      }\n\n      &:disabled {\n        background-color: ",";\n      }\n    }\n\n    &.--outlined {\n      background-color: transparent;\n      color: ",";\n      border: 1px solid;\n      border-color: ",";\n\n      &:hover:not(:disabled),\n      &:active:not(:disabled) {\n        border-color: ",";\n        color: ",";\n      }\n    }\n\n    &.--text {\n      background-color: transparent;\n      color: ",";\n\n      &:hover:not(:disabled),\n      &:active:not(:disabled) {\n        background-color: ",";\n      }\n    }\n\n    &:disabled {\n      cursor: default;\n      color: ",";\n      border-color: ",";\n    }\n\n    &:before {\n      content: ' ';\n      position: absolute;\n      left: -4px;\n      right: -4px;\n      top: -4px;\n      bottom: -4px;\n      border: 2px solid transparent;\n      transition: 0.3s;\n      border-radius: ",";\n    }\n\n    &:focus:not(:active):not(:hover):before {\n      border-color: ",";\n    }\n\n    & > .__loader {\n      margin-right: ",";\n    }\n\n    & > .__startIcon {\n      margin-right: ",";\n    }\n\n    & > .__endIcon {\n      margin-left: ",";\n    }\n\n    & > .__startIcon > svg,\n    & > .__endIcon > svg {\n      vertical-align: middle;\n      font-size: 17px;\n    }\n  "]);return j=function(){return a},a}var e=d.default(function(a){var e=a.children,f=a.disabled,i=a.startIcon,j=a.endIcon,k=a.variant,l=a.loading,c=void 0!==l&&l,m=a.loadingText,n=a.className,o=a.fullWidth,p=b.objectWithoutProperties(a,["children","disabled","startIcon","endIcon","variant","loading","loadingText","className","fullWidth"]);return g.jsxs("button",b.objectSpread({className:d.cx(n,"--".concat(null!=k?k:"contained"),{"--fullWidth":o})},p,{disabled:void 0!==f&&f||c,children:[!!i&&!c&&g.jsx("span",{className:"__startIcon",children:i}),!c&&g.jsx("span",{className:"__text",children:e}),c&&g.jsxs(g.Fragment,{children:[g.jsx(h.default,{size:15,color:"inherit",className:"__loader"}),g.jsx("span",{className:"__text",children:null!=m?m:e})]}),!!j&&g.jsx("span",{className:"__endIcon",children:j})]}))},{label:"houston-button"})(function(c){var a=c.theme,e=c.color,b=i.default(a,e);return d.css(j(),a.border.radius.xs,a.font.weight.bold,a.font.family.base,a.line.height.default,a.font.size.xxs,b.pure,b.light,b.dark,a.neutralColor.high.medium,b.pure,b.light,b.dark,b.dark,b.pure,a.neutralColor.high.light,a.neutralColor.low.medium,a.neutralColor.high.medium,a.border.radius.sm,a.neutralColor.high.medium,a.spacing.nano,a.spacing.nano,a.spacing.nano)});c.default=e},24885:function(f,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),g=a(24246),d=c.interopRequireWildcard(a(27378)),h=c.interopRequireDefault(a(36183)),e=d.forwardRef(function(a,b){var d=a.className,e=c.objectWithoutProperties(a,["className"]);return g.jsx(h.default,c.objectSpread({},e,{item:!0,className:d,ref:b}))});b.default=e},29618:function(g,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),h=a(24246),d=c.interopRequireWildcard(a(27378)),i=c.interopRequireDefault(a(36183)),j=a(55693),k=a(77097),l=a(2293),e=d.forwardRef(function(a,b){var e=a.className,f=a.spacing,g=c.objectWithoutProperties(a,["className","spacing"]),m=j.useContextSelector(k.GridContext,function(a){return a.spacing}),n=d.useMemo(function(){var a;return l.ContainerSizes[null!==(a=null!=f?f:m)&& void 0!==a?a:"cozy"]},[m,f]);return h.jsx(i.default,c.objectSpread({},g,{container:!0,ref:b,className:e,spacing:n}))}),f=d.memo(e);b.default=f},77097:function(e,a,c){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.GridContext=void 0;var b=c(55693).createContext({});a.GridContext=b;var d=b.Provider;a.default=d},2293:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ContainerSizes=void 0,a.ContainerSizes={comfortable:10,cozy:4,compact:2}},72150:function(i,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var j,k,l,m,n,c=a(39037),o=a(24246);c.interopRequireWildcard(a(27378));var d=c.interopRequireWildcard(a(96342)),p=c.interopRequireDefault(a(79955));function e(){var a=c.taggedTemplateLiteral(["\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(270deg); }\n"]);return e=function(){return a},a}function q(){var a=c.taggedTemplateLiteral(["\n  0% { stroke-dashoffset: ","; }\n  50% { stroke-dashoffset: ","; transform: rotate(135deg); }\n  100% { stroke-dashoffset: ","; transform: rotate(450deg); }\n"]);return q=function(){return a},a}function f(){var a=c.taggedTemplateLiteral(["\n  animation: "," 1.4s linear infinite;\n  color: ",";\n\n  & > circle {\n    stroke: currentColor;\n    stroke-width: ",";\n    stroke-dasharray: ",";\n    stroke-dashoffset: 0;\n    transform-origin: center;\n    animation: "," 1.4s ease-in-out infinite;\n  }\n"]);return f=function(){return a},a}var g=d.keyframes(e()),h=d.default(function(c){var d=c.className,a=c.size;a=null!=a?a:65;var b=(null!=a?a:65)/65*30;return o.jsx("svg",{className:d,width:"".concat(a,"px"),height:"".concat(a,"px"),viewBox:"0 0 ".concat(a+1," ").concat(a+1),children:o.jsx("circle",{fill:"none",strokeLinecap:"round",cx:b+.1*b,cy:b+.1*b,r:b})})},{label:"houston-loader"})(f(),g,function(a){return"inherit"===a.color?"inherit":p.default(a.theme,a.color).pure},function(a){return(null!==(m=a.size)&& void 0!==m?m:65)/65*6},function(a){return(null!==(n=a.size)&& void 0!==n?n:65)/65*187},function(b){var a;return a=b,d.keyframes(q(),(null!==(j=a.size)&& void 0!==j?j:65)/65*187,(null!==(k=a.size)&& void 0!==k?k:65)/65*46.75,(null!==(l=a.size)&& void 0!==l?l:65)/65*187)});b.default=h},44678:function(f,b,a){"use strict";b.Z=void 0;var c=a(39037),g=a(24246),d=c.interopRequireWildcard(a(27378)),h=c.interopRequireDefault(a(83524)),i=d.forwardRef(function(a,b){var d=a.children,e=a.className,f=c.objectWithoutProperties(a,["children","className"]);return g.jsx("div",c.objectSpread({className:e},f,{ref:b,style:{display:"inline-flex"},children:d}))}),e=d.memo(function(a){var d=a.placement,f=a.children,e=a.disabled,b=void 0!==e&&e,j=a.className,k=c.objectWithoutProperties(a,["placement","children","disabled","className"]);return g.jsx(h.default,c.objectSpread({},k,{disableTouchListener:b,disableHoverListener:b,disableFocusListener:b,placement:void 0===d?"top":d,arrow:!0,children:g.jsx(i,{children:f,className:j})}))});b.Z=e},79955:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(b){var a=arguments.length>1&& void 0!==arguments[1]?arguments[1]:"primary";return["low","high"].includes(a)?b.neutralColor[a]:["positive","negative","warning","informative"].includes(a)?b.feedbackColor[a]:b.brandColor[a]}},14119:function(g,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return f},meta:function(){return e}}),a(27378);var h=a(35318),i=a(56100),j=a(59266),k=a(24885),l=a(29618),m=a(44678),e={name:"Tooltip",tableOfContents:{depth:0,children:[{depth:1,slug:"#tooltip",title:"Tooltip",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"},{depth:3,slug:"#dire\xe7\xe3o",title:"Dire\xe7\xe3o"}]}]}]}},n={meta:e};function f(b){var c=b.components,a=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(b,["components"]);return(0,h.kt)("wrapper",Object.assign({},n,a,{components:c,mdxType:"MDXLayout"}),(0,h.kt)("h1",Object.assign({},{id:"tooltip"}),"Tooltip"),(0,h.kt)("p",null,"Usado para identificar elementos e descrever funcionalidades."),(0,h.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,h.kt)("pre",null,(0,h.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import Tooltip from '@eduzz/houston-ui/Tooltip';\n")),(0,h.kt)("h3",Object.assign({},{id:"exemplo"}),"Exemplo"),(0,h.kt)(i.X,{__position:0,code:'<Row>\n  <Column>\n    <Tooltip title="Lorem ipsum dolor">\n      <Button>John Doe</Button>\n    </Tooltip>\n  </Column>\n  <Column>\n    <Tooltip title="Lorem ipsum dolor" disabled>\n      <Button>Tooltip desabilitado</Button>\n    </Tooltip>\n  </Column>\n</Row>',scope:{props:a,Playground:i.X,Button:j.default,Column:k.default,Row:l.default,Tooltip:m.Z,meta:e},mdxType:"Playground"},(0,h.kt)(l.default,{mdxType:"Row"},(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.Z,{title:"Lorem ipsum dolor",mdxType:"Tooltip"},(0,h.kt)(j.default,{mdxType:"Button"},"John Doe"))),(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.Z,{title:"Lorem ipsum dolor",disabled:!0,mdxType:"Tooltip"},(0,h.kt)(j.default,{mdxType:"Button"},"Tooltip desabilitado"))))),(0,h.kt)("h3",Object.assign({},{id:"dire\xe7\xe3o"}),"Dire\xe7\xe3o"),(0,h.kt)(i.X,{__position:1,code:'<Row>\n  <Column>\n    <Tooltip title="Lorem ipsum dolor">\n      <Button>Top</Button>\n    </Tooltip>\n  </Column>\n  <Column>\n    <Tooltip title="Lorem ipsum dolor" placement="bottom">\n      <Button>Bottom</Button>\n    </Tooltip>\n  </Column>\n  <Column>\n    <Tooltip title="Lorem ipsum dolor" placement="left">\n      <Button>Left</Button>\n    </Tooltip>\n  </Column>\n  <Column>\n    <Tooltip title="Lorem ipsum dolor" placement="right">\n      <Button>Right</Button>\n    </Tooltip>\n  </Column>\n</Row>',scope:{props:a,Playground:i.X,Button:j.default,Column:k.default,Row:l.default,Tooltip:m.Z,meta:e},mdxType:"Playground"},(0,h.kt)(l.default,{mdxType:"Row"},(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.Z,{title:"Lorem ipsum dolor",mdxType:"Tooltip"},(0,h.kt)(j.default,{mdxType:"Button"},"Top"))),(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.Z,{title:"Lorem ipsum dolor",placement:"bottom",mdxType:"Tooltip"},(0,h.kt)(j.default,{mdxType:"Button"},"Bottom"))),(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.Z,{title:"Lorem ipsum dolor",placement:"left",mdxType:"Tooltip"},(0,h.kt)(j.default,{mdxType:"Button"},"Left"))),(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.Z,{title:"Lorem ipsum dolor",placement:"right",mdxType:"Tooltip"},(0,h.kt)(j.default,{mdxType:"Button"},"Right"))))),(0,h.kt)("table",null,(0,h.kt)("thead",{parentName:"table"},(0,h.kt)("tr",{parentName:"thead"},(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,h.kt)("tbody",{parentName:"table"},(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"title"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"string")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"true")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"disabled"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"boolean")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"placement"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"ITooltipPlacement")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"top")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"open"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"boolean")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Se verdadeiro, sempre exibir\xe1 o ",(0,h.kt)("inlineCode",{parentName:"td"},"title"),".")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onOpen"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"function")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onClose"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"function")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")))))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/ui-components/Tooltip/index.mdx"};for(var d in c)window[d]=c[d]}},function(a){a.O(0,[4526,9914,9961,4360,5152,3524,2609,7978,9774,2888,179],function(){return a(a.s=79798)}),_N_E=a.O()}])