(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8464],{87651:function(j,d,c){"use strict";c.r(d),c.d(d,{cache:function(){return w},css:function(){return u},cx:function(){return p},flush:function(){return n},getRegisteredStyles:function(){return r},hydrate:function(){return o},injectGlobal:function(){return s},keyframes:function(){return t},merge:function(){return q},sheet:function(){return v}});var g=c(8786),k=c(74343),h=c(53211);function l(a,b){if(void 0===a.inserted[b.name])return a.insert("",b,a.sheet,!0)}function i(c,d,b){var a=[],e=(0,h.fp)(c,a,b);return a.length<2?b:e+d(a)}var e,b,f,m=function g(f){for(var c="",d=0;d<f.length;d++){var b=f[d];if(null!=b){var a=void 0;switch(typeof b){case"boolean":break;case"object":if(Array.isArray(b))a=g(b);else for(var e in a="",b)b[e]&&e&&(a&&(a+=" "),a+=e);break;default:a=b}a&&(c&&(c+=" "),c+=a)}}return c},a=(e={key:"css"},(b=(0,g.Z)(e)).sheet.speedy=function(a){this.isSpeedy=a},b.compat=!0,{css:f=function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];var e=(0,k.O)(d,b.registered,void 0);return(0,h.My)(b,e,!1),b.key+"-"+e.name},cx:function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];return i(b.registered,f,m(d))},injectGlobal:function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];var e=(0,k.O)(d,b.registered);l(b,e)},keyframes:function(){for(var d=arguments.length,e=new Array(d),a=0;a<d;a++)e[a]=arguments[a];var c=(0,k.O)(e,b.registered),f="animation-"+c.name;return l(b,{name:c.name,styles:"@keyframes "+f+"{"+c.styles+"}"}),f},hydrate:function(a){a.forEach(function(a){b.inserted[a]=!0})},flush:function(){b.registered={},b.inserted={},b.sheet.flush()},sheet:b.sheet,cache:b,getRegisteredStyles:h.fp.bind(null,b.registered),merge:i.bind(null,b.registered,f)}),n=a.flush,o=a.hydrate,p=a.cx,q=a.merge,r=a.getRegisteredStyles,s=a.injectGlobal,t=a.keyframes,u=a.css,v=a.sheet,w=a.cache},48059:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/usePromise",function(){return c(7519)}])},70010:function(d,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(b){var a;f=c.objectSpread({onUnhandledError:function(){return null}},f,b,{pagination:c.objectSpread({pageStart:1,perPage:25},f.pagination,null!==(a=b.pagination)&& void 0!==a?a:{})}),g()},a.getConfig=i;var c=b(39037),e=c.interopRequireDefault(b(86248)),f={onUnhandledError:function(){},pagination:{pageStart:1,perPage:25}};function g(){return h.apply(this,arguments)}function h(){return(h=c.asyncToGenerator(e.default.mark(function a(){var c;return e.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:try{(c=b(32937)).config&&!c.config.onUnhandledError&&(c.config.onUnhandledError=function(a){return f.onUnhandledError(a,"rxjs")})}catch(d){}case 1:case"end":return a.stop()}},a)}))).apply(this,arguments)}function i(){return f}},188:function(d,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(k,g){var a=c.slicedToArray(e.useState(!0),2),h=a[0],l=a[1],b=c.slicedToArray(e.useState(),2),i=b[0],m=b[1],d=c.slicedToArray(e.useState(),2),j=d[0],n=d[1];return e.useEffect(function(){var a=!0;return l(!0),k().then(function(b){a&&m(function(){return b})}).catch(function(b){f.getConfig().onUnhandledError(b,"hooks"),a&&n(b)}).finally(function(){return l(!1)}),function(){a=!1}},g),[i,j,h]};var c=a(39037),e=c.interopRequireWildcard(a(27378)),f=a(70010)},16847:function(e,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=b(39037).interopRequireWildcard(b(96342));Object.keys(c).forEach(function(b){"default"!==b&&"__esModule"!==b&&(b in a&&a[b]===c[b]||Object.defineProperty(a,b,{enumerable:!0,get:function(){return c[b]}}))});var d=c.default;a.default=d},96342:function(n,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.breakpoints=a.css=a.clsx=a.cx=a.keyframes=void 0;var e=b(39037),c=b(87651),d=b(10043),f=e.interopRequireDefault(b(94408)),g=b(60921),h=d.keyframes;a.keyframes=h;var i=c.cx;a.cx=i;var j=c.cx;a.clsx=j;var k=d.css;a.css=k;var l=g.breakpoinstUtils;a.breakpoints=l;var m=f.default;a.default=m},59266:function(f,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),g=a(24246);c.interopRequireWildcard(a(27378));var d=c.interopRequireWildcard(a(16847)),h=a(77590),i=c.interopRequireDefault(a(72150));function j(){var a=c.taggedTemplateLiteral(["\n    border: none;\n    cursor: pointer;\n    text-transform: none;\n    padding: 10px 16px;\n    height: 40px;\n    border-radius: ",";\n    font-weight: ",";\n    font-family: ",";\n    line-height: ",";\n    font-size: ",";\n    position: relative;\n    transition: 0.3s;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    &.--fullWidth {\n      width: 100%;\n    }\n\n    &.--contained {\n      background-color: ",";\n      color: white;\n\n      &:hover:not(:disabled) {\n        background-color: ",";\n      }\n\n      &:active:not(:disabled) {\n        background-color: ",";\n      }\n\n      &:disabled {\n        background-color: ",";\n      }\n    }\n\n    &.--outlined {\n      background-color: transparent;\n      color: ",";\n      border: 1px solid;\n      border-color: ",";\n\n      &:hover:not(:disabled),\n      &:active:not(:disabled) {\n        border-color: ",";\n        color: ",";\n      }\n    }\n\n    &.--text {\n      background-color: transparent;\n      color: ",";\n\n      &:hover:not(:disabled),\n      &:active:not(:disabled) {\n        background-color: ",";\n      }\n    }\n\n    &:disabled {\n      cursor: default;\n      color: ",";\n      border-color: ",";\n    }\n\n    &:before {\n      content: ' ';\n      position: absolute;\n      left: -4px;\n      right: -4px;\n      top: -4px;\n      bottom: -4px;\n      border: 2px solid transparent;\n      transition: 0.3s;\n      border-radius: ",";\n    }\n\n    &:focus:not(:active):not(:hover):before {\n      border-color: ",";\n    }\n\n    & > .__loader {\n      margin-right: ",";\n    }\n\n    & > .__startIcon {\n      margin-right: ",";\n    }\n\n    & > .__endIcon {\n      margin-left: ",";\n    }\n\n    & > .__startIcon > svg,\n    & > .__endIcon > svg {\n      vertical-align: middle;\n      font-size: 17px;\n    }\n  "]);return j=function(){return a},a}var e=d.default(function(a){var e=a.children,f=a.disabled,h=a.startIcon,j=a.endIcon,k=a.variant,l=a.loading,b=void 0!==l&&l,m=a.loadingText,n=a.className,o=a.fullWidth,p=c.objectWithoutProperties(a,["children","disabled","startIcon","endIcon","variant","loading","loadingText","className","fullWidth"]);return g.jsxs("button",c.objectSpread({className:d.cx(n,"--".concat(null!=k?k:"contained"),{"--fullWidth":o})},p,{disabled:void 0!==f&&f||b,children:[!!h&&!b&&g.jsx("span",{className:"__startIcon",children:h}),!b&&g.jsx("span",{className:"__text",children:e}),b&&g.jsxs(g.Fragment,{children:[g.jsx(i.default,{size:15,color:"inherit",className:"__loader"}),g.jsx("span",{className:"__text",children:null!=m?m:e})]}),!!j&&g.jsx("span",{className:"__endIcon",children:j})]}))},{label:"houston-button"})(function(c){var a=c.theme,e=c.color,b=h.getColorFallback(a,e);return d.css(j(),a.border.radius.xs,a.font.weight.bold,a.font.family.base,a.line.height.default,a.font.size.xxs,b.pure,b.light,b.dark,a.neutralColor.high.medium,b.pure,b.light,b.dark,b.dark,b.pure,a.neutralColor.high.light,a.neutralColor.low.medium,a.neutralColor.high.medium,a.border.radius.sm,a.neutralColor.high.medium,a.spacing.nano,a.spacing.nano,a.spacing.nano)});b.default=e},77590:function(d,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.truncateText=function(a,b){return(null==a?void 0:a.length)<=b?a:"".concat(a.slice(0,b),"...")},a.getReactChildrenComponent=function(a,b){return e.Children.map(a,function(a){return g(a,b)?a:null}).filter(function(a){return!!a})},a.getReactChildrenProps=f,a.getReactFirstChildrenProps=function(b,c){var a=f(b,c);return a&&a[0]},a.isReactComponent=g,a.getColorFallback=function(b){var a=arguments.length>1&& void 0!==arguments[1]?arguments[1]:"primary";return["low","high"].includes(a)?b.neutralColor[a]:["positive","negative","warning","informative"].includes(a)?b.feedbackColor[a]:b.brandColor[a]};var c=b(39037),e=c.interopRequireWildcard(b(27378));function f(a,b){return e.Children.map(a,function(a){return g(a,b)?c.objectSpread({},a.props):null}).filter(function(a){return!!a})}function g(a,b){return b?a&&e.isValidElement(a)&&(null==a?void 0:a.type)===b:a&&e.isValidElement(a)}},72150:function(i,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var j,k,l,m,n,c=a(39037),o=a(24246);c.interopRequireWildcard(a(27378));var d=c.interopRequireWildcard(a(96342)),p=a(77590);function e(){var a=c.taggedTemplateLiteral(["\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(270deg); }\n"]);return e=function(){return a},a}function q(){var a=c.taggedTemplateLiteral(["\n  0% { stroke-dashoffset: ","; }\n  50% { stroke-dashoffset: ","; transform: rotate(135deg); }\n  100% { stroke-dashoffset: ","; transform: rotate(450deg); }\n"]);return q=function(){return a},a}function f(){var a=c.taggedTemplateLiteral(["\n  animation: "," 1.4s linear infinite;\n  color: ",";\n\n  & > circle {\n    stroke: currentColor;\n    stroke-width: ",";\n    stroke-dasharray: ",";\n    stroke-dashoffset: 0;\n    transform-origin: center;\n    animation: "," 1.4s ease-in-out infinite;\n  }\n"]);return f=function(){return a},a}var g=d.keyframes(e()),h=d.default(function(c){var d=c.className,a=c.size;a=null!=a?a:65;var b=(null!=a?a:65)/65*30;return o.jsx("svg",{className:d,width:"".concat(a,"px"),height:"".concat(a,"px"),viewBox:"0 0 ".concat(a+1," ").concat(a+1),children:o.jsx("circle",{fill:"none",strokeLinecap:"round",cx:b+.1*b,cy:b+.1*b,r:b})})},{label:"houston-loader"})(f(),g,function(a){return"inherit"===a.color?"inherit":p.getColorFallback(a.theme,a.color).pure},function(a){return(null!==(m=a.size)&& void 0!==m?m:65)/65*6},function(a){return(null!==(n=a.size)&& void 0!==n?n:65)/65*187},function(b){var a;return a=b,d.keyframes(q(),(null!==(j=a.size)&& void 0!==j?j:65)/65*187,(null!==(k=a.size)&& void 0!==k?k:65)/65*46.75,(null!==(l=a.size)&& void 0!==l?l:65)/65*187)});b.default=h},98021:function(i,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),j=a(24246),d=c.interopRequireWildcard(a(27378)),e=c.interopRequireWildcard(a(96342)),k=a(77590);function l(){var a=c.taggedTemplateLiteral(["\n      margin: 0;\n      font-size: ",";\n      font-weight: ",";\n      line-height: ",";\n      margin-bottom: ",";\n      color: ",";\n    "]);return l=function(){return a},a}function f(){var a=c.taggedTemplateLiteral(["\n  ","\n"]);return f=function(){return a},a}var g=d.forwardRef(function(a,e){var b=a.as,f=a.children,d=a.color,g=c.objectWithoutProperties(a,["as","children","color"]);return j.jsx(void 0===b?"p":b,c.objectSpread({ref:e,color:void 0===d?"low":d},g,{children:f}))}),h=e.default(g)(f(),function(a){var b=a.theme,c=a.size,d=a.weight,f=a.lineHeight,h=a.marginBottom,g=a.color;return e.css(l(),b.font.size[void 0===c?"xs":c],b.font.weight[void 0===d?"regular":d],b.line.height[void 0===f?"md":f],h?b.spacing.nano:null,k.getColorFallback(b,void 0===g?"low":g).pure)});b.default=h},7519:function(g,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return f},meta:function(){return e}});var h=a(27378),i=a(35318),j=a(56100),k=a(59266),l=a(98021),m=a(188);function n(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}var e={name:"usePromise",tableOfContents:{depth:0,children:[{depth:1,slug:"#usepromise",title:"usePromise",children:[{depth:2,slug:"#como-usar",title:"Como usar"},{depth:2,slug:"#cuidados",title:"Cuidados"},{depth:2,slug:"#par\xe2metros-e-retorno",title:"Par\xe2metros e Retorno"}]}]}},o={meta:e};function f(a){var c=a.components,b=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(a,["components"]);return(0,i.kt)("wrapper",Object.assign({},o,b,{components:c,mdxType:"MDXLayout"}),(0,i.kt)("h1",Object.assign({},{id:"usepromise"}),"usePromise"),(0,i.kt)("p",null,"D\xe1 Subscribe e retorna o resultado de uma promise e quando o componente desmonta (unmount) tamb\xe9m d\xe1 unsubscribe,\ndiminuindo assim o risco de Memory Leak. ",(0,i.kt)("strong",{parentName:"p"},"Como useEffect que retorna o valor da Promise")),(0,i.kt)("h2",Object.assign({},{id:"como-usar"}),"Como usar"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"const [value, error, loading] = usePromise(() => userService.get(), []);\n\nreturn (\n  <div>\n    {loading ? 'Carregando' : ''}\n    {value}\n  </div>\n);\n")),(0,i.kt)(j.X,{__position:0,code:"() => {\n  const [reset, setReset] = useState()\n  const [value, error, loading] = usePromise(\n    () => new Promise((resolve) => setTimeout(() => resolve('ol\xe1'), 2000)),\n    [reset],\n  )\n  const onReset = useCallback(() => setReset(Date.now()), [])\n  return (\n    <div>\n      <Typography>Value: {value}</Typography>\n      <Typography>Loading: {loading.toString()}</Typography>\n      <Button onClick={onReset} variant=\"text\">\n        Reset\n      </Button>\n    </div>\n  )\n}",scope:{props:b,useState:h.useState,useCallback:h.useCallback,Playground:j.X,Button:k.default,Typography:l.default,usePromise:m.default,meta:e},mdxType:"Playground"},function(){var a,b,d=(0,h.useState)(),e=d[0],o=d[1],c=(a=(0,m.default)(function(){return new Promise(function(a){return setTimeout(function(){return a("ol\xe1")},2e3)})},[e]),b=3,function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||function(a,c){if(a){if("string"==typeof a)return n(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return n(a,c)}}(a,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),f=c[0],g=(c[1],c[2]),j=(0,h.useCallback)(function(){return o(Date.now())},[]);return(0,i.kt)("div",null,(0,i.kt)(l.default,{mdxType:"Typography"},"Value: ",f),(0,i.kt)(l.default,{mdxType:"Typography"},"Loading: ",g.toString()),(0,i.kt)(k.default,{onClick:j,variant:"text",mdxType:"Button"},"Reset"))}),(0,i.kt)("h2",Object.assign({},{id:"cuidados"}),"Cuidados"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Erros")," ocorridos ser\xe3o automaticamentes logados e as o ",(0,i.kt)("strong",{parentName:"li"},"onUnhandledError")," no ",(0,i.kt)("strong",{parentName:"li"},"setHoustonHooksConfig"),"\nfor setado."),(0,i.kt)("li",{parentName:"ul"},"O valor inicial ser\xe1 ",(0,i.kt)("strong",{parentName:"li"},"undefined"),", lembre-se de tratar isso quando estiver usando.")),(0,i.kt)("h2",Object.assign({},{id:"par\xe2metros-e-retorno"}),"Par\xe2metros e Retorno"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"/**\n * @param promiseGenerator Fun\xe7\xe3o que retorna uma Promise\n * @param deps Lista de depend\xeancias\n * @returns [\n *    value: valor de retorno do Promise,\n *    error: se ocorrer um erro, ele ser\xe1 passado aqui,\n *    loading: boolean se esta carregando ou n\xe3o\n * ]\n */\nexport default usePromise<T>(promiseGenerator: () => Promise<any>, deps: React.DependencyList): [T, any, boolean];\n")))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/hooks/usePromise/index.mdx"};for(var d in c)window[d]=c[d]}},function(a){a.O(0,[4526,9914,9961,8194,7978,9774,2888,179],function(){return a(a.s=48059)}),_N_E=a.O()}])