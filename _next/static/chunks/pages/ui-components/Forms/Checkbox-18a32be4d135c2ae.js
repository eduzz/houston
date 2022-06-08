(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2776],{98080:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Forms/Checkbox",function(){return c(1436)}])},69012:function(e,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.useFormValue=function(e,a){var b=c.useContextSelector(d,function(a){return e?null==a?void 0:a.getFieldValue(e):null});return null!=a?a:b},a.useFormError=function(e,a){var b=c.useContextSelector(d,function(a){return e?null==a?void 0:a.getFieldError(e):null});return null!=a?a:b},a.useFormIsSubmitting=function(){return c.useContextSelector(d,function(a){return null==a?void 0:a.isSubmitting})},a.useFormSetValue=function(a){var b=c.useContextSelector(d,function(b){return a?null==b?void 0:b.setFieldValue:null});return f.useCallback(function(c){return b&&b(a,c)},[b,a])},a.default=void 0;var f=b(39037).interopRequireWildcard(b(27378)),c=b(55693),d=c.createContext(null);a.default=d},16847:function(e,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=b(39037).interopRequireWildcard(b(96342));Object.keys(c).forEach(function(b){"default"!==b&&"__esModule"!==b&&(b in a&&a[b]===c[b]||Object.defineProperty(a,b,{enumerable:!0,get:function(){return c[b]}}))});var d=c.default;a.default=d},82288:function(d,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),e=a(24246);c.interopRequireWildcard(a(27378));var f=c.interopRequireDefault(a(57409));b.default=function(a){return e.jsx(f.default,c.objectSpread({},a,{type:"checkbox"}))}},1436:function(g,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return f},meta:function(){return e}});var h=a(27378),i=a(35318),j=a(56100),k=a(82288);function l(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function m(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||n(a,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(a,c){if(a){if("string"==typeof a)return l(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return l(a,c)}}var e={name:"Checkbox",tableOfContents:{depth:0,children:[{depth:1,slug:"#checkbox",title:"Checkbox",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#varia\xe7\xf5es",title:"Varia\xe7\xf5es"},{depth:3,slug:"#multiplos-valores",title:"Multiplos valores"},{depth:3,slug:"#utilizando-m\xe9todo-onchange-sem-hook-useform",title:"Utilizando m\xe9todo onChange (sem hook useForm)"},{depth:3,slug:"#props",title:"Props"}]}]}]}},o={meta:e};function f(b){var c=b.components,a=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(b,["components"]);return(0,i.kt)("wrapper",Object.assign({},o,a,{components:c,mdxType:"MDXLayout"}),(0,i.kt)("h1",Object.assign({},{id:"checkbox"}),"Checkbox"),(0,i.kt)("p",null,"O componente de caixa de sele\xe7\xe3o (Checkbox) permite que o usu\xe1rio selecione um ou mais itens de um determinado grupo."),(0,i.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import Checkbox from '@eduzz/houston-ui/Forms/Checkbox';\n")),(0,i.kt)("h3",Object.assign({},{id:"varia\xe7\xf5es"}),"Varia\xe7\xf5es"),(0,i.kt)(j.X,{__position:0,code:'() => {\n  const [checked, setChecked] = React.useState(false)\n  return (\n    <>\n      <Checkbox checked={checked} onChange={setChecked}>\n        Simples\n      </Checkbox>\n      <Checkbox\n        helperText="Exemplo de utiliza\xe7\xe3o do Checkbox com descri\xe7\xe3o"\n        checked={checked}\n        onChange={setChecked}\n      >\n        Com descri\xe7\xe3o\n      </Checkbox>\n      <Checkbox\n        errorMessage="Mensagem de erro"\n        checked={checked}\n        onChange={setChecked}\n      >\n        Com erro\n      </Checkbox>\n      <Checkbox\n        disabled\n        helperText="Checkbox sem margem"\n        checked={checked}\n        onChange={setChecked}\n      >\n        Desativado\n      </Checkbox>\n    </>\n  )\n}',scope:{props:a,Playground:j.X,Checkbox:k.default,meta:e},mdxType:"Playground"},function(){var c=m(h.useState(!1),2),a=c[0],b=c[1];return(0,i.kt)(h.Fragment,null,(0,i.kt)(k.default,{checked:a,onChange:b,mdxType:"Checkbox"},"Simples"),(0,i.kt)(k.default,{helperText:"Exemplo de utiliza\xe7\xe3o do Checkbox com descri\xe7\xe3o",checked:a,onChange:b,mdxType:"Checkbox"},"Com descri\xe7\xe3o"),(0,i.kt)(k.default,{errorMessage:"Mensagem de erro",checked:a,onChange:b,mdxType:"Checkbox"},"Com erro"),(0,i.kt)(k.default,{disabled:!0,helperText:"Checkbox sem margem",checked:a,onChange:b,mdxType:"Checkbox"},"Desativado"))}),(0,i.kt)("h3",Object.assign({},{id:"multiplos-valores"}),"Multiplos valores"),(0,i.kt)(j.X,{__position:1,code:"() => {\n  const [value, setValue] = React.useState([])\n  return (\n    <>\n      <p>Valores: {JSON.stringify(value)}</p>\n      <Checkbox checked={value} multiple value={1} onChange={setValue}>\n        Valor 1\n      </Checkbox>\n      <Checkbox checked={value} multiple value={2} onChange={setValue}>\n        Valor 2\n      </Checkbox>\n      <Checkbox checked={value} multiple value={3} onChange={setValue}>\n        Valor 3\n      </Checkbox>\n    </>\n  )\n}",scope:{props:a,Playground:j.X,Checkbox:k.default,meta:e},mdxType:"Playground"},function(){var c=m(h.useState([]),2),a=c[0],b=c[1];return(0,i.kt)(h.Fragment,null,(0,i.kt)("p",null,"Valores: ",JSON.stringify(a)),(0,i.kt)(k.default,{checked:a,multiple:!0,value:1,onChange:b,mdxType:"Checkbox"},"Valor 1"),(0,i.kt)(k.default,{checked:a,multiple:!0,value:2,onChange:b,mdxType:"Checkbox"},"Valor 2"),(0,i.kt)(k.default,{checked:a,multiple:!0,value:3,onChange:b,mdxType:"Checkbox"},"Valor 3"))}),(0,i.kt)("h3",Object.assign({},{id:"utilizando-m\xe9todo-onchange-sem-hook-useform"}),"Utilizando m\xe9todo onChange (sem hook useForm)"),(0,i.kt)(j.X,{__position:2,code:"() => {\n  const [value, setValue] = React.useState(false)\n  const handleChange = (checked) => {\n    setValue(checked)\n    console.log('current checkbox value', checked)\n  }\n  return (\n    <Checkbox\n      helperText=\"Checkbox utilizando m\xe9todo de onChange\"\n      onChange={handleChange}\n      checked={value}\n    >\n      Exemplo com m\xe9todo onChange\n    </Checkbox>\n  )\n}",scope:{props:a,Playground:j.X,Checkbox:k.default,meta:e},mdxType:"Playground"},function(){var a=m(h.useState(!1),2),b=a[0],c=a[1];return(0,i.kt)(k.default,{helperText:"Checkbox utilizando m\xe9todo de onChange",onChange:function(a){c(a),console.log("current checkbox value",a)},checked:b,mdxType:"Checkbox"},"Exemplo com m\xe9todo onChange")}),(0,i.kt)("h3",Object.assign({},{id:"props"}),"Props"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"name"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"helperText"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"errorMessage"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"value"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Valor setado caso seja checkado")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"multiple"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Trata o valor passado como um array, \xfatil em caso de lista")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"checked"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Pode receber um boolean ou um array no caso de multiple")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onChange"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"function")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Fun\xe7\xe3o chamada quando o valor do checkbox \xe9 alterado")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"disabled"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))))))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/ui-components/Forms/Checkbox/index.mdx"};for(var d in c)window[d]=c[d]}},function(a){a.O(0,[4526,1996,9961,7978,7409,9774,2888,179],function(){return a(a.s=98080)}),_N_E=a.O()}])