(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[985],{81218:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Forms/Radio",function(){return c(83848)}])},69012:function(e,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.useFormContext=function(){return c.useContextSelector(d,function(a){return a})},a.useFormValue=function(e,a){var b=c.useContextSelector(d,function(a){return e?null==a?void 0:a.getFieldValue(e):null});return null!=a?a:b},a.useFormError=function(e,a){var b=c.useContextSelector(d,function(a){return e?null==a?void 0:a.getFieldError(e):null});return null!=a?a:b},a.useFormIsSubmitting=function(){return c.useContextSelector(d,function(a){return null==a?void 0:a.isSubmitting})},a.useFormSetValue=function(a){var b=c.useContextSelector(d,function(b){return a?null==b?void 0:b.setFieldValue:null});return f.useCallback(function(c){return b&&b(a,c)},[b,a])},a.default=void 0;var f=b(39037).interopRequireWildcard(b(27378)),c=b(55693),d=c.createContext(null);a.default=d},27872:function(d,c,a){"use strict";c.ZP=function(b){var k=b.onSubmit,s=b.onSubmitWithErrors,l=b.validationSchema,c=b.initialValues,d=b.validateOnMount,t=e.useRef({}).current,u=e.useRef({}).current,v=e.useRef(new g.Subject).current,w=e.useRef(k);j.default(function(){return v.pipe(h.switchMap(function(b){var a,d=b.model,e=b.formikHelpers,f=null==w?void 0:null===(a=w.current)|| void 0===a?void 0:a.call(w,d,e),c=g.of(!0).pipe(h.switchMap(function(){return f||g.of(null)}),h.catchError(function(){return g.of(null)}),h.share());return t.promise=c.toPromise(),c}))},[]);var a=f.useFormik({validateOnMount:void 0===d||d,initialValues:null!=c?c:{},validationSchema:l?function(){return l(i)}:null,onSubmit:function(a,b){return w.current=k,v.next({model:a,formikHelpers:b}),new Promise(function(a){return setTimeout(function(){return a(t.promise)},500)})}});e.useEffect(function(){a.submitCount&&!a.isValid&&s&&s(a.errors,a.values)},[a.submitCount]);var m=e.useRef(function(b){return u[b]||(u[b]=function(c){a.setFieldTouched(b,!0,!1),a.setFieldValue(b,c,!1)}),u[b]}).current,n=e.useCallback(function(b){return a.handleSubmit(b)},[a]),o=e.useCallback(function(b){return a.getFieldMeta(b).value},[a]),p=e.useCallback(function(b,c){a.setFieldTouched(b,!0,!1),a.setFieldValue(b,c,!0)},[]),q=e.useCallback(function(c){var b=a.getFieldMeta(c);return b.touched||a.submitCount>0&&!b.value?b.error:""},[a]),r=e.useCallback(function(b){return a.setErrors(b)},[a]);return{handleSubmit:n,handleChange:m,handleReset:function(){return a.resetForm({values:c})},setValues:a.setValues,setErrors:r,getFieldValue:o,setFieldValue:p,getFieldError:q,setFieldTouched:a.setFieldTouched,reset:function(b){return a.resetForm({values:void 0===b?c:b})},initialValues:a.initialValues,values:a.values,isSubmitting:a.isSubmitting,isValid:a.isValid,errors:a.errors}};var b=a(39037);a(77467);var e=a(27378),f=a(34090),g=a(32937),h=a(19978),i=b.interopRequireWildcard(a(14633)),j=b.interopRequireDefault(a(80754));a(69012)},77467:function(b,c,a){"use strict";a(14633).setLocale({mixed:{default:"Inv\xe1lido",required:"Obrigat\xf3rio",oneOf:"Deve ser um dos seguintes valores: ${values}",notOneOf:"N\xe3o pode ser um dos seguintes valores: ${values}",notType:function(a){return"number"===a.type?"Deve ser um n\xfamero":"Inv\xe1lido"}},string:{length:"Deve ter exatamente ${length} caracteres",min:"Deve ter pelo menos ${min} caracteres",max:"Deve ter no m\xe1ximo ${max} caracteres",email:"E-mail inv\xe1lido",url:"Deve ter um formato de URL v\xe1lida",trim:"N\xe3o deve conter espa\xe7os no in\xedcio ou no fim.",lowercase:"Deve estar em mai\xfasculo",uppercase:"Deve estar em min\xfasculo"},number:{min:"Deve ser no m\xednimo ${min}",max:"Deve ser no m\xe1ximo ${max}",lessThan:"Deve ser menor que ${less}",moreThan:"Deve ser maior que ${more}",positive:"Deve ser um n\xfamero positivo",negative:"Deve ser um n\xfamero negativo",integer:"Deve ser um n\xfamero inteiro"},date:{min:"Deve ser maior que a data ${min}",max:"Deve ser menor que a data ${max}"},array:{min:"Deve ter no m\xednimo ${min} itens",max:"Deve ter no m\xe1ximo ${max} itens"}})},70010:function(d,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(b){var a;f=c.objectSpread({onUnhandledError:function(){return null}},f,b,{pagination:c.objectSpread({pageStart:1,perPage:25},f.pagination,null!==(a=b.pagination)&& void 0!==a?a:{})}),g()},a.getConfig=i;var c=b(39037),e=c.interopRequireDefault(b(86248)),f={onUnhandledError:function(){},pagination:{pageStart:1,perPage:25}};function g(){return h.apply(this,arguments)}function h(){return(h=c.asyncToGenerator(e.default.mark(function a(){var c;return e.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:try{(c=b(32937)).config&&!c.config.onUnhandledError&&(c.config.onUnhandledError=function(a){return f.onUnhandledError(a,"rxjs")})}catch(d){}case 1:case"end":return a.stop()}},a)}))).apply(this,arguments)}function i(){return f}},80754:function(d,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(h,i){var a=c.slicedToArray(e.useState(void 0),2),j=a[0],o=a[1],b=c.slicedToArray(e.useState(),2),k=b[0],p=b[1],d=c.slicedToArray(e.useState(!0),2),l=d[0],q=d[1],g=c.slicedToArray(e.useState(!1),2),m=g[0],r=g[1],n=e.useCallback(h,i);return e.useEffect(function(){o(void 0),p(void 0),r(!1),q(!0);var a=n().subscribe({next:function(a){o(function(){return a}),p(void 0),q(!1)},error:function(a){f.getConfig().onUnhandledError(a,"hooks"),o(null),p(a),q(!1)},complete:function(){r(!0),q(!1)}});return function(){return a.unsubscribe()}},[n]),[j,k,m,l]};var c=a(39037),e=c.interopRequireWildcard(a(27378)),f=a(70010)},16847:function(e,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=b(39037).interopRequireWildcard(b(96342));Object.keys(c).forEach(function(b){"default"!==b&&"__esModule"!==b&&(b in a&&a[b]===c[b]||Object.defineProperty(a,b,{enumerable:!0,get:function(){return c[b]}}))});var d=c.default;a.default=d},33356:function(f,b,a){"use strict";b.Z=void 0;var c=a(39037),g=a(24246),d=c.interopRequireWildcard(a(27378)),h=c.interopRequireDefault(a(69012)),e=d.memo(function(b){var a=b.context,d=c.objectWithoutProperties(b,["context"]);return g.jsx(h.default.Provider,{value:a,children:g.jsx("form",c.objectSpread({},d,{onReset:a.handleReset,onSubmit:a.handleSubmit}))})});b.Z=e},80273:function(d,b,a){"use strict";b.Z=void 0;var c=a(39037),e=a(24246);c.interopRequireWildcard(a(27378));var f=c.interopRequireDefault(a(57409));b.Z=function(a){return e.jsx(f.default,c.objectSpread({},a,{type:"radio"}))}},83848:function(g,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return f},meta:function(){return e}});var h=a(27378),i=a(35318),j=a(56100),k=a(27872),l=a(33356),m=a(80273);function n(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}var e={name:"Radio",tableOfContents:{depth:0,children:[{depth:1,slug:"#radio",title:"Radio",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo-com-form",title:"Exemplo com Form"},{depth:3,slug:"#exemplo-sem-form",title:"Exemplo sem Form"},{depth:3,slug:"#props",title:"Props"}]}]}]}},o={meta:e};function f(b){var c=b.components,a=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(b,["components"]);return(0,i.kt)("wrapper",Object.assign({},o,a,{components:c,mdxType:"MDXLayout"}),(0,i.kt)("h1",Object.assign({},{id:"radio"}),"Radio"),(0,i.kt)("p",null,"O componente de Radio \xe9 utilizado quando \xe9 preciso deixar todas as op\xe7\xf5es vis\xedveis e permitir a sele\xe7\xe3o delas."),(0,i.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import Radio from '@eduzz/houston-ui/Forms/Radio';\n")),(0,i.kt)("h3",Object.assign({},{id:"exemplo-com-form"}),"Exemplo com Form"),(0,i.kt)(j.X,{__position:0,code:'() => {\n  const form = useForm({ onSubmit: () => {} })\n  return (\n    <Form context={form}>\n      <p>{JSON.stringify(form.values)}</p>\n      <Radio name="value" value={1}>\n        Op\xe7\xe3o 1\n      </Radio>\n      <Radio name="value" value={2}>\n        Op\xe7\xe3o 2\n      </Radio>\n    </Form>\n  )\n}',scope:{props:a,Playground:j.X,useForm:k.ZP,Form:l.Z,Radio:m.Z,meta:e},mdxType:"Playground"},function(){var a=(0,k.ZP)({onSubmit:function(){}});return(0,i.kt)(l.Z,{context:a,mdxType:"Form"},(0,i.kt)("p",null,JSON.stringify(a.values)),(0,i.kt)(m.Z,{name:"value",value:1,mdxType:"Radio"},"Op\xe7\xe3o 1"),(0,i.kt)(m.Z,{name:"value",value:2,mdxType:"Radio"},"Op\xe7\xe3o 2"))}),(0,i.kt)("h3",Object.assign({},{id:"exemplo-sem-form"}),"Exemplo sem Form"),(0,i.kt)(j.X,{__position:1,code:'() => {\n  const [value, setValue] = React.useState()\n  return (\n    <div>\n      <p>{JSON.stringify({ value })}</p>\n      <Radio\n        helperText="Descri\xe7\xe3o do item"\n        onChange={setValue}\n        value={1}\n        checked={value}\n      >\n        Op\xe7\xe3o 1\n      </Radio>\n      <Radio\n        errorMessage="Mensagem de erro"\n        onChange={setValue}\n        value={2}\n        checked={value}\n      >\n        Op\xe7\xe3o 2\n      </Radio>\n    </div>\n  )\n}',scope:{props:a,Playground:j.X,useForm:k.ZP,Form:l.Z,Radio:m.Z,meta:e},mdxType:"Playground"},function(){var a,b,d=(a=h.useState(),b=2,function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||function(a,c){if(a){if("string"==typeof a)return n(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return n(a,c)}}(a,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=d[0],e=d[1];return(0,i.kt)("div",null,(0,i.kt)("p",null,JSON.stringify({value:c})),(0,i.kt)(m.Z,{helperText:"Descri\xe7\xe3o do item",onChange:e,value:1,checked:c,mdxType:"Radio"},"Op\xe7\xe3o 1"),(0,i.kt)(m.Z,{errorMessage:"Mensagem de erro",onChange:e,value:2,checked:c,mdxType:"Radio"},"Op\xe7\xe3o 2"))}),(0,i.kt)("h3",Object.assign({},{id:"props"}),"Props"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"name"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"helperText"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"errorMessage"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"value"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Valor setado caso seja checkado")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"checked"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Pode receber um boolean ou um state com o valor")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onChange"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"function")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Fun\xe7\xe3o chamada quando o valor do checkbox \xe9 alterado")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"disabled"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))))))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/ui-components/Forms/Radio/index.mdx"};for(var d in c)window[d]=c[d]}},function(a){a.O(0,[4526,1996,9961,8194,9978,2122,7978,7409,9774,2888,179],function(){return a(a.s=81218)}),_N_E=a.O()}])