(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6653],{47249:function(a,b,c){"use strict";var d=c(73203);b.Z=void 0;var e=d(c(19124)),f=c(24246),g=(0,e.default)((0,f.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"}),"InsertEmoticon");b.Z=g},19124:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return d.createSvgIcon}});var d=c(36805)},62752:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Forms/Input",function(){return c(37366)}])},2465:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{get:function(){return c},enumerable:!0});var c={apply:function(a){if(!a)return"";var b=/^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2}).*/,c="$1.$2.$3/$4-$5";return a.replace(b,c).replace(/[-./]$/,"").replace(/[-./]$/,"").replace(/[-./]$/,"")},clean:function(a){return(a||"").replace(/\D/gi,"").substr(0,14)}}},41448:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{get:function(){return c},enumerable:!0});var c={apply:function(a){if(!a)return"";var b=/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2}).*/,c="$1.$2.$3-$4";return a.replace(b,c).replace(/[-./]$/,"").replace(/[-./]$/,"").replace(/[-./]$/,"")},clean:function(a){return(a||"").replace(/\D/gi,"").substr(0,11)}}},74328:function(a,b,c){"use strict";Object.defineProperty(b,"Z",{get:function(){return g},enumerable:!0});var d=f(c(2465)),e=f(c(41448));function f(a){return a&&a.__esModule?a:{default:a}}var g={apply:function(a){return a?a.length>11?d.default.apply(a):e.default.apply(a):""},clean:function(a){return a?a.length>11?d.default.clean(a):e.default.clean(a):""}}},7833:function(a,b){"use strict";function c(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{get:function(){return e},enumerable:!0});function d(a,b){return Array(a).fill(b).join("")}var e={apply:function(a){return null==a||""===a?"":new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(Number(a)||0)},clean:function(a){(a=(a||"").toString().replace(/[^\d,]/gi,"")).includes(",")||(a="0,"+(b=a,e=2,f="0",g=e?b.length:0,g<e?d(e-g,"0")+b:b||""));var b,e,f,g,h,i,j=(h=a.split(","),i=2,function(a){if(Array.isArray(a))return a}(h)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(h,i)||function a(b,d){if(b){if("string"==typeof b)return c(b,d);var e=Object.prototype.toString.call(b).slice(8,-1);if("Object"===e&&b.constructor&&(e=b.constructor.name),"Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c(b,d)}}(h,i)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[1];return j&&2!==j.length&&(a=a.replace(",","").replace(/(\d+)?(\d{2})/gi,"$1,$2").replace(/^,/gi,"0,")),parseFloat(a.replace(/\./gi,"").replace(",","."))}}},355:function(a,b){"use strict";Object.defineProperty(b,"Z",{get:function(){return c},enumerable:!0});var c={apply:function(a){if(!a)return"";var b=a.length>10?/^(\d{0,2})(\d{0,5})(\d{0,4}).*/:/^(\d{0,2})(\d{0,4})(\d{0,4}).*/,c=a.length>2?"($1) $2-$3":"($1$2$3";return a.replace(b,c).replace(/-$/,"")},clean:function(a){return(a||"").replace(/\D/gi,"").substr(0,11)}}},12700:function(a,b){"use strict";Object.defineProperty(b,"Z",{get:function(){return c},enumerable:!0});var c={apply:function(a){return a?a.replace(/^(\d{0,5})(\d{0,3}).*/,"$1-$2").replace(/-$/,""):""},clean:function(a){return(a||"").replace(/\D/gi,"").substr(0,8)}}},37366:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return s},meta:function(){return q}});var d=c(31373),e=c(52050),f=c(27378),g=c(35318),h=c(47249),i=c(56100),j=c(2465),k=c(41448),l=c(74328),m=c(7833),n=c(355),o=c(12700),p=c(42680),q={name:"Input",tableOfContents:{depth:0,children:[{depth:1,slug:"#input",title:"Input",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplos",title:"Exemplos"},{depth:3,slug:"#componente-de-texto-com-m\xfaltiplas-linhas",title:"Componente de texto com m\xfaltiplas linhas"},{depth:3,slug:"#m\xe1scaras",title:"M\xe1scaras"},{depth:3,slug:"#props",title:"Props"}]}]}]}},r={meta:q};function s(a){var b=a.components,c=(0,d.Z)(a,["components"]);return(0,g.kt)("wrapper",Object.assign({},r,c,{components:b,mdxType:"MDXLayout"}),(0,g.kt)("h1",Object.assign({},{id:"input"}),"Input"),(0,g.kt)("p",null,"O componente \xe9 respons\xe1vel por exibir um campo de texto para ser preenchido em formul\xe1rios, campos de pesquisa, entre outros."),(0,g.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,g.kt)("pre",null,(0,g.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import Input from '@eduzz/houston-ui/Forms/Input';\n")),(0,g.kt)("h3",Object.assign({},{id:"exemplos"}),"Exemplos"),(0,g.kt)(i.X,{__position:0,code:'() => {\n  const [text, setText] = React.useState(\'\')\n  return (\n    <div\n      style={{\n        display: \'flex\',\n        flexDirection: \'column\',\n        flexWrap: \'wrap\',\n        gap: 16,\n      }}\n    >\n      <Input label="Campo de Texto" value={text} onChange={setText} />\n      <Input\n        label="Campo com \xedcone"\n        value={text}\n        startAdornment={<InsertEmoticonIcon />}\n        onChange={setText}\n      />\n      <Input\n        label="Campo com \xedcone"\n        value={text}\n        endAdornment={<InsertEmoticonIcon />}\n        onChange={setText}\n      />\n      <Input\n        label="Campo de Texto"\n        placeholder="Placeholder"\n        value={text}\n        onChange={setText}\n      />\n      <Input\n        label="Campo de Texto Desabilitado"\n        disabled\n        value="Valor enviado via propriedade"\n      />\n      <Input\n        label="Campo de Texto com Carregamento"\n        loading\n        value={text}\n        onChange={setText}\n      />\n      <Input\n        label="Campo de Texto com Texto de Ajuda"\n        helperText="Um exemplo de campo de ajuda"\n        value={text}\n        onChange={setText}\n      />\n      <Input\n        label="Campo de Texto com Erro"\n        errorMessage="Mensagem de erro"\n        value={text}\n        onChange={setText}\n      />\n    </div>\n  )\n}',scope:{props:c,InsertEmoticonIcon:h.Z,Playground:i.X,cnpjMask:j.default,cpfMask:k.default,documentMask:l.Z,moneyMask:m.default,phoneMask:n.Z,zipcodeMask:o.Z,Input:p.default,meta:q},mdxType:"Playground"},function(){var a=(0,e.Z)(f.useState(""),2),b=a[0],c=a[1];return(0,g.kt)("div",{style:{display:"flex",flexDirection:"column",flexWrap:"wrap",gap:16}},(0,g.kt)(p.default,{label:"Campo de Texto",value:b,onChange:c,mdxType:"Input"}),(0,g.kt)(p.default,{label:"Campo com \xedcone",value:b,startAdornment:(0,g.kt)(h.Z,{mdxType:"InsertEmoticonIcon"}),onChange:c,mdxType:"Input"}),(0,g.kt)(p.default,{label:"Campo com \xedcone",value:b,endAdornment:(0,g.kt)(h.Z,{mdxType:"InsertEmoticonIcon"}),onChange:c,mdxType:"Input"}),(0,g.kt)(p.default,{label:"Campo de Texto",placeholder:"Placeholder",value:b,onChange:c,mdxType:"Input"}),(0,g.kt)(p.default,{label:"Campo de Texto Desabilitado",disabled:!0,value:"Valor enviado via propriedade",mdxType:"Input"}),(0,g.kt)(p.default,{label:"Campo de Texto com Carregamento",loading:!0,value:b,onChange:c,mdxType:"Input"}),(0,g.kt)(p.default,{label:"Campo de Texto com Texto de Ajuda",helperText:"Um exemplo de campo de ajuda",value:b,onChange:c,mdxType:"Input"}),(0,g.kt)(p.default,{label:"Campo de Texto com Erro",errorMessage:"Mensagem de erro",value:b,onChange:c,mdxType:"Input"}))}),(0,g.kt)("h3",Object.assign({},{id:"componente-de-texto-com-m\xfaltiplas-linhas"}),"Componente de texto com m\xfaltiplas linhas"),(0,g.kt)(i.X,{__position:1,code:'() => {\n  const [text, setText] = React.useState(\'\')\n  return (\n    <div\n      style={{\n        display: \'flex\',\n        flexDirection: \'column\',\n        flexWrap: \'wrap\',\n        gap: 16,\n      }}\n    >\n      <Input\n        multiline\n        label="Campo de Texto"\n        value={text}\n        onChange={setText}\n      />\n      <Input\n        multiline\n        label="Campo com \xedcone"\n        value={text}\n        startAdornment={<InsertEmoticonIcon />}\n        onChange={setText}\n      />\n      <Input\n        multiline\n        label="Campo com \xedcone"\n        value={text}\n        endAdornment={<InsertEmoticonIcon />}\n        onChange={setText}\n      />\n      <Input\n        multiline\n        label="Campo de Texto"\n        placeholder="Placeholder"\n        value={text}\n        onChange={setText}\n      />\n      <Input\n        multiline\n        label="Campo de Texto Desabilitado"\n        disabled\n        value="Valor enviado via propriedade"\n      />\n      <Input\n        multiline\n        label="Campo de Texto com Carregamento"\n        loading\n        value={text}\n        onChange={setText}\n      />\n      <Input\n        multiline\n        label="Campo de Texto com Texto de Ajuda"\n        helperText="Um exemplo de campo de ajuda"\n        value={text}\n        onChange={setText}\n      />\n      <Input\n        multiline\n        label="Campo de Texto com Erro"\n        errorMessage="Mensagem de erro"\n        value={text}\n        onChange={setText}\n      />\n    </div>\n  )\n}',scope:{props:c,InsertEmoticonIcon:h.Z,Playground:i.X,cnpjMask:j.default,cpfMask:k.default,documentMask:l.Z,moneyMask:m.default,phoneMask:n.Z,zipcodeMask:o.Z,Input:p.default,meta:q},mdxType:"Playground"},function(){var a=(0,e.Z)(f.useState(""),2),b=a[0],c=a[1];return(0,g.kt)("div",{style:{display:"flex",flexDirection:"column",flexWrap:"wrap",gap:16}},(0,g.kt)(p.default,{multiline:!0,label:"Campo de Texto",value:b,onChange:c,mdxType:"Input"}),(0,g.kt)(p.default,{multiline:!0,label:"Campo com \xedcone",value:b,startAdornment:(0,g.kt)(h.Z,{mdxType:"InsertEmoticonIcon"}),onChange:c,mdxType:"Input"}),(0,g.kt)(p.default,{multiline:!0,label:"Campo com \xedcone",value:b,endAdornment:(0,g.kt)(h.Z,{mdxType:"InsertEmoticonIcon"}),onChange:c,mdxType:"Input"}),(0,g.kt)(p.default,{multiline:!0,label:"Campo de Texto",placeholder:"Placeholder",value:b,onChange:c,mdxType:"Input"}),(0,g.kt)(p.default,{multiline:!0,label:"Campo de Texto Desabilitado",disabled:!0,value:"Valor enviado via propriedade",mdxType:"Input"}),(0,g.kt)(p.default,{multiline:!0,label:"Campo de Texto com Carregamento",loading:!0,value:b,onChange:c,mdxType:"Input"}),(0,g.kt)(p.default,{multiline:!0,label:"Campo de Texto com Texto de Ajuda",helperText:"Um exemplo de campo de ajuda",value:b,onChange:c,mdxType:"Input"}),(0,g.kt)(p.default,{multiline:!0,label:"Campo de Texto com Erro",errorMessage:"Mensagem de erro",value:b,onChange:c,mdxType:"Input"}))}),(0,g.kt)("h3",Object.assign({},{id:"m\xe1scaras"}),"M\xe1scaras"),(0,g.kt)("pre",null,(0,g.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import maskPhone from '@eduzz/houston-forms/masks/phone';\n")),(0,g.kt)(i.X,{__position:2,code:'() => {\n  const [text, setText] = React.useState(\'\')\n  const [money, setMoney] = React.useState()\n  const [phone, setPhone] = React.useState(\'\')\n  const [zipcode, setZipcode] = React.useState(\'\')\n  const [document, setDocument] = React.useState(\'\')\n  const [cpf, setCpf] = React.useState(\'\')\n  const [cnpj, setCnpj] = React.useState(\'\')\n  return (\n    <div\n      style={{\n        display: \'flex\',\n        flexDirection: \'column\',\n        flexWrap: \'wrap\',\n        gap: 16,\n      }}\n    >\n      <Input\n        label="Moeda"\n        name="money"\n        value={money}\n        onChange={setMoney}\n        mask={moneyMask}\n      />\n      <Input\n        label="Telefone"\n        name="phone"\n        value={phone}\n        onChange={setPhone}\n        mask={phoneMask}\n      />\n      <Input\n        label="CEP"\n        name="zipcode"\n        value={zipcode}\n        onChange={setZipcode}\n        mask={zipcodeMask}\n      />\n      <Input\n        label="Documento (CPF/CNPJ)"\n        name="document"\n        value={document}\n        onChange={setDocument}\n        mask={documentMask}\n      />\n      <Input\n        label="CNPJ"\n        name="cnpj"\n        value={cnpj}\n        onChange={setCnpj}\n        mask={cnpjMask}\n      />\n      <Input\n        label="CPF"\n        name="cpf"\n        value={cpf}\n        onChange={setCpf}\n        mask={cpfMask}\n      />\n    </div>\n  )\n}',scope:{props:c,InsertEmoticonIcon:h.Z,Playground:i.X,cnpjMask:j.default,cpfMask:k.default,documentMask:l.Z,moneyMask:m.default,phoneMask:n.Z,zipcodeMask:o.Z,Input:p.default,meta:q},mdxType:"Playground"},function(){var a=(0,e.Z)(f.useState(""),2);a[0],a[1];var b=(0,e.Z)(f.useState(),2),c=b[0],d=b[1],h=(0,e.Z)(f.useState(""),2),i=h[0],q=h[1],r=(0,e.Z)(f.useState(""),2),s=r[0],t=r[1],u=(0,e.Z)(f.useState(""),2),v=u[0],w=u[1],x=(0,e.Z)(f.useState(""),2),y=x[0],z=x[1],A=(0,e.Z)(f.useState(""),2),B=A[0],C=A[1];return(0,g.kt)("div",{style:{display:"flex",flexDirection:"column",flexWrap:"wrap",gap:16}},(0,g.kt)(p.default,{label:"Moeda",name:"money",value:c,onChange:d,mask:m.default,mdxType:"Input"}),(0,g.kt)(p.default,{label:"Telefone",name:"phone",value:i,onChange:q,mask:n.Z,mdxType:"Input"}),(0,g.kt)(p.default,{label:"CEP",name:"zipcode",value:s,onChange:t,mask:o.Z,mdxType:"Input"}),(0,g.kt)(p.default,{label:"Documento (CPF/CNPJ)",name:"document",value:v,onChange:w,mask:l.Z,mdxType:"Input"}),(0,g.kt)(p.default,{label:"CNPJ",name:"cnpj",value:B,onChange:C,mask:j.default,mdxType:"Input"}),(0,g.kt)(p.default,{label:"CPF",name:"cpf",value:y,onChange:z,mask:k.default,mdxType:"Input"}))}),(0,g.kt)("h3",Object.assign({},{id:"props"}),"Props"),(0,g.kt)("table",null,(0,g.kt)("thead",{parentName:"table"},(0,g.kt)("tr",{parentName:"thead"},(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,g.kt)("tbody",{parentName:"table"},(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"id"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"string")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"name"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"string")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"true")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"label"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"string")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"type"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"React.InputHTMLAttributes")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"text")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"className"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"string")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"placeholder"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"string")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"disabled"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"boolean")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"fullWidth"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"boolean")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"true")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"multiline"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"boolean")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Permite um campo de texto com v\xe1rias linhas.")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"rows"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"2, 4, 6, 8, 10, 14, 18, 24")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"N\xfamero de linhas quando ",(0,g.kt)("inlineCode",{parentName:"td"},"multiline")," for verdadeiro.")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"disableAutoResize"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"boolean")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Desativa o auto-resize do multiline")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"loading"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"boolean")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Exibe \xedcone de carregamento no componente de texto.")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"helperText"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"string")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Exibe texto de ajuda abaixo do componente de texto.")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"errorMessage"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"string")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Exibe uma mensagem de erro no componente de texto, assim como indica erro no campo.")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"mask"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"IFormMask")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"M\xe1scara que ser\xe1 aplicada no campo.")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"value"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"any")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onChange"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"function")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Fun\xe7\xe3o disparada ao alterar o valor do campo de texto.")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onPressEnter"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"function")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Fun\xe7\xe3o disparada ao apertar Enter dentro do campo de texto.")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"endAdornment"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"\xcdcone ou bot\xe3o com \xedcone que ser\xe1 exibido no final do campo.")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"startAdornment"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"\xcdcone ou bot\xe3o com \xedcone que ser\xe1 exibido no in\xedcio do campo.")))))}s.isMDXComponent=!0;var t={editThisPagePath:"src/pages/ui-components/Forms/Input/index.mdx"};for(var u in t)window[u]=t[u]},36805:function(a,b,c){"use strict";c.r(b),c.d(b,{capitalize:function(){return e.Z},createChainedFunction:function(){return f},createSvgIcon:function(){return g.Z},debounce:function(){return h.Z},deprecatedPropType:function(){return i},isMuiElement:function(){return k},ownerDocument:function(){return l.Z},ownerWindow:function(){return m.Z},requirePropFactory:function(){return n},setRef:function(){return o},unstable_ClassNameGenerator:function(){return x},unstable_useEnhancedEffect:function(){return p.Z},unstable_useId:function(){return q},unsupportedProp:function(){return s},useControlled:function(){return t.Z},useEventCallback:function(){return u.Z},useForkRef:function(){return v.Z},useIsFocusVisible:function(){return w.Z}});var d=c(70544),e=c(98165),f=c(36397).Z,g=c(75917),h=c(66187),i=function(a,b){return()=>null},j=c(27378),k=function(a,b){return j.isValidElement(a)&& -1!==b.indexOf(a.type.muiName)},l=c(52127),m=c(16103);c(25773);var n=function(a,b){return()=>null},o=c(40514).Z,p=c(57925),q=c(56320).Z;function r(a,b,c,d,e){return null}var s=r,t=c(94065),u=c(5965),v=c(63202),w=c(34273),x={configure:function(a){console.warn("MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.\n\nYou should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead\n\nThe detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401\n\nThe updated documentation: https://mui.com/guides/classname-generator/"),d.Z.configure(a)}}},73203:function(a){a.exports=function(a){return a&&a.__esModule?a:{default:a}},a.exports.__esModule=!0,a.exports.default=a.exports},52050:function(a,b,c){"use strict";c.d(b,{Z:function(){return f}});var d=c(82126),e=c(12164);function f(a,b){return function(a){if(Array.isArray(a))return a}(a)||(0,d.Z)(a,b)||(0,e.Z)(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(a){a.O(0,[4526,7983,967,8194,9978,2192,2122,2242,4109,418,2680,9774,2888,179],function(){var b;return a(a.s=62752)}),_N_E=a.O()}])