(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7034],{87651:function(j,d,c){"use strict";c.r(d),c.d(d,{cache:function(){return w},css:function(){return u},cx:function(){return p},flush:function(){return n},getRegisteredStyles:function(){return r},hydrate:function(){return o},injectGlobal:function(){return s},keyframes:function(){return t},merge:function(){return q},sheet:function(){return v}});var g=c(8786),k=c(74343),h=c(53211);function l(a,b){if(void 0===a.inserted[b.name])return a.insert("",b,a.sheet,!0)}function i(c,d,b){var a=[],e=(0,h.fp)(c,a,b);return a.length<2?b:e+d(a)}var e,b,f,m=function g(f){for(var c="",d=0;d<f.length;d++){var b=f[d];if(null!=b){var a=void 0;switch(typeof b){case"boolean":break;case"object":if(Array.isArray(b))a=g(b);else for(var e in a="",b)b[e]&&e&&(a&&(a+=" "),a+=e);break;default:a=b}a&&(c&&(c+=" "),c+=a)}}return c},a=(e={key:"css"},(b=(0,g.Z)(e)).sheet.speedy=function(a){this.isSpeedy=a},b.compat=!0,{css:f=function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];var e=(0,k.O)(d,b.registered,void 0);return(0,h.My)(b,e,!1),b.key+"-"+e.name},cx:function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];return i(b.registered,f,m(d))},injectGlobal:function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];var e=(0,k.O)(d,b.registered);l(b,e)},keyframes:function(){for(var d=arguments.length,e=new Array(d),a=0;a<d;a++)e[a]=arguments[a];var c=(0,k.O)(e,b.registered),f="animation-"+c.name;return l(b,{name:c.name,styles:"@keyframes "+f+"{"+c.styles+"}"}),f},hydrate:function(a){a.forEach(function(a){b.inserted[a]=!0})},flush:function(){b.registered={},b.inserted={},b.sheet.flush()},sheet:b.sheet,cache:b,getRegisteredStyles:h.fp.bind(null,b.registered),merge:i.bind(null,b.registered,f)}),n=a.flush,o=a.hydrate,p=a.cx,q=a.merge,r=a.getRegisteredStyles,s=a.injectGlobal,t=a.keyframes,u=a.css,v=a.sheet,w=a.cache},89231:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/useObservableCallback",function(){return c(32311)}])},70010:function(d,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(b){var a;f=c.objectSpread({onUnhandledError:function(){return null}},f,b,{pagination:c.objectSpread({pageStart:1,perPage:25},f.pagination,null!==(a=b.pagination)&& void 0!==a?a:{})}),g()},a.getConfig=i;var c=b(39037),e=c.interopRequireDefault(b(86248)),f={onUnhandledError:function(){},pagination:{pageStart:1,perPage:25}};function g(){return h.apply(this,arguments)}function h(){return(h=c.asyncToGenerator(e.default.mark(function a(){var c;return e.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:try{(c=b(32937)).config&&!c.config.onUnhandledError&&(c.config.onUnhandledError=function(a){return f.onUnhandledError(a,"rxjs")})}catch(d){}case 1:case"end":return a.stop()}},a)}))).apply(this,arguments)}function i(){return f}},39106:function(d,b,a){"use strict";b.Z=function(r,j){var a=c.slicedToArray(e.useState(void 0),2),k=a[0],s=a[1],b=c.slicedToArray(e.useState(),2),l=b[0],t=b[1],d=c.slicedToArray(e.useState(!1),2),m=d[0],u=d[1],i=c.slicedToArray(e.useState(!1),2),n=i[0],v=i[1],o=c.slicedToArray(e.useState(function(){return new f.Subject}),1),p=o[0];e.useEffect(function(){var a=p.pipe(g.switchMap(function(a){var b=a.callback,d=a.args;return s(void 0),t(void 0),v(!1),u(!0),b.apply(void 0,c.toConsumableArray(d))}),g.tap({next:function(a){s(function(){return a}),t(void 0),u(!1)},error:function(a){h.getConfig().onUnhandledError(a,"hooks"),s(null),t(a),u(!1)},complete:function(){v(!0),u(!1)}})).subscribe();return function(){return a.unsubscribe()}},[p]);var q=e.useCallback(function(){for(var b=arguments.length,c=new Array(b),a=0;a<b;a++)c[a]=arguments[a];u(!0),p.next({callback:r,args:c,deps:j})},j);return[q,k,l,n,m]};var c=a(39037),e=c.interopRequireWildcard(a(27378)),f=a(32937),g=a(19978),h=a(70010)},32311:function(g,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return f},meta:function(){return e}});var h=a(27378),i=a(35318),j=a(56100),k=a(16784),l=a(77340),m=a(80850),n=a(52641),o=a(80598),p=a(59266),q=a(98021),r=a(39106);function s(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function t(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||u(a,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(a,c){if(a){if("string"==typeof a)return s(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return s(a,c)}}var e={name:"useObservableCallback",tableOfContents:{depth:0,children:[{depth:1,slug:"#useobservablecallback",title:"useObservableCallback",children:[{depth:2,slug:"#como-usar",title:"Como usar"},{depth:2,slug:"#cuidados",title:"Cuidados"},{depth:2,slug:"#par\xe2metros-e-retorno",title:"Par\xe2metros e Retorno"}]}]}},v={meta:e};function f(b){var c=b.components,a=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(b,["components"]);return(0,i.kt)("wrapper",Object.assign({},v,a,{components:c,mdxType:"MDXLayout"}),(0,i.kt)("h1",Object.assign({},{id:"useobservablecallback"}),"useObservableCallback"),(0,i.kt)("p",null,"Retorn um callback que dar\xe1 Subscribe e retornar\xe1 o resultado de um Observable e quando o componente desmonta (unmount) tamb\xe9m d\xe1 unsubscribe,\ndiminuindo assim o risco de Memory Leak. ",(0,i.kt)("strong",{parentName:"p"},"Como useEffect que retorna o valor do Observable")),(0,i.kt)("h2",Object.assign({},{id:"como-usar"}),"Como usar"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"const [callback, value, error, completed, loading] = useObservableCallback(() => userService.get(), []);\n\nreturn (\n  <div>\n    {loading ? 'Carregando' : ''}\n    {value}\n    <button onClick={callback}>iniciar</button>\n  </div>\n);\n")),(0,i.kt)(j.X,{__position:0,code:"() => {\n  const [reset, setReset] = useState()\n  const [callback, value, error, completed, loading] = useObservableCallback(\n    () =>\n      interval(1000).pipe(\n        take(5),\n        map((v) => v + 1),\n      ),\n    [reset],\n  )\n  const onReset = useCallback(() => setReset(Date.now()), [])\n  return (\n    <div>\n      <Typography>Value: {value ? value : 'undefined'}</Typography>\n      <Typography>Loading: {loading.toString()}</Typography>\n      <Typography marginBottom>Completed: {completed.toString()}</Typography>\n      <Button onClick={callback}>Iniciar</Button>\n    </div>\n  )\n}",scope:{props:a,useState:h.useState,useCallback:h.useCallback,Playground:j.X,interval:k.F,of:l.of,delay:m.g,take:n.q,map:o.U,Button:p.default,Typography:q.default,useObservableCallback:r.Z,meta:e},mdxType:"Playground"},function(){var b=(0,h.useState)(),c=b[0],j=b[1],a=t((0,r.Z)(function(){return(0,k.F)(1e3).pipe((0,n.q)(5),(0,o.U)(function(a){return a+1}))},[c]),5),d=a[0],e=a[1],f=(a[2],a[3]),g=a[4];return(0,h.useCallback)(function(){return j(Date.now())},[]),(0,i.kt)("div",null,(0,i.kt)(q.default,{mdxType:"Typography"},"Value: ",e||"undefined"),(0,i.kt)(q.default,{mdxType:"Typography"},"Loading: ",g.toString()),(0,i.kt)(q.default,{marginBottom:!0,mdxType:"Typography"},"Completed: ",f.toString()),(0,i.kt)(p.default,{onClick:d,mdxType:"Button"},"Iniciar"))}),(0,i.kt)("h2",Object.assign({},{id:"cuidados"}),"Cuidados"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Erros")," ocorridos ser\xe3o automaticamentes logados (n\xe3o tratados) se as o ",(0,i.kt)("strong",{parentName:"li"},"onUnhandledError")," no ",(0,i.kt)("strong",{parentName:"li"},"setHoustonHooksConfig"),"\nfor setado, mas se utilizar o operador catchError esse erro n\xe3o ser\xe1 logado pois foi previamente tratado,\nnesse caso o log deve ser feito manualmente."),(0,i.kt)("li",{parentName:"ul"},"O valor inicial ser\xe1 ",(0,i.kt)("strong",{parentName:"li"},"undefined"),", lembre-se de tratar isso quando estiver usando:")),(0,i.kt)(j.X,{__position:1,code:"() => {\n  const [reset, setReset] = useState()\n  const [user, error, completed, loading] = useObservableCallback(\n    () => of({ name: 'Eduzz' }).pipe(delay(2000)),\n    [reset],\n  )\n  const onReset = useCallback(() => setReset(Date.now()), [])\n  return (\n    <div>\n      <Typography>Value: {user && user.name}</Typography>\n      <Typography>Loading: {loading.toString()}</Typography>\n      <Button onClick={onReset} variant=\"text\">\n        Reset\n      </Button>\n    </div>\n  )\n}",scope:{props:a,useState:h.useState,useCallback:h.useCallback,Playground:j.X,interval:k.F,of:l.of,delay:m.g,take:n.q,map:o.U,Button:p.default,Typography:q.default,useObservableCallback:r.Z,meta:e},mdxType:"Playground"},function(){var b=(0,h.useState)(),d=b[0],g=b[1],a=t((0,r.Z)(function(){return(0,l.of)({name:"Eduzz"}).pipe((0,m.g)(2e3))},[d]),4),c=a[0],e=(a[1],a[2],a[3]),f=(0,h.useCallback)(function(){return g(Date.now())},[]);return(0,i.kt)("div",null,(0,i.kt)(q.default,{mdxType:"Typography"},"Value: ",c&&c.name),(0,i.kt)(q.default,{mdxType:"Typography"},"Loading: ",e.toString()),(0,i.kt)(p.default,{onClick:f,variant:"text",mdxType:"Button"},"Reset"))}),(0,i.kt)("h2",Object.assign({},{id:"par\xe2metros-e-retorno"}),"Par\xe2metros e Retorno"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/**\n * @param observableCallback Fun\xe7\xe3o que retorna um Observable\n * @param deps Lista de depend\xeancias\n * @returns [\n *    callback: callback que inicia o Observable\n *    value: valor de retorno do Observable,\n *    error: se ocorrer um erro, ele ser\xe1 passado aqui,\n *    complete: boolean se o observable foi completado ou n\xe3o,\n *    loading: boolean se esta carregando ou n\xe3o, assim que o primeiro valor vier ele ser\xe1 false\n * ]\n */\nexport default function useObservableCallback<T, F extends (...args: any[]) => Observable<T>>(\n  observableCallback: F,\n  deps: React.DependencyList\n): [(...a: Parameters<F>) => void, ExtractObservableResult<ReturnType<F>>, any, boolean, boolean];\n")))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/hooks/useObservableCallback/index.mdx"};for(var d in c)window[d]=c[d]},16784:function(c,b,a){"use strict";a.d(b,{F:function(){return f}});var d=a(75310),e=a(42193);function f(a,b){return void 0===a&&(a=0),void 0===b&&(b=d.z),a<0&&(a=0),(0,e.H)(a,a,b)}}},function(a){a.O(0,[4526,9914,9961,8194,9978,5783,8482,7978,3188,9774,2888,179],function(){return a(a.s=89231)}),_N_E=a.O()}])