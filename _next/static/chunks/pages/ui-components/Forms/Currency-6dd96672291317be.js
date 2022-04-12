(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2268],{46992:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Forms/Currency",function(){return c(96061)}])},85372:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={apply:function(a){return null==a||""===a?"":new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(Number(a)||0)},clean:function(a){(a=(a||"").toString().replace(/[^\d,]/gi,"")).includes(",")||(a="0,"+((f=(e=2,(d=a).length))<e?(c=e-f,new Array(c).fill("0").join("")+d):d||""));var c,d,e,f,b=a.split(",")[1];return b&&2!==b.length&&(a=a.replace(",","").replace(/(\d+)?(\d{2})/gi,"$1,$2").replace(/^,/gi,"0,")),parseFloat(a.replace(/\./gi,"").replace(",","."))}}},71734:function(d,c,a){"use strict";var b=a(59312),e=a(24246),f=(0,b.__importDefault)(a(85372)),g=(0,b.__importDefault)(a(11382));c.Z=function(a){return(0,e.jsx)(g.default,(0,b.__assign)({},a,{mask:f.default}),void 0)}},33356:function(f,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.useFormContext=a.FormFieldsContext=void 0;var c=b(59312),g=b(24246),d=(0,c.__importStar)(b(27378)),e=b(55693);a.FormFieldsContext=(0,e.createContext)(null),a.useFormContext=function(){return(0,e.useContext)(a.FormFieldsContext)},a.default=d.memo(function(d){var b=d.context,e=(0,c.__rest)(d,["context"]);return(0,g.jsx)(a.FormFieldsContext.Provider,(0,c.__assign)({value:b},{children:(0,g.jsx)("form",(0,c.__assign)({},e,{onReset:b.handleReset,onSubmit:b.handleSubmit}),void 0)}),void 0)})},11382:function(f,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var b=a(59312),g=a(24246),d=(0,b.__importStar)(a(27378)),h=a(87651),i=(0,b.__importDefault)(a(29532)),j=(0,b.__importDefault)(a(39658)),k=(0,b.__importDefault)(a(73181)),l=a(55693),m=(0,b.__importDefault)(a(40896)),n=a(33356),e=d.forwardRef(function(a,A){var B=a.mask,c=a.value,e=a.name,o=a.loading,C=a.onChange,D=a.onBlur,p=a.errorMessage,q=a.fullWidth,r=a.margin,E=a.endAdornment,F=a.startAdornment,G=a.maxLength,s=a.onPressEnter,H=a.className,I=a.size,J=a.InputProps,K=a.onKeyPress,L=a.helperText,t=a.disabled,M=void 0!==t&&t,u=(0,b.__rest)(a,["mask","value","name","loading","onChange","onBlur","errorMessage","fullWidth","margin","endAdornment","startAdornment","maxLength","onPressEnter","className","size","InputProps","onKeyPress","helperText","disabled"]),N=(0,l.useContextSelector)(n.FormFieldsContext,function(a){return null==a?void 0:a.isSubmitting}),v=(0,l.useContextSelector)(n.FormFieldsContext,function(a){return null==a?void 0:a.getFieldValue(e)}),O=(0,l.useContextSelector)(n.FormFieldsContext,function(a){return null==a?void 0:a.getFieldError(e)}),w=(0,l.useContextSelector)(n.FormFieldsContext,function(a){return null==a?void 0:a.setFieldValue});if(!e&&w)throw new Error("@eduzz/houston-ui: to use form prop you need provide a name for the field");c=null!=v?v:c;var x=(0,m.default)(B,c),f=x.maskClean,y=x.maskedValue,P=d.useCallback(function(b){var a=f(b.currentTarget.value);G&&(a=a.substring(0,G)),C&&C(a,b),w&&w(e,a)},[C,f,w,e,G]),Q=d.useCallback(function(a){D&&D(f(a.currentTarget.value),a)},[D,f]),R=d.useMemo(function(){return(0,b.__assign)({},u.placeholder?{shrink:!0}:{})},[u.placeholder]),S=d.useMemo(function(){var a=null,c=null;return E&&(a=(0,g.jsx)(j.default,(0,b.__assign)({position:"end"},{children:E}),void 0)),F&&(c=(0,g.jsx)(j.default,(0,b.__assign)({position:"start"},{children:F}),void 0)),o&&(a=(0,g.jsx)(j.default,(0,b.__assign)({position:"end"},{children:(0,g.jsx)(i.default,{color:"secondary",size:20},void 0)}),void 0)),(0,b.__assign)((0,b.__assign)({},J),{endAdornment:a,startAdornment:c})},[E,F,o,J]),T=d.useCallback(function(a){var b=a.target;"Enter"===a.key&&(a.preventDefault(),s(f(b.value)))},[s,f]),z=null!=p?p:O;return(0,g.jsx)(k.default,(0,b.__assign)({error:!!z,inputRef:A},u,{disabled:N||M||o,helperText:z||L,className:(0,h.cx)(H,"small"===I&&"input-size-small"),name:e,margin:null!=r?r:"normal",variant:"outlined",value:null!=y?y:"",onChange:P,onBlur:Q,fullWidth:null==q||q,InputLabelProps:R,InputProps:S,onKeyPress:s?T:K}),void 0)});c.default=d.memo(e)},40896:function(c,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var d=(0,b(59312).__importStar)(b(27378));a.default=function(f,a){var b=d.useMemo(function(){return null!=f?f:{apply:function(a){return a},clean:function(a){return a}}},[f]),c=b.apply,e=b.clean,g=d.useMemo(function(){return c?c(a):a},[a,c]),h=d.useMemo(function(){return e?e(a):a},[a,e]);return{maskApply:c,maskClean:e,maskedValue:g,cleanedValue:h}}},96061:function(g,b,a){"use strict";a.r(b),a.d(b,{meta:function(){return e},"default":function(){return f}});var h=a(27378),i=a(35318),j=a(56100),k=a(71734);function l(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}var e={name:"Currency Field",tableOfContents:{depth:0,children:[{depth:1,slug:"#currency-field",title:"Currency Field",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplos",title:"Exemplos"}]}]}]}},m={meta:e};function f(a){var c=a.components,b=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(a,["components"]);return(0,i.kt)("wrapper",Object.assign({},m,b,{components:c,mdxType:"MDXLayout"}),(0,i.kt)("h1",Object.assign({},{id:"currency-field"}),"Currency Field"),(0,i.kt)("p",null,"O componente \xe9 respons\xe1vel por formatar campos monet\xe1rios em formul\xe1rios."),(0,i.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import CurrencyField from '@eduzz/houston-ui/Forms/Currency';\n")),(0,i.kt)("h3",Object.assign({},{id:"exemplos"}),"Exemplos"),(0,i.kt)(j.X,{__position:0,code:"() => {\n  const [money, setMoney] = React.useState('')\n  return (\n    <>\n      <CurrencyField label=\"Valor\" value={money} onChange={setMoney} />\n    </>\n  )\n}",scope:{props:b,Playground:j.X,CurrencyField:k.Z,meta:e},mdxType:"Playground"},function(){var a,b,c=(a=h.useState(""),b=2,function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||function(a,c){if(a){if("string"==typeof a)return l(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return l(a,c)}}(a,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=c[0],e=c[1];return(0,i.kt)(h.Fragment,null,(0,i.kt)(k.Z,{label:"Valor",value:d,onChange:e,mdxType:"CurrencyField"}))}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"label"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"type"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"React.InputHTMLAttributes")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"text")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"placeholder"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"disabled"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"fullWidth"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"className"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"loading"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Exibe \xedcone de carregamento no componente de texto.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"helperText"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Exibe texto de ajuda abaixo do componente de texto.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"errorMessage"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Exibe uma mensagem de erro no componente de texto, assim como indica erro no campo.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"form"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"IFormAdapter")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"value"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"any")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"margin"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"none"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"dense"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"normal")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"normal")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onChange"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"function")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Fun\xe7\xe3o disparada ao alterar o valor do campo de texto.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onPressEnter"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"function")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Fun\xe7\xe3o disparada ao apertar Enter dentro do campo de texto.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"endAdornment"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"\xcdcone ou bot\xe3o com \xedcone que ser\xe1 exibido no final do campo.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"startAdornment"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"\xcdcone ou bot\xe3o com \xedcone que ser\xe1 exibido no in\xedcio do campo.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"required"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")))))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/ui-components/Forms/Currency/index.mdx"};for(var d in c)window[d]=c[d]}},function(a){a.O(0,[4526,4356,9961,1281,5261,3707,6840,3245,9774,2888,179],function(){return a(a.s=46992)}),_N_E=a.O()}])