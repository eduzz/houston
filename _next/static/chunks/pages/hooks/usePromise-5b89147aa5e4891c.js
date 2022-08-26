(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8464],{74014:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/usePromise",function(){return c(7519)}])},50146:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return j}});var d=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=g(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var h=e?Object.getOwnPropertyDescriptor(a,f):null;h&&(h.get||h.set)?Object.defineProperty(d,f,h):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}(c(27378)),e=c(98184);function f(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function g(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(g=function(a){return a?c:b})(a)}function h(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(a,b)||i(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(a,b){if(a){if("string"==typeof a)return f(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return f(a,b)}}function j(a,b){var c=h(d.useState(!0),2),f=c[0],g=c[1],i=h(d.useState(),2),j=i[0],k=i[1],l=h(d.useState(),2),m=l[0],n=l[1];return d.useEffect(function(){var b=!0;return g(!0),n(void 0),a(function(){return b}).then(function(a){b&&k(function(){return a})}).catch(function(a){(0,e.getConfig)().onUnhandledError(a,"hooks"),b&&n(a)}).finally(function(){return g(!1)}),function(){b=!1}},b),[j,m,f]}},7519:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return n},meta:function(){return l}});var d=c(31373),e=c(52050),f=c(27378),g=c(35318),h=c(56100),i=c(30222),j=c(38861),k=c(50146),l={name:"usePromise",tableOfContents:{depth:0,children:[{depth:1,slug:"#usepromise",title:"usePromise",children:[{depth:2,slug:"#como-usar",title:"Como usar"},{depth:2,slug:"#setando-um-estado-extra",title:"Setando um estado extra"},{depth:2,slug:"#cuidados",title:"Cuidados"},{depth:2,slug:"#par\xe2metros-e-retorno",title:"Par\xe2metros e Retorno"}]}]}},m={meta:l};function n(a){var b=a.components,c=(0,d.Z)(a,["components"]);return(0,g.kt)("wrapper",Object.assign({},m,c,{components:b,mdxType:"MDXLayout"}),(0,g.kt)("h1",Object.assign({},{id:"usepromise"}),"usePromise"),(0,g.kt)("p",null,"D\xe1 Subscribe e retorna o resultado de uma promise e quando o componente desmonta (unmount) tamb\xe9m d\xe1 unsubscribe,\ndiminuindo assim o risco de Memory Leak. ",(0,g.kt)("strong",{parentName:"p"},"Como useEffect que retorna o valor da Promise")),(0,g.kt)("h2",Object.assign({},{id:"como-usar"}),"Como usar"),(0,g.kt)("pre",null,(0,g.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"const [value, error, loading] = usePromise(() => userService.get(), []);\n\nreturn (\n  <div>\n    {loading ? 'Carregando' : ''}\n    {value}\n  </div>\n);\n")),(0,g.kt)(h.X,{__position:0,code:"() => {\n  const [reset, setReset] = useState()\n  const [value, error, loading] = usePromise(\n    () => new Promise((resolve) => setTimeout(() => resolve('ol\xe1'), 2000)),\n    [reset],\n  )\n  const onReset = useCallback(() => setReset(Date.now()), [])\n  return (\n    <div>\n      <Typography>Value: {value}</Typography>\n      <Typography>Loading: {loading.toString()}</Typography>\n      <Button onClick={onReset} variant=\"text\">\n        Reset\n      </Button>\n    </div>\n  )\n}",scope:{props:c,useState:f.useState,useCallback:f.useCallback,Playground:h.X,Button:i.default,Typography:j.default,usePromise:k.default,meta:l},mdxType:"Playground"},function(){var a=(0,f.useState)(),b=a[0],c=a[1],d=(0,e.Z)((0,k.default)(function(){return new Promise(function(a){return setTimeout(function(){return a("ol\xe1")},2e3)})},[b]),3),h=d[0],l=(d[1],d[2]),m=(0,f.useCallback)(function(){return c(Date.now())},[]);return(0,g.kt)("div",null,(0,g.kt)(j.default,{mdxType:"Typography"},"Value: ",h),(0,g.kt)(j.default,{mdxType:"Typography"},"Loading: ",l.toString()),(0,g.kt)(i.default,{onClick:m,variant:"text",mdxType:"Button"},"Reset"))}),(0,g.kt)("h2",Object.assign({},{id:"setando-um-estado-extra"}),"Setando um estado extra"),(0,g.kt)("p",null,"Quando necess\xe1rio setar um estado extra sempre verique a fun\xe7\xe3o ",(0,g.kt)("strong",{parentName:"p"},"isSubscribe"),", ele retornar\xe1 se o componente ainda est\xe1\nmontado e assim evitar\xe1 ",(0,g.kt)("strong",{parentName:"p"},"Memory Leak"),"."),(0,g.kt)("pre",null,(0,g.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"const [other, setOther] = useState();\nconst [value, error, loading] = usePromise(async isSubscribe => {\n  const result = await userService.get();\n  if (isSubscribe()) {\n    setOther(result.otherValue);\n  }\n  return result;\n}, []);\n\nreturn (\n  <div>\n    {loading ? 'Carregando' : ''}\n    {value}\n  </div>\n);\n")),(0,g.kt)("h2",Object.assign({},{id:"cuidados"}),"Cuidados"),(0,g.kt)("ul",null,(0,g.kt)("li",{parentName:"ul"},(0,g.kt)("strong",{parentName:"li"},"Erros")," ocorridos ser\xe3o automaticamentes logados e as o ",(0,g.kt)("strong",{parentName:"li"},"onUnhandledError")," no ",(0,g.kt)("strong",{parentName:"li"},"setHoustonHooksConfig"),"\nfor setado."),(0,g.kt)("li",{parentName:"ul"},"O valor inicial ser\xe1 ",(0,g.kt)("strong",{parentName:"li"},"undefined"),", lembre-se de tratar isso quando estiver usando.")),(0,g.kt)("h2",Object.assign({},{id:"par\xe2metros-e-retorno"}),"Par\xe2metros e Retorno"),(0,g.kt)("pre",null,(0,g.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/**\n * @param promiseGenerator Fun\xe7\xe3o que retorna uma Promise\n * @param deps Lista de depend\xeancias\n * @returns [\n *    value: valor de retorno do Promise,\n *    error: se ocorrer um erro, ele ser\xe1 passado aqui,\n *    loading: boolean se esta carregando ou n\xe3o\n * ]\n */\nexport default usePromise<T>(promiseGenerator: () => Promise<any>, deps: React.DependencyList): [T, any, boolean];\n")))}n.isMDXComponent=!0;var o={editThisPagePath:"src/pages/hooks/usePromise/index.mdx"};for(var p in o)window[p]=o[p]},52050:function(a,b,c){"use strict";c.d(b,{Z:function(){return f}});var d=c(82126),e=c(12164);function f(a,b){return function(a){if(Array.isArray(a))return a}(a)||(0,d.Z)(a,b)||(0,e.Z)(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(a){a.O(0,[4526,2198,5918,4183,4109,9774,2888,179],function(){var b;return a(a.s=74014)}),_N_E=a.O()}])