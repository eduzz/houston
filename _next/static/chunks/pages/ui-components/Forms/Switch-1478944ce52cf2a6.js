(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[764],{99807:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Forms/Switch",function(){return c(6910)}])},27872:function(d,c,a){"use strict";c.Z=function(b){var k=b.onSubmit,s=b.onSubmitWithErrors,l=b.validationSchema,c=b.initialValues,d=b.validateOnMount,t=e.useRef({}).current,u=e.useRef({}).current,v=e.useRef(new g.Subject).current,w=e.useRef(k);j.default(function(){return v.pipe(h.switchMap(function(b){var a,d=b.model,e=b.formikHelpers,f=null==w?void 0:null===(a=w.current)|| void 0===a?void 0:a.call(w,d,e),c=g.of(!0).pipe(h.switchMap(function(){return f||g.of(null)}),h.catchError(function(){return g.of(null)}),h.share());return t.promise=c.toPromise(),c}))},[]);var a=f.useFormik({validateOnMount:void 0===d||d,initialValues:null!=c?c:{},validationSchema:l?function(){return l(i)}:null,onSubmit:function(a,b){return w.current=k,v.next({model:a,formikHelpers:b}),new Promise(function(a){return setTimeout(function(){return a(t.promise)},500)})}});e.useEffect(function(){a.submitCount&&!a.isValid&&s&&s(a.errors,a.values)},[a.submitCount]);var m=e.useRef(function(b){return u[b]||(u[b]=function(c){a.setFieldTouched(b,!0,!1),a.setFieldValue(b,c,!1)}),u[b]}).current,n=e.useCallback(function(b){return a.handleSubmit(b)},[a]),o=e.useCallback(function(b){return a.getFieldMeta(b).value},[a]),p=e.useCallback(function(b,c){a.setFieldTouched(b,!0,!1),a.setFieldValue(b,c,!0)},[]),q=e.useCallback(function(c){var b=a.getFieldMeta(c);return b.touched||a.submitCount>0&&!b.value?b.error:""},[a]),r=e.useCallback(function(b){return a.setErrors(b)},[a]);return{handleSubmit:n,handleChange:m,handleReset:function(){return a.resetForm({values:c})},setValues:a.setValues,setErrors:r,getFieldValue:o,setFieldValue:p,getFieldError:q,setFieldTouched:a.setFieldTouched,reset:function(b){return a.resetForm({values:void 0===b?c:b})},initialValues:a.initialValues,values:a.values,isSubmitting:a.isSubmitting,isValid:a.isValid,errors:a.errors}};var b=a(39037);a(77467);var e=a(27378),f=a(34090),g=a(32937),h=a(19978),i=b.interopRequireWildcard(a(14633)),j=b.interopRequireDefault(a(80754))},77467:function(b,c,a){"use strict";a(14633).setLocale({mixed:{default:"Inv\xe1lido",required:"Obrigat\xf3rio",oneOf:"Deve ser um dos seguintes valores: ${values}",notOneOf:"N\xe3o pode ser um dos seguintes valores: ${values}"},string:{length:"Deve ter exatamente ${length} caracteres",min:"Deve ter pelo menos ${min} caracteres",max:"Deve ter no m\xe1ximo ${max} caracteres",email:"E-mail inv\xe1lido",url:"Deve ter um formato de URL v\xe1lida",trim:"N\xe3o deve conter espa\xe7os no in\xedcio ou no fim.",lowercase:"Deve estar em mai\xfasculo",uppercase:"Deve estar em min\xfasculo"},number:{min:"Deve ser no m\xednimo ${min}",max:"Deve ser no m\xe1ximo ${max}",lessThan:"Deve ser menor que ${less}",moreThan:"Deve ser maior que ${more}",positive:"Deve ser um n\xfamero positivo",negative:"Deve ser um n\xfamero negativo",integer:"Deve ser um n\xfamero inteiro"},date:{min:"Deve ser maior que a data ${min}",max:"Deve ser menor que a data ${max}"},array:{min:"Deve ter no m\xednimo ${min} itens",max:"Deve ter no m\xe1ximo ${max} itens"}})},70010:function(d,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(b){var a;f=c.objectSpread({onUnhandledError:function(){return null}},f,b,{pagination:c.objectSpread({pageStart:1,perPage:25},f.pagination,null!==(a=b.pagination)&& void 0!==a?a:{})}),g()},a.getConfig=i;var c=b(39037),e=c.interopRequireDefault(b(86248)),f={onUnhandledError:function(){},pagination:{pageStart:1,perPage:25}};function g(){return h.apply(this,arguments)}function h(){return(h=c.asyncToGenerator(e.default.mark(function a(){var c;return e.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:try{(c=b(32937)).config&&!c.config.onUnhandledError&&(c.config.onUnhandledError=function(a){return f.onUnhandledError(a,"rxjs")})}catch(d){}case 1:case"end":return a.stop()}},a)}))).apply(this,arguments)}function i(){return f}},80754:function(d,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(h,i){var a=c.slicedToArray(e.useState(void 0),2),j=a[0],o=a[1],b=c.slicedToArray(e.useState(),2),k=b[0],p=b[1],d=c.slicedToArray(e.useState(!0),2),l=d[0],q=d[1],g=c.slicedToArray(e.useState(!1),2),m=g[0],r=g[1],n=e.useCallback(h,i);return e.useEffect(function(){o(void 0),p(void 0),r(!1),q(!0);var a=n().subscribe({next:function(a){o(function(){return a}),p(void 0),q(!1)},error:function(a){f.getConfig().onUnhandledError(a,"hooks"),o(null),p(a),q(!1)},complete:function(){r(!0),q(!1)}});return function(){return a.unsubscribe()}},[n]),[j,k,m,l]};var c=a(39037),e=c.interopRequireWildcard(a(27378)),f=a(70010)},96342:function(n,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.breakpoints=a.css=a.clsx=a.cx=a.keyframes=void 0;var e=b(39037),c=b(87651),d=b(10043),f=e.interopRequireDefault(b(94408)),g=b(60921),h=d.keyframes;a.keyframes=h;var i=c.cx;a.cx=i;var j=c.cx;a.clsx=j;var k=d.css;a.css=k;var l=g.breakpoinstUtils;a.breakpoints=l;var m=f.default;a.default=m},33356:function(h,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.useFormContext=function(){return e.useContext(f)},a.default=a.FormFieldsContext=void 0;var c=b(39037),i=b(24246),d=c.interopRequireWildcard(b(27378)),e=b(55693),f=e.createContext(null);a.FormFieldsContext=f;var g=d.memo(function(b){var a=b.context,d=c.objectWithoutProperties(b,["context"]);return i.jsx(f.Provider,{value:a,children:i.jsx("form",c.objectSpread({},d,{onReset:a.handleReset,onSubmit:a.handleSubmit}))})});a.default=g},17880:function(g,b,a){"use strict";b.Z=void 0;var c=a(39037),h=a(24246),d=c.interopRequireWildcard(a(27378)),i=c.interopRequireDefault(a(13702)),j=a(55693),k=a(33356),e=d.forwardRef(function(b,l){var e=b.name,m=b.onChange,a=c.objectWithoutProperties(b,["name","onChange"]),n=j.useContextSelector(k.FormFieldsContext,function(a){return null==a?void 0:a.isSubmitting}),f=j.useContextSelector(k.FormFieldsContext,function(a){return null==a?void 0:a.getFieldValue(e)}),g=j.useContextSelector(k.FormFieldsContext,function(a){return null==a?void 0:a.setFieldValue});if(!e&&g)throw new Error("@eduzz/houston-ui: to use form prop you need provide a name for the field");var o=d.useCallback(function(b,a){g&&g(e,a)},[g,e]);return h.jsx(i.default,c.objectSpread({disabled:n||a.disabled,name:e,inputRef:l,onChange:m||o,className:a.className,color:"primary",checked:null!=f?f:a.checked},a))}),f=d.memo(e);b.Z=f},24885:function(f,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),g=a(24246),d=c.interopRequireWildcard(a(27378)),h=c.interopRequireDefault(a(36183)),e=d.forwardRef(function(a,b){var d=a.className,e=c.objectWithoutProperties(a,["className"]);return g.jsx(h.default,c.objectSpread({},e,{item:!0,className:d,ref:b}))});b.default=e},29618:function(g,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),h=a(24246),d=c.interopRequireWildcard(a(27378)),i=c.interopRequireDefault(a(36183)),j=a(55693),k=a(77097),l=a(2293),e=d.forwardRef(function(a,b){var e=a.className,f=a.spacing,g=c.objectWithoutProperties(a,["className","spacing"]),m=j.useContextSelector(k.GridContext,function(a){return a.spacing}),n=d.useMemo(function(){var a;return l.ContainerSizes[null!==(a=null!=f?f:m)&& void 0!==a?a:"cozy"]},[m,f]);return h.jsx(i.default,c.objectSpread({},g,{container:!0,ref:b,className:e,spacing:n}))}),f=d.memo(e);b.default=f},77097:function(e,a,c){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.GridContext=void 0;var b=c(55693).createContext({});a.GridContext=b;var d=b.Provider;a.default=d},2293:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ContainerSizes=void 0,a.ContainerSizes={comfortable:10,cozy:4,compact:2}},77590:function(d,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.truncateText=function(a,b){return(null==a?void 0:a.length)<=b?a:"".concat(a.slice(0,b),"...")},a.getReactChildrenComponent=function(a,b){return e.Children.map(a,function(a){return g(a,b)?a:null}).filter(function(a){return!!a})},a.getReactChildrenProps=f,a.getReactFirstChildrenProps=function(b,c){var a=f(b,c);return a&&a[0]},a.isReactComponent=g,a.getColorFallback=function(b){var a=arguments.length>1&& void 0!==arguments[1]?arguments[1]:"primary";return["low","high"].includes(a)?b.neutralColor[a]:["positive","negative","warning","informative"].includes(a)?b.feedbackColor[a]:b.brandColor[a]};var c=b(39037),e=c.interopRequireWildcard(b(27378));function f(a,b){return e.Children.map(a,function(a){return g(a,b)?c.objectSpread({},a.props):null}).filter(function(a){return!!a})}function g(a,b){return b?a&&e.isValidElement(a)&&(null==a?void 0:a.type)===b:a&&e.isValidElement(a)}},98021:function(i,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),j=a(24246),d=c.interopRequireWildcard(a(27378)),e=c.interopRequireWildcard(a(96342)),k=a(77590);function l(){var a=c.taggedTemplateLiteral(["\n      margin: 0;\n      font-size: ",";\n      font-weight: ",";\n      line-height: ",";\n      margin-bottom: ",";\n      color: ",";\n    "]);return l=function(){return a},a}function f(){var a=c.taggedTemplateLiteral(["\n  ","\n"]);return f=function(){return a},a}var g=d.forwardRef(function(a,e){var b=a.as,f=a.children,d=a.color,g=c.objectWithoutProperties(a,["as","children","color"]);return j.jsx(void 0===b?"p":b,c.objectSpread({ref:e,color:void 0===d?"low":d},g,{children:f}))}),h=e.default(g)(f(),function(a){var b=a.theme,c=a.size,d=a.weight,f=a.lineHeight,h=a.marginBottom,g=a.color;return e.css(l(),b.font.size[void 0===c?"xs":c],b.font.weight[void 0===d?"regular":d],b.line.height[void 0===f?"md":f],h?b.spacing.nano:null,k.getColorFallback(b,void 0===g?"low":g).pure)});b.default=h},6910:function(g,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return f},meta:function(){return e}});var h=a(27378),i=a(35318),j=a(56100),k=a(27872),l=a(24885),m=a(29618),n=a(98021),o=a(33356),p=a(17880);function q(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}var e={name:"Switch Field",tableOfContents:{depth:0,children:[{depth:1,slug:"#switch-field",title:"Switch Field",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplos",title:"Exemplos"},{depth:3,slug:"#utilizando-com-form",title:"Utilizando com Form"}]}]}]}},r={meta:e};function f(b){var c=b.components,a=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(b,["components"]);return(0,i.kt)("wrapper",Object.assign({},r,a,{components:c,mdxType:"MDXLayout"}),(0,i.kt)("h1",Object.assign({},{id:"switch-field"}),"Switch Field"),(0,i.kt)("p",null,"Switches alternam o estado de uma \xfanica configura\xe7\xe3o, sendo ligado ou desligado."),(0,i.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import Switch from '@eduzz/houston-ui/Forms/Switch';\n")),(0,i.kt)("h3",Object.assign({},{id:"exemplos"}),"Exemplos"),(0,i.kt)(j.X,{__position:0,code:'() => {\n  const [checked, setChecked] = React.useState(false)\n  const onChange = React.useCallback(() => setChecked((prev) => !prev), [])\n  return (\n    <>\n      <Typography>Padr\xe3o</Typography>\n      <Row>\n        <Column>\n          <Switch checked={checked} onChange={onChange} />\n        </Column>\n        <Column>\n          <Switch size="small" checked={checked} onChange={onChange} />\n        </Column>\n      </Row>\n      <Typography>Desabilitado</Typography>\n      <Row>\n        <Column>\n          <Switch defaultChecked disabled />\n        </Column>\n        <Column>\n          <Switch size="small" defaultChecked disabled />\n        </Column>\n      </Row>\n      <Row>\n        <Column>\n          <Switch disabled />\n        </Column>\n        <Column>\n          <Switch size="small" disabled />\n        </Column>\n      </Row>\n    </>\n  )\n}',scope:{props:a,Playground:j.X,useForm:k.Z,Column:l.default,Row:m.default,Typography:n.default,Form:o.default,Switch:p.Z,meta:e},mdxType:"Playground"},function(){var a,b,c=(a=h.useState(!1),b=2,function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||function(a,c){if(a){if("string"==typeof a)return q(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return q(a,c)}}(a,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=c[0],f=c[1],e=h.useCallback(function(){return f(function(a){return!a})},[]);return(0,i.kt)(h.Fragment,null,(0,i.kt)(n.default,{mdxType:"Typography"},"Padr\xe3o"),(0,i.kt)(m.default,{mdxType:"Row"},(0,i.kt)(l.default,{mdxType:"Column"},(0,i.kt)(p.Z,{checked:d,onChange:e,mdxType:"Switch"})),(0,i.kt)(l.default,{mdxType:"Column"},(0,i.kt)(p.Z,{size:"small",checked:d,onChange:e,mdxType:"Switch"}))),(0,i.kt)(n.default,{mdxType:"Typography"},"Desabilitado"),(0,i.kt)(m.default,{mdxType:"Row"},(0,i.kt)(l.default,{mdxType:"Column"},(0,i.kt)(p.Z,{defaultChecked:!0,disabled:!0,mdxType:"Switch"})),(0,i.kt)(l.default,{mdxType:"Column"},(0,i.kt)(p.Z,{size:"small",defaultChecked:!0,disabled:!0,mdxType:"Switch"}))),(0,i.kt)(m.default,{mdxType:"Row"},(0,i.kt)(l.default,{mdxType:"Column"},(0,i.kt)(p.Z,{disabled:!0,mdxType:"Switch"})),(0,i.kt)(l.default,{mdxType:"Column"},(0,i.kt)(p.Z,{size:"small",disabled:!0,mdxType:"Switch"}))))}),(0,i.kt)("h3",Object.assign({},{id:"utilizando-com-form"}),"Utilizando com Form"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import useForm from '@eduzz/houston-forms/useForm';\n")),(0,i.kt)(j.X,{__position:1,code:'() => {\n  const form = useForm({\n    initialValues: { darkTheme: true }, //estado inicial, n\xe3o precisa passar todas as propriedades\n    onSubmit: () => {\n      // onSubmit pode retornar uma promise ou um observable de rxjs, desse jeito ele ir\xe1\n      // setar corretamente o isSubmitting\n      return new Promise((resolve) => {\n        setTimeout(() => resolve(null), 3000)\n      })\n    },\n  })\n  return (\n    <Form context={form}>\n      <Typography>\n        Valor atual do switch: {String(form.values.darkTheme)}\n      </Typography>\n      <Switch name="darkTheme" />\n    </Form>\n  )\n}',scope:{props:a,Playground:j.X,useForm:k.Z,Column:l.default,Row:m.default,Typography:n.default,Form:o.default,Switch:p.Z,meta:e},mdxType:"Playground"},function(){var a=(0,k.Z)({initialValues:{darkTheme:!0},onSubmit:function(){return new Promise(function(a){setTimeout(function(){return a(null)},3e3)})}});return(0,i.kt)(o.default,{context:a,mdxType:"Form"},(0,i.kt)(n.default,{mdxType:"Typography"},"Valor atual do switch: ",String(a.values.darkTheme)),(0,i.kt)(p.Z,{name:"darkTheme",mdxType:"Switch"}))}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"id"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"name"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"className"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"checked"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"defaultChecked"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"size"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"'small ou medium'")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"'medium'")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onChange"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"function")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"disabled"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")))))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/ui-components/Forms/Switch/index.mdx"};for(var d in c)window[d]=c[d]}},function(a){a.O(0,[4526,9914,9961,6557,8194,4360,9978,2122,1678,7978,9774,2888,179],function(){return a(a.s=99807)}),_N_E=a.O()}])