(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[708],{15694:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/usePromiseCallback",function(){return t(78727)}])},98184:function(e,n,t){"use strict";function r(e,n,t,r,o,a,i){try{var u=e[a](i),s=u.value}catch(c){t(c);return}u.done?n(s):Promise.resolve(s).then(r,o)}function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){o(e,n,t[n])})}return e}Object.defineProperty(n,"__esModule",{value:!0}),!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{default:function(){return s},getConfig:function(){return l}});var i=function(e,n){var t,r,o,a,i=function(e){return function(n){return u([e,n])}},u=function(a){if(t)throw TypeError("Generator is already executing.");for(;s;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=n.call(e,s)}catch(i){a=[6,i],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}},s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a},u={onUnhandledError:function(e){console.error(e)},pagination:{pageStart:1,perPage:25}};function s(e){var n,t,r;t=a({},u,e),r=(r={pagination:a({pageStart:1,perPage:25},u.pagination,null!==(n=e.pagination)&&void 0!==n?n:{})},r),Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),u=t,function(){c.apply(this,arguments)}()}function c(){var e;return e=function(){var e;return i(this,function(n){try{(e=t(32937)).config&&!e.config.onUnhandledError&&(e.config.onUnhandledError=function(e){return u.onUnhandledError(e,"rxjs")})}catch(r){}return[2]})},(c=function(){var n=this,t=arguments;return new Promise(function(o,a){var i=e.apply(n,t);function u(e){r(i,o,a,u,s,"next",e)}function s(e){r(i,o,a,u,s,"throw",e)}u(void 0)})}).apply(this,arguments)}function l(){return u}},20898:function(e,n,t){"use strict";Object.defineProperty(n,"Z",{enumerable:!0,get:function(){return s}});var r=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i(n);if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(r,a,u):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}(t(27378)),o=t(98184);function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function i(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(i=function(e){return e?t:n})(e)}var u=0;function s(e,n){var t=r.useRef(!0),i=r.useRef();return r.useEffect(function(){return function(){t.current=!1}},[]),r.useCallback(function(){for(var n=arguments.length,r=Array(n),s=0;s<n;s++)r[s]=arguments[s];var c,l=++u;i.current=l;var f=e.apply(void 0,[function(){return t.current&&i.current===l}].concat(function(e){if(Array.isArray(e))return a(e)}(r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,n){if(e){if("string"==typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,n)}}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()));return f.catch(function(e){throw(0,o.getConfig)().onUnhandledError(e,"hooks"),e}),f},n)}},78727:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g},meta:function(){return m}});var r=t(31373),o=t(10719),a=t(82126),i=t(12164);function u(e){return function(e){if(Array.isArray(e))return(0,o.Z)(e)}(e)||(0,a.Z)(e)||(0,i.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=t(27378),c=t(35318),l=t(56100),f=t(30222),p=t(38861),d=t(20898),m={name:"usePromiseCallback",tableOfContents:{depth:0,children:[{depth:1,slug:"#usepromisecallback",title:"usePromiseCallback",children:[{depth:2,slug:"#como-usar",title:"Como usar"},{depth:2,slug:"#cuidados",title:"Cuidados"},{depth:2,slug:"#par\xe2metros-e-retorno",title:"Par\xe2metros e Retorno"}]}]}},b={meta:m};function g(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,c.kt)("wrapper",Object.assign({},b,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",Object.assign({},{id:"usepromisecallback"}),"usePromiseCallback"),(0,c.kt)("p",null,"Retorn um callback que dar\xe1 Subscribe e retornar\xe1 o resultado de uma promise e quando o componente desmonta (unmount) tamb\xe9m d\xe1\nunsubscribe, diminuindo assim o risco de Memory Leak. ",(0,c.kt)("strong",{parentName:"p"},"Como useEffect que retorna o valor da Promise")),(0,c.kt)("h2",Object.assign({},{id:"como-usar"}),"Como usar"),(0,c.kt)("pre",null,(0,c.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"const [loading, setLoading] = useState();\nconst callback = usePromiseCallback(async isSubscribe => {\n  setLoading(true);\n  await userService.get();\n  // Se for setar um estado sempre verifique o isSubscribe, para evitar Memory Leak, e subsequentes chamadas\n  // far\xe3o que chamadas anteriores n\xe3o alterem estados.\n  if (isSubscribe()) setLoading(false);\n}, []);\n\nreturn (\n  <div>\n    {loading ? 'Carregando' : ''}\n    <button onClick={callback}>iniciar</button>\n  </div>\n);\n")),(0,c.kt)("p",null,"Veja o exemplo abaixo:"),(0,c.kt)(l.X,{__position:0,code:"() => {\n  const callCounter = useRef(0)\n  const [reset, setReset] = useState()\n  const [loading, setLoading] = useState(false)\n  const [completed, setCompleted] = useState([])\n  const [ignored, setIgnored] = useState([])\n  const callback = usePromiseCallback(\n    (isSubscribe) => {\n      const currentCall = ++callCounter.current\n      setLoading(true)\n      return new Promise((resolve) =>\n        setTimeout(() => resolve('ol\xe1'), 2000),\n      ).then(() => {\n        if (isSubscribe()) {\n          setLoading(false)\n          setCompleted((completed) => [...completed, currentCall])\n        } else {\n          setIgnored((ignored) => [...ignored, currentCall])\n        }\n      })\n    },\n    [reset],\n  )\n  return (\n    <div>\n      <p>Loading: {loading.toString()}</p>\n      <p>cliques completos: {JSON.stringify(completed)}</p>\n      <p>cliques ignorados: {JSON.stringify(ignored)}</p>\n      <Button onClick={callback}>\n        Iniciar (Tente clicar mais de uma vez)\n      </Button>\n    </div>\n  )\n}",scope:{props:t,useState:s.useState,useCallback:s.useCallback,useRef:s.useRef,Playground:l.X,Button:f.Z,Typography:p.default,usePromiseCallback:d.Z,meta:m},mdxType:"Playground"},function(){var e=(0,s.useRef)(0),n=(0,s.useState)(),t=n[0];n[1];var r=(0,s.useState)(!1),o=r[0],a=r[1],i=(0,s.useState)([]),l=i[0],p=i[1],m=(0,s.useState)([]),b=m[0],g=m[1],y=(0,d.Z)(function(n){var t=++e.current;return a(!0),new Promise(function(e){return setTimeout(function(){return e("ol\xe1")},2e3)}).then(function(){n()?(a(!1),p(function(e){return u(e).concat([t])})):g(function(e){return u(e).concat([t])})})},[t]);return(0,c.kt)("div",null,(0,c.kt)("p",null,"Loading: ",o.toString()),(0,c.kt)("p",null,"cliques completos: ",JSON.stringify(l)),(0,c.kt)("p",null,"cliques ignorados: ",JSON.stringify(b)),(0,c.kt)(f.Z,{onClick:y,mdxType:"Button"},"Iniciar (Tente clicar mais de uma vez)"))}),(0,c.kt)("h2",Object.assign({},{id:"cuidados"}),"Cuidados"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"Erros")," ocorridos ser\xe3o automaticamentes logados e as o ",(0,c.kt)("strong",{parentName:"li"},"onUnhandledError")," no ",(0,c.kt)("strong",{parentName:"li"},"setHoustonHooksConfig"),"\nfor setado.")),(0,c.kt)("h2",Object.assign({},{id:"par\xe2metros-e-retorno"}),"Par\xe2metros e Retorno"),(0,c.kt)("pre",null,(0,c.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/**\n * @param promiseCallback Fun\xe7\xe3o que retorna uma Promise, pode receber parametros\n * @param deps Lista de depend\xeancias\n * @returns [\n *    callback: callback para iniciar a promise,\n *    value: valor de retorno do Promise,\n *    error: se ocorrer um erro, ele ser\xe1 passado aqui,\n *    loading: boolean se esta carregando ou n\xe3o\n * ]\n */\nexport default function usePromiseCallback<T, F extends (...args: any[]) => Promise<T>>(\n  promiseCallback: F,\n  deps: React.DependencyList\n): [(...a: Parameters<F>) => Promise<T>, T, any, boolean];\n")))}g.isMDXComponent=!0;var y={editThisPagePath:"src/pages/hooks/usePromiseCallback/index.mdx"};for(var h in y)window[h]=y[h]},10719:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,{Z:function(){return r}})},82126:function(e,n,t){"use strict";function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}t.d(n,{Z:function(){return r}})},12164:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(10719);function o(e,n){if(e){if("string"==typeof e)return(0,r.Z)(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return(0,r.Z)(e,n)}}}},function(e){e.O(0,[4526,1866,2885,2937,4109,2995,9774,2888,179],function(){return e(e.s=15694)}),_N_E=e.O()}]);