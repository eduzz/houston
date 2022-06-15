(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6182],{94907:function(e,a){"use strict";const b=a=>a;let c;const d=(c=b,{configure(a){c=a},generate:a=>c(a),reset(){c=b}});a.Z=d},93772:function(c,b,a){"use strict";a.d(b,{Z:function(){return j}});var d=a(25773),e=a(30808),f=a(73143),g=a(67351);const h=["sx"],i=a=>{const b={systemProps:{},otherProps:{}};return Object.keys(a).forEach(c=>{g.Gc[c]?b.systemProps[c]=a[c]:b.otherProps[c]=a[c]}),b};function j(b){const{sx:a}=b,j=(0,e.Z)(b,h),{systemProps:c,otherProps:k}=i(j);let g;return g=Array.isArray(a)?[c,...a]:"function"==typeof a?(...e)=>{const b=a(...e);return(0,f.P)(b)?(0,d.Z)({},c,b):c}:(0,d.Z)({},c,a),(0,d.Z)({},k,{sx:g})}},17091:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Alert",function(){return c(38792)}])},54897:function(g,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(a){return function(e){var b;return b="function"==typeof a?a(h.default()):a,Object.keys(b).reduce(function(f,a){return d.objectSpread({},f,d.defineProperty({},a,c.css("function"==typeof b[a]?b[a](e):b[a])))},{})}},a.clsx=a.cx=void 0;var d=b(39037),c=b(87651),h=d.interopRequireDefault(b(75645)),e=c.cx;a.cx=e;var f=c.cx;a.clsx=f},16847:function(e,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=b(39037).interopRequireWildcard(b(96342));Object.keys(c).forEach(function(b){"default"!==b&&"__esModule"!==b&&(b in a&&a[b]===c[b]||Object.defineProperty(a,b,{enumerable:!0,get:function(){return c[b]}}))});var d=c.default;a.default=d},15176:function(k,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var b=a(39037),c=a(24246),f=b.interopRequireWildcard(a(27378)),g=b.interopRequireWildcard(a(16847)),l=b.interopRequireDefault(a(59266)),m=b.interopRequireDefault(a(98021)),d=b.interopRequireDefault(a(9232));function n(){var a=b.taggedTemplateLiteral(["\n        &.--type-"," {\n          background-color: ",";\n\n          .__icon svg {\n            fill: ",";\n          }\n        }\n      "]);return n=function(){return a},a}function o(){var a=b.taggedTemplateLiteral(["\n      padding: ",";\n      border-radius: ",";\n      display: flex;\n      flex-direction: row;\n      align-items: flex-start;\n      position: relative;\n\n      "," {\n        padding: ",";\n      }\n\n      "," {\n        &.--close-icon {\n          .__content {\n            margin-right: ","rem;\n          }\n\n          .__close {\n            position: absolute;\n            top: ",";\n            right: ",";\n            z-index: 2;\n          }\n        }\n      }\n\n      ","\n\n      .__icon {\n        line-height: 0;\n        margin: ","rem "," 0 0;\n\n        "," {\n          display: none;\n        }\n      }\n\n      .__wrapper {\n        flex: 1;\n\n        .__title {\n          margin-bottom: ",";\n\n          "," {\n            margin-bottom: ",";\n            font-size: ",";\n          }\n        }\n\n        .__action {\n          margin-top: ",";\n\n          "," {\n            margin-top: ",";\n\n            button {\n              width: 100%;\n            }\n          }\n        }\n      }\n\n      .__close {\n        line-height: 0;\n        margin: ","rem 0 0 ",";\n        cursor: pointer;\n\n        svg {\n          fill: ",";\n        }\n      }\n    "]);return o=function(){return a},a}function h(){var a=b.taggedTemplateLiteral(["\n  ","\n"]);return h=function(){return a},a}var p={informative:c.jsx(d.default.Informative,{}),positive:c.jsx(d.default.Positive,{}),negative:c.jsx(d.default.Warning,{}),warning:c.jsx(d.default.Warning,{})},i=f.forwardRef(function(a,u){var v=a.className,e=a.type,h=void 0===e?"informative":e,i=a.closeIcon,j=void 0===i||i,k=a.visible,w=a.onClose,x=a.children,n=a.title,o=a.actionProps,q=void 0===o?{}:o,y=b.objectWithoutProperties(a,["className","type","closeIcon","visible","onClose","children","title","actionProps"]),r=b.slicedToArray(f.useState(!0),2),z=r[0],C=r[1],s=void 0!==k,t=q.text,A=b.objectWithoutProperties(q,["text"]),B=f.useCallback(function(a){s||C(!1),w&&w(a)},[s,w]);return(s?k:z)?c.jsxs("div",b.objectSpread({},y,{ref:u,role:"alert",className:g.cx(v,"--type-".concat(h),{"--close-icon":j}),children:[c.jsx("span",{role:"img",className:"__icon",children:p[h]}),c.jsxs("div",{className:"__wrapper",children:[c.jsxs("div",{className:"__content",children:[n&&c.jsx(m.default,{color:"neutralColor.low.pure",weight:"semibold",size:"md",lineHeight:"default",className:"__title",children:n}),c.jsx(m.default.Paragraph,{color:"neutralColor.low.pure",size:"sm",lineHeight:"lg",children:x})]}),!!t&&c.jsx("div",{className:"__action",children:c.jsx(l.default,b.objectSpread({},A,{children:t}))})]}),j&&c.jsx("span",{role:"button",className:"__close",onClick:B,children:c.jsx(d.default.Close,{})})]})):null}),j=g.default(i,{label:"houston-alert"})(h(),function(b){var a=b.theme,c=a.remToPx(a.cleanUnit(a.spacing.inline.nano))+16,d=[];return Object.keys(a.feedbackColor).forEach(function(b){return d.push(g.css(n(),b,a.feedbackColor[b].light,a.feedbackColor[b].pure))}),g.css(o(),a.spacing.inset.sm,a.border.radius.sm,a.breakpoints.down("md"),a.spacing.inset.xs,a.breakpoints.down("md"),a.pxToRem(c),a.spacing.inset.xs,a.spacing.inset.xs,d,a.pxToRem(2),a.spacing.inline.xxxs,a.breakpoints.down("md"),a.spacing.stack.xxxs,a.breakpoints.down("md"),a.spacing.stack.nano,a.font.size.sm,a.spacing.stack.xxxs,a.breakpoints.down("md"),a.spacing.stack.xxs,a.pxToRem(4),a.spacing.inline.xxxs,a.neutralColor.low.pure)});e.default=j},9232:function(c,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var d=b(24246);a.default={Informative:function(){return d.jsx("svg",{width:"20",height:"20",focusable:!1,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10 4C10.3414 4 10.635 4.08027 10.881 4.2408C11.127 4.39632 11.25 4.6898 11.25 5.12123C11.25 5.54766 11.127 5.84364 10.881 6.00919C10.635 6.16973 10.3414 6.25 10 6.25C9.65361 6.25 9.35743 6.16973 9.11144 6.00919C8.87048 5.84364 8.75 5.54766 8.75 5.12123C8.75 4.6898 8.87048 4.39632 9.11144 4.2408C9.35743 4.08027 9.65361 4 10 4ZM11.125 7.5V16H8.875V7.5H11.125Z"})})},Positive:function(){return d.jsx("svg",{width:"20",height:"20",focusable:!1,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM16.1889 7.87176C16.4818 7.57887 16.4818 7.10399 16.1889 6.8111C15.896 6.51821 15.4211 6.51821 15.1282 6.8111L8.5 13.4393L4.78517 9.72452C4.49228 9.43162 4.01741 9.43162 3.72451 9.72452C3.43162 10.0174 3.43162 10.4923 3.72451 10.7852L7.61612 14.6768C8.10427 15.1649 8.89573 15.1649 9.38388 14.6768L16.1889 7.87176Z"})})},Warning:function(){return d.jsx("svg",{width:"22",height:"19",focusable:!1,viewBox:"0 0 22 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.0802 0.620443C11.5978 -0.206814 10.4022 -0.206815 9.91976 0.620442L0.297077 17.1203C-0.188946 17.9537 0.412367 19 1.37732 19H20.6227C21.5876 19 22.1889 17.9537 21.7029 17.1203L12.0802 0.620443ZM10.0454 7.99897C10.0205 7.45475 10.4551 7 11 7C11.5449 7 11.9795 7.45475 11.9546 7.99897L11.7842 11.7508C11.7651 12.17 11.4194 12.5 11 12.5C10.5806 12.5 10.2349 12.17 10.2158 11.7508L10.0454 7.99897ZM12 15C12 15.5523 11.5522 16 11 16C10.4478 16 10 15.5523 10 15C10 14.4477 10.4478 14 11 14C11.5522 14 12 14.4477 12 15Z"})})},Close:function(){return d.jsx("svg",{width:"16",height:"16",focusable:!1,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.12224 0.84467C1.82935 0.551777 1.35447 0.551777 1.06158 0.84467C0.768687 1.13756 0.768687 1.61244 1.06158 1.90533L6.93937 7.78312L0.84467 13.8778C0.551777 14.1707 0.551777 14.6456 0.84467 14.9385C1.13756 15.2314 1.61244 15.2314 1.90533 14.9385L8.00003 8.84378L14.0679 14.9116C14.3608 15.2045 14.8357 15.2045 15.1285 14.9116C15.4214 14.6187 15.4214 14.1439 15.1285 13.851L9.06069 7.78312L14.9116 1.93217C15.2045 1.63928 15.2045 1.16441 14.9116 0.871513C14.6187 0.57862 14.1439 0.57862 13.851 0.871513L8.00003 6.72246L2.12224 0.84467Z"})})}}},25496:function(d,a,b){"use strict";a.Z=void 0;var c=b(39037).interopRequireDefault(b(15176)).default;a.Z=c},62550:function(f,c,a){"use strict";c.Z=void 0;var b=a(39037),g=a(24246),d=b.interopRequireWildcard(a(27378)),h=b.interopRequireDefault(a(54964)),i=a(16847),j=b.interopRequireDefault(a(55869)),e=d.memo(function(a){var d=a.children,e=a.className,f=a.paper,k=b.objectWithoutProperties(a,["children","className","paper"]),c=j.default(a);return g.jsx(h.default,b.objectSpread({},k,{className:i.cx(e,c.box,f&&c.paper),children:d}))});c.Z=e},55869:function(e,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=b(39037),d=c.interopRequireDefault(b(54897)).default(function(a){return{box:function(d){var b,e=d.xs,f=d.sm,g=d.md,h=d.lg,i=d.xl;return b={},c.defineProperty(b,a.breakpoints.up("xs"),{padding:null==e?void 0:e.padding,margin:null==e?void 0:e.margin}),c.defineProperty(b,a.breakpoints.up("sm"),{padding:null==f?void 0:f.padding,margin:null==f?void 0:f.margin}),c.defineProperty(b,a.breakpoints.up("md"),{padding:null==g?void 0:g.padding,margin:null==g?void 0:g.margin}),c.defineProperty(b,a.breakpoints.up("lg"),{padding:null==h?void 0:h.padding,margin:null==h?void 0:h.margin}),c.defineProperty(b,a.breakpoints.up("xlg"),{padding:null==i?void 0:i.padding,margin:null==i?void 0:i.margin}),b},paper:{background:"#fff",borderRadius:4}}});a.default=d},59266:function(f,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),g=a(24246);c.interopRequireWildcard(a(27378));var d=c.interopRequireWildcard(a(16847)),h=c.interopRequireDefault(a(72150));function i(){var a=c.taggedTemplateLiteral(["\n    border: none;\n    cursor: pointer;\n    text-transform: none;\n    height: ","rem;\n    min-width: ","rem;\n    padding: ",";\n    border-radius: ",";\n    font-weight: ",";\n    font-family: ",";\n    line-height: ",";\n    font-size: ",";\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    :not(:focus) {\n      transition: 0.3s;\n    }\n\n    :focus {\n      outline: solid "," ",";\n    }\n\n    &.--contained {\n      background-color: ",";\n      color: ",";\n\n      &:hover:not(:disabled),\n      &:focus {\n        background-color: ",";\n      }\n    }\n\n    &.--outlined {\n      background-color: transparent;\n      border: "," solid;\n      border-color: ",";\n      color: ",";\n\n      &:hover:not(:disabled),\n      &:focus {\n        background-color: ",";\n      }\n    }\n\n    &.--text {\n      background-color: ",";\n      color: ",";\n\n      &:hover:not(:disabled),\n      &:focus {\n        background-color: ",";\n      }\n    }\n\n    &.--disabled {\n      border: none;\n      background-color: ",";\n      color: ",";\n      cursor: default;\n    }\n\n    &.--fullWidth {\n      width: 100%;\n    }\n\n    & > .__loader {\n      position: absolute;\n      left: 50%;\n      transform: translate(-50%, 0);\n    }\n\n    & > .--hidden {\n      visibility: hidden;\n    }\n\n    & > .__startIcon {\n      margin-right: ",";\n    }\n\n    & > .__endIcon {\n      margin-left: ",";\n    }\n\n    & > .__startIcon > svg,\n    & > .__endIcon > svg {\n      vertical-align: middle;\n      font-size: ","rem;\n    }\n  "]);return i=function(){return a},a}var e=d.default(function(a){var f=a.children,i=a.disabled,e=void 0!==i&&i,j=a.startIcon,k=a.endIcon,l=a.variant,m=a.loading,b=void 0!==m&&m,n=a.className,o=a.fullWidth,p=c.objectWithoutProperties(a,["children","disabled","startIcon","endIcon","variant","loading","className","fullWidth"]);return g.jsxs("button",c.objectSpread({role:"button",className:d.cx(n,"--".concat(null!=l?l:"contained"),{"--fullWidth":o},{"--disabled":e})},p,{disabled:e||b,"aria-disabled":e,children:[!!j&&g.jsx("span",{className:d.cx("__startIcon",{"--hidden":b}),children:j}),!b&&g.jsx("span",{className:"__text",children:f}),b&&g.jsxs(g.Fragment,{children:[g.jsx("span",{className:"__loader",children:g.jsx(h.default,{size:20,color:"inherit"})}),g.jsx("span",{className:"__text --hidden",children:f})]}),!!k&&g.jsx("span",{className:d.cx("__endIcon",{"--hidden":b}),children:k})]}))},{label:"houston-button"})(function(b){var a=b.theme;return d.css(i(),a.pxToRem(48),a.pxToRem(96),a.spacing.squish.xxs,a.border.radius.xs,a.font.weight.semibold,a.font.family.base,a.line.height.default,a.font.size.xs,a.border.width.sm,a.feedbackColor.informative.pure,a.brandColor.primary.pure,a.neutralColor.high.pure,a.hexToRgba(a.brandColor.primary.pure,a.opacity.level[8]),a.border.width.xs,a.neutralColor.low.pure,a.neutralColor.low.pure,a.hexToRgba(a.neutralColor.low.pure,a.opacity.level[2]),a.hexToRgba(a.neutralColor.low.pure,a.opacity.level[0]),a.neutralColor.low.pure,a.hexToRgba(a.neutralColor.low.pure,a.opacity.level[2]),a.hexToRgba(a.neutralColor.low.pure,a.opacity.level[2]),a.hexToRgba(a.neutralColor.low.pure,a.opacity.level[6]),a.spacing.inline.nano,a.spacing.inline.nano,a.pxToRem(24))});b.default=e},72150:function(h,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),i=a(24246);c.interopRequireWildcard(a(27378));var d=c.interopRequireWildcard(a(16847)),j=c.interopRequireDefault(a(79955));function e(){var a=c.taggedTemplateLiteral(["\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(270deg); }\n"]);return e=function(){return a},a}function k(){var a=c.taggedTemplateLiteral(["\n  0% { stroke-dashoffset: ","; }\n  50% { stroke-dashoffset: ","; transform: rotate(135deg); }\n  100% { stroke-dashoffset: ","; transform: rotate(450deg); }\n"]);return k=function(){return a},a}function l(){var a=c.taggedTemplateLiteral(["\n    animation: "," 1.4s linear infinite;\n    color: ",";\n\n    & > circle {\n      stroke: currentColor;\n      stroke-width: ",";\n      stroke-dasharray: ",";\n      stroke-dashoffset: 0;\n      transform-origin: center;\n      animation: "," 1.4s ease-in-out infinite;\n    }\n  "]);return l=function(){return a},a}function f(){var a=c.taggedTemplateLiteral(["\n  ","\n"]);return f=function(){return a},a}var m=d.keyframes(e()),g=d.default(function(c){var e=c.className,d=c.size,a=void 0===d?65:d,b=a/65*30;return i.jsx("svg",{className:e,width:"".concat(a,"px"),height:"".concat(a,"px"),viewBox:"0 0 ".concat(a+1," ").concat(a+1),children:i.jsx("circle",{fill:"none",strokeLinecap:"round",cx:b+.1*b,cy:b+.1*b,r:b})})},{label:"houston-loader"})(f(),function(b){var a,g=b.theme,e=b.color,f=b.size,c=void 0===f?65:f;return d.css(l(),m,"inherit"===e?"inherit":j.default(g,e).pure,c/65*6,c/65*187,(a=c,d.keyframes(k(),a/65*187,a/65*46.75,a/65*187)))});b.default=g},10576:function(f,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),g=a(24246),d=c.interopRequireWildcard(a(27378)),h=c.interopRequireDefault(a(98021)),e=d.forwardRef(function(a,d){var b=a.as,e=a.children,f=c.objectWithoutProperties(a,["as","children"]);return g.jsx(h.default,c.objectSpread({as:void 0===b?"figcaption":b,ref:d,size:"xxs"},f,{children:e}))});b.default=e},42665:function(f,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var b=a(39037),g=a(24246),d=b.interopRequireWildcard(a(27378)),h=b.interopRequireDefault(a(75645)),i=b.interopRequireDefault(a(98021)),j=b.interopRequireDefault(a(33205)),k={h1:"giant",h2:"xxxl",h3:"xxl",h4:"lg",h5:"md",h6:"xs",display:"giant",xl:"xxxl",lg:"xxl",md:"lg",sm:"md",xs:"xs"},l={h1:"xxxl",h2:"xxl",h3:"lg",h4:"md",h5:"sm",h6:"xs",display:"xxxl",xl:"xxl",lg:"lg",md:"md",sm:"sm",xs:"xs"},m={h1:"regular",h2:"regular",h3:"semibold",h4:"semibold",h5:"semibold",h6:"bold",display:"regular",xl:"regular",lg:"semibold",md:"semibold",sm:"semibold",xs:"bold"},e=d.forwardRef(function(a,n){var e=a.as,d=void 0===e?"h1":e,o=a.children,c=a.size,p=b.objectWithoutProperties(a,["as","children","size"]),q=h.default().breakpoints,r=j.default(q.down("sm")),f=r?l:k,s=c?f[c]:f[d],t=c?m[c]:m[d];return g.jsx(i.default,b.objectSpread({as:d,ref:n,size:s,weight:t},p,{children:o}))});c.default=e},35323:function(f,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var b=a(39037),g=a(24246),d=b.interopRequireWildcard(a(27378)),h=b.interopRequireDefault(a(75645)),i=b.interopRequireDefault(a(98021)),j=b.interopRequireDefault(a(33205)),k={lg:"sm",sm:"xs"},l={lg:"sm",sm:"xs"},e=d.forwardRef(function(a,f){var c=a.as,m=a.children,d=a.size,e=void 0===d?"lg":d,n=b.objectWithoutProperties(a,["as","children","size"]),o=h.default().breakpoints,p=j.default(o.down("sm")),q=(p?l:k)[e];return g.jsx(i.default,b.objectSpread({as:void 0===c?"p":c,ref:f,size:q,lineHeight:e},n,{children:m}))});c.default=e},24097:function(f,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var b=a(39037),g=a(24246),d=b.interopRequireWildcard(a(27378)),h=b.interopRequireDefault(a(75645)),i=b.interopRequireDefault(a(98021)),j=b.interopRequireDefault(a(33205)),k={lg:"lg",sm:"md"},l={lg:"md",sm:"sm"},e=d.forwardRef(function(a,e){var c=a.as,f=a.children,d=a.size,m=b.objectWithoutProperties(a,["as","children","size"]),n=h.default().breakpoints,o=j.default(n.down("sm")),p=(o?l:k)[void 0===d?"lg":d];return g.jsx(i.default,b.objectSpread({as:void 0===c?"h2":c,ref:e,size:p},m,{children:f}))});c.default=e},98021:function(o,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var b=a(39037),p=a(24246),d=b.interopRequireWildcard(a(27378)),e=b.interopRequireWildcard(a(96342)),f=b.interopRequireDefault(a(40772)),q=b.interopRequireDefault(a(27322)),g=b.interopRequireDefault(a(10576)),h=b.interopRequireDefault(a(42665)),i=b.interopRequireDefault(a(35323)),j=b.interopRequireDefault(a(24097));function r(){var a=b.taggedTemplateLiteral(["\n        margin-bottom: ",";\n      "]);return r=function(){return a},a}function s(){var a=b.taggedTemplateLiteral(["\n      margin: 0;\n      font-size: ",";\n      font-weight: ",";\n      line-height: ",";\n      color: ",";\n\n      ","\n    "]);return s=function(){return a},a}function k(){var a=b.taggedTemplateLiteral(["\n  ","\n"]);return k=function(){return a},a}var l=d.forwardRef(function(c,e){var d=c.as,f=c.className,a=b.objectWithoutProperties(c,["as","className"]);a.size,a.lineHeight,a.weight,a.marginBottom,a.color;var g=b.objectWithoutProperties(a,["size","lineHeight","weight","marginBottom","color"]);return p.jsx(void 0===d?"p":d,b.objectSpread({ref:e,className:f},g))}),m=e.default(l)(k(),function(a){var c=a.theme,f=a.size,g=a.lineHeight,h=a.weight,i=a.color,d=a.marginBottom;return e.css(s(),c.font.size[void 0===f?"xs":f],c.font.weight[void 0===h?"regular":h],c.line.height[void 0===g?"md":g],function(f,a){if("inherit"===a)return"inherit";if("primary"===a)return f.brandColor.primary.pure;var c,d,e=b.slicedToArray(a.split("."),3),h=e[0],i=e[1],j=e[2],g=null===(c=f[h])|| void 0===c?void 0:null===(d=c[i])|| void 0===d?void 0:d[j];return g||q.default("Typography","invalid color ".concat(a)),g}(c,void 0===i?"neutralColor.low.pure":i),d&&e.css(r(),"boolean"==typeof d?c.spacing.nano:c.spacing[d]))}),n=f.default(m,{Caption:g.default,Heading:h.default,Paragraph:i.default,Subtitle:j.default});c.default=n},79955:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(b){var a=arguments.length>1&& void 0!==arguments[1]?arguments[1]:"primary";return["low","high"].includes(a)?b.neutralColor[a]:["positive","negative","warning","informative"].includes(a)?b.feedbackColor[a]:b.brandColor[a]}},40772:function(c,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(a,b){return Object.keys(b).forEach(function(c){a[c]=b[c]}),a},b(39037).interopRequireWildcard(b(27378))},27322:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(a,b){console.warn("\u26A0\uFE0F Houston(".concat(a,"): ").concat(b))}},38792:function(g,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return f},meta:function(){return e}});var h=a(27378),i=a(35318),j=a(56100),k=a(62550),l=a(59266),m=a(25496);function n(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}var e={name:"Alert",tableOfContents:{depth:0,children:[{depth:1,slug:"#alert",title:"Alert",children:[{depth:2,children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"},{depth:3,slug:"#varia\xe7\xf5es",title:"Varia\xe7\xf5es"},{depth:3,slug:"#gerenci\xe1vel",title:"Gerenci\xe1vel"},{depth:3,slug:"#a\xe7\xe3o",title:"A\xe7\xe3o"},{depth:3,slug:"#alert-props",title:"Alert props"}]}]}]}},o={meta:e};function f(b){var c=b.components,a=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(b,["components"]);return(0,i.kt)("wrapper",Object.assign({},o,a,{components:c,mdxType:"MDXLayout"}),(0,i.kt)("h1",Object.assign({},{id:"alert"}),"Alert"),(0,i.kt)("p",null,"Pode ser utilizado para mostrar mensagens de atualiza\xe7\xf5es para os usu\xe1rios, sejam atualiza\xe7\xf5es de seguran\xe7a ou\nde interface. O objetivo \xe9 avisar e n\xe3o guiar o caminho para o usu\xe1rio."),(0,i.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import Alert from '@eduzz/houston-ui/Alert';\n")),(0,i.kt)("h3",Object.assign({},{id:"exemplo"}),"Exemplo"),(0,i.kt)(j.X,{__position:0,code:"<Alert title=\"Aten\xe7\xe3o!!!\" actionProps={{ text: 'A\xe7\xe3o customizada' }}>\n  Alert pode ser utilizado para mostrar mensagens de atualiza\xe7\xf5es para os\n  usu\xe1rios, sejam atualiza\xe7\xf5es de seguran\xe7a ou de interface. O objetivo \xe9\n  avisar e n\xe3o guiar o caminho para o usu\xe1rio.\n</Alert>",scope:{props:a,Playground:j.X,Box:k.Z,Button:l.default,Alert:m.Z,meta:e},mdxType:"Playground"},(0,i.kt)(m.Z,{title:"Aten\xe7\xe3o!!!",actionProps:{text:"A\xe7\xe3o customizada"},mdxType:"Alert"},"Alert pode ser utilizado para mostrar mensagens de atualiza\xe7\xf5es para os usu\xe1rios, sejam atualiza\xe7\xf5es de seguran\xe7a ou de interface. O objetivo \xe9 avisar e n\xe3o guiar o caminho para o usu\xe1rio.")),(0,i.kt)("h3",Object.assign({},{id:"varia\xe7\xf5es"}),"Varia\xe7\xf5es"),(0,i.kt)("p",null,"Valores dispon\xedveis: ",(0,i.kt)("inlineCode",{parentName:"p"},"informative"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"positive"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"negative")," e ",(0,i.kt)("inlineCode",{parentName:"p"},"warning"),". Padr\xe3o ",(0,i.kt)("inlineCode",{parentName:"p"},"informative"),"."),(0,i.kt)(j.X,{__position:1,code:"<Box xs={{ margin: '5px 0' }}>\n  <Alert>\n    Alert pode ser utilizado para mostrar mensagens de atualiza\xe7\xf5es para os\n    usu\xe1rios, sejam atualiza\xe7\xf5es de seguran\xe7a ou de interface. O objetivo \xe9\n    avisar e n\xe3o guiar o caminho para o usu\xe1rio.\n  </Alert>\n</Box>\n<Box xs={{ margin: '5px 0' }}>\n  <Alert type=\"positive\">\n    Alert pode ser utilizado para mostrar mensagens de atualiza\xe7\xf5es para os\n    usu\xe1rios, sejam atualiza\xe7\xf5es de seguran\xe7a ou de interface. O objetivo \xe9\n    avisar e n\xe3o guiar o caminho para o usu\xe1rio.\n  </Alert>\n</Box>\n<Box xs={{ margin: '5px 0' }}>\n  <Alert type=\"negative\">\n    Alert pode ser utilizado para mostrar mensagens de atualiza\xe7\xf5es para os\n    usu\xe1rios, sejam atualiza\xe7\xf5es de seguran\xe7a ou de interface. O objetivo \xe9\n    avisar e n\xe3o guiar o caminho para o usu\xe1rio.\n  </Alert>\n</Box>\n<Box xs={{ margin: '5px 0' }}>\n  <Alert type=\"warning\">\n    Alert pode ser utilizado para mostrar mensagens de atualiza\xe7\xf5es para os\n    usu\xe1rios, sejam atualiza\xe7\xf5es de seguran\xe7a ou de interface. O objetivo \xe9\n    avisar e n\xe3o guiar o caminho para o usu\xe1rio.\n  </Alert>\n</Box>",scope:{props:a,Playground:j.X,Box:k.Z,Button:l.default,Alert:m.Z,meta:e},mdxType:"Playground"},(0,i.kt)(k.Z,{xs:{margin:"5px 0"},mdxType:"Box"},(0,i.kt)(m.Z,{mdxType:"Alert"},"Alert pode ser utilizado para mostrar mensagens de atualiza\xe7\xf5es para os usu\xe1rios, sejam atualiza\xe7\xf5es de seguran\xe7a ou de interface. O objetivo \xe9 avisar e n\xe3o guiar o caminho para o usu\xe1rio.")),(0,i.kt)(k.Z,{xs:{margin:"5px 0"},mdxType:"Box"},(0,i.kt)(m.Z,{type:"positive",mdxType:"Alert"},"Alert pode ser utilizado para mostrar mensagens de atualiza\xe7\xf5es para os usu\xe1rios, sejam atualiza\xe7\xf5es de seguran\xe7a ou de interface. O objetivo \xe9 avisar e n\xe3o guiar o caminho para o usu\xe1rio.")),(0,i.kt)(k.Z,{xs:{margin:"5px 0"},mdxType:"Box"},(0,i.kt)(m.Z,{type:"negative",mdxType:"Alert"},"Alert pode ser utilizado para mostrar mensagens de atualiza\xe7\xf5es para os usu\xe1rios, sejam atualiza\xe7\xf5es de seguran\xe7a ou de interface. O objetivo \xe9 avisar e n\xe3o guiar o caminho para o usu\xe1rio.")),(0,i.kt)(k.Z,{xs:{margin:"5px 0"},mdxType:"Box"},(0,i.kt)(m.Z,{type:"warning",mdxType:"Alert"},"Alert pode ser utilizado para mostrar mensagens de atualiza\xe7\xf5es para os usu\xe1rios, sejam atualiza\xe7\xf5es de seguran\xe7a ou de interface. O objetivo \xe9 avisar e n\xe3o guiar o caminho para o usu\xe1rio."))),(0,i.kt)("h3",Object.assign({},{id:"gerenci\xe1vel"}),"Gerenci\xe1vel"),(0,i.kt)("p",null,"Controle a exibi\xe7\xe3o pela prop ",(0,i.kt)("inlineCode",{parentName:"p"},"visible"),"."),(0,i.kt)(j.X,{__position:2,code:"() => {\n  const [visible, setVisible] = React.useState(true)\n  const toggle = () => setVisible((v) => !v)\n  return (\n    <>\n      <Box xs={{ margin: '5px 0' }}>\n        <Alert visible={visible}>\n          Alert pode ser utilizado para mostrar mensagens de atualiza\xe7\xf5es para\n          os usu\xe1rios, sejam atualiza\xe7\xf5es de seguran\xe7a ou de interface. O\n          objetivo \xe9 avisar e n\xe3o guiar o caminho para o usu\xe1rio.\n        </Alert>\n      </Box>\n      <Button onClick={toggle}>Mostrar/esconder</Button>\n    </>\n  )\n}",scope:{props:a,Playground:j.X,Box:k.Z,Button:l.default,Alert:m.Z,meta:e},mdxType:"Playground"},function(){var a,b,c=(a=h.useState(!0),b=2,function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||function(a,c){if(a){if("string"==typeof a)return n(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return n(a,c)}}(a,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=c[0],e=c[1];return(0,i.kt)(h.Fragment,null,(0,i.kt)(k.Z,{xs:{margin:"5px 0"},mdxType:"Box"},(0,i.kt)(m.Z,{visible:d,mdxType:"Alert"},"Alert pode ser utilizado para mostrar mensagens de atualiza\xe7\xf5es para os usu\xe1rios, sejam atualiza\xe7\xf5es de seguran\xe7a ou de interface. O objetivo \xe9 avisar e n\xe3o guiar o caminho para o usu\xe1rio.")),(0,i.kt)(l.default,{onClick:function(){return e(function(a){return!a})},mdxType:"Button"},"Mostrar/esconder"))}),(0,i.kt)("h3",Object.assign({},{id:"a\xe7\xe3o"}),"A\xe7\xe3o"),(0,i.kt)("p",null,"\xc9 poss\xedvel adicionar apenas uma a\xe7\xe3o (CTA). A prop ",(0,i.kt)("inlineCode",{parentName:"p"},"actionProps")," disponibiliza todas as props do componente Button."),(0,i.kt)(j.X,{__position:3,code:"<Alert\n  actionProps={{\n    text: 'A\xe7\xe3o customizada',\n    onClick: () => alert('Houston \u2764\uFE0F'),\n  }}\n>\n  Alert pode ser utilizado para mostrar mensagens de atualiza\xe7\xf5es para os\n  usu\xe1rios, sejam atualiza\xe7\xf5es de seguran\xe7a ou de interface. O objetivo \xe9\n  avisar e n\xe3o guiar o caminho para o usu\xe1rio.\n</Alert>",scope:{props:a,Playground:j.X,Box:k.Z,Button:l.default,Alert:m.Z,meta:e},mdxType:"Playground"},(0,i.kt)(m.Z,{actionProps:{text:"A\xe7\xe3o customizada",onClick:function(){return alert("Houston \u2764\uFE0F")}},mdxType:"Alert"},"Alert pode ser utilizado para mostrar mensagens de atualiza\xe7\xf5es para os usu\xe1rios, sejam atualiza\xe7\xf5es de seguran\xe7a ou de interface. O objetivo \xe9 avisar e n\xe3o guiar o caminho para o usu\xe1rio.")),(0,i.kt)("h3",Object.assign({},{id:"alert-props"}),"Alert props"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"type"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"AlertTypes")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"informative")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"title"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"closeIcon"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Se ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),", o \xedcone (x) ser\xe1 ocultado.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"visible"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Controle de exibi\xe7\xe3o.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"actionProps"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"AlertAction")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Se houver valor na prop ",(0,i.kt)("inlineCode",{parentName:"td"},"text"),", ser\xe1 renderizado o bot\xe3o.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"onClose"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"function")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")))))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/ui-components/Alert/index.mdx"};for(var d in c)window[d]=c[d]},54964:function(g,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return r}});var h=a(25773),i=a(30808),j=a(27378),k=a(38944),l=a(89966),m=a(11652),n=a(93772),o=a(96206),p=a(24246);const q=["className","component"];var c=a(94907),d=a(69260),e=(0,d.Z)(),f=function(a={}){const{defaultTheme:d,defaultClassName:e="MuiBox-root",generateClassName:f,styleFunctionSx:b=m.Z}=a,g=(0,l.ZP)("div")(b),c=j.forwardRef(function(b,c){const j=(0,o.Z)(d),a=(0,n.Z)(b),{className:l,component:m="div"}=a,r=(0,i.Z)(a,q);return(0,p.jsx)(g,(0,h.Z)({as:m,ref:c,className:(0,k.Z)(l,f?f(e):e),theme:j},r))});return c}({defaultTheme:e,defaultClassName:"MuiBox-root",generateClassName:c.Z.generate}),r=f}},function(a){a.O(0,[4526,7672,9961,7978,9774,2888,179],function(){return a(a.s=17091)}),_N_E=a.O()}])