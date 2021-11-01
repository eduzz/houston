(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[163],{265563:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useFormContext=e.FormFieldsContext=void 0;var r=n(759312),o=n(824246),u=(0,r.__importStar)(n(827378)),i=n(455693);e.FormFieldsContext=(0,i.createContext)(null);e.useFormContext=function(){return(0,i.useContext)(e.FormFieldsContext)},e.default=u.memo((function(t){var n=t.context,u=(0,r.__rest)(t,["context"]);return(0,o.jsx)(e.FormFieldsContext.Provider,(0,r.__assign)({value:n},{children:(0,o.jsx)("form",(0,r.__assign)({},u,{onReset:n.handleReset,onSubmit:n.handleSubmit}),void 0)}),void 0)}))},411998:function(t,e,n){"use strict";n.r(e),n.d(e,{meta:function(){return a},default:function(){return c}});var r=n(987397),o=n(831750),u=(n(827378),n(735318)),i=(n(265563),["components"]),a={name:"Form",tableOfContents:{depth:0,children:[{depth:1,slug:"#form",title:"Form",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"},{depth:3,slug:"#contexto-interno",title:"Contexto interno"}]}]}]}},l={meta:a};function c(t){var e=t.components,n=(0,o.Z)(t,i);return(0,u.kt)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"form"},"Form"),(0,u.kt)("p",null,"Componente de formul\xe1rio de alto desempenho com gerenciamento de escopo de dados."),(0,u.kt)("h3",{id:"importa\xe7\xe3o"},"Importa\xe7\xe3o"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"import Form from '@eduzz/houston-ui/Forms/Form';\n")),(0,u.kt)("h3",{id:"exemplo"},"Exemplo"),(0,u.kt)("p",null,"Exemplo de uso ",(0,u.kt)("a",{parentName:"p",href:"https://eduzz.github.io/houston/form/example"},"aqui"),"."),(0,u.kt)("h3",{id:"contexto-interno"},"Contexto interno"),(0,u.kt)("p",null,"Utilizado internamente no componente ",(0,u.kt)("inlineCode",{parentName:"p"},"<Form />"),". Recomendado o uso apenas para compartilhar o estado do formul\xe1rio com os componentes filhos."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"import Form, { useFormContext } from '@eduzz/houston-ui/Forms/Form';\n\nconst Component = () => {\n  return (\n    <Form {...props}>\n      <SubComponent />\n    </Form>\n  );\n}\n\nconst SubComponent = () => {\n  const form = useFormContext();\n  ...\n};\n")),(0,u.kt)("table",null,(0,u.kt)("thead",{parentName:"table"},(0,u.kt)("tr",{parentName:"thead"},(0,u.kt)("th",{parentName:"tr",align:null},"prop"),(0,u.kt)("th",{parentName:"tr",align:null},"tipo"),(0,u.kt)("th",{parentName:"tr",align:null},"obrigat\xf3rio"),(0,u.kt)("th",{parentName:"tr",align:null},"padr\xe3o"),(0,u.kt)("th",{parentName:"tr",align:null},"descri\xe7\xe3o"))),(0,u.kt)("tbody",{parentName:"table"},(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"id"),(0,u.kt)("td",{parentName:"tr",align:null},(0,u.kt)("inlineCode",{parentName:"td"},"string")),(0,u.kt)("td",{parentName:"tr",align:null},(0,u.kt)("inlineCode",{parentName:"td"},"false")),(0,u.kt)("td",{parentName:"tr",align:null},"-"),(0,u.kt)("td",{parentName:"tr",align:null})),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"className"),(0,u.kt)("td",{parentName:"tr",align:null},(0,u.kt)("inlineCode",{parentName:"td"},"string")),(0,u.kt)("td",{parentName:"tr",align:null},(0,u.kt)("inlineCode",{parentName:"td"},"false")),(0,u.kt)("td",{parentName:"tr",align:null},"-"),(0,u.kt)("td",{parentName:"tr",align:null})),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"context"),(0,u.kt)("td",{parentName:"tr",align:null},(0,u.kt)("inlineCode",{parentName:"td"},"IFormAdapter<any>")),(0,u.kt)("td",{parentName:"tr",align:null},(0,u.kt)("inlineCode",{parentName:"td"},"true")),(0,u.kt)("td",{parentName:"tr",align:null},"-"),(0,u.kt)("td",{parentName:"tr",align:null},"-")))))}c.isMDXComponent=!0;var s={editThisPagePath:"src/pages/ui-components/Forms/Form/index.mdx"};for(var m in s)window[m]=s[m]},383902:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Forms/Form",function(){return n(411998)}])},127061:function(t){var e,n,r=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function i(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"===typeof setTimeout?setTimeout:o}catch(t){e=o}try{n="function"===typeof clearTimeout?clearTimeout:u}catch(t){n=u}}();var a,l=[],c=!1,s=-1;function m(){c&&a&&(c=!1,a.length?l=a.concat(l):s=-1,l.length&&d())}function d(){if(!c){var t=i(m);c=!0;for(var e=l.length;e;){for(a=l,l=[];++s<e;)a&&a[s].run();s=-1,e=l.length}a=null,c=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function f(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new p(t,e)),1!==l.length||c||i(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=f,r.addListener=f,r.once=f,r.off=f,r.removeListener=f,r.removeAllListeners=f,r.emit=f,r.prependListener=f,r.prependOnceListener=f,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},455693:function(t,e,n){"use strict";n.r(e),n.d(e,{BridgeProvider:function(){return h},createContext:function(){return m},useBridgeValue:function(){return g},useContext:function(){return p},useContextSelector:function(){return d},useContextUpdate:function(){return f}});var r=n(827378),o=n(991102),u=n(331542);n(127061);const i=Symbol(),a=Symbol(),l="undefined"==typeof window||/ServerSideRendering/.test(window.navigator&&window.navigator.userAgent)?r.useEffect:r.useLayoutEffect,c=o.unstable_runWithPriority?t=>(0,o.unstable_runWithPriority)(o.unstable_NormalPriority,t):t=>t(),s=t=>t;function m(t){const e=(0,r.createContext)({[i]:{v:{current:t},n:{current:-1},l:new Set,u:t=>t()}});var n;return e[a]=e.Provider,e.Provider=(n=e.Provider,({value:t,children:e})=>{const o=(0,r.useRef)(t),a=(0,r.useRef)(0),s=(0,r.useRef)();if(!s.current){const t=new Set,e=e=>{(0,u.unstable_batchedUpdates)((()=>{a.current+=1,t.forEach((t=>t([a.current]))),e()}))};s.current={[i]:{v:o,n:a,l:t,u:e}}}return l((()=>{o.current=t,a.current+=1,c((()=>{s.current[i].l.forEach((e=>{e([a.current,t])}))}))}),[t]),(0,r.createElement)(n,{value:s.current},e)}),delete e.Consumer,e}function d(t,e){const n=(0,r.useContext)(t)[i];const{v:{current:o},n:{current:u},l:a}=n,c=e(o),[s,m]=(0,r.useReducer)(((t,n)=>{if(!n)return[o,c];if(n[0]===u)return Object.is(t[1],c)?t:[o,c];try{if(2===n.length){if(Object.is(t[0],n[1]))return t;const r=e(n[1]);return Object.is(t[1],r)?t:[n[1],r]}}catch(t){}return[...t]}),[o,c]);return Object.is(s[1],c)||m(),l((()=>(a.add(m),()=>{a.delete(m)})),[a]),s[1]}function p(t){return d(t,s)}function f(t){const e=(0,r.useContext)(t)[i];const{u:n}=e;return n}const h=({context:t,value:e,children:n})=>{const{[a]:o}=t;return(0,r.createElement)(o,{value:e},n)},g=t=>{const e=(0,r.useContext)(t);return e}},987397:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},831750:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},u=Object.keys(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}n.d(e,{Z:function(){return r}})}},function(t){t.O(0,[9774,2888,179],(function(){return e=383902,t(t.s=e);var e}));var e=t.O();_N_E=e}]);