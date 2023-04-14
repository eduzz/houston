(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3897],{73730:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms/Form",function(){return n(28534)}])},42581:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return c}});var r=n(24246),a=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var n=l(e);if(n&&n.has(t))return n.get(t);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if("default"!==o&&Object.prototype.hasOwnProperty.call(t,o)){var i=a?Object.getOwnPropertyDescriptor(t,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=t[o]}return r.default=t,n&&n.set(t,r),r}(n(27378)),o=n(42192);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(l=function(t){return t?n:e})(t)}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){i(t,e,n[e])})}return t}function u(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):(function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n.push.apply(n,r)}return n})(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}),t}var c=function(t){var e=t.context,n=t.onSubmit,i=function(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}(t,["context","onSubmit"]),l=a.useCallback(function(){return e.reset()},[e]);return(0,r.jsx)(o.FormProvider,u(s({},e),{children:(0,r.jsx)("form",u(s({},i),{onReset:l,onSubmit:e.handleSubmit(n),noValidate:!0}))}))}},28534:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l},meta:function(){return o}});var r=n(31373);n(27378);var a=n(35318);n(42581);var o={name:"Form",tableOfContents:{depth:0,children:[{depth:1,slug:"#form",title:"Form",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"},{depth:3,slug:"#contexto-interno",title:"Contexto interno"}]}]}]}},i={meta:o};function l(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,a.kt)("wrapper",Object.assign({},i,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",Object.assign({},{id:"form"}),"Form"),(0,a.kt)("p",null,"Componente de formul\xe1rio de alto desempenho com gerenciamento de escopo de dados."),(0,a.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import Form from '@eduzz/houston-ui/Forms/Form';\n")),(0,a.kt)("h3",Object.assign({},{id:"exemplo"}),"Exemplo"),(0,a.kt)("p",null,"Exemplo de uso ",(0,a.kt)("a",Object.assign({parentName:"p"},{href:"/houston/forms/example"}),"aqui"),"."),(0,a.kt)("h3",Object.assign({},{id:"contexto-interno"}),"Contexto interno"),(0,a.kt)("p",null,"Utilizado internamente no componente ",(0,a.kt)("inlineCode",{parentName:"p"},"<Form />"),". Recomendado o uso apenas para compartilhar o estado do formul\xe1rio com os componentes filhos."),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import Form from '@eduzz/houston-ui/Forms/Form';\nimport useForm from '@eduzz/houston-forms/useForm';\n\nconst Component = () => {\nconst form = useForm({\n    validationSchema: yup =>\n      yup.object().shape({\n        name: yup.string().required()\n      })\n  });\n\n  const onSubmit = React.useCallback((data: FormModel<typeof form>) => {\n    console.log({ data })\n  }, []);\n\n  return (\n    <Form context={form}>\n      <SubComponent />\n    </Form>\n  );\n}\n\nconst SubComponent = () => {\n  const form = useFormContext();\n  ...\n};\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,a.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,a.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,a.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,a.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}),"id"),(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}),"className"),(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}),"context"),(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"react-hook-form useForm return")),(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"true")),(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onSubmit"),(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"function")),(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"true")),(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")))))}l.isMDXComponent=!0;var s={editThisPagePath:"src/pages/forms/Form/index.mdx"};for(var u in s)window[u]=s[u]},31373:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}n.d(e,{Z:function(){return r}})}},function(t){t.O(0,[2192,9774,2888,179],function(){return t(t.s=73730)}),_N_E=t.O()}]);