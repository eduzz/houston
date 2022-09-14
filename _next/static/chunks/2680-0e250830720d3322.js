"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2680],{42680:function(a,b,c){Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return t}});var d=c(24246),e=n(c(27378)),f=n(c(12103)),g=l(c(92984)),h=l(c(98594)),i=l(c(42123));function j(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function k(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function l(a){return a&&a.__esModule?a:{default:a}}function m(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(m=function(a){return a?c:b})(a)}function n(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=m(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}function o(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function p(){var a=o(["\n          &.hst-input-multiline-rows-"," .hst-input-wrapper-auto-sizer {\n            min-height: calc(","px + ",");\n          }\n        "]);return p=function(){return a},a}function q(){var a=o(["\n    & .hst-input-wrapper-auto-sizer {\n      display: grid;\n      grid-template-columns: 100%;\n      width: 100%;\n      min-height: 100%;\n\n      & .hst-input-auto-sizer {\n        pointer-events: none;\n        white-space: pre-wrap;\n        word-wrap: break-word;\n        word-break: break-all;\n        visibility: hidden;\n        grid-area: 1 / 1 / 2 / 2;\n      }\n\n      & .hst-input-input {\n        grid-area: 1 / 1 / 2 / 2;\n        height: 100%;\n        width: 100%;\n        background-color: transparent;\n        outline: none;\n        color: ",";\n        border: none;\n        transition: 0.3s;\n\n        &::placeholder {\n          color: ",";\n        }\n      }\n    }\n\n    &.hst-input-multiline {\n      & .hst-fieldset-container {\n        align-items: flex-start;\n        height: auto;\n\n        & .hst-fieldset-start-adornment,\n        & .hst-fieldset-end-adornment {\n          align-items: flex-start;\n          margin-top: ",";\n        }\n\n        & .hst-input-input {\n          resize: none;\n          overflow: hidden;\n        }\n\n        & .hst-fieldset-auto-sizer,\n        & .hst-input-input {\n          padding: ",";\n        }\n      }\n\n      &.hst-input-disable-auto-resize {\n        & .hst-input-input {\n          overflow: auto;\n        }\n      }\n\n      ","\n    }\n\n    &.hst-input-disabled {\n      & .hst-input-label,\n      & .hst-input-input {\n        cursor: not-allowed;\n      }\n    }\n\n    &.hst-input-loading {\n      & .hst-input-label,\n      & .hst-input-input {\n        cursor: progress;\n      }\n    }\n  "]);return q=function(){return a},a}var r=[2,4,6,8,10,14,18,24],s=e.forwardRef(function(a,b){var c,i,l,m,n,o=a.label,p=a.mask,q=a.value,r=a.name,s=a.loading,t=a.onFocus,u=a.onChange,v=a.onBlur,w=a.errorMessage,x=a.fullWidth,y=a.endAdornment,z=a.startAdornment,A=a.multiline,B=a.size,C=a.rows,D=a.disableAutoResize,E=a.className,F=a.readOnly,G=a.onPressEnter,H=a.onKeyPress,I=a.helperText,J=a.disabled,K=void 0!==J&&J,L=a.nativeChangeEvent,M=a.type,N=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["label","mask","value","name","loading","onFocus","onChange","onBlur","errorMessage","fullWidth","endAdornment","startAdornment","multiline","size","rows","disableAutoResize","className","readOnly","onPressEnter","onKeyPress","helperText","disabled","nativeChangeEvent","type"]),O=(i=e.useState(!1),l=2,function(a){if(Array.isArray(a))return a}(i)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(i,l)||function a(b,c){if(b){if("string"==typeof b)return j(b,c);var d=Object.prototype.toString.call(b).slice(8,-1);if("Object"===d&&b.constructor&&(d=b.constructor.name),"Map"===d||"Set"===d)return Array.from(d);if("Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return j(b,c)}}(i,l)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),P=O[0],Q=O[1],R=(0,g.default)(p,q),S=R.maskClean,T=R.maskedValue,U=e.useCallback(function(a){if(L){u&&u(a,a);return}var b=S(a.currentTarget.value);u&&u(""===b?null:b,a)},[L,S,u]),V=e.useCallback(function(a){t&&t(a),Q(!0)},[t]),W=e.useCallback(function(a){v&&v(S(a.currentTarget.value),a),Q(!1)},[v,S]),X=e.useCallback(function(a){var b=a.target;"Enter"===a.key&&(a.preventDefault(),G&&G(S(b.value)))},[G,S]);return(0,d.jsx)(h.default,{label:o,size:B,loading:s,focused:P,errorMessage:w,fullWidth:x,endAdornment:y,startAdornment:z,helperText:I,disabled:K,hidden:"hidden"===M,className:(0,f.cx)(E,(c={"hst-input-multiline":A},k(c,"hst-input-multiline-rows-".concat(null!=C?C:4),A),k(c,"hst-input-disable-auto-resize",D),c)),children:(0,d.jsxs)("div",{className:"hst-input-wrapper-auto-sizer",children:[!!A&&!D&&(0,d.jsx)("div",{className:"hst-input-auto-sizer hst-input-text",children:q+" "}),e.createElement(A?"textarea":"input",(m=function(a){for(var b=arguments,c=1;c<arguments.length;c++)!function(c){var d=null!=b[c]?b[c]:{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),e.forEach(function(b){k(a,b,d[b])})}(c);return a}({ref:b,value:null!=T?T:""},N),n=(n={name:r,disabled:K,type:M,className:"hst-input-input hst-input-text",readOnly:null!=F?F:s,onChange:U,onFocus:V,onBlur:W,onKeyPress:G?X:H},n),Object.getOwnPropertyDescriptors?Object.defineProperties(m,Object.getOwnPropertyDescriptors(n)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(n)).forEach(function(a){Object.defineProperty(m,a,Object.getOwnPropertyDescriptor(n,a))}),m))]})})}),t=(0,f.default)((0,i.default)(e.memo(s)),{label:"hst-input"})(function(a){var b=a.theme;return(0,f.css)(q(),b.neutralColor.low.pure,b.neutralColor.low.medium,b.spacing.xxxs,b.spacing.xxxs,r.map(function(a){return(0,f.css)(p(),a,19*a,b.spacing.xs)}))})},98594:function(a,b,c){Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return m}});var d,e=c(24246),f=j(c(27378)),g=j(c(12103)),h=(d=c(39811),d&&d.__esModule?d:{default:d});function i(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(i=function(a){return a?c:b})(a)}function j(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=i(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}function k(){var a,b,c=(a=["\n    border: none;\n    position: relative;\n    padding: 0;\n    min-width: auto;\n    transition: 0.3s;\n    display: inline-block;\n    vertical-align: top;\n\n    & > .hst-fieldset-container {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      position: relative;\n      border: "," solid ",";\n      border-radius: ",";\n      background-color: ",";\n      transition: 0.3s;\n      height: 48px;\n      box-shadow: 0 0 0 2px transparent;\n\n      & > .hst-fieldset-start-adornment,\n      & > .hst-fieldset-end-adornment {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin-top: none;\n\n        & > svg {\n          font-size: ",";\n        }\n      }\n\n      & > .hst-fieldset-content {\n        width: 100%;\n      }\n\n      & > .hst-fieldset-start-adornment {\n        margin-left: ",";\n      }\n\n      & > .hst-fieldset-end-adornment {\n        margin-right: ",";\n      }\n\n      & .hst-input-text {\n        padding: ",";\n        font-size: ",";\n        font-family: ",";\n        font-weight: ",";\n        line-height: ",";\n        text-align: left;\n      }\n    }\n\n    & > .hst-fieldset-label {\n      font-size: ",";\n      font-family: ",";\n      font-weight: ",";\n      line-height: ",";\n      margin-bottom: ",";\n      color: ",";\n      display: flex;\n      align-items: center;\n    }\n\n    & > .hst-fieldset-message {\n      display: block;\n      font-size: ",";\n      font-family: ",";\n      font-weight: ",";\n      line-height: ",";\n      color: ",";\n      margin-top: ",";\n    }\n\n    &.hst-fieldset-clickable:not(.hst-fieldset-disabled) > .hst-fieldset-container {\n      cursor: pointer;\n      user-select: none;\n    }\n\n    &.hst-fieldset-disabled {\n      opacity: ",";\n      cursor: not-allowed;\n    }\n\n    &.hst-fieldset-hidden {\n      display: none;\n    }\n\n    &:not(.hst-fieldset-disabled) > .hst-fieldset-container:hover {\n      background-color: ",";\n    }\n\n    &.hst-fieldset-loading {\n      cursor: progress;\n    }\n\n    &.hst-fieldset-focused {\n      & > .hst-fieldset-container {\n        box-shadow: 0 0 0 2px ",";\n        background-color: ",";\n      }\n    }\n\n    &.hst-fieldset-error > .hst-fieldset-container {\n      background-color: ",";\n      border-color: ",";\n    }\n\n    &.hst-fieldset-full-width {\n      width: 100%;\n    }\n\n    &.hst-fieldset-size-sm {\n      margin: 0;\n\n      & .hst-fieldset-container {\n        height: 35px;\n\n        & > .hst-fieldset-start-adornment {\n          margin-left: ",";\n        }\n\n        & > .hst-fieldset-end-adornment {\n          margin-right: ",";\n        }\n      }\n\n      & .hst-input-text,\n      & > .hst-fieldset-label {\n        font-size: ",";\n      }\n    }\n  "],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return k=function(){return c},c}var l=f.forwardRef(function(a,b){var c,d,f,i=a.id,j=a.label,k=a.loading,l=a.size,m=a.focused,n=a.errorMessage,o=a.fullWidth,p=a.endAdornment,q=a.startAdornment,r=a.className,s=a.helperText,t=a.disabled,u=a.children,v=a.containerRef,w=a.onClickContainer,x=a.hidden;return s=n||s,p=k?(0,e.jsx)(h.default,{color:"inherit",size:20}):p,(0,e.jsxs)("fieldset",{id:i,ref:b,className:(0,g.cx)(r,(c={"hst-fieldset-hidden":x,"hst-fieldset-full-width":null==o||o,"hst-fieldset-error":!!n,"hst-fieldset-disabled":t,"hst-fieldset-loading":k,"hst-fieldset-focused":m,"hst-fieldset-clickable":!!w},d="hst-fieldset-size-".concat(null!=l?l:"default"),f=!0,d in c?Object.defineProperty(c,d,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[d]=f,c)),children:[!!j&&(0,e.jsx)("label",{className:"hst-fieldset-label",children:j}),(0,e.jsxs)("div",{className:"hst-fieldset-container",ref:v,onClick:w,children:[!!q&&(0,e.jsx)("span",{className:"hst-fieldset-start-adornment",children:q}),(0,e.jsx)("div",{className:"hst-fieldset-content",children:u}),!!p&&(0,e.jsx)("span",{className:"hst-fieldset-end-adornment",children:p})]}),!!s&&(0,e.jsx)("span",{className:"hst-fieldset-message",children:s})]})}),m=(0,g.default)(l,{label:"hst-fieldset"})(function(a){var b=a.theme;return(0,g.css)(k(),b.border.width.xs,b.neutralColor.low.light,b.border.radius.xs,b.neutralColor.high.pure,b.pxToRem(24),b.spacing.xxxs,b.spacing.xxxs,b.spacing.squish.xxs,b.font.size.xs,b.font.family.base,b.font.weight.regular,b.line.height.sm,b.font.size.xs,b.font.family.base,b.font.weight.regular,b.line.height.sm,b.spacing.stack.quarck,b.neutralColor.low.pure,b.font.size.xxs,b.font.family.base,b.font.weight.regular,b.line.height.default,b.neutralColor.low.pure,b.spacing.nano,b.opacity.level[6],b.hexToRgba(b.neutralColor.low.pure,b.opacity.level[2]),b.feedbackColor.informative.pure,b.hexToRgba(b.neutralColor.low.pure,b.opacity.level[2]),b.hexToRgba(b.feedbackColor.negative.pure,b.opacity.level[2]),b.feedbackColor.negative.pure,b.spacing.nano,b.spacing.nano,b.font.size.xxs)})},92984:function(a,b,c){Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return f}});var d=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=e(b);if(c&&c.has(a))return c.get(a);var d={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if("default"!==g&&Object.prototype.hasOwnProperty.call(a,g)){var h=f?Object.getOwnPropertyDescriptor(a,g):null;h&&(h.get||h.set)?Object.defineProperty(d,g,h):d[g]=a[g]}return d.default=a,c&&c.set(a,d),d}(c(27378));function e(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(e=function(a){return a?c:b})(a)}function f(a,b){var c=d.useMemo(function(){return null!=a?a:{apply:function(a){return a},clean:function(a){return a}}},[a]),e=c.apply,f=c.clean,g=d.useMemo(function(){return e?e(b):b},[b,e]),h=d.useMemo(function(){return f?f(b):b},[b,f]);return{maskApply:e,maskClean:f,maskedValue:g,cleanedValue:h}}}}])