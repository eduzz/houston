(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2301],{2398:function(a){function b(){return a.exports=b=Object.assign||function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d},a.exports.__esModule=!0,a.exports.default=a.exports,b.apply(this,arguments)}a.exports=b,a.exports.__esModule=!0,a.exports.default=a.exports},7914:function(a){a.exports=function(a){return a&&a.__esModule?a:{"default":a}},a.exports.__esModule=!0,a.exports.default=a.exports},15600:function(a){a.exports=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d},a.exports.__esModule=!0,a.exports.default=a.exports},87651:function(j,d,c){"use strict";c.r(d),c.d(d,{cache:function(){return w},css:function(){return u},cx:function(){return p},flush:function(){return n},getRegisteredStyles:function(){return r},hydrate:function(){return o},injectGlobal:function(){return s},keyframes:function(){return t},merge:function(){return q},sheet:function(){return v}});var g=c(8786),k=c(74343),h=c(53211);function l(a,b){if(void 0===a.inserted[b.name])return a.insert("",b,a.sheet,!0)}function i(c,d,b){var a=[],e=(0,h.fp)(c,a,b);return a.length<2?b:e+d(a)}var e,b,f,m=function g(f){for(var c="",d=0;d<f.length;d++){var b=f[d];if(null!=b){var a=void 0;switch(typeof b){case"boolean":break;case"object":if(Array.isArray(b))a=g(b);else for(var e in a="",b)b[e]&&e&&(a&&(a+=" "),a+=e);break;default:a=b}a&&(c&&(c+=" "),c+=a)}}return c},a=(e={key:"css"},(b=(0,g.Z)(e)).sheet.speedy=function(a){this.isSpeedy=a},b.compat=!0,{css:f=function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];var e=(0,k.O)(d,b.registered,void 0);return(0,h.My)(b,e,!1),b.key+"-"+e.name},cx:function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];return i(b.registered,f,m(d))},injectGlobal:function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];var e=(0,k.O)(d,b.registered);l(b,e)},keyframes:function(){for(var d=arguments.length,e=new Array(d),a=0;a<d;a++)e[a]=arguments[a];var c=(0,k.O)(e,b.registered),f="animation-"+c.name;return l(b,{name:c.name,styles:"@keyframes "+f+"{"+c.styles+"}"}),f},hydrate:function(a){a.forEach(function(a){b.inserted[a]=!0})},flush:function(){b.registered={},b.inserted={},b.sheet.flush()},sheet:b.sheet,cache:b,getRegisteredStyles:h.fp.bind(null,b.registered),merge:i.bind(null,b.registered,f)}),n=a.flush,o=a.hydrate,p=a.cx,q=a.merge,r=a.getRegisteredStyles,s=a.injectGlobal,t=a.keyframes,u=a.css,v=a.sheet,w=a.cache},18651:function(d,a,b){"use strict";var c=b(7914);Object.defineProperty(a,"__esModule",{value:!0}),a.breakpointKeys=void 0,a.default=function(a){const{values:c={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:d="px",step:n=5}=a,i=(0,e.default)(a,g),b=h(c),j=Object.keys(b);function k(a){const b="number"==typeof c[a]?c[a]:a;return`@media (min-width:${b}${d})`}function l(a){const b="number"==typeof c[a]?c[a]:a;return`@media (max-width:${b-n/100}${d})`}function m(a,e){const b=j.indexOf(e);return`@media (min-width:${"number"==typeof c[a]?c[a]:a}${d}) and (max-width:${(-1!==b&&"number"==typeof c[j[b]]?c[j[b]]:e)-n/100}${d})`}return(0,f.default)({keys:j,values:b,up:k,down:l,between:m,only:function(a){return j.indexOf(a)+1<j.length?m(a,j[j.indexOf(a)+1]):k(a)},not:function(a){const b=j.indexOf(a);return 0===b?k(j[1]):b===j.length-1?l(j[b]):m(a,j[j.indexOf(a)+1]).replace("@media","@media not all and")},unit:d},i)};var e=c(b(15600)),f=c(b(2398));const g=["values","unit","step"];a.breakpointKeys=["xs","sm","md","lg","xl"];const h=b=>{const a=Object.keys(b).map(a=>({key:a,val:b[a]}))||[];return a.sort((a,b)=>a.val-b.val),a.reduce((b,a)=>(0,f.default)({},b,{[a.key]:a.val}),{})}},97462:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/useCallbackGenerator",function(){return c(11156)}])},35729:function(d,b,a){"use strict";b.Z=function(d,a){var f=c.slicedToArray(e.useState(function(){return{}}),1)[0],b=e.useCallback(function(b){for(var e=arguments.length,g=new Array(e>1?e-1:0),a=1;a<e;a++)g[a-1]=arguments[a];return f[b]||(f[b]={args:g,func:function(){for(var b=arguments.length,e=new Array(b),a=0;a<b;a++)e[a]=arguments[a];return d.apply(void 0,c.toConsumableArray(g).concat(c.toConsumableArray(e)))}}),f[b].func},[]);return e.useEffect(function(){Object.keys(f).forEach(function(a){f[a].func=function(){for(var e=arguments.length,g=new Array(e),b=0;b<e;b++)g[b]=arguments[b];return d.apply(void 0,c.toConsumableArray(f[a].args).concat(c.toConsumableArray(g)))}})},a),b};var c=a(39037),e=c.interopRequireWildcard(a(27378))},59266:function(f,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),g=a(24246),d=c.interopRequireWildcard(a(27378)),h=c.interopRequireDefault(a(77562)),i=c.interopRequireDefault(a(29532)),e=d.memo(function(a){var d=a.children,e=a.disabled,f=a.variant,j=a.color,m=a.startIcon,k=a.loading,b=void 0!==k&&k,l=a.loadingText,n=c.objectWithoutProperties(a,["children","disabled","variant","color","startIcon","loading","loadingText"]);return g.jsxs(h.default,c.objectSpread({},n,{disabled:void 0!==e&&e||b,startIcon:b?g.jsx(i.default,{size:18,color:"inherit"}):m,disableRipple:!0,disableFocusRipple:!0,disableElevation:!0,disableTouchRipple:!0,variant:void 0===f?"contained":f,color:void 0===j?"primary":j,children:[!b&&d,b&&(null!=l?l:d)]}))});b.default=e},98021:function(g,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),h=c.interopRequireWildcard(a(27378)),i=a(87651),d=c.interopRequireDefault(a(65388));function e(){var a=c.taggedTemplateLiteral(["\n  margin: 0;\n  font-size: ","px;\n  line-height: ",";\n  font-weight: ",";\n  margin-bottom: ",";\n\n  &.--variant-secondary {\n    color: ",";\n    font-size: ",";\n  }\n"]);return e=function(){return a},a}var f=d.default(function(a){var b=a.className,c=a.variant,e=a.id,f=a.children,d=a.component,g=a.onClick;return h.createElement(null!=d?d:"p",{id:e,onClick:g,className:i.cx(b,b,c&&"--variant-".concat(c))},f)})(e(),function(a){var c=a.theme,b=a.size;return c.textSize(null!=b?b:"normal")},function(a){var c=a.theme,b=a.lineHeight;return c.lineHeight(null!=b?b:"normal")},function(a){var c=a.theme,b=a.fontWeight;return c.fontWeight(null!=b?b:"regular")},function(a){var b=a.theme,c=a.marginBottom;return c?b.spacing(2):null},function(a){return a.theme.colors.grey[500]},function(a){return a.theme.textSize("small")});b.default=f},65388:function(k,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.breakpoints=a.cx=a.clsx=void 0;var c=b(39037),d=b(87651),e=c.interopRequireDefault(b(94408)),f=c.interopRequireDefault(b(18651)),g=d.cx;a.clsx=g;var h=d.cx;a.cx=h;var i=f.default({});a.breakpoints=i;var j=e.default;a.default=j},11156:function(g,b,a){"use strict";a.r(b),a.d(b,{meta:function(){return e},"default":function(){return f}}),a(27378);var h=a(35318),i=a(56100),j=a(59266),k=a(98021),l=a(35729),e={name:"useCallbackGenerator",tableOfContents:{depth:0,children:[{depth:1,slug:"#usecallbackgenerator",title:"useCallbackGenerator",children:[{depth:2,slug:"#como-usar",title:"Como usar"},{depth:2,slug:"#mais-par\xe2metros",title:"Mais Par\xe2metros"},{depth:2,slug:"#par\xe2metros-e-retorno",title:"Par\xe2metros e Retorno"}]}]}},m={meta:e};function f(a){var c=a.components,b=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(a,["components"]);return(0,h.kt)("wrapper",Object.assign({},m,b,{components:c,mdxType:"MDXLayout"}),(0,h.kt)("h1",Object.assign({},{id:"usecallbackgenerator"}),"useCallbackGenerator"),(0,h.kt)("p",null,"Um gerador de callbacks que faz ",(0,h.kt)("a",Object.assign({parentName:"p"},{href:"https://rodrigorgs.github.io/aulas/mata56/aula14-currying"}),"Currying"),"(apenas um n\xedvel)\ndos argumentos passados, \xfatil quando temos que uma mesma fun\xe7\xe3o mudando apenas alguns par\xe2metros. \xc9 necess\xe1rio uma key,\npara poder criar cache (useCallback padr\xe3o) dessa fun\xe7\xe3o."),(0,h.kt)("h2",Object.assign({},{id:"como-usar"}),"Como usar"),(0,h.kt)("pre",null,(0,h.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"const navigateTo = useCallbackGenerator(\n  (screen: string) => navigation.navigate(screen, { invoice }),\n  [invoice, navigation]\n);\n\n//...\n<button onClick={navigateTo('details-key', 'details')}>Detalhes<button>\n<button onClick={navigateTo('payment-key', 'payment')}>Pagamento<button>\n")),(0,h.kt)("h2",Object.assign({},{id:"mais-par\xe2metros"}),"Mais Par\xe2metros"),(0,h.kt)("p",null,"\xc9 poss\xedvel passar mais de um valor, como podem ver no exemplo a seguir, passo 2 par\xe2metros o 3 vir\xe1 do\nonClick, ou seja, ele ir\xe1 gerar um callback com a assinatura assim: ",(0,h.kt)("strong",{parentName:"p"},"(e: : SyntheticEvent) => void"),"."),(0,h.kt)("pre",null,(0,h.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"const navigateTo = useCallbackGenerator(\n  (screen: string, value: number, e: SyntheticEvent) => navigation.navigate(screen, { invoice }),\n  [invoice, navigation]\n);\n\n//...\n<button onClick={navigateTo('details-key', 'details', 1)}>Detalhes<button>\n<button onClick={navigateTo('payment-key', 'payment', 2)}>Pagamento<button>\n")),(0,h.kt)(i.X,{__position:0,code:"() => {\n  const alertGenerator = useCallbackGenerator((message, e) => {\n    alert(`${message}\\n\\nevent:${e.type}`)\n  }, [])\n  return (\n    <div>\n      <Button onClick={alertGenerator('first', 'Ol\xe1')}>Ol\xe1</Button>\n      {'  '}\n      <Button onClick={alertGenerator('second', 'Oi')}>Oi</Button>\n      {'  '}\n      <Button\n        onClick={alertGenerator(\n          'third',\n          'Gato escondido com rabo de fora t\xe1 mais escondido que rabo escondido com gato de fora.',\n        )}\n      >\n        Trava-L\xedngua\n      </Button>\n    </div>\n  )\n}",scope:{props:b,Playground:i.X,Button:j.default,Typography:k.default,useCallbackGenerator:l.Z,meta:e},mdxType:"Playground"},function(){var a=(0,l.Z)(function(a,b){alert("".concat(a,"\n\nevent:").concat(b.type))},[]);return(0,h.kt)("div",null,(0,h.kt)(j.default,{onClick:a("first","Ol\xe1"),mdxType:"Button"},"Ol\xe1"),"  ",(0,h.kt)(j.default,{onClick:a("second","Oi"),mdxType:"Button"},"Oi"),"  ",(0,h.kt)(j.default,{onClick:a("third","Gato escondido com rabo de fora t\xe1 mais escondido que rabo escondido com gato de fora."),mdxType:"Button"},"Trava-L\xedngua"))}),(0,h.kt)("h2",Object.assign({},{id:"par\xe2metros-e-retorno"}),"Par\xe2metros e Retorno"),(0,h.kt)("pre",null,(0,h.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"/**\n * Fun\xe7\xe3o geradora de fun\xe7\xf5es com parametros cascateados\n * @param generator fun\xe7\xe3o que ser\xe1 executada com o parametros passados\n * @param deps\n * @returns Fun\xe7\xe3o geradora:\n *   @param key: unique key usado para cache\n *   @param args: argumentos que ser\xe3o pr\xe9-definidos\n */\nexport default function useCallbackGenerator<F extends (...args: any[]) => any>(\n  generator: F,\n  deps: React.DependencyList\n): (key: string, ...args: ParametersOptional<F>) => (...callArgs: any) => ReturnType<F>;\n")))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/hooks/useCallbackGenerator/index.mdx"};for(var d in c)window[d]=c[d]}},function(a){a.O(0,[4526,4356,9961,6557,2359,3245,9774,2888,179],function(){return a(a.s=97462)}),_N_E=a.O()}])