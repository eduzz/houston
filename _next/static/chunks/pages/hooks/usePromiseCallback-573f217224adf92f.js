(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[708],{15694:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/usePromiseCallback",function(){return c(27212)}])},98184:function(d,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),!function(c,a){for(var b in a)Object.defineProperty(c,b,{get:a[b],enumerable:!0})}(b,{default:function(){return i},getConfig:function(){return l}});var a,e=(a=c(86248),a&&a.__esModule?a:{default:a});function f(c,d,e,f,g,h,i){try{var a=c[h](i),b=a.value}catch(j){e(j);return}a.done?d(b):Promise.resolve(b).then(f,g)}function g(b){for(var c=arguments,a=1;a<arguments.length;a++)!function(d){var e=null!=c[d]?c[d]:{},a=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(e).filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),a.forEach(function(f){var a,c,d;a=b,c=f,d=e[f],c in a?Object.defineProperty(a,c,{value:d,enumerable:!0,configurable:!0,writable:!0}):a[c]=d})}(a);return b}var h={onUnhandledError:function(a){console.error(a)},pagination:{pageStart:1,perPage:25}};function i(d){var b,c,a;h=(c=g({},h,d),a={pagination:g({pageStart:1,perPage:25},h.pagination,null!==(b=d.pagination)&& void 0!==b?b:{})},a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(a)):(function(b,d){var a=Object.keys(b);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(b);a.push.apply(a,c)}return a})(Object(a)).forEach(function(b){Object.defineProperty(c,b,Object.getOwnPropertyDescriptor(a,b))}),c),j()}function j(){return k.apply(this,arguments)}function k(){var a;return(k=(a=e.default.mark(function a(){var b;return e.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:try{(b=c(32937)).config&&!b.config.onUnhandledError&&(b.config.onUnhandledError=function(a){return h.onUnhandledError(a,"rxjs")})}catch(d){}case 1:case"end":return a.stop()}},a)}),function(){var b=this,c=arguments;return new Promise(function(e,g){var h=a.apply(b,c);function d(a){f(h,e,g,d,i,"next",a)}function i(a){f(h,e,g,d,i,"throw",a)}d(void 0)})})).apply(this,arguments)}function l(){return h}},20898:function(c,b,a){"use strict";Object.defineProperty(b,"Z",{get:function(){return i},enumerable:!0});var d=function(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=g();if(b&&b.has(a))return b.get(a);var c={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in a)if(Object.prototype.hasOwnProperty.call(a,d)){var e=f?Object.getOwnPropertyDescriptor(a,d):null;e&&(e.get||e.set)?Object.defineProperty(c,d,e):c[d]=a[d]}return c.default=a,b&&b.set(a,c),c}(a(27378)),e=a(98184);function f(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=Array(a);b<a;b++)d[b]=c[b];return d}function g(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return g=function(){return a},a}var h=0;function i(b,a){var c=d.useRef(!0),g=d.useRef();return d.useEffect(function(){return function(){c.current=!1}},[]),d.useCallback(function(){for(var i=arguments.length,j=Array(i),a=0;a<i;a++)j[a]=arguments[a];var d,l=++h;g.current=l;var k=b.apply(void 0,[function(){return c.current&&g.current===l}].concat(function(a){if(Array.isArray(a))return f(a)}(d=j)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(d)||function d(a,c){if(a){if("string"==typeof a)return f(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return f(a,c)}}(d)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()));return k.catch(function(a){throw(0,e.getConfig)().onUnhandledError(a,"hooks"),a}),k},a)}},12103:function(f,b,d){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{get:function(){return h},enumerable:!0});var c,e,a,g,h=(a=(c=d(45336),e=b,Object.keys(c).forEach(function(a){"default"===a||Object.prototype.hasOwnProperty.call(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:function(){return c[a]}})}),c),a&&a.__esModule?a:{default:a}).default},30222:function(g,c,b){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{get:function(){return m},enumerable:!0});var a,h=b(24246),d=k(b(27378)),e=k(b(12103)),i=(a=b(15244),a&&a.__esModule?a:{default:a});function j(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return j=function(){return a},a}function k(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=j();if(b&&b.has(a))return b.get(a);var c={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in a)if(Object.prototype.hasOwnProperty.call(a,d)){var e=f?Object.getOwnPropertyDescriptor(a,d):null;e&&(e.get||e.set)?Object.defineProperty(c,d,e):c[d]=a[d]}return c.default=a,b&&b.set(a,c),c}function l(){var a,b,c=(a=["\n    border: none;\n    cursor: pointer;\n    text-transform: none;\n    height: ","rem;\n    min-width: ","rem;\n    padding: ",";\n    border-radius: ",";\n    font-weight: ",";\n    font-family: ",";\n    line-height: ",";\n    font-size: ",";\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n\n    :not(:focus) {\n      transition: 0.3s;\n    }\n\n    :focus {\n      outline: solid "," ",";\n    }\n\n    &.--contained {\n      background-color: ",";\n      color: ",";\n\n      &:hover:not(:disabled),\n      &:focus {\n        background-color: ",";\n      }\n    }\n\n    &.--outlined {\n      background-color: transparent;\n      border: "," solid;\n      border-color: ",";\n      color: ",";\n\n      &:hover:not(:disabled),\n      &:focus {\n        background-color: ",";\n      }\n    }\n\n    &.--text {\n      background-color: ",";\n      color: ",";\n\n      &:hover:not(:disabled),\n      &:focus {\n        background-color: ",";\n      }\n    }\n\n    &.--disabled {\n      border: none;\n      background-color: ",";\n      color: ",";\n      cursor: default;\n    }\n\n    &.--full-width {\n      width: 100%;\n    }\n\n    & > .__loader {\n      position: absolute;\n      left: 50%;\n      transform: translate(-50%, 0);\n    }\n\n    & > .--hidden {\n      visibility: hidden;\n    }\n\n    & > .__startIcon {\n      margin-right: ",";\n    }\n\n    & > .__endIcon {\n      margin-left: ",";\n    }\n\n    & > .__startIcon,\n    & > .__endIcon {\n      line-height: 0;\n    }\n\n    & > .__startIcon > svg,\n    & > .__endIcon > svg {\n      vertical-align: middle;\n      font-size: ","rem;\n    }\n  "],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return l=function(){return c},c}var f=d.forwardRef(function(a,p){var d,b,g=a.children,j=a.disabled,f=void 0!==j&&j,k=a.startIcon,l=a.endIcon,m=a.variant,n=a.loading,c=void 0!==n&&n,q=a.className,r=a.fullWidth,o=a.type,s=function(a,d){if(null==a)return{};var b,c,e=function g(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(a,["children","disabled","startIcon","endIcon","variant","loading","className","fullWidth","type"]);return(0,h.jsxs)("button",(d=function(b){for(var c=arguments,a=1;a<arguments.length;a++)!function(d){var e=null!=c[d]?c[d]:{},a=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(e).filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),a.forEach(function(f){var a,c,d;a=b,c=f,d=e[f],c in a?Object.defineProperty(a,c,{value:d,enumerable:!0,configurable:!0,writable:!0}):a[c]=d})}(a);return b}({ref:p,role:"button",className:(0,e.cx)(q,"--".concat(null!=m?m:"contained"),{"--fullWidth":r},{"--disabled":f||c}),type:void 0===o?"button":o},s),b={disabled:f||c,"aria-disabled":f,children:[!!k&&(0,h.jsx)("span",{className:(0,e.cx)("__startIcon",{"--hidden":c}),children:k}),!c&&(0,h.jsx)("span",{className:"__text",children:g}),c&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("span",{className:"__loader",children:(0,h.jsx)(i.default,{size:20,color:"inherit"})}),(0,h.jsx)("span",{className:"__text --hidden",children:g})]}),!!l&&(0,h.jsx)("span",{className:(0,e.cx)("__endIcon",{"--hidden":c}),children:l})]},b=null!=b?b:{},Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(b)):(function(b,d){var a=Object.keys(b);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(b);a.push.apply(a,c)}return a})(Object(b)).forEach(function(a){Object.defineProperty(d,a,Object.getOwnPropertyDescriptor(b,a))}),d))}),m=(0,e.default)(f,{label:"houston-button"})(function(b){var a=b.theme;return(0,e.css)(l(),a.pxToRem(48),a.pxToRem(96),a.spacing.squish.xxs,a.border.radius.xs,a.font.weight.semibold,a.font.family.base,a.line.height.default,a.font.size.xs,a.border.width.sm,a.feedbackColor.informative.pure,a.brandColor.primary.pure,a.neutralColor.high.pure,a.hexToRgba(a.brandColor.primary.pure,a.opacity.level[8]),a.border.width.xs,a.neutralColor.low.pure,a.neutralColor.low.pure,a.hexToRgba(a.neutralColor.low.pure,a.opacity.level[2]),a.hexToRgba(a.neutralColor.low.pure,a.opacity.level[0]),a.neutralColor.low.pure,a.hexToRgba(a.neutralColor.low.pure,a.opacity.level[2]),a.hexToRgba(a.neutralColor.low.pure,a.opacity.level[2]),a.hexToRgba(a.neutralColor.low.pure,a.opacity.level[6]),a.spacing.inline.nano,a.spacing.inline.nano,a.pxToRem(24))})},15244:function(g,c,b){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{get:function(){return o},enumerable:!0});var a,h=b(24246),d=function(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=j();if(b&&b.has(a))return b.get(a);var c={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in a)if(Object.prototype.hasOwnProperty.call(a,d)){var e=f?Object.getOwnPropertyDescriptor(a,d):null;e&&(e.get||e.set)?Object.defineProperty(c,d,e):c[d]=a[d]}return c.default=a,b&&b.set(a,c),c}(b(12103)),i=(a=b(96576),a&&a.__esModule?a:{default:a});function j(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return j=function(){return a},a}function k(b,a){return a||(a=b.slice(0)),Object.freeze(Object.defineProperties(b,{raw:{value:Object.freeze(a)}}))}function e(){var a=k(["\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(270deg); }\n"]);return e=function(){return a},a}function l(){var a=k(["\n  0% { stroke-dashoffset: ","; }\n  50% { stroke-dashoffset: ","; transform: rotate(135deg); }\n  100% { stroke-dashoffset: ","; transform: rotate(450deg); }\n"]);return l=function(){return a},a}function m(){var a=k(["\n    animation: "," 1.4s linear infinite;\n    color: ",";\n\n    & > circle {\n      stroke: currentColor;\n      stroke-width: ",";\n      stroke-dasharray: ",";\n      stroke-dashoffset: 0;\n      transform-origin: center;\n      animation: "," 1.4s ease-in-out infinite;\n    }\n  "]);return m=function(){return a},a}function f(){var a=k(["\n  ","\n"]);return f=function(){return a},a}var n=(0,d.keyframes)(e()),o=(0,d.default)(function(c){var e=c.className,d=c.size,a=void 0===d?65:d,b=a/65*30;return(0,h.jsx)("svg",{className:e,width:"".concat(a,"px"),height:"".concat(a,"px"),viewBox:"0 0 ".concat(a+1," ").concat(a+1),children:(0,h.jsx)("circle",{fill:"none",strokeLinecap:"round",cx:b+.1*b,cy:b+.1*b,r:b})})},{label:"houston-loader"})(f(),function(b){var a,g=b.theme,e=b.color,f=b.size,c=void 0===f?65:f;return(0,d.css)(m(),n,"inherit"===e?"inherit":(0,i.default)(g,e).pure,c/65*6,c/65*187,(a=c,(0,d.keyframes)(l(),a/65*187,a/65*46.75,a/65*187)))})},96576:function(b,a){"use strict";function c(b){var a=arguments.length>1&& void 0!==arguments[1]?arguments[1]:"primary";return["low","high"].includes(a)?b.neutralColor[a]:["positive","negative","warning","informative"].includes(a)?b.feedbackColor[a]:b.brandColor[a]}Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{get:function(){return c},enumerable:!0})},27212:function(g,b,a){"use strict";a.r(b),a.d(b,{default:function(){return f},meta:function(){return e}});var h=a(31373),i=a(3204),j=a(27378),k=a(35318),l=a(56100),m=a(30222),n=a(38861),o=a(20898),e={name:"usePromiseCallback",tableOfContents:{depth:0,children:[{depth:1,slug:"#usepromisecallback",title:"usePromiseCallback",children:[{depth:2,slug:"#como-usar",title:"Como usar"},{depth:2,slug:"#cuidados",title:"Cuidados"},{depth:2,slug:"#par\xe2metros-e-retorno",title:"Par\xe2metros e Retorno"}]}]}},p={meta:e};function f(a){var c=a.components,b=(0,h.Z)(a,["components"]);return(0,k.kt)("wrapper",Object.assign({},p,b,{components:c,mdxType:"MDXLayout"}),(0,k.kt)("h1",Object.assign({},{id:"usepromisecallback"}),"usePromiseCallback"),(0,k.kt)("p",null,"Retorn um callback que dar\xe1 Subscribe e retornar\xe1 o resultado de uma promise e quando o componente desmonta (unmount) tamb\xe9m d\xe1\nunsubscribe, diminuindo assim o risco de Memory Leak. ",(0,k.kt)("strong",{parentName:"p"},"Como useEffect que retorna o valor da Promise")),(0,k.kt)("h2",Object.assign({},{id:"como-usar"}),"Como usar"),(0,k.kt)("pre",null,(0,k.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"const [loading, setLoading] = useState();\nconst callback = usePromiseCallback(async isSubscribe => {\n  setLoading(true);\n  await userService.get();\n  // Se for setar um estado sempre verifique o isSubscribe, para evitar Memory Leak, e subsequentes chamadas\n  // far\xe3o que chamadas anteriores n\xe3o alterem estados.\n  if (isSubscribe()) setLoading(false);\n}, []);\n\nreturn (\n  <div>\n    {loading ? 'Carregando' : ''}\n    <button onClick={callback}>iniciar</button>\n  </div>\n);\n")),(0,k.kt)("p",null,"Veja o exemplo abaixo:"),(0,k.kt)(l.X,{__position:0,code:"() => {\n  const callCounter = useRef(0)\n  const [reset, setReset] = useState()\n  const [loading, setLoading] = useState(false)\n  const [completed, setCompleted] = useState([])\n  const [ignored, setIgnored] = useState([])\n  const callback = usePromiseCallback(\n    (isSubscribe) => {\n      const currentCall = ++callCounter.current\n      setLoading(true)\n      return new Promise((resolve) =>\n        setTimeout(() => resolve('ol\xe1'), 2000),\n      ).then(() => {\n        if (isSubscribe()) {\n          setLoading(false)\n          setCompleted((completed) => [...completed, currentCall])\n        } else {\n          setIgnored((ignored) => [...ignored, currentCall])\n        }\n      })\n    },\n    [reset],\n  )\n  return (\n    <div>\n      <p>Loading: {loading.toString()}</p>\n      <p>cliques completos: {JSON.stringify(completed)}</p>\n      <p>cliques ignorados: {JSON.stringify(ignored)}</p>\n      <Button onClick={callback}>\n        Iniciar (Tente clicar mais de uma vez)\n      </Button>\n    </div>\n  )\n}",scope:{props:b,useState:j.useState,useCallback:j.useCallback,useRef:j.useRef,Playground:l.X,Button:m.default,Typography:n.default,usePromiseCallback:o.Z,meta:e},mdxType:"Playground"},function(){var n=(0,j.useRef)(0),a=(0,j.useState)(),e=a[0];a[1];var b=(0,j.useState)(!1),f=b[0],p=b[1],c=(0,j.useState)([]),g=c[0],q=c[1],d=(0,j.useState)([]),h=d[0],r=d[1],l=(0,o.Z)(function(a){var b=++n.current;return p(!0),new Promise(function(a){return setTimeout(function(){return a("ol\xe1")},2e3)}).then(function(){a()?(p(!1),q(function(a){return(0,i.Z)(a).concat([b])})):r(function(a){return(0,i.Z)(a).concat([b])})})},[e]);return(0,k.kt)("div",null,(0,k.kt)("p",null,"Loading: ",f.toString()),(0,k.kt)("p",null,"cliques completos: ",JSON.stringify(g)),(0,k.kt)("p",null,"cliques ignorados: ",JSON.stringify(h)),(0,k.kt)(m.default,{onClick:l,mdxType:"Button"},"Iniciar (Tente clicar mais de uma vez)"))}),(0,k.kt)("h2",Object.assign({},{id:"cuidados"}),"Cuidados"),(0,k.kt)("ul",null,(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("strong",{parentName:"li"},"Erros")," ocorridos ser\xe3o automaticamentes logados e as o ",(0,k.kt)("strong",{parentName:"li"},"onUnhandledError")," no ",(0,k.kt)("strong",{parentName:"li"},"setHoustonHooksConfig"),"\nfor setado.")),(0,k.kt)("h2",Object.assign({},{id:"par\xe2metros-e-retorno"}),"Par\xe2metros e Retorno"),(0,k.kt)("pre",null,(0,k.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/**\n * @param promiseCallback Fun\xe7\xe3o que retorna uma Promise, pode receber parametros\n * @param deps Lista de depend\xeancias\n * @returns [\n *    callback: callback para iniciar a promise,\n *    value: valor de retorno do Promise,\n *    error: se ocorrer um erro, ele ser\xe1 passado aqui,\n *    loading: boolean se esta carregando ou n\xe3o\n * ]\n */\nexport default function usePromiseCallback<T, F extends (...args: any[]) => Promise<T>>(\n  promiseCallback: F,\n  deps: React.DependencyList\n): [(...a: Parameters<F>) => Promise<T>, T, any, boolean];\n")))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/hooks/usePromiseCallback/index.mdx"};for(var d in c)window[d]=c[d]}},function(a){a.O(0,[4526,430,8194,4109,8861,9774,2888,179],function(){var b;return a(a.s=15694)}),_N_E=a.O()}])