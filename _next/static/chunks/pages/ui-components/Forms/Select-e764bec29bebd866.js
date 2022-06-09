(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6019],{39811:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Forms/Select",function(){return c(72218)}])},69012:function(e,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.useFormContext=function(){return c.useContextSelector(d,function(a){return a})},a.useFormValue=function(e,a){var b=c.useContextSelector(d,function(a){return e?null==a?void 0:a.getFieldValue(e):null});return null!=a?a:b},a.useFormError=function(e,a){var b=c.useContextSelector(d,function(a){return e?null==a?void 0:a.getFieldError(e):null});return null!=a?a:b},a.useFormIsSubmitting=function(){return c.useContextSelector(d,function(a){return null==a?void 0:a.isSubmitting})},a.useFormSetValue=function(a){var b=c.useContextSelector(d,function(b){return a?null==b?void 0:b.setFieldValue:null});return f.useCallback(function(c){return b&&b(a,c)},[b,a])},a.default=void 0;var f=b(39037).interopRequireWildcard(b(27378)),c=b(55693),d=c.createContext(null);a.default=d},16847:function(e,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=b(39037).interopRequireWildcard(b(96342));Object.keys(c).forEach(function(b){"default"!==b&&"__esModule"!==b&&(b in a&&a[b]===c[b]||Object.defineProperty(a,b,{enumerable:!0,get:function(){return c[b]}}))});var d=c.default;a.default=d},64189:function(h,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),i=a(24246),d=c.interopRequireWildcard(a(27378)),e=c.interopRequireWildcard(a(16847)),j=c.interopRequireDefault(a(72150));function k(){var a=c.taggedTemplateLiteral(["\n    border: none;\n    position: relative;\n    padding: 0;\n    min-width: auto;\n    transition: 0.3s;\n\n    & > .__container {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      position: relative;\n      border: "," solid ",";\n      border-radius: ",";\n      background-color: ",";\n      transition: 0.3s;\n      height: 48px;\n      box-shadow: 0 0 0 2px tranparent;\n\n      &:hover {\n        background-color: ",";\n      }\n\n      & > .__startAdornment,\n      & > .__endAdornment {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin-top: none;\n\n        & > svg {\n          font-size: ",";\n        }\n      }\n\n      & > .__content {\n        width: 100%;\n      }\n\n      & > .__startAdornment {\n        margin-left: ",";\n      }\n\n      & > .__endAdornment {\n        margin-right: ",";\n      }\n\n      & .__text {\n        padding: ",";\n        font-size: ",";\n        font-family: ",";\n        font-weight: ",";\n        line-height: ",";\n      }\n    }\n\n    & > .__label {\n      font-size: ",";\n      font-family: ",";\n      font-weight: ",";\n      line-height: ",";\n      margin-bottom: ",";\n      color: ",";\n      display: flex;\n      align-items: center;\n    }\n\n    & > .__message {\n      display: block;\n      font-size: ",";\n      font-family: ",";\n      font-weight: ",";\n      line-height: ",";\n      color: ",";\n      margin-top: ",";\n    }\n\n    &.--clickable:not(.--disabled) > .__container {\n      cursor: pointer;\n      user-select: none;\n    }\n\n    &.--disabled {\n      opacity: ",";\n      cursor: not-allowed;\n    }\n\n    &.--loading {\n      cursor: progress;\n    }\n\n    &.--focused {\n      & > .__container {\n        box-shadow: 0 0 0 2px ",";\n        background-color: ",";\n      }\n    }\n\n    &.--error > .__container {\n      background-color: ",";\n      border-color: ",";\n    }\n\n    &.--full-width {\n      width: 100%;\n    }\n\n    &.--size-sm {\n      margin: 0;\n\n      & .__container {\n        height: 35px;\n\n        & > .__startAdornment {\n          margin-left: ",";\n        }\n\n        & > .__endAdornment {\n          margin-right: ",";\n        }\n      }\n\n      & .__text,\n      & > .__label {\n        font-size: ",";\n      }\n    }\n  "]);return k=function(){return a},a}var f=d.forwardRef(function(a,o){var g=a.label,f=a.loading,h=a.size,p=a.focused,k=a.errorMessage,l=a.fullWidth,b=a.endAdornment,m=a.startAdornment,q=a.className,d=a.helperText,r=a.disabled,s=a.children,t=a.containerRef,n=a.onClickContainer;return d=k||d,b=f?i.jsx(j.default,{color:"inherit",size:20}):b,i.jsxs("fieldset",{ref:o,className:e.cx(q,c.defineProperty({"--full-width":null==l||l,"--error":!!k,"--disabled":r,"--loading":f,"--focused":p,"--clickable":!!n},"--size-".concat(null!=h?h:"default"),!0)),children:[!!g&&i.jsx("label",{className:"__label",children:g}),i.jsxs("div",{className:"__container",ref:t,onClick:n,children:[!!m&&!f&&i.jsx("span",{className:"__startAdornment",children:m}),i.jsx("div",{className:"__content",children:s}),!!b&&i.jsx("span",{className:"__endAdornment",children:b})]}),!!d&&i.jsx("span",{className:"__message",children:d})]})}),g=e.default(f,{label:"houston-form-fieldset"})(function(b){var a=b.theme;return e.css(k(),a.border.width.xs,a.neutralColor.low.light,a.border.radius.xs,a.neutralColor.high.pure,a.hexToRgba(a.neutralColor.low.pure,a.opacity.level[2]),a.pxToRem(24),a.spacing.xxxs,a.spacing.xxxs,a.spacing.squish.xxs,a.font.size.xs,a.font.family.base,a.font.weight.regular,a.line.height.sm,a.font.size.xs,a.font.family.base,a.font.weight.regular,a.line.height.sm,a.spacing.stack.quarck,a.neutralColor.low.pure,a.font.size.xxs,a.font.family.base,a.font.weight.regular,a.line.height.default,a.neutralColor.low.pure,a.spacing.nano,a.opacity.level[6],a.feedbackColor.informative.pure,a.hexToRgba(a.neutralColor.low.pure,a.opacity.level[2]),a.hexToRgba(a.feedbackColor.negative.pure,a.opacity.level[2]),a.feedbackColor.negative.pure,a.spacing.nano,a.spacing.nano,a.font.size.xxs)});b.default=g},72150:function(h,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),i=a(24246);c.interopRequireWildcard(a(27378));var d=c.interopRequireWildcard(a(16847)),j=c.interopRequireDefault(a(79955));function e(){var a=c.taggedTemplateLiteral(["\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(270deg); }\n"]);return e=function(){return a},a}function k(){var a=c.taggedTemplateLiteral(["\n  0% { stroke-dashoffset: ","; }\n  50% { stroke-dashoffset: ","; transform: rotate(135deg); }\n  100% { stroke-dashoffset: ","; transform: rotate(450deg); }\n"]);return k=function(){return a},a}function l(){var a=c.taggedTemplateLiteral(["\n    animation: "," 1.4s linear infinite;\n    color: ",";\n\n    & > circle {\n      stroke: currentColor;\n      stroke-width: ",";\n      stroke-dasharray: ",";\n      stroke-dashoffset: 0;\n      transform-origin: center;\n      animation: "," 1.4s ease-in-out infinite;\n    }\n  "]);return l=function(){return a},a}function f(){var a=c.taggedTemplateLiteral(["\n  ","\n"]);return f=function(){return a},a}var m=d.keyframes(e()),g=d.default(function(c){var e=c.className,d=c.size,a=void 0===d?65:d,b=a/65*30;return i.jsx("svg",{className:e,width:"".concat(a,"px"),height:"".concat(a,"px"),viewBox:"0 0 ".concat(a+1," ").concat(a+1),children:i.jsx("circle",{fill:"none",strokeLinecap:"round",cx:b+.1*b,cy:b+.1*b,r:b})})},{label:"houston-loader"})(f(),function(b){var a,g=b.theme,e=b.color,f=b.size,c=void 0===f?65:f;return d.css(l(),m,"inherit"===e?"inherit":j.default(g,e).pure,c/65*6,c/65*187,(a=c,d.keyframes(k(),a/65*187,a/65*46.75,a/65*187)))});b.default=g},79955:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(b){var a=arguments.length>1&& void 0!==arguments[1]?arguments[1]:"primary";return["low","high"].includes(a)?b.neutralColor[a]:["positive","negative","warning","informative"].includes(a)?b.feedbackColor[a]:b.brandColor[a]}},72218:function(g,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return f},meta:function(){return e}});var h=a(27378),i=a(35318),j=a(56100),k=a(47687);function l(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function m(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||n(a,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(a,c){if(a){if("string"==typeof a)return l(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return l(a,c)}}var e={name:"Select",tableOfContents:{depth:0,children:[{depth:1,slug:"#select",title:"Select",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"},{depth:3,slug:"#sele\xe7\xe3o-de-m\xfaltiplas-op\xe7\xf5es",title:"Sele\xe7\xe3o de m\xfaltiplas op\xe7\xf5es"},{depth:3,slug:"#select-props",title:"Select Props"},{depth:3,slug:"#selectoption-props",title:"Select.Option Props"}]}]}]}},o={meta:e};function f(b){var c=b.components,a=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(b,["components"]);return(0,i.kt)("wrapper",Object.assign({},o,a,{components:c,mdxType:"MDXLayout"}),(0,i.kt)("h1",Object.assign({},{id:"select"}),"Select"),(0,i.kt)("p",null,"O componente de sele\xe7\xe3o \xe9 usado para exibir uma lista de op\xe7\xf5es para serem selecionadas."),(0,i.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import Select from '@eduzz/houston-ui/Forms/Select';\n")),(0,i.kt)("h3",Object.assign({},{id:"exemplo"}),"Exemplo"),(0,i.kt)(j.X,{__position:0,code:'() => {\n  const [text, setText] = React.useState(\'\')\n  return (\n    <>\n      <Select label="Com op\xe7\xe3o em branco" value={text} onChange={setText}>\n        <Select.Option>Selecione...</Select.Option>\n        <Select.Option value={1}>Op\xe7\xe3o 1</Select.Option>\n        <Select.Option value={2}>Op\xe7\xe3o 2</Select.Option>\n        <Select.Option value={3} disabled>\n          Op\xe7\xe3o 3\n        </Select.Option>\n      </Select>\n      <Select label="Desativado" disabled value={text} onChange={setText}>\n        <Select.Option>Selecione...</Select.Option>\n        <Select.Option value={1}>Op\xe7\xe3o 1</Select.Option>\n        <Select.Option value={2}>Op\xe7\xe3o 2</Select.Option>\n        <Select.Option value={3} disabled>\n          Op\xe7\xe3o 3\n        </Select.Option>\n      </Select>\n      <Select label="Carregamento" loading value={text} onChange={setText}>\n        <Select.Option>Selecione...</Select.Option>\n        <Select.Option value={1}>Op\xe7\xe3o 1</Select.Option>\n        <Select.Option value={2}>Op\xe7\xe3o 2</Select.Option>\n        <Select.Option value={3} disabled>\n          Op\xe7\xe3o 3\n        </Select.Option>\n      </Select>\n      <Select\n        label="Com texto de ajuda"\n        helperText="Exemplo de texto de ajuda"\n        value={text}\n        onChange={setText}\n      >\n        <Select.Option>Selecione...</Select.Option>\n        <Select.Option value={1}>Op\xe7\xe3o 1</Select.Option>\n        <Select.Option value={2}>Op\xe7\xe3o 2</Select.Option>\n        <Select.Option value={3} disabled>\n          Op\xe7\xe3o 3\n        </Select.Option>\n      </Select>\n      <Select\n        label="Com mensagem de erro"\n        errorMessage="Mensagem de erro"\n        value={text}\n        onChange={setText}\n      >\n        <Select.Option>Selecione...</Select.Option>\n        <Select.Option value={1}>Op\xe7\xe3o 1</Select.Option>\n        <Select.Option value={2}>Op\xe7\xe3o 2</Select.Option>\n        <Select.Option value={3} disabled>\n          Op\xe7\xe3o 3\n        </Select.Option>\n      </Select>\n    </>\n  )\n}',scope:{props:a,Playground:j.X,Select:k.default,meta:e},mdxType:"Playground"},function(){var c=m(h.useState(""),2),a=c[0],b=c[1];return(0,i.kt)(h.Fragment,null,(0,i.kt)(k.default,{label:"Com op\xe7\xe3o em branco",value:a,onChange:b,mdxType:"Select"},(0,i.kt)(k.default.Option,null,"Selecione..."),(0,i.kt)(k.default.Option,{value:1},"Op\xe7\xe3o 1"),(0,i.kt)(k.default.Option,{value:2},"Op\xe7\xe3o 2"),(0,i.kt)(k.default.Option,{value:3,disabled:!0},"Op\xe7\xe3o 3")),(0,i.kt)(k.default,{label:"Desativado",disabled:!0,value:a,onChange:b,mdxType:"Select"},(0,i.kt)(k.default.Option,null,"Selecione..."),(0,i.kt)(k.default.Option,{value:1},"Op\xe7\xe3o 1"),(0,i.kt)(k.default.Option,{value:2},"Op\xe7\xe3o 2"),(0,i.kt)(k.default.Option,{value:3,disabled:!0},"Op\xe7\xe3o 3")),(0,i.kt)(k.default,{label:"Carregamento",loading:!0,value:a,onChange:b,mdxType:"Select"},(0,i.kt)(k.default.Option,null,"Selecione..."),(0,i.kt)(k.default.Option,{value:1},"Op\xe7\xe3o 1"),(0,i.kt)(k.default.Option,{value:2},"Op\xe7\xe3o 2"),(0,i.kt)(k.default.Option,{value:3,disabled:!0},"Op\xe7\xe3o 3")),(0,i.kt)(k.default,{label:"Com texto de ajuda",helperText:"Exemplo de texto de ajuda",value:a,onChange:b,mdxType:"Select"},(0,i.kt)(k.default.Option,null,"Selecione..."),(0,i.kt)(k.default.Option,{value:1},"Op\xe7\xe3o 1"),(0,i.kt)(k.default.Option,{value:2},"Op\xe7\xe3o 2"),(0,i.kt)(k.default.Option,{value:3,disabled:!0},"Op\xe7\xe3o 3")),(0,i.kt)(k.default,{label:"Com mensagem de erro",errorMessage:"Mensagem de erro",value:a,onChange:b,mdxType:"Select"},(0,i.kt)(k.default.Option,null,"Selecione..."),(0,i.kt)(k.default.Option,{value:1},"Op\xe7\xe3o 1"),(0,i.kt)(k.default.Option,{value:2},"Op\xe7\xe3o 2"),(0,i.kt)(k.default.Option,{value:3,disabled:!0},"Op\xe7\xe3o 3")))}),(0,i.kt)("h3",Object.assign({},{id:"sele\xe7\xe3o-de-m\xfaltiplas-op\xe7\xf5es"}),"Sele\xe7\xe3o de m\xfaltiplas op\xe7\xf5es"),(0,i.kt)(j.X,{__position:1,code:"() => {\n  const [multiple, setMultiple] = React.useState([])\n  const [options] = React.useState(() => [\n    { value: 1, label: 'Op\xe7\xe3o 1' },\n    { value: 2, label: 'Op\xe7\xe3o 2' },\n    { value: 3, label: 'Op\xe7\xe3o 3 (desabilitada)', disabled: true },\n    { value: 4, label: 'Op\xe7\xe3o 4' },\n    { value: 5, label: 'Op\xe7\xe3o 5' },\n  ])\n  return (\n    <Select\n      label=\"Componente de sele\xe7\xe3o\"\n      multiple\n      value={multiple}\n      onChange={setMultiple}\n    >\n      <Select.Option>Limpar</Select.Option>\n      {options.map((option) => (\n        <Select.Option\n          key={option.value}\n          value={option.value}\n          disabled={option.disabled}\n        >\n          {option.label}\n        </Select.Option>\n      ))}\n    </Select>\n  )\n}",scope:{props:a,Playground:j.X,Select:k.default,meta:e},mdxType:"Playground"},function(){var a=m(h.useState([]),2),b=a[0],c=a[1],d=m(h.useState(function(){return[{value:1,label:"Op\xe7\xe3o 1"},{value:2,label:"Op\xe7\xe3o 2"},{value:3,label:"Op\xe7\xe3o 3 (desabilitada)",disabled:!0},{value:4,label:"Op\xe7\xe3o 4"},{value:5,label:"Op\xe7\xe3o 5"}]}),1),e=d[0];return(0,i.kt)(k.default,{label:"Componente de sele\xe7\xe3o",multiple:!0,value:b,onChange:c,mdxType:"Select"},(0,i.kt)(k.default.Option,null,"Limpar"),e.map(function(a){return(0,i.kt)(k.default.Option,{key:a.value,value:a.value,disabled:a.disabled},a.label)}))}),(0,i.kt)("h3",Object.assign({},{id:"select-props"}),"Select Props"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"id"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"name"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"label"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"disabled"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"fullWidth"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"multiple"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Permite selecionar uma ou mais op\xe7\xf5es")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"className"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"loading"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Exibe \xedcone de carregamento no componente")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"helperText"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Exibe texto de ajuda abaixo do componente de sele\xe7\xe3o")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"errorMessage"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Exibe uma mensagem de erro no componente de sele\xe7\xe3o, assim como indica erro no campo")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"value"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"any")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))))),(0,i.kt)("h3",Object.assign({},{id:"selectoption-props"}),"Select.Option Props"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"value"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"any")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"label"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Label usada para preencher o campo com texto depois de selecionado")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"disabled"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}))))))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/ui-components/Forms/Select/index.mdx"};for(var d in c)window[d]=c[d]}},function(a){a.O(0,[4526,1996,9961,7978,7409,7687,9774,2888,179],function(){return a(a.s=39811)}),_N_E=a.O()}])