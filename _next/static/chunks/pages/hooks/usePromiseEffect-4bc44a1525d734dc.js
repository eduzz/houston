(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2465],{6570:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/usePromiseEffect",function(){return t(90843)}])},98184:function(e,n,t){"use strict";function r(e,n,t,r,o,i,a){try{var u=e[i](a),s=u.value}catch(c){t(c);return}u.done?n(s):Promise.resolve(s).then(r,o)}function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){o(e,n,t[n])})}return e}Object.defineProperty(n,"__esModule",{value:!0}),!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{default:function(){return u},getConfig:function(){return c}});var a={onUnhandledError:function(e){console.error(e)},pagination:{pageStart:1,perPage:25}};function u(e){var n,t,r;t=i({},a,e),r=(r={pagination:i({pageStart:1,perPage:25},a.pagination,null!==(n=e.pagination)&&void 0!==n?n:{})},r),Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),a=t,function(){s.apply(this,arguments)}()}function s(){var e;return e=function(){var e,n,r,o,i,u,s,c,f,l;return n=this,r=function(n){try{(e=t(32937)).config&&!e.config.onUnhandledError&&(e.config.onUnhandledError=function(e){return a.onUnhandledError(e,"rxjs")})}catch(r){}return[2]},o=function(e){return function(n){return i([e,n])}},i=function(e){if(u)throw TypeError("Generator is already executing.");for(;l;)try{if(u=1,s&&(c=2&e[0]?s.return:e[0]?s.throw||((c=s.return)&&c.call(s),0):s.next)&&!(c=c.call(s,e[1])).done)return c;switch(s=0,c&&(e=[2&e[0],c.value]),e[0]){case 0:case 1:c=e;break;case 4:return l.label++,{value:e[1],done:!1};case 5:l.label++,s=e[1],e=[0];continue;case 7:e=l.ops.pop(),l.trys.pop();continue;default:if(!(c=(c=l.trys).length>0&&c[c.length-1])&&(6===e[0]||2===e[0])){l=0;continue}if(3===e[0]&&(!c||e[1]>c[0]&&e[1]<c[3])){l.label=e[1];break}if(6===e[0]&&l.label<c[1]){l.label=c[1],c=e;break}if(c&&l.label<c[2]){l.label=c[2],l.ops.push(e);break}c[2]&&l.ops.pop(),l.trys.pop();continue}e=r.call(n,l)}catch(t){e=[6,t],s=0}finally{u=c=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}},l={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]},f={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(f[Symbol.iterator]=function(){return this}),f},(s=function(){var n=this,t=arguments;return new Promise(function(o,i){var a=e.apply(n,t);function u(e){r(a,o,i,u,s,"next",e)}function s(e){r(a,o,i,u,s,"throw",e)}u(void 0)})}).apply(this,arguments)}function c(){return a}},44151:function(e,n,t){"use strict";Object.defineProperty(n,"Z",{enumerable:!0,get:function(){return a}});var r=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i(n);if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(r,a,u):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}(t(27378)),o=t(98184);function i(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(i=function(e){return e?t:n})(e)}function a(e,n){r.useEffect(function(){var n=!0;return e(function(){return n}).catch(function(e){throw(0,o.getConfig)().onUnhandledError(e,"hooks"),e}),function(){n=!1}},n)}},90843:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p},meta:function(){return f}});var r=t(31373),o=t(27378),i=t(35318),a=t(56100),u=t(30222),s=t(38861),c=t(44151),f={name:"usePromiseEffect",tableOfContents:{depth:0,children:[{depth:1,slug:"#usepromiseeffect",title:"usePromiseEffect",children:[{depth:2,slug:"#como-usar",title:"Como usar"},{depth:2,slug:"#cuidados",title:"Cuidados"},{depth:2,slug:"#par\xe2metros-e-retorno",title:"Par\xe2metros e Retorno"}]}]}},l={meta:f};function p(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",Object.assign({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",Object.assign({},{id:"usepromiseeffect"}),"usePromiseEffect"),(0,i.kt)("p",null,"D\xe1 Subscribe em uma promise e quando o componente desmonta (unmount) tamb\xe9m d\xe1 unsubscribe,\ndiminuindo assim o risco de Memory Leak. ",(0,i.kt)("strong",{parentName:"p"},"Como um useEffect")," ele n\xe3o ger\xe1 estado diminuindo o n\xfamero de renders."),(0,i.kt)("h2",Object.assign({},{id:"como-usar"}),"Como usar"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"usePromiseEffect(async isSubscribed => {\n  await userService.get();\n\n  if (isSubscribed()) {\n    //set some state\n  }\n}, []);\n\nreturn (\n  <div>\n    {loading ? 'Carregando' : ''}\n    {value}\n  </div>\n);\n")),(0,i.kt)(a.X,{__position:0,code:"() => {\n  const [loading, setLoading] = useState(false)\n  usePromiseEffect((isSubscribed) => {\n    setLoading(true)\n    return new Promise((resolve) =>\n      setTimeout(() => resolve('ol\xe1'), 2000),\n    ).then(() => {\n      if (isSubscribed()) setLoading(false)\n    })\n  }, [])\n  return <div>Loading: {loading.toString()}</div>\n}",scope:{props:t,useState:o.useState,useCallback:o.useCallback,Playground:a.X,Button:u.Z,Typography:s.default,usePromiseEffect:c.Z,meta:f},mdxType:"Playground"},function(){var e=(0,o.useState)(!1),n=e[0],t=e[1];return(0,c.Z)(function(e){return t(!0),new Promise(function(e){return setTimeout(function(){return e("ol\xe1")},2e3)}).then(function(){e()&&t(!1)})},[]),(0,i.kt)("div",null,"Loading: ",n.toString())}),(0,i.kt)("h2",Object.assign({},{id:"cuidados"}),"Cuidados"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Erros")," ocorridos ser\xe3o automaticamentes logados e as o ",(0,i.kt)("strong",{parentName:"li"},"onUnhandledError")," no ",(0,i.kt)("strong",{parentName:"li"},"setHoustonHooksConfig"),"\nfor setado.")),(0,i.kt)("h2",Object.assign({},{id:"par\xe2metros-e-retorno"}),"Par\xe2metros e Retorno"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/**\n * @param promiseGenerator Fun\xe7\xe3o que retorna uma Promise\n * @param deps Lista de depend\xeancias\n * @returns undefined\n */\nexport default usePromiseEffect<T>(promiseGenerator: (isSubscribed: () => boolean) => Promise<T>, deps: React.DependencyList): void;\n")))}p.isMDXComponent=!0;var d={editThisPagePath:"src/pages/hooks/usePromiseEffect/index.mdx"};for(var m in d)window[m]=d[m]}},function(e){e.O(0,[4526,756,2885,2937,4109,2995,9774,2888,179],function(){return e(e.s=6570)}),_N_E=e.O()}]);