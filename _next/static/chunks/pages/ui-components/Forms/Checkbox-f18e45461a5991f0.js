(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2776],{87651:function(a,b,c){"use strict";c.r(b),c.d(b,{cache:function(){return t},css:function(){return r},cx:function(){return m},flush:function(){return k},getRegisteredStyles:function(){return o},hydrate:function(){return l},injectGlobal:function(){return p},keyframes:function(){return q},merge:function(){return n},sheet:function(){return s}});var d=c(43730),e=c(74343),f=c(53211);function g(a,b){if(void 0===a.inserted[b.name])return a.insert("",b,a.sheet,!0)}function h(a,b,c){var d=[],e=(0,f.f)(a,d,c);return d.length<2?c:e+b(d)}var i=function a(b){for(var c="",d=0;d<b.length;d++){var e=b[d];if(null!=e){var f=void 0;switch(typeof e){case"boolean":break;case"object":if(Array.isArray(e))f=a(e);else for(var g in f="",e)e[g]&&g&&(f&&(f+=" "),f+=g);break;default:f=e}f&&(c&&(c+=" "),c+=f)}}return c},j=function(a){var b=(0,d.Z)(a);b.sheet.speedy=function(a){this.isSpeedy=a},b.compat=!0;var c=function(){for(var a=arguments.length,c=new Array(a),d=0;d<a;d++)c[d]=arguments[d];var g=(0,e.O)(c,b.registered,void 0);return(0,f.M)(b,g,!1),b.key+"-"+g.name};return{css:c,cx:function(){for(var a=arguments.length,d=new Array(a),e=0;e<a;e++)d[e]=arguments[e];return h(b.registered,c,i(d))},injectGlobal:function(){for(var a=arguments.length,c=new Array(a),d=0;d<a;d++)c[d]=arguments[d];var f=(0,e.O)(c,b.registered);g(b,f)},keyframes:function(){for(var a=arguments.length,c=new Array(a),d=0;d<a;d++)c[d]=arguments[d];var f=(0,e.O)(c,b.registered),h="animation-"+f.name;return g(b,{name:f.name,styles:"@keyframes "+h+"{"+f.styles+"}"}),h},hydrate:function(a){a.forEach(function(a){b.inserted[a]=!0})},flush:function(){b.registered={},b.inserted={},b.sheet.flush()},sheet:b.sheet,cache:b,getRegisteredStyles:f.f.bind(null,b.registered),merge:h.bind(null,b.registered,c)}}({key:"css"}),k=j.flush,l=j.hydrate,m=j.cx,n=j.merge,o=j.getRegisteredStyles,p=j.injectGlobal,q=j.keyframes,r=j.css,s=j.sheet,t=j.cache},98080:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Forms/Checkbox",function(){return c(44805)}])},84769:function(a,b,c){"use strict";var d=c(59312),e=c(24246),f=(0,d.__importDefault)(c(73989)),g=(0,d.__importDefault)(c(69075));b.Z=function(a){return(0,e.jsx)(g.default,(0,d.__assign)({},a,{Control:f.default}),void 0)}},42900:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.useFormContext=b.FormFieldsContext=void 0;var d=c(59312),e=c(24246),f=(0,d.__importStar)(c(27378)),g=c(55693);b.FormFieldsContext=(0,g.createContext)(null),b.useFormContext=function(){return(0,g.useContext)(b.FormFieldsContext)},b.default=f.memo(function(a){var c=a.context,f=(0,d.__rest)(a,["context"]);return(0,e.jsx)(b.FormFieldsContext.Provider,(0,d.__assign)({value:c},{children:(0,e.jsx)("form",(0,d.__assign)({},f,{onReset:c.handleReset,onSubmit:c.handleSubmit}),void 0)}),void 0)})},69075:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(59312),e=c(24246),f=(0,d.__importStar)(c(27378)),g=(0,d.__importDefault)(c(75090)),h=c(55693),i=(0,d.__importDefault)(c(11376)),j=c(42900),k=(0,d.__importDefault)(c(2151)),l=(0,i.default)({marginDense:{padding:"0 8px"}});b.default=f.memo(function(a){var b=a.Control,c=a.label,d=a.name,i=a.description,m=a.checked,n=a.value,o=a.errorMessage,p=a.isMultiple,q=a.onChange,r=a.margin,s=a.disabled,t=a.indeterminate,u=l(),v=(0,h.useContextSelector)(j.FormFieldsContext,function(a){return null==a?void 0:a.isSubmitting}),w=(0,h.useContextSelector)(j.FormFieldsContext,function(a){return null==a?void 0:a.getFieldValue(d)}),x=(0,h.useContextSelector)(j.FormFieldsContext,function(a){return null==a?void 0:a.getFieldError(d)}),y=(0,h.useContextSelector)(j.FormFieldsContext,function(a){return null==a?void 0:a.setFieldValue});if(!d&&y)throw new Error("@eduzz/houston-ui: to use form prop you need provide a name for the field");var z=f.useMemo(function(){return p?(null!=w?w:[]).includes(n):!0===w||m},[m,w,p,n]),A=f.useCallback(function(a,b){if(!p){y&&y(d,b),q&&q(a,b);return}var c=new Set(null!=w?w:[]);b?c.add(n):c.delete(n),y&&y(d,Array.from(c))},[w,p,d,q,y,n]),B=null!=o?o:x;return(0,e.jsx)(g.default,{control:(0,e.jsx)(b,{indeterminate:t,disabled:v||s,classes:{root:"none"===r&&u.marginDense},checked:null!=z&&z,defaultValue:"",onChange:A,name:d,color:"primary"},void 0),label:(0,e.jsx)(k.default,{hasError:!!B,errorMessage:B,label:c,description:i},void 0)},void 0)})},2151:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(59312),e=c(24246),f=(0,d.__importStar)(c(27378)),g=(0,d.__importDefault)(c(2203)),h=(0,d.__importDefault)(c(38861));b.default=f.memo(function(a){var b=a.hasError,c=a.label,f=a.description,i=a.errorMessage;return c&&"string"!=typeof c?(0,e.jsxs)(e.Fragment,{children:[c,b&&(0,e.jsx)(g.default,(0,d.__assign)({error:!0},{children:i}),void 0)]},void 0):(0,e.jsxs)(e.Fragment,{children:[c&&(0,e.jsx)(h.default,{children:c},void 0),f&&(0,e.jsx)(h.default,(0,d.__assign)({size:"x-small",fontWeight:"regular"},{children:f}),void 0),b&&(0,e.jsx)(g.default,(0,d.__assign)({error:!0},{children:i}),void 0)]},void 0)})},38861:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(59312),e=(0,d.__importStar)(c(27378)),f=(0,d.__importDefault)(c(38944)),g=(0,(0,d.__importDefault)(c(11376)).default)(function(a){return{text:function(b){var c,d,e;return{margin:0,fontSize:a.textSize(null!==(c=b.size)&& void 0!==c?c:"normal"),lineHeight:a.lineHeight(null!==(d=b.lineHeight)&& void 0!==d?d:"normal"),fontWeight:a.fontWeight(null!==(e=b.fontWeight)&& void 0!==e?e:"regular"),marginBottom:b.marginBottom?a.spacing(2):null}},secondary:{color:a.colors.grey[500],fontSize:a.textSize("small")}}});b.default=e.memo(function(a){var b,c=g(a),h=e.useMemo(function(){return{id:null==a?void 0:a.id,children:null==a?void 0:a.children,onClick:null==a?void 0:a.onClick}},[null==a?void 0:a.children,null==a?void 0:a.id,null==a?void 0:a.onClick]),i=e.useMemo(function(){return{secondary:c.secondary}},[c.secondary]);return e.createElement(null!==(b=null==a?void 0:a.component)&& void 0!==b?b:"p",(0,d.__assign)((0,d.__assign)({},h),{className:(0,f.default)(c.text,null==a?void 0:a.className,i[null==a?void 0:a.variant])}))})},11376:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(59312),e=c(87651),f=(0,d.__importDefault)(c(43297));b.default=function(a){return function(b){var c;return c="function"==typeof a?a((0,f.default)()):a,Object.keys(c).reduce(function(a,f){var g;return(0,d.__assign)((0,d.__assign)({},a),((g={})[f]=(0,e.css)("function"==typeof c[f]?c[f](b):c[f]),g))},{})}}},43297:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(81006);b.default=function(){return(0,d.useTheme)()}},44805:function(a,b,c){"use strict";c.r(b),c.d(b,{meta:function(){return h},"default":function(){return j}});var d=c(27378),e=c(35318),f=c(56100),g=c(84769),h={name:"Checkbox Field",tableOfContents:{depth:0,children:[{depth:1,slug:"#checkbox-field",title:"Checkbox Field",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#varia\xe7\xf5es",title:"Varia\xe7\xf5es"},{depth:3,slug:"#formul\xe1rio",title:"Formul\xe1rio"},{depth:3,slug:"#utilizando-m\xe9todo-onchange-sem-hook-useform",title:"Utilizando m\xe9todo onChange (sem hook useForm)"}]}]}]}},i={meta:h};function j(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,e.kt)("wrapper",Object.assign({},i,c,{components:b,mdxType:"MDXLayout"}),(0,e.kt)("h1",Object.assign({},{id:"checkbox-field"}),"Checkbox Field"),(0,e.kt)("p",null,"O componente de caixa de sele\xe7\xe3o (Checkbox) permite que o usu\xe1rio selecione um ou mais itens de um determinado grupo."),(0,e.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,e.kt)("pre",null,(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import CheckboxField from '@eduzz/houston-ui/Forms/Checkbox';\n")),(0,e.kt)("h3",Object.assign({},{id:"varia\xe7\xf5es"}),"Varia\xe7\xf5es"),(0,e.kt)(f.X,{__position:0,code:"<div>\n  <CheckboxField name=\"example-1\" label=\"Exemplo 1\" margin=\"normal\" />\n</div>\n<div>\n  <CheckboxField\n    name=\"example-2\"\n    label=\"Exemplo 2\"\n    description=\"Exemplo de utiliza\xe7\xe3o do Checkbox com descri\xe7\xe3o\"\n    margin=\"normal\"\n  />\n</div>\n<div>\n  <CheckboxField\n    name=\"example-3\"\n    label=\"Exemplo 3\"\n    errorMessage=\"Mensagem de erro\"\n    margin=\"normal\"\n  />\n</div>\n<div>\n  <CheckboxField\n    name=\"example-4\"\n    label=\"Exemplo 4\"\n    description=\"Checkbox sem margem\"\n    margin=\"none\"\n  />\n</div>",scope:{props:c,Playground:f.X,CheckboxField:g.Z,meta:h},mdxType:"Playground"},(0,e.kt)("div",null,(0,e.kt)(g.Z,{name:"example-1",label:"Exemplo 1",margin:"normal",mdxType:"CheckboxField"})),(0,e.kt)("div",null,(0,e.kt)(g.Z,{name:"example-2",label:"Exemplo 2",description:"Exemplo de utiliza\xe7\xe3o do Checkbox com descri\xe7\xe3o",margin:"normal",mdxType:"CheckboxField"})),(0,e.kt)("div",null,(0,e.kt)(g.Z,{name:"example-3",label:"Exemplo 3",errorMessage:"Mensagem de erro",margin:"normal",mdxType:"CheckboxField"})),(0,e.kt)("div",null,(0,e.kt)(g.Z,{name:"example-4",label:"Exemplo 4",description:"Checkbox sem margem",margin:"none",mdxType:"CheckboxField"}))),(0,e.kt)("h3",Object.assign({},{id:"formul\xe1rio"}),"Formul\xe1rio"),(0,e.kt)("p",null,"Caso utilize o componente de caixa de sele\xe7\xe3o sem estar dentro de um contexto de formul\xe1rio,\n\xe9 poss\xedvel referenci\xe1-lo atrav\xe9s da propriedade ",(0,e.kt)("inlineCode",{parentName:"p"},"form"),"."),(0,e.kt)("pre",null,(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import useForm from '@eduzz/houston-forms/useForm';\nimport CheckboxField from '@eduzz/houston-ui/Forms/Checkbox';\n\ninterface IModel {\n  name: string;\n}\n\nconst MyComponent = () => {\n  const form = useForm<IModel>({\n    onSubmit: () => {}\n  });\n\n  return (\n    <CheckboxField\n      name='example-form'\n      label='Exemplo formul\xe1rio'\n      description='Checkbox fora de um FormContext'\n      form={form}\n    />\n  );\n};\n")),(0,e.kt)("h3",Object.assign({},{id:"utilizando-m\xe9todo-onchange-sem-hook-useform"}),"Utilizando m\xe9todo onChange (sem hook useForm)"),(0,e.kt)(f.X,{__position:1,code:"() => {\n  const [value, setValue] = React.useState(false)\n  const handleChange = (event) => {\n    setValue(event.target.checked)\n    console.log('current checkbox value', event.target.checked)\n  }\n  return (\n    <CheckboxField\n      name=\"example-on-change\"\n      label=\"Exemplo com m\xe9todo onChange\"\n      description=\"Checkbox utilizando m\xe9todo de onChange\"\n      onChange={handleChange}\n      checked={value}\n    />\n  )\n}",scope:{props:c,Playground:f.X,CheckboxField:g.Z,meta:h},mdxType:"Playground"},function(){var a,b=function(a){if(Array.isArray(a))return a}(a=d.useState(!1))||function(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(i){e=!0,f=i}finally{try{d||null==h.return||h.return()}finally{if(e)throw f}}return c}(a,2)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}(),c=b[0],f=b[1];return(0,e.kt)(g.Z,{name:"example-on-change",label:"Exemplo com m\xe9todo onChange",description:"Checkbox utilizando m\xe9todo de onChange",onChange:function(a){f(a.target.checked),console.log("current checkbox value",a.target.checked)},checked:c,mdxType:"CheckboxField"})}),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,e.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"name"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"string")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"true")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"label"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"description"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"string")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"errorMessage"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"string")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"form"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"IFormAdapter<any>")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"isMultiple"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"boolean")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Se a propriedade for configurada como ",(0,e.kt)("inlineCode",{parentName:"td"},"true")," \xe9 necess\xe1rio passar um valor para ",(0,e.kt)("inlineCode",{parentName:"td"},"form")," obrigatoriamente")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"margin"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"none"),", ",(0,e.kt)("inlineCode",{parentName:"td"},"normal")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"none")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"checked"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"boolean")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Caso a prop ",(0,e.kt)("inlineCode",{parentName:"td"},"form")," esteja configurada, o componente ser\xe1 checado atrav\xe9s dos valores do formul\xe1rio e essa propriedade ser\xe1 ignorada")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onChange"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"function")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Fun\xe7\xe3o chamada quando o valor do checkbox \xe9 alterado")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"disabled"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"boolean")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"indeterminate"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"boolean")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,e.kt)("inlineCode",{parentName:"td"},"false")),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,e.kt)("td",Object.assign({parentName:"tr"},{align:null}))))))}j.isMDXComponent=!0;var k={editThisPagePath:"src/pages/ui-components/Forms/Checkbox/index.mdx"};for(var l in k)window[l]=k[l]},75090:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return w},formControlLabelClasses:function(){return q},getFormControlLabelUtilityClasses:function(){return p}});var d=c(30808),e=c(25773),f=c(27378);c(23615);var g=c(38944),h=c(72473),i=c(17152),j=c(58447),k=c(6992),l=c(52625),m=c(17230),n=c(40510),o=c(29625);function p(a){return(0,n.Z)("MuiFormControlLabel",a)}var q=(0,o.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label"]),r=c(24246);function s(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var t=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],u=function(a){var b=a.classes,c=a.disabled,d=a.labelPlacement,e={root:["root",c&&"disabled","labelPlacement".concat((0,k.Z)(d))],label:["label",c&&"disabled"]};return(0,h.Z)(e,p,b)},v=(0,l.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(a,b){var c=a.ownerState;return[s({},"& .".concat(q.label),b.label),b.root,b["labelPlacement".concat((0,k.Z)(c.labelPlacement))]]}})(function(a){var b=a.theme,c=a.ownerState;return(0,e.Z)(s({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(q.disabled),{cursor:"default"}),"start"===c.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===c.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===c.labelPlacement&&{flexDirection:"column",marginLeft:16},s({},"& .".concat(q.label),s({},"&.".concat(q.disabled),{color:b.palette.text.disabled})))}),w=f.forwardRef(function(a,b){var c=(0,m.Z)({props:a,name:"MuiFormControlLabel"}),h=c.className,k=c.componentsProps,l=c.control,n=c.disabled,o=c.disableTypography,p=c.label,q=c.labelPlacement,s=(0,d.Z)(c,t),w=(0,i.Z)(),x=n;void 0===x&& void 0!==l.props.disabled&&(x=l.props.disabled),void 0===x&&w&&(x=w.disabled);var y={disabled:x};["checked","name","onChange","value","inputRef"].forEach(function(a){void 0===l.props[a]&& void 0!==c[a]&&(y[a]=c[a])});var z=(0,e.Z)({},c,{disabled:x,label:p,labelPlacement:void 0===q?"end":q}),A=u(z);return(0,r.jsxs)(v,(0,e.Z)({className:(0,g.default)(A.root,h),ownerState:z,ref:b},s,{children:[f.cloneElement(l,y),p.type===j.Z||o?p:(0,r.jsx)(j.Z,(0,e.Z)({component:"span",className:A.label},(void 0===k?{}:k).typography,{children:p}))]}))})}},function(a){a.O(0,[4526,4357,9961,161,1894,7899,4865,9774,2888,179],function(){return a(a.s=98080)}),_N_E=a.O()}])