(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1574],{2342:function(e){var t;t=function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}}},e.exports=t()},34863:function(e,t,n){var r;r=function(e){"use strict";var t,n={name:"pt-br",weekdays:"domingo_segunda-feira_ter\xe7a-feira_quarta-feira_quinta-feira_sexta-feira_s\xe1bado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_s\xe1b".split("_"),weekdaysMin:"Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"),months:"janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),ordinal:function(e){return e+"\xba"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [\xe0s] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [\xe0s] HH:mm"},relativeTime:{future:"em %s",past:"h\xe1 %s",s:"poucos segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um m\xeas",MM:"%d meses",y:"um ano",yy:"%d anos"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(n,null,!0),n},e.exports=r(n(27693))},30899:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms/TimePicker",function(){return n(85903)}])},73087:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});var r=n(24246),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}(n(27378)),o=n(42192),i=n(57735);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){l(e,t,n[t])})}return e}function c(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}var d=function(e,t){return a.forwardRef(function(n,a){var l,u=n.name,d=n.disabled,p=n.label,m=n.help,f=n.error,b=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(n,["name","disabled","label","help","error"]),g=(0,o.useFormContext)();return g&&u?(0,r.jsx)(o.Controller,{control:g.control,name:u,render:function(n){var o,u,g=n.field,O=n.fieldState,k=n.formState;return(0,r.jsx)(i.Form.Item,{label:p,style:(null==t?void 0:t.disableMargin)?{marginBottom:0}:void 0,labelCol:{span:24},validateStatus:(null==O?void 0:null===(o=O.error)||void 0===o?void 0:o.message)?"error":void 0,help:null!==(l=null!=f?f:null==O?void 0:null===(u=O.error)||void 0===u?void 0:u.message)&&void 0!==l?l:m,children:(0,r.jsx)(e,c(s({},b,g),{onBlur:function(e,t){var n;g.onBlur(),null==b||null===(n=b.onBlur)||void 0===n||n.call(b,e,t)},disabled:d||(null==k?void 0:k.isSubmitting),ref:a}))})}}):(0,r.jsx)(i.Form.Item,{label:p,labelCol:{span:24},validateStatus:f?"error":void 0,help:null!=f?f:m,children:(0,r.jsx)(e,c(s({},b),{name:u,disabled:d,ref:a}))})})}},12713:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});var r=n(24246),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}(n(27378)),o=n(57735);n(2342),n(34863);var i=p(n(27693)),l=p(n(69746)),u=p(n(79913)),s=p(n(36487)),c=p(n(73087));function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return e&&e.__esModule?e:{default:e}}function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}i.default.extend(s.default),i.default.extend(u.default),i.default.extend(l.default),i.default.locale("pt-br");var f=a.forwardRef(function(e,t){var n=e.value,l=e.format,u=e.showTime,s=e.minDate,c=e.maxDate,p=e.onChange,m=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["value","format","showTime","minDate","maxDate","onChange"]);l=(null!=l?l:m.showSecond)?"HH:mm:ss":"HH:mm";var f=a.useCallback(function(e){return p(e.toDate())},[p]),b=a.useCallback(function(e){return!e||(s?e<s:!!c&&e>c)},[c,s]),g=a.useMemo(function(){return n?(0,i.default)(n):n},[n]);return(0,r.jsx)(o.TimePicker,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){d(e,t,n[t])})}return e}({ref:t,disabledDate:b,format:l,value:g,showTime:u,onChange:f},m))}),b=(0,c.default)(f)},85903:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d},meta:function(){return s}});var r=n(31373),a=n(52050),o=n(27378),i=n(35318),l=n(56100),u=n(12713),s={name:"TimePicker",tableOfContents:{depth:0,children:[{depth:1,slug:"#date-picker",title:"Date Picker",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"}]},{depth:2,slug:"#props",title:"Props"}]}]}},c={meta:s};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",Object.assign({},{id:"date-picker"}),"Date Picker"),(0,i.kt)("p",null,(0,i.kt)("a",Object.assign({parentName:"p"},{href:"https://ant.design/components/date-picker"}),"TimePicker do Antd")," com a\nconfigura\xe7\xe3o do ",(0,i.kt)("a",Object.assign({parentName:"p"},{href:"https://react-hook-form.com"}),"react-form-hook"),"."),(0,i.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import TimePicker from '@eduzz/houston-forms/TimePicker';\n")),(0,i.kt)("h3",Object.assign({},{id:"exemplo"}),"Exemplo"),(0,i.kt)(l.X,{__position:0,code:'() => {\n  const [value, setValue] = React.useState(null)\n  return (\n    <>\n      <TimePicker\n        label="Hora"\n        value={value}\n        onChange={(value) => setValue(value)}\n      />\n    </>\n  )\n}',scope:{props:n,Playground:l.X,TimePicker:u.default,meta:s},mdxType:"Playground"},function(){var e=(0,a.Z)(o.useState(null),2),t=e[0],n=e[1];return(0,i.kt)(o.Fragment,null,(0,i.kt)(u.default,{label:"Hora",value:t,onChange:function(e){return n(e)},mdxType:"TimePicker"}))}),(0,i.kt)("h2",Object.assign({},{id:"props"}),"Props"),(0,i.kt)("p",null,"Todas as props do TimePicker do Antd s\xe3o validos, abaixos as props extras."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"name"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"O name \xe9 importante para poder linkar o campo com o formul\xe1rio")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"label"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"help"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Exibe texto de ajuda abaixo do componente de texto.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"error"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Exibe uma mensagem de erro no componente de texto, assim como indica erro no campo.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"maxDate"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"Date")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"minDate"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"Date")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")))))}d.isMDXComponent=!0;var p={editThisPagePath:"src/pages/forms/TimePicker/index.mdx"};for(var m in p)window[m]=p[m]},10719:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},82126:function(e,t,n){"use strict";function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,{Z:function(){return r}})},52050:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(82126),a=n(12164);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||(0,r.Z)(e,t)||(0,a.Z)(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},12164:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(10719);function a(e,t){if(e){if("string"==typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return(0,r.Z)(e,t)}}}},function(e){e.O(0,[4526,756,2885,2192,4109,9774,2888,179],function(){return e(e.s=30899)}),_N_E=e.O()}]);