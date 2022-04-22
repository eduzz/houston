(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2238],{78510:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Button",function(){return c(68131)}])},59266:function(e,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var b=a(59312),f=a(24246),d=b.__importStar(a(27378)),g=b.__importDefault(a(77562)),h=b.__importDefault(a(29532));c.default=d.memo(function(a){var d=a.children,e=a.disabled,i=a.variant,j=a.color,m=a.startIcon,k=a.loading,c=void 0!==k&&k,l=a.loadingText,n=b.__rest(a,["children","disabled","variant","color","startIcon","loading","loadingText"]);return(0,f.jsxs)(g.default,Object.assign({},n,{disabled:void 0!==e&&e||c,startIcon:c?(0,f.jsx)(h.default,{size:18,color:"inherit"}):m,disableRipple:!0,disableFocusRipple:!0,disableElevation:!0,disableTouchRipple:!0,variant:void 0===i?"contained":i,color:void 0===j?"primary":j},{children:[!c&&d,c&&(null!=l?l:d)]}))})},24885:function(f,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var c=a(59312),g=a(24246),d=c.__importStar(a(27378)),h=c.__importDefault(a(36183)),e=d.forwardRef(function(a,b){var d=a.className,e=c.__rest(a,["className"]);return(0,g.jsx)(h.default,Object.assign({},e,{item:!0,className:d,ref:b}))});b.default=e},29618:function(f,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var c=a(59312),g=a(24246),d=c.__importStar(a(27378)),h=c.__importDefault(a(36183)),i=a(55693),j=a(77097),k=a(2293),e=d.forwardRef(function(a,b){var e=a.className,f=a.spacing,l=c.__rest(a,["className","spacing"]),m=(0,i.useContextSelector)(j.GridContext,function(a){return a.spacing}),n=d.useMemo(function(){var a;return k.ContainerSizes[null!==(a=null!=f?f:m)&& void 0!==a?a:"cozy"]},[m,f]);return(0,g.jsx)(h.default,Object.assign({},l,{container:!0,ref:b,className:e,spacing:n}))});b.default=d.memo(e)},77097:function(e,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.GridContext=void 0;var c=b(55693);a.GridContext=(0,c.createContext)({});var d=a.GridContext.Provider;a.default=d},2293:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ContainerSizes=void 0,a.ContainerSizes={comfortable:10,cozy:4,compact:2}},68131:function(g,b,a){"use strict";a.r(b),a.d(b,{meta:function(){return e},"default":function(){return f}}),a(27378);var h=a(35318),i=a(47249),j=a(56100),k=a(24885),l=a(29618),m=a(59266),e={name:"Button",tableOfContents:{depth:0,children:[{depth:1,slug:"#button",title:"Button",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#varia\xe7\xf5es",title:"Varia\xe7\xf5es"},{depth:3,slug:"#cores",title:"Cores"},{depth:3,slug:"#estados",title:"Estados"},{depth:3,slug:"#com-\xedcones",title:"Com \xedcones"}]}]}]}},n={meta:e};function f(b){var c=b.components,a=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(b,["components"]);return(0,h.kt)("wrapper",Object.assign({},n,a,{components:c,mdxType:"MDXLayout"}),(0,h.kt)("h1",Object.assign({},{id:"button"}),"Button"),(0,h.kt)("p",null,"Bot\xf5es permitem que os usu\xe1rios tomem a\xe7\xf5es e decis\xf5es com um simples toque."),(0,h.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,h.kt)("pre",null,(0,h.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import Button from '@eduzz/houston-ui/Button';\n")),(0,h.kt)("h3",Object.assign({},{id:"varia\xe7\xf5es"}),"Varia\xe7\xf5es"),(0,h.kt)(j.X,{__position:0,code:'<Row>\n  <Column>\n    <Button>Contained</Button>\n  </Column>\n  <Column>\n    <Button variant="outlined">Outlined</Button>\n  </Column>\n  <Column>\n    <Button variant="text">Text</Button>\n  </Column>\n</Row>',scope:{props:a,InsertEmoticonIcon:i.Z,Playground:j.X,Column:k.default,Row:l.default,Button:m.default,meta:e},mdxType:"Playground"},(0,h.kt)(l.default,{mdxType:"Row"},(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.default,{mdxType:"Button"},"Contained")),(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.default,{variant:"outlined",mdxType:"Button"},"Outlined")),(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.default,{variant:"text",mdxType:"Button"},"Text")))),(0,h.kt)("h3",Object.assign({},{id:"cores"}),"Cores"),(0,h.kt)(j.X,{__position:1,code:'<Row>\n  <Column>\n    <Button color="primary">Primary</Button>\n  </Column>\n  <Column>\n    <Button color="success">Success</Button>\n  </Column>\n  <Column>\n    <Button color="error">Error</Button>\n  </Column>\n  <Column>\n    <Button color="info">Info</Button>\n  </Column>\n  <Column>\n    <Button color="warning">Success</Button>\n  </Column>\n</Row>',scope:{props:a,InsertEmoticonIcon:i.Z,Playground:j.X,Column:k.default,Row:l.default,Button:m.default,meta:e},mdxType:"Playground"},(0,h.kt)(l.default,{mdxType:"Row"},(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.default,{color:"primary",mdxType:"Button"},"Primary")),(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.default,{color:"success",mdxType:"Button"},"Success")),(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.default,{color:"error",mdxType:"Button"},"Error")),(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.default,{color:"info",mdxType:"Button"},"Info")),(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.default,{color:"warning",mdxType:"Button"},"Success")))),(0,h.kt)("h3",Object.assign({},{id:"estados"}),"Estados"),(0,h.kt)(j.X,{__position:2,code:'<Row>\n  <Column>\n    <Button disabled>Disabled</Button>\n  </Column>\n  <Column>\n    <Button loading>loading</Button>\n  </Column>\n  <Column>\n    <Button loading loadingText="Carregando...">\n      loading\n    </Button>\n  </Column>\n</Row>',scope:{props:a,InsertEmoticonIcon:i.Z,Playground:j.X,Column:k.default,Row:l.default,Button:m.default,meta:e},mdxType:"Playground"},(0,h.kt)(l.default,{mdxType:"Row"},(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.default,{disabled:!0,mdxType:"Button"},"Disabled")),(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.default,{loading:!0,mdxType:"Button"},"loading")),(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.default,{loading:!0,loadingText:"Carregando...",mdxType:"Button"},"loading")))),(0,h.kt)("h3",Object.assign({},{id:"com-\xedcones"}),"Com \xedcones"),(0,h.kt)(j.X,{__position:3,code:"<Row>\n  <Column>\n    <Button startIcon={<InsertEmoticonIcon />}>Start</Button>\n  </Column>\n  <Column>\n    <Button endIcon={<InsertEmoticonIcon />}>End</Button>\n  </Column>\n</Row>",scope:{props:a,InsertEmoticonIcon:i.Z,Playground:j.X,Column:k.default,Row:l.default,Button:m.default,meta:e},mdxType:"Playground"},(0,h.kt)(l.default,{mdxType:"Row"},(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.default,{startIcon:(0,h.kt)(i.Z,{mdxType:"InsertEmoticonIcon"}),mdxType:"Button"},"Start")),(0,h.kt)(k.default,{mdxType:"Column"},(0,h.kt)(m.default,{endIcon:(0,h.kt)(i.Z,{mdxType:"InsertEmoticonIcon"}),mdxType:"Button"},"End")))),(0,h.kt)("table",null,(0,h.kt)("thead",{parentName:"table"},(0,h.kt)("tr",{parentName:"thead"},(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"))),(0,h.kt)("tbody",{parentName:"table"},(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"disabled"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"boolean")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false"))),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"startIcon"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"endIcon"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"variant"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"contained ","|"," outlined ","|"," text"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"contained"))),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"href"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"string")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"endIcon"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"fullWidth"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"boolean")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false"))),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"loading"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"boolean")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false"))),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"loadingText"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"string")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onClick"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"function")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"color"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"primary ","|"," success ","|"," error ","|"," info ","|"," warning"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"primary"))))))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/ui-components/Button/index.mdx"};for(var d in c)window[d]=c[d]}},function(a){a.O(0,[4526,4356,9961,6557,2359,4360,5895,3245,9774,2888,179],function(){return a(a.s=78510)}),_N_E=a.O()}])