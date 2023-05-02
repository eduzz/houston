(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2843],{68059:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms/README",function(){return a(50223)}])},50223:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return i},meta:function(){return r}});var n=a(31373);a(27378);var o=a(35318),r={name:"Vis\xe3o geral",tableOfContents:{depth:0,children:[{depth:1,slug:"#formul\xe1rios",title:"Formul\xe1rios",children:[{depth:2,children:[{depth:3,slug:"#instala\xe7\xe3o",title:"Instala\xe7\xe3o"},{depth:3,slug:"#t\xe9cnologias",title:"T\xe9cnologias"},{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#como-usar",title:"Como usar"},{depth:3,slug:"#parametros",title:"Parametros"}]}]}]}},s={meta:r};function i(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",Object.assign({},{id:"formul\xe1rios"}),"Formul\xe1rios"),(0,o.kt)("p",null,(0,o.kt)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/package/@eduzz/houston-forms"}),(0,o.kt)("img",Object.assign({parentName:"a"},{src:"https://img.shields.io/npm/v/@eduzz/houston-forms",alt:"version"}))),"\n",(0,o.kt)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/package/@eduzz/houston-forms"}),(0,o.kt)("img",Object.assign({parentName:"a"},{src:"https://img.shields.io/bundlephobia/min/@eduzz/houston-forms",alt:"size"})))),(0,o.kt)("p",null,"Implementa\xe7\xe3o padr\xe3o do ",(0,o.kt)("strong",{parentName:"p"},"react-hook-form")," para valida\xe7\xe3o de formul\xe1rio."),(0,o.kt)("h3",Object.assign({},{id:"instala\xe7\xe3o"}),"Instala\xe7\xe3o"),(0,o.kt)("pre",null,(0,o.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"yarn add @eduzz/houston-forms\n")),(0,o.kt)("h3",Object.assign({},{id:"t\xe9cnologias"}),"T\xe9cnologias"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",Object.assign({parentName:"li"},{href:"https://react-hook-form.com"}),"react-hook-form")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",Object.assign({parentName:"li"},{href:"https://zod.dev"}),"zod"),": Schema de valida\xe7\xe3o")),(0,o.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,o.kt)("pre",null,(0,o.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import useForm from '@eduzz/houston-forms/useForm';\n")),(0,o.kt)("h3",Object.assign({},{id:"como-usar"}),"Como usar"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"N\xe3o \xe9 necess\xe1rio o register de cada componente quando o ",(0,o.kt)("strong",{parentName:"p"},"Form")," componente \xe9 instanciado.")),(0,o.kt)("pre",null,(0,o.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import useForm, { FormModel } from '@eduzz/houston-forms/useForm';\n\nconst form = useForm({\n  defaultValues: {\n    // N\xe3o \xe9 necess\xe1rio iniciar os valores\n    money: 5\n  },\n  validationSchema: zod =>  {\n    // Caso n\xe3o use uma schema pronto o zod ser\xe1 passado via arg\n    return zod.object({\n      name: zod.string(),\n      money: zod.number().min(10)\n    }),\n  }\n});\n\n// O FormModel \xe9 \xfatil caso tenha criado uma schema nova no validationSchema\n// do contr\xe1rio o ideal \xe9 o infer do zod.\nconst onSubmit = useCallback((data: FormModel<typeof form>) => console.log({data}))\n\n<Form context={form} onSubmit={data => console.log(data)}>\n  <Input label='Name' name='name' />\n  <Currency label='Money' name='money' />\n\n  <Button type='submit'>Submit</Button>\n</Form>\n")),(0,o.kt)("h3",Object.assign({},{id:"parametros"}),"Parametros"),(0,o.kt)("p",null,"O \xfanico parametro especifico \xe9 o validationSchema, o resto \xe9 configura\xe7\xe3o padr\xe3o do ",(0,o.kt)("a",Object.assign({parentName:"p"},{href:"https://react-hook-form.com/api/useform"}),"react-hook-form"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,o.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,o.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,o.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",Object.assign({parentName:"tr"},{align:null}),"validationSchema"),(0,o.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"function")),(0,o.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"true")),(0,o.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Utilizado para valida\xe7\xe3o do formul\xe1rio")))))}i.isMDXComponent=!0;var l={editThisPagePath:"src/pages/forms/README.mdx"};for(var m in l)window[m]=l[m]},31373:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}a.d(t,{Z:function(){return n}})}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=68059)}),_N_E=e.O()}]);