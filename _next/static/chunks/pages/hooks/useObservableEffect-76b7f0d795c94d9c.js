(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3597],{87651:function(j,d,c){"use strict";c.r(d),c.d(d,{cache:function(){return w},css:function(){return u},cx:function(){return p},flush:function(){return n},getRegisteredStyles:function(){return r},hydrate:function(){return o},injectGlobal:function(){return s},keyframes:function(){return t},merge:function(){return q},sheet:function(){return v}});var g=c(8786),k=c(74343),h=c(53211);function l(a,b){if(void 0===a.inserted[b.name])return a.insert("",b,a.sheet,!0)}function i(c,d,b){var a=[],e=(0,h.fp)(c,a,b);return a.length<2?b:e+d(a)}var e,b,f,m=function g(f){for(var c="",d=0;d<f.length;d++){var b=f[d];if(null!=b){var a=void 0;switch(typeof b){case"boolean":break;case"object":if(Array.isArray(b))a=g(b);else for(var e in a="",b)b[e]&&e&&(a&&(a+=" "),a+=e);break;default:a=b}a&&(c&&(c+=" "),c+=a)}}return c},a=(e={key:"css"},(b=(0,g.Z)(e)).sheet.speedy=function(a){this.isSpeedy=a},b.compat=!0,{css:f=function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];var e=(0,k.O)(d,b.registered,void 0);return(0,h.My)(b,e,!1),b.key+"-"+e.name},cx:function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];return i(b.registered,f,m(d))},injectGlobal:function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];var e=(0,k.O)(d,b.registered);l(b,e)},keyframes:function(){for(var d=arguments.length,e=new Array(d),a=0;a<d;a++)e[a]=arguments[a];var c=(0,k.O)(e,b.registered),f="animation-"+c.name;return l(b,{name:c.name,styles:"@keyframes "+f+"{"+c.styles+"}"}),f},hydrate:function(a){a.forEach(function(a){b.inserted[a]=!0})},flush:function(){b.registered={},b.inserted={},b.sheet.flush()},sheet:b.sheet,cache:b,getRegisteredStyles:h.fp.bind(null,b.registered),merge:i.bind(null,b.registered,f)}),n=a.flush,o=a.hydrate,p=a.cx,q=a.merge,r=a.getRegisteredStyles,s=a.injectGlobal,t=a.keyframes,u=a.css,v=a.sheet,w=a.cache},67086:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/useObservableEffect",function(){return c(6202)}])},68211:function(c,b,a){"use strict";b.Z=function(b,a){d.useEffect(function(){var a=b().subscribe();return function(){return a.unsubscribe()}},a)};var d=a(39037).interopRequireWildcard(a(27378))},59266:function(f,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),g=a(24246),d=c.interopRequireWildcard(a(27378)),h=c.interopRequireDefault(a(77562)),i=c.interopRequireDefault(a(29532)),e=d.memo(function(a){var d=a.children,e=a.disabled,f=a.variant,j=a.color,m=a.startIcon,k=a.loading,b=void 0!==k&&k,l=a.loadingText,n=c.objectWithoutProperties(a,["children","disabled","variant","color","startIcon","loading","loadingText"]);return g.jsxs(h.default,c.objectSpread({},n,{disabled:void 0!==e&&e||b,startIcon:b?g.jsx(i.default,{size:18,color:"inherit"}):m,disableRipple:!0,disableFocusRipple:!0,disableElevation:!0,disableTouchRipple:!0,variant:void 0===f?"contained":f,color:void 0===j?"primary":j,children:[!b&&d,b&&(null!=l?l:d)]}))});b.default=e},98021:function(g,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),h=c.interopRequireWildcard(a(27378)),i=a(87651),d=c.interopRequireDefault(a(65388));function e(){var a=c.taggedTemplateLiteral(["\n  margin: 0;\n  font-size: ","px;\n  line-height: ",";\n  font-weight: ",";\n  margin-bottom: ",";\n\n  &.--variant-secondary {\n    color: ",";\n    font-size: ",";\n  }\n"]);return e=function(){return a},a}var f=d.default(function(a){var b=a.className,c=a.variant,e=a.id,f=a.children,d=a.component,g=a.onClick;return h.createElement(null!=d?d:"p",{id:e,onClick:g,className:i.cx(b,b,c&&"--variant-".concat(c))},f)})(e(),function(a){var c=a.theme,b=a.size;return c.textSize(null!=b?b:"normal")},function(a){var c=a.theme,b=a.lineHeight;return c.lineHeight(null!=b?b:"normal")},function(a){var c=a.theme,b=a.fontWeight;return c.fontWeight(null!=b?b:"regular")},function(a){var b=a.theme,c=a.marginBottom;return c?b.spacing(2):null},function(a){return a.theme.colors.grey[500]},function(a){return a.theme.textSize("small")});b.default=f},65388:function(k,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.breakpoints=a.cx=a.clsx=void 0;var c=b(39037),d=b(87651),e=c.interopRequireDefault(b(94408)),f=c.interopRequireDefault(b(18651)),g=d.cx;a.clsx=g;var h=d.cx;a.cx=h;var i=f.default({});a.breakpoints=i;var j=e.default;a.default=j},6202:function(g,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return f},meta:function(){return e}});var h=a(27378),i=a(35318),j=a(56100),k=a(16784),l=a(77340),m=a(18804),n=a(65348),o=a(27554),p=a(14512);function q(a,b,c){var d=(0,m.m)(a)||b||c?{next:a,error:b,complete:c}:a;return d?(0,n.e)(function(a,b){null===(c=d.subscribe)|| void 0===c||c.call(d);var c,e=!0;a.subscribe((0,o.x)(b,function(c){var a;null===(a=d.next)|| void 0===a||a.call(d,c),b.next(c)},function(){var a;e=!1,null===(a=d.complete)|| void 0===a||a.call(d),b.complete()},function(c){var a;e=!1,null===(a=d.error)|| void 0===a||a.call(d,c),b.error(c)},function(){var a,b;e&&(null===(a=d.unsubscribe)|| void 0===a||a.call(d)),null===(b=d.finalize)|| void 0===b||b.call(d)}))}):p.y}var r=a(80850),s=a(52641),t=a(80598),u=a(59266),v=a(98021),w=a(68211),e={name:"useObservableEffect",tableOfContents:{depth:0,children:[{depth:1,slug:"#useobservableeffect",title:"useObservableEffect",children:[{depth:2,slug:"#como-usar",title:"Como usar"},{depth:2,slug:"#cuidados",title:"Cuidados"},{depth:2,slug:"#par\xe2metros-e-retorno",title:"Par\xe2metros e Retorno"}]}]}},x={meta:e};function f(a){var c=a.components,b=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(a,["components"]);return(0,i.kt)("wrapper",Object.assign({},x,b,{components:c,mdxType:"MDXLayout"}),(0,i.kt)("h1",Object.assign({},{id:"useobservableeffect"}),"useObservableEffect"),(0,i.kt)("p",null,"D\xe1 Subscribe em um Observable mas n\xe3o retorna ou altera o estado\ne quando o componente desmonta (unmount) tamb\xe9m d\xe1 unsubscribe,\ndiminuindo assim o risco de Memory Leak. ",(0,i.kt)("strong",{parentName:"p"},"Como useEffect que retorna o valor do Observable")),(0,i.kt)("h2",Object.assign({},{id:"como-usar"}),"Como usar"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"useObservableEffect(() => userService.doSomething(), []);\n\nreturn <div>nothing will change or render</div>;\n")),(0,i.kt)(j.X,{__position:0,code:"() => {\n  const [reset, setReset] = useState()\n  useObservableEffect(\n    () =>\n      interval(1000).pipe(\n        take(5),\n        map((v) => v + 1),\n        tap((v) => console.log(v)),\n      ),\n    [reset],\n  )\n  const onReset = useCallback(() => setReset(Date.now()), [])\n  return (\n    <div>\n      <Button onClick={onReset}>Reset</Button>\n    </div>\n  )\n}",scope:{props:b,useState:h.useState,useCallback:h.useCallback,Playground:j.X,interval:k.F,of:l.of,delay:r.g,take:s.q,map:t.U,tap:q,Button:u.default,Typography:v.default,useObservableEffect:w.Z,meta:e},mdxType:"Playground"},function(){var a=(0,h.useState)(),b=a[0],d=a[1];(0,w.Z)(function(){return(0,k.F)(1e3).pipe((0,s.q)(5),(0,t.U)(function(a){return a+1}),q(function(a){return console.log(a)}))},[b]);var c=(0,h.useCallback)(function(){return d(Date.now())},[]);return(0,i.kt)("div",null,(0,i.kt)(u.default,{onClick:c,mdxType:"Button"},"Reset"))}),(0,i.kt)("h2",Object.assign({},{id:"cuidados"}),"Cuidados"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Erros")," ocorridos ser\xe3o automaticamentes logados (n\xe3o tratados) se as o ",(0,i.kt)("strong",{parentName:"li"},"onUnhandledError")," no ",(0,i.kt)("strong",{parentName:"li"},"setHoustonHooksConfig"),"\nfor setado, mas se utilizar o operador catchError esse erro n\xe3o ser\xe1 logado pois foi previamente tratado,\nnesse caso o log deve ser feito manualmente.")),(0,i.kt)("h2",Object.assign({},{id:"par\xe2metros-e-retorno"}),"Par\xe2metros e Retorno"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/**\n * @param observableGenerator Fun\xe7\xe3o que retorna um Observable\n * @param deps Lista de depend\xeancias\n * @returns void / nada\n */\nexport default useObservableEffect<T>(observableGenerator: () => Observable<T>, deps: React.DependencyList): void;\n")))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/hooks/useObservableEffect/index.mdx"};for(var d in c)window[d]=c[d]},16784:function(c,b,a){"use strict";a.d(b,{F:function(){return f}});var d=a(75310),e=a(42193);function f(a,b){return void 0===a&&(a=0),void 0===b&&(b=d.z),a<0&&(a=0),(0,e.H)(a,a,b)}}},function(a){a.O(0,[4526,4356,9961,6557,2359,9776,8482,3245,9774,2888,179],function(){return a(a.s=67086)}),_N_E=a.O()}])