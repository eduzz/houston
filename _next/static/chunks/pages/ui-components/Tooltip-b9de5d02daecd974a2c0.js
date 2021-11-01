(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9869],{99203:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=n(59312),o=n(24246),a=(0,l.__importStar)(n(27378)),i=(0,l.__importDefault)(n(43168)),r=(0,l.__importDefault)(n(80910));e.default=a.memo((function(t){var e=t.children,n=t.disabled,a=void 0!==n&&n,d=t.variant,p=void 0===d?"contained":d,u=t.startIcon,m=t.loading,s=void 0!==m&&m,c=t.loadingText,k=(0,l.__rest)(t,["children","disabled","variant","startIcon","loading","loadingText"]);return(0,o.jsxs)(i.default,(0,l.__assign)({},k,{disabled:a||s,startIcon:s?(0,o.jsx)(r.default,{size:18,color:"inherit"},void 0):u,disableRipple:!0,disableFocusRipple:!0,disableElevation:!0,disableTouchRipple:!0,variant:p,color:"primary"},{children:[!s&&e,s&&(null!==c&&void 0!==c?c:e)]}),void 0)}))},89127:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=n(59312),o=n(24246),a=(0,l.__importStar)(n(27378)),i=(0,l.__importDefault)(n(55399)),r=a.forwardRef((function(t,e){var n=t.className,a=(0,l.__rest)(t,["className"]);return(0,o.jsx)(i.default,(0,l.__assign)({},a,{item:!0,className:n,ref:e}),void 0)}));e.default=r},15684:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=n(59312),o=n(24246),a=(0,l.__importStar)(n(27378)),i=(0,l.__importDefault)(n(55399)),r=n(55693),d=n(41013),p=n(17790),u=a.forwardRef((function(t,e){var n=t.className,u=t.spacing,m=(0,l.__rest)(t,["className","spacing"]),s=(0,r.useContextSelector)(d.GridContext,(function(t){return t.spacing})),c=a.useMemo((function(){var t;return p.ContainerSizes[null!==(t=null!==u&&void 0!==u?u:s)&&void 0!==t?t:"cozy"]}),[s,u]);return(0,o.jsx)(i.default,(0,l.__assign)({},m,{container:!0,ref:e,className:n,spacing:c}),void 0)}));e.default=a.memo(u)},41013:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.GridContext=void 0;var l=n(55693);e.GridContext=(0,l.createContext)({});var o=e.GridContext.Provider;e.default=o},17790:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ContainerSizes=void 0,e.ContainerSizes={comfortable:10,cozy:4,compact:2}},30162:function(t,e,n){"use strict";var l=n(59312),o=n(24246),a=(0,l.__importStar)(n(27378)),i=(0,l.__importDefault)(n(55256)),r=a.forwardRef((function(t,e){var n=t.children,a=t.className,i=(0,l.__rest)(t,["children","className"]);return(0,o.jsx)("div",(0,l.__assign)({className:a},i,{ref:e,style:{display:"inline-flex"}},{children:n}),void 0)}));e.Z=a.memo((function(t){var e=t.placement,n=void 0===e?"top":e,a=t.children,d=t.disabled,p=void 0!==d&&d,u=t.className,m=(0,l.__rest)(t,["placement","children","disabled","className"]);return(0,o.jsx)(i.default,(0,l.__assign)({},m,{disableTouchListener:p,disableHoverListener:p,disableFocusListener:p,placement:n,arrow:!0},{children:(0,o.jsx)(r,{children:a,className:u},void 0)}),void 0)}))},99763:function(t,e,n){"use strict";n.r(e),n.d(e,{meta:function(){return s},default:function(){return k}});var l=n(87397),o=n(31750),a=(n(27378),n(35318)),i=n(12696),r=n(99203),d=n(89127),p=n(15684),u=n(30162),m=["components"],s={name:"Tooltip",tableOfContents:{depth:0,children:[{depth:1,slug:"#tooltip",title:"Tooltip",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"},{depth:3,slug:"#dire\xe7\xe3o",title:"Dire\xe7\xe3o"}]}]}]}},c={meta:s};function k(t){var e=t.components,n=(0,o.Z)(t,m);return(0,a.kt)("wrapper",(0,l.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tooltip"},"Tooltip"),(0,a.kt)("p",null,"Usado para identificar elementos e descrever funcionalidades."),(0,a.kt)("h3",{id:"importa\xe7\xe3o"},"Importa\xe7\xe3o"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import Tooltip from '@eduzz/houston-ui/Tooltip';\n")),(0,a.kt)("h3",{id:"exemplo"},"Exemplo"),(0,a.kt)(i.X,{__position:0,code:'<Row>\n  <Column>\n    <Tooltip title="Lorem ipsum dolor">\n      <Button>John Doe</Button>\n    </Tooltip>\n  </Column>\n  <Column>\n    <Tooltip title="Lorem ipsum dolor" disabled>\n      <Button>Tooltip desabilitado</Button>\n    </Tooltip>\n  </Column>\n</Row>',scope:{props:n,Playground:i.X,Button:r.default,Column:d.default,Row:p.default,Tooltip:u.Z,meta:s},mdxType:"Playground"},(0,a.kt)(p.default,{mdxType:"Row"},(0,a.kt)(d.default,{mdxType:"Column"},(0,a.kt)(u.Z,{title:"Lorem ipsum dolor",mdxType:"Tooltip"},(0,a.kt)(r.default,{mdxType:"Button"},"John Doe"))),(0,a.kt)(d.default,{mdxType:"Column"},(0,a.kt)(u.Z,{title:"Lorem ipsum dolor",disabled:!0,mdxType:"Tooltip"},(0,a.kt)(r.default,{mdxType:"Button"},"Tooltip desabilitado"))))),(0,a.kt)("h3",{id:"dire\xe7\xe3o"},"Dire\xe7\xe3o"),(0,a.kt)(i.X,{__position:1,code:'<Row>\n  <Column>\n    <Tooltip title="Lorem ipsum dolor">\n      <Button>Top</Button>\n    </Tooltip>\n  </Column>\n  <Column>\n    <Tooltip title="Lorem ipsum dolor" placement="bottom">\n      <Button>Bottom</Button>\n    </Tooltip>\n  </Column>\n  <Column>\n    <Tooltip title="Lorem ipsum dolor" placement="left">\n      <Button>Left</Button>\n    </Tooltip>\n  </Column>\n  <Column>\n    <Tooltip title="Lorem ipsum dolor" placement="right">\n      <Button>Right</Button>\n    </Tooltip>\n  </Column>\n</Row>',scope:{props:n,Playground:i.X,Button:r.default,Column:d.default,Row:p.default,Tooltip:u.Z,meta:s},mdxType:"Playground"},(0,a.kt)(p.default,{mdxType:"Row"},(0,a.kt)(d.default,{mdxType:"Column"},(0,a.kt)(u.Z,{title:"Lorem ipsum dolor",mdxType:"Tooltip"},(0,a.kt)(r.default,{mdxType:"Button"},"Top"))),(0,a.kt)(d.default,{mdxType:"Column"},(0,a.kt)(u.Z,{title:"Lorem ipsum dolor",placement:"bottom",mdxType:"Tooltip"},(0,a.kt)(r.default,{mdxType:"Button"},"Bottom"))),(0,a.kt)(d.default,{mdxType:"Column"},(0,a.kt)(u.Z,{title:"Lorem ipsum dolor",placement:"left",mdxType:"Tooltip"},(0,a.kt)(r.default,{mdxType:"Button"},"Left"))),(0,a.kt)(d.default,{mdxType:"Column"},(0,a.kt)(u.Z,{title:"Lorem ipsum dolor",placement:"right",mdxType:"Tooltip"},(0,a.kt)(r.default,{mdxType:"Button"},"Right"))))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"prop"),(0,a.kt)("th",{parentName:"tr",align:null},"tipo"),(0,a.kt)("th",{parentName:"tr",align:null},"obrigat\xf3rio"),(0,a.kt)("th",{parentName:"tr",align:null},"padr\xe3o"),(0,a.kt)("th",{parentName:"tr",align:null},"descri\xe7\xe3o"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"title"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"disabled"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"placement"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ITooltipPlacement")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"top")),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"open"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},"Se verdadeiro, sempre exibir\xe1 o ",(0,a.kt)("inlineCode",{parentName:"td"},"title"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onOpen"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"function")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onClose"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"function")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"-")))))}k.isMDXComponent=!0;var f={editThisPagePath:"src/pages/ui-components/Tooltip/index.mdx"};for(var N in f)window[N]=f[N]},79798:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Tooltip",function(){return n(99763)}])}},function(t){t.O(0,[4526,9371,6844,9143,715,8897,5256,6053,6034,9774,2888,179],(function(){return e=79798,t(t.s=e);var e}));var e=t.O();_N_E=e}]);