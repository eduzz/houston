(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7034],{89231:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/useObservableCallback",function(){return c(10646)}])},98184:function(a,b,c){"use strict";var d=this&&this.__createBinding||(Object.create?function(a,b,c,d){void 0===d&&(d=c),Object.defineProperty(a,d,{enumerable:!0,get:function(){return b[c]}})}:function(a,b,c,d){void 0===d&&(d=c),a[d]=b[c]}),e=this&&this.__setModuleDefault||(Object.create?function(a,b){Object.defineProperty(a,"default",{enumerable:!0,value:b})}:function(a,b){a.default=b}),f=this&&this.__importStar||function(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)"default"!==c&&Object.prototype.hasOwnProperty.call(a,c)&&d(b,a,c);return e(b,a),b};Object.defineProperty(b,"__esModule",{value:!0}),b.getConfig=void 0;var g={onUnhandledError:function(){}};b.default=function(a){g=a,Promise.resolve().then(function(){return f(c(44712))}).then(function(b){b.config&&!b.config.onUnhandledError&&(b.config.onUnhandledError=function(b){return a.onUnhandledError(b,"rxjs")})}).catch(function(){})},b.getConfig=function(){return g}},51327:function(a,b,c){"use strict";function d(a,b){return(function(a){if(Array.isArray(a))return a})(a)||(function(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(i){e=!0,f=i}finally{try{d||null==h.return||h.return()}finally{if(e)throw f}}return c})(a,b)||(function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")})()}var e=(0,c(59312).__importStar)(c(27378)),f=c(44712),g=c(12938),h=c(98184);b.Z=function(a,b){var c=d(e.useState(void 0),2),i=c[0],j=c[1],k=d(e.useState(),2),l=k[0],m=k[1],n=d(e.useState(!1),2),o=n[0],p=n[1],q=d(e.useState(!1),2),r=q[0],s=q[1],t=d(e.useState(function(){return new f.Subject()}),1),u=t[0];e.useEffect(function(){var a=u.pipe((0,g.switchMap)(function(a){var b,c=a.callback,d=a.args;return j(void 0),m(void 0),s(!1),p(!0),c.apply(void 0,function(a){if(Array.isArray(a)){for(var b=0,c=new Array(a.length);b<a.length;b++)c[b]=a[b];return c}}(b=d)||function(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}(b)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}())}),(0,g.tap)({next:function(a){j(function(){return a}),m(void 0),p(!1)},error:function(a){(0,h.getConfig)().onUnhandledError(a,"hooks"),j(null),m(a),p(!1)},complete:function(){s(!0),p(!1)}})).subscribe();return function(){return a.unsubscribe()}},[u]);var v=e.useCallback(function(){for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];p(!0),u.next({callback:a,args:d,deps:b})},b);return[v,i,l,r,o]}},30222:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(59312),e=c(24246),f=(0,d.__importStar)(c(27378)),g=(0,d.__importDefault)(c(13053)),h=(0,d.__importDefault)(c(83251));b.default=f.memo(function(a){var b=a.children,c=a.disabled,f=a.variant,i=a.color,j=a.startIcon,k=a.loading,l=void 0!==k&&k,m=a.loadingText,n=(0,d.__rest)(a,["children","disabled","variant","color","startIcon","loading","loadingText"]);return(0,e.jsxs)(g.default,(0,d.__assign)({},n,{disabled:void 0!==c&&c||l,startIcon:l?(0,e.jsx)(h.default,{size:18,color:"inherit"},void 0):j,disableRipple:!0,disableFocusRipple:!0,disableElevation:!0,disableTouchRipple:!0,variant:void 0===f?"contained":f,color:void 0===i?"primary":i},{children:[!l&&b,l&&(null!=m?m:b)]}),void 0)})},38861:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(59312),e=(0,d.__importStar)(c(27378)),f=(0,d.__importDefault)(c(38944)),g=(0,(0,d.__importDefault)(c(11376)).default)(function(a){return{text:function(b){var c,d,e;return{margin:0,fontSize:a.textSize(null!==(c=b.size)&& void 0!==c?c:"normal"),lineHeight:a.lineHeight(null!==(d=b.lineHeight)&& void 0!==d?d:"normal"),fontWeight:a.fontWeight(null!==(e=b.fontWeight)&& void 0!==e?e:"regular"),marginBottom:b.marginBottom?a.spacing(2):null}},secondary:{color:a.colors.grey[500],fontSize:a.textSize("small")}}});b.default=e.memo(function(a){var b,c=g(a),h=e.useMemo(function(){return{id:null==a?void 0:a.id,children:null==a?void 0:a.children,onClick:null==a?void 0:a.onClick}},[null==a?void 0:a.children,null==a?void 0:a.id,null==a?void 0:a.onClick]),i=e.useMemo(function(){return{secondary:c.secondary}},[c.secondary]);return e.createElement(null!==(b=null==a?void 0:a.component)&& void 0!==b?b:"p",(0,d.__assign)((0,d.__assign)({},h),{className:(0,f.default)(c.text,null==a?void 0:a.className,i[null==a?void 0:a.variant])}))})},11376:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(59312),e=c(87651),f=(0,d.__importDefault)(c(43297));b.default=function(a){return function(b){var c;return c="function"==typeof a?a((0,f.default)()):a,Object.keys(c).reduce(function(a,f){var g;return(0,d.__assign)((0,d.__assign)({},a),((g={})[f]=(0,e.css)("function"==typeof c[f]?c[f](b):c[f]),g))},{})}}},43297:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(81006);b.default=function(){return(0,d.useTheme)()}},10646:function(a,b,c){"use strict";c.r(b),c.d(b,{meta:function(){return p},"default":function(){return r}});var d=c(27378),e=c(35318),f=c(56100),g=c(16784),h=c(77340),i=c(91044),j=c(55954),k=c(80598),l=c(30222),m=c(38861),n=c(51327);function o(a,b){return(function(a){if(Array.isArray(a))return a})(a)||(function(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(i){e=!0,f=i}finally{try{d||null==h.return||h.return()}finally{if(e)throw f}}return c})(a,b)||(function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")})()}var p={name:"useObservableCallback",tableOfContents:{depth:0,children:[{depth:1,slug:"#useobservablecallback",title:"useObservableCallback",children:[{depth:2,slug:"#como-usar",title:"Como usar"},{depth:2,slug:"#cuidados",title:"Cuidados"},{depth:2,slug:"#par\xe2metros-e-retorno",title:"Par\xe2metros e Retorno"}]}]}},q={meta:p};function r(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,e.kt)("wrapper",Object.assign({},q,c,{components:b,mdxType:"MDXLayout"}),(0,e.kt)("h1",Object.assign({},{id:"useobservablecallback"}),"useObservableCallback"),(0,e.kt)("p",null,"Retorn um callback que dar\xe1 Subscribe e retornar\xe1 o resultado de um Observable e quando o componente desmonta (unmount) tamb\xe9m d\xe1 unsubscribe,\ndiminuindo assim o risco de Memory Leak. ",(0,e.kt)("strong",{parentName:"p"},"Como useEffect que retorna o valor do Observable")),(0,e.kt)("h2",Object.assign({},{id:"como-usar"}),"Como usar"),(0,e.kt)("pre",null,(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"const [callback, value, error, completed, loading] = useObservableCallback(() => userService.get(), []);\n\nreturn (\n  <div>\n    {loading ? 'Carregando' : ''}\n    {value}\n    <button onClick={callback}>iniciar</button>\n  </div>\n);\n")),(0,e.kt)(f.X,{__position:0,code:"() => {\n  const [reset, setReset] = useState()\n  const [callback, value, error, completed, loading] = useObservableCallback(\n    () =>\n      interval(1000).pipe(\n        take(5),\n        map((v) => v + 1),\n      ),\n    [reset],\n  )\n  const onReset = useCallback(() => setReset(Date.now()), [])\n  return (\n    <div>\n      <Typography>Value: {value ? value : 'undefined'}</Typography>\n      <Typography>Loading: {loading.toString()}</Typography>\n      <Typography marginBottom>Completed: {completed.toString()}</Typography>\n      <Button onClick={callback}>Iniciar</Button>\n    </div>\n  )\n}",scope:{props:c,useState:d.useState,useCallback:d.useCallback,Playground:f.X,interval:g.F,of:h.of,delay:i.g,take:j.q,map:k.U,Button:l.default,Typography:m.default,useObservableCallback:n.Z,meta:p},mdxType:"Playground"},function(){var a=(0,d.useState)(),b=a[0],c=a[1],f=o((0,n.Z)(function(){return(0,g.F)(1000).pipe((0,j.q)(5),(0,k.U)(function(a){return a+1}))},[b]),5),h=f[0],i=f[1],p=f[2],q=f[3],r=f[4];return(0,d.useCallback)(function(){return c(Date.now())},[]),(0,e.kt)("div",null,(0,e.kt)(m.default,{mdxType:"Typography"},"Value: ",i||"undefined"),(0,e.kt)(m.default,{mdxType:"Typography"},"Loading: ",r.toString()),(0,e.kt)(m.default,{marginBottom:!0,mdxType:"Typography"},"Completed: ",q.toString()),(0,e.kt)(l.default,{onClick:h,mdxType:"Button"},"Iniciar"))}),(0,e.kt)("h2",Object.assign({},{id:"cuidados"}),"Cuidados"),(0,e.kt)("ul",null,(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("strong",{parentName:"li"},"Erros")," ocorridos ser\xe3o automaticamentes logados (n\xe3o tratados) se as o ",(0,e.kt)("strong",{parentName:"li"},"onUnhandledError")," no ",(0,e.kt)("strong",{parentName:"li"},"setHoustonHooksConfig"),"\nfor setado, mas se utilizar o operador catchError esse erro n\xe3o ser\xe1 logado pois foi previamente tratado,\nnesse caso o log deve ser feito manualmente."),(0,e.kt)("li",{parentName:"ul"},"O valor inicial ser\xe1 ",(0,e.kt)("strong",{parentName:"li"},"undefined"),", lembre-se de tratar isso quando estiver usando:")),(0,e.kt)(f.X,{__position:1,code:"() => {\n  const [reset, setReset] = useState()\n  const [user, error, completed, loading] = useObservableCallback(\n    () => of({ name: 'Eduzz' }).pipe(delay(2000)),\n    [reset],\n  )\n  const onReset = useCallback(() => setReset(Date.now()), [])\n  return (\n    <div>\n      <Typography>Value: {user && user.name}</Typography>\n      <Typography>Loading: {loading.toString()}</Typography>\n      <Button onClick={onReset} variant=\"text\">\n        Reset\n      </Button>\n    </div>\n  )\n}",scope:{props:c,useState:d.useState,useCallback:d.useCallback,Playground:f.X,interval:g.F,of:h.of,delay:i.g,take:j.q,map:k.U,Button:l.default,Typography:m.default,useObservableCallback:n.Z,meta:p},mdxType:"Playground"},function(){var a=(0,d.useState)(),b=a[0],c=a[1],f=o((0,n.Z)(function(){return(0,h.of)({name:"Eduzz"}).pipe((0,i.g)(2000))},[b]),4),g=f[0],j=f[1],k=f[2],p=f[3],q=(0,d.useCallback)(function(){return c(Date.now())},[]);return(0,e.kt)("div",null,(0,e.kt)(m.default,{mdxType:"Typography"},"Value: ",g&&g.name),(0,e.kt)(m.default,{mdxType:"Typography"},"Loading: ",p.toString()),(0,e.kt)(l.default,{onClick:q,variant:"text",mdxType:"Button"},"Reset"))}),(0,e.kt)("h2",Object.assign({},{id:"par\xe2metros-e-retorno"}),"Par\xe2metros e Retorno"),(0,e.kt)("pre",null,(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/**\n * @param observableCallback Fun\xe7\xe3o que retorna um Observable\n * @param deps Lista de depend\xeancias\n * @returns [\n *    callback: callback que inicia o Observable\n *    value: valor de retorno do Observable,\n *    error: se ocorrer um erro, ele ser\xe1 passado aqui,\n *    complete: boolean se o observable foi completado ou n\xe3o,\n *    loading: boolean se esta carregando ou n\xe3o, assim que o primeiro valor vier ele ser\xe1 false\n * ]\n */\nexport default function useObservableCallback<T, F extends (...args: any[]) => Observable<T>>(\n  observableCallback: F,\n  deps: React.DependencyList\n): [(...a: Parameters<F>) => void, ExtractObservableResult<ReturnType<F>>, any, boolean, boolean];\n")))}r.isMDXComponent=!0;var s={editThisPagePath:"src/pages/hooks/useObservableCallback/index.mdx"};for(var t in s)window[t]=s[t]},12938:function(a,b,c){"use strict";c.r(b),c.d(b,{audit:function(){return d.U},auditTime:function(){return e.e},buffer:function(){return f.f},bufferCount:function(){return g.j},bufferTime:function(){return h.e},bufferToggle:function(){return i.P},bufferWhen:function(){return j.R},catchError:function(){return k.K},combineAll:function(){return l.c},combineLatest:function(){return n.a},combineLatestAll:function(){return m.h},combineLatestWith:function(){return o.V},concat:function(){return p.z},concatAll:function(){return q.u},concatMap:function(){return r.b},concatMapTo:function(){return s.w},concatWith:function(){return t.T},connect:function(){return u.$},count:function(){return v.Q},debounce:function(){return w.D},debounceTime:function(){return x.b},defaultIfEmpty:function(){return y.d},delay:function(){return z.g},delayWhen:function(){return A.j},dematerialize:function(){return B.D},distinct:function(){return C.E},distinctUntilChanged:function(){return D.x},distinctUntilKeyChanged:function(){return E.g},elementAt:function(){return F.T},endWith:function(){return G.l},every:function(){return H.y},exhaust:function(){return I.b},exhaustAll:function(){return J.Y},exhaustMap:function(){return K.z},expand:function(){return L.j},filter:function(){return M.h},finalize:function(){return N.x},find:function(){return O.s},findIndex:function(){return P.c},first:function(){return Q.P},flatMap:function(){return _.V},groupBy:function(){return R.v},ignoreElements:function(){return S.l},isEmpty:function(){return T.x},last:function(){return U.Z},map:function(){return V.U},mapTo:function(){return W.h},materialize:function(){return X.i},max:function(){return Y.F},merge:function(){return Z.T},mergeAll:function(){return $.J},mergeMap:function(){return aa.z},mergeMapTo:function(){return ba.j},mergeScan:function(){return ca.f},mergeWith:function(){return da.b},min:function(){return ea.V},multicast:function(){return fa.O},observeOn:function(){return ga.Q},onErrorResumeNext:function(){return ha.h},pairwise:function(){return ia.G},partition:function(){return ka},pluck:function(){return la.j},publish:function(){return ma.n},publishBehavior:function(){return na.n},publishLast:function(){return oa.C},publishReplay:function(){return pa._},race:function(){return ta},raceWith:function(){return sa.Q},reduce:function(){return ua.u},refCount:function(){return za.x},repeat:function(){return va.r},repeatWhen:function(){return wa.a},retry:function(){return xa.X},retryWhen:function(){return ya.a},sample:function(){return Aa.U},sampleTime:function(){return Ba.b},scan:function(){return Ca.R},sequenceEqual:function(){return Da.N},share:function(){return Ea.B},shareReplay:function(){return Fa.d},single:function(){return Ga.Z},skip:function(){return Ha.T},skipLast:function(){return Ia.W},skipUntil:function(){return Ja.u},skipWhile:function(){return Ka.n},startWith:function(){return La.O},subscribeOn:function(){return Ma.R},switchAll:function(){return Na.B},switchMap:function(){return Oa.w},switchMapTo:function(){return Pa.c},switchScan:function(){return Qa.w},take:function(){return Ra.q},takeLast:function(){return Sa.h},takeUntil:function(){return Ta.R},takeWhile:function(){return Ua.o},tap:function(){return Va.b},throttle:function(){return Wa.P},throttleTime:function(){return Xa.p},throwIfEmpty:function(){return Ya.T},timeInterval:function(){return Za.J},timeout:function(){return $a.V},timeoutWith:function(){return _a.L},timestamp:function(){return ab.A},toArray:function(){return bb.q},window:function(){return cb.u},windowCount:function(){return db.r},windowTime:function(){return eb.I},windowToggle:function(){return fb.j},windowWhen:function(){return gb.Q},withLatestFrom:function(){return hb.M},zip:function(){return ib.$},zipAll:function(){return jb.h},zipWith:function(){return kb.y}});var d=c(88313),e=c(11546),f=c(54340),g=c(25479),h=c(93249),i=c(35787),j=c(26771),k=c(38045),l=c(33381),m=c(11113),n=c(83370),o=c(18067),p=c(65643),q=c(36181),r=c(95910),s=c(19200),t=c(60718),u=c(8634),v=c(30765),w=c(38153),x=c(32384),y=c(38024),z=c(91044),A=c(52740),B=c(33760),C=c(45521),D=c(36005),E=c(23397),F=c(31997),G=c(31794),H=c(64383),I=c(90549),J=c(91068),K=c(79682),L=c(51348),M=c(16621),N=c(41952),O=c(92119),P=c(58275),Q=c(43410),R=c(77506),S=c(47860),T=c(5291),U=c(56150),V=c(80598),W=c(8167),X=c(85912),Y=c(61497),Z=c(70058),$=c(25014),_=c(26472),aa=c(5986),ba=c(35083),ca=c(60346),da=c(74987),ea=c(61925),fa=c(79195),ga=c(44789),ha=c(96405),ia=c(64668),ja=c(25346);function ka(a,b){return function(c){return[(0,M.h)(a,b)(c),(0,M.h)((0,ja.f)(a,b))(c)]}}var la=c(61570),ma=c(76137),na=c(10938),oa=c(98704),pa=c(66370),qa=c(80322),ra=c(55676),sa=c(26177);function ta(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];return sa.Q.apply(void 0,(0,qa.ev)([],(0,qa.CR)((0,ra.k)(a))))}var ua=c(75703),va=c(32365),wa=c(93260),xa=c(79734),ya=c(7525),za=c(39296),Aa=c(90392),Ba=c(17812),Ca=c(55569),Da=c(23976),Ea=c(83457),Fa=c(6489),Ga=c(30040),Ha=c(20601),Ia=c(90798),Ja=c(5563),Ka=c(80661),La=c(71563),Ma=c(45326),Na=c(48761),Oa=c(23741),Pa=c(1636),Qa=c(67496),Ra=c(55954),Sa=c(6638),Ta=c(89254),Ua=c(80855),Va=c(36431),Wa=c(96957),Xa=c(64509),Ya=c(52958),Za=c(77997),$a=c(39121),_a=c(1259),ab=c(48530),bb=c(59290),cb=c(2368),db=c(67144),eb=c(26982),fb=c(3115),gb=c(56743),hb=c(8443),ib=c(99078),jb=c(75303),kb=c(96384)}},function(a){a.O(0,[4526,4357,9961,161,2550,5522,4712,4865,9774,2888,179],function(){return a(a.s=89231)}),_N_E=a.O()}])