(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4261],{944039:function(e,t,n){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.getConfig=void 0;var i={onUnhandledError:function(){}};t.default=function(e){i=e,Promise.resolve().then((function(){return a(n(470037))})).then((function(t){t.config&&!t.config.onUnhandledError&&(t.config.onUnhandledError=function(t){return e.onUnhandledError(t,"rxjs")})})).catch((function(){}))},t.getConfig=function(){return i}},682111:function(e,t,n){"use strict";var o=n(293823);Object.defineProperty(t,"__esModule",{value:!0});var r=(0,n(759312).__importStar)(n(827378)),a=n(944039);t.default=function(e,t){var n=r.useState(void 0),i=o(n,2),u=i[0],l=i[1],s=r.useState(),d=o(s,2),c=d[0],p=d[1],f=r.useState(!0),v=o(f,2),m=v[0],b=v[1],g=r.useState(!1),h=o(g,2),y=h[0],k=h[1],_=r.useCallback(e,t);return r.useEffect((function(){l(void 0),p(void 0),k(!1),b(!0);var e=_().subscribe({next:function(e){l((function(){return e})),p(void 0),b(!1)},error:function(e){(0,a.getConfig)().onUnhandledError(e,"hooks"),l(null),p(e),b(!1)},complete:function(){k(!0),b(!1)}});return function(){return e.unsubscribe()}}),[_]),[u,c,y,m]}},399203:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(759312),r=n(824246),a=(0,o.__importStar)(n(827378)),i=(0,o.__importDefault)(n(858423)),u=(0,o.__importDefault)(n(880910));t.default=a.memo((function(e){var t=e.children,n=e.disabled,a=void 0!==n&&n,l=e.variant,s=void 0===l?"contained":l,d=e.startIcon,c=e.loading,p=void 0!==c&&c,f=e.loadingText,v=(0,o.__rest)(e,["children","disabled","variant","startIcon","loading","loadingText"]);return(0,r.jsxs)(i.default,(0,o.__assign)({},v,{disabled:a||p,startIcon:p?(0,r.jsx)(u.default,{size:18,color:"inherit"},void 0):d,disableRipple:!0,disableFocusRipple:!0,disableElevation:!0,disableTouchRipple:!0,variant:s,color:"primary"},{children:[!p&&t,p&&(null!==f&&void 0!==f?f:t)]}),void 0)}))},72078:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(759312),r=(0,o.__importStar)(n(827378)),a=(0,o.__importDefault)(n(138944)),i=(0,(0,o.__importDefault)(n(871002)).default)((function(e){return{text:function(t){var n,o,r;return{margin:0,fontSize:e.textSize(null!==(n=t.size)&&void 0!==n?n:"normal"),lineHeight:e.lineHeight(null!==(o=t.lineHeight)&&void 0!==o?o:"normal"),fontWeight:e.fontWeight(null!==(r=t.fontWeight)&&void 0!==r?r:"regular"),marginBottom:t.marginBottom?e.spacing(2):null}},secondary:{color:e.colors.grey[500],fontSize:e.textSize("small")}}}));t.default=r.memo((function(e){var t,n=i(e),u=r.useMemo((function(){return{id:null===e||void 0===e?void 0:e.id,children:null===e||void 0===e?void 0:e.children,onClick:null===e||void 0===e?void 0:e.onClick}}),[null===e||void 0===e?void 0:e.children,null===e||void 0===e?void 0:e.id,null===e||void 0===e?void 0:e.onClick]),l=r.useMemo((function(){return{secondary:n.secondary}}),[n.secondary]);return r.createElement(null!==(t=null===e||void 0===e?void 0:e.component)&&void 0!==t?t:"p",(0,o.__assign)((0,o.__assign)({},u),{className:(0,a.default)(n.text,null===e||void 0===e?void 0:e.className,l[null===e||void 0===e?void 0:e.variant])}))}))},367664:function(e,t,n){"use strict";n.r(t),n.d(t,{meta:function(){return g},default:function(){return y}});var o=n(987397),r=n(338566),a=n(831750),i=n(827378),u=n(735318),l=n(112696),s=n(716784),d=n(777340),c=n(891044),p=n(55954),f=n(399203),v=n(72078),m=n(682111),b=["components"],g={name:"useObservable",tableOfContents:{depth:0,children:[{depth:1,slug:"#useobservable",title:"useObservable",children:[{depth:2,slug:"#como-usar",title:"Como usar"},{depth:2,slug:"#cuidados",title:"Cuidados"},{depth:2,slug:"#par\xe2metros-e-retorno",title:"Par\xe2metros e Retorno"}]}]}},h={meta:g};function y(e){var t=e.components,n=(0,a.Z)(e,b);return(0,u.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"useobservable"},"useObservable"),(0,u.kt)("p",null,"D\xe1 Subscribe e retorna o resultado de um Observable e quando o componente desmonta (unmount) tamb\xe9m d\xe1 unsubscribe,\ndiminuindo assim o risco de Memory Leak. ",(0,u.kt)("strong",{parentName:"p"},"Como useEffect que retorna o valor do Observable")),(0,u.kt)("h2",{id:"como-usar"},"Como usar"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-tsx"},"const [value, error, completed, loading] = useObservable(() => userService.get(), []);\n\nreturn (\n  <div>\n    {loading ? 'Carregando' : ''}\n    {value}\n  </div>\n);\n")),(0,u.kt)(l.X,{__position:0,code:'() => {\n  const [reset, setReset] = useState()\n  const [value, error, completed] = useObservable(\n    () => interval(1000).pipe(take(10)),\n    [reset],\n  )\n  const onReset = useCallback(() => setReset(Date.now()), [])\n  return (\n    <div>\n      <Typography>Value: {value}</Typography>\n      <Typography>Completed: {completed.toString()}</Typography>\n      <Button onClick={onReset} variant="text">\n        Reset\n      </Button>\n    </div>\n  )\n}',scope:{props:n,useState:i.useState,useCallback:i.useCallback,Playground:l.X,interval:s.F,of:d.of,delay:c.g,take:p.q,Button:f.default,Typography:v.default,useObservable:m.default,meta:g},mdxType:"Playground"},(function(){var e=(0,i.useState)(),t=e[0],n=e[1],o=(0,m.default)((function(){return(0,s.F)(1e3).pipe((0,p.q)(10))}),[t]),a=(0,r.Z)(o,3),l=a[0],d=(a[1],a[2]),c=(0,i.useCallback)((function(){return n(Date.now())}),[]);return(0,u.kt)("div",null,(0,u.kt)(v.default,{mdxType:"Typography"},"Value: ",l),(0,u.kt)(v.default,{mdxType:"Typography"},"Completed: ",d.toString()),(0,u.kt)(f.default,{onClick:c,variant:"text",mdxType:"Button"},"Reset"))})),(0,u.kt)("h2",{id:"cuidados"},"Cuidados"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("strong",{parentName:"li"},"Erros")," ocorridos ser\xe3o automaticamentes logados (n\xe3o tratados) se as o ",(0,u.kt)("strong",{parentName:"li"},"onUnhandledError")," no ",(0,u.kt)("strong",{parentName:"li"},"setHoustonHooksConfig"),"\nfor setado, mas se utilizar o operador catchError esse erro n\xe3o ser\xe1 logado pois foi previamente tratado,\nnesse caso o log deve ser feito manualmente."),(0,u.kt)("li",{parentName:"ul"},"O valor inicial ser\xe1 ",(0,u.kt)("strong",{parentName:"li"},"undefined"),", lembre-se de tratar isso quando estiver usando:")),(0,u.kt)(l.X,{__position:1,code:"() => {\n  const [reset, setReset] = useState()\n  const [user, error, completed, loading] = useObservable(\n    () => of({ name: 'Eduzz' }).pipe(delay(2000)),\n    [reset],\n  )\n  const onReset = useCallback(() => setReset(Date.now()), [])\n  return (\n    <div>\n      <Typography>Value: {user && user.name}</Typography>\n      <Typography>Loading: {loading.toString()}</Typography>\n      <Button onClick={onReset} variant=\"text\">\n        Reset\n      </Button>\n    </div>\n  )\n}",scope:{props:n,useState:i.useState,useCallback:i.useCallback,Playground:l.X,interval:s.F,of:d.of,delay:c.g,take:p.q,Button:f.default,Typography:v.default,useObservable:m.default,meta:g},mdxType:"Playground"},(function(){var e=(0,i.useState)(),t=e[0],n=e[1],o=(0,m.default)((function(){return(0,d.of)({name:"Eduzz"}).pipe((0,c.g)(2e3))}),[t]),a=(0,r.Z)(o,4),l=a[0],s=(a[1],a[2],a[3]),p=(0,i.useCallback)((function(){return n(Date.now())}),[]);return(0,u.kt)("div",null,(0,u.kt)(v.default,{mdxType:"Typography"},"Value: ",l&&l.name),(0,u.kt)(v.default,{mdxType:"Typography"},"Loading: ",s.toString()),(0,u.kt)(f.default,{onClick:p,variant:"text",mdxType:"Button"},"Reset"))})),(0,u.kt)("h2",{id:"par\xe2metros-e-retorno"},"Par\xe2metros e Retorno"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * @param observableGenerator Fun\xe7\xe3o que retorna um Observable\n * @param deps Lista de depend\xeancias\n * @returns [\n *    value: valor de retorno do Observable,\n *    error: se ocorrer um erro, ele ser\xe1 passado aqui,\n *    complete: boolean se o observable foi completado ou n\xe3o,\n *    loading: boolean se esta carregando ou n\xe3o\n * ]\n */\nexport default useObservable<T>(observableGenerator: () => Observable<T>, deps: React.DependencyList): [T, any, boolean, boolean];\n")))}y.isMDXComponent=!0;var k={editThisPagePath:"src/pages/hooks/useObservable/index.mdx"};for(var _ in k)window[_]=k[_]},607175:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/useObservable",function(){return n(367664)}])}},function(e){e.O(0,[4526,4375,6844,7456,6467,6194,9533,9774,2888,179],(function(){return t=607175,e(e.s=t);var t}));var t=e.O();_N_E=t}]);