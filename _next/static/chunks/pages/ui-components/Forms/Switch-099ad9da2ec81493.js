(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[764],{47086:function(a,b,c){var d=c(42192),e=function(a,b,c){if(a&&"reportValidity"in a){var e=d.get(c,b);a.setCustomValidity(e&&e.message||""),a.reportValidity()}},f=function(a,b){var c=function(c){var d=b.fields[c];d&&d.ref&&"reportValidity"in d.ref?e(d.ref,c,a):d.refs&&d.refs.forEach(function(b){return e(b,c,a)})};for(var d in b.fields)c(d)};b.toNestError=function(a,b){b.shouldUseNativeValidation&&f(a,b);var c={};for(var e in a){var g=d.get(b.fields,e);d.set(c,e,Object.assign(a[e],{ref:g&&g.ref}))}return c},b.validateFieldsNatively=f},26593:function(a,b,c){var d=c(47086),e=c(42192);b.yupResolver=function(a,b,c){return void 0===b&&(b={}),void 0===c&&(c={}),function(f,g,h){try{return Promise.resolve(function(e,i){try{var j=(b.context,Promise.resolve(a["sync"===c.mode?"validateSync":"validate"](f,Object.assign({abortEarly:!1},b,{context:g}))).then(function(a){return h.shouldUseNativeValidation&&d.validateFieldsNatively({},h),{values:c.rawValues?f:a,errors:{}}}))}catch(k){return i(k)}return j&&j.then?j.then(void 0,i):j}(0,function(a){var b,c;if(!a.inner)throw a;return{values:{},errors:d.toNestError((b=a,c=!h.shouldUseNativeValidation&&"all"===h.criteriaMode,(b.inner||[]).reduce(function(a,b){if(a[b.path]||(a[b.path]={message:b.message,type:b.type}),c){var d=a[b.path].types,f=d&&d[b.type];a[b.path]=e.appendErrors(b.path,c,a,b.type,f?[].concat(f,b.message):b.message)}return a},{})),h)}}))}catch(i){return Promise.reject(i)}}}},99890:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Forms/Switch",function(){return c(6910)}])},43347:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),!function(a,b){for(var c in b)Object.defineProperty(a,c,{enumerable:!0,get:b[c]})}(b,{default:function(){return h},useFieldArray:function(){return i}}),c(29580);var d=c(26593),e=c(42192),f=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=g(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var h=e?Object.getOwnPropertyDescriptor(a,f):null;h&&(h.get||h.set)?Object.defineProperty(d,f,h):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}(c(14633));function g(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(g=function(a){return a?c:b})(a)}function h(a){var b,c,g=a.validationSchema,h=a.defaultValues,i=a.initialValues,j=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["validationSchema","defaultValues","initialValues"]),k=(b=function(a){for(var b=arguments,c=1;c<arguments.length;c++)!function(c){var d=null!=b[c]?b[c]:{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){var c,e,f;c=a,e=b,f=d[b],e in c?Object.defineProperty(c,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[e]=f})}(c);return a}({},j),c=(c={defaultValues:null!=h?h:i},c),Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(c)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(c)).forEach(function(a){Object.defineProperty(b,a,Object.getOwnPropertyDescriptor(c,a))}),b);return g&&Object.assign(k,{resolver:(0,d.yupResolver)("function"==typeof g?g(f):g)}),(0,e.useForm)(k)}var i=e.useFieldArray},42900:function(a,b,c){"use strict";Object.defineProperty(b,"Z",{enumerable:!0,get:function(){return j}});var d=c(24246),e=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=g(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var h=e?Object.getOwnPropertyDescriptor(a,f):null;h&&(h.get||h.set)?Object.defineProperty(d,f,h):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}(c(27378)),f=c(42192);function g(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(g=function(a){return a?c:b})(a)}function h(a){for(var b=arguments,c=1;c<arguments.length;c++)!function(c){var d=null!=b[c]?b[c]:{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){var c,e,f;c=a,e=b,f=d[b],e in c?Object.defineProperty(c,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[e]=f})}(c);return a}function i(a,b){return b=null!=b?b:{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))}),a}var j=function(a){var b=a.context,c=a.onSubmit,g=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["context","onSubmit"]),j=e.useCallback(function(){return b.reset()},[b]);return(0,d.jsx)(f.FormProvider,i(h({},b),{children:(0,d.jsx)("form",i(h({},g),{onReset:j,onSubmit:b.handleSubmit(c),noValidate:!0}))}))}},11386:function(a,b,c){"use strict";Object.defineProperty(b,"Z",{enumerable:!0,get:function(){return n}});var d,e=c(24246),f=k(c(27378)),g=k(c(12103)),h=(d=c(42123),d&&d.__esModule?d:{default:d});function i(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function j(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(j=function(a){return a?c:b})(a)}function k(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=j(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}function l(){var a,b,c=(a=["\n    display: inline-flex;\n    align-items: center;\n    gap: ",";\n    cursor: pointer;\n    line-height: ",";\n\n    &.hst-switch-disabled {\n      opacity: ",";\n      cursor: not-allowed;\n    }\n\n    .hst-switch-error-message {\n      font-size: ",";\n      font-family: ",";\n      font-weight: ",";\n      line-height: ",";\n      color: ",";\n    }\n\n    .hst-switch-button {\n      all: unset;\n      margin-bottom: auto;\n\n      :disabled {\n        pointer-events: none;\n      }\n    }\n\n    .hst-switch-label {\n      label {\n        all: unset;\n        color: ",";\n        font-family: ",";\n        font-size: ",";\n        font-weight: ",";\n        line-height: ",";\n        user-select: none;\n      }\n    }\n\n    .hst-switch-track {\n      width: ","rem;\n      height: ","rem;\n      background-color: ",";\n      border-radius: ",";\n      display: flex;\n      align-items: center;\n      position: relative;\n      transition-duration: 0.5s;\n      transition-property: background-color, color;\n\n      :hover {\n        background-color: ",";\n      }\n\n      :focus {\n        background-color: ",";\n        outline: "," solid ",";\n      }\n\n      &.hst-switch-checked {\n        background-color: ",";\n      }\n\n      &.hst-switch-error {\n        background-color: ",";\n      }\n\n      .hst-switch-thumb {\n        width: ","rem;\n        height: ","rem;\n        background-color: ",";\n        border-radius: ",";\n        position: absolute;\n        transition: all 0.2s;\n        left: ",";\n\n        &.hst-switch-checked {\n          transform: translateX(","rem);\n        }\n      }\n    }\n  "],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return l=function(){return c},c}var m=f.forwardRef(function(a,b){var c,d,h,j,k=a.children,l=a.className,m=a.onChange,n=a.disabled,o=a.value,p=a.id,q=a.errorMessage,r=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["children","className","onChange","disabled","value","id","errorMessage"]),s=f.useCallback(function(){m&&m(!o)},[m,o]),t=(c=f.useState(null!=p?p:"hst-switch-id-".concat(Math.floor(1e3*Math.random()))),d=1,function(a){if(Array.isArray(a))return a}(c)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(c,d)||function a(b,c){if(b){if("string"==typeof b)return i(b,c);var d=Object.prototype.toString.call(b).slice(8,-1);if("Object"===d&&b.constructor&&(d=b.constructor.name),"Map"===d||"Set"===d)return Array.from(d);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return i(b,c)}}(c,d)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=t[0];return(0,e.jsxs)("div",{className:(0,g.cx)(l,{"hst-switch-disabled":n}),children:[(0,e.jsx)("button",(h=function(a){for(var b=arguments,c=1;c<arguments.length;c++)!function(c){var d=null!=b[c]?b[c]:{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){var c,e,f;c=a,e=b,f=d[b],e in c?Object.defineProperty(c,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[e]=f})}(c);return a}({id:u,role:"switch",className:(0,g.cx)("hst-switch-button",{"hst-switch-error":!!q}),onClick:s,disabled:n,"aria-disabled":n,"aria-checked":o,ref:b},r),j=(j={children:(0,e.jsx)("div",{tabIndex:0,className:(0,g.cx)("hst-switch-track",{"hst-switch-checked":o,"hst-switch-error":!!q}),children:(0,e.jsx)("span",{className:(0,g.cx)("hst-switch-thumb",{"hst-switch-checked":o})})})},j),Object.getOwnPropertyDescriptors?Object.defineProperties(h,Object.getOwnPropertyDescriptors(j)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(j)).forEach(function(a){Object.defineProperty(h,a,Object.getOwnPropertyDescriptor(j,a))}),h)),(0,e.jsxs)("div",{className:"hst-switch-label",children:[k&&(0,e.jsx)("label",{htmlFor:u,children:k}),!!q&&(0,e.jsx)("div",{className:"hst-switch-error-message",children:q})]})]})}),n=(0,g.default)((0,h.default)(m),{label:"hst-switch"})(function(a){var b=a.theme;return(0,g.css)(l(),b.spacing.inline.nano,b.line.height.lg,b.opacity.level[6],b.font.size.xxs,b.font.family.base,b.font.weight.regular,b.line.height.default,b.hexToRgba(b.feedbackColor.negative.pure),b.neutralColor.low.pure,b.font.family.base,b.font.size.xs,b.font.weight.regular,b.line.height.default,b.pxToRem(40),b.pxToRem(24),b.hexToRgba(b.neutralColor.low.light,b.opacity.level[8]),b.border.radius.pill,b.neutralColor.low.light,b.neutralColor.low.light,b.border.width.sm,b.feedbackColor.informative.pure,b.brandColor.primary.pure,b.hexToRgba(b.feedbackColor.negative.pure),b.pxToRem(16),b.pxToRem(16),b.neutralColor.high.pure,b.border.radius.pill,b.spacing.quarck,1)})},54703:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return o}});var d=c(24246),e=h(c(27378)),f=h(c(12103));function g(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(g=function(a){return a?c:b})(a)}function h(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=g(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var h=e?Object.getOwnPropertyDescriptor(a,f):null;h&&(h.get||h.set)?Object.defineProperty(d,f,h):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}function i(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function j(){var a=i(["\n        &.hst-grid-column-","-"," {\n          flex-basis: ",";\n          flex: ",";\n        }\n      "]);return j=function(){return a},a}function k(){var a=i(["\n      "," {\n        ","\n      }\n    "]);return k=function(){return a},a}var l=[1,2,3,4,5,6,7,8,9,10,11,12,"auto","fill"],m=["xs","sm","md","lg","xlg"],n=e.forwardRef(function(a,b){var c=a.className,e=a.children,g=a.xs,h=void 0===g?"fill":g,i=a.sm,j=a.md,k=a.lg,l=a.xlg;return(0,d.jsx)("div",{ref:b,className:(0,f.cx)(c,"hst-grid-column",h&&"hst-grid-column-xs-".concat(h),i&&"hst-grid-column-sm-".concat(i),j&&"hst-grid-column-md-".concat(j),k&&"hst-grid-column-lg-".concat(k),l&&"hst-grid-column-xlg-".concat(l)),children:e})}),o=(0,f.default)(n,{label:"hst-grid-column"})(function(a){var b=a.theme;return m.map(function(a){var c=l.map(function(b){return(0,f.css)(j(),a,b,"string"==typeof b?"auto":"".concat(b/12*100,"%"),"fill"===b?1:null)});return"xs"===a?c:(0,f.css)(k(),b.breakpoints.up(a),c)})})},78983:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return u}});var d,e,f,g=c(24246),h=k(c(27378)),i=k(c(12103));function j(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(j=function(a){return a?c:b})(a)}function k(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=j(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}function l(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function m(){var a=l(["\n        &.hst-grid-row-justify-content-"," {\n          justify-content: ",";\n        }\n      "]);return m=function(){return a},a}function n(){var a=l(["\n        &.hst-grid-row-align-items-"," {\n          align-items: ",";\n        }\n      "]);return n=function(){return a},a}function o(){var a=l(["\n        &.hst-grid-row-spacing-"," {\n          width: calc(100% + ",");\n          margin: calc(-"," / 2);\n\n          & > .hst-grid-column {\n            box-sizing: border-box;\n            padding: calc("," / 2);\n          }\n        }\n      "]);return o=function(){return a},a}function p(){var a=l(["\n    display: flex;\n    flex-wrap: wrap;\n\n    ","\n\n    ","\n\n    ","\n  "]);return p=function(){return a},a}var q=["flex-start","flex-end","space-between","center","space-around"],r=["flex-start","flex-end","center","baseline","stretch"],s=["none","nano","xxxs","xxs","xs","md","xl"],t=h.forwardRef(function(a,b){var c=a.className,d=a.children,e=a.spacing,f=a.justifyContent,h=a.alignItems;return(0,g.jsx)("div",{ref:b,className:(0,i.cx)(c,"hst-grid-row-spacing-".concat(void 0===e?"xxxs":e),"hst-grid-row-justify-content-".concat(void 0===f?"flex-start":f),"hst-grid-row-align-items-".concat(void 0===h?"flex-start":h)),children:d})}),u=(0,i.default)(t,{label:"hst-grid-row"})(function(a){var b=a.theme;return(0,i.css)(p(),q.map(function(a){return(0,i.css)(m(),a,a)}),r.map(function(a){return(0,i.css)(n(),a,a)}),s.map(function(a){return(0,i.css)(o(),a,null!==(d=b.spacing.inline[a])&& void 0!==d?d:"0rem",null!==(e=b.spacing.inline[a])&& void 0!==e?e:"0rem",null!==(f=b.spacing.inline[a])&& void 0!==f?f:"0rem")}))})},6910:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return r},meta:function(){return p}});var d=c(31373),e=c(52050),f=c(27378),g=c(35318),h=c(56100),i=c(43347),j=c.n(i),k=c(42900),l=c(54703),m=c(78983),n=c(38861),o=c(11386),p={name:"Switch",tableOfContents:{depth:0,children:[{depth:1,slug:"#switch",title:"Switch",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplos",title:"Exemplos"},{depth:3,slug:"#utilizando-com-form",title:"Utilizando com Form"}]}]}]}},q={meta:p};function r(a){var b=a.components,c=(0,d.Z)(a,["components"]);return(0,g.kt)("wrapper",Object.assign({},q,c,{components:b,mdxType:"MDXLayout"}),(0,g.kt)("h1",Object.assign({},{id:"switch"}),"Switch"),(0,g.kt)("p",null,"Switches alternam o estado de uma \xfanica configura\xe7\xe3o, sendo ligado ou desligado."),(0,g.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,g.kt)("pre",null,(0,g.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import Switch from '@eduzz/houston-ui/Forms/Switch';\n")),(0,g.kt)("h3",Object.assign({},{id:"exemplos"}),"Exemplos"),(0,g.kt)(h.X,{__position:0,code:'() => {\n  const [checked, setChecked] = React.useState(false)\n  const onChange = React.useCallback(() => setChecked((prev) => !prev), [])\n  return (\n    <Row>\n      <Column xs="auto">\n        <Switch value={checked} onChange={onChange}>\n          Switch\n        </Switch>\n      </Column>\n      <Column xs="auto">\n        <Switch value disabled>\n          Checked disabled\n        </Switch>\n      </Column>\n      <Column xs="auto">\n        <Switch disabled>Disabled</Switch>\n      </Column>\n      <Column xs="auto">\n        <Switch\n          errorMessage="Error Message"\n          value={checked}\n          onChange={onChange}\n        >\n          Error\n        </Switch>\n      </Column>\n    </Row>\n  )\n}',scope:{props:c,Playground:h.X,useForm:j(),Form:k.Z,Column:l.default,Row:m.default,Typography:n.default,Switch:o.Z,meta:p},mdxType:"Playground"},function(){var a=(0,e.Z)(f.useState(!1),2),b=a[0],c=a[1],d=f.useCallback(function(){return c(function(a){return!a})},[]);return(0,g.kt)(m.default,{mdxType:"Row"},(0,g.kt)(l.default,{xs:"auto",mdxType:"Column"},(0,g.kt)(o.Z,{value:b,onChange:d,mdxType:"Switch"},"Switch")),(0,g.kt)(l.default,{xs:"auto",mdxType:"Column"},(0,g.kt)(o.Z,{value:!0,disabled:!0,mdxType:"Switch"},"Checked disabled")),(0,g.kt)(l.default,{xs:"auto",mdxType:"Column"},(0,g.kt)(o.Z,{disabled:!0,mdxType:"Switch"},"Disabled")),(0,g.kt)(l.default,{xs:"auto",mdxType:"Column"},(0,g.kt)(o.Z,{errorMessage:"Error Message",value:b,onChange:d,mdxType:"Switch"},"Error")))}),(0,g.kt)("h3",Object.assign({},{id:"utilizando-com-form"}),"Utilizando com Form"),(0,g.kt)(h.X,{__position:1,code:"() => {\n  const form = useForm({ defaultValues: { switch: true } })\n  const value = form.watch('switch')\n  return (\n    <Form context={form} onSubmit={() => {}}>\n      <Typography>Valor atual do switch: {String(value)}</Typography>\n      <br />\n      <Switch name=\"switch\" />\n    </Form>\n  )\n}",scope:{props:c,Playground:h.X,useForm:j(),Form:k.Z,Column:l.default,Row:m.default,Typography:n.default,Switch:o.Z,meta:p},mdxType:"Playground"},function(){var a=j()({defaultValues:{switch:!0}}),b=a.watch("switch");return(0,g.kt)(k.Z,{context:a,onSubmit:function(){},mdxType:"Form"},(0,g.kt)(n.default,{mdxType:"Typography"},"Valor atual do switch: ",String(b)),(0,g.kt)("br",null),(0,g.kt)(o.Z,{name:"switch",mdxType:"Switch"}))}),(0,g.kt)("table",null,(0,g.kt)("thead",{parentName:"table"},(0,g.kt)("tr",{parentName:"thead"},(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,g.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,g.kt)("tbody",{parentName:"table"},(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"name"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"string")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"true")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Necess\xe1rio quando usado dentro de um Form")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"value"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"boolean")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onChange"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"function")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"disabled"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"boolean")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,g.kt)("tr",{parentName:"tbody"},(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"errorMessage"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"string")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,g.kt)("inlineCode",{parentName:"td"},"false")),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,g.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")))))}r.isMDXComponent=!0;var s={editThisPagePath:"src/pages/ui-components/Forms/Switch/index.mdx"};for(var t in s)window[t]=s[t]},52050:function(a,b,c){"use strict";c.d(b,{Z:function(){return f}});var d=c(82126),e=c(12164);function f(a,b){return function(a){if(Array.isArray(a))return a}(a)||(0,d.Z)(a,b)||(0,e.Z)(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(a){a.O(0,[4526,3531,164,2192,9978,4633,4090,4183,4109,2123,9774,2888,179],function(){var b;return a(a.s=99890)}),_N_E=a.O()}])