(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[692],{87651:function(j,d,c){"use strict";c.r(d),c.d(d,{cache:function(){return w},css:function(){return u},cx:function(){return p},flush:function(){return n},getRegisteredStyles:function(){return r},hydrate:function(){return o},injectGlobal:function(){return s},keyframes:function(){return t},merge:function(){return q},sheet:function(){return v}});var g=c(8786),k=c(74343),h=c(53211);function l(a,b){if(void 0===a.inserted[b.name])return a.insert("",b,a.sheet,!0)}function i(c,d,b){var a=[],e=(0,h.fp)(c,a,b);return a.length<2?b:e+d(a)}var e,b,f,m=function g(f){for(var c="",d=0;d<f.length;d++){var b=f[d];if(null!=b){var a=void 0;switch(typeof b){case"boolean":break;case"object":if(Array.isArray(b))a=g(b);else for(var e in a="",b)b[e]&&e&&(a&&(a+=" "),a+=e);break;default:a=b}a&&(c&&(c+=" "),c+=a)}}return c},a=(e={key:"css"},(b=(0,g.Z)(e)).sheet.speedy=function(a){this.isSpeedy=a},b.compat=!0,{css:f=function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];var e=(0,k.O)(d,b.registered,void 0);return(0,h.My)(b,e,!1),b.key+"-"+e.name},cx:function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];return i(b.registered,f,m(d))},injectGlobal:function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];var e=(0,k.O)(d,b.registered);l(b,e)},keyframes:function(){for(var d=arguments.length,e=new Array(d),a=0;a<d;a++)e[a]=arguments[a];var c=(0,k.O)(e,b.registered),f="animation-"+c.name;return l(b,{name:c.name,styles:"@keyframes "+f+"{"+c.styles+"}"}),f},hydrate:function(a){a.forEach(function(a){b.inserted[a]=!0})},flush:function(){b.registered={},b.inserted={},b.sheet.flush()},sheet:b.sheet,cache:b,getRegisteredStyles:h.fp.bind(null,b.registered),merge:i.bind(null,b.registered,f)}),n=a.flush,o=a.hydrate,p=a.cx,q=a.merge,r=a.getRegisteredStyles,s=a.injectGlobal,t=a.keyframes,u=a.css,v=a.sheet,w=a.cache},8473:function(d,b,c){"use strict";b.Z=function(a,d){if(null==a)return{};var b,c,f=e.default(a,d);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(c=0;c<g.length;c++)b=g[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(f[b]=a[b])}return f};var a,e=(a=c(90518))&&a.__esModule?a:{default:a}},90518:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}},9889:function(b,a){"use strict";a.Z=function(b,a){return a||(a=b.slice(0)),Object.freeze(Object.defineProperties(b,{raw:{value:Object.freeze(a)}}))}},14284:function(d,e,a){"use strict";var b,c;d.exports=(null===(b=a.g.process)|| void 0===b?void 0:b.env)&&"object"==typeof(null===(c=a.g.process)|| void 0===c?void 0:c.env)?a.g.process:a(66118)},35058:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Forms/Textarea",function(){return c(27348)}])},66097:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{get:function(){return c},enumerable:!0});var c={apply:function(a){if(!a)return"";var b=/^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2}).*/,c="$1.$2.$3/$4-$5";return a.replace(b,c).replace(/[-./]$/,"").replace(/[-./]$/,"").replace(/[-./]$/,"")},clean:function(a){return(a||"").replace(/\D/gi,"").substr(0,14)}}},83438:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{get:function(){return c},enumerable:!0});var c={apply:function(a){if(!a)return"";var b=/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2}).*/,c="$1.$2.$3-$4";return a.replace(b,c).replace(/[-./]$/,"").replace(/[-./]$/,"").replace(/[-./]$/,"")},clean:function(a){return(a||"").replace(/\D/gi,"").substr(0,11)}}},14536:function(d,c,a){"use strict";Object.defineProperty(c,"Z",{get:function(){return g},enumerable:!0});var b=a(42619).Z,e=b(a(66097)),f=b(a(83438)),g={apply:function(a){return a?a.length>11?e.default.apply(a):f.default.apply(a):""},clean:function(a){return a?a.length>11?e.default.clean(a):f.default.clean(a):""}}},85372:function(c,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{get:function(){return e},enumerable:!0});var d=b(69854).Z,e={apply:function(a){return null==a||""===a?"":new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(Number(a)||0)},clean:function(a){(a=(a||"").toString().replace(/[^\d,]/gi,"")).includes(",")||(a="0,"+((g=(f=2,(e=a).length))<f?(c=f-g,new Array(c).fill("0").join("")+e):e||""));var c,e,f,g,b=d(a.split(","),2)[1];return b&&2!==b.length&&(a=a.replace(",","").replace(/(\d+)?(\d{2})/gi,"$1,$2").replace(/^,/gi,"0,")),parseFloat(a.replace(/\./gi,"").replace(",","."))}}},94609:function(b,a){"use strict";Object.defineProperty(a,"Z",{get:function(){return c},enumerable:!0});var c={apply:function(a){if(!a)return"";var b=a.length>10?/^(\d{0,2})(\d{0,5})(\d{0,4}).*/:/^(\d{0,2})(\d{0,4})(\d{0,4}).*/,c=a.length>2?"($1) $2-$3":"($1$2$3";return a.replace(b,c).replace(/-$/,"")},clean:function(a){return(a||"").replace(/\D/gi,"").substr(0,11)}}},39044:function(b,a){"use strict";Object.defineProperty(a,"Z",{get:function(){return c},enumerable:!0});var c={apply:function(a){return a?a.replace(/^(\d{0,5})(\d{0,3}).*/,"$1-$2").replace(/-$/,""):""},clean:function(a){return(a||"").replace(/\D/gi,"").substr(0,8)}}},96342:function(i,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),function(c,a){for(var b in a)Object.defineProperty(c,b,{get:a[b],enumerable:!0})}(c,{GlobalStyles:function(){return j},breakpoints:function(){return o},clsx:function(){return m},css:function(){return n},cx:function(){return l},default:function(){return p},keyframes:function(){return k}});var e=a(42619).Z,d=a(87651),b=a(10043),f=e(a(94408)),g=a(60921),j=b.Global,k=b.keyframes,l=d.cx,m=d.cx,n=b.css,o=g.breakpoinstUtils,h=f.default,p=h},26443:function(d,e,a){"use strict";var b=a(42619).Z,c=a(96808).Z;a(62069).Z,a(81826).Z,a(24246),c(a(27378)),b(a(25431))},27348:function(g,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return f},meta:function(){return e}}),a(27378);var h=a(35318);a(66097),a(83438),a(14536),a(85372),a(94609),a(39044),a(26443);var e={name:"Textarea",tableOfContents:{depth:0,children:[{depth:1,slug:"#textarea",title:"Textarea"}]}},i={meta:e};function f(a){var b=a.components,c=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(a,["components"]);return(0,h.kt)("wrapper",Object.assign({},i,c,{components:b,mdxType:"MDXLayout"}),(0,h.kt)("h1",Object.assign({},{id:"textarea"}),"Textarea"),(0,h.kt)("p",null,"Apenas um alias para o ",(0,h.kt)("a",Object.assign({parentName:"p"},{href:"/houston/ui-components/Forms/Input"}),"Input"),"."))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/ui-components/Forms/Textarea/index.mdx"};for(var d in c)window[d]=c[d]},66118:function(a){!function(){var d={162:function(c){var e,f,g,a=c.exports={};function h(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function j(a){if(e===setTimeout)return setTimeout(a,0);if((e===h||!e)&&setTimeout)return e=setTimeout,setTimeout(a,0);try{return e(a,0)}catch(b){try{return e.call(null,a,0)}catch(c){return e.call(this,a,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:h}catch(a){e=h}try{f="function"==typeof clearTimeout?clearTimeout:i}catch(b){f=i}}();var k=[],l=!1,m=-1;function n(){l&&g&&(l=!1,g.length?k=g.concat(k):m=-1,k.length&&o())}function o(){if(!l){var b=j(n);l=!0;for(var a=k.length;a;){for(g=k,k=[];++m<a;)g&&g[m].run();m=-1,a=k.length}g=null,l=!1,function(a){if(f===clearTimeout)return clearTimeout(a);if((f===i||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(a);try{f(a)}catch(b){try{return f.call(null,a)}catch(c){return f.call(this,a)}}}(b)}}function d(a,b){this.fun=a,this.array=b}function b(){}a.nextTick=function(c){var b=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)b[a-1]=arguments[a];k.push(new d(c,b)),1!==k.length||l||j(o)},d.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=b,a.addListener=b,a.once=b,a.off=b,a.removeListener=b,a.removeAllListeners=b,a.emit=b,a.prependListener=b,a.prependOnceListener=b,a.listeners=function(a){return[]},a.binding=function(a){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(a){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}}},e={};function b(a){var f=e[a];if(void 0!==f)return f.exports;var c=e[a]={exports:{}},g=!0;try{d[a](c,c.exports,b),g=!1}finally{g&&delete e[a]}return c.exports}b.ab="//";var c=b(162);a.exports=c}()},55693:function(e,b,a){"use strict";a.r(b),a.d(b,{BridgeProvider:function(){return p},createContext:function(){return l},useBridgeValue:function(){return q},useContext:function(){return n},useContextSelector:function(){return m},useContextUpdate:function(){return o}});var c=a(27378),d=a(91102),f=a(31542);a(14284);const g=Symbol(),h=Symbol(),i="undefined"==typeof window||/ServerSideRendering/.test(window.navigator&&window.navigator.userAgent)?c.useEffect:c.useLayoutEffect,j=d.unstable_runWithPriority?a=>(0,d.unstable_runWithPriority)(d.unstable_NormalPriority,a):a=>a(),k=a=>a;function l(b){var d;const a=(0,c.createContext)({[g]:{v:{current:b},n:{current:-1},l:new Set,u:a=>a()}});return a[h]=a.Provider,a.Provider=(d=a.Provider,({value:b,children:e})=>{const h=(0,c.useRef)(b),k=(0,c.useRef)(0),a=(0,c.useRef)();if(!a.current){const l=new Set,m=a=>{(0,f.unstable_batchedUpdates)(()=>{k.current+=1,l.forEach(a=>a([k.current])),a()})};a.current={[g]:{v:h,n:k,l:l,u:m}}}return i(()=>{h.current=b,k.current+=1,j(()=>{a.current[g].l.forEach(a=>{a([k.current,b])})})},[b]),(0,c.createElement)(d,{value:a.current},e)}),delete a.Consumer,a}function m(e,f){const h=(0,c.useContext)(e)[g],{v:{current:a},n:{current:l},l:j}=h,b=f(a),[d,k]=(0,c.useReducer)((c,d)=>{if(!d)return[a,b];if(d[0]===l)return Object.is(c[1],b)?c:[a,b];try{if(2===d.length){if(Object.is(c[0],d[1]))return c;const e=f(d[1]);return Object.is(c[1],e)?c:[d[1],e]}}catch(g){}return[...c]},[a,b]);return Object.is(d[1],b)||k(),i(()=>(j.add(k),()=>{j.delete(k)}),[j]),d[1]}function n(a){return m(a,k)}function o(a){const b=(0,c.useContext)(a)[g],{u:d}=b;return d}const p=({context:a,value:b,children:d})=>{const{[h]:e}=a;return(0,c.createElement)(e,{value:b},d)},q=a=>{const b=(0,c.useContext)(a);return b}}},function(a){a.O(0,[5431,9774,2888,179],function(){return a(a.s=35058)}),_N_E=a.O()}])