(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[158],{37552:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms/example",function(){return c(9298)}])},85372:function(c,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var d=b(39037);a.default={apply:function(a){return null==a||""===a?"":new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(Number(a)||0)},clean:function(a){(a=(a||"").toString().replace(/[^\d,]/gi,"")).includes(",")||(a="0,"+((g=(f=2,(e=a).length))<f?(c=f-g,new Array(c).fill("0").join("")+e):e||""));var c,e,f,g,b=d.slicedToArray(a.split(","),2)[1];return b&&2!==b.length&&(a=a.replace(",","").replace(/(\d+)?(\d{2})/gi,"$1,$2").replace(/^,/gi,"0,")),parseFloat(a.replace(/\./gi,"").replace(",","."))}}},27872:function(d,c,a){"use strict";c.ZP=function(b){var k=b.onSubmit,s=b.onSubmitWithErrors,l=b.validationSchema,c=b.initialValues,d=b.validateOnMount,t=e.useRef({}).current,u=e.useRef({}).current,v=e.useRef(new g.Subject).current,w=e.useRef(k);j.default(function(){return v.pipe(h.switchMap(function(b){var a,d=b.model,e=b.formikHelpers,f=null==w?void 0:null===(a=w.current)|| void 0===a?void 0:a.call(w,d,e),c=g.of(!0).pipe(h.switchMap(function(){return f||g.of(null)}),h.catchError(function(){return g.of(null)}),h.share());return t.promise=c.toPromise(),c}))},[]);var a=f.useFormik({validateOnMount:void 0===d||d,initialValues:null!=c?c:{},validationSchema:l?function(){return l(i)}:null,onSubmit:function(a,b){return w.current=k,v.next({model:a,formikHelpers:b}),new Promise(function(a){return setTimeout(function(){return a(t.promise)},500)})}});e.useEffect(function(){a.submitCount&&!a.isValid&&s&&s(a.errors,a.values)},[a.submitCount]);var m=e.useRef(function(b){return u[b]||(u[b]=function(c){a.setFieldTouched(b,!0,!1),a.setFieldValue(b,c,!1)}),u[b]}).current,n=e.useCallback(function(b){return a.handleSubmit(b)},[a]),o=e.useCallback(function(b){return a.getFieldMeta(b).value},[a]),p=e.useCallback(function(b,c){a.setFieldTouched(b,!0,!1),a.setFieldValue(b,c,!0)},[]),q=e.useCallback(function(c){var b=a.getFieldMeta(c);return b.touched||a.submitCount>0&&!b.value?b.error:""},[a]),r=e.useCallback(function(b){return a.setErrors(b)},[a]);return{handleSubmit:n,handleChange:m,handleReset:function(){return a.resetForm({values:c})},setValues:a.setValues,setErrors:r,getFieldValue:o,setFieldValue:p,getFieldError:q,setFieldTouched:a.setFieldTouched,reset:function(b){return a.resetForm({values:void 0===b?c:b})},initialValues:a.initialValues,values:a.values,isSubmitting:a.isSubmitting,isValid:a.isValid,errors:a.errors}};var b=a(39037);a(77467);var e=a(27378),f=a(34090),g=a(32937),h=a(19978),i=b.interopRequireWildcard(a(14633)),j=b.interopRequireDefault(a(80754));a(69012)},77467:function(b,c,a){"use strict";a(14633).setLocale({mixed:{default:"Inv\xe1lido",required:"Obrigat\xf3rio",oneOf:"Deve ser um dos seguintes valores: ${values}",notOneOf:"N\xe3o pode ser um dos seguintes valores: ${values}",notType:function(a){return"number"===a.type?"Deve ser um n\xfamero":"Inv\xe1lido"}},string:{length:"Deve ter exatamente ${length} caracteres",min:"Deve ter pelo menos ${min} caracteres",max:"Deve ter no m\xe1ximo ${max} caracteres",email:"E-mail inv\xe1lido",url:"Deve ter um formato de URL v\xe1lida",trim:"N\xe3o deve conter espa\xe7os no in\xedcio ou no fim.",lowercase:"Deve estar em mai\xfasculo",uppercase:"Deve estar em min\xfasculo"},number:{min:"Deve ser no m\xednimo ${min}",max:"Deve ser no m\xe1ximo ${max}",lessThan:"Deve ser menor que ${less}",moreThan:"Deve ser maior que ${more}",positive:"Deve ser um n\xfamero positivo",negative:"Deve ser um n\xfamero negativo",integer:"Deve ser um n\xfamero inteiro"},date:{min:"Deve ser maior que a data ${min}",max:"Deve ser menor que a data ${max}"},array:{min:"Deve ter no m\xednimo ${min} itens",max:"Deve ter no m\xe1ximo ${max} itens"}})},70010:function(d,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(b){var a;f=c.objectSpread({onUnhandledError:function(){return null}},f,b,{pagination:c.objectSpread({pageStart:1,perPage:25},f.pagination,null!==(a=b.pagination)&& void 0!==a?a:{})}),g()},a.getConfig=i;var c=b(39037),e=c.interopRequireDefault(b(86248)),f={onUnhandledError:function(){},pagination:{pageStart:1,perPage:25}};function g(){return h.apply(this,arguments)}function h(){return(h=c.asyncToGenerator(e.default.mark(function a(){var c;return e.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:try{(c=b(32937)).config&&!c.config.onUnhandledError&&(c.config.onUnhandledError=function(a){return f.onUnhandledError(a,"rxjs")})}catch(d){}case 1:case"end":return a.stop()}},a)}))).apply(this,arguments)}function i(){return f}},80754:function(d,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(h,i){var a=c.slicedToArray(e.useState(void 0),2),j=a[0],o=a[1],b=c.slicedToArray(e.useState(),2),k=b[0],p=b[1],d=c.slicedToArray(e.useState(!0),2),l=d[0],q=d[1],g=c.slicedToArray(e.useState(!1),2),m=g[0],r=g[1],n=e.useCallback(h,i);return e.useEffect(function(){o(void 0),p(void 0),r(!1),q(!0);var a=n().subscribe({next:function(a){o(function(){return a}),p(void 0),q(!1)},error:function(a){f.getConfig().onUnhandledError(a,"hooks"),o(null),p(a),q(!1)},complete:function(){r(!0),q(!1)}});return function(){return a.unsubscribe()}},[n]),[j,k,m,l]};var c=a(39037),e=c.interopRequireWildcard(a(27378)),f=a(70010)},59266:function(f,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),g=a(24246);c.interopRequireWildcard(a(27378));var d=c.interopRequireWildcard(a(16847)),h=c.interopRequireDefault(a(72150));function i(){var a=c.taggedTemplateLiteral(["\n    border: none;\n    cursor: pointer;\n    text-transform: none;\n    height: ","rem;\n    min-width: ","rem;\n    padding: ",";\n    border-radius: ",";\n    font-weight: ",";\n    font-family: ",";\n    line-height: ",";\n    font-size: ",";\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    :not(:focus) {\n      transition: 0.3s;\n    }\n\n    :focus {\n      outline: solid "," ",";\n    }\n\n    &.--contained {\n      background-color: ",";\n      color: ",";\n\n      &:hover:not(:disabled),\n      &:focus {\n        background-color: ",";\n      }\n    }\n\n    &.--outlined {\n      background-color: transparent;\n      border: "," solid;\n      border-color: ",";\n      color: ",";\n\n      &:hover:not(:disabled),\n      &:focus {\n        background-color: ",";\n      }\n    }\n\n    &.--text {\n      background-color: ",";\n      color: ",";\n\n      &:hover:not(:disabled),\n      &:focus {\n        background-color: ",";\n      }\n    }\n\n    &.--disabled {\n      border: none;\n      background-color: ",";\n      color: ",";\n      cursor: default;\n    }\n\n    &.--fullWidth {\n      width: 100%;\n    }\n\n    & > .__loader {\n      position: absolute;\n      left: 50%;\n      transform: translate(-50%, 0);\n    }\n\n    & > .--hidden {\n      visibility: hidden;\n    }\n\n    & > .__startIcon {\n      margin-right: ",";\n    }\n\n    & > .__endIcon {\n      margin-left: ",";\n    }\n\n    & > .__startIcon > svg,\n    & > .__endIcon > svg {\n      vertical-align: middle;\n      font-size: ","rem;\n    }\n  "]);return i=function(){return a},a}var e=d.default(function(a){var f=a.children,i=a.disabled,e=void 0!==i&&i,j=a.startIcon,k=a.endIcon,l=a.variant,m=a.loading,b=void 0!==m&&m,n=a.className,o=a.fullWidth,p=c.objectWithoutProperties(a,["children","disabled","startIcon","endIcon","variant","loading","className","fullWidth"]);return g.jsxs("button",c.objectSpread({role:"button",className:d.cx(n,"--".concat(null!=l?l:"contained"),{"--fullWidth":o},{"--disabled":e})},p,{disabled:e||b,"aria-disabled":e,children:[!!j&&g.jsx("span",{className:d.cx("__startIcon",{"--hidden":b}),children:j}),!b&&g.jsx("span",{className:"__text",children:f}),b&&g.jsxs(g.Fragment,{children:[g.jsx("span",{className:"__loader",children:g.jsx(h.default,{size:20,color:"inherit"})}),g.jsx("span",{className:"__text --hidden",children:f})]}),!!k&&g.jsx("span",{className:d.cx("__endIcon",{"--hidden":b}),children:k})]}))},{label:"houston-button"})(function(b){var a=b.theme;return d.css(i(),a.pxToRem(48),a.pxToRem(96),a.spacing.squish.xxs,a.border.radius.xs,a.font.weight.semibold,a.font.family.base,a.line.height.default,a.font.size.xs,a.border.width.sm,a.feedbackColor.informative.pure,a.brandColor.primary.pure,a.neutralColor.high.pure,a.hexToRgba(a.brandColor.primary.pure,a.opacity.level[8]),a.border.width.xs,a.neutralColor.low.pure,a.neutralColor.low.pure,a.hexToRgba(a.neutralColor.low.pure,a.opacity.level[2]),a.hexToRgba(a.neutralColor.low.pure,a.opacity.level[0]),a.neutralColor.low.pure,a.hexToRgba(a.neutralColor.low.pure,a.opacity.level[2]),a.hexToRgba(a.neutralColor.low.pure,a.opacity.level[2]),a.hexToRgba(a.neutralColor.low.pure,a.opacity.level[6]),a.spacing.inline.nano,a.spacing.inline.nano,a.pxToRem(24))});b.default=e},33356:function(f,b,a){"use strict";b.Z=void 0;var c=a(39037),g=a(24246),d=c.interopRequireWildcard(a(27378)),h=c.interopRequireDefault(a(69012)),e=d.memo(function(b){var a=b.context,d=c.objectWithoutProperties(b,["context"]);return g.jsx(h.default.Provider,{value:a,children:g.jsx("form",c.objectSpread({},d,{onReset:a.handleReset,onSubmit:a.handleSubmit}))})});b.Z=e},9298:function(g,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return f},meta:function(){return e}});var h=a(27378),i=a(35318),j=a(56100),k=a(85372),l=a(27872),m=a(59266),n=a(33356),o=a(25431),p=a(47687);function q(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}var e={name:"Exemplo",tableOfContents:{depth:0,children:[{depth:1,slug:"#exemplo-de-valida\xe7\xe3o",title:"Exemplo de Valida\xe7\xe3o",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"},{depth:3,slug:"#sem-o-contexto-de-formul\xe1rio",title:"Sem o contexto de formul\xe1rio"},{depth:3,slug:"#campos-din\xe2micos",title:"Campos din\xe2micos"},{depth:3,slug:"#contexto-do-formul\xe1rio",title:"Contexto do formul\xe1rio"},{depth:3,slug:"#hooks-para-valida\xe7\xe3o-de-formul\xe1rios-e-m\xe1scaras",title:"Hooks para valida\xe7\xe3o de formul\xe1rios e m\xe1scaras"},{depth:3,slug:"#form-props",title:"Form props"},{depth:3,slug:"#useform-props",title:"useForm props"}]}]}]}},r={meta:e};function f(b){var c=b.components,a=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(b,["components"]);return(0,i.kt)("wrapper",Object.assign({},r,a,{components:c,mdxType:"MDXLayout"}),(0,i.kt)("h1",Object.assign({},{id:"exemplo-de-valida\xe7\xe3o"}),"Exemplo de Valida\xe7\xe3o"),(0,i.kt)("p",null,"Este \xe9 um exemplo utilzando o @eduzz/houston-ui."),(0,i.kt)("p",null,"O componente de formul\xe1rio (Form) \xe9 utilizado para a cria\xe7\xe3o, valida\xe7\xe3o e controle de formul\xe1rios de uma aplica\xe7\xe3o,\npodendo ser utilizado atrav\xe9s de um contexto ou hook."),(0,i.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import useForm from '@eduzz/houston-forms/useForm';\nimport Form from '@eduzz/houston-ui/Forms/Form';\n")),(0,i.kt)("h3",Object.assign({},{id:"exemplo"}),"Exemplo"),(0,i.kt)(j.X,{__position:0,code:'() => {\n  const form = useForm({\n    initialValues: { money: 5 }, //estado inicial, n\xe3o precisa passar todas as propriedades\n    validationSchema: (yup) => {\n      // n\xe3o \xe9 necess\xe1rio importar o yup ele ser\xe1 passado como argumento\n      return yup.object().shape({\n        name: yup.string().required(),\n        money: yup.number().min(10),\n        option: yup.number().min(3),\n      })\n    },\n    onSubmit: () => {\n      // onSubmit pode retornar uma promise ou um observable de rxjs, desse jeito ele ir\xe1\n      // setar corretamente o isSubmitting\n      return new Promise((resolve) => {\n        setTimeout(() => resolve(null), 3000)\n      })\n    },\n  })\n  const [options] = React.useState(() => [\n    { value: 1, label: \'Option 1\' },\n    { value: 2, label: \'Option 2\' },\n    { value: 3, label: \'Option 3 (disabled)\', disabled: true }, // \xe9 poss\xedvel desativar alguma op\xe7\xe3o\n    { value: 4, label: \'Option 4\' },\n    { value: 5, label: \'Option 5\' },\n  ])\n  return (\n    //Criando o contexto do form n\xe3o \xe9 preciso passar para os components filhos\n    <Form context={form}>\n      {/* a prop name que ir\xe1 dizer o campo que receber\xe1 o valor */}\n      <Input label="Name" name="name" />\n      {/* voc\xea passar uma fun\xe7\xe3o de mascara, voc\xea pode importar uma pronta ou criar a sua */}\n      <Input label="Money" name="money" mask={moneyMask} />\n      <SelectField label="Options" name="option" options={options} />\n      {/* Por ser um type submit n\xe3o precisa passar o form.handleSubmit */}\n      <Button type="submit" loading={form.isSubmitting}>\n        Submit\n      </Button>\n      {/* Por ser um type reset n\xe3o precisa passar o form.handleReset */}\n      <Button variant="text" type="reset" disabled={form.isSubmitting}>\n        Reset\n      </Button>\n    </Form>\n  )\n}',scope:{props:a,Playground:j.X,moneyMask:k.default,useForm:l.ZP,Button:m.default,Form:n.Z,Input:o.default,SelectField:p.default,meta:e},mdxType:"Playground"},function(){var a,b,c=(0,l.ZP)({initialValues:{money:5},validationSchema:function(a){return a.object().shape({name:a.string().required(),money:a.number().min(10),option:a.number().min(3)})},onSubmit:function(){return new Promise(function(a){setTimeout(function(){return a(null)},3e3)})}}),d=(a=h.useState(function(){return[{value:1,label:"Option 1"},{value:2,label:"Option 2"},{value:3,label:"Option 3 (disabled)",disabled:!0},{value:4,label:"Option 4"},{value:5,label:"Option 5"}]}),b=1,function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||function(a,c){if(a){if("string"==typeof a)return q(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return q(a,c)}}(a,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];return(0,i.kt)(n.Z,{context:c,mdxType:"Form"},(0,i.kt)(o.default,{label:"Name",name:"name",mdxType:"Input"}),(0,i.kt)(o.default,{label:"Money",name:"money",mask:k.default,mdxType:"Input"}),(0,i.kt)(p.default,{label:"Options",name:"option",options:d,mdxType:"SelectField"}),(0,i.kt)(m.default,{type:"submit",loading:c.isSubmitting,mdxType:"Button"},"Submit"),(0,i.kt)(m.default,{variant:"text",type:"reset",disabled:c.isSubmitting,mdxType:"Button"},"Reset"))}),(0,i.kt)("h3",Object.assign({},{id:"sem-o-contexto-de-formul\xe1rio"}),"Sem o contexto de formul\xe1rio"),(0,i.kt)("p",null,"Tamb\xe9m \xe9 poss\xedvel utilizar o componente de formul\xe1rio sem utiliz\xe1-lo como um contexto,\npassando o formul\xe1rio via propriedade:"),(0,i.kt)(j.X,{__position:1,code:'() => {\n  const form = useForm({\n    onSubmit: () => {},\n  })\n  return <Input label="Name" name="name" form={form} />\n}',scope:{props:a,Playground:j.X,moneyMask:k.default,useForm:l.ZP,Button:m.default,Form:n.Z,Input:o.default,SelectField:p.default,meta:e},mdxType:"Playground"},function(){var a=(0,l.ZP)({onSubmit:function(){}});return(0,i.kt)(o.default,{label:"Name",name:"name",form:a,mdxType:"Input"})}),(0,i.kt)("h3",Object.assign({},{id:"campos-din\xe2micos"}),"Campos din\xe2micos"),(0,i.kt)(j.X,{__position:2,code:"() => {\n  const form = useForm({\n    initialValues: {\n      users: [{ id: '', age: '', name: '' }],\n    },\n    validationSchema: (yup) => {\n      return yup.object().shape({\n        users: yup\n          .array()\n          .of(\n            yup.object().shape({\n              id: yup.number().required('Por favor, preencha o campo ID.'),\n              name: yup.string().required(),\n              age: yup.number().required(),\n            }),\n          )\n          .min(1)\n          .required(),\n      })\n    },\n    onSubmitWithErrors: (err) => console.log('failed', err),\n    onSubmit: (values) => console.log('success', values),\n  })\n  const values = React.useMemo(() => form.getFieldValue('users'), [form])\n  const handleClickAdd = React.useCallback(() => {\n    form.setFieldValue(`users[${values.length}]`, {})\n    setTimeout(() => form.setErrors({}), 50)\n  }, [form, values.length])\n  const handleClickRemove = React.useCallback(\n    (index) => {\n      const newUsers = values.filter((_, i) => i !== index)\n      form.setFieldValue('users', newUsers)\n    },\n    [form, values],\n  )\n  return (\n    <Form context={form}>\n      {values.map((_, index) => (\n        <div\n          style={{\n            borderBottom: '1px solid #ccc',\n            paddingBottom: 10,\n            marginBottom: 20,\n          }}\n          key={index}\n        >\n          <Input name={`users.${index}.id`} label=\"ID\" />\n          <Input name={`users.${index}.name`} label=\"Nome\" />\n          <Input name={`users.${index}.age`} label=\"Idade\" />\n          <Button variant=\"text\" onClick={() => handleClickRemove(index)}>\n            Remover linha\n          </Button>\n        </div>\n      ))}\n      <Button variant=\"text\" onClick={handleClickAdd}>\n        Adicionar linha\n      </Button>\n      <Button type=\"submit\">Enviar</Button>\n    </Form>\n  )\n}",scope:{props:a,Playground:j.X,moneyMask:k.default,useForm:l.ZP,Button:m.default,Form:n.Z,Input:o.default,SelectField:p.default,meta:e},mdxType:"Playground"},function(){var a=(0,l.ZP)({initialValues:{users:[{id:"",age:"",name:""}]},validationSchema:function(a){return a.object().shape({users:a.array().of(a.object().shape({id:a.number().required("Por favor, preencha o campo ID."),name:a.string().required(),age:a.number().required()})).min(1).required()})},onSubmitWithErrors:function(a){return console.log("failed",a)},onSubmit:function(a){return console.log("success",a)}}),b=h.useMemo(function(){return a.getFieldValue("users")},[a]),c=h.useCallback(function(){a.setFieldValue("users[".concat(b.length,"]"),{}),setTimeout(function(){return a.setErrors({})},50)},[a,b.length]),d=h.useCallback(function(d){var c=b.filter(function(b,a){return a!==d});a.setFieldValue("users",c)},[a,b]);return(0,i.kt)(n.Z,{context:a,mdxType:"Form"},b.map(function(b,a){return(0,i.kt)("div",{style:{borderBottom:"1px solid #ccc",paddingBottom:10,marginBottom:20},key:a},(0,i.kt)(o.default,{name:"users.".concat(a,".id"),label:"ID",mdxType:"Input"}),(0,i.kt)(o.default,{name:"users.".concat(a,".name"),label:"Nome",mdxType:"Input"}),(0,i.kt)(o.default,{name:"users.".concat(a,".age"),label:"Idade",mdxType:"Input"}),(0,i.kt)(m.default,{variant:"text",onClick:function(){return d(a)},mdxType:"Button"},"Remover linha"))}),(0,i.kt)(m.default,{variant:"text",onClick:c,mdxType:"Button"},"Adicionar linha"),(0,i.kt)(m.default,{type:"submit",mdxType:"Button"},"Enviar"))}),(0,i.kt)("h3",Object.assign({},{id:"contexto-do-formul\xe1rio"}),"Contexto do formul\xe1rio"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import useForm, { useFormContext } from '@eduzz/houston-forms/useForm';\n\nconst { values, isSubmitting, ... } = useFormContext();\n")),(0,i.kt)("h3",Object.assign({},{id:"hooks-para-valida\xe7\xe3o-de-formul\xe1rios-e-m\xe1scaras"}),"Hooks para valida\xe7\xe3o de formul\xe1rios e m\xe1scaras"),(0,i.kt)("p",null,"Veja os hooks do Houston para validar formul\xe1rios e m\xe1scaras em ",(0,i.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/eduzz/houston/tree/master/src/pages/forms"}),"@eduzz/houston-forms"),"."),(0,i.kt)("h3",Object.assign({},{id:"form-props"}),"Form props"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"context"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"IFormAdapter")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")))),(0,i.kt)("h3",Object.assign({},{id:"useform-props"}),"useForm props"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"initialValues"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"Partial<any>")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Estado inicial do formul\xe1rio, n\xe3o sendo necess\xe1rio passar todas as propriedades")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"validationSchema"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"function")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Utilizado para valida\xe7\xe3o do formul\xe1rio, n\xe3o sendo necess\xe1rio importar o yup, pois ele ser\xe1 passado como argumento")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onSubmitWithErrors"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"function")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"\xc9 poss\xedvel passar os erros do ",(0,i.kt)("inlineCode",{parentName:"td"},"Formik")," como argumento")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onSubmit"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"function"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Promise<any>"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Observable<any>")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Pode retornar uma ",(0,i.kt)("inlineCode",{parentName:"td"},"Promise")," ou um ",(0,i.kt)("inlineCode",{parentName:"td"},"Observable")," em RxJS, definindo corretamente o ",(0,i.kt)("inlineCode",{parentName:"td"},"isSubmitting"))))))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/forms/example.mdx"};for(var d in c)window[d]=c[d]}},function(a){a.O(0,[4526,7672,9961,8194,9978,2122,7978,5431,7409,7687,9774,2888,179],function(){return a(a.s=37552)}),_N_E=a.O()}])