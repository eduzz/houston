(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9869],{79798:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Tooltip",function(){return c(14119)}])},59266:function(f,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),g=a(24246),d=c.interopRequireWildcard(a(27378)),h=c.interopRequireDefault(a(77562)),i=c.interopRequireDefault(a(29532)),e=d.memo(function(a){var d=a.children,e=a.disabled,f=a.variant,j=a.color,m=a.startIcon,k=a.loading,b=void 0!==k&&k,l=a.loadingText,n=c.objectWithoutProperties(a,["children","disabled","variant","color","startIcon","loading","loadingText"]);return g.jsxs(h.default,c.objectSpread({},n,{disabled:void 0!==e&&e||b,startIcon:b?g.jsx(i.default,{size:18,color:"inherit"}):m,disableRipple:!0,disableFocusRipple:!0,disableElevation:!0,disableTouchRipple:!0,variant:void 0===f?"contained":f,color:void 0===j?"primary":j,children:[!b&&d,b&&(null!=l?l:d)]}))});b.default=e},24885:function(f,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),g=a(24246),d=c.interopRequireWildcard(a(27378)),h=c.interopRequireDefault(a(36183)),e=d.forwardRef(function(a,b){var d=a.className,e=c.objectWithoutProperties(a,["className"]);return g.jsx(h.default,c.objectSpread({},e,{item:!0,className:d,ref:b}))});b.default=e},29618:function(g,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),h=a(24246),d=c.interopRequireWildcard(a(27378)),i=c.interopRequireDefault(a(36183)),j=a(55693),k=a(77097),l=a(2293),e=d.forwardRef(function(a,b){var e=a.className,f=a.spacing,g=c.objectWithoutProperties(a,["className","spacing"]),m=j.useContextSelector(k.GridContext,function(a){return a.spacing}),n=d.useMemo(function(){var a;return l.ContainerSizes[null!==(a=null!=f?f:m)&& void 0!==a?a:"cozy"]},[m,f]);return h.jsx(i.default,c.objectSpread({},g,{container:!0,ref:b,className:e,spacing:n}))}),f=d.memo(e);b.default=f},77097:function(e,a,c){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.GridContext=void 0;var b=c(55693).createContext({});a.GridContext=b;var d=b.Provider;a.default=d},2293:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ContainerSizes=void 0,a.ContainerSizes={comfortable:10,cozy:4,compact:2}},44678:function(f,b,a){"use strict";b.Z=void 0;var c=a(39037),g=a(24246),d=c.interopRequireWildcard(a(27378)),h=c.interopRequireDefault(a(83524)),i=d.forwardRef(function(a,b){var d=a.children,e=a.className,f=c.objectWithoutProperties(a,["children","className"]);return g.jsx("div",c.objectSpread({className:e},f,{ref:b,style:{display:"inline-flex"},children:d}))}),e=d.memo(function(a){var d=a.placement,f=a.children,e=a.disabled,b=void 0!==e&&e,j=a.className,k=c.objectWithoutProperties(a,["placement","children","disabled","className"]);return g.jsx(h.default,c.objectSpread({},k,{disableTouchListener:b,disableHoverListener:b,disableFocusListener:b,placement:void 0===d?"top":d,arrow:!0,children:g.jsx(i,{children:f,className:j})}))});b.Z=e},14119:function(g,b,a){"use strict";a.r(b),a.d(b,{meta:function(){return e},"default":function(){return f}}),a(27378);var h=a(35318),i=a(56100),j=a(59266),k=a(24885),l=a(29618),m=a(44678),e={name:"Tooltip",tableOfContents:{depth:0,children:[{depth:1,slug:"#tooltip",title:"Tooltip",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"},{depth:3,slug:"#dire\xe7\xe3o",title:"Dire\xe7\xe3o"}]}]}]}},n={meta:e};function f(b){var c=b.components,a=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(b,["components"]);return(0,h.kt)("wrapper",Object.assign({},n,a,{components:c,mdxType:"MDXLayout"}),(0,h.kt)("h1",Object.assign({},{id:"tooltip"}),"Tooltip"),(0,h.kt)("p",null,"Usado para identificar elementos e descrever funcionalidades."),(0,h.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,h.kt)("pre",null,(0,h.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import Tooltip from '@eduzz/houston-ui/Tooltip';\n")),(0,h.kt)("h3",Object.assign({},{id:"exemplo"}),"Exemplo"),(0,h.kt)(i.X,{__position:0,code:'<Row>\n  <Column>\n    <Tooltip title="Lorem ipsum dolor">\n      <Button>John Doe</Button>\n    </Tooltip>\n  </Column>\n  <Column>\n    <Tooltip title="Lorem ipsum dolor" disabled>\n      <Button>Tooltip desabilitado</Button>\n    </Tooltip>\n  </Column>\n</Row>',scope:{props:a,Playground:i.X,Button:j.default,Column:k.default,Row:l.default,Tooltip:m.Z,meta:e},mdxType:"Playground"},(0,h.kt)(l.default,{mdxType:"Row"},(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.Z,{title:"Lorem ipsum dolor",mdxType:"Tooltip"},(0,h.kt)(j.default,{mdxType:"Button"},"John Doe"))),(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.Z,{title:"Lorem ipsum dolor",disabled:!0,mdxType:"Tooltip"},(0,h.kt)(j.default,{mdxType:"Button"},"Tooltip desabilitado"))))),(0,h.kt)("h3",Object.assign({},{id:"dire\xe7\xe3o"}),"Dire\xe7\xe3o"),(0,h.kt)(i.X,{__position:1,code:'<Row>\n  <Column>\n    <Tooltip title="Lorem ipsum dolor">\n      <Button>Top</Button>\n    </Tooltip>\n  </Column>\n  <Column>\n    <Tooltip title="Lorem ipsum dolor" placement="bottom">\n      <Button>Bottom</Button>\n    </Tooltip>\n  </Column>\n  <Column>\n    <Tooltip title="Lorem ipsum dolor" placement="left">\n      <Button>Left</Button>\n    </Tooltip>\n  </Column>\n  <Column>\n    <Tooltip title="Lorem ipsum dolor" placement="right">\n      <Button>Right</Button>\n    </Tooltip>\n  </Column>\n</Row>',scope:{props:a,Playground:i.X,Button:j.default,Column:k.default,Row:l.default,Tooltip:m.Z,meta:e},mdxType:"Playground"},(0,h.kt)(l.default,{mdxType:"Row"},(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.Z,{title:"Lorem ipsum dolor",mdxType:"Tooltip"},(0,h.kt)(j.default,{mdxType:"Button"},"Top"))),(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.Z,{title:"Lorem ipsum dolor",placement:"bottom",mdxType:"Tooltip"},(0,h.kt)(j.default,{mdxType:"Button"},"Bottom"))),(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.Z,{title:"Lorem ipsum dolor",placement:"left",mdxType:"Tooltip"},(0,h.kt)(j.default,{mdxType:"Button"},"Left"))),(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.Z,{title:"Lorem ipsum dolor",placement:"right",mdxType:"Tooltip"},(0,h.kt)(j.default,{mdxType:"Button"},"Right"))))),(0,h.kt)("table",null,(0,h.kt)("thead",{parentName:"table"},(0,h.kt)("tr",{parentName:"thead"},(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,h.kt)("tbody",{parentName:"table"},(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"title"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"string")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"true")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"disabled"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"boolean")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"placement"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"ITooltipPlacement")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"top")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"open"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"boolean")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Se verdadeiro, sempre exibir\xe1 o ",(0,h.kt)("inlineCode",{parentName:"td"},"title"),".")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onOpen"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"function")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onClose"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"function")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")))))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/ui-components/Tooltip/index.mdx"};for(var d in c)window[d]=c[d]}},function(a){a.O(0,[4526,4356,9961,6557,2359,4360,9751,3524,9547,3245,9774,2888,179],function(){return a(a.s=79798)}),_N_E=a.O()}])