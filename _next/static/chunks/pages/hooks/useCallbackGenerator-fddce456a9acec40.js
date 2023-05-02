(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2301],{58638:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/useCallbackGenerator",function(){return t(11156)}])},97267:function(e,n,t){"use strict";Object.defineProperty(n,"Z",{enumerable:!0,get:function(){return u}});var a=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=o(n);if(t&&t.has(e))return t.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var i=r?Object.getOwnPropertyDescriptor(e,s):null;i&&(i.get||i.set)?Object.defineProperty(a,s,i):a[s]=e[s]}return a.default=e,t&&t.set(e,a),a}(t(27378));function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=Array(n);t<n;t++)a[t]=e[t];return a}function o(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(o=function(e){return e?t:n})(e)}function s(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||i(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}}function u(e,n){var t,r,o=(function(e){if(Array.isArray(e))return e}(t=a.useState(function(){return{}}))||function(e,n){var t,a,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o=[],s=!0,i=!1;try{for(r=r.call(e);!(s=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);s=!0);}catch(u){i=!0,a=u}finally{try{s||null==r.return||r.return()}finally{if(i)throw a}}return o}}(t,1)||i(t,1)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],u=a.useCallback(function(n){for(var t=arguments.length,a=Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];return o[n]||(o[n]={args:a,func:function(){for(var n=arguments.length,t=Array(n),r=0;r<n;r++)t[r]=arguments[r];return e.apply(void 0,s(a).concat(s(t)))}}),o[n].func},[]);return a.useEffect(function(){Object.keys(o).forEach(function(n){o[n].func=function(){for(var t=arguments.length,a=Array(t),r=0;r<t;r++)a[r]=arguments[r];return e.apply(void 0,s(o[n].args).concat(s(a)))}})},n),u}},11156:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d},meta:function(){return c}});var a=t(31373);t(27378);var r=t(35318),o=t(56100),s=t(30222),i=t(38861),u=t(97267),c={name:"useCallbackGenerator",tableOfContents:{depth:0,children:[{depth:1,slug:"#usecallbackgenerator",title:"useCallbackGenerator",children:[{depth:2,slug:"#como-usar",title:"Como usar"},{depth:2,slug:"#mais-par\xe2metros",title:"Mais Par\xe2metros"},{depth:2,slug:"#par\xe2metros-e-retorno",title:"Par\xe2metros e Retorno"}]}]}},l={meta:c};function d(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",Object.assign({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",Object.assign({},{id:"usecallbackgenerator"}),"useCallbackGenerator"),(0,r.kt)("p",null,"Um gerador de callbacks que faz ",(0,r.kt)("a",Object.assign({parentName:"p"},{href:"https://rodrigorgs.github.io/aulas/mata56/aula14-currying"}),"Currying"),"(apenas um n\xedvel)\ndos argumentos passados, \xfatil quando temos que uma mesma fun\xe7\xe3o mudando apenas alguns par\xe2metros. \xc9 necess\xe1rio uma key,\npara poder criar cache (useCallback padr\xe3o) dessa fun\xe7\xe3o."),(0,r.kt)("h2",Object.assign({},{id:"como-usar"}),"Como usar"),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"const navigateTo = useCallbackGenerator(\n  (screen: string) => navigation.navigate(screen, { invoice }),\n  [invoice, navigation]\n);\n\n//...\n<button onClick={navigateTo('details-key', 'details')}>Detalhes<button>\n<button onClick={navigateTo('payment-key', 'payment')}>Pagamento<button>\n")),(0,r.kt)("h2",Object.assign({},{id:"mais-par\xe2metros"}),"Mais Par\xe2metros"),(0,r.kt)("p",null,"\xc9 poss\xedvel passar mais de um valor, como podem ver no exemplo a seguir, passo 2 par\xe2metros o 3 vir\xe1 do\nonClick, ou seja, ele ir\xe1 gerar um callback com a assinatura assim: ",(0,r.kt)("strong",{parentName:"p"},"(e: : SyntheticEvent) => void"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"const navigateTo = useCallbackGenerator(\n  (screen: string, value: number, e: SyntheticEvent) => navigation.navigate(screen, { invoice }),\n  [invoice, navigation]\n);\n\n//...\n<button onClick={navigateTo('details-key', 'details', 1)}>Detalhes<button>\n<button onClick={navigateTo('payment-key', 'payment', 2)}>Pagamento<button>\n")),(0,r.kt)(o.X,{__position:0,code:"() => {\n  const alertGenerator = useCallbackGenerator((message, e) => {\n    alert(`${message}\\n\\nevent:${e.type}`)\n  }, [])\n  return (\n    <div>\n      <Button onClick={alertGenerator('first', 'Ol\xe1')}>Ol\xe1</Button>\n      {'  '}\n      <Button onClick={alertGenerator('second', 'Oi')}>Oi</Button>\n      {'  '}\n      <Button\n        onClick={alertGenerator(\n          'third',\n          'Gato escondido com rabo de fora t\xe1 mais escondido que rabo escondido com gato de fora.',\n        )}\n      >\n        Trava-L\xedngua\n      </Button>\n    </div>\n  )\n}",scope:{props:t,Playground:o.X,Button:s.Z,Typography:i.default,useCallbackGenerator:u.Z,meta:c},mdxType:"Playground"},function(){var e=(0,u.Z)(function(e,n){alert("".concat(e,"\n\nevent:").concat(n.type))},[]);return(0,r.kt)("div",null,(0,r.kt)(s.Z,{onClick:e("first","Ol\xe1"),mdxType:"Button"},"Ol\xe1"),"  ",(0,r.kt)(s.Z,{onClick:e("second","Oi"),mdxType:"Button"},"Oi"),"  ",(0,r.kt)(s.Z,{onClick:e("third","Gato escondido com rabo de fora t\xe1 mais escondido que rabo escondido com gato de fora."),mdxType:"Button"},"Trava-L\xedngua"))}),(0,r.kt)("h2",Object.assign({},{id:"par\xe2metros-e-retorno"}),"Par\xe2metros e Retorno"),(0,r.kt)("pre",null,(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"/**\n * Fun\xe7\xe3o geradora de fun\xe7\xf5es com parametros cascateados\n * @param generator fun\xe7\xe3o que ser\xe1 executada com o parametros passados\n * @param deps\n * @returns Fun\xe7\xe3o geradora:\n *   @param key: unique key usado para cache\n *   @param args: argumentos que ser\xe3o pr\xe9-definidos\n */\nexport default function useCallbackGenerator<F extends (...args: any[]) => any>(\n  generator: F,\n  deps: React.DependencyList\n): (key: string, ...args: ParametersOptional<F>) => (...callArgs: any) => ReturnType<F>;\n")))}d.isMDXComponent=!0;var p={editThisPagePath:"src/pages/hooks/useCallbackGenerator/index.mdx"};for(var f in p)window[f]=p[f]}},function(e){e.O(0,[4526,756,2885,4109,2995,9774,2888,179],function(){return e(e.s=58638)}),_N_E=e.O()}]);