(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6182],{17091:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Alert",function(){return c(38792)}])},7317:function(d,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(a){var b=c.slicedToArray(e.useState(null!=a&&a),2),d=b[0],i=b[1],f=e.useCallback(function(){return i(function(a){return!a})},[]),g=e.useCallback(function(){return i(function(){return!0})},[]),h=e.useCallback(function(){return i(function(){return!1})},[]);return[d,f,g,h]};var c=b(39037),e=c.interopRequireWildcard(b(27378))},54897:function(g,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(a){return function(e){var b;return b="function"==typeof a?a(h.default()):a,Object.keys(b).reduce(function(f,a){return d.objectSpread({},f,d.defineProperty({},a,c.css("function"==typeof b[a]?b[a](e):b[a])))},{})}},a.clsx=a.cx=void 0;var d=b(39037),c=b(87651),h=d.interopRequireDefault(b(75645)),e=c.cx;a.cx=e;var f=c.cx;a.clsx=f},16847:function(e,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=b(39037).interopRequireWildcard(b(96342));Object.keys(c).forEach(function(b){"default"!==b&&"__esModule"!==b&&(b in a&&a[b]===c[b]||Object.defineProperty(a,b,{enumerable:!0,get:function(){return c[b]}}))});var d=c.default;a.default=d},96342:function(n,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.breakpoints=a.css=a.clsx=a.cx=a.keyframes=void 0;var e=b(39037),c=b(87651),d=b(10043),f=e.interopRequireDefault(b(94408)),g=b(60921),h=d.keyframes;a.keyframes=h;var i=c.cx;a.cx=i;var j=c.cx;a.clsx=j;var k=d.css;a.css=k;var l=g.breakpoinstUtils;a.breakpoints=l;var m=f.default;a.default=m},82195:function(c,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,b(39037).interopRequireWildcard(b(27378)),a.default=function(){return null}},77149:function(d,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),e=a(24246);c.interopRequireWildcard(a(27378));var f=c.interopRequireDefault(a(86969));b.default=function(a){var b=a.children;return e.jsx(f.default,{children:b})}},25496:function(i,c,a){"use strict";c.Z=void 0;var b=a(39037),j=a(24246),d=b.interopRequireWildcard(a(27378)),k=b.interopRequireDefault(a(180)),l=b.interopRequireDefault(a(12830)),m=b.interopRequireDefault(a(7317)),n=b.interopRequireDefault(a(59266)),e=b.interopRequireDefault(a(29118)),o=a(37155),f=b.interopRequireDefault(a(82195)),p=b.interopRequireDefault(a(36248)),g=b.interopRequireDefault(a(77149)),q=0,h=e.default(d.memo(function(a){var u=a.id,v=a.className,e=a.children,g=a.type,w=a.icon,h=a.onClose,x=a.closable,i=a.multiline,r=p.default(),s=b.slicedToArray(m.default(!1),4),y=s[0],z=s[3],t=o.useChildrenProps(e,f.default).map(function(a){return b.objectSpread({},a,{id:"action-".concat(q++)})}),c=d.useMemo(function(){return null==t?void 0:t.map(function(a,e){var c=b.objectSpread({},a);return delete c.label,d.createElement(n.default,b.objectSpread({},c,{key:"alert-action-".concat(e)}),a.label)})},[t]),A=d.useMemo(function(){return!i&&(t.length?j.jsx("div",{className:r.controlButtons,children:c}):null)},[i,t,r,c]);return j.jsx(l.default,{in:!y,timeout:500,children:j.jsxs(k.default,b.objectSpread({},{id:u,className:v,severity:void 0===g?"success":g,icon:w,onClose:h},{onClose:x?z:h,action:A,children:[e,i&&c.length>0&&j.jsx("div",{className:r.controlButtonsMultiline,children:c})]}))})}),{Title:g.default,Action:f.default});c.Z=h},36248:function(e,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=b(39037),d=c.interopRequireDefault(b(54897)).default(function(a){return{root:c.defineProperty({},a.breakpoints.down("md"),{display:"block"}),message:{width:"100%"},controlButtons:{display:"flex",alignItems:"center",alignSelf:"center","& button":{marginLeft:4}},action:c.defineProperty({},a.breakpoints.down("md"),{width:"100%",paddingLeft:0,paddingBottom:10,paddingTop:10,display:"flex",alignItems:"center",justifyContent:"flex-end","& button":{marginRight:4,marginLeft:0,display:"block",width:"100%"}}),controlButtonsMultiline:{display:"flex",alignItems:"center",justifyContent:"flex-end",marginTop:16,"& button":{marginLeft:4}},multilineIcon:c.defineProperty({alignItems:"flex-start"},a.breakpoints.down("md"),{display:"none"}),multilineAction:{paddingLeft:0}}});a.default=d},62550:function(f,c,a){"use strict";c.Z=void 0;var b=a(39037),g=a(24246),d=b.interopRequireWildcard(a(27378)),h=b.interopRequireDefault(a(54964)),i=a(16847),j=b.interopRequireDefault(a(55869)),e=d.memo(function(a){var d=a.children,e=a.className,f=a.paper,k=b.objectWithoutProperties(a,["children","className","paper"]),c=j.default(a);return g.jsx(h.default,b.objectSpread({},k,{className:i.cx(e,c.box,f&&c.paper),children:d}))});c.Z=e},55869:function(e,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=b(39037),d=c.interopRequireDefault(b(54897)).default(function(a){return{box:function(d){var b,e=d.xs,f=d.sm,g=d.md,h=d.lg,i=d.xl;return b={},c.defineProperty(b,a.breakpoints.up("xs"),{padding:null==e?void 0:e.padding,margin:null==e?void 0:e.margin}),c.defineProperty(b,a.breakpoints.up("sm"),{padding:null==f?void 0:f.padding,margin:null==f?void 0:f.margin}),c.defineProperty(b,a.breakpoints.up("md"),{padding:null==g?void 0:g.padding,margin:null==g?void 0:g.margin}),c.defineProperty(b,a.breakpoints.up("lg"),{padding:null==h?void 0:h.padding,margin:null==h?void 0:h.margin}),c.defineProperty(b,a.breakpoints.up("xlg"),{padding:null==i?void 0:i.padding,margin:null==i?void 0:i.margin}),b},paper:{background:"#fff",borderRadius:4}}});a.default=d},59266:function(f,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),g=a(24246);c.interopRequireWildcard(a(27378));var d=c.interopRequireWildcard(a(16847)),h=a(77590),i=c.interopRequireDefault(a(72150));function j(){var a=c.taggedTemplateLiteral(["\n    border: none;\n    cursor: pointer;\n    text-transform: none;\n    padding: 10px 16px;\n    height: 40px;\n    border-radius: ",";\n    font-weight: ",";\n    font-family: ",";\n    line-height: ",";\n    font-size: ",";\n    position: relative;\n    transition: 0.3s;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    &.--fullWidth {\n      width: 100%;\n    }\n\n    &.--contained {\n      background-color: ",";\n      color: white;\n\n      &:hover:not(:disabled) {\n        background-color: ",";\n      }\n\n      &:active:not(:disabled) {\n        background-color: ",";\n      }\n\n      &:disabled {\n        background-color: ",";\n      }\n    }\n\n    &.--outlined {\n      background-color: transparent;\n      color: ",";\n      border: 1px solid;\n      border-color: ",";\n\n      &:hover:not(:disabled),\n      &:active:not(:disabled) {\n        border-color: ",";\n        color: ",";\n      }\n    }\n\n    &.--text {\n      background-color: transparent;\n      color: ",";\n\n      &:hover:not(:disabled),\n      &:active:not(:disabled) {\n        background-color: ",";\n      }\n    }\n\n    &:disabled {\n      cursor: default;\n      color: ",";\n      border-color: ",";\n    }\n\n    &:before {\n      content: ' ';\n      position: absolute;\n      left: -4px;\n      right: -4px;\n      top: -4px;\n      bottom: -4px;\n      border: 2px solid transparent;\n      transition: 0.3s;\n      border-radius: ",";\n    }\n\n    &:focus:not(:active):not(:hover):before {\n      border-color: ",";\n    }\n\n    & > .__loader {\n      margin-right: ",";\n    }\n\n    & > .__startIcon {\n      margin-right: ",";\n    }\n\n    & > .__endIcon {\n      margin-left: ",";\n    }\n\n    & > .__startIcon > svg,\n    & > .__endIcon > svg {\n      vertical-align: middle;\n      font-size: 17px;\n    }\n  "]);return j=function(){return a},a}var e=d.default(function(a){var e=a.children,f=a.disabled,h=a.startIcon,j=a.endIcon,k=a.variant,l=a.loading,b=void 0!==l&&l,m=a.loadingText,n=a.className,o=a.fullWidth,p=c.objectWithoutProperties(a,["children","disabled","startIcon","endIcon","variant","loading","loadingText","className","fullWidth"]);return g.jsxs("button",c.objectSpread({className:d.cx(n,"--".concat(null!=k?k:"contained"),{"--fullWidth":o})},p,{disabled:void 0!==f&&f||b,children:[!!h&&!b&&g.jsx("span",{className:"__startIcon",children:h}),!b&&g.jsx("span",{className:"__text",children:e}),b&&g.jsxs(g.Fragment,{children:[g.jsx(i.default,{size:15,color:"inherit",className:"__loader"}),g.jsx("span",{className:"__text",children:null!=m?m:e})]}),!!j&&g.jsx("span",{className:"__endIcon",children:j})]}))},{label:"houston-button"})(function(c){var a=c.theme,e=c.color,b=h.getColorFallback(a,e);return d.css(j(),a.border.radius.xs,a.font.weight.bold,a.font.family.base,a.line.height.default,a.font.size.xxs,b.pure,b.light,b.dark,a.neutralColor.high.medium,b.pure,b.light,b.dark,b.dark,b.pure,a.neutralColor.high.light,a.neutralColor.low.medium,a.neutralColor.high.medium,a.border.radius.sm,a.neutralColor.high.medium,a.spacing.nano,a.spacing.nano,a.spacing.nano)});b.default=e},77590:function(d,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.truncateText=function(a,b){return(null==a?void 0:a.length)<=b?a:"".concat(a.slice(0,b),"...")},a.getReactChildrenComponent=function(a,b){return e.Children.map(a,function(a){return g(a,b)?a:null}).filter(function(a){return!!a})},a.getReactChildrenProps=f,a.getReactFirstChildrenProps=function(b,c){var a=f(b,c);return a&&a[0]},a.isReactComponent=g,a.getColorFallback=function(b,c){var a;return"inherit"===c?"inherit":null!==(a=b.feedbackColor[c])&& void 0!==a?a:b.brandColor.primary};var c=b(39037),e=c.interopRequireWildcard(b(27378));function f(a,b){return e.Children.map(a,function(a){return g(a,b)?c.objectSpread({},a.props):null}).filter(function(a){return!!a})}function g(a,b){return b?a&&e.isValidElement(a)&&(null==a?void 0:a.type)===b:a&&e.isValidElement(a)}},29118:function(c,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(a,b){return Object.keys(b).forEach(function(c){a[c]=b[c]}),a},b(39037).interopRequireWildcard(b(27378))},72150:function(i,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var j,k,l,m,n,c=a(39037),o=a(24246);c.interopRequireWildcard(a(27378));var d=c.interopRequireWildcard(a(96342)),p=a(77590);function e(){var a=c.taggedTemplateLiteral(["\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(270deg); }\n"]);return e=function(){return a},a}function q(){var a=c.taggedTemplateLiteral(["\n  0% { stroke-dashoffset: ","; }\n  50% { stroke-dashoffset: ","; transform: rotate(135deg); }\n  100% { stroke-dashoffset: ","; transform: rotate(450deg); }\n"]);return q=function(){return a},a}function f(){var a=c.taggedTemplateLiteral(["\n  animation: "," 1.4s linear infinite;\n  color: ",";\n\n  & > circle {\n    stroke: currentColor;\n    stroke-width: ",";\n    stroke-dasharray: ",";\n    stroke-dashoffset: 0;\n    transform-origin: center;\n    animation: "," 1.4s ease-in-out infinite;\n  }\n"]);return f=function(){return a},a}var g=d.keyframes(e()),h=d.default(function(c){var d=c.className,a=c.size;a=null!=a?a:65;var b=(null!=a?a:65)/65*30;return o.jsx("svg",{className:d,width:"".concat(a,"px"),height:"".concat(a,"px"),viewBox:"0 0 ".concat(a+1," ").concat(a+1),children:o.jsx("circle",{fill:"none",strokeLinecap:"round",cx:b+.1*b,cy:b+.1*b,r:b})})},{label:"houston-loader"})(f(),g,function(a){return"inherit"===a.color?"inherit":p.getColorFallback(a.theme,a.color).pure},function(a){return(null!==(m=a.size)&& void 0!==m?m:65)/65*6},function(a){return(null!==(n=a.size)&& void 0!==n?n:65)/65*187},function(b){var a;return a=b,d.keyframes(q(),(null!==(j=a.size)&& void 0!==j?j:65)/65*187,(null!==(k=a.size)&& void 0!==k?k:65)/65*46.75,(null!==(l=a.size)&& void 0!==l?l:65)/65*187)});b.default=h},37155:function(c,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.useChildrenProps=function(a,b){return d.useMemo(function(){return e.getReactChildrenProps(a,b)},[a,b])},a.useFirstChildrenProps=function(a,b){return d.useMemo(function(){return e.getReactFirstChildrenProps(a,b)},[a,b])};var d=b(39037).interopRequireWildcard(b(27378)),e=b(77590)},38792:function(g,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return f},meta:function(){return e}}),a(27378);var h=a(35318),i=a(56100),j=a(62550),k=a(25496),e={name:"Alert",tableOfContents:{depth:0,children:[{depth:1,slug:"#alert",title:"Alert",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"},{depth:3,slug:"#varia\xe7\xf5es",title:"Varia\xe7\xf5es"},{depth:3,slug:"#auto-gerenci\xe1vel",title:"Auto gerenci\xe1vel"},{depth:3,slug:"#a\xe7\xf5es-customizadas",title:"A\xe7\xf5es customizadas"},{depth:3,slug:"#multilinha",title:"Multilinha"},{depth:3,slug:"#alert-props",title:"Alert props"},{depth:3,slug:"#alerttitle-props",title:"Alert.Title props"},{depth:3,slug:"#alertaction-props",title:"Alert.Action props"}]}]}]}},l={meta:e};function f(b){var c=b.components,a=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(b,["components"]);return(0,h.kt)("wrapper",Object.assign({},l,a,{components:c,mdxType:"MDXLayout"}),(0,h.kt)("h1",Object.assign({},{id:"alert"}),"Alert"),(0,h.kt)("p",null,"Um alerta exibe uma mensagem curta e importante de uma forma que atrai a aten\xe7\xe3o do usu\xe1rio sem interromper o que ele estiver fazendo."),(0,h.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,h.kt)("pre",null,(0,h.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import Alert from '@eduzz/houston-ui/Alert';\n")),(0,h.kt)("h3",Object.assign({},{id:"exemplo"}),"Exemplo"),(0,h.kt)(i.X,{__position:0,code:"<Alert>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>",scope:{props:a,Playground:i.X,Box:j.Z,Alert:k.Z,meta:e},mdxType:"Playground"},(0,h.kt)(k.Z,{mdxType:"Alert"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")),(0,h.kt)("h3",Object.assign({},{id:"varia\xe7\xf5es"}),"Varia\xe7\xf5es"),(0,h.kt)(i.X,{__position:1,code:"<Box xs={{ margin: '0 0 10px 0' }}>\n  <Alert type=\"error\">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n  </Alert>\n</Box>\n<Box xs={{ margin: '0 0 10px 0' }}>\n  <Alert type=\"info\">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n  </Alert>\n</Box>\n<Box xs={{ margin: '0 0 10px 0' }}>\n  <Alert type=\"warning\">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n  </Alert>\n</Box>\n<Box xs={{ margin: '0 0 10px 0' }}>\n  <Alert>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>\n</Box>",scope:{props:a,Playground:i.X,Box:j.Z,Alert:k.Z,meta:e},mdxType:"Playground"},(0,h.kt)(j.Z,{xs:{margin:"0 0 10px 0"},mdxType:"Box"},(0,h.kt)(k.Z,{type:"error",mdxType:"Alert"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")),(0,h.kt)(j.Z,{xs:{margin:"0 0 10px 0"},mdxType:"Box"},(0,h.kt)(k.Z,{type:"info",mdxType:"Alert"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")),(0,h.kt)(j.Z,{xs:{margin:"0 0 10px 0"},mdxType:"Box"},(0,h.kt)(k.Z,{type:"warning",mdxType:"Alert"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")),(0,h.kt)(j.Z,{xs:{margin:"0 0 10px 0"},mdxType:"Box"},(0,h.kt)(k.Z,{mdxType:"Alert"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),(0,h.kt)("h3",Object.assign({},{id:"auto-gerenci\xe1vel"}),"Auto gerenci\xe1vel"),(0,h.kt)("p",null,"N\xe3o h\xe1 necessidade de controlar o estado para exibir/esconder."),(0,h.kt)(i.X,{__position:2,code:"<Alert closable>\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit\n</Alert>",scope:{props:a,Playground:i.X,Box:j.Z,Alert:k.Z,meta:e},mdxType:"Playground"},(0,h.kt)(k.Z,{closable:!0,mdxType:"Alert"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit")),(0,h.kt)("h3",Object.assign({},{id:"a\xe7\xf5es-customizadas"}),"A\xe7\xf5es customizadas"),(0,h.kt)(i.X,{__position:3,code:'<Alert>\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n  <Alert.Action variant="text" label="Cancelar" />\n  <Alert.Action label="A\xe7\xe3o" />\n</Alert>',scope:{props:a,Playground:i.X,Box:j.Z,Alert:k.Z,meta:e},mdxType:"Playground"},(0,h.kt)(k.Z,{mdxType:"Alert"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",(0,h.kt)(k.Z.Action,{variant:"text",label:"Cancelar"}),(0,h.kt)(k.Z.Action,{label:"A\xe7\xe3o"}))),(0,h.kt)("h3",Object.assign({},{id:"multilinha"}),"Multilinha"),(0,h.kt)(i.X,{__position:4,code:'<Alert multiline>\n  <Alert.Title>Lorem ipsum</Alert.Title>\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n  <Alert.Action label="Cancelar" variant="text" />\n  <Alert.Action label="A\xe7\xe3o" />\n</Alert>',scope:{props:a,Playground:i.X,Box:j.Z,Alert:k.Z,meta:e},mdxType:"Playground"},(0,h.kt)(k.Z,{multiline:!0,mdxType:"Alert"},(0,h.kt)(k.Z.Title,null,"Lorem ipsum"),"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",(0,h.kt)(k.Z.Action,{label:"Cancelar",variant:"text"}),(0,h.kt)(k.Z.Action,{label:"A\xe7\xe3o"}))),(0,h.kt)("h3",Object.assign({},{id:"alert-props"}),"Alert props"),(0,h.kt)("table",null,(0,h.kt)("thead",{parentName:"table"},(0,h.kt)("tr",{parentName:"thead"},(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,h.kt)("tbody",{parentName:"table"},(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"type"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"Color")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"success")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onClose"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"function")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),'Se houver um valor, ele adiciona automaticamente o "X".')),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"icon"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"React.ReactNode"),", ",(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"type")," icon"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Se ",(0,h.kt)("inlineCode",{parentName:"td"},"false"),", o \xedcone ficar\xe1 oculto.")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"closable"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"boolean")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Se ",(0,h.kt)("inlineCode",{parentName:"td"},"true"),", o componente controla o pr\xf3prio estado e n\xe3o h\xe1 necessidade de usar a prop ",(0,h.kt)("inlineCode",{parentName:"td"},"onClose"),".")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"multiline"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"boolean")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Se ",(0,h.kt)("inlineCode",{parentName:"td"},"true"),", as a\xe7\xf5es cair\xe3o na linha abaixo do texto.")))),(0,h.kt)("h3",Object.assign({},{id:"alerttitle-props"}),"Alert.Title props"),(0,h.kt)("p",null,"O componente recebe apenas o ",(0,h.kt)("inlineCode",{parentName:"p"},"children"),"."),(0,h.kt)("h3",Object.assign({},{id:"alertaction-props"}),"Alert.Action props"),(0,h.kt)("table",null,(0,h.kt)("thead",{parentName:"table"},(0,h.kt)("tr",{parentName:"thead"},(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,h.kt)("tbody",{parentName:"table"},(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"label"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"true")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")))),(0,h.kt)("p",null,"E todos as ",(0,h.kt)("inlineCode",{parentName:"p"},"props")," dispon\xedveis no ",(0,h.kt)("em",{parentName:"p"},"Componente de bot\xe3o"),"."))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/ui-components/Alert/index.mdx"};for(var d in c)window[d]=c[d]}},function(a){a.O(0,[4526,9914,9961,6557,1281,6985,7978,9774,2888,179],function(){return a(a.s=17091)}),_N_E=a.O()}])