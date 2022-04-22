(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[163],{14284:function(d,e,a){"use strict";var b,c;d.exports=(null===(b=a.g.process)|| void 0===b?void 0:b.env)&&"object"==typeof(null===(c=a.g.process)|| void 0===c?void 0:c.env)?a.g.process:a(66118)},83902:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Forms/Form",function(){return c(2225)}])},33356:function(f,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.useFormContext=a.FormFieldsContext=void 0;var c=b(59312),g=b(24246),d=c.__importStar(b(27378)),e=b(55693);a.FormFieldsContext=(0,e.createContext)(null),a.useFormContext=function(){return(0,e.useContext)(a.FormFieldsContext)},a.default=d.memo(function(d){var b=d.context,e=c.__rest(d,["context"]);return(0,g.jsx)(a.FormFieldsContext.Provider,Object.assign({value:b},{children:(0,g.jsx)("form",Object.assign({},e,{onReset:b.handleReset,onSubmit:b.handleSubmit}))}))})},2225:function(g,b,a){"use strict";a.r(b),a.d(b,{meta:function(){return e},"default":function(){return f}}),a(27378);var h=a(35318);a(33356);var e={name:"Form",tableOfContents:{depth:0,children:[{depth:1,slug:"#form",title:"Form",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"},{depth:3,slug:"#contexto-interno",title:"Contexto interno"}]}]}]}},i={meta:e};function f(a){var b=a.components,c=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(a,["components"]);return(0,h.kt)("wrapper",Object.assign({},i,c,{components:b,mdxType:"MDXLayout"}),(0,h.kt)("h1",Object.assign({},{id:"form"}),"Form"),(0,h.kt)("p",null,"Componente de formul\xe1rio de alto desempenho com gerenciamento de escopo de dados."),(0,h.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,h.kt)("pre",null,(0,h.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import Form from '@eduzz/houston-ui/Forms/Form';\n")),(0,h.kt)("h3",Object.assign({},{id:"exemplo"}),"Exemplo"),(0,h.kt)("p",null,"Exemplo de uso ",(0,h.kt)("a",Object.assign({parentName:"p"},{href:"https://eduzz.github.io/houston/form/example"}),"aqui"),"."),(0,h.kt)("h3",Object.assign({},{id:"contexto-interno"}),"Contexto interno"),(0,h.kt)("p",null,"Utilizado internamente no componente ",(0,h.kt)("inlineCode",{parentName:"p"},"<Form />"),". Recomendado o uso apenas para compartilhar o estado do formul\xe1rio com os componentes filhos."),(0,h.kt)("pre",null,(0,h.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import Form, { useFormContext } from '@eduzz/houston-ui/Forms/Form';\n\nconst Component = () => {\n  return (\n    <Form {...props}>\n      <SubComponent />\n    </Form>\n  );\n}\n\nconst SubComponent = () => {\n  const form = useFormContext();\n  ...\n};\n")),(0,h.kt)("table",null,(0,h.kt)("thead",{parentName:"table"},(0,h.kt)("tr",{parentName:"thead"},(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,h.kt)("tbody",{parentName:"table"},(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"id"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"string")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"className"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"string")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"context"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"IFormAdapter<any>")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"true")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")))))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/ui-components/Forms/Form/index.mdx"};for(var d in c)window[d]=c[d]},66118:function(a){!function(){var d={162:function(c){var e,f,g,a=c.exports={};function h(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function j(a){if(e===setTimeout)return setTimeout(a,0);if((e===h||!e)&&setTimeout)return e=setTimeout,setTimeout(a,0);try{return e(a,0)}catch(b){try{return e.call(null,a,0)}catch(c){return e.call(this,a,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:h}catch(a){e=h}try{f="function"==typeof clearTimeout?clearTimeout:i}catch(b){f=i}}();var k=[],l=!1,m=-1;function n(){l&&g&&(l=!1,g.length?k=g.concat(k):m=-1,k.length&&o())}function o(){if(!l){var b=j(n);l=!0;for(var a=k.length;a;){for(g=k,k=[];++m<a;)g&&g[m].run();m=-1,a=k.length}g=null,l=!1,function(a){if(f===clearTimeout)return clearTimeout(a);if((f===i||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(a);try{f(a)}catch(b){try{return f.call(null,a)}catch(c){return f.call(this,a)}}}(b)}}function d(a,b){this.fun=a,this.array=b}function b(){}a.nextTick=function(c){var b=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)b[a-1]=arguments[a];k.push(new d(c,b)),1!==k.length||l||j(o)},d.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=b,a.addListener=b,a.once=b,a.off=b,a.removeListener=b,a.removeAllListeners=b,a.emit=b,a.prependListener=b,a.prependOnceListener=b,a.listeners=function(a){return[]},a.binding=function(a){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(a){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}}},e={};function b(a){var f=e[a];if(void 0!==f)return f.exports;var c=e[a]={exports:{}},g=!0;try{d[a](c,c.exports,b),g=!1}finally{g&&delete e[a]}return c.exports}b.ab="//";var c=b(162);a.exports=c}()},55693:function(e,b,a){"use strict";a.r(b),a.d(b,{BridgeProvider:function(){return p},createContext:function(){return l},useBridgeValue:function(){return q},useContext:function(){return n},useContextSelector:function(){return m},useContextUpdate:function(){return o}});var c=a(27378),d=a(91102),f=a(31542);a(14284);const g=Symbol(),h=Symbol(),i="undefined"==typeof window||/ServerSideRendering/.test(window.navigator&&window.navigator.userAgent)?c.useEffect:c.useLayoutEffect,j=d.unstable_runWithPriority?a=>(0,d.unstable_runWithPriority)(d.unstable_NormalPriority,a):a=>a(),k=a=>a;function l(b){var d;const a=(0,c.createContext)({[g]:{v:{current:b},n:{current:-1},l:new Set,u:a=>a()}});return a[h]=a.Provider,a.Provider=(d=a.Provider,({value:b,children:e})=>{const h=(0,c.useRef)(b),k=(0,c.useRef)(0),a=(0,c.useRef)();if(!a.current){const l=new Set,m=a=>{(0,f.unstable_batchedUpdates)(()=>{k.current+=1,l.forEach(a=>a([k.current])),a()})};a.current={[g]:{v:h,n:k,l:l,u:m}}}return i(()=>{h.current=b,k.current+=1,j(()=>{a.current[g].l.forEach(a=>{a([k.current,b])})})},[b]),(0,c.createElement)(d,{value:a.current},e)}),delete a.Consumer,a}function m(e,f){const h=(0,c.useContext)(e)[g],{v:{current:a},n:{current:l},l:j}=h,b=f(a),[d,k]=(0,c.useReducer)((c,d)=>{if(!d)return[a,b];if(d[0]===l)return Object.is(c[1],b)?c:[a,b];try{if(2===d.length){if(Object.is(c[0],d[1]))return c;const e=f(d[1]);return Object.is(c[1],e)?c:[d[1],e]}}catch(g){}return[...c]},[a,b]);return Object.is(d[1],b)||k(),i(()=>(j.add(k),()=>{j.delete(k)}),[j]),d[1]}function n(a){return m(a,k)}function o(a){const b=(0,c.useContext)(a)[g],{u:d}=b;return d}const p=({context:a,value:b,children:d})=>{const{[h]:e}=a;return(0,c.createElement)(e,{value:b},d)},q=a=>{const b=(0,c.useContext)(a);return b}}},function(a){a.O(0,[9774,2888,179],function(){return a(a.s=83902)}),_N_E=a.O()}])