(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2776],{98080:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Forms/Checkbox",function(){return c(1436)}])},82288:function(d,c,a){"use strict";var b=a(59312),e=a(24246),f=b.__importDefault(a(51906)),g=b.__importDefault(a(29707));c.Z=function(a){return(0,e.jsx)(g.default,Object.assign({},a,{Control:f.default}))}},33356:function(f,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.useFormContext=a.FormFieldsContext=void 0;var c=b(59312),g=b(24246),d=c.__importStar(b(27378)),e=b(55693);a.FormFieldsContext=(0,e.createContext)(null),a.useFormContext=function(){return(0,e.useContext)(a.FormFieldsContext)},a.default=d.memo(function(d){var b=d.context,e=c.__rest(d,["context"]);return(0,g.jsx)(a.FormFieldsContext.Provider,Object.assign({value:b},{children:(0,g.jsx)("form",Object.assign({},e,{onReset:b.handleReset,onSubmit:b.handleSubmit}))}))})},29707:function(f,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var b=a(59312),g=a(24246),d=b.__importStar(a(27378)),h=b.__importDefault(a(97873)),i=a(55693),e=b.__importDefault(a(35686)),j=a(33356),k=b.__importDefault(a(51235)),l=(0,e.default)({marginDense:{padding:"0 8px"}});c.default=d.memo(function(a){var q=a.Control,r=a.label,b=a.name,s=a.description,t=a.checked,c=a.value,e=a.errorMessage,f=a.isMultiple,u=a.onChange,v=a.margin,w=a.disabled,x=a.indeterminate,y=l(),z=(0,i.useContextSelector)(j.FormFieldsContext,function(a){return null==a?void 0:a.isSubmitting}),m=(0,i.useContextSelector)(j.FormFieldsContext,function(a){return null==a?void 0:a.getFieldValue(b)}),A=(0,i.useContextSelector)(j.FormFieldsContext,function(a){return null==a?void 0:a.getFieldError(b)}),n=(0,i.useContextSelector)(j.FormFieldsContext,function(a){return null==a?void 0:a.setFieldValue});if(!b&&n)throw new Error("@eduzz/houston-ui: to use form prop you need provide a name for the field");var o=d.useMemo(function(){return f?(null!=m?m:[]).includes(c):!0===m||t},[t,m,f,c]),B=d.useCallback(function(e,a){if(!f){n&&n(b,a),u&&u(e,a);return}var d=new Set(null!=m?m:[]);a?d.add(c):d.delete(c),n&&n(b,Array.from(d))},[m,f,b,u,n,c]),p=null!=e?e:A;return(0,g.jsx)(h.default,{control:(0,g.jsx)(q,{indeterminate:x,disabled:z||w,classes:{root:"none"===v&&y.marginDense},checked:null!=o&&o,defaultValue:"",onChange:B,name:b,color:"primary"}),label:(0,g.jsx)(k.default,{hasError:!!p,errorMessage:p,label:r,description:s})})})},51235:function(e,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var b=a(59312),f=a(24246),d=b.__importStar(a(27378)),g=b.__importDefault(a(52107)),h=b.__importDefault(a(98021));c.default=d.memo(function(b){var c=b.hasError,a=b.label,d=b.description,e=b.errorMessage;return a&&"string"!=typeof a?(0,f.jsxs)(f.Fragment,{children:[a,c&&(0,f.jsx)(g.default,Object.assign({error:!0},{children:e}))]}):(0,f.jsxs)(f.Fragment,{children:[a&&(0,f.jsx)(h.default,{children:a}),d&&(0,f.jsx)(h.default,Object.assign({size:"x-small",fontWeight:"regular"},{children:d})),c&&(0,f.jsx)(g.default,Object.assign({error:!0},{children:e}))]})})},98021:function(f,b,a){"use strict";function d(){var a,b,c=(a=["\n  margin: 0;\n  font-size: ","px;\n  line-height: ",";\n  font-weight: ",";\n  margin-bottom: ",";\n\n  &.--variant-secondary {\n    color: ",";\n    font-size: ",";\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return d=function(){return c},c}Object.defineProperty(b,"__esModule",{value:!0});var c=a(59312),g=c.__importStar(a(27378)),h=a(87651),e=c.__importDefault(a(65388));b.default=(0,e.default)(function(a){var b=a.className,c=a.variant,e=a.id,f=a.children,d=a.component,i=a.onClick;return g.createElement(null!=d?d:"p",{id:e,onClick:i,className:(0,h.cx)(b,b,c&&"--variant-".concat(c))},f)})(d(),function(a){var c=a.theme,b=a.size;return c.textSize(null!=b?b:"normal")},function(a){var c=a.theme,b=a.lineHeight;return c.lineHeight(null!=b?b:"normal")},function(a){var c=a.theme,b=a.fontWeight;return c.fontWeight(null!=b?b:"regular")},function(a){var b=a.theme,c=a.marginBottom;return c?b.spacing(2):null},function(a){return a.theme.colors.grey[500]},function(a){return a.theme.textSize("small")})},35686:function(d,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var c=a(59312),e=a(87651),f=c.__importDefault(a(44659));b.default=function(a){return function(c){var b;return b="function"==typeof a?a((0,f.default)()):a,Object.keys(b).reduce(function(h,d){var a,f,g;return Object.assign(Object.assign({},h),(a={},f=d,g=(0,e.css)("function"==typeof b[d]?b[d](c):b[d]),f in a?Object.defineProperty(a,f,{value:g,enumerable:!0,configurable:!0,writable:!0}):a[f]=g,a))},{})}}},65388:function(h,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.breakpoints=a.cx=a.clsx=void 0;var c=b(59312),d=b(87651),e=c.__importDefault(b(94408)),f=c.__importDefault(b(18651));a.clsx=d.cx,a.cx=d.cx,a.breakpoints=(0,f.default)({});var g=e.default;a.default=g},44659:function(c,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var d=b(151);a.default=function(){return(0,d.useTheme)()}},1436:function(g,b,a){"use strict";a.r(b),a.d(b,{meta:function(){return e},"default":function(){return f}});var h=a(27378),i=a(35318),j=a(56100),k=a(82288);function l(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}var e={name:"Checkbox Field",tableOfContents:{depth:0,children:[{depth:1,slug:"#checkbox-field",title:"Checkbox Field",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#varia\xe7\xf5es",title:"Varia\xe7\xf5es"},{depth:3,slug:"#formul\xe1rio",title:"Formul\xe1rio"},{depth:3,slug:"#utilizando-m\xe9todo-onchange-sem-hook-useform",title:"Utilizando m\xe9todo onChange (sem hook useForm)"}]}]}]}},m={meta:e};function f(b){var c=b.components,a=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(b,["components"]);return(0,i.kt)("wrapper",Object.assign({},m,a,{components:c,mdxType:"MDXLayout"}),(0,i.kt)("h1",Object.assign({},{id:"checkbox-field"}),"Checkbox Field"),(0,i.kt)("p",null,"O componente de caixa de sele\xe7\xe3o (Checkbox) permite que o usu\xe1rio selecione um ou mais itens de um determinado grupo."),(0,i.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import CheckboxField from '@eduzz/houston-ui/Forms/Checkbox';\n")),(0,i.kt)("h3",Object.assign({},{id:"varia\xe7\xf5es"}),"Varia\xe7\xf5es"),(0,i.kt)(j.X,{__position:0,code:'<div>\n  <CheckboxField name="example-1" label="Exemplo 1" margin="normal" />\n</div>\n<div>\n  <CheckboxField\n    name="example-2"\n    label="Exemplo 2"\n    description="Exemplo de utiliza\xe7\xe3o do Checkbox com descri\xe7\xe3o"\n    margin="normal"\n  />\n</div>\n<div>\n  <CheckboxField\n    name="example-3"\n    label="Exemplo 3"\n    errorMessage="Mensagem de erro"\n    margin="normal"\n  />\n</div>\n<div>\n  <CheckboxField\n    name="example-4"\n    label="Exemplo 4"\n    description="Checkbox sem margem"\n    margin="none"\n  />\n</div>',scope:{props:a,Playground:j.X,CheckboxField:k.Z,meta:e},mdxType:"Playground"},(0,i.kt)("div",null,(0,i.kt)(k.Z,{name:"example-1",label:"Exemplo 1",margin:"normal",mdxType:"CheckboxField"})),(0,i.kt)("div",null,(0,i.kt)(k.Z,{name:"example-2",label:"Exemplo 2",description:"Exemplo de utiliza\xe7\xe3o do Checkbox com descri\xe7\xe3o",margin:"normal",mdxType:"CheckboxField"})),(0,i.kt)("div",null,(0,i.kt)(k.Z,{name:"example-3",label:"Exemplo 3",errorMessage:"Mensagem de erro",margin:"normal",mdxType:"CheckboxField"})),(0,i.kt)("div",null,(0,i.kt)(k.Z,{name:"example-4",label:"Exemplo 4",description:"Checkbox sem margem",margin:"none",mdxType:"CheckboxField"}))),(0,i.kt)("h3",Object.assign({},{id:"formul\xe1rio"}),"Formul\xe1rio"),(0,i.kt)("p",null,"Caso utilize o componente de caixa de sele\xe7\xe3o sem estar dentro de um contexto de formul\xe1rio,\n\xe9 poss\xedvel referenci\xe1-lo atrav\xe9s da propriedade ",(0,i.kt)("inlineCode",{parentName:"p"},"form"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import useForm from '@eduzz/houston-forms/useForm';\nimport CheckboxField from '@eduzz/houston-ui/Forms/Checkbox';\n\ninterface IModel {\n  name: string;\n}\n\nconst MyComponent = () => {\n  const form = useForm<IModel>({\n    onSubmit: () => {}\n  });\n\n  return (\n    <CheckboxField\n      name='example-form'\n      label='Exemplo formul\xe1rio'\n      description='Checkbox fora de um FormContext'\n      form={form}\n    />\n  );\n};\n")),(0,i.kt)("h3",Object.assign({},{id:"utilizando-m\xe9todo-onchange-sem-hook-useform"}),"Utilizando m\xe9todo onChange (sem hook useForm)"),(0,i.kt)(j.X,{__position:1,code:'() => {\n  const [value, setValue] = React.useState(false)\n  const handleChange = (event) => {\n    setValue(event.target.checked)\n    console.log(\'current checkbox value\', event.target.checked)\n  }\n  return (\n    <CheckboxField\n      name="example-on-change"\n      label="Exemplo com m\xe9todo onChange"\n      description="Checkbox utilizando m\xe9todo de onChange"\n      onChange={handleChange}\n      checked={value}\n    />\n  )\n}',scope:{props:a,Playground:j.X,CheckboxField:k.Z,meta:e},mdxType:"Playground"},function(){var a,b,c=(a=h.useState(!1),b=2,function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||function(a,c){if(a){if("string"==typeof a)return l(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return l(a,c)}}(a,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=c[0],e=c[1];return(0,i.kt)(k.Z,{name:"example-on-change",label:"Exemplo com m\xe9todo onChange",description:"Checkbox utilizando m\xe9todo de onChange",onChange:function(a){e(a.target.checked),console.log("current checkbox value",a.target.checked)},checked:d,mdxType:"CheckboxField"})}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"name"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"label"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"description"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"errorMessage"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"form"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"IFormAdapter<any>")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"isMultiple"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Se a propriedade for configurada como ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," \xe9 necess\xe1rio passar um valor para ",(0,i.kt)("inlineCode",{parentName:"td"},"form")," obrigatoriamente")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"margin"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"none"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"normal")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"none")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"checked"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Caso a prop ",(0,i.kt)("inlineCode",{parentName:"td"},"form")," esteja configurada, o componente ser\xe1 checado atrav\xe9s dos valores do formul\xe1rio e essa propriedade ser\xe1 ignorada")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onChange"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"function")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Fun\xe7\xe3o chamada quando o valor do checkbox \xe9 alterado")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"disabled"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"indeterminate"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))))))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/ui-components/Forms/Checkbox/index.mdx"};for(var d in c)window[d]=c[d]}},function(a){a.O(0,[4526,4356,9961,6557,1281,6970,1141,3245,9774,2888,179],function(){return a(a.s=98080)}),_N_E=a.O()}])