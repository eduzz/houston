(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2672],{42470:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Forms/Text",function(){return c(78988)}])},2465:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default={apply:function(a){if(!a)return"";var b=/^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2}).*/,c="$1.$2.$3/$4-$5";return a.replace(b,c).replace(/[-./]$/,"").replace(/[-./]$/,"").replace(/[-./]$/,"")},clean:function(a){return(a||"").replace(/\D/gi,"").substr(0,14)}}},41448:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default={apply:function(a){if(!a)return"";var b=/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2}).*/,c="$1.$2.$3-$4";return a.replace(b,c).replace(/[-./]$/,"").replace(/[-./]$/,"").replace(/[-./]$/,"")},clean:function(a){return(a||"").replace(/\D/gi,"").substr(0,11)}}},74328:function(a,b,c){"use strict";var d=c(2465),e=c(41448);b.Z={apply:function(a){return a?a.length>11?d.default.apply(a):e.default.apply(a):""},clean:function(a){return a?a.length>11?d.default.clean(a):e.default.clean(a):""}}},7833:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default={apply:function(a){return null==a||""===a?"":new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(Number(a)||0)},clean:function(a){var b,c,d,e;(a=(a||"").toString().replace(/[^\d,]/gi,"")).includes(",")||(a="0,"+((d=(c=2,(b=a).length))<c?(e=c-d,new Array(e).fill("0").join("")+b):b||""));var f=a.split(",")[1];return f&&2!==f.length&&(a=a.replace(",","").replace(/(\d+)?(\d{2})/gi,"$1,$2").replace(/^,/gi,"0,")),parseFloat(a.replace(/\./gi,"").replace(",","."))}}},355:function(a,b){"use strict";b.Z={apply:function(a){if(!a)return"";var b=a.length>10?/^(\d{0,2})(\d{0,5})(\d{0,4}).*/:/^(\d{0,2})(\d{0,4})(\d{0,4}).*/,c=a.length>2?"($1) $2-$3":"($1$2$3";return a.replace(b,c).replace(/-$/,"")},clean:function(a){return(a||"").replace(/\D/gi,"").substr(0,11)}}},12700:function(a,b){"use strict";b.Z={apply:function(a){return a?a.replace(/^(\d{0,5})(\d{0,3}).*/,"$1-$2").replace(/-$/,""):""},clean:function(a){return(a||"").replace(/\D/gi,"").substr(0,8)}}},42900:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.useFormContext=b.FormFieldsContext=void 0;var d=c(59312),e=c(24246),f=(0,d.__importStar)(c(27378)),g=c(55693);b.FormFieldsContext=(0,g.createContext)(null),b.useFormContext=function(){return(0,g.useContext)(b.FormFieldsContext)},b.default=f.memo(function(a){var c=a.context,f=(0,d.__rest)(a,["context"]);return(0,e.jsx)(b.FormFieldsContext.Provider,(0,d.__assign)({value:c},{children:(0,e.jsx)("form",(0,d.__assign)({},f,{onReset:c.handleReset,onSubmit:c.handleSubmit}),void 0)}),void 0)})},77154:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(59312),e=c(24246),f=(0,d.__importStar)(c(27378)),g=(0,d.__importDefault)(c(83251)),h=(0,d.__importDefault)(c(16899)),i=(0,d.__importDefault)(c(53742)),j=(0,d.__importDefault)(c(38944)),k=c(55693),l=(0,d.__importDefault)(c(92984)),m=c(42900),n=f.forwardRef(function(a,b){var c=a.mask,n=a.value,o=a.name,p=a.loading,q=a.onChange,r=a.onBlur,s=a.errorMessage,t=a.fullWidth,u=a.margin,v=a.endAdornment,w=a.startAdornment,x=a.maxLength,y=a.onPressEnter,z=a.className,A=a.size,B=a.InputProps,C=a.onKeyPress,D=a.helperText,E=a.disabled,F=void 0!==E&&E,G=(0,d.__rest)(a,["mask","value","name","loading","onChange","onBlur","errorMessage","fullWidth","margin","endAdornment","startAdornment","maxLength","onPressEnter","className","size","InputProps","onKeyPress","helperText","disabled"]),H=(0,k.useContextSelector)(m.FormFieldsContext,function(a){return null==a?void 0:a.isSubmitting}),I=(0,k.useContextSelector)(m.FormFieldsContext,function(a){return null==a?void 0:a.getFieldValue(o)}),J=(0,k.useContextSelector)(m.FormFieldsContext,function(a){return null==a?void 0:a.getFieldError(o)}),K=(0,k.useContextSelector)(m.FormFieldsContext,function(a){return null==a?void 0:a.setFieldValue});if(!o&&K)throw new Error("@eduzz/houston-ui: to use form prop you need provide a name for the field");n=null!=I?I:n;var L=(0,l.default)(c,n),M=L.maskClean,N=L.maskedValue,O=f.useCallback(function(a){var b=M(a.currentTarget.value);x&&(b=b.substring(0,x)),q&&q(b,a),K&&K(o,b)},[q,M,K,o,x]),P=f.useCallback(function(a){r&&r(M(a.currentTarget.value),a)},[r,M]),Q=f.useMemo(function(){return(0,d.__assign)({},G.placeholder?{shrink:!0}:{})},[G.placeholder]),R=f.useMemo(function(){var a=null,b=null;return v&&(a=(0,e.jsx)(h.default,(0,d.__assign)({position:"end"},{children:v}),void 0)),w&&(b=(0,e.jsx)(h.default,(0,d.__assign)({position:"start"},{children:w}),void 0)),p&&(a=(0,e.jsx)(h.default,(0,d.__assign)({position:"end"},{children:(0,e.jsx)(g.default,{color:"secondary",size:20},void 0)}),void 0)),(0,d.__assign)((0,d.__assign)({},B),{endAdornment:a,startAdornment:b})},[v,w,p,B]),S=f.useCallback(function(a){var b=a.target;"Enter"===a.key&&(a.preventDefault(),y(M(b.value)))},[y,M]),T=null!=s?s:J;return(0,e.jsx)(i.default,(0,d.__assign)({error:!!T,inputRef:b},G,{disabled:H||F||p,helperText:T||D,className:(0,j.default)(z,"small"===A&&"input-size-small"),name:o,margin:null!=u?u:"normal",variant:"outlined",value:null!=N?N:"",onChange:O,onBlur:P,fullWidth:null==t||t,InputLabelProps:Q,InputProps:R,onKeyPress:y?S:C}),void 0)});b.default=f.memo(n)},92984:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=(0,c(59312).__importStar)(c(27378));b.default=function(a,b){var c=d.useMemo(function(){return null!=a?a:{apply:function(a){return a},clean:function(a){return a}}},[a]),e=c.apply,f=c.clean,g=d.useMemo(function(){return e?e(b):b},[b,e]),h=d.useMemo(function(){return f?f(b):b},[b,f]);return{maskApply:e,maskClean:f,maskedValue:g,cleanedValue:h}}},78988:function(a,b,c){"use strict";c.r(b),c.d(b,{meta:function(){return p},"default":function(){return r}});var d=c(27378),e=c(35318),f=c(47249),g=c(56100),h=c(2465),i=c(41448),j=c(74328),k=c(7833),l=c(355),m=c(12700),n=c(77154);function o(a,b){return(function(a){if(Array.isArray(a))return a})(a)||(function(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(i){e=!0,f=i}finally{try{d||null==h.return||h.return()}finally{if(e)throw f}}return c})(a,b)||(function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")})()}var p={name:"Text Field",tableOfContents:{depth:0,children:[{depth:1,slug:"#text-field",title:"Text Field",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplos",title:"Exemplos"},{depth:3,slug:"#componente-de-texto-com-m\xfaltiplas-linhas",title:"Componente de texto com m\xfaltiplas linhas"},{depth:3,slug:"#m\xe1scaras",title:"M\xe1scaras"}]}]}]}},q={meta:p};function r(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,e.kt)("wrapper",Object.assign({},q,c,{components:b,mdxType:"MDXLayout"}),(0,e.kt)("h1",Object.assign({},{id:"text-field"}),"Text Field"),(0,e.kt)("p",null,"O componente \xe9 respons\xe1vel por exibir um campo de texto para ser preenchido em formul\xe1rios, campos de pesquisa, entre outros."),(0,e.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,e.kt)("pre",null,(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import TextField from '@eduzz/houston-ui/Forms/Text';\n")),(0,e.kt)("h3",Object.assign({},{id:"exemplos"}),"Exemplos"),(0,e.kt)(g.X,{__position:0,code:"() => {\n  const [text, setText] = React.useState('')\n  return (\n    <>\n      <TextField label=\"Campo de Texto\" value={text} onChange={setText} />\n      <TextField\n        label=\"Campo com \xedcone\"\n        value={text}\n        startAdornment={<InsertEmoticonIcon />}\n        onChange={setText}\n      />\n      <TextField\n        label=\"Campo com \xedcone\"\n        value={text}\n        endAdornment={<InsertEmoticonIcon />}\n        onChange={setText}\n      />\n      <TextField\n        label=\"Campo de Texto\"\n        placeholder=\"Placeholder\"\n        value={text}\n        onChange={setText}\n      />\n      <TextField\n        label=\"Campo de Texto Desabilitado\"\n        disabled\n        value=\"Valor enviado via propriedade\"\n      />\n      <TextField\n        label=\"Campo de Texto com Carregamento\"\n        loading\n        value={text}\n        onChange={setText}\n      />\n      <TextField\n        label=\"Campo de Texto com Texto de Ajuda\"\n        helperText=\"Um exemplo de campo de ajuda\"\n        value={text}\n        onChange={setText}\n      />\n      <TextField\n        label=\"Campo de Texto com Erro\"\n        errorMessage=\"Mensagem de erro\"\n        value={text}\n        onChange={setText}\n      />\n    </>\n  )\n}",scope:{props:c,InsertEmoticonIcon:f.Z,Playground:g.X,cnpjMask:h.default,cpfMask:i.default,documentMask:j.Z,moneyMask:k.default,phoneMask:l.Z,zipcodeMask:m.Z,TextField:n.default,meta:p},mdxType:"Playground"},function(){var a=o(d.useState(""),2),b=a[0],c=a[1];return(0,e.kt)(d.Fragment,null,(0,e.kt)(n.default,{label:"Campo de Texto",value:b,onChange:c,mdxType:"TextField"}),(0,e.kt)(n.default,{label:"Campo com \xedcone",value:b,startAdornment:(0,e.kt)(f.Z,{mdxType:"InsertEmoticonIcon"}),onChange:c,mdxType:"TextField"}),(0,e.kt)(n.default,{label:"Campo com \xedcone",value:b,endAdornment:(0,e.kt)(f.Z,{mdxType:"InsertEmoticonIcon"}),onChange:c,mdxType:"TextField"}),(0,e.kt)(n.default,{label:"Campo de Texto",placeholder:"Placeholder",value:b,onChange:c,mdxType:"TextField"}),(0,e.kt)(n.default,{label:"Campo de Texto Desabilitado",disabled:!0,value:"Valor enviado via propriedade",mdxType:"TextField"}),(0,e.kt)(n.default,{label:"Campo de Texto com Carregamento",loading:!0,value:b,onChange:c,mdxType:"TextField"}),(0,e.kt)(n.default,{label:"Campo de Texto com Texto de Ajuda",helperText:"Um exemplo de campo de ajuda",value:b,onChange:c,mdxType:"TextField"}),(0,e.kt)(n.default,{label:"Campo de Texto com Erro",errorMessage:"Mensagem de erro",value:b,onChange:c,mdxType:"TextField"}))}),(0,e.kt)("h3",Object.assign({},{id:"componente-de-texto-com-m\xfaltiplas-linhas"}),"Componente de texto com m\xfaltiplas linhas"),(0,e.kt)(g.X,{__position:1,code:"() => {\n  const [text, setText] = React.useState('')\n  return (\n    <>\n      <TextField\n        label=\"Texto com m\xfaltiplas linhas\"\n        value={text}\n        onChange={setText}\n        multiline\n        rows={6}\n      />\n      <TextField\n        label=\"Texto com m\xfaltiplas linhas\"\n        disabled\n        value={text}\n        onChange={setText}\n        multiline\n      />\n      <TextField\n        label=\"Texto com m\xfaltiplas linhas com erro\"\n        errorMessage=\"Mensagem de erro\"\n        value={text}\n        onChange={setText}\n        multiline\n      />\n    </>\n  )\n}",scope:{props:c,InsertEmoticonIcon:f.Z,Playground:g.X,cnpjMask:h.default,cpfMask:i.default,documentMask:j.Z,moneyMask:k.default,phoneMask:l.Z,zipcodeMask:m.Z,TextField:n.default,meta:p},mdxType:"Playground"},function(){var a=o(d.useState(""),2),b=a[0],c=a[1];return(0,e.kt)(d.Fragment,null,(0,e.kt)(n.default,{label:"Texto com m\xfaltiplas linhas",value:b,onChange:c,multiline:!0,rows:6,mdxType:"TextField"}),(0,e.kt)(n.default,{label:"Texto com m\xfaltiplas linhas",disabled:!0,value:b,onChange:c,multiline:!0,mdxType:"TextField"}),(0,e.kt)(n.default,{label:"Texto com m\xfaltiplas linhas com erro",errorMessage:"Mensagem de erro",value:b,onChange:c,multiline:!0,mdxType:"TextField"}))}),(0,e.kt)("h3",Object.assign({},{id:"m\xe1scaras"}),"M\xe1scaras"),(0,e.kt)("pre",null,(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import maskPhone from '@eduzz/houston-forms/masks/phone';\n")),(0,e.kt)(g.X,{__position:2,code:"() => {\n  const [text, setText] = React.useState('')\n  const [money, setMoney] = React.useState()\n  const [phone, setPhone] = React.useState('')\n  const [zipcode, setZipcode] = React.useState('')\n  const [document, setDocument] = React.useState('')\n  const [cpf, setCpf] = React.useState('')\n  const [cnpj, setCnpj] = React.useState('')\n  return (\n    <>\n      <TextField\n        label=\"Moeda\"\n        name=\"money\"\n        value={money}\n        onChange={setMoney}\n        mask={moneyMask}\n      />\n      <TextField\n        label=\"Telefone\"\n        name=\"phone\"\n        value={phone}\n        onChange={setPhone}\n        mask={phoneMask}\n      />\n      <TextField\n        label=\"CEP\"\n        name=\"zipcode\"\n        value={zipcode}\n        onChange={setZipcode}\n        mask={zipcodeMask}\n      />\n      <TextField\n        label=\"Documento\"\n        name=\"document\"\n        value={document}\n        onChange={setDocument}\n        mask={documentMask}\n      />\n      <TextField\n        label=\"CNPJ\"\n        name=\"cnpj\"\n        value={cnpj}\n        onChange={setCnpj}\n        mask={cnpjMask}\n      />\n      <TextField\n        label=\"CPF\"\n        name=\"cpf\"\n        value={cpf}\n        onChange={setCpf}\n        mask={cpfMask}\n      />\n    </>\n  )\n}",scope:{props:c,InsertEmoticonIcon:f.Z,Playground:g.X,cnpjMask:h.default,cpfMask:i.default,documentMask:j.Z,moneyMask:k.default,phoneMask:l.Z,zipcodeMask:m.Z,TextField:n.default,meta:p},mdxType:"Playground"},function(){var a=o(d.useState(""),2);a[0],a[1];var b=o(d.useState(),2),c=b[0],f=b[1],g=o(d.useState(""),2),p=g[0],q=g[1],r=o(d.useState(""),2),s=r[0],t=r[1],u=o(d.useState(""),2),v=u[0],w=u[1],x=o(d.useState(""),2),y=x[0],z=x[1],A=o(d.useState(""),2),B=A[0],C=A[1];return(0,e.kt)(d.Fragment,null,(0,e.kt)(n.default,{label:"Moeda",name:"money",value:c,onChange:f,mask:k.default,mdxType:"TextField"}),(0,e.kt)(n.default,{label:"Telefone",name:"phone",value:p,onChange:q,mask:l.Z,mdxType:"TextField"}),(0,e.kt)(n.default,{label:"CEP",name:"zipcode",value:s,onChange:t,mask:m.Z,mdxType:"TextField"}),(0,e.kt)(n.default,{label:"Documento",name:"document",value:v,onChange:w,mask:j.Z,mdxType:"TextField"}),(0,e.kt)(n.default,{label:"CNPJ",name:"cnpj",value:B,onChange:C,mask:h.default,mdxType:"TextField"}),(0,e.kt)(n.default,{label:"CPF",name:"cpf",value:y,onChange:z,mask:i.default,mdxType:"TextField"}))}),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"id"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"string")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"name"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"string")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"true")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"label"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"type"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"React.InputHTMLAttributes")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"text")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"placeholder"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"string")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"disabled"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"boolean")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"fullWidth"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"boolean")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"true")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"multiline"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"boolean")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Permite um campo de texto com v\xe1rias linhas.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"className"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"string")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"loading"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"boolean")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Exibe \xedcone de carregamento no componente de texto.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"helperText"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"string")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Exibe texto de ajuda abaixo do componente de texto.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"errorMessage"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"string")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Exibe uma mensagem de erro no componente de texto, assim como indica erro no campo.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"mask"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"IFormMask")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"M\xe1scara que ser\xe1 aplicada no campo.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"value"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"any")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"margin"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"none"),", ",(0,e.kt)("inlineCode",{parentName:"td"},"dense"),", ",(0,e.kt)("inlineCode",{parentName:"td"},"normal")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"normal")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onChange"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"function")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Fun\xe7\xe3o disparada ao alterar o valor do campo de texto.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onPressEnter"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"function")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Fun\xe7\xe3o disparada ao apertar Enter dentro do campo de texto.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"endAdornment"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"\xcdcone ou bot\xe3o com \xedcone que ser\xe1 exibido no final do campo.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"startAdornment"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"\xcdcone ou bot\xe3o com \xedcone que ser\xe1 exibido no in\xedcio do campo.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"maxLength"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"number")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"rows"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"number")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"N\xfamero de linhas quando ",(0,e.kt)("inlineCode",{parentName:"td"},"multiline")," for verdadeiro.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"required"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"boolean")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"InputProps"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"Partial<OutlinedInputProps>")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Props aplicadas no input.")))))}r.isMDXComponent=!0;var s={editThisPagePath:"src/pages/ui-components/Forms/Text/index.mdx"};for(var t in s)window[t]=s[t]}},function(a){a.O(0,[4526,4357,9961,1894,173,1055,1500,4865,9774,2888,179],function(){return a(a.s=42470)}),_N_E=a.O()}])