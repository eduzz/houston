(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6019],{39811:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Forms/Select",function(){return c(72218)}])},33356:function(f,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.useFormContext=a.FormFieldsContext=void 0;var c=b(59312),g=b(24246),d=c.__importStar(b(27378)),e=b(55693);a.FormFieldsContext=(0,e.createContext)(null),a.useFormContext=function(){return(0,e.useContext)(a.FormFieldsContext)},a.default=d.memo(function(d){var b=d.context,e=c.__rest(d,["context"]);return(0,g.jsx)(a.FormFieldsContext.Provider,Object.assign({value:b},{children:(0,g.jsx)("form",Object.assign({},e,{onReset:b.handleReset,onSubmit:b.handleSubmit}))}))})},47687:function(g,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var b=a(59312),h=a(24246),d=b.__importStar(a(27378)),i=b.__importDefault(a(51906)),j=b.__importDefault(a(29532)),k=b.__importDefault(a(29287)),l=b.__importDefault(a(52107)),m=b.__importDefault(a(56876)),n=b.__importDefault(a(91121)),o=b.__importDefault(a(3639)),p=b.__importDefault(a(14972)),q=b.__importDefault(a(39435)),r=a(55693),e=b.__importDefault(a(35686)),s=a(33356),t=(0,e.default)(function(){return{endAdornment:{background:"white",position:"relative",zIndex:1,right:-2}}}),f=d.forwardRef(function(a,E){var e=a.label,f=a.value,v=a.name,w=a.loading,F=a.onChange,G=a.maxLabelItems,x=a.errorMessage,g=a.fullWidth,y=a.options,z=a.emptyOption,A=a.helperText,B=a.margin,H=a.size,u=b.__rest(a,["label","value","name","loading","onChange","maxLabelItems","errorMessage","fullWidth","options","emptyOption","helperText","margin","size"]),I=t(),J=(0,r.useContextSelector)(s.FormFieldsContext,function(a){return null==a?void 0:a.isSubmitting}),C=(0,r.useContextSelector)(s.FormFieldsContext,function(a){return null==a?void 0:a.getFieldValue(v)}),K=(0,r.useContextSelector)(s.FormFieldsContext,function(a){return null==a?void 0:a.getFieldError(v)}),D=(0,r.useContextSelector)(s.FormFieldsContext,function(a){return null==a?void 0:a.setFieldValue});if(!v&&D)throw new Error("@eduzz/houston-ui: to use form prop you need provide a name for the field");var L=d.useMemo(function(){return w?(0,h.jsx)(m.default,Object.assign({position:"end"},{children:(0,h.jsx)("div",Object.assign({className:I.endAdornment},{children:(0,h.jsx)(j.default,{color:"secondary",size:20})}))})):null},[w,I.endAdornment]),M=d.useCallback(function(a){var b;return Array.isArray(a)?a.length>(null!=G?G:3)?"".concat(a.length," selecionados"):y.filter(function(b){return a.includes(b.value)}).map(function(a){return a.label}).join(", "):null===(b=y.find(function(b){return a===b.value}))|| void 0===b?void 0:b.label},[y,G]),N=d.useCallback(function(b){var a=b.target.value;Array.isArray(a)&&a.includes("")&&(a=[]),F&&F(a,b),D&&D(v,a)},[F,D,v]);f=null!=C?C:f;var c=null!=x?x:K,O=d.useMemo(function(){return{select:"small"===H?"input-size-small":""}},[H]);return(0,h.jsxs)(k.default,Object.assign({margin:null!=B?B:"normal",fullWidth:null==g||g,error:!!c,variant:"outlined"},{children:[!!e&&(0,h.jsx)(n.default,Object.assign({error:!!c},{children:e})),!!e&&(0,h.jsx)(n.default,Object.assign({disabled:u.disabled||w,error:!!c},{children:e})),(0,h.jsxs)(q.default,Object.assign({error:!!c},u,{classes:Object.assign({},O),inputRef:E,disabled:J||u.disabled||w,name:v,value:null!=f?f:u.multiple?[]:"",onChange:N,fullWidth:null==g||g,label:e,endAdornment:L,renderValue:M},{children:[z&&(0,h.jsx)(p.default,Object.assign({disabled:!0,value:""},{children:z})),(y||[]).map(function(a){return(0,h.jsxs)(p.default,Object.assign({disabled:a.disabled,value:a.value},{children:[u.multiple&&(0,h.jsx)(i.default,{checked:null==f?void 0:f.includes(a.value)}),(0,h.jsx)(o.default,{primary:a.label})]}),"option-value-".concat(a.value))})]})),!!(c||A)&&(0,h.jsx)(l.default,Object.assign({error:!!c,variant:"outlined"},{children:c||A}))]}))});c.default=d.memo(f)},35686:function(d,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var c=a(59312),e=a(87651),f=c.__importDefault(a(44659));b.default=function(a){return function(c){var b;return b="function"==typeof a?a((0,f.default)()):a,Object.keys(b).reduce(function(h,d){var a,f,g;return Object.assign(Object.assign({},h),(a={},f=d,g=(0,e.css)("function"==typeof b[d]?b[d](c):b[d]),f in a?Object.defineProperty(a,f,{value:g,enumerable:!0,configurable:!0,writable:!0}):a[f]=g,a))},{})}}},44659:function(c,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var d=b(151);a.default=function(){return(0,d.useTheme)()}},72218:function(g,b,a){"use strict";a.r(b),a.d(b,{meta:function(){return e},"default":function(){return f}});var h=a(27378),i=a(35318),j=a(56100),k=a(47687);function l(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function m(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||n(a,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(a,c){if(a){if("string"==typeof a)return l(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return l(a,c)}}var e={name:"Select Field",tableOfContents:{depth:0,children:[{depth:1,slug:"#select-field",title:"Select Field",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"},{depth:3,slug:"#sele\xe7\xe3o-de-m\xfaltiplas-op\xe7\xf5es",title:"Sele\xe7\xe3o de m\xfaltiplas op\xe7\xf5es"}]}]}]}},o={meta:e};function f(b){var c=b.components,a=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(b,["components"]);return(0,i.kt)("wrapper",Object.assign({},o,a,{components:c,mdxType:"MDXLayout"}),(0,i.kt)("h1",Object.assign({},{id:"select-field"}),"Select Field"),(0,i.kt)("p",null,"O componente de sele\xe7\xe3o \xe9 usado para exibir uma lista de op\xe7\xf5es para serem selecionadas."),(0,i.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import SelectField from '@eduzz/houston-ui/Forms/Select';\n")),(0,i.kt)("h3",Object.assign({},{id:"exemplo"}),"Exemplo"),(0,i.kt)(j.X,{__position:0,code:'() => {\n  const [text, setText] = React.useState(\'\')\n  const [multiple, setMultiple] = React.useState([])\n  const [options] = React.useState(() => [\n    { value: 1, label: \'Op\xe7\xe3o 1\' },\n    { value: 2, label: \'Op\xe7\xe3o 2\' },\n    { value: 3, label: \'Op\xe7\xe3o 3 (desabilitada)\', disabled: true },\n    { value: 4, label: \'Op\xe7\xe3o 4\' },\n    { value: 5, label: \'Op\xe7\xe3o 5\' },\n  ])\n  return (\n    <>\n      <p>Componente de sele\xe7\xe3o com op\xe7\xe3o em branco</p>\n      <SelectField\n        label="Componente de sele\xe7\xe3o"\n        emptyOption="Selecione..."\n        options={options}\n        value={text}\n        onChange={setText}\n      />\n      <p>Componente de sele\xe7\xe3o desabilitado</p>\n      <SelectField\n        label="Componente de sele\xe7\xe3o"\n        options={options}\n        disabled\n        value={text}\n        onChange={setText}\n      />\n      <p>Componente de sele\xe7\xe3o com carregamento</p>\n      <SelectField\n        label="Componente de sele\xe7\xe3o"\n        options={options}\n        loading\n        value={text}\n        onChange={setText}\n      />\n      <p>Componente de sele\xe7\xe3o com texto de ajuda</p>\n      <SelectField\n        label="Componente de sele\xe7\xe3o"\n        helperText="Exemplo de texto de ajuda"\n        options={options}\n        disabled\n        value={text}\n        onChange={setText}\n      />\n      <p>Componente de sele\xe7\xe3o com mensagem de erro</p>\n      <SelectField\n        label="Componente de sele\xe7\xe3o"\n        errorMessage="Mensagem de erro"\n        options={options}\n        value={text}\n        onChange={setText}\n      />\n    </>\n  )\n}',scope:{props:a,Playground:j.X,SelectField:k.default,meta:e},mdxType:"Playground"},function(){var d=m(h.useState(""),2),a=d[0],b=d[1],e=m(h.useState([]),2);e[0],e[1];var c=m(h.useState(function(){return[{value:1,label:"Op\xe7\xe3o 1"},{value:2,label:"Op\xe7\xe3o 2"},{value:3,label:"Op\xe7\xe3o 3 (desabilitada)",disabled:!0},{value:4,label:"Op\xe7\xe3o 4"},{value:5,label:"Op\xe7\xe3o 5"}]}),1)[0];return(0,i.kt)(h.Fragment,null,(0,i.kt)("p",null,"Componente de sele\xe7\xe3o com op\xe7\xe3o em branco"),(0,i.kt)(k.default,{label:"Componente de sele\xe7\xe3o",emptyOption:"Selecione...",options:c,value:a,onChange:b,mdxType:"SelectField"}),(0,i.kt)("p",null,"Componente de sele\xe7\xe3o desabilitado"),(0,i.kt)(k.default,{label:"Componente de sele\xe7\xe3o",options:c,disabled:!0,value:a,onChange:b,mdxType:"SelectField"}),(0,i.kt)("p",null,"Componente de sele\xe7\xe3o com carregamento"),(0,i.kt)(k.default,{label:"Componente de sele\xe7\xe3o",options:c,loading:!0,value:a,onChange:b,mdxType:"SelectField"}),(0,i.kt)("p",null,"Componente de sele\xe7\xe3o com texto de ajuda"),(0,i.kt)(k.default,{label:"Componente de sele\xe7\xe3o",helperText:"Exemplo de texto de ajuda",options:c,disabled:!0,value:a,onChange:b,mdxType:"SelectField"}),(0,i.kt)("p",null,"Componente de sele\xe7\xe3o com mensagem de erro"),(0,i.kt)(k.default,{label:"Componente de sele\xe7\xe3o",errorMessage:"Mensagem de erro",options:c,value:a,onChange:b,mdxType:"SelectField"}))}),(0,i.kt)("h3",Object.assign({},{id:"sele\xe7\xe3o-de-m\xfaltiplas-op\xe7\xf5es"}),"Sele\xe7\xe3o de m\xfaltiplas op\xe7\xf5es"),(0,i.kt)(j.X,{__position:1,code:"() => {\n  const [text, setText] = React.useState('')\n  const [multiple, setMultiple] = React.useState([])\n  const [options] = React.useState(() => [\n    { value: 1, label: 'Op\xe7\xe3o 1' },\n    { value: 2, label: 'Op\xe7\xe3o 2' },\n    { value: 3, label: 'Op\xe7\xe3o 3 (desabilitada)', disabled: true },\n    { value: 4, label: 'Op\xe7\xe3o 4' },\n    { value: 5, label: 'Op\xe7\xe3o 5' },\n  ])\n  return (\n    <SelectField\n      label=\"Componente de sele\xe7\xe3o\"\n      multiple\n      emptyOption=\"Limpar\"\n      options={options}\n      value={multiple}\n      onChange={setMultiple}\n    />\n  )\n}",scope:{props:a,Playground:j.X,SelectField:k.default,meta:e},mdxType:"Playground"},function(){var a=m(h.useState(""),2);a[0],a[1];var b=m(h.useState([]),2),c=b[0],d=b[1],e=m(h.useState(function(){return[{value:1,label:"Op\xe7\xe3o 1"},{value:2,label:"Op\xe7\xe3o 2"},{value:3,label:"Op\xe7\xe3o 3 (desabilitada)",disabled:!0},{value:4,label:"Op\xe7\xe3o 4"},{value:5,label:"Op\xe7\xe3o 5"}]}),1),f=e[0];return(0,i.kt)(k.default,{label:"Componente de sele\xe7\xe3o",multiple:!0,emptyOption:"Limpar",options:f,value:c,onChange:d,mdxType:"SelectField"})}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"id"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"name"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"label"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"disabled"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"fullWidth"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"multiple"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Permite selecionar uma ou mais op\xe7\xf5es")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"className"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"classes"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"ClassNameMap")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"loading"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Exibe \xedcone de carregamento no componente")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"helperText"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Exibe texto de ajuda abaixo do componente de sele\xe7\xe3o")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"errorMessage"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Exibe uma mensagem de erro no componente de sele\xe7\xe3o, assim como indica erro no campo")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"form"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"IFormAdapter")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"options"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"ISelectFieldOption[]")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Lista de op\xe7\xf5es")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"emptyOption"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Texto de uma op\xe7\xe3o que n\xe3o possui um valor v\xe1lido")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"maxLabelItems"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"value"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"any")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"margin"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"none"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"dense"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"normal")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"normal")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))))))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/ui-components/Forms/Select/index.mdx"};for(var d in c)window[d]=c[d]}},function(a){a.O(0,[4526,4356,9961,6557,1281,5261,3707,6970,9753,3245,9774,2888,179],function(){return a(a.s=39811)}),_N_E=a.O()}])