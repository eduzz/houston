(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5269],{82350:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms/Radio",function(){return n(95563)}])},73087:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});var r=n(24246),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}(n(27378)),o=n(42192),i=n(4316);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){l(e,t,n[t])})}return e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}var d=function(e,t){return a.forwardRef(function(n,a){var l,u=n.name,d=n.disabled,p=n.label,f=n.help,b=n.error,g=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(n,["name","disabled","label","help","error"]),m=(0,o.useFormContext)();return m&&u?(0,r.jsx)(o.Controller,{control:m.control,name:u,render:function(n){var o,u,m=n.field,O=n.fieldState,y=n.formState;return(0,r.jsx)(i.Form.Item,{label:p,style:(null==t?void 0:t.disableMargin)?{marginBottom:0}:void 0,labelCol:{span:24},validateStatus:(null==O?void 0:null===(o=O.error)||void 0===o?void 0:o.message)?"error":void 0,help:null!==(l=null!=b?b:null==O?void 0:null===(u=O.error)||void 0===u?void 0:u.message)&&void 0!==l?l:f,children:(0,r.jsx)(e,s(c({},g,m),{onBlur:function(e,t){var n;m.onBlur(),null==g||null===(n=g.onBlur)||void 0===n||n.call(g,e,t)},disabled:d||(null==y?void 0:y.isSubmitting),ref:a}))})}}):(0,r.jsx)(i.Form.Item,{label:p,labelCol:{span:24},validateStatus:b?"error":void 0,help:null!=b?b:f,children:(0,r.jsx)(e,s(c({},g),{name:u,disabled:d,ref:a}))})})}},43145:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});var r,a=n(24246),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}(n(27378)),i=n(4316),l=(r=n(73087),r&&r.__esModule?r:{default:r});function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}var s=o.forwardRef(function(e,t){var n,r,l=e.value,c=e.onChange,s=e.checkedValue,d=void 0===s||s,p=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["value","onChange","checkedValue"]),f=o.useCallback(function(e){var t=e.target.checked;null==c||c(t?d:"boolean"==typeof d?!d:null)},[d,c]);return(0,a.jsx)(i.Radio,(n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){u(e,t,n[t])})}return e}({ref:t,checked:l===d},p),r=(r={onChange:f},r),Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(r)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}),n))}),d=(0,l.default)(s,{disableMargin:!0})},95563:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d},meta:function(){return c}});var r=n(31373),a=n(52050),o=n(27378),i=n(35318),l=n(56100),u=n(43145),c={name:"Radio",tableOfContents:{depth:0,children:[{depth:1,slug:"#radio",title:"Radio",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"},{depth:3,slug:"#radio-props",title:"Radio Props"}]}]}]}},s={meta:c};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",Object.assign({},{id:"radio"}),"Radio"),(0,i.kt)("p",null,(0,i.kt)("a",Object.assign({parentName:"p"},{href:"https://ant.design/components/Radio/"}),"Radio do Antd")," com a\nconfigura\xe7\xe3o do ",(0,i.kt)("a",Object.assign({parentName:"p"},{href:"https://react-hook-form.com"}),"react-form-hook"),"."),(0,i.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import Radio from '@eduzz/houston-forms/Radio';\n")),(0,i.kt)("h3",Object.assign({},{id:"exemplo"}),"Exemplo"),(0,i.kt)(l.X,{__position:0,code:"() => {\n  const [check, setCheck] = React.useState(undefined)\n  const [text, setText] = React.useState(undefined)\n  return (\n    <div>\n      <Radio value={check} onChange={setCheck}>\n        Test checked: {(check || '').toString()}\n      </Radio>\n      {(text || '').toString()}\n      <Radio value={text} checkedValue=\"string 1\" onChange={setText}>\n        Test string 1\n      </Radio>\n      <Radio value={text} checkedValue=\"string 2\" onChange={setText}>\n        Test string 2\n      </Radio>\n    </div>\n  )\n}",scope:{props:n,Playground:l.X,Radio:u.default,meta:c},mdxType:"Playground"},function(){var e=(0,a.Z)(o.useState(void 0),2),t=e[0],n=e[1],r=(0,a.Z)(o.useState(void 0),2),l=r[0],c=r[1];return(0,i.kt)("div",null,(0,i.kt)(u.default,{value:t,onChange:n,mdxType:"Radio"},"Test checked: ",(t||"").toString()),(l||"").toString(),(0,i.kt)(u.default,{value:l,checkedValue:"string 1",onChange:c,mdxType:"Radio"},"Test string 1"),(0,i.kt)(u.default,{value:l,checkedValue:"string 2",onChange:c,mdxType:"Radio"},"Test string 2"))}),(0,i.kt)("h3",Object.assign({},{id:"radio-props"}),"Radio Props"),(0,i.kt)("p",null,"Todas as props do Radio do Antd s\xe3o validos, abaixos as props extras."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"name"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"O name \xe9 importante para poder linkar o campo com o formul\xe1rio")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"checkedValue"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"any")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"true"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Valor customizado se checked")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"help"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Exibe texto de ajuda abaixo do componente de texto.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"error"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Exibe uma mensagem de erro no componente de texto, assim como indica erro no campo.")))))}d.isMDXComponent=!0;var p={editThisPagePath:"src/pages/forms/Radio/index.mdx"};for(var f in p)window[f]=p[f]},10719:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},82126:function(e,t,n){"use strict";function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,{Z:function(){return r}})},52050:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(82126),a=n(12164);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||(0,r.Z)(e,t)||(0,a.Z)(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},12164:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(10719);function a(e,t){if(e){if("string"==typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return(0,r.Z)(e,t)}}}},function(e){e.O(0,[4526,7898,2885,2192,4109,9774,2888,179],function(){return e(e.s=82350)}),_N_E=e.O()}]);