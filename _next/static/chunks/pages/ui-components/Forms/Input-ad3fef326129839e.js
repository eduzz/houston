(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6653],{87651:function(j,d,c){"use strict";c.r(d),c.d(d,{cache:function(){return w},css:function(){return u},cx:function(){return p},flush:function(){return n},getRegisteredStyles:function(){return r},hydrate:function(){return o},injectGlobal:function(){return s},keyframes:function(){return t},merge:function(){return q},sheet:function(){return v}});var g=c(8786),k=c(74343),h=c(53211);function l(a,b){if(void 0===a.inserted[b.name])return a.insert("",b,a.sheet,!0)}function i(c,d,b){var a=[],e=(0,h.fp)(c,a,b);return a.length<2?b:e+d(a)}var e,b,f,m=function g(f){for(var c="",d=0;d<f.length;d++){var b=f[d];if(null!=b){var a=void 0;switch(typeof b){case"boolean":break;case"object":if(Array.isArray(b))a=g(b);else for(var e in a="",b)b[e]&&e&&(a&&(a+=" "),a+=e);break;default:a=b}a&&(c&&(c+=" "),c+=a)}}return c},a=(e={key:"css"},(b=(0,g.Z)(e)).sheet.speedy=function(a){this.isSpeedy=a},b.compat=!0,{css:f=function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];var e=(0,k.O)(d,b.registered,void 0);return(0,h.My)(b,e,!1),b.key+"-"+e.name},cx:function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];return i(b.registered,f,m(d))},injectGlobal:function(){for(var c=arguments.length,d=new Array(c),a=0;a<c;a++)d[a]=arguments[a];var e=(0,k.O)(d,b.registered);l(b,e)},keyframes:function(){for(var d=arguments.length,e=new Array(d),a=0;a<d;a++)e[a]=arguments[a];var c=(0,k.O)(e,b.registered),f="animation-"+c.name;return l(b,{name:c.name,styles:"@keyframes "+f+"{"+c.styles+"}"}),f},hydrate:function(a){a.forEach(function(a){b.inserted[a]=!0})},flush:function(){b.registered={},b.inserted={},b.sheet.flush()},sheet:b.sheet,cache:b,getRegisteredStyles:h.fp.bind(null,b.registered),merge:i.bind(null,b.registered,f)}),n=a.flush,o=a.hydrate,p=a.cx,q=a.merge,r=a.getRegisteredStyles,s=a.injectGlobal,t=a.keyframes,u=a.css,v=a.sheet,w=a.cache},94907:function(e,a){"use strict";const b=a=>a;let c;const d=(c=b,{configure(a){c=a},generate:a=>c(a),reset(){c=b}});a.Z=d},53892:function(c,a,b){"use strict";function d(a,c,d){const b={};return Object.keys(a).forEach(e=>{b[e]=a[e].reduce((b,a)=>(a&&(d&&d[a]&&b.push(d[a]),b.push(c(a))),b),[]).join(" ")}),b}b.d(a,{Z:function(){return d}})},30765:function(c,b,a){"use strict";a.d(b,{Z:function(){return f}});var d=a(94907);const e={active:"Mui-active",checked:"Mui-checked",completed:"Mui-completed",disabled:"Mui-disabled",error:"Mui-error",expanded:"Mui-expanded",focused:"Mui-focused",focusVisible:"Mui-focusVisible",required:"Mui-required",selected:"Mui-selected"};function f(b,a){const c=e[a];return c||`${d.Z.generate(b)}-${a}`}},12897:function(c,b,a){"use strict";a.d(b,{Z:function(){return e}});var d=a(30765);function e(c,a){const b={};return a.forEach(a=>{b[a]=(0,d.Z)(c,a)}),b}},69805:function(c,b,a){"use strict";a.d(b,{Z:function(){return f}});var d=a(27378),e=a(18030);function f(a){const b=d.useRef(a);return(0,e.Z)(()=>{b.current=a}),d.useCallback((...a)=>(0,b.current)(...a),[])}},14020:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Forms/Input",function(){return c(37366)}])},66097:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,a.default={apply:function(a){if(!a)return"";var b=/^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2}).*/,c="$1.$2.$3/$4-$5";return a.replace(b,c).replace(/[-./]$/,"").replace(/[-./]$/,"").replace(/[-./]$/,"")},clean:function(a){return(a||"").replace(/\D/gi,"").substr(0,14)}}},83438:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,a.default={apply:function(a){if(!a)return"";var b=/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2}).*/,c="$1.$2.$3-$4";return a.replace(b,c).replace(/[-./]$/,"").replace(/[-./]$/,"").replace(/[-./]$/,"")},clean:function(a){return(a||"").replace(/\D/gi,"").substr(0,11)}}},14536:function(d,b,a){"use strict";b.Z=void 0;var c=a(39037),e=c.interopRequireDefault(a(66097)),f=c.interopRequireDefault(a(83438));b.Z={apply:function(a){return a?a.length>11?e.default.apply(a):f.default.apply(a):""},clean:function(a){return a?a.length>11?e.default.clean(a):f.default.clean(a):""}}},85372:function(c,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var d=b(39037);a.default={apply:function(a){return null==a||""===a?"":new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(Number(a)||0)},clean:function(a){(a=(a||"").toString().replace(/[^\d,]/gi,"")).includes(",")||(a="0,"+((g=(f=2,(e=a).length))<f?(c=f-g,new Array(c).fill("0").join("")+e):e||""));var c,e,f,g,b=d.slicedToArray(a.split(","),2)[1];return b&&2!==b.length&&(a=a.replace(",","").replace(/(\d+)?(\d{2})/gi,"$1,$2").replace(/^,/gi,"0,")),parseFloat(a.replace(/\./gi,"").replace(",","."))}}},94609:function(b,a){"use strict";a.Z=void 0,a.Z={apply:function(a){if(!a)return"";var b=a.length>10?/^(\d{0,2})(\d{0,5})(\d{0,4}).*/:/^(\d{0,2})(\d{0,4})(\d{0,4}).*/,c=a.length>2?"($1) $2-$3":"($1$2$3";return a.replace(b,c).replace(/-$/,"")},clean:function(a){return(a||"").replace(/\D/gi,"").substr(0,11)}}},39044:function(b,a){"use strict";a.Z=void 0,a.Z={apply:function(a){return a?a.replace(/^(\d{0,5})(\d{0,3}).*/,"$1-$2").replace(/-$/,""):""},clean:function(a){return(a||"").replace(/\D/gi,"").substr(0,8)}}},37366:function(g,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return f},meta:function(){return e}});var h=a(27378),i=a(35318),j=a(47249),k=a(56100),l=a(66097),m=a(83438),n=a(14536),o=a(85372),p=a(94609),q=a(39044),r=a(25431);function s(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function t(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||u(a,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(a,c){if(a){if("string"==typeof a)return s(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return s(a,c)}}var e={name:"Input",tableOfContents:{depth:0,children:[{depth:1,slug:"#input",title:"Input",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplos",title:"Exemplos"},{depth:3,slug:"#componente-de-texto-com-m\xfaltiplas-linhas",title:"Componente de texto com m\xfaltiplas linhas"},{depth:3,slug:"#m\xe1scaras",title:"M\xe1scaras"},{depth:3,slug:"#props",title:"Props"}]}]}]}},v={meta:e};function f(b){var c=b.components,a=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(b,["components"]);return(0,i.kt)("wrapper",Object.assign({},v,a,{components:c,mdxType:"MDXLayout"}),(0,i.kt)("h1",Object.assign({},{id:"input"}),"Input"),(0,i.kt)("p",null,"O componente \xe9 respons\xe1vel por exibir um campo de texto para ser preenchido em formul\xe1rios, campos de pesquisa, entre outros."),(0,i.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import Input from '@eduzz/houston-ui/Forms/Input';\n")),(0,i.kt)("h3",Object.assign({},{id:"exemplos"}),"Exemplos"),(0,i.kt)(k.X,{__position:0,code:'() => {\n  const [text, setText] = React.useState(\'\')\n  return (\n    <>\n      <Input label="Campo de Texto" value={text} onChange={setText} />\n      <Input\n        label="Campo com \xedcone"\n        value={text}\n        startAdornment={<InsertEmoticonIcon />}\n        onChange={setText}\n      />\n      <Input\n        label="Campo com \xedcone"\n        value={text}\n        endAdornment={<InsertEmoticonIcon />}\n        onChange={setText}\n      />\n      <Input\n        label="Campo de Texto"\n        placeholder="Placeholder"\n        value={text}\n        onChange={setText}\n      />\n      <Input\n        label="Campo de Texto Desabilitado"\n        disabled\n        value="Valor enviado via propriedade"\n      />\n      <Input\n        label="Campo de Texto com Carregamento"\n        loading\n        value={text}\n        onChange={setText}\n      />\n      <Input\n        label="Campo de Texto com Texto de Ajuda"\n        helperText="Um exemplo de campo de ajuda"\n        value={text}\n        onChange={setText}\n      />\n      <Input\n        label="Campo de Texto com Erro"\n        errorMessage="Mensagem de erro"\n        value={text}\n        onChange={setText}\n      />\n    </>\n  )\n}',scope:{props:a,InsertEmoticonIcon:j.Z,Playground:k.X,cnpjMask:l.default,cpfMask:m.default,documentMask:n.Z,moneyMask:o.default,phoneMask:p.Z,zipcodeMask:q.Z,Input:r.default,meta:e},mdxType:"Playground"},function(){var c=t(h.useState(""),2),a=c[0],b=c[1];return(0,i.kt)(h.Fragment,null,(0,i.kt)(r.default,{label:"Campo de Texto",value:a,onChange:b,mdxType:"Input"}),(0,i.kt)(r.default,{label:"Campo com \xedcone",value:a,startAdornment:(0,i.kt)(j.Z,{mdxType:"InsertEmoticonIcon"}),onChange:b,mdxType:"Input"}),(0,i.kt)(r.default,{label:"Campo com \xedcone",value:a,endAdornment:(0,i.kt)(j.Z,{mdxType:"InsertEmoticonIcon"}),onChange:b,mdxType:"Input"}),(0,i.kt)(r.default,{label:"Campo de Texto",placeholder:"Placeholder",value:a,onChange:b,mdxType:"Input"}),(0,i.kt)(r.default,{label:"Campo de Texto Desabilitado",disabled:!0,value:"Valor enviado via propriedade",mdxType:"Input"}),(0,i.kt)(r.default,{label:"Campo de Texto com Carregamento",loading:!0,value:a,onChange:b,mdxType:"Input"}),(0,i.kt)(r.default,{label:"Campo de Texto com Texto de Ajuda",helperText:"Um exemplo de campo de ajuda",value:a,onChange:b,mdxType:"Input"}),(0,i.kt)(r.default,{label:"Campo de Texto com Erro",errorMessage:"Mensagem de erro",value:a,onChange:b,mdxType:"Input"}))}),(0,i.kt)("h3",Object.assign({},{id:"componente-de-texto-com-m\xfaltiplas-linhas"}),"Componente de texto com m\xfaltiplas linhas"),(0,i.kt)(k.X,{__position:1,code:'() => {\n  const [text, setText] = React.useState(\'\')\n  return (\n    <>\n      <Input\n        multiline\n        label="Campo de Texto"\n        value={text}\n        onChange={setText}\n      />\n      <Input\n        multiline\n        label="Campo com \xedcone"\n        value={text}\n        startAdornment={<InsertEmoticonIcon />}\n        onChange={setText}\n      />\n      <Input\n        multiline\n        label="Campo com \xedcone"\n        value={text}\n        endAdornment={<InsertEmoticonIcon />}\n        onChange={setText}\n      />\n      <Input\n        multiline\n        label="Campo de Texto"\n        placeholder="Placeholder"\n        value={text}\n        onChange={setText}\n      />\n      <Input\n        multiline\n        label="Campo de Texto Desabilitado"\n        disabled\n        value="Valor enviado via propriedade"\n      />\n      <Input\n        multiline\n        label="Campo de Texto com Carregamento"\n        loading\n        value={text}\n        onChange={setText}\n      />\n      <Input\n        multiline\n        label="Campo de Texto com Texto de Ajuda"\n        helperText="Um exemplo de campo de ajuda"\n        value={text}\n        onChange={setText}\n      />\n      <Input\n        multiline\n        label="Campo de Texto com Erro"\n        errorMessage="Mensagem de erro"\n        value={text}\n        onChange={setText}\n      />\n    </>\n  )\n}',scope:{props:a,InsertEmoticonIcon:j.Z,Playground:k.X,cnpjMask:l.default,cpfMask:m.default,documentMask:n.Z,moneyMask:o.default,phoneMask:p.Z,zipcodeMask:q.Z,Input:r.default,meta:e},mdxType:"Playground"},function(){var c=t(h.useState(""),2),a=c[0],b=c[1];return(0,i.kt)(h.Fragment,null,(0,i.kt)(r.default,{multiline:!0,label:"Campo de Texto",value:a,onChange:b,mdxType:"Input"}),(0,i.kt)(r.default,{multiline:!0,label:"Campo com \xedcone",value:a,startAdornment:(0,i.kt)(j.Z,{mdxType:"InsertEmoticonIcon"}),onChange:b,mdxType:"Input"}),(0,i.kt)(r.default,{multiline:!0,label:"Campo com \xedcone",value:a,endAdornment:(0,i.kt)(j.Z,{mdxType:"InsertEmoticonIcon"}),onChange:b,mdxType:"Input"}),(0,i.kt)(r.default,{multiline:!0,label:"Campo de Texto",placeholder:"Placeholder",value:a,onChange:b,mdxType:"Input"}),(0,i.kt)(r.default,{multiline:!0,label:"Campo de Texto Desabilitado",disabled:!0,value:"Valor enviado via propriedade",mdxType:"Input"}),(0,i.kt)(r.default,{multiline:!0,label:"Campo de Texto com Carregamento",loading:!0,value:a,onChange:b,mdxType:"Input"}),(0,i.kt)(r.default,{multiline:!0,label:"Campo de Texto com Texto de Ajuda",helperText:"Um exemplo de campo de ajuda",value:a,onChange:b,mdxType:"Input"}),(0,i.kt)(r.default,{multiline:!0,label:"Campo de Texto com Erro",errorMessage:"Mensagem de erro",value:a,onChange:b,mdxType:"Input"}))}),(0,i.kt)("h3",Object.assign({},{id:"m\xe1scaras"}),"M\xe1scaras"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import maskPhone from '@eduzz/houston-forms/masks/phone';\n")),(0,i.kt)(k.X,{__position:2,code:'() => {\n  const [text, setText] = React.useState(\'\')\n  const [money, setMoney] = React.useState()\n  const [phone, setPhone] = React.useState(\'\')\n  const [zipcode, setZipcode] = React.useState(\'\')\n  const [document, setDocument] = React.useState(\'\')\n  const [cpf, setCpf] = React.useState(\'\')\n  const [cnpj, setCnpj] = React.useState(\'\')\n  return (\n    <>\n      <Input\n        label="Moeda"\n        name="money"\n        value={money}\n        onChange={setMoney}\n        mask={moneyMask}\n      />\n      <Input\n        label="Telefone"\n        name="phone"\n        value={phone}\n        onChange={setPhone}\n        mask={phoneMask}\n      />\n      <Input\n        label="CEP"\n        name="zipcode"\n        value={zipcode}\n        onChange={setZipcode}\n        mask={zipcodeMask}\n      />\n      <Input\n        label="Documento (CPF/CNPJ)"\n        name="document"\n        value={document}\n        onChange={setDocument}\n        mask={documentMask}\n      />\n      <Input\n        label="CNPJ"\n        name="cnpj"\n        value={cnpj}\n        onChange={setCnpj}\n        mask={cnpjMask}\n      />\n      <Input\n        label="CPF"\n        name="cpf"\n        value={cpf}\n        onChange={setCpf}\n        mask={cpfMask}\n      />\n    </>\n  )\n}',scope:{props:a,InsertEmoticonIcon:j.Z,Playground:k.X,cnpjMask:l.default,cpfMask:m.default,documentMask:n.Z,moneyMask:o.default,phoneMask:p.Z,zipcodeMask:q.Z,Input:r.default,meta:e},mdxType:"Playground"},function(){var a=t(h.useState(""),2);a[0],a[1];var b=t(h.useState(),2),j=b[0],k=b[1],c=t(h.useState(""),2),s=c[0],u=c[1],d=t(h.useState(""),2),v=d[0],w=d[1],e=t(h.useState(""),2),x=e[0],y=e[1],f=t(h.useState(""),2),z=f[0],A=f[1],g=t(h.useState(""),2),B=g[0],C=g[1];return(0,i.kt)(h.Fragment,null,(0,i.kt)(r.default,{label:"Moeda",name:"money",value:j,onChange:k,mask:o.default,mdxType:"Input"}),(0,i.kt)(r.default,{label:"Telefone",name:"phone",value:s,onChange:u,mask:p.Z,mdxType:"Input"}),(0,i.kt)(r.default,{label:"CEP",name:"zipcode",value:v,onChange:w,mask:q.Z,mdxType:"Input"}),(0,i.kt)(r.default,{label:"Documento (CPF/CNPJ)",name:"document",value:x,onChange:y,mask:n.Z,mdxType:"Input"}),(0,i.kt)(r.default,{label:"CNPJ",name:"cnpj",value:B,onChange:C,mask:l.default,mdxType:"Input"}),(0,i.kt)(r.default,{label:"CPF",name:"cpf",value:z,onChange:A,mask:m.default,mdxType:"Input"}))}),(0,i.kt)("h3",Object.assign({},{id:"props"}),"Props"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"id"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"name"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"label"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"type"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"React.InputHTMLAttributes")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"text")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"className"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"placeholder"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"disabled"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"fullWidth"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"multiline"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Permite um campo de texto com v\xe1rias linhas.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"rows"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"2, 4, 6, 8, 10, 14, 18, 24")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"N\xfamero de linhas quando ",(0,i.kt)("inlineCode",{parentName:"td"},"multiline")," for verdadeiro.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"disableAutoResize"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Desativa o auto-resize do multiline")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"loading"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Exibe \xedcone de carregamento no componente de texto.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"helperText"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Exibe texto de ajuda abaixo do componente de texto.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"errorMessage"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Exibe uma mensagem de erro no componente de texto, assim como indica erro no campo.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"mask"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"IFormMask")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"M\xe1scara que ser\xe1 aplicada no campo.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"value"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"any")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onChange"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"function")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Fun\xe7\xe3o disparada ao alterar o valor do campo de texto.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onPressEnter"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"function")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Fun\xe7\xe3o disparada ao apertar Enter dentro do campo de texto.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"endAdornment"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"\xcdcone ou bot\xe3o com \xedcone que ser\xe1 exibido no final do campo.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"startAdornment"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"\xcdcone ou bot\xe3o com \xedcone que ser\xe1 exibido no in\xedcio do campo.")))))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/ui-components/Forms/Input/index.mdx"};for(var d in c)window[d]=c[d]},98165:function(d,a,b){"use strict";var c=b(29490);a.Z=c.Z},5965:function(d,a,b){"use strict";var c=b(69805);a.Z=c.Z},34273:function(c,b,a){"use strict";a.d(b,{Z:function(){return l}});var d=a(27378);let e=!0,f=!1,g;const h={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i(a){a.metaKey||a.altKey||a.ctrlKey||(e=!0)}function j(){e=!1}function k(){"hidden"===this.visibilityState&&f&&(e=!0)}var l=function(){const a=d.useCallback(b=>{if(null!=b){var a;(a=b.ownerDocument).addEventListener("keydown",i,!0),a.addEventListener("mousedown",j,!0),a.addEventListener("pointerdown",j,!0),a.addEventListener("touchstart",j,!0),a.addEventListener("visibilitychange",k,!0)}},[]),b=d.useRef(!1);return{isFocusVisibleRef:b,onFocus:function(a){return!!function(b){const{target:a}=b;try{return a.matches(":focus-visible")}catch(c){}return e||function(a){const{type:c,tagName:b}=a;return"INPUT"===b&&!!h[c]&&!a.readOnly||"TEXTAREA"===b&&!a.readOnly||!!a.isContentEditable}(a)}(a)&&(b.current=!0,!0)},onBlur:function(){return!!b.current&&(f=!0,window.clearTimeout(g),g=window.setTimeout(()=>{f=!1},100),b.current=!1,!0)},ref:a}}}},function(a){a.O(0,[4526,7304,9961,7249,7978,5431,9774,2888,179],function(){return a(a.s=14020)}),_N_E=a.O()}])