(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6019],{39811:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Forms/Select",function(){return c(86826)}])},42900:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.useFormContext=b.FormFieldsContext=void 0;var d=c(59312),e=c(24246),f=(0,d.__importStar)(c(27378)),g=c(55693);b.FormFieldsContext=(0,g.createContext)(null),b.useFormContext=function(){return(0,g.useContext)(b.FormFieldsContext)},b.default=f.memo(function(a){var c=a.context,f=(0,d.__rest)(a,["context"]);return(0,e.jsx)(b.FormFieldsContext.Provider,(0,d.__assign)({value:c},{children:(0,e.jsx)("form",(0,d.__assign)({},f,{onReset:c.handleReset,onSubmit:c.handleSubmit}),void 0)}),void 0)})},56990:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(59312),e=c(24246),f=(0,d.__importStar)(c(27378)),g=(0,d.__importDefault)(c(73989)),h=(0,d.__importDefault)(c(83251)),i=(0,d.__importDefault)(c(39134)),j=(0,d.__importDefault)(c(2203)),k=(0,d.__importDefault)(c(60495)),l=(0,d.__importDefault)(c(7944)),m=(0,d.__importDefault)(c(67491)),n=(0,d.__importDefault)(c(82070)),o=(0,d.__importDefault)(c(6727)),p=c(55693),q=(0,d.__importDefault)(c(11376)),r=c(42900),s=(0,q.default)(function(){return{endAdornment:{background:"white",position:"relative",zIndex:1,right:-2}}}),t=f.forwardRef(function(a,b){var c=a.label,q=a.value,t=a.name,u=a.loading,v=a.onChange,w=a.maxLabelItems,x=a.errorMessage,y=a.fullWidth,z=a.options,A=a.emptyOption,B=a.helperText,C=a.margin,D=a.size,E=(0,d.__rest)(a,["label","value","name","loading","onChange","maxLabelItems","errorMessage","fullWidth","options","emptyOption","helperText","margin","size"]),F=s(),G=(0,p.useContextSelector)(r.FormFieldsContext,function(a){return null==a?void 0:a.isSubmitting}),H=(0,p.useContextSelector)(r.FormFieldsContext,function(a){return null==a?void 0:a.getFieldValue(t)}),I=(0,p.useContextSelector)(r.FormFieldsContext,function(a){return null==a?void 0:a.getFieldError(t)}),J=(0,p.useContextSelector)(r.FormFieldsContext,function(a){return null==a?void 0:a.setFieldValue});if(!t&&J)throw new Error("@eduzz/houston-ui: to use form prop you need provide a name for the field");var K=f.useMemo(function(){return u?(0,e.jsx)(k.default,(0,d.__assign)({position:"end"},{children:(0,e.jsx)("div",(0,d.__assign)({className:F.endAdornment},{children:(0,e.jsx)(h.default,{color:"secondary",size:20},void 0)}),void 0)}),void 0):null},[u,F.endAdornment]),L=f.useCallback(function(a){var b;return Array.isArray(a)?a.length>(null!=w?w:3)?a.length+" selecionados":z.filter(function(b){return a.includes(b.value)}).map(function(a){return a.label}).join(", "):null===(b=z.find(function(b){return a===b.value}))|| void 0===b?void 0:b.label},[z,w]),M=f.useCallback(function(a){var b=a.target.value;Array.isArray(b)&&b.includes("")&&(b=[]),v&&v(b,a),J&&J(t,b)},[v,J,t]);q=null!=H?H:q;var N=null!=x?x:I,O=f.useMemo(function(){return{select:"small"===D?"input-size-small":""}},[D]);return(0,e.jsxs)(i.default,(0,d.__assign)({margin:null!=C?C:"normal",fullWidth:null==y||y,error:!!N,variant:"outlined"},{children:[!!c&&(0,e.jsx)(l.default,(0,d.__assign)({error:!!N},{children:c}),void 0),!!c&&(0,e.jsx)(l.default,(0,d.__assign)({disabled:E.disabled||u,error:!!N},{children:c}),void 0),(0,e.jsxs)(o.default,(0,d.__assign)({error:!!N},E,{classes:(0,d.__assign)({},O),inputRef:b,disabled:G||E.disabled||u,name:t,value:null!=q?q:E.multiple?[]:"",onChange:M,fullWidth:null==y||y,label:c,endAdornment:K,renderValue:L},{children:[A&&(0,e.jsx)(n.default,(0,d.__assign)({disabled:!0,value:""},{children:A}),void 0),(z||[]).map(function(a){return(0,e.jsxs)(n.default,(0,d.__assign)({disabled:a.disabled,value:a.value},{children:[E.multiple&&(0,e.jsx)(g.default,{checked:null==q?void 0:q.includes(a.value)},void 0),(0,e.jsx)(m.default,{primary:a.label},void 0)]}),"option-value-"+a.value)})]}),void 0),!!(N||B)&&(0,e.jsx)(j.default,(0,d.__assign)({error:!!N,variant:"outlined"},{children:N||B}),void 0)]}),void 0)});b.default=f.memo(t)},11376:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(59312),e=c(87651),f=(0,d.__importDefault)(c(43297));b.default=function(a){return function(b){var c;return c="function"==typeof a?a((0,f.default)()):a,Object.keys(c).reduce(function(a,f){var g;return(0,d.__assign)((0,d.__assign)({},a),((g={})[f]=(0,e.css)("function"==typeof c[f]?c[f](b):c[f]),g))},{})}}},43297:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(81006);b.default=function(){return(0,d.useTheme)()}},86826:function(a,b,c){"use strict";c.r(b),c.d(b,{meta:function(){return i},"default":function(){return k}});var d=c(27378),e=c(35318),f=c(56100),g=c(56990);function h(a,b){return(function(a){if(Array.isArray(a))return a})(a)||(function(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(i){e=!0,f=i}finally{try{d||null==h.return||h.return()}finally{if(e)throw f}}return c})(a,b)||(function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")})()}var i={name:"Select Field",tableOfContents:{depth:0,children:[{depth:1,slug:"#select-field",title:"Select Field",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"},{depth:3,slug:"#sele\xe7\xe3o-de-m\xfaltiplas-op\xe7\xf5es",title:"Sele\xe7\xe3o de m\xfaltiplas op\xe7\xf5es"}]}]}]}},j={meta:i};function k(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,e.kt)("wrapper",Object.assign({},j,c,{components:b,mdxType:"MDXLayout"}),(0,e.kt)("h1",Object.assign({},{id:"select-field"}),"Select Field"),(0,e.kt)("p",null,"O componente de sele\xe7\xe3o \xe9 usado para exibir uma lista de op\xe7\xf5es para serem selecionadas."),(0,e.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,e.kt)("pre",null,(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import SelectField from '@eduzz/houston-ui/Forms/Select';\n")),(0,e.kt)("h3",Object.assign({},{id:"exemplo"}),"Exemplo"),(0,e.kt)(f.X,{__position:0,code:"() => {\n  const [text, setText] = React.useState('')\n  const [multiple, setMultiple] = React.useState([])\n  const [options] = React.useState(() => [\n    { value: 1, label: 'Op\xe7\xe3o 1' },\n    { value: 2, label: 'Op\xe7\xe3o 2' },\n    { value: 3, label: 'Op\xe7\xe3o 3 (desabilitada)', disabled: true },\n    { value: 4, label: 'Op\xe7\xe3o 4' },\n    { value: 5, label: 'Op\xe7\xe3o 5' },\n  ])\n  return (\n    <>\n      <p>Componente de sele\xe7\xe3o com op\xe7\xe3o em branco</p>\n      <SelectField\n        label=\"Componente de sele\xe7\xe3o\"\n        emptyOption=\"Selecione...\"\n        options={options}\n        value={text}\n        onChange={setText}\n      />\n      <p>Componente de sele\xe7\xe3o desabilitado</p>\n      <SelectField\n        label=\"Componente de sele\xe7\xe3o\"\n        options={options}\n        disabled\n        value={text}\n        onChange={setText}\n      />\n      <p>Componente de sele\xe7\xe3o com carregamento</p>\n      <SelectField\n        label=\"Componente de sele\xe7\xe3o\"\n        options={options}\n        loading\n        value={text}\n        onChange={setText}\n      />\n      <p>Componente de sele\xe7\xe3o com texto de ajuda</p>\n      <SelectField\n        label=\"Componente de sele\xe7\xe3o\"\n        helperText=\"Exemplo de texto de ajuda\"\n        options={options}\n        disabled\n        value={text}\n        onChange={setText}\n      />\n      <p>Componente de sele\xe7\xe3o com mensagem de erro</p>\n      <SelectField\n        label=\"Componente de sele\xe7\xe3o\"\n        errorMessage=\"Mensagem de erro\"\n        options={options}\n        value={text}\n        onChange={setText}\n      />\n    </>\n  )\n}",scope:{props:c,Playground:f.X,SelectField:g.default,meta:i},mdxType:"Playground"},function(){var a=h(d.useState(""),2),b=a[0],c=a[1],f=h(d.useState([]),2);f[0],f[1];var i=h(d.useState(function(){return[{value:1,label:"Op\xe7\xe3o 1"},{value:2,label:"Op\xe7\xe3o 2"},{value:3,label:"Op\xe7\xe3o 3 (desabilitada)",disabled:!0},{value:4,label:"Op\xe7\xe3o 4"},{value:5,label:"Op\xe7\xe3o 5"}]}),1)[0];return(0,e.kt)(d.Fragment,null,(0,e.kt)("p",null,"Componente de sele\xe7\xe3o com op\xe7\xe3o em branco"),(0,e.kt)(g.default,{label:"Componente de sele\xe7\xe3o",emptyOption:"Selecione...",options:i,value:b,onChange:c,mdxType:"SelectField"}),(0,e.kt)("p",null,"Componente de sele\xe7\xe3o desabilitado"),(0,e.kt)(g.default,{label:"Componente de sele\xe7\xe3o",options:i,disabled:!0,value:b,onChange:c,mdxType:"SelectField"}),(0,e.kt)("p",null,"Componente de sele\xe7\xe3o com carregamento"),(0,e.kt)(g.default,{label:"Componente de sele\xe7\xe3o",options:i,loading:!0,value:b,onChange:c,mdxType:"SelectField"}),(0,e.kt)("p",null,"Componente de sele\xe7\xe3o com texto de ajuda"),(0,e.kt)(g.default,{label:"Componente de sele\xe7\xe3o",helperText:"Exemplo de texto de ajuda",options:i,disabled:!0,value:b,onChange:c,mdxType:"SelectField"}),(0,e.kt)("p",null,"Componente de sele\xe7\xe3o com mensagem de erro"),(0,e.kt)(g.default,{label:"Componente de sele\xe7\xe3o",errorMessage:"Mensagem de erro",options:i,value:b,onChange:c,mdxType:"SelectField"}))}),(0,e.kt)("h3",Object.assign({},{id:"sele\xe7\xe3o-de-m\xfaltiplas-op\xe7\xf5es"}),"Sele\xe7\xe3o de m\xfaltiplas op\xe7\xf5es"),(0,e.kt)(f.X,{__position:1,code:"() => {\n  const [text, setText] = React.useState('')\n  const [multiple, setMultiple] = React.useState([])\n  const [options] = React.useState(() => [\n    { value: 1, label: 'Op\xe7\xe3o 1' },\n    { value: 2, label: 'Op\xe7\xe3o 2' },\n    { value: 3, label: 'Op\xe7\xe3o 3 (desabilitada)', disabled: true },\n    { value: 4, label: 'Op\xe7\xe3o 4' },\n    { value: 5, label: 'Op\xe7\xe3o 5' },\n  ])\n  return (\n    <SelectField\n      label=\"Componente de sele\xe7\xe3o\"\n      multiple\n      emptyOption=\"Limpar\"\n      options={options}\n      value={multiple}\n      onChange={setMultiple}\n    />\n  )\n}",scope:{props:c,Playground:f.X,SelectField:g.default,meta:i},mdxType:"Playground"},function(){var a=h(d.useState(""),2);a[0],a[1];var b=h(d.useState([]),2),c=b[0],f=b[1],i=h(d.useState(function(){return[{value:1,label:"Op\xe7\xe3o 1"},{value:2,label:"Op\xe7\xe3o 2"},{value:3,label:"Op\xe7\xe3o 3 (desabilitada)",disabled:!0},{value:4,label:"Op\xe7\xe3o 4"},{value:5,label:"Op\xe7\xe3o 5"}]}),1),j=i[0];return(0,e.kt)(g.default,{label:"Componente de sele\xe7\xe3o",multiple:!0,emptyOption:"Limpar",options:j,value:c,onChange:f,mdxType:"SelectField"})}),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"id"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"string")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"name"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"string")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"true")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"label"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"disabled"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"boolean")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"fullWidth"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"boolean")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"multiple"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"boolean")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Permite selecionar uma ou mais op\xe7\xf5es")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"className"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"string")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"classes"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"ClassNameMap")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"loading"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"boolean")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Exibe \xedcone de carregamento no componente")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"helperText"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"string")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Exibe texto de ajuda abaixo do componente de sele\xe7\xe3o")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"errorMessage"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"string")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Exibe uma mensagem de erro no componente de sele\xe7\xe3o, assim como indica erro no campo")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"form"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"IFormAdapter")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"options"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"ISelectFieldOption[]")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Lista de op\xe7\xf5es")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"emptyOption"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"string")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Texto de uma op\xe7\xe3o que n\xe3o possui um valor v\xe1lido")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"maxLabelItems"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"number")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"value"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"any")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"margin"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"none"),", ",(0,e.kt)("inlineCode",{parentName:"td"},"dense"),", ",(0,e.kt)("inlineCode",{parentName:"td"},"normal")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"normal")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}))))))}k.isMDXComponent=!0;var l={editThisPagePath:"src/pages/ui-components/Forms/Select/index.mdx"};for(var m in l)window[m]=l[m]}},function(a){a.O(0,[4526,4357,9961,161,1894,173,1055,7899,3287,4865,9774,2888,179],function(){return a(a.s=39811)}),_N_E=a.O()}])