(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2776],{98080:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Forms/Checkbox",function(){return c(1436)}])},54897:function(g,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(a){return function(e){var b;return b="function"==typeof a?a(h.default()):a,Object.keys(b).reduce(function(f,a){return d.objectSpread({},f,d.defineProperty({},a,c.css("function"==typeof b[a]?b[a](e):b[a])))},{})}},a.clsx=a.cx=void 0;var d=b(39037),c=b(87651),h=d.interopRequireDefault(b(75645)),e=c.cx;a.cx=e;var f=c.cx;a.clsx=f},96342:function(n,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.breakpoints=a.css=a.clsx=a.cx=a.keyframes=void 0;var e=b(39037),c=b(87651),d=b(10043),f=e.interopRequireDefault(b(94408)),g=b(60921),h=d.keyframes;a.keyframes=h;var i=c.cx;a.cx=i;var j=c.cx;a.clsx=j;var k=d.css;a.css=k;var l=g.breakpoinstUtils;a.breakpoints=l;var m=f.default;a.default=m},82288:function(d,c,a){"use strict";c.Z=void 0;var b=a(39037),e=a(24246);b.interopRequireWildcard(a(27378));var f=b.interopRequireDefault(a(51906)),g=b.interopRequireDefault(a(29707));c.Z=function(a){return e.jsx(g.default,b.objectSpread({},a,{Control:f.default}))}},33356:function(h,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.useFormContext=function(){return e.useContext(f)},a.default=a.FormFieldsContext=void 0;var c=b(39037),i=b(24246),d=c.interopRequireWildcard(b(27378)),e=b(55693),f=e.createContext(null);a.FormFieldsContext=f;var g=d.memo(function(b){var a=b.context,d=c.objectWithoutProperties(b,["context"]);return i.jsx(f.Provider,{value:a,children:i.jsx("form",c.objectSpread({},d,{onReset:a.handleReset,onSubmit:a.handleSubmit}))})});a.default=g},29707:function(g,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var b=a(39037),h=a(24246),d=b.interopRequireWildcard(a(27378)),i=b.interopRequireDefault(a(97873)),j=a(55693),e=b.interopRequireDefault(a(54897)),k=a(33356),l=b.interopRequireDefault(a(51235)),m=e.default({marginDense:{padding:"0 8px"}}),f=d.memo(function(a){var q=a.Control,r=a.label,b=a.name,s=a.description,t=a.checked,c=a.value,e=a.errorMessage,f=a.isMultiple,u=a.onChange,v=a.margin,w=a.disabled,x=a.indeterminate,y=m(),z=j.useContextSelector(k.FormFieldsContext,function(a){return null==a?void 0:a.isSubmitting}),g=j.useContextSelector(k.FormFieldsContext,function(a){return null==a?void 0:a.getFieldValue(b)}),A=j.useContextSelector(k.FormFieldsContext,function(a){return null==a?void 0:a.getFieldError(b)}),n=j.useContextSelector(k.FormFieldsContext,function(a){return null==a?void 0:a.setFieldValue});if(!b&&n)throw new Error("@eduzz/houston-ui: to use form prop you need provide a name for the field");var o=d.useMemo(function(){return f?(null!=g?g:[]).includes(c):!0===g||t},[t,g,f,c]),B=d.useCallback(function(e,a){if(!f){n&&n(b,a),u&&u(e,a);return}var d=new Set(null!=g?g:[]);a?d.add(c):d.delete(c),n&&n(b,Array.from(d))},[g,f,b,u,n,c]),p=null!=e?e:A;return h.jsx(i.default,{control:h.jsx(q,{indeterminate:x,disabled:z||w,classes:{root:"none"===v&&y.marginDense},checked:null!=o&&o,defaultValue:"",onChange:B,name:b,color:"primary"}),label:h.jsx(l.default,{hasError:!!p,errorMessage:p,label:r,description:s})})});c.default=f},51235:function(f,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),g=a(24246),d=c.interopRequireWildcard(a(27378)),h=a(10043),i=c.interopRequireDefault(a(52107)),j=c.interopRequireDefault(a(98021)),e=d.memo(function(b){var c=b.hasError,a=b.label,d=b.description,e=b.errorMessage,f=h.useTheme();return a&&"string"!=typeof a?g.jsxs(g.Fragment,{children:[a,c&&g.jsx(i.default,{error:!0,children:e})]}):g.jsxs(g.Fragment,{children:[a&&g.jsx(j.default,{size:"xxs",children:a}),d&&g.jsx(j.default,{size:"xxs",weight:"regular",children:d}),c&&g.jsx(i.default,{sx:{fontSize:f.font.size.xxxs},error:!0,children:e})]})});b.default=e},10576:function(f,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),g=a(24246),d=c.interopRequireWildcard(a(27378)),h=c.interopRequireDefault(a(98021)),e=d.forwardRef(function(a,d){var b=a.as,e=a.children,f=c.objectWithoutProperties(a,["as","children"]);return g.jsx(h.default,c.objectSpread({as:void 0===b?"figcaption":b,ref:d,size:"xxs"},f,{children:e}))});b.default=e},42665:function(f,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var b=a(39037),g=a(24246),d=b.interopRequireWildcard(a(27378)),h=b.interopRequireDefault(a(75645)),i=b.interopRequireDefault(a(98021)),j=b.interopRequireDefault(a(33205)),k={h1:"giant",h2:"xxxl",h3:"xxl",h4:"lg",h5:"md",h6:"xs",display:"giant",xl:"xxxl",lg:"xxl",md:"lg",sm:"md",xs:"xs"},l={h1:"xxxl",h2:"xxl",h3:"lg",h4:"md",h5:"sm",h6:"xs",display:"xxxl",xl:"xxl",lg:"lg",md:"md",sm:"sm",xs:"xs"},m={h1:"regular",h2:"regular",h3:"semibold",h4:"semibold",h5:"semibold",h6:"bold",display:"regular",xl:"regular",lg:"semibold",md:"semibold",sm:"semibold",xs:"bold"},e=d.forwardRef(function(a,n){var e=a.as,d=void 0===e?"h1":e,o=a.children,c=a.size,p=b.objectWithoutProperties(a,["as","children","size"]),q=h.default().breakpoints,r=j.default(q.down("sm")),f=r?l:k,s=c?f[c]:f[d],t=c?m[c]:m[d];return g.jsx(i.default,b.objectSpread({as:d,ref:n,size:s,weight:t},p,{children:o}))});c.default=e},35323:function(f,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var b=a(39037),g=a(24246),d=b.interopRequireWildcard(a(27378)),h=b.interopRequireDefault(a(75645)),i=b.interopRequireDefault(a(98021)),j=b.interopRequireDefault(a(33205)),k={lg:"lg",sm:"md"},l={lg:"sm",sm:"xs"},e=d.forwardRef(function(a,e){var c=a.as,f=a.children,d=a.size,m=b.objectWithoutProperties(a,["as","children","size"]),n=h.default().breakpoints,o=j.default(n.down("sm")),p=(o?l:k)[void 0===d?"lg":d];return g.jsx(i.default,b.objectSpread({as:void 0===c?"p":c,ref:e,size:p},m,{children:f}))});c.default=e},24097:function(f,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var b=a(39037),g=a(24246),d=b.interopRequireWildcard(a(27378)),h=b.interopRequireDefault(a(75645)),i=b.interopRequireDefault(a(98021)),j=b.interopRequireDefault(a(33205)),k={lg:"lg",sm:"md"},l={lg:"md",sm:"sm"},e=d.forwardRef(function(a,e){var c=a.as,f=a.children,d=a.size,m=b.objectWithoutProperties(a,["as","children","size"]),n=h.default().breakpoints,o=j.default(n.down("sm")),p=(o?l:k)[void 0===d?"lg":d];return g.jsx(i.default,b.objectSpread({as:void 0===c?"h2":c,ref:e,size:p},m,{children:f}))});c.default=e},98021:function(o,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var b=a(39037),p=a(24246),d=b.interopRequireWildcard(a(27378)),e=b.interopRequireWildcard(a(96342)),f=b.interopRequireDefault(a(40772)),g=b.interopRequireDefault(a(10576)),h=b.interopRequireDefault(a(42665)),i=b.interopRequireDefault(a(35323)),j=b.interopRequireDefault(a(24097));function q(){var a=b.taggedTemplateLiteral(["\n          &.--","-"," {\n            font-",": ",";\n          }\n        "]);return q=function(){return a},a}function r(){var a=b.taggedTemplateLiteral(["\n          &.--line-height-"," {\n            line-height: ",";\n          }\n        "]);return r=function(){return a},a}function s(){var a=b.taggedTemplateLiteral(["\n            &.--color-neutralColor-","-"," {\n              color: ",";\n            }\n          "]);return s=function(){return a},a}function t(){var a=b.taggedTemplateLiteral(["\n      margin: 0;\n\n      ","\n\n      &.--color-primary {\n        color: ",";\n      }\n\n      &.--margin-bottom {\n        margin-bottom: ",";\n      }\n    "]);return t=function(){return a},a}function k(){var a=b.taggedTemplateLiteral(["\n  ","\n"]);return k=function(){return a},a}var l=d.forwardRef(function(a,i){var c=a.as,j=a.children,d=a.size,f=a.weight,g=a.lineHeight,k=a.marginBottom,h=a.color,l=a.className,m=b.objectWithoutProperties(a,["as","children","size","weight","lineHeight","marginBottom","color","className"]),n=(void 0===h?"neutralColor.low.pure":h).replace(/[.]/g,"-");return p.jsx(void 0===c?"p":c,b.objectSpread({ref:i,className:e.cx(l,"--size-".concat(void 0===d?"xs":d),"--weight-".concat(void 0===f?"regular":f),"--line-height-".concat(void 0===g?"md":g),"--color-".concat(n),!!k&&"--margin-bottom")},m,{children:j}))}),m=e.default(l)(k(),function(f){var c,d,a=f.theme;return e.css(t(),(c=a,d=[],["size","weight"].forEach(function(a){return Object.entries(c.font[a]).forEach(function(f){var c=b.slicedToArray(f,2),g=c[0],h=c[1];return d.push(e.css(q(),a,g,a,h))})}),Object.entries(c.line.height).forEach(function(c){var a=b.slicedToArray(c,2),f=a[0],g=a[1];return d.push(e.css(r(),f,g))}),["low","high"].forEach(function(a){return Object.entries(c.neutralColor[a]).forEach(function(f){var c=b.slicedToArray(f,2),g=c[0],h=c[1];return d.push(e.css(s(),a,g,h))})}),d),a.brandColor.primary.pure,a.spacing.nano)}),n=f.default(m,{Caption:g.default,Heading:h.default,Paragraph:i.default,Subtitle:j.default});c.default=n},33205:function(c,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(c){var h=function(){i(f(a))},a=c.replace("@media","").trim(),f=function(a){return window.matchMedia(a).matches},b=d.slicedToArray(e.useState(f(a)),2),g=b[0],i=b[1];return e.useEffect(function(){var b=window.matchMedia(a);h();var c="change";return b.addEventListener(c,h),function(){b.removeEventListener(c,h)}},[a]),g};var d=b(39037),e=b(27378)},40772:function(c,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(a,b){return Object.keys(b).forEach(function(c){a[c]=b[c]}),a},b(39037).interopRequireWildcard(b(27378))},1436:function(g,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return f},meta:function(){return e}});var h=a(27378),i=a(35318),j=a(56100),k=a(82288);function l(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}var e={name:"Checkbox Field",tableOfContents:{depth:0,children:[{depth:1,slug:"#checkbox-field",title:"Checkbox Field",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#varia\xe7\xf5es",title:"Varia\xe7\xf5es"},{depth:3,slug:"#formul\xe1rio",title:"Formul\xe1rio"},{depth:3,slug:"#utilizando-m\xe9todo-onchange-sem-hook-useform",title:"Utilizando m\xe9todo onChange (sem hook useForm)"}]}]}]}},m={meta:e};function f(b){var c=b.components,a=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(b,["components"]);return(0,i.kt)("wrapper",Object.assign({},m,a,{components:c,mdxType:"MDXLayout"}),(0,i.kt)("h1",Object.assign({},{id:"checkbox-field"}),"Checkbox Field"),(0,i.kt)("p",null,"O componente de caixa de sele\xe7\xe3o (Checkbox) permite que o usu\xe1rio selecione um ou mais itens de um determinado grupo."),(0,i.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import CheckboxField from '@eduzz/houston-ui/Forms/Checkbox';\n")),(0,i.kt)("h3",Object.assign({},{id:"varia\xe7\xf5es"}),"Varia\xe7\xf5es"),(0,i.kt)(j.X,{__position:0,code:'<div>\n  <CheckboxField name="example-1" label="Exemplo 1" margin="normal" />\n</div>\n<div>\n  <CheckboxField\n    name="example-2"\n    label="Exemplo 2"\n    description="Exemplo de utiliza\xe7\xe3o do Checkbox com descri\xe7\xe3o"\n    margin="normal"\n  />\n</div>\n<div>\n  <CheckboxField\n    name="example-3"\n    label="Exemplo 3"\n    errorMessage="Mensagem de erro"\n    margin="normal"\n  />\n</div>\n<div>\n  <CheckboxField\n    name="example-4"\n    label="Exemplo 4"\n    description="Checkbox sem margem"\n    margin="none"\n  />\n</div>',scope:{props:a,Playground:j.X,CheckboxField:k.Z,meta:e},mdxType:"Playground"},(0,i.kt)("div",null,(0,i.kt)(k.Z,{name:"example-1",label:"Exemplo 1",margin:"normal",mdxType:"CheckboxField"})),(0,i.kt)("div",null,(0,i.kt)(k.Z,{name:"example-2",label:"Exemplo 2",description:"Exemplo de utiliza\xe7\xe3o do Checkbox com descri\xe7\xe3o",margin:"normal",mdxType:"CheckboxField"})),(0,i.kt)("div",null,(0,i.kt)(k.Z,{name:"example-3",label:"Exemplo 3",errorMessage:"Mensagem de erro",margin:"normal",mdxType:"CheckboxField"})),(0,i.kt)("div",null,(0,i.kt)(k.Z,{name:"example-4",label:"Exemplo 4",description:"Checkbox sem margem",margin:"none",mdxType:"CheckboxField"}))),(0,i.kt)("h3",Object.assign({},{id:"formul\xe1rio"}),"Formul\xe1rio"),(0,i.kt)("p",null,"Caso utilize o componente de caixa de sele\xe7\xe3o sem estar dentro de um contexto de formul\xe1rio,\n\xe9 poss\xedvel referenci\xe1-lo atrav\xe9s da propriedade ",(0,i.kt)("inlineCode",{parentName:"p"},"form"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import useForm from '@eduzz/houston-forms/useForm';\nimport CheckboxField from '@eduzz/houston-ui/Forms/Checkbox';\n\ninterface IModel {\n  name: string;\n}\n\nconst MyComponent = () => {\n  const form = useForm<IModel>({\n    onSubmit: () => {}\n  });\n\n  return (\n    <CheckboxField\n      name='example-form'\n      label='Exemplo formul\xe1rio'\n      description='Checkbox fora de um FormContext'\n      form={form}\n    />\n  );\n};\n")),(0,i.kt)("h3",Object.assign({},{id:"utilizando-m\xe9todo-onchange-sem-hook-useform"}),"Utilizando m\xe9todo onChange (sem hook useForm)"),(0,i.kt)(j.X,{__position:1,code:'() => {\n  const [value, setValue] = React.useState(false)\n  const handleChange = (event) => {\n    setValue(event.target.checked)\n    console.log(\'current checkbox value\', event.target.checked)\n  }\n  return (\n    <CheckboxField\n      name="example-on-change"\n      label="Exemplo com m\xe9todo onChange"\n      description="Checkbox utilizando m\xe9todo de onChange"\n      onChange={handleChange}\n      checked={value}\n    />\n  )\n}',scope:{props:a,Playground:j.X,CheckboxField:k.Z,meta:e},mdxType:"Playground"},function(){var a,b,c=(a=h.useState(!1),b=2,function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||function(a,c){if(a){if("string"==typeof a)return l(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return l(a,c)}}(a,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=c[0],e=c[1];return(0,i.kt)(k.Z,{name:"example-on-change",label:"Exemplo com m\xe9todo onChange",description:"Checkbox utilizando m\xe9todo de onChange",onChange:function(a){e(a.target.checked),console.log("current checkbox value",a.target.checked)},checked:d,mdxType:"CheckboxField"})}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"name"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"label"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"description"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"errorMessage"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"form"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"IFormAdapter<any>")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"isMultiple"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Se a propriedade for configurada como ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," \xe9 necess\xe1rio passar um valor para ",(0,i.kt)("inlineCode",{parentName:"td"},"form")," obrigatoriamente")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"margin"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"none"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"normal")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"none")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"checked"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Caso a prop ",(0,i.kt)("inlineCode",{parentName:"td"},"form")," esteja configurada, o componente ser\xe1 checado atrav\xe9s dos valores do formul\xe1rio e essa propriedade ser\xe1 ignorada")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onChange"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"function")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Fun\xe7\xe3o chamada quando o valor do checkbox \xe9 alterado")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"disabled"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"indeterminate"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))))))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/ui-components/Forms/Checkbox/index.mdx"};for(var d in c)window[d]=c[d]}},function(a){a.O(0,[4526,9914,9961,6557,1281,6970,9442,7978,9774,2888,179],function(){return a(a.s=98080)}),_N_E=a.O()}])