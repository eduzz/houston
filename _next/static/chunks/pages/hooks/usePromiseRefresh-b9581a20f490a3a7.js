(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4951],{95101:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/usePromiseRefresh",function(){return c(19897)}])},50146:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return j}});var d=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=g(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var h=e?Object.getOwnPropertyDescriptor(a,f):null;h&&(h.get||h.set)?Object.defineProperty(d,f,h):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}(c(27378)),e=c(98184);function f(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function g(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(g=function(a){return a?c:b})(a)}function h(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(a,b)||i(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(a,b){if(a){if("string"==typeof a)return f(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return f(a,b)}}function j(a,b){var c=h(d.useState(!0),2),f=c[0],g=c[1],i=h(d.useState(),2),j=i[0],k=i[1],l=h(d.useState(),2),m=l[0],n=l[1];return d.useEffect(function(){var b=!0;return g(!0),a(function(){return b}).then(function(a){b&&k(function(){return a})}).catch(function(a){(0,e.getConfig)().onUnhandledError(a,"hooks"),b&&n(a)}).finally(function(){return g(!1)}),function(){b=!1}},b),[j,m,f]}},46178:function(a,b,c){"use strict";Object.defineProperty(b,"Z",{enumerable:!0,get:function(){return k}});var d,e=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=h(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}(c(27378)),f=(d=c(50146),d&&d.__esModule?d:{default:d});function g(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function h(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(h=function(a){return a?c:b})(a)}function i(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(a,b)||j(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(a,b){if(a){if("string"==typeof a)return g(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return g(a,b)}}function k(a,b){var c,d=i(e.useState(),2),h=d[0],k=d[1],l=i((0,f.default)(a,[h].concat(function(a){if(Array.isArray(a))return g(a)}(c=b)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(c)||j(c)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),3),m=l[0],n=l[1],o=l[2],p=(0,e.useCallback)(function(){return k(Date.now())},[]);return[m,n,o,p]}},19897:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return m},meta:function(){return k}});var d=c(31373),e=c(52050);c(27378);var f=c(35318),g=c(56100),h=c(30222),i=c(38861),j=c(46178),k={name:"usePromiseRefresh",tableOfContents:{depth:0,children:[{depth:1,slug:"#usepromiserefresh",title:"usePromiseRefresh",children:[{depth:2,slug:"#como-usar",title:"Como usar"},{depth:2,slug:"#cuidados",title:"Cuidados"},{depth:2,slug:"#par\xe2metros-e-retorno",title:"Par\xe2metros e Retorno"}]}]}},l={meta:k};function m(a){var b=a.components,c=(0,d.Z)(a,["components"]);return(0,f.kt)("wrapper",Object.assign({},l,c,{components:b,mdxType:"MDXLayout"}),(0,f.kt)("h1",Object.assign({},{id:"usepromiserefresh"}),"usePromiseRefresh"),(0,f.kt)("p",null,"Um ",(0,f.kt)("strong",{parentName:"p"},"usePromise")," que retorna uma fun\xe7\xe3o de refresh para recarregar a promisse, \xfatil na trativa de erros ou refresh."),(0,f.kt)("h2",Object.assign({},{id:"como-usar"}),"Como usar"),(0,f.kt)("pre",null,(0,f.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"const [value, error, loading, refresh] = usePromiseRefresh(() => userService.get(), []);\n\nreturn (\n  <div>\n    {loading ? 'Carregando' : ''}\n    {value}\n    <Button onClick={refresh} variant='text'>\n      Reset\n    </Button>\n  </div>\n);\n")),(0,f.kt)(g.X,{__position:0,code:"() => {\n  const [value, error, loading, refresh] = usePromiseRefresh(\n    () => new Promise((resolve) => setTimeout(() => resolve('ol\xe1'), 2000)),\n    [],\n  )\n  return (\n    <div>\n      <Typography>Value: {value}</Typography>\n      <Typography>Loading: {loading.toString()}</Typography>\n      <Button onClick={refresh} variant=\"text\">\n        Reset\n      </Button>\n    </div>\n  )\n}",scope:{props:c,Playground:g.X,Button:h.default,Typography:i.default,usePromiseRefresh:j.Z,meta:k},mdxType:"Playground"},function(){var a=(0,e.Z)((0,j.Z)(function(){return new Promise(function(a){return setTimeout(function(){return a("ol\xe1")},2e3)})},[]),4),b=a[0],c=(a[1],a[2]),d=a[3];return(0,f.kt)("div",null,(0,f.kt)(i.default,{mdxType:"Typography"},"Value: ",b),(0,f.kt)(i.default,{mdxType:"Typography"},"Loading: ",c.toString()),(0,f.kt)(h.default,{onClick:d,variant:"text",mdxType:"Button"},"Reset"))}),(0,f.kt)("h2",Object.assign({},{id:"cuidados"}),"Cuidados"),(0,f.kt)("ul",null,(0,f.kt)("li",{parentName:"ul"},(0,f.kt)("strong",{parentName:"li"},"Erros")," ocorridos ser\xe3o automaticamentes logados e as o ",(0,f.kt)("strong",{parentName:"li"},"onUnhandledError")," no ",(0,f.kt)("strong",{parentName:"li"},"setHoustonHooksConfig"),"\nfor setado."),(0,f.kt)("li",{parentName:"ul"},"O valor inicial ser\xe1 ",(0,f.kt)("strong",{parentName:"li"},"undefined"),", lembre-se de tratar isso quando estiver usando.")),(0,f.kt)("h2",Object.assign({},{id:"par\xe2metros-e-retorno"}),"Par\xe2metros e Retorno"),(0,f.kt)("pre",null,(0,f.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/**\n * @param promiseGenerator Fun\xe7\xe3o que retorna uma Promise\n * @param deps Lista de depend\xeancias\n * @returns [\n *    value: valor de retorno do Promise,\n *    error: se ocorrer um erro, ele ser\xe1 passado aqui,\n *    loading: boolean se esta carregando ou n\xe3o,\n *    refresh: function to refresh the data\n * ]\n */\nexport default usePromiseRefresh<T>(promiseGenerator: () => Promise<any>, deps: React.DependencyList): [T, any, boolean];\n")))}m.isMDXComponent=!0;var n={editThisPagePath:"src/pages/hooks/usePromiseRefresh/index.mdx"};for(var o in n)window[o]=n[o]},52050:function(a,b,c){"use strict";c.d(b,{Z:function(){return f}});var d=c(82126),e=c(12164);function f(a,b){return function(a){if(Array.isArray(a))return a}(a)||(0,d.Z)(a,b)||(0,e.Z)(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(a){a.O(0,[4526,222,7281,4183,4109,9774,2888,179],function(){var b;return a(a.s=95101)}),_N_E=a.O()}])