(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2301],{87651:function(j,d,c){"use strict";c.r(d),c.d(d,{cache:function(){return w},css:function(){return u},cx:function(){return p},flush:function(){return n},getRegisteredStyles:function(){return r},hydrate:function(){return o},injectGlobal:function(){return s},keyframes:function(){return t},merge:function(){return q},sheet:function(){return v}});var g=c(8786),k=c(74343),h=c(53211);function l(a,b){if(void 0===a.inserted[b.name])return a.insert("",b,a.sheet,!0)}function i(c,d,b){var a=[],e=(0,h.fp)(c,a,b);return a.length<2?b:e+d(a)}var e,b,f,m=function g(f){for(var c="",d=0;d<f.length;d++){var b=f[d];if(null!=b){var a=void 0;switch(typeof b){case"boolean":break;case"object":if(Array.isArray(b))a=g(b);else for(var e in a="",b)b[e]&&e&&(a&&(a+=" "),a+=e);break;default:a=b}a&&(c&&(c+=" "),c+=a)}}return c},a=(e={key:"css"},(b=(0,g.Z)(e)).sheet.speedy=function(a){this.isSpeedy=a},b.compat=!0,{css:f=function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];var e=(0,k.O)(d,b.registered,void 0);return(0,h.My)(b,e,!1),b.key+"-"+e.name},cx:function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];return i(b.registered,f,m(d))},injectGlobal:function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];var e=(0,k.O)(d,b.registered);l(b,e)},keyframes:function(){for(var d=arguments.length,e=new Array(d),a=0;a<d;a++)e[a]=arguments[a];var c=(0,k.O)(e,b.registered),f="animation-"+c.name;return l(b,{name:c.name,styles:"@keyframes "+f+"{"+c.styles+"}"}),f},hydrate:function(a){a.forEach(function(a){b.inserted[a]=!0})},flush:function(){b.registered={},b.inserted={},b.sheet.flush()},sheet:b.sheet,cache:b,getRegisteredStyles:h.fp.bind(null,b.registered),merge:i.bind(null,b.registered,f)}),n=a.flush,o=a.hydrate,p=a.cx,q=a.merge,r=a.getRegisteredStyles,s=a.injectGlobal,t=a.keyframes,u=a.css,v=a.sheet,w=a.cache},97462:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/useCallbackGenerator",function(){return c(11156)}])},35729:function(d,b,a){"use strict";b.Z=function(d,a){var f=c.slicedToArray(e.useState(function(){return{}}),1)[0],b=e.useCallback(function(b){for(var e=arguments.length,g=new Array(e>1?e-1:0),a=1;a<e;a++)g[a-1]=arguments[a];return f[b]||(f[b]={args:g,func:function(){for(var b=arguments.length,e=new Array(b),a=0;a<b;a++)e[a]=arguments[a];return d.apply(void 0,c.toConsumableArray(g).concat(c.toConsumableArray(e)))}}),f[b].func},[]);return e.useEffect(function(){Object.keys(f).forEach(function(a){f[a].func=function(){for(var e=arguments.length,g=new Array(e),b=0;b<e;b++)g[b]=arguments[b];return d.apply(void 0,c.toConsumableArray(f[a].args).concat(c.toConsumableArray(g)))}})},a),b};var c=a(39037),e=c.interopRequireWildcard(a(27378))},16847:function(e,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=b(39037).interopRequireWildcard(b(96342));Object.keys(c).forEach(function(b){"default"!==b&&"__esModule"!==b&&(b in a&&a[b]===c[b]||Object.defineProperty(a,b,{enumerable:!0,get:function(){return c[b]}}))});var d=c.default;a.default=d},96342:function(n,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.breakpoints=a.css=a.clsx=a.cx=a.keyframes=void 0;var e=b(39037),c=b(87651),d=b(10043),f=e.interopRequireDefault(b(94408)),g=b(60921),h=d.keyframes;a.keyframes=h;var i=c.cx;a.cx=i;var j=c.cx;a.clsx=j;var k=d.css;a.css=k;var l=g.breakpoinstUtils;a.breakpoints=l;var m=f.default;a.default=m},59266:function(f,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),g=a(24246);c.interopRequireWildcard(a(27378));var d=c.interopRequireWildcard(a(16847)),h=a(77590),i=c.interopRequireDefault(a(72150));function j(){var a=c.taggedTemplateLiteral(["\n    border: none;\n    cursor: pointer;\n    text-transform: none;\n    padding: 10px 16px;\n    height: 40px;\n    border-radius: ",";\n    font-weight: ",";\n    font-family: ",";\n    line-height: ",";\n    font-size: ",";\n    position: relative;\n    transition: 0.3s;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    &.--fullWidth {\n      width: 100%;\n    }\n\n    &.--contained {\n      background-color: ",";\n      color: white;\n\n      &:hover:not(:disabled) {\n        background-color: ",";\n      }\n\n      &:active:not(:disabled) {\n        background-color: ",";\n      }\n\n      &:disabled {\n        background-color: ",";\n      }\n    }\n\n    &.--outlined {\n      background-color: transparent;\n      color: ",";\n      border: 1px solid;\n      border-color: ",";\n\n      &:hover:not(:disabled),\n      &:active:not(:disabled) {\n        border-color: ",";\n        color: ",";\n      }\n    }\n\n    &.--text {\n      background-color: transparent;\n      color: ",";\n\n      &:hover:not(:disabled),\n      &:active:not(:disabled) {\n        background-color: ",";\n      }\n    }\n\n    &:disabled {\n      cursor: default;\n      color: ",";\n      border-color: ",";\n    }\n\n    &:before {\n      content: ' ';\n      position: absolute;\n      left: -4px;\n      right: -4px;\n      top: -4px;\n      bottom: -4px;\n      border: 2px solid transparent;\n      transition: 0.3s;\n      border-radius: ",";\n    }\n\n    &:focus:not(:active):not(:hover):before {\n      border-color: ",";\n    }\n\n    & > .__loader {\n      margin-right: ",";\n    }\n\n    & > .__startIcon {\n      margin-right: ",";\n    }\n\n    & > .__endIcon {\n      margin-left: ",";\n    }\n\n    & > .__startIcon > svg,\n    & > .__endIcon > svg {\n      vertical-align: middle;\n      font-size: 17px;\n    }\n  "]);return j=function(){return a},a}var e=d.default(function(a){var e=a.children,f=a.disabled,h=a.startIcon,j=a.endIcon,k=a.variant,l=a.loading,b=void 0!==l&&l,m=a.loadingText,n=a.className,o=a.fullWidth,p=c.objectWithoutProperties(a,["children","disabled","startIcon","endIcon","variant","loading","loadingText","className","fullWidth"]);return g.jsxs("button",c.objectSpread({className:d.cx(n,"--".concat(null!=k?k:"contained"),{"--fullWidth":o})},p,{disabled:void 0!==f&&f||b,children:[!!h&&!b&&g.jsx("span",{className:"__startIcon",children:h}),!b&&g.jsx("span",{className:"__text",children:e}),b&&g.jsxs(g.Fragment,{children:[g.jsx(i.default,{size:15,color:"inherit",className:"__loader"}),g.jsx("span",{className:"__text",children:null!=m?m:e})]}),!!j&&g.jsx("span",{className:"__endIcon",children:j})]}))},{label:"houston-button"})(function(c){var a=c.theme,e=c.color,b=h.getColorFallback(a,e);return d.css(j(),a.border.radius.xs,a.font.weight.bold,a.font.family.base,a.line.height.default,a.font.size.xxs,b.pure,b.light,b.dark,a.neutralColor.high.medium,b.pure,b.light,b.dark,b.dark,b.pure,a.neutralColor.high.light,a.neutralColor.low.medium,a.neutralColor.high.medium,a.border.radius.sm,a.neutralColor.high.medium,a.spacing.nano,a.spacing.nano,a.spacing.nano)});b.default=e},77590:function(d,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.truncateText=function(a,b){return(null==a?void 0:a.length)<=b?a:"".concat(a.slice(0,b),"...")},a.getReactChildrenComponent=function(a,b){return e.Children.map(a,function(a){return g(a,b)?a:null}).filter(function(a){return!!a})},a.getReactChildrenProps=f,a.getReactFirstChildrenProps=function(b,c){var a=f(b,c);return a&&a[0]},a.isReactComponent=g,a.getColorFallback=function(b,c){var a;return"inherit"===c?"inherit":null!==(a=b.feedbackColor[c])&& void 0!==a?a:b.brandColor.primary};var c=b(39037),e=c.interopRequireWildcard(b(27378));function f(a,b){return e.Children.map(a,function(a){return g(a,b)?c.objectSpread({},a.props):null}).filter(function(a){return!!a})}function g(a,b){return b?a&&e.isValidElement(a)&&(null==a?void 0:a.type)===b:a&&e.isValidElement(a)}},72150:function(i,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var j,k,l,m,n,c=a(39037),o=a(24246);c.interopRequireWildcard(a(27378));var d=c.interopRequireWildcard(a(96342)),p=a(77590);function e(){var a=c.taggedTemplateLiteral(["\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(270deg); }\n"]);return e=function(){return a},a}function q(){var a=c.taggedTemplateLiteral(["\n  0% { stroke-dashoffset: ","; }\n  50% { stroke-dashoffset: ","; transform: rotate(135deg); }\n  100% { stroke-dashoffset: ","; transform: rotate(450deg); }\n"]);return q=function(){return a},a}function f(){var a=c.taggedTemplateLiteral(["\n  animation: "," 1.4s linear infinite;\n  color: ",";\n\n  & > circle {\n    stroke: currentColor;\n    stroke-width: ",";\n    stroke-dasharray: ",";\n    stroke-dashoffset: 0;\n    transform-origin: center;\n    animation: "," 1.4s ease-in-out infinite;\n  }\n"]);return f=function(){return a},a}var g=d.keyframes(e()),h=d.default(function(c){var d=c.className,a=c.size;a=null!=a?a:65;var b=(null!=a?a:65)/65*30;return o.jsx("svg",{className:d,width:"".concat(a,"px"),height:"".concat(a,"px"),viewBox:"0 0 ".concat(a+1," ").concat(a+1),children:o.jsx("circle",{fill:"none",strokeLinecap:"round",cx:b+.1*b,cy:b+.1*b,r:b})})},{label:"houston-loader"})(f(),g,function(a){return"inherit"===a.color?"inherit":p.getColorFallback(a.theme,a.color).pure},function(a){return(null!==(m=a.size)&& void 0!==m?m:65)/65*6},function(a){return(null!==(n=a.size)&& void 0!==n?n:65)/65*187},function(b){var a;return a=b,d.keyframes(q(),(null!==(j=a.size)&& void 0!==j?j:65)/65*187,(null!==(k=a.size)&& void 0!==k?k:65)/65*46.75,(null!==(l=a.size)&& void 0!==l?l:65)/65*187)});b.default=h},98021:function(g,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var h,c=a(39037),i=c.interopRequireWildcard(a(27378)),j=a(16847),d=c.interopRequireDefault(a(96342));function e(){var a=c.taggedTemplateLiteral(["\n  margin: 0;\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  margin-bottom: ",";\n\n  &.--variant-secondary {\n    color: ",";\n    font-size: ",";\n  }\n"]);return e=function(){return a},a}var f=d.default(function(a){var b=a.className,c=a.variant,e=a.id,f=a.children,d=a.component,g=a.onClick;return i.createElement(null!=d?d:"p",{id:e,onClick:g,className:j.cx(b,b,c&&"--variant-".concat(c))},f)})(e(),function(a){var b=a.theme,c=a.size;return null!==(h=b.font.size[c])&& void 0!==h?h:b.font.size.sm},function(a){var c=a.theme,b=a.fontWeight;return c.font.weight[null!=b?b:"regular"]},function(a){var c=a.theme,b=a.lineHeight;return c.line.height[null!=b?b:"md"]},function(a){var b=a.theme,c=a.marginBottom;return c?b.spacing.nano:null},function(a){return a.theme.neutralColor.high.dark},function(a){return a.theme.font.size.xxs});b.default=f},11156:function(g,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return f},meta:function(){return e}}),a(27378);var h=a(35318),i=a(56100),j=a(59266),k=a(98021),l=a(35729),e={name:"useCallbackGenerator",tableOfContents:{depth:0,children:[{depth:1,slug:"#usecallbackgenerator",title:"useCallbackGenerator",children:[{depth:2,slug:"#como-usar",title:"Como usar"},{depth:2,slug:"#mais-par\xe2metros",title:"Mais Par\xe2metros"},{depth:2,slug:"#par\xe2metros-e-retorno",title:"Par\xe2metros e Retorno"}]}]}},m={meta:e};function f(a){var c=a.components,b=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(a,["components"]);return(0,h.kt)("wrapper",Object.assign({},m,b,{components:c,mdxType:"MDXLayout"}),(0,h.kt)("h1",Object.assign({},{id:"usecallbackgenerator"}),"useCallbackGenerator"),(0,h.kt)("p",null,"Um gerador de callbacks que faz ",(0,h.kt)("a",Object.assign({parentName:"p"},{href:"https://rodrigorgs.github.io/aulas/mata56/aula14-currying"}),"Currying"),"(apenas um n\xedvel)\ndos argumentos passados, \xfatil quando temos que uma mesma fun\xe7\xe3o mudando apenas alguns par\xe2metros. \xc9 necess\xe1rio uma key,\npara poder criar cache (useCallback padr\xe3o) dessa fun\xe7\xe3o."),(0,h.kt)("h2",Object.assign({},{id:"como-usar"}),"Como usar"),(0,h.kt)("pre",null,(0,h.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"const navigateTo = useCallbackGenerator(\n  (screen: string) => navigation.navigate(screen, { invoice }),\n  [invoice, navigation]\n);\n\n//...\n<button onClick={navigateTo('details-key', 'details')}>Detalhes<button>\n<button onClick={navigateTo('payment-key', 'payment')}>Pagamento<button>\n")),(0,h.kt)("h2",Object.assign({},{id:"mais-par\xe2metros"}),"Mais Par\xe2metros"),(0,h.kt)("p",null,"\xc9 poss\xedvel passar mais de um valor, como podem ver no exemplo a seguir, passo 2 par\xe2metros o 3 vir\xe1 do\nonClick, ou seja, ele ir\xe1 gerar um callback com a assinatura assim: ",(0,h.kt)("strong",{parentName:"p"},"(e: : SyntheticEvent) => void"),"."),(0,h.kt)("pre",null,(0,h.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"const navigateTo = useCallbackGenerator(\n  (screen: string, value: number, e: SyntheticEvent) => navigation.navigate(screen, { invoice }),\n  [invoice, navigation]\n);\n\n//...\n<button onClick={navigateTo('details-key', 'details', 1)}>Detalhes<button>\n<button onClick={navigateTo('payment-key', 'payment', 2)}>Pagamento<button>\n")),(0,h.kt)(i.X,{__position:0,code:"() => {\n  const alertGenerator = useCallbackGenerator((message, e) => {\n    alert(`${message}\\n\\nevent:${e.type}`)\n  }, [])\n  return (\n    <div>\n      <Button onClick={alertGenerator('first', 'Ol\xe1')}>Ol\xe1</Button>\n      {'  '}\n      <Button onClick={alertGenerator('second', 'Oi')}>Oi</Button>\n      {'  '}\n      <Button\n        onClick={alertGenerator(\n          'third',\n          'Gato escondido com rabo de fora t\xe1 mais escondido que rabo escondido com gato de fora.',\n        )}\n      >\n        Trava-L\xedngua\n      </Button>\n    </div>\n  )\n}",scope:{props:b,Playground:i.X,Button:j.default,Typography:k.default,useCallbackGenerator:l.Z,meta:e},mdxType:"Playground"},function(){var a=(0,l.Z)(function(a,b){alert("".concat(a,"\n\nevent:").concat(b.type))},[]);return(0,h.kt)("div",null,(0,h.kt)(j.default,{onClick:a("first","Ol\xe1"),mdxType:"Button"},"Ol\xe1"),"  ",(0,h.kt)(j.default,{onClick:a("second","Oi"),mdxType:"Button"},"Oi"),"  ",(0,h.kt)(j.default,{onClick:a("third","Gato escondido com rabo de fora t\xe1 mais escondido que rabo escondido com gato de fora."),mdxType:"Button"},"Trava-L\xedngua"))}),(0,h.kt)("h2",Object.assign({},{id:"par\xe2metros-e-retorno"}),"Par\xe2metros e Retorno"),(0,h.kt)("pre",null,(0,h.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"/**\n * Fun\xe7\xe3o geradora de fun\xe7\xf5es com parametros cascateados\n * @param generator fun\xe7\xe3o que ser\xe1 executada com o parametros passados\n * @param deps\n * @returns Fun\xe7\xe3o geradora:\n *   @param key: unique key usado para cache\n *   @param args: argumentos que ser\xe3o pr\xe9-definidos\n */\nexport default function useCallbackGenerator<F extends (...args: any[]) => any>(\n  generator: F,\n  deps: React.DependencyList\n): (key: string, ...args: ParametersOptional<F>) => (...callArgs: any) => ReturnType<F>;\n")))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/hooks/useCallbackGenerator/index.mdx"};for(var d in c)window[d]=c[d]}},function(a){a.O(0,[4526,9914,9961,7978,9774,2888,179],function(){return a(a.s=97462)}),_N_E=a.O()}])