(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[985],{81218:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Forms/Radio",function(){return c(83848)}])},27872:function(d,c,a){"use strict";var b=a(59312);a(77467);var e=a(27378),f=a(34090),g=a(32937),h=a(19978),i=b.__importStar(a(14633)),j=b.__importDefault(a(80754));c.Z=function(b){var k=b.onSubmit,s=b.onSubmitWithErrors,l=b.validationSchema,c=b.initialValues,d=b.validateOnMount,t=(0,e.useRef)({}).current,u=(0,e.useRef)({}).current,v=(0,e.useRef)(new g.Subject).current,w=(0,e.useRef)(k);(0,j.default)(function(){return v.pipe((0,h.switchMap)(function(b){var a,d=b.model,e=b.formikHelpers,f=null===(a=null==w?void 0:w.current)|| void 0===a?void 0:a.call(w,d,e),c=(0,g.of)(!0).pipe((0,h.switchMap)(function(){return f||(0,g.of)(null)}),(0,h.catchError)(function(){return(0,g.of)(null)}),(0,h.share)());return t.promise=c.toPromise(),c}))},[]);var a=(0,f.useFormik)({validateOnMount:void 0===d||d,initialValues:null!=c?c:{},validationSchema:l?function(){return l(i)}:null,onSubmit:function(a,b){return w.current=k,v.next({model:a,formikHelpers:b}),new Promise(function(a){return setTimeout(function(){return a(t.promise)},500)})}});(0,e.useEffect)(function(){a.submitCount&&!a.isValid&&s&&s(a.errors,a.values)},[a.submitCount]);var m=(0,e.useRef)(function(b){return u[b]||(u[b]=function(c){a.setFieldTouched(b,!0,!1),a.setFieldValue(b,c,!1)}),u[b]}).current,n=(0,e.useCallback)(function(b){return a.handleSubmit(b)},[a]),o=(0,e.useCallback)(function(b){return a.getFieldMeta(b).value},[a]),p=(0,e.useCallback)(function(b,c){a.setFieldTouched(b,!0,!1),a.setFieldValue(b,c,!0)},[]),q=(0,e.useCallback)(function(c){var b=a.getFieldMeta(c);return b.touched||a.submitCount>0&&!b.value?b.error:""},[a]),r=(0,e.useCallback)(function(b){return a.setErrors(b)},[a]);return{handleSubmit:n,handleChange:m,handleReset:function(){return a.resetForm({values:c})},setValues:a.setValues,setErrors:r,getFieldValue:o,setFieldValue:p,getFieldError:q,setFieldTouched:a.setFieldTouched,reset:function(b){return a.resetForm({values:void 0===b?c:b})},initialValues:a.initialValues,values:a.values,isSubmitting:a.isSubmitting,isValid:a.isValid,errors:a.errors}}},77467:function(c,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),(0,b(14633).setLocale)({mixed:{default:"Inv\xe1lido",required:"Obrigat\xf3rio",oneOf:"Deve ser um dos seguintes valores: ${values}",notOneOf:"N\xe3o pode ser um dos seguintes valores: ${values}"},string:{length:"Deve ter exatamente ${length} caracteres",min:"Deve ter pelo menos ${min} caracteres",max:"Deve ter no m\xe1ximo ${max} caracteres",email:"E-mail inv\xe1lido",url:"Deve ter um formato de URL v\xe1lida",trim:"N\xe3o deve conter espa\xe7os no in\xedcio ou no fim.",lowercase:"Deve estar em mai\xfasculo",uppercase:"Deve estar em min\xfasculo"},number:{min:"Deve ser no m\xednimo ${min}",max:"Deve ser no m\xe1ximo ${max}",lessThan:"Deve ser menor que ${less}",moreThan:"Deve ser maior que ${more}",positive:"Deve ser um n\xfamero positivo",negative:"Deve ser um n\xfamero negativo",integer:"Deve ser um n\xfamero inteiro"},date:{min:"Deve ser maior que a data ${min}",max:"Deve ser menor que a data ${max}"},array:{min:"Deve ter no m\xednimo ${min} itens",max:"Deve ter no m\xe1ximo ${max} itens"}})},70010:function(b,a,c){"use strict";var d=this&&this.__createBinding||(Object.create?function(e,c,d,b){void 0===b&&(b=d);var a=Object.getOwnPropertyDescriptor(c,d);(!a||("get"in a?!c.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return c[d]}}),Object.defineProperty(e,b,a)}:function(c,d,b,a){void 0===a&&(a=b),c[a]=d[b]}),e=this&&this.__setModuleDefault||(Object.create?function(a,b){Object.defineProperty(a,"default",{enumerable:!0,value:b})}:function(a,b){a.default=b}),f=this&&this.__importStar||function(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)"default"!==c&&Object.prototype.hasOwnProperty.call(a,c)&&d(b,a,c);return e(b,a),b};Object.defineProperty(a,"__esModule",{value:!0}),a.getConfig=void 0;var g={onUnhandledError:function(){},pagination:{pageStart:1,perPage:25}};a.default=function(b){var a;g=Object.assign(Object.assign(Object.assign({onUnhandledError:function(){return null}},g),b),{pagination:Object.assign(Object.assign({pageStart:1,perPage:25},g.pagination),null!==(a=b.pagination)&& void 0!==a?a:{})}),Promise.resolve().then(function(){return f(c(32937))}).then(function(a){a.config&&!a.config.onUnhandledError&&(a.config.onUnhandledError=function(a){return b.onUnhandledError(a,"rxjs")})}).catch(function(){})},a.getConfig=function(){return g}},80754:function(c,b,a){"use strict";function d(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function e(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||f(a,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(a,c){if(a){if("string"==typeof a)return d(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return d(a,c)}}Object.defineProperty(b,"__esModule",{value:!0});var g=a(59312).__importStar(a(27378)),h=a(70010);b.default=function(f,i){var a=e(g.useState(void 0),2),j=a[0],o=a[1],b=e(g.useState(),2),k=b[0],p=b[1],c=e(g.useState(!0),2),l=c[0],q=c[1],d=e(g.useState(!1),2),m=d[0],r=d[1],n=g.useCallback(f,i);return g.useEffect(function(){o(void 0),p(void 0),r(!1),q(!0);var a=n().subscribe({next:function(a){o(function(){return a}),p(void 0),q(!1)},error:function(a){(0,h.getConfig)().onUnhandledError(a,"hooks"),o(null),p(a),q(!1)},complete:function(){r(!0),q(!1)}});return function(){return a.unsubscribe()}},[n]),[j,k,m,l]}},33356:function(f,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.useFormContext=a.FormFieldsContext=void 0;var c=b(59312),g=b(24246),d=c.__importStar(b(27378)),e=b(55693);a.FormFieldsContext=(0,e.createContext)(null),a.useFormContext=function(){return(0,e.useContext)(a.FormFieldsContext)},a.default=d.memo(function(d){var b=d.context,e=c.__rest(d,["context"]);return(0,g.jsx)(a.FormFieldsContext.Provider,Object.assign({value:b},{children:(0,g.jsx)("form",Object.assign({},e,{onReset:b.handleReset,onSubmit:b.handleSubmit}))}))})},80273:function(d,c,a){"use strict";var b=a(59312),e=a(24246),f=b.__importDefault(a(97492)),g=b.__importDefault(a(26330));c.Z=function(a){return(0,e.jsx)(g.default,Object.assign({},a,{Control:f.default}))}},51235:function(e,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var b=a(59312),f=a(24246),d=b.__importStar(a(27378)),g=b.__importDefault(a(52107)),h=b.__importDefault(a(98021));c.default=d.memo(function(b){var c=b.hasError,a=b.label,d=b.description,e=b.errorMessage;return a&&"string"!=typeof a?(0,f.jsxs)(f.Fragment,{children:[a,c&&(0,f.jsx)(g.default,Object.assign({error:!0},{children:e}))]}):(0,f.jsxs)(f.Fragment,{children:[a&&(0,f.jsx)(h.default,{children:a}),d&&(0,f.jsx)(h.default,Object.assign({size:"x-small",fontWeight:"regular"},{children:d})),c&&(0,f.jsx)(g.default,Object.assign({error:!0},{children:e}))]})})},26330:function(g,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var b=a(59312),h=a(24246),d=b.__importStar(a(27378)),i=b.__importDefault(a(97873)),j=a(55693),e=b.__importDefault(a(35686)),k=a(33356),l=b.__importDefault(a(51235)),m=(0,e.default)({marginDense:{padding:"0 8px"}}),f=d.memo(function(a){var n=a.Control,o=a.label,b=a.name,p=a.description,q=a.checked,c=a.errorMessage,r=a.onChange,s=a.margin,e=a.value,t=m(),u=(0,j.useContextSelector)(k.FormFieldsContext,function(a){return null==a?void 0:a.isSubmitting}),v=(0,j.useContextSelector)(k.FormFieldsContext,function(a){return null==a?void 0:a.getFieldValue(b)}),w=(0,j.useContextSelector)(k.FormFieldsContext,function(a){return null==a?void 0:a.getFieldError(b)}),x=(0,j.useContextSelector)(k.FormFieldsContext,function(a){return null==a?void 0:a.setFieldValue}),f=d.useMemo(function(){return v?String(v)===String(e):q},[q,v,e]),y=d.useCallback(function(a,c){var d=["true","false"].includes(a.target.value);x&&x(b,d?"true"===a.target.value:a.target.value),r&&r(a,c)},[x,b,r]),g=null!=c?c:w;return(0,h.jsx)(i.default,{control:(0,h.jsx)(n,{disabled:u,classes:{root:"none"===s&&t.marginDense},checked:null!=f&&f,onChange:y,name:b,color:"primary",value:e}),label:(0,h.jsx)(l.default,{hasError:!!g,errorMessage:g,label:o,description:p})})});c.default=d.memo(f)},98021:function(f,b,a){"use strict";function d(){var a,b,c=(a=["\n  margin: 0;\n  font-size: ","px;\n  line-height: ",";\n  font-weight: ",";\n  margin-bottom: ",";\n\n  &.--variant-secondary {\n    color: ",";\n    font-size: ",";\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return d=function(){return c},c}Object.defineProperty(b,"__esModule",{value:!0});var c=a(59312),g=c.__importStar(a(27378)),h=a(87651),e=c.__importDefault(a(65388));b.default=(0,e.default)(function(a){var b=a.className,c=a.variant,e=a.id,f=a.children,d=a.component,i=a.onClick;return g.createElement(null!=d?d:"p",{id:e,onClick:i,className:(0,h.cx)(b,b,c&&"--variant-".concat(c))},f)})(d(),function(a){var c=a.theme,b=a.size;return c.textSize(null!=b?b:"normal")},function(a){var c=a.theme,b=a.lineHeight;return c.lineHeight(null!=b?b:"normal")},function(a){var c=a.theme,b=a.fontWeight;return c.fontWeight(null!=b?b:"regular")},function(a){var b=a.theme,c=a.marginBottom;return c?b.spacing(2):null},function(a){return a.theme.colors.grey[500]},function(a){return a.theme.textSize("small")})},35686:function(d,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var c=a(59312),e=a(87651),f=c.__importDefault(a(44659));b.default=function(a){return function(c){var b;return b="function"==typeof a?a((0,f.default)()):a,Object.keys(b).reduce(function(h,d){var a,f,g;return Object.assign(Object.assign({},h),(a={},f=d,g=(0,e.css)("function"==typeof b[d]?b[d](c):b[d]),f in a?Object.defineProperty(a,f,{value:g,enumerable:!0,configurable:!0,writable:!0}):a[f]=g,a))},{})}}},65388:function(h,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.breakpoints=a.cx=a.clsx=void 0;var c=b(59312),d=b(87651),e=c.__importDefault(b(94408)),f=c.__importDefault(b(18651));a.clsx=d.cx,a.cx=d.cx,a.breakpoints=(0,f.default)({});var g=e.default;a.default=g},44659:function(c,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var d=b(151);a.default=function(){return(0,d.useTheme)()}},83848:function(g,b,a){"use strict";a.r(b),a.d(b,{meta:function(){return e},"default":function(){return f}}),a(27378);var h=a(35318),i=a(56100),j=a(27872),k=a(33356),l=a(80273),e={name:"Radio Field",tableOfContents:{depth:0,children:[{depth:1,slug:"#radio-field",title:"Radio Field",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo-com-form",title:"Exemplo com Form"},{depth:3,slug:"#exemplo-sem-form",title:"Exemplo sem Form"}]}]}]}},m={meta:e};function f(b){var c=b.components,a=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(b,["components"]);return(0,h.kt)("wrapper",Object.assign({},m,a,{components:c,mdxType:"MDXLayout"}),(0,h.kt)("h1",Object.assign({},{id:"radio-field"}),"Radio Field"),(0,h.kt)("p",null,"O componente de Radio \xe9 utilizado quando \xe9 preciso deixar todas as op\xe7\xf5es vis\xedveis e permitir a sele\xe7\xe3o delas."),(0,h.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,h.kt)("pre",null,(0,h.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import RadioField from '@eduzz/houston-ui/Forms/Radio';\n")),(0,h.kt)("h3",Object.assign({},{id:"exemplo-com-form"}),"Exemplo com Form"),(0,h.kt)(i.X,{__position:0,code:'() => {\n  const form = useForm({\n    onSubmit: () => {},\n  })\n  return (\n    <Form context={form}>\n      <RadioField label="Op\xe7\xe3o 1" name="radio" value={123} />\n      <RadioField label="Op\xe7\xe3o 2" name="radio" value={1} />\n    </Form>\n  )\n}',scope:{props:a,Playground:i.X,useForm:j.Z,Form:k.default,RadioField:l.Z,meta:e},mdxType:"Playground"},function(){var a=(0,j.Z)({onSubmit:function(){}});return(0,h.kt)(k.default,{context:a,mdxType:"Form"},(0,h.kt)(l.Z,{label:"Op\xe7\xe3o 1",name:"radio",value:123,mdxType:"RadioField"}),(0,h.kt)(l.Z,{label:"Op\xe7\xe3o 2",name:"radio",value:1,mdxType:"RadioField"}))}),(0,h.kt)("h3",Object.assign({},{id:"exemplo-sem-form"}),"Exemplo sem Form"),(0,h.kt)(i.X,{__position:1,code:'() => {\n  return (\n    <div>\n      <RadioField\n        label="Label"\n        description="Descri\xe7\xe3o do item"\n        name="radio-1"\n        onChange={(e) => console.log(e.target.value)}\n        value={1}\n      />\n      <RadioField\n        label="Label"\n        errorMessage="Mensagem de erro"\n        name="radio-2"\n        onChange={(e) => console.log(e.target.value)}\n        value={2}\n      />\n    </div>\n  )\n}',scope:{props:a,Playground:i.X,useForm:j.Z,Form:k.default,RadioField:l.Z,meta:e},mdxType:"Playground"},function(){return(0,h.kt)("div",null,(0,h.kt)(l.Z,{label:"Label",description:"Descri\xe7\xe3o do item",name:"radio-1",onChange:function(a){return console.log(a.target.value)},value:1,mdxType:"RadioField"}),(0,h.kt)(l.Z,{label:"Label",errorMessage:"Mensagem de erro",name:"radio-2",onChange:function(a){return console.log(a.target.value)},value:2,mdxType:"RadioField"}))}),(0,h.kt)("table",null,(0,h.kt)("thead",{parentName:"table"},(0,h.kt)("tr",{parentName:"thead"},(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,h.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,h.kt)("tbody",{parentName:"table"},(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"name"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"string")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"true")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"label"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"description"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"string")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"errorMessage"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"string")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"form"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"IFormAdapter<any>")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"margin"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"none"),", ",(0,h.kt)("inlineCode",{parentName:"td"},"normal")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"none")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"checked"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"boolean")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Caso a prop ",(0,h.kt)("inlineCode",{parentName:"td"},"form")," esteja configurada, o componente ser\xe1 marcado atrav\xe9s dos valores do formul\xe1rio e essa propriedade ser\xe1 ignorada")),(0,h.kt)("tr",{parentName:"tbody"},(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onChange"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"function")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,h.kt)("inlineCode",{parentName:"td"},"false")),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,h.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Fun\xe7\xe3o chamada quando o valor do Radio \xe9 alterado")))))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/ui-components/Forms/Radio/index.mdx"};for(var d in c)window[d]=c[d]}},function(a){a.O(0,[4526,4356,9961,6557,1281,2937,9978,2122,1141,2765,3245,9774,2888,179],function(){return a(a.s=81218)}),_N_E=a.O()}])