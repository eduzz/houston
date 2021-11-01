(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8065],{99203:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(59312),a=n(24246),r=(0,o.__importStar)(n(27378)),i=(0,o.__importDefault)(n(43168)),l=(0,o.__importDefault)(n(80910));e.default=r.memo((function(t){var e=t.children,n=t.disabled,r=void 0!==n&&n,s=t.variant,u=void 0===s?"contained":s,d=t.startIcon,c=t.loading,p=void 0!==c&&c,m=t.loadingText,f=(0,o.__rest)(t,["children","disabled","variant","startIcon","loading","loadingText"]);return(0,a.jsxs)(i.default,(0,o.__assign)({},f,{disabled:r||p,startIcon:p?(0,a.jsx)(l.default,{size:18,color:"inherit"},void 0):d,disableRipple:!0,disableFocusRipple:!0,disableElevation:!0,disableTouchRipple:!0,variant:u,color:"primary"},{children:[!p&&e,p&&(null!==m&&void 0!==m?m:e)]}),void 0)}))},89127:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(59312),a=n(24246),r=(0,o.__importStar)(n(27378)),i=(0,o.__importDefault)(n(55399)),l=r.forwardRef((function(t,e){var n=t.className,r=(0,o.__rest)(t,["className"]);return(0,a.jsx)(i.default,(0,o.__assign)({},r,{item:!0,className:n,ref:e}),void 0)}));e.default=l},15684:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(59312),a=n(24246),r=(0,o.__importStar)(n(27378)),i=(0,o.__importDefault)(n(55399)),l=n(55693),s=n(41013),u=n(17790),d=r.forwardRef((function(t,e){var n=t.className,d=t.spacing,c=(0,o.__rest)(t,["className","spacing"]),p=(0,l.useContextSelector)(s.GridContext,(function(t){return t.spacing})),m=r.useMemo((function(){var t;return u.ContainerSizes[null!==(t=null!==d&&void 0!==d?d:p)&&void 0!==t?t:"cozy"]}),[p,d]);return(0,a.jsx)(i.default,(0,o.__assign)({},c,{container:!0,ref:e,className:n,spacing:m}),void 0)}));e.default=r.memo(d)},41013:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.GridContext=void 0;var o=n(55693);e.GridContext=(0,o.createContext)({});var a=e.GridContext.Provider;e.default=a},17790:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ContainerSizes=void 0,e.ContainerSizes={comfortable:10,cozy:4,compact:2}},88669:function(t,e,n){"use strict";var o=n(59312),a=n(59549),r=n(8874),i=function(){function t(){}return t.success=function(t,e){var n=(0,r.getCurrentTime)();a.toast.success(t,(0,o.__assign)((0,o.__assign)({},e),{style:(0,o.__assign)({},n?{background:n.colors.success.main}:{})}))},t.error=function(t,e){var n=(0,r.getCurrentTime)();a.toast.error(t,(0,o.__assign)((0,o.__assign)({},e),{style:(0,o.__assign)({},n?{background:n.colors.error.main}:{})}))},t.info=function(t,e){var n=(0,r.getCurrentTime)();a.toast.info(t,(0,o.__assign)((0,o.__assign)({},e),{style:(0,o.__assign)({},n?{background:n.colors.info.main}:{})}))},t}();e.Z=i},43927:function(t,e,n){"use strict";n.r(e),n.d(e,{meta:function(){return m},default:function(){return k}});var o=n(87397),a=n(31750),r=n(27378),i=n(35318),l=n(12696),s=n(99203),u=n(89127),d=n(15684),c=n(88669),p=["components"],m={name:"Toast",tableOfContents:{depth:0,children:[{depth:1,slug:"#toast",title:"Toast",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"},{depth:3,slug:"#varia\xe7\xf5es",title:"Varia\xe7\xf5es"}]}]}]}},f={meta:m};function k(t){var e=t.components,n=(0,a.Z)(t,p);return(0,i.kt)("wrapper",(0,o.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"toast"},"Toast"),(0,i.kt)("p",null,"Utilize o componente de Toast para fornecer um feedback de alguma a\xe7\xe3o feita pelo usu\xe1rio,\nque aparece sobreposto na p\xe1gina e desaparece depois de determinado tempo."),(0,i.kt)("h3",{id:"importa\xe7\xe3o"},"Importa\xe7\xe3o"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import Toast from '@eduzz/houston-ui/Toast';\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Para o Toast funcionar, \xe9 necess\xe1rio que ele esteja dentro de um ThemeProvider")),(0,i.kt)("h3",{id:"exemplo"},"Exemplo"),(0,i.kt)(l.X,{__position:0,code:"() => {\n  const handleShowToast = () => {\n    Toast.success('Exemplo de mensagem Toast')\n  }\n  const palette = {}\n  return <Button onClick={handleShowToast}>Exibir Toast</Button>\n}",scope:{props:n,Playground:l.X,Button:s.default,Column:u.default,Row:d.default,Toast:c.Z,meta:m},mdxType:"Playground"},(function(){return(0,i.kt)(s.default,{onClick:function(){c.Z.success("Exemplo de mensagem Toast")},mdxType:"Button"},"Exibir Toast")})),(0,i.kt)("h3",{id:"varia\xe7\xf5es"},"Varia\xe7\xf5es"),(0,i.kt)(l.X,{__position:1,code:"() => {\n  const handleShowToast = React.useCallback((type) => {\n    const options = {\n      onOpen: () => {\n        console.log('Fun\xe7\xe3o onOpen')\n      },\n      onClose: () => {\n        console.log('Fun\xe7\xe3o onClose')\n      },\n      onClick: () => {\n        console.log('Fun\xe7\xe3o onClick')\n      },\n    }\n    switch (type) {\n      case 'success':\n        Toast.success('Exemplo de Toast de sucesso', options)\n        break\n      case 'error':\n        Toast.error('Exemplo de Toast de erro', options)\n        break\n      default:\n        Toast.info('Exemplo de Toast informativo', options)\n        Toast.info(\n          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci voluptatibus autem mollitia vero?',\n        )\n        break\n    }\n  }, [])\n  const palette = {}\n  return (\n    <Row>\n      <Column>\n        <Button variant=\"outlined\" onClick={() => handleShowToast('success')}>\n          Toast de Sucesso\n        </Button>\n      </Column>\n      <Column>\n        <Button variant=\"outlined\" onClick={() => handleShowToast('error')}>\n          Toast de Erro\n        </Button>\n      </Column>\n      <Column>\n        <Button variant=\"outlined\" onClick={() => handleShowToast('info')}>\n          Toast Informativo\n        </Button>\n      </Column>\n    </Row>\n  )\n}",scope:{props:n,Playground:l.X,Button:s.default,Column:u.default,Row:d.default,Toast:c.Z,meta:m},mdxType:"Playground"},(function(){var t=r.useCallback((function(t){var e={onOpen:function(){console.log("Fun\xe7\xe3o onOpen")},onClose:function(){console.log("Fun\xe7\xe3o onClose")},onClick:function(){console.log("Fun\xe7\xe3o onClick")}};switch(t){case"success":c.Z.success("Exemplo de Toast de sucesso",e);break;case"error":c.Z.error("Exemplo de Toast de erro",e);break;default:c.Z.info("Exemplo de Toast informativo",e),c.Z.info("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci voluptatibus autem mollitia vero?")}}),[]);return(0,i.kt)(d.default,{mdxType:"Row"},(0,i.kt)(u.default,{mdxType:"Column"},(0,i.kt)(s.default,{variant:"outlined",onClick:function(){return t("success")},mdxType:"Button"},"Toast de Sucesso")),(0,i.kt)(u.default,{mdxType:"Column"},(0,i.kt)(s.default,{variant:"outlined",onClick:function(){return t("error")},mdxType:"Button"},"Toast de Erro")),(0,i.kt)(u.default,{mdxType:"Column"},(0,i.kt)(s.default,{variant:"outlined",onClick:function(){return t("info")},mdxType:"Button"},"Toast Informativo")))})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"prop"),(0,i.kt)("th",{parentName:"tr",align:null},"tipo"),(0,i.kt)("th",{parentName:"tr",align:null},"obrigat\xf3rio"),(0,i.kt)("th",{parentName:"tr",align:null},"padr\xe3o"),(0,i.kt)("th",{parentName:"tr",align:null},"descri\xe7\xe3o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onOpen"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"function")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"Fun\xe7\xe3o chamada quando a notifica\xe7\xe3o aparece")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onClose"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"function")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"Fun\xe7\xe3o chamada quando a notifica\xe7\xe3o desaparece")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onClick"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"function")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"Fun\xe7\xe3o chamada ao clicar dentro da notifica\xe7\xe3o Toast")))))}k.isMDXComponent=!0;var g={editThisPagePath:"src/pages/ui-components/Toast/index.mdx"};for(var _ in g)window[_]=g[_]},99390:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Toast",function(){return n(43927)}])}},function(t){t.O(0,[4526,9371,6844,9143,715,8593,6034,9774,2888,179],(function(){return e=99390,t(t.s=e);var e}));var e=t.O();_N_E=e}]);