(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7832],{944039:function(n,e,t){"use strict";var r=this&&this.__createBinding||(Object.create?function(n,e,t,r){void 0===r&&(r=t),Object.defineProperty(n,r,{enumerable:!0,get:function(){return e[t]}})}:function(n,e,t,r){void 0===r&&(r=t),n[r]=e[t]}),o=this&&this.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),u=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)"default"!==t&&Object.prototype.hasOwnProperty.call(n,t)&&r(e,n,t);return o(e,n),e};Object.defineProperty(e,"__esModule",{value:!0}),e.getConfig=void 0;var i={onUnhandledError:function(){}};e.default=function(n){i=n,Promise.resolve().then((function(){return u(t(470037))})).then((function(e){e.config&&!e.config.onUnhandledError&&(e.config.onUnhandledError=function(e){return n.onUnhandledError(e,"rxjs")})})).catch((function(){}))},e.getConfig=function(){return i}},682111:function(n,e,t){"use strict";var r=t(293823);Object.defineProperty(e,"__esModule",{value:!0});var o=(0,t(759312).__importStar)(t(827378)),u=t(944039);e.default=function(n,e){var t=o.useState(void 0),i=r(t,2),a=i[0],c=i[1],f=o.useState(),l=r(f,2),s=l[0],d=l[1],p=o.useState(!0),h=r(p,2),v=h[0],m=h[1],b=o.useState(!1),g=r(b,2),_=g[0],y=g[1],k=o.useCallback(n,e);return o.useEffect((function(){c(void 0),d(void 0),y(!1),m(!0);var n=k().subscribe({next:function(n){c((function(){return n})),d(void 0),m(!1)},error:function(n){(0,u.getConfig)().onUnhandledError(n,"hooks"),c(null),d(n),m(!1)},complete:function(){y(!0),m(!1)}});return function(){return n.unsubscribe()}}),[k]),[a,s,_,v]}},492216:function(n,e,t){"use strict";var r=t(293823);var o=t(759312),u=(0,o.__importStar)(t(827378)),i=t(470037),a=t(374489),c=t(944039),f=(0,o.__importDefault)(t(682111));e.Z=function(n,e){var t=u.useState(),o=r(t,2),l=o[0],s=o[1],d=u.useState(),p=r(d,2),h=p[0],v=p[1],m=u.useRef(new i.BehaviorSubject(!0)).current,b=(0,f.default)((function(){return m.pipe((0,a.tap)((function(){s(void 0),v(void 0)})),(0,a.switchMap)((function(){return n().pipe((0,a.tap)((function(n){return s(n)})),(0,a.catchError)((function(n){return(0,c.getConfig)().onUnhandledError(n,"hooks"),v(n),i.NEVER})))})))}),e),g=r(b,4),_=g[2],y=g[3];return[l,h,_,u.useCallback((function(){return m.next(!0)}),[m]),y]}},399203:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(759312),o=t(824246),u=(0,r.__importStar)(t(827378)),i=(0,r.__importDefault)(t(858423)),a=(0,r.__importDefault)(t(880910));e.default=u.memo((function(n){var e=n.children,t=n.disabled,u=void 0!==t&&t,c=n.variant,f=void 0===c?"contained":c,l=n.startIcon,s=n.loading,d=void 0!==s&&s,p=n.loadingText,h=(0,r.__rest)(n,["children","disabled","variant","startIcon","loading","loadingText"]);return(0,o.jsxs)(i.default,(0,r.__assign)({},h,{disabled:u||d,startIcon:d?(0,o.jsx)(a.default,{size:18,color:"inherit"},void 0):l,disableRipple:!0,disableFocusRipple:!0,disableElevation:!0,disableTouchRipple:!0,variant:f,color:"primary"},{children:[!d&&e,d&&(null!==p&&void 0!==p?p:e)]}),void 0)}))},72078:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(759312),o=(0,r.__importStar)(t(827378)),u=(0,r.__importDefault)(t(138944)),i=(0,(0,r.__importDefault)(t(871002)).default)((function(n){return{text:function(e){var t,r,o;return{margin:0,fontSize:n.textSize(null!==(t=e.size)&&void 0!==t?t:"normal"),lineHeight:n.lineHeight(null!==(r=e.lineHeight)&&void 0!==r?r:"normal"),fontWeight:n.fontWeight(null!==(o=e.fontWeight)&&void 0!==o?o:"regular"),marginBottom:e.marginBottom?n.spacing(2):null}},secondary:{color:n.colors.grey[500],fontSize:n.textSize("small")}}}));e.default=o.memo((function(n){var e,t=i(n),a=o.useMemo((function(){return{id:null===n||void 0===n?void 0:n.id,children:null===n||void 0===n?void 0:n.children,onClick:null===n||void 0===n?void 0:n.onClick}}),[null===n||void 0===n?void 0:n.children,null===n||void 0===n?void 0:n.id,null===n||void 0===n?void 0:n.onClick]),c=o.useMemo((function(){return{secondary:t.secondary}}),[t.secondary]);return o.createElement(null!==(e=null===n||void 0===n?void 0:n.component)&&void 0!==e?e:"p",(0,r.__assign)((0,r.__assign)({},a),{className:(0,u.default)(t.text,null===n||void 0===n?void 0:n.className,c[null===n||void 0===n?void 0:n.variant])}))}))},666234:function(n,e,t){"use strict";t.r(e),t.d(e,{meta:function(){return h},default:function(){return m}});var r=t(987397),o=t(338566),u=t(831750),i=(t(827378),t(735318)),a=t(112696),c=t(716784),f=t(55954),l=t(399203),s=t(72078),d=t(492216),p=["components"],h={name:"useObservableRefreshRefresh",tableOfContents:{depth:0,children:[{depth:1,slug:"#useobservablerefresh",title:"useObservableRefresh",children:[{depth:2,slug:"#como-usar",title:"Como usar"},{depth:2,slug:"#cuidados",title:"Cuidados"},{depth:2,slug:"#par\xe2metros-e-retorno",title:"Par\xe2metros e Retorno"}]}]}},v={meta:h};function m(n){var e=n.components,t=(0,u.Z)(n,p);return(0,i.kt)("wrapper",(0,r.Z)({},v,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"useobservablerefresh"},"useObservableRefresh"),(0,i.kt)("p",null,"Um ",(0,i.kt)("strong",{parentName:"p"},"useObservable")," que retorna uma fun\xe7\xe3o de refresh para recarregar, \xfatil na trativa de erros ou refresh."),(0,i.kt)("h2",{id:"como-usar"},"Como usar"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const [value, error, completed, loading, refresh] = useObservableRefresh(() => userService.get(), []);\n\nreturn (\n  <div>\n    {loading ? 'Carregando' : ''}\n    {value}\n    <Button onClick={refresh} variant='text'>\n      Refresh\n    </Button>\n  </div>\n);\n")),(0,i.kt)(a.X,{__position:0,code:'() => {\n  const [value, error, completed, refresh] = useObservableRefresh(\n    () => interval(1000).pipe(take(10)),\n    [],\n  )\n  return (\n    <div>\n      <Typography>Value: {value}</Typography>\n      <Typography>Completed: {completed.toString()}</Typography>\n      <Button onClick={refresh} variant="text">\n        Refresh\n      </Button>\n    </div>\n  )\n}',scope:{props:t,Playground:a.X,interval:c.F,take:f.q,Button:l.default,Typography:s.default,useObservableRefresh:d.Z,meta:h},mdxType:"Playground"},(function(){var n=(0,d.Z)((function(){return(0,c.F)(1e3).pipe((0,f.q)(10))}),[]),e=(0,o.Z)(n,4),t=e[0],r=(e[1],e[2]),u=e[3];return(0,i.kt)("div",null,(0,i.kt)(s.default,{mdxType:"Typography"},"Value: ",t),(0,i.kt)(s.default,{mdxType:"Typography"},"Completed: ",r.toString()),(0,i.kt)(l.default,{onClick:u,variant:"text",mdxType:"Button"},"Refresh"))})),(0,i.kt)("h2",{id:"cuidados"},"Cuidados"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Erros")," ocorridos ser\xe3o automaticamentes logados (n\xe3o tratados) se as o ",(0,i.kt)("strong",{parentName:"li"},"onUnhandledError")," no ",(0,i.kt)("strong",{parentName:"li"},"setHoustonHooksConfig"),"\nfor setado, mas se utilizar o operador catchError esse erro n\xe3o ser\xe1 logado pois foi previamente tratado,\nnesse caso o log deve ser feito manualmente."),(0,i.kt)("li",{parentName:"ul"},"O valor inicial ser\xe1 ",(0,i.kt)("strong",{parentName:"li"},"undefined"),", lembre-se de tratar isso quando estiver usando.")),(0,i.kt)("h2",{id:"par\xe2metros-e-retorno"},"Par\xe2metros e Retorno"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * @param observableGenerator Fun\xe7\xe3o que retorna um Observable\n * @param deps Lista de depend\xeancias\n * @returns [\n *    value: valor de retorno do Observable,\n *    error: se ocorrer um erro, ele ser\xe1 passado aqui,\n *    complete: boolean se o observable foi completado ou n\xe3o,\n *    loading: boolean se esta carregando ou n\xe3o,\n *    refresh: function para recarregar\n * ]\n */\nexport default useObservableRefresh<T>(observableGenerator: () => Observable<T>, deps: React.DependencyList): [T, any, boolean, boolean, () => void];\n")))}m.isMDXComponent=!0;var b={editThisPagePath:"src/pages/hooks/useObservableRefresh/index.mdx"};for(var g in b)window[g]=b[g]},810258:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/useObservableRefresh",function(){return t(666234)}])},374489:function(n,e,t){"use strict";t.r(e),t.d(e,{audit:function(){return r.U},auditTime:function(){return o.e},buffer:function(){return u.f},bufferCount:function(){return i.j},bufferTime:function(){return a.e},bufferToggle:function(){return c.P},bufferWhen:function(){return f.R},catchError:function(){return l.K},combineAll:function(){return s.c},combineLatest:function(){return p.a},combineLatestAll:function(){return d.h},combineLatestWith:function(){return h.V},concat:function(){return v.z},concatAll:function(){return m.u},concatMap:function(){return b.b},concatMapTo:function(){return g.w},concatWith:function(){return _.T},connect:function(){return y.$},count:function(){return k.Q},debounce:function(){return T.D},debounceTime:function(){return x.b},defaultIfEmpty:function(){return w.d},delay:function(){return C.g},delayWhen:function(){return O.j},dematerialize:function(){return R.D},distinct:function(){return E.E},distinctUntilChanged:function(){return N.x},distinctUntilKeyChanged:function(){return S.g},elementAt:function(){return M.T},endWith:function(){return j.l},every:function(){return P.y},exhaust:function(){return W.b},exhaustAll:function(){return z.Y},exhaustMap:function(){return U.z},expand:function(){return B.j},filter:function(){return D.h},finalize:function(){return L.x},find:function(){return q.s},findIndex:function(){return A.c},first:function(){return I.P},flatMap:function(){return Y.V},groupBy:function(){return Z.v},ignoreElements:function(){return V.l},isEmpty:function(){return X.x},last:function(){return F.Z},map:function(){return H.U},mapTo:function(){return Q.h},materialize:function(){return G.i},max:function(){return J.F},merge:function(){return K.T},mergeAll:function(){return $.J},mergeMap:function(){return nn.z},mergeMapTo:function(){return en.j},mergeScan:function(){return tn.f},mergeWith:function(){return rn.b},min:function(){return on.V},multicast:function(){return un.O},observeOn:function(){return an.Q},onErrorResumeNext:function(){return cn.h},pairwise:function(){return fn.G},partition:function(){return sn},pluck:function(){return dn.j},publish:function(){return pn.n},publishBehavior:function(){return hn.n},publishLast:function(){return vn.C},publishReplay:function(){return mn._},race:function(){return yn},raceWith:function(){return _n.Q},reduce:function(){return kn.u},refCount:function(){return On.x},repeat:function(){return Tn.r},repeatWhen:function(){return xn.a},retry:function(){return wn.X},retryWhen:function(){return Cn.a},sample:function(){return Rn.U},sampleTime:function(){return En.b},scan:function(){return Nn.R},sequenceEqual:function(){return Sn.N},share:function(){return Mn.B},shareReplay:function(){return jn.d},single:function(){return Pn.Z},skip:function(){return Wn.T},skipLast:function(){return zn.W},skipUntil:function(){return Un.u},skipWhile:function(){return Bn.n},startWith:function(){return Dn.O},subscribeOn:function(){return Ln.R},switchAll:function(){return qn.B},switchMap:function(){return An.w},switchMapTo:function(){return In.c},switchScan:function(){return Zn.w},take:function(){return Vn.q},takeLast:function(){return Xn.h},takeUntil:function(){return Fn.R},takeWhile:function(){return Hn.o},tap:function(){return Qn.b},throttle:function(){return Gn.P},throttleTime:function(){return Jn.p},throwIfEmpty:function(){return Kn.T},timeInterval:function(){return $n.J},timeout:function(){return Yn.V},timeoutWith:function(){return ne.L},timestamp:function(){return ee.A},toArray:function(){return te.q},window:function(){return re.u},windowCount:function(){return oe.r},windowTime:function(){return ue.I},windowToggle:function(){return ie.j},windowWhen:function(){return ae.Q},withLatestFrom:function(){return ce.M},zip:function(){return fe.$},zipAll:function(){return le.h},zipWith:function(){return se.y}});var r=t(888313),o=t(411546),u=t(154340),i=t(425479),a=t(893249),c=t(835787),f=t(126771),l=t(38045),s=t(733381),d=t(211113),p=t(483370),h=t(18067),v=t(865643),m=t(436181),b=t(495910),g=t(919200),_=t(460718),y=t(955653),k=t(130765),T=t(838153),x=t(432384),w=t(738024),C=t(891044),O=t(252740),R=t(233760),E=t(845521),N=t(836005),S=t(623397),M=t(731997),j=t(231794),P=t(264383),W=t(390549),z=t(391068),U=t(79682),B=t(951348),D=t(416621),L=t(141952),q=t(592119),A=t(158275),I=t(143410),Z=t(477506),V=t(847860),X=t(405291),F=t(556150),H=t(280598),Q=t(408167),G=t(185912),J=t(661497),K=t(970058),$=t(825014),Y=t(926472),nn=t(105986),en=t(735083),tn=t(60346),rn=t(474987),on=t(661925),un=t(79195),an=t(344789),cn=t(396405),fn=t(264668),ln=t(125346);function sn(n,e){return function(t){return[(0,D.h)(n,e)(t),(0,D.h)((0,ln.f)(n,e))(t)]}}var dn=t(861570),pn=t(476137),hn=t(10938),vn=t(98704),mn=t(866370),bn=t(980322),gn=t(255676),_n=t(526177);function yn(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return _n.Q.apply(void 0,(0,bn.ev)([],(0,bn.CR)((0,gn.k)(n))))}var kn=t(575703),Tn=t(232365),xn=t(893260),wn=t(679734),Cn=t(907525),On=t(39296),Rn=t(790392),En=t(117812),Nn=t(555569),Sn=t(723976),Mn=t(83457),jn=t(506489),Pn=t(530040),Wn=t(920601),zn=t(90798),Un=t(905563),Bn=t(480661),Dn=t(871563),Ln=t(245326),qn=t(148761),An=t(923741),In=t(501636),Zn=t(467496),Vn=t(55954),Xn=t(211611),Fn=t(289254),Hn=t(880855),Qn=t(536431),Gn=t(796957),Jn=t(664509),Kn=t(952958),$n=t(777997),Yn=t(39121),ne=t(801259),ee=t(248530),te=t(59290),re=t(902368),oe=t(667144),ue=t(726982),ie=t(703115),ae=t(456743),ce=t(608443),fe=t(699078),le=t(675303),se=t(396384)}},function(n){n.O(0,[4526,4375,6844,7456,6467,6194,9533,9774,2888,179],(function(){return e=810258,n(n.s=e);var e}));var e=n.O();_N_E=e}]);