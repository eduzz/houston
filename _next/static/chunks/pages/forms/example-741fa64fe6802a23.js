(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[158],{5966:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms/example",function(){return c(9298)}])},40330:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return o}});var d=c(24246),e=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=l(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}(c(27378)),f=c(9064);c(2342),c(34863);var g=k(c(27693)),h=k(c(79913)),i=k(c(36487)),j=k(c(73087));function k(a){return a&&a.__esModule?a:{default:a}}function l(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(l=function(a){return a?c:b})(a)}g.default.extend(i.default),g.default.extend(h.default),g.default.locale("pt-br");var m={date:"DD/MM/YYYY",datetime:"DD/MM/YYYY HH:mm"},n=e.forwardRef(function(a,b){var c=a.value,h=a.format,i=a.showTime,j=a.minDate,k=a.maxDate,l=a.onChange,n=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["value","format","showTime","minDate","maxDate","onChange"]);h=null!=h?h:m["".concat(i?"datetime":"date")];var o=e.useCallback(function(a){return l(a.toDate())},[l]),p=e.useCallback(function(a){return!a||(j?a<j:!!k&&a>k)},[k,j]),q=e.useMemo(function(){return c?(0,g.default)(c):c},[c]);return(0,d.jsx)(f.DatePicker,function(a){for(var b=arguments,c=1;c<arguments.length;c++)!function(c){var d=null!=b[c]?b[c]:{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){var c,e,f;c=a,e=b,f=d[b],e in c?Object.defineProperty(c,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[e]=f})}(c);return a}({ref:b,disabledDate:p,format:h,value:q,showTime:i,onChange:o},n))}),o=(0,j.default)(n)},28824:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return k}});var d=c(24246),e=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=i(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}(c(27378)),f=c(42192),g=c(9064),h=c(14150);function i(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(i=function(a){return a?c:b})(a)}var j=function(a){var b=a.name,c=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["name"]),e=(0,f.useFormState)({name:b,exact:!0});return(0,d.jsx)(h.ErrorMessage,{errors:e.errors,name:b,render:function(a){var b,e,f=a.message;return(0,d.jsx)(g.Typography.Text,(b=function(a){for(var b=arguments,c=1;c<arguments.length;c++)!function(c){var d=null!=b[c]?b[c]:{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){var c,e,f;c=a,e=b,f=d[b],e in c?Object.defineProperty(c,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[e]=f})}(c);return a}({type:"danger"},c),e=(e={children:f},e),Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(e)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(e)).forEach(function(a){Object.defineProperty(b,a,Object.getOwnPropertyDescriptor(e,a))}),b))}})},k=e.memo(j)},42581:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return j}});var d=c(24246),e=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=g(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var h=e?Object.getOwnPropertyDescriptor(a,f):null;h&&(h.get||h.set)?Object.defineProperty(d,f,h):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}(c(27378)),f=c(42192);function g(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(g=function(a){return a?c:b})(a)}function h(a){for(var b=arguments,c=1;c<arguments.length;c++)!function(c){var d=null!=b[c]?b[c]:{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){var c,e,f;c=a,e=b,f=d[b],e in c?Object.defineProperty(c,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[e]=f})}(c);return a}function i(a,b){return b=null!=b?b:{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))}),a}var j=function(a){var b=a.context,c=a.onSubmit,g=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["context","onSubmit"]),j=e.useCallback(function(){return b.reset()},[b]);return(0,d.jsx)(f.FormProvider,i(h({},b),{children:(0,d.jsx)("form",i(h({},g),{onReset:j,onSubmit:b.handleSubmit(c),noValidate:!0}))}))}},28339:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return l}});var d=c(24246),e=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=j(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}(c(27378)),f=c(9064),g=i(c(73087)),h=i(c(35569));function i(a){return a&&a.__esModule?a:{default:a}}function j(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(j=function(a){return a?c:b})(a)}var k=e.forwardRef(function(a,b){var c=a.value,e=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["value"]);return(0,d.jsx)(f.Select,function(a){for(var b=arguments,c=1;c<arguments.length;c++)!function(c){var d=null!=b[c]?b[c]:{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){var c,e,f;c=a,e=b,f=d[b],e in c?Object.defineProperty(c,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[e]=f})}(c);return a}({ref:b,value:c},e))}),l=(0,h.default)((0,g.default)(k),{Option:f.Select.Option,OptGroup:f.Select.OptGroup})},46573:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return k}});var d,e=c(24246),f=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=i(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}(c(27378)),g=c(9064),h=(d=c(73087),d&&d.__esModule?d:{default:d});function i(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(i=function(a){return a?c:b})(a)}var j=f.forwardRef(function(a,b){var c=a.value,d=a.onChange,h=a.onBlur,i=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["value","onChange","onBlur"]),j=f.useCallback(function(a){d&&d(a.target.value,a)},[d]),k=f.useCallback(function(a){h&&h(a.target.value,a)},[h]);return(0,e.jsx)(g.Input.TextArea,function(a){for(var b=arguments,c=1;c<arguments.length;c++)!function(c){var d=null!=b[c]?b[c]:{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){var c,e,f;c=a,e=b,f=d[b],e in c?Object.defineProperty(c,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[e]=f})}(c);return a}({ref:b,value:c,onChange:j,onBlur:k,rows:4},i))}),k=(0,h.default)(j)},12713:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return n}});var d=c(24246),e=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=l(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}(c(27378)),f=c(9064);c(2342),c(34863);var g=k(c(27693)),h=k(c(79913)),i=k(c(36487)),j=k(c(73087));function k(a){return a&&a.__esModule?a:{default:a}}function l(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(l=function(a){return a?c:b})(a)}g.default.extend(i.default),g.default.extend(h.default),g.default.locale("pt-br");var m=e.forwardRef(function(a,b){var c=a.value,h=a.format,i=a.showTime,j=a.minDate,k=a.maxDate,l=a.onChange,m=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["value","format","showTime","minDate","maxDate","onChange"]);h=(null!=h?h:m.showSecond)?"HH:mm:ss":"HH:mm";var n=e.useCallback(function(a){return l(a.toDate())},[l]),o=e.useCallback(function(a){return!a||(j?a<j:!!k&&a>k)},[k,j]),p=e.useMemo(function(){return c?(0,g.default)(c):c},[c]);return(0,d.jsx)(f.TimePicker,function(a){for(var b=arguments,c=1;c<arguments.length;c++)!function(c){var d=null!=b[c]?b[c]:{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){var c,e,f;c=a,e=b,f=d[b],e in c?Object.defineProperty(c,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[e]=f})}(c);return a}({ref:b,disabledDate:o,format:h,value:p,showTime:i,onChange:n},m))}),n=(0,j.default)(m)},5044:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),!function(a,b){for(var c in b)Object.defineProperty(a,c,{enumerable:!0,get:b[c]})}(b,{Form:function(){return m},Input:function(){return n},Select:function(){return o},DatePicker:function(){return p},TimePicker:function(){return q},Textarea:function(){return r},ErrorMessage:function(){return s},useForm:function(){return t}});var d=l(c(40330)),e=l(c(28824)),f=l(c(42581)),g=l(c(56013)),h=l(c(28339)),i=l(c(46573)),j=l(c(12713)),k=l(c(43347));function l(a){return a&&a.__esModule?a:{default:a}}var m=f.default,n=g.default,o=h.default,p=d.default,q=j.default,r=i.default,s=e.default,t=k.default},29580:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),(0,c(14633).setLocale)({mixed:{default:"Inv\xe1lido",required:"Obrigat\xf3rio",oneOf:"Deve ser um dos seguintes valores: ${values}",notOneOf:"N\xe3o pode ser um dos seguintes valores: ${values}",notType:function(a){return"number"===a.type?"Deve ser um n\xfamero":"Inv\xe1lido"}},string:{length:"Deve ter exatamente ${length} caracteres",min:"Deve ter pelo menos ${min} caracteres",max:"Deve ter no m\xe1ximo ${max} caracteres",email:"E-mail inv\xe1lido",url:"Deve ter um formato de URL v\xe1lida",trim:"N\xe3o deve conter espa\xe7os no in\xedcio ou no fim.",lowercase:"Deve estar em mai\xfasculo",uppercase:"Deve estar em min\xfasculo"},number:{min:"Deve ser no m\xednimo ${min}",max:"Deve ser no m\xe1ximo ${max}",lessThan:"Deve ser menor que ${less}",moreThan:"Deve ser maior que ${more}",positive:"Deve ser um n\xfamero positivo",negative:"Deve ser um n\xfamero negativo",integer:"Deve ser um n\xfamero inteiro"},date:{min:"Deve ser maior que a data ${min}",max:"Deve ser menor que a data ${max}"},array:{min:"Deve ter no m\xednimo ${min} itens",max:"Deve ter no m\xe1ximo ${max} itens"}})},43347:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),!function(a,b){for(var c in b)Object.defineProperty(a,c,{enumerable:!0,get:b[c]})}(b,{default:function(){return k},useFieldArray:function(){return l}}),c(29580);var d=c(27378),e=c(42192),f=c(26593),g=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=h(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}(c(14633));function h(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(h=function(a){return a?c:b})(a)}function i(a){for(var b=arguments,c=1;c<arguments.length;c++)!function(c){var d=null!=b[c]?b[c]:{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){var c,e,f;c=a,e=b,f=d[b],e in c?Object.defineProperty(c,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[e]=f})}(c);return a}function j(a,b){return b=null!=b?b:{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))}),a}function k(a){var b=a.validationSchema,c=a.defaultValues,h=a.initialValues,k=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["validationSchema","defaultValues","initialValues"]),l=j(i({},k),{defaultValues:null!=c?c:h});b&&Object.assign(l,{resolver:(0,f.yupResolver)("function"==typeof b?b(g):b)});var m=(0,e.useForm)(l),n=(0,d.useCallback)(function(a){var b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{};return m.reset(a,i({keepDefaultValues:!0},b))},[m]);return j(i({},m),{setValues:n})}var l=e.useFieldArray},35569:function(a,b,c){"use strict";function d(a,b){return Object.keys(b).forEach(function(c){a[c]=b[c]}),a}Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return d}}),c(27378)},9298:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return q},meta:function(){return o}});var d=c(31373),e=c(52050),f=c(27378),g=c(35318),h=c(75838),i=c(56591),j=c(41875),k=c(56100),l=c(5044),m=c(43347),n=c.n(m),o={name:"Exemplo",tableOfContents:{depth:0,children:[{depth:1,slug:"#exemplo-de-valida\xe7\xe3o",title:"Exemplo de Valida\xe7\xe3o",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"},{depth:3,slug:"#campos-din\xe2micos",title:"Campos din\xe2micos"},{depth:3,slug:"#hooks-para-valida\xe7\xe3o-de-formul\xe1rios-e-m\xe1scaras",title:"Hooks para valida\xe7\xe3o de formul\xe1rios e m\xe1scaras"},{depth:3,slug:"#useform-props",title:"useForm props"}]}]}]}},p={meta:o};function q(a){var b=a.components,c=(0,d.Z)(a,["components"]);return(0,g.kt)("wrapper",Object.assign({},p,c,{components:b,mdxType:"MDXLayout"}),(0,g.kt)("h1",Object.assign({},{id:"exemplo-de-valida\xe7\xe3o"}),"Exemplo de Valida\xe7\xe3o"),(0,g.kt)("p",null,"Este \xe9 um exemplo utilzando o @eduzz/houston-ui."),(0,g.kt)("p",null,"O componente de formul\xe1rio (Form) \xe9 utilizado para a cria\xe7\xe3o, valida\xe7\xe3o e controle de formul\xe1rios de uma aplica\xe7\xe3o,\npodendo ser utilizado atrav\xe9s de um contexto ou hook."),(0,g.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,g.kt)("pre",null,(0,g.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import useForm, { FormModel } from '@eduzz/houston-forms/useForm';\nimport Form from '@eduzz/houston-ui/Forms/Form';\n")),(0,g.kt)("h3",Object.assign({},{id:"exemplo"}),"Exemplo"),(0,g.kt)(k.X,{__position:0,code:'() => {\n  const form = useForm({\n    defaultValues: { money: 5 }, //estado inicial, n\xe3o precisa passar todas as propriedades\n    validationSchema: (yup) =>\n      yup.object().shape({\n        name: yup.string().required(),\n        money: yup.number().required().min(10),\n        option: yup.number().required().min(3),\n      }),\n  })\n  // Pode tipar o data com FormModel<typeof form>\n  const onSubmit = React.useCallback((data) => {\n    // onSubmit pode retornar uma promise, desse jeito ele ir\xe1\n    // setar corretamente o isSubmitting\n    return new Promise((resolve) => {\n      setTimeout(() => {\n        console.log(\'saved!\')\n        resolve(null)\n      }, 3000)\n    })\n  }, [])\n  const [options] = React.useState(() => [\n    { value: 1, label: \'Option 1\' },\n    { value: 2, label: \'Option 2\' },\n    { value: 3, label: \'Option 3 (disabled)\', disabled: true }, // \xe9 poss\xedvel desativar alguma op\xe7\xe3o\n    { value: 4, label: \'Option 4\' },\n    { value: 5, label: \'Option 5\' },\n  ])\n  return (\n    //Criando o contexto do form n\xe3o \xe9 preciso usar o register para os componentes filhos\n    <Form context={form} onSubmit={onSubmit}>\n      {/* a prop name que ir\xe1 dizer o campo que receber\xe1 o valor */}\n      <Input label="Name" name="name" />\n      {/* voc\xea passar uma fun\xe7\xe3o de mascara, voc\xea pode importar uma pronta ou criar a sua */}\n      <Input label="Money" name="money" mask="money" />\n      <Select label="Options" name="option" options={options} />\n      <Space>\n        <Button\n          htmlType="submit"\n          type="primary"\n          loading={form.formState.isSubmitting}\n        >\n          Submit\n        </Button>\n        {/* Por ser um type reset n\xe3o precisa passar o form.handleReset */}\n        <Button\n          danger\n          type="text"\n          htmlType="reset"\n          disabled={form.formState.isSubmitting}\n        >\n          Reset\n        </Button>\n      </Space>\n    </Form>\n  )\n}',scope:{props:c,DeleteOutlined:h.Z,Button:i.Z,Space:j.Z,Playground:k.X,Form:l.Form,Input:l.Input,Select:l.Select,ErrorMessage:l.ErrorMessage,useForm:n(),useFieldArray:m.useFieldArray,meta:o},mdxType:"Playground"},function(){var a=n()({defaultValues:{money:5},validationSchema:function(a){return a.object().shape({name:a.string().required(),money:a.number().required().min(10),option:a.number().required().min(3)})}}),b=f.useCallback(function(a){return new Promise(function(a){setTimeout(function(){console.log("saved!"),a(null)},3e3)})},[]),c=(0,e.Z)(f.useState(function(){return[{value:1,label:"Option 1"},{value:2,label:"Option 2"},{value:3,label:"Option 3 (disabled)",disabled:!0},{value:4,label:"Option 4"},{value:5,label:"Option 5"}]}),1)[0];return(0,g.kt)(l.Form,{context:a,onSubmit:b,mdxType:"Form"},(0,g.kt)(l.Input,{label:"Name",name:"name",mdxType:"Input"}),(0,g.kt)(l.Input,{label:"Money",name:"money",mask:"money",mdxType:"Input"}),(0,g.kt)(l.Select,{label:"Options",name:"option",options:c,mdxType:"Select"}),(0,g.kt)(j.Z,{mdxType:"Space"},(0,g.kt)(i.Z,{htmlType:"submit",type:"primary",loading:a.formState.isSubmitting,mdxType:"Button"},"Submit"),(0,g.kt)(i.Z,{danger:!0,type:"text",htmlType:"reset",disabled:a.formState.isSubmitting,mdxType:"Button"},"Reset")))}),(0,g.kt)("h3",Object.assign({},{id:"campos-din\xe2micos"}),"Campos din\xe2micos"),(0,g.kt)(k.X,{__position:1,code:'() => {\n  const form = useForm({\n    defaultValues: {\n      users: [{ id: Date.now() }],\n    },\n    validationSchema: (yup) =>\n      yup.object().shape({\n        users: yup\n          .array(\n            yup.object().shape({\n              id: yup.number().required(),\n              name: yup.string().required(),\n              age: yup.number().required(),\n            }),\n          )\n          .min(1),\n      }),\n  })\n  const { fields, append, remove } = useFieldArray({\n    control: form.control,\n    name: \'users\',\n  })\n  const handleClickAdd = React.useCallback(\n    () => append({ id: Date.now() }),\n    [append],\n  )\n  const handleClickRemove = React.useCallback(\n    (index) => remove(index),\n    [remove],\n  )\n  const onSubmit = React.useCallback((data) => console.log({ data }), [])\n  return (\n    <Form context={form} onSubmit={onSubmit}>\n      {fields.map((user, index) => (\n        <Space key={user.id}>\n          <Input\n            name={`users.${index}.name`}\n            label="Nome"\n            fullWidth={false}\n          />\n          <Input\n            name={`users.${index}.age`}\n            label="Idade"\n            fullWidth={false}\n          />\n          <Button\n            danger\n            icon={<DeleteOutlined />}\n            shape="circle"\n            onClick={() => handleClickRemove(index)}\n          ></Button>\n        </Space>\n      ))}\n      <ErrorMessage name="users" />\n      <Space>\n        <Button type="text" onClick={handleClickAdd}>\n          Adicionar linha\n        </Button>\n        <Button htmlType="submit" type="primary">\n          Enviar\n        </Button>\n      </Space>\n    </Form>\n  )\n}',scope:{props:c,DeleteOutlined:h.Z,Button:i.Z,Space:j.Z,Playground:k.X,Form:l.Form,Input:l.Input,Select:l.Select,ErrorMessage:l.ErrorMessage,useForm:n(),useFieldArray:m.useFieldArray,meta:o},mdxType:"Playground"},function(){var a=n()({defaultValues:{users:[{id:Date.now()}]},validationSchema:function(a){return a.object().shape({users:a.array(a.object().shape({id:a.number().required(),name:a.string().required(),age:a.number().required()})).min(1)})}}),b=(0,m.useFieldArray)({control:a.control,name:"users"}),c=b.fields,d=b.append,e=b.remove,k=f.useCallback(function(){return d({id:Date.now()})},[d]),o=f.useCallback(function(a){return e(a)},[e]),p=f.useCallback(function(a){return console.log({data:a})},[]);return(0,g.kt)(l.Form,{context:a,onSubmit:p,mdxType:"Form"},c.map(function(a,b){return(0,g.kt)(j.Z,{key:a.id,mdxType:"Space"},(0,g.kt)(l.Input,{name:"users.".concat(b,".name"),label:"Nome",fullWidth:!1,mdxType:"Input"}),(0,g.kt)(l.Input,{name:"users.".concat(b,".age"),label:"Idade",fullWidth:!1,mdxType:"Input"}),(0,g.kt)(i.Z,{danger:!0,icon:(0,g.kt)(h.Z,{mdxType:"DeleteOutlined"}),shape:"circle",onClick:function(){return o(b)},mdxType:"Button"}))}),(0,g.kt)(l.ErrorMessage,{name:"users",mdxType:"ErrorMessage"}),(0,g.kt)(j.Z,{mdxType:"Space"},(0,g.kt)(i.Z,{type:"text",onClick:k,mdxType:"Button"},"Adicionar linha"),(0,g.kt)(i.Z,{htmlType:"submit",type:"primary",mdxType:"Button"},"Enviar")))}),(0,g.kt)("h3",Object.assign({},{id:"hooks-para-valida\xe7\xe3o-de-formul\xe1rios-e-m\xe1scaras"}),"Hooks para valida\xe7\xe3o de formul\xe1rios e m\xe1scaras"),(0,g.kt)("p",null,"Veja os hooks do Houston para validar formul\xe1rios e m\xe1scaras em ",(0,g.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/eduzz/houston/tree/master/src/pages/forms"}),"@eduzz/houston-forms"),"."),(0,g.kt)("h3",Object.assign({},{id:"useform-props"}),"useForm props"),(0,g.kt)("p",null,"O \xfanico parametro especifico \xe9 o validationSchema, o resto \xe9 configura\xe7\xe3o padr\xe3o do ",(0,g.kt)("a",Object.assign({parentName:"p"},{href:"https://react-hook-form.com/api/useform"}),"react-hook-form"),"."),(0,g.kt)("table",null,(0,g.kt)("thead",{parentName:"table"},(0,g.kt)("tr",{parentName:"thead"},(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,g.kt)("tbody",{parentName:"table"},(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"validationSchema"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"function")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"true")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Utilizado para valida\xe7\xe3o do formul\xe1rio")))))}q.isMDXComponent=!0;var r={editThisPagePath:"src/pages/forms/example.mdx"};for(var s in r)window[s]=r[s]}},function(a){a.O(0,[526,618,885,192,25,109,13,774,888,179],function(){var b;return a(a.s=5966)}),_N_E=a.O()}])