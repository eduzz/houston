(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2776],{47086:function(a,b,c){var d=c(42192),e=function(a,b,c){if(a&&"reportValidity"in a){var e=d.get(c,b);a.setCustomValidity(e&&e.message||""),a.reportValidity()}},f=function(a,b){var c=function(c){var d=b.fields[c];d&&d.ref&&"reportValidity"in d.ref?e(d.ref,c,a):d.refs&&d.refs.forEach(function(b){return e(b,c,a)})};for(var d in b.fields)c(d)};b.toNestError=function(a,b){b.shouldUseNativeValidation&&f(a,b);var c={};for(var e in a){var g=d.get(b.fields,e);d.set(c,e,Object.assign(a[e],{ref:g&&g.ref}))}return c},b.validateFieldsNatively=f},26593:function(a,b,c){var d=c(47086),e=c(42192);b.yupResolver=function(a,b,c){return void 0===b&&(b={}),void 0===c&&(c={}),function(f,g,h){try{return Promise.resolve(function(e,i){try{var j=(b.context,Promise.resolve(a["sync"===c.mode?"validateSync":"validate"](f,Object.assign({abortEarly:!1},b,{context:g}))).then(function(a){return h.shouldUseNativeValidation&&d.validateFieldsNatively({},h),{values:c.rawValues?f:a,errors:{}}}))}catch(k){return i(k)}return j&&j.then?j.then(void 0,i):j}(0,function(a){var b,c;if(!a.inner)throw a;return{values:{},errors:d.toNestError((b=a,c=!h.shouldUseNativeValidation&&"all"===h.criteriaMode,(b.inner||[]).reduce(function(a,b){if(a[b.path]||(a[b.path]={message:b.message,type:b.type}),c){var d=a[b.path].types,f=d&&d[b.type];a[b.path]=e.appendErrors(b.path,c,a,b.type,f?[].concat(f,b.message):b.message)}return a},{})),h)}}))}catch(i){return Promise.reject(i)}}}},92819:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Forms/Checkbox",function(){return c(1436)}])},43347:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),!function(a,b){for(var c in b)Object.defineProperty(a,c,{enumerable:!0,get:b[c]})}(b,{default:function(){return h},useFieldArray:function(){return i}}),c(29580);var d=c(26593),e=c(42192),f=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=g(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var h=e?Object.getOwnPropertyDescriptor(a,f):null;h&&(h.get||h.set)?Object.defineProperty(d,f,h):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}(c(14633));function g(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(g=function(a){return a?c:b})(a)}function h(a){var b,c,g=a.validationSchema,h=a.defaultValues,i=a.initialValues,j=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["validationSchema","defaultValues","initialValues"]),k=(b=function(a){for(var b=arguments,c=1;c<arguments.length;c++)!function(c){var d=null!=b[c]?b[c]:{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){var c,e,f;c=a,e=b,f=d[b],e in c?Object.defineProperty(c,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[e]=f})}(c);return a}({},j),c=(c={defaultValues:null!=h?h:i},c),Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(c)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(c)).forEach(function(a){Object.defineProperty(b,a,Object.getOwnPropertyDescriptor(c,a))}),b);return g&&Object.assign(k,{resolver:(0,d.yupResolver)("function"==typeof g?g(f):g)}),(0,e.useForm)(k)}var i=e.useFieldArray},42900:function(a,b,c){"use strict";Object.defineProperty(b,"Z",{enumerable:!0,get:function(){return j}});var d=c(24246),e=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=g(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var h=e?Object.getOwnPropertyDescriptor(a,f):null;h&&(h.get||h.set)?Object.defineProperty(d,f,h):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}(c(27378)),f=c(42192);function g(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(g=function(a){return a?c:b})(a)}function h(a){for(var b=arguments,c=1;c<arguments.length;c++)!function(c){var d=null!=b[c]?b[c]:{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){var c,e,f;c=a,e=b,f=d[b],e in c?Object.defineProperty(c,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[e]=f})}(c);return a}function i(a,b){return b=null!=b?b:{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))}),a}var j=function(a){var b=a.context,c=a.onSubmit,g=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["context","onSubmit"]),j=e.useCallback(function(){return b.reset()},[b]);return(0,d.jsx)(f.FormProvider,i(h({},b),{children:(0,d.jsx)("form",i(h({},g),{onReset:j,onSubmit:b.handleSubmit(c),noValidate:!0}))}))}},1436:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return o},meta:function(){return m}});var d=c(31373),e=c(52050),f=c(27378),g=c(35318),h=c(56100),i=c(43347),j=c.n(i),k=c(42900),l=c(84769),m={name:"Checkbox",tableOfContents:{depth:0,children:[{depth:1,slug:"#checkbox",title:"Checkbox",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#varia\xe7\xf5es",title:"Varia\xe7\xf5es"},{depth:3,slug:"#m\xfaltiplos-valores",title:"M\xfaltiplos valores"},{depth:3,slug:"#form-\xfanico",title:"Form \xdanico"},{depth:3,slug:"#form-grupo",title:"Form Grupo"},{depth:3,slug:"#checkbox-props",title:"Checkbox props"},{depth:3,slug:"#checkboxgroup-props",title:"Checkbox.Group props"}]}]}]}},n={meta:m};function o(a){var b=a.components,c=(0,d.Z)(a,["components"]);return(0,g.kt)("wrapper",Object.assign({},n,c,{components:b,mdxType:"MDXLayout"}),(0,g.kt)("h1",Object.assign({},{id:"checkbox"}),"Checkbox"),(0,g.kt)("p",null,"O componente de caixa de sele\xe7\xe3o (Checkbox) permite que o usu\xe1rio selecione um ou mais itens de um determinado grupo."),(0,g.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,g.kt)("pre",null,(0,g.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import Checkbox from '@eduzz/houston-ui/Forms/Checkbox';\n")),(0,g.kt)("h3",Object.assign({},{id:"varia\xe7\xf5es"}),"Varia\xe7\xf5es"),(0,g.kt)(h.X,{__position:0,code:'() => {\n  const [checked, setChecked] = React.useState(false)\n  function onChange() {\n    setChecked((prev) => !prev)\n  }\n  return (\n    <div style={{ display: \'flex\', flexDirection: \'column\', gap: 16 }}>\n      <Checkbox checked={checked} onChange={onChange} label="Simples" />\n      <Checkbox\n        helperText="Exemplo de utiliza\xe7\xe3o do Checkbox com descri\xe7\xe3o"\n        checked={checked}\n        onChange={onChange}\n        label="Com descri\xe7\xe3o"\n      />\n      <Checkbox\n        error\n        errorMessage="Mensagem de erro"\n        checked={checked}\n        onChange={onChange}\n        label="Com erro"\n      />\n      <Checkbox\n        disabled\n        checked={checked}\n        onChange={onChange}\n        label="Desativado"\n      />\n    </div>\n  )\n}',scope:{props:c,Playground:h.X,useForm:j(),Form:k.Z,Checkbox:l.default,meta:m},mdxType:"Playground"},function(){var a=function(){d(function(a){return!a})},b=(0,e.Z)(f.useState(!1),2),c=b[0],d=b[1];return(0,g.kt)("div",{style:{display:"flex",flexDirection:"column",gap:16}},(0,g.kt)(l.default,{checked:c,onChange:a,label:"Simples",mdxType:"Checkbox"}),(0,g.kt)(l.default,{helperText:"Exemplo de utiliza\xe7\xe3o do Checkbox com descri\xe7\xe3o",checked:c,onChange:a,label:"Com descri\xe7\xe3o",mdxType:"Checkbox"}),(0,g.kt)(l.default,{error:!0,errorMessage:"Mensagem de erro",checked:c,onChange:a,label:"Com erro",mdxType:"Checkbox"}),(0,g.kt)(l.default,{disabled:!0,checked:c,onChange:a,label:"Desativado",mdxType:"Checkbox"}))}),(0,g.kt)("h3",Object.assign({},{id:"m\xfaltiplos-valores"}),"M\xfaltiplos valores"),(0,g.kt)(h.X,{__position:1,code:'() => {\n  const [value, setValue] = React.useState([1])\n  return (\n    <>\n      <Checkbox.Group value={value} onChange={setValue}>\n        <Checkbox value={1} label="Valor 1" />\n        <Checkbox value={2} label="Valor 2" />\n        <Checkbox value={3} label="Valor 3" />\n      </Checkbox.Group>\n      <p>Valor: {JSON.stringify(value)}</p>\n    </>\n  )\n}',scope:{props:c,Playground:h.X,useForm:j(),Form:k.Z,Checkbox:l.default,meta:m},mdxType:"Playground"},function(){var a=(0,e.Z)(f.useState([1]),2),b=a[0],c=a[1];return(0,g.kt)(f.Fragment,null,(0,g.kt)(l.default.Group,{value:b,onChange:c},(0,g.kt)(l.default,{value:1,label:"Valor 1",mdxType:"Checkbox"}),(0,g.kt)(l.default,{value:2,label:"Valor 2",mdxType:"Checkbox"}),(0,g.kt)(l.default,{value:3,label:"Valor 3",mdxType:"Checkbox"})),(0,g.kt)("p",null,"Valor: ",JSON.stringify(b)))}),(0,g.kt)("h3",Object.assign({},{id:"form-\xfanico"}),"Form \xdanico"),(0,g.kt)("p",null,"No caso do item \xfanico dentro do form, n\xe3o informar o value, porque ele ser\xe1 apenas true ou false"),(0,g.kt)(h.X,{__position:2,code:"() => {\n  const form = useForm({\n    defaultValues: {\n      value: true,\n    },\n    validationSchema(yup) {\n      return yup.object().shape({\n        value: yup.bool().isTrue('Deve ser verdadeiro'),\n      })\n    },\n    mode: 'onChange',\n  })\n  return (\n    <Form context={form} onSubmit={alert}>\n      <Checkbox name=\"value\" label=\"\xdanico\" />\n      <p>Valor: {JSON.stringify(form.watch('value'))}</p>\n    </Form>\n  )\n}",scope:{props:c,Playground:h.X,useForm:j(),Form:k.Z,Checkbox:l.default,meta:m},mdxType:"Playground"},function(){var a=j()({defaultValues:{value:!0},validationSchema:function(a){return a.object().shape({value:a.bool().isTrue("Deve ser verdadeiro")})},mode:"onChange"});return(0,g.kt)(k.Z,{context:a,onSubmit:alert,mdxType:"Form"},(0,g.kt)(l.default,{name:"value",label:"\xdanico",mdxType:"Checkbox"}),(0,g.kt)("p",null,"Valor: ",JSON.stringify(a.watch("value"))))}),(0,g.kt)("h3",Object.assign({},{id:"form-grupo"}),"Form Grupo"),(0,g.kt)(h.X,{__position:3,code:'() => {\n  const form = useForm({\n    defaultValues: {\n      value: [1, 2],\n    },\n    validationSchema(yup) {\n      return yup.object().shape({\n        value: yup\n          .array()\n          .max(2, \'Voc\xea deve selecionar no m\xe1ximo dois checkboxes\'),\n      })\n    },\n    mode: \'onChange\',\n  })\n  return (\n    <Form context={form} onSubmit={alert}>\n      <Checkbox.Group name="value">\n        <Checkbox value={1} label="Valor 1" />\n        <Checkbox value={2} label="Valor 2" />\n        <Checkbox value={3} label="Valor 3" />\n      </Checkbox.Group>\n      <p>Valor: {JSON.stringify(form.watch(\'value\'))}</p>\n    </Form>\n  )\n}',scope:{props:c,Playground:h.X,useForm:j(),Form:k.Z,Checkbox:l.default,meta:m},mdxType:"Playground"},function(){var a=j()({defaultValues:{value:[1,2]},validationSchema:function(a){return a.object().shape({value:a.array().max(2,"Voc\xea deve selecionar no m\xe1ximo dois checkboxes")})},mode:"onChange"});return(0,g.kt)(k.Z,{context:a,onSubmit:alert,mdxType:"Form"},(0,g.kt)(l.default.Group,{name:"value"},(0,g.kt)(l.default,{value:1,label:"Valor 1",mdxType:"Checkbox"}),(0,g.kt)(l.default,{value:2,label:"Valor 2",mdxType:"Checkbox"}),(0,g.kt)(l.default,{value:3,label:"Valor 3",mdxType:"Checkbox"})),(0,g.kt)("p",null,"Valor: ",JSON.stringify(a.watch("value"))))}),(0,g.kt)("h3",Object.assign({},{id:"checkbox-props"}),"Checkbox props"),(0,g.kt)("table",null,(0,g.kt)("thead",{parentName:"table"},(0,g.kt)("tr",{parentName:"thead"},(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,g.kt)("tbody",{parentName:"table"},(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"helperText"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"string")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"value"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"any")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"disabled"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"boolean")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"label"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"string")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"error"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"boolean")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Estado de erro do campo")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"errorMessage"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"string")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"defaultChecked"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"boolean")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"S\xf3 \xe9 v\xe1lido quando o componente \xe9 uncontrolled")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"checked"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"boolean")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Usar se deseja que o componente seja controlled")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"name"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"string")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Obrigat\xf3rio se est\xe1 usando junto a um form")))),(0,g.kt)("h3",Object.assign({},{id:"checkboxgroup-props"}),"Checkbox.Group props"),(0,g.kt)("table",null,(0,g.kt)("thead",{parentName:"table"},(0,g.kt)("tr",{parentName:"thead"},(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,g.kt)("tbody",{parentName:"table"},(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"name"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"string")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"errorMessage"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"string")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"value"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"any")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Valor controle do grupo")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onChange"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"function")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"children"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"React.ReactElement<CheckboxProps>[]")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"true")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"spacing"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"Spacing")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"xxxs")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Espa\xe7amento entre os checkboxes")))))}o.isMDXComponent=!0;var p={editThisPagePath:"src/pages/ui-components/Forms/Checkbox/index.mdx"};for(var q in p)window[q]=p[q]},52050:function(a,b,c){"use strict";c.d(b,{Z:function(){return f}});var d=c(82126),e=c(12164);function f(a,b){return function(a){if(Array.isArray(a))return a}(a)||(0,d.Z)(a,b)||(0,e.Z)(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(a){a.O(0,[4526,2198,5918,2192,9978,4633,4090,4183,4109,2123,4769,9774,2888,179],function(){var b;return a(a.s=92819)}),_N_E=a.O()}])