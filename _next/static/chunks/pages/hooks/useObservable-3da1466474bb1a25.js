(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4261],{43713:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/useObservable",function(){return n(68781)}])},98184:function(e,t,n){"use strict";function r(e,t,n,r,o,a,u){try{var i=e[a](u),s=i.value}catch(l){n(l);return}i.done?t(s):Promise.resolve(s).then(r,o)}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return i},getConfig:function(){return l}});var u={onUnhandledError:function(e){console.error(e)},pagination:{pageStart:1,perPage:25}};function i(e){var t,n,r;n=a({},u,e),r=(r={pagination:a({pageStart:1,perPage:25},u.pagination,null!==(t=e.pagination)&&void 0!==t?t:{})},r),Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(r)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}),u=n,function(){s.apply(this,arguments)}()}function s(){var e;return e=function(){var e,t,r,o,a,i,s,l,c,p;return t=this,r=function(t){try{(e=n(32937)).config&&!e.config.onUnhandledError&&(e.config.onUnhandledError=function(e){return u.onUnhandledError(e,"rxjs")})}catch(r){}return[2]},o=function(e){return function(t){return a([e,t])}},a=function(e){if(i)throw TypeError("Generator is already executing.");for(;p;)try{if(i=1,s&&(l=2&e[0]?s.return:e[0]?s.throw||((l=s.return)&&l.call(s),0):s.next)&&!(l=l.call(s,e[1])).done)return l;switch(s=0,l&&(e=[2&e[0],l.value]),e[0]){case 0:case 1:l=e;break;case 4:return p.label++,{value:e[1],done:!1};case 5:p.label++,s=e[1],e=[0];continue;case 7:e=p.ops.pop(),p.trys.pop();continue;default:if(!(l=(l=p.trys).length>0&&l[l.length-1])&&(6===e[0]||2===e[0])){p=0;continue}if(3===e[0]&&(!l||e[1]>l[0]&&e[1]<l[3])){p.label=e[1];break}if(6===e[0]&&p.label<l[1]){p.label=l[1],l=e;break}if(l&&p.label<l[2]){p.label=l[2],p.ops.push(e);break}l[2]&&p.ops.pop(),p.trys.pop();continue}e=r.call(t,p)}catch(n){e=[6,n],s=0}finally{i=l=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}},p={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]},c={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c},(s=function(){var t=this,n=arguments;return new Promise(function(o,a){var u=e.apply(t,n);function i(e){r(u,o,a,i,s,"next",e)}function s(e){r(u,o,a,i,s,"throw",e)}i(void 0)})}).apply(this,arguments)}function l(){return u}},83775:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}(n(27378)),o=n(98184);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],u=!0,i=!1;try{for(o=o.call(e);!(u=(n=o.next()).done)&&(a.push(n.value),!t||a.length!==t);u=!0);}catch(s){i=!0,r=s}finally{try{u||null==o.return||o.return()}finally{if(i)throw r}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){var n=i(r.useState(void 0),2),a=n[0],u=n[1],s=i(r.useState(),2),l=s[0],c=s[1],p=i(r.useState(!0),2),d=p[0],f=p[1],b=i(r.useState(!1),2),y=b[0],g=b[1],m=r.useCallback(e,t);return r.useEffect(function(){u(void 0),c(void 0),g(!1),f(!0);var e=m().subscribe({next:function(e){u(function(){return e}),c(void 0),f(!1)},error:function(e){(0,o.getConfig)().onUnhandledError(e,"hooks"),u(void 0),c(e),f(!1)},complete:function(){g(!0),f(!1)}});return function(){return e.unsubscribe()}},[m]),[a,l,y,d]}},68781:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v},meta:function(){return g}});var r=n(31373),o=n(52050),a=n(27378),u=n(35318),i=n(56100),s=n(16784),l=n(77340),c=n(80850),p=n(52641),d=n(80598),f=n(30222),b=n(38861),y=n(83775),g={name:"useObservable",tableOfContents:{depth:0,children:[{depth:1,slug:"#useobservable",title:"useObservable",children:[{depth:2,slug:"#como-usar",title:"Como usar"},{depth:2,slug:"#cuidados",title:"Cuidados"},{depth:2,slug:"#par\xe2metros-e-retorno",title:"Par\xe2metros e Retorno"}]}]}},m={meta:g};function v(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,u.kt)("wrapper",Object.assign({},m,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",Object.assign({},{id:"useobservable"}),"useObservable"),(0,u.kt)("p",null,"D\xe1 Subscribe e retorna o resultado de um Observable e quando o componente desmonta (unmount) tamb\xe9m d\xe1 unsubscribe,\ndiminuindo assim o risco de Memory Leak. ",(0,u.kt)("strong",{parentName:"p"},"Como useEffect que retorna o valor do Observable")),(0,u.kt)("h2",Object.assign({},{id:"como-usar"}),"Como usar"),(0,u.kt)("pre",null,(0,u.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"const [value, error, completed, loading] = useObservable(() => userService.get(), []);\n\nreturn (\n  <div>\n    {loading ? 'Carregando' : ''}\n    {value}\n  </div>\n);\n")),(0,u.kt)(i.X,{__position:0,code:"() => {\n  const [reset, setReset] = useState()\n  const [value, error, completed, loading] = useObservable(\n    () =>\n      interval(1000).pipe(\n        take(5),\n        map((v) => v + 1),\n      ),\n    [reset],\n  )\n  const onReset = useCallback(() => setReset(Date.now()), [])\n  return (\n    <div>\n      <Typography>Value: {value ? value : 'undefined'}</Typography>\n      <Typography>Loading: {loading.toString()}</Typography>\n      <Typography marginBottom>Completed: {completed.toString()}</Typography>\n      <Button onClick={onReset}>Reset</Button>\n    </div>\n  )\n}",scope:{props:n,useState:a.useState,useCallback:a.useCallback,Playground:i.X,interval:s.F,of:l.of,delay:c.g,take:p.q,map:d.U,Button:f.Z,Typography:b.default,useObservable:y.default,meta:g},mdxType:"Playground"},function(){var e=(0,a.useState)(),t=e[0],n=e[1],r=(0,o.Z)((0,y.default)(function(){return(0,s.F)(1e3).pipe((0,p.q)(5),(0,d.U)(function(e){return e+1}))},[t]),4),i=r[0],l=(r[1],r[2]),c=r[3],g=(0,a.useCallback)(function(){return n(Date.now())},[]);return(0,u.kt)("div",null,(0,u.kt)(b.default,{mdxType:"Typography"},"Value: ",i||"undefined"),(0,u.kt)(b.default,{mdxType:"Typography"},"Loading: ",c.toString()),(0,u.kt)(b.default,{marginBottom:!0,mdxType:"Typography"},"Completed: ",l.toString()),(0,u.kt)(f.Z,{onClick:g,mdxType:"Button"},"Reset"))}),(0,u.kt)("h2",Object.assign({},{id:"cuidados"}),"Cuidados"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("strong",{parentName:"li"},"Erros")," ocorridos ser\xe3o automaticamentes logados (n\xe3o tratados) se as o ",(0,u.kt)("strong",{parentName:"li"},"onUnhandledError")," no ",(0,u.kt)("strong",{parentName:"li"},"setHoustonHooksConfig"),"\nfor setado, mas se utilizar o operador catchError esse erro n\xe3o ser\xe1 logado pois foi previamente tratado,\nnesse caso o log deve ser feito manualmente."),(0,u.kt)("li",{parentName:"ul"},"O valor inicial ser\xe1 ",(0,u.kt)("strong",{parentName:"li"},"undefined"),", lembre-se de tratar isso quando estiver usando:")),(0,u.kt)(i.X,{__position:1,code:"() => {\n  const [reset, setReset] = useState()\n  const [user, error, completed, loading] = useObservable(\n    () => of({ name: 'Eduzz' }).pipe(delay(2000)),\n    [reset],\n  )\n  const onReset = useCallback(() => setReset(Date.now()), [])\n  return (\n    <div>\n      <Typography>Value: {user ? user.name : 'undefined'}</Typography>\n      <Typography>Loading: {loading.toString()}</Typography>\n      <Typography marginBottom>Completed: {completed.toString()}</Typography>\n      <Button onClick={onReset}>Reset</Button>\n    </div>\n  )\n}",scope:{props:n,useState:a.useState,useCallback:a.useCallback,Playground:i.X,interval:s.F,of:l.of,delay:c.g,take:p.q,map:d.U,Button:f.Z,Typography:b.default,useObservable:y.default,meta:g},mdxType:"Playground"},function(){var e=(0,a.useState)(),t=e[0],n=e[1],r=(0,o.Z)((0,y.default)(function(){return(0,l.of)({name:"Eduzz"}).pipe((0,c.g)(2e3))},[t]),4),i=r[0],s=(r[1],r[2]),p=r[3],d=(0,a.useCallback)(function(){return n(Date.now())},[]);return(0,u.kt)("div",null,(0,u.kt)(b.default,{mdxType:"Typography"},"Value: ",i?i.name:"undefined"),(0,u.kt)(b.default,{mdxType:"Typography"},"Loading: ",p.toString()),(0,u.kt)(b.default,{marginBottom:!0,mdxType:"Typography"},"Completed: ",s.toString()),(0,u.kt)(f.Z,{onClick:d,mdxType:"Button"},"Reset"))}),(0,u.kt)("h2",Object.assign({},{id:"par\xe2metros-e-retorno"}),"Par\xe2metros e Retorno"),(0,u.kt)("pre",null,(0,u.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/**\n * @param observableGenerator Fun\xe7\xe3o que retorna um Observable\n * @param deps Lista de depend\xeancias\n * @returns [\n *    value: valor de retorno do Observable,\n *    error: se ocorrer um erro, ele ser\xe1 passado aqui,\n *    complete: boolean se o observable foi completado ou n\xe3o,\n *    loading: boolean se esta carregando ou n\xe3o, assim que o primeiro valor vier ele ser\xe1 false\n * ]\n */\nexport default useObservable<T>(observableGenerator: () => Observable<T>, deps: React.DependencyList): [T, any, boolean, boolean];\n")))}v.isMDXComponent=!0;var h={editThisPagePath:"src/pages/hooks/useObservable/index.mdx"};for(var O in h)window[O]=h[O]},10719:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},82126:function(e,t,n){"use strict";function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,{Z:function(){return r}})},52050:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(82126),o=n(12164);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||(0,r.Z)(e,t)||(0,o.Z)(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},12164:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(10719);function o(e,t){if(e){if("string"==typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return(0,r.Z)(e,t)}}}},function(e){e.O(0,[4526,756,2885,2937,8238,8482,4109,2995,9774,2888,179],function(){return e(e.s=43713)}),_N_E=e.O()}]);