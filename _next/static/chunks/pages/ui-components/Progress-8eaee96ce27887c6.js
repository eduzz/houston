(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1068,3188],{65459:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui-components/Progress",function(){return c(29049)}])},54897:function(g,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(a){return function(e){var b;return b="function"==typeof a?a(h.default()):a,Object.keys(b).reduce(function(f,a){return d.objectSpread({},f,d.defineProperty({},a,c.css("function"==typeof b[a]?b[a](e):b[a])))},{})}},a.clsx=a.cx=void 0;var d=b(39037),c=b(87651),h=d.interopRequireDefault(b(75645)),e=c.cx;a.cx=e;var f=c.cx;a.clsx=f},16847:function(e,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=b(39037).interopRequireWildcard(b(96342));Object.keys(c).forEach(function(b){"default"!==b&&"__esModule"!==b&&(b in a&&a[b]===c[b]||Object.defineProperty(a,b,{enumerable:!0,get:function(){return c[b]}}))});var d=c.default;a.default=d},96342:function(n,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.breakpoints=a.css=a.clsx=a.cx=a.keyframes=void 0;var e=b(39037),c=b(87651),d=b(10043),f=e.interopRequireDefault(b(94408)),g=b(60921),h=d.keyframes;a.keyframes=h;var i=c.cx;a.cx=i;var j=c.cx;a.clsx=j;var k=d.css;a.css=k;var l=g.breakpoinstUtils;a.breakpoints=l;var m=f.default;a.default=m},62550:function(f,c,a){"use strict";c.Z=void 0;var b=a(39037),g=a(24246),d=b.interopRequireWildcard(a(27378)),h=b.interopRequireDefault(a(54964)),i=a(16847),j=b.interopRequireDefault(a(55869)),e=d.memo(function(a){var d=a.children,e=a.className,f=a.paper,k=b.objectWithoutProperties(a,["children","className","paper"]),c=j.default(a);return g.jsx(h.default,b.objectSpread({},k,{className:i.cx(e,c.box,f&&c.paper),children:d}))});c.Z=e},55869:function(e,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=b(39037),d=c.interopRequireDefault(b(54897)).default(function(a){return{box:function(d){var b,e=d.xs,f=d.sm,g=d.md,h=d.lg,i=d.xl;return b={},c.defineProperty(b,a.breakpoints.up("xs"),{padding:null==e?void 0:e.padding,margin:null==e?void 0:e.margin}),c.defineProperty(b,a.breakpoints.up("sm"),{padding:null==f?void 0:f.padding,margin:null==f?void 0:f.margin}),c.defineProperty(b,a.breakpoints.up("md"),{padding:null==g?void 0:g.padding,margin:null==g?void 0:g.margin}),c.defineProperty(b,a.breakpoints.up("lg"),{padding:null==h?void 0:h.padding,margin:null==h?void 0:h.margin}),c.defineProperty(b,a.breakpoints.up("xlg"),{padding:null==i?void 0:i.padding,margin:null==i?void 0:i.margin}),b},paper:{background:"#fff",borderRadius:4}}});a.default=d},59266:function(f,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var b=a(39037),g=a(24246);b.interopRequireWildcard(a(27378));var d=b.interopRequireWildcard(a(16847)),h=b.interopRequireDefault(a(72150)),i=b.interopRequireDefault(a(79955));function j(){var a=b.taggedTemplateLiteral(["\n    border: none;\n    cursor: pointer;\n    text-transform: none;\n    padding: 10px 16px;\n    height: 40px;\n    border-radius: ",";\n    font-weight: ",";\n    font-family: ",";\n    line-height: ",";\n    font-size: ",";\n    position: relative;\n    transition: 0.3s;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    &.--fullWidth {\n      width: 100%;\n    }\n\n    &.--contained {\n      background-color: ",";\n      color: white;\n\n      &:hover:not(:disabled) {\n        background-color: ",";\n      }\n\n      &:active:not(:disabled) {\n        background-color: ",";\n      }\n\n      &:disabled {\n        background-color: ",";\n      }\n    }\n\n    &.--outlined {\n      background-color: transparent;\n      color: ",";\n      border: 1px solid;\n      border-color: ",";\n\n      &:hover:not(:disabled),\n      &:active:not(:disabled) {\n        border-color: ",";\n        color: ",";\n      }\n    }\n\n    &.--text {\n      background-color: transparent;\n      color: ",";\n\n      &:hover:not(:disabled),\n      &:active:not(:disabled) {\n        background-color: ",";\n      }\n    }\n\n    &:disabled {\n      cursor: default;\n      color: ",";\n      border-color: ",";\n    }\n\n    &:before {\n      content: ' ';\n      position: absolute;\n      left: -4px;\n      right: -4px;\n      top: -4px;\n      bottom: -4px;\n      border: 2px solid transparent;\n      transition: 0.3s;\n      border-radius: ",";\n    }\n\n    &:focus:not(:active):not(:hover):before {\n      border-color: ",";\n    }\n\n    & > .__loader {\n      margin-right: ",";\n    }\n\n    & > .__startIcon {\n      margin-right: ",";\n    }\n\n    & > .__endIcon {\n      margin-left: ",";\n    }\n\n    & > .__startIcon > svg,\n    & > .__endIcon > svg {\n      vertical-align: middle;\n      font-size: 17px;\n    }\n  "]);return j=function(){return a},a}var e=d.default(function(a){var e=a.children,f=a.disabled,i=a.startIcon,j=a.endIcon,k=a.variant,l=a.loading,c=void 0!==l&&l,m=a.loadingText,n=a.className,o=a.fullWidth,p=b.objectWithoutProperties(a,["children","disabled","startIcon","endIcon","variant","loading","loadingText","className","fullWidth"]);return g.jsxs("button",b.objectSpread({className:d.cx(n,"--".concat(null!=k?k:"contained"),{"--fullWidth":o})},p,{disabled:void 0!==f&&f||c,children:[!!i&&!c&&g.jsx("span",{className:"__startIcon",children:i}),!c&&g.jsx("span",{className:"__text",children:e}),c&&g.jsxs(g.Fragment,{children:[g.jsx(h.default,{size:15,color:"inherit",className:"__loader"}),g.jsx("span",{className:"__text",children:null!=m?m:e})]}),!!j&&g.jsx("span",{className:"__endIcon",children:j})]}))},{label:"houston-button"})(function(c){var a=c.theme,e=c.color,b=i.default(a,e);return d.css(j(),a.border.radius.xs,a.font.weight.bold,a.font.family.base,a.line.height.default,a.font.size.xxs,b.pure,b.light,b.dark,a.neutralColor.high.medium,b.pure,b.light,b.dark,b.dark,b.pure,a.neutralColor.high.light,a.hexToRgba(a.neutralColor.low.pure,a.opacity.level[6]),a.neutralColor.high.medium,a.border.radius.sm,a.neutralColor.high.medium,a.spacing.nano,a.spacing.nano,a.spacing.nano)});c.default=e},24885:function(f,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),g=a(24246),d=c.interopRequireWildcard(a(27378)),h=c.interopRequireDefault(a(36183)),e=d.forwardRef(function(a,b){var d=a.className,e=c.objectWithoutProperties(a,["className"]);return g.jsx(h.default,c.objectSpread({},e,{item:!0,className:d,ref:b}))});b.default=e},33272:function(h,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var b=a(39037),i=a(24246),d=b.interopRequireWildcard(a(27378)),j=b.interopRequireDefault(a(72695)),k=a(16847),e=b.interopRequireDefault(a(54897)),l=b.interopRequireDefault(a(77097)),m=e.default({root:{width:"100%",maxWidth:1062,margin:"0 auto"},comfortable:{padding:"0 18px"},cozy:{padding:"0 28px"},compact:{padding:"0 20px"},fluid:{maxWidth:"100%"}}),f=d.forwardRef(function(a,h){var n=a.children,o=a.className,e=a.spacing,f=void 0===e?"cozy":e,g=a.layout,p=b.objectWithoutProperties(a,["children","className","spacing","layout"]),c=m(),q=d.useMemo(function(){return{spacing:f}},[f]);return i.jsx(l.default,{value:q,children:i.jsx(j.default,b.objectSpread({},p,{ref:h,className:k.cx(c.root,c[f],"fluid"===(void 0===g?"solid":g)&&c.fluid,o),children:n}))})}),g=d.memo(f);c.default=g},29618:function(g,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),h=a(24246),d=c.interopRequireWildcard(a(27378)),i=c.interopRequireDefault(a(36183)),j=a(55693),k=a(77097),l=a(2293),e=d.forwardRef(function(a,b){var e=a.className,f=a.spacing,g=c.objectWithoutProperties(a,["className","spacing"]),m=j.useContextSelector(k.GridContext,function(a){return a.spacing}),n=d.useMemo(function(){var a;return l.ContainerSizes[null!==(a=null!=f?f:m)&& void 0!==a?a:"cozy"]},[m,f]);return h.jsx(i.default,c.objectSpread({},g,{container:!0,ref:b,className:e,spacing:n}))}),f=d.memo(e);b.default=f},77097:function(e,a,c){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.GridContext=void 0;var b=c(55693).createContext({});a.GridContext=b;var d=b.Provider;a.default=d},2293:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ContainerSizes=void 0,a.ContainerSizes={comfortable:10,cozy:4,compact:2}},97477:function(f,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),g=a(24246),d=c.interopRequireDefault(a(69098)),e=c.interopRequireDefault(a(96342)),h=e.default(d.default)(function(b){var a=b.theme;return{root:{height:8},colorPrimary:{backgroundColor:a.neutralColor.high.light},bar:{height:80,backgroundColor:a.feedbackColor.positive.pure}}});b.default=function(b){var a=b.progress;return g.jsx(h,{variant:"determinate",value:a>100?100:a})}},17712:function(d,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var b=a(39037),e=a(24246);b.interopRequireWildcard(a(27378));var f=b.interopRequireDefault(a(40196)),g=b.interopRequireDefault(a(27251)),h=a(16847),i=b.interopRequireDefault(a(54897)).default(function(a){return{root:{width:40,height:40,color:a.neutralColor.high.medium,backgroundColor:a.neutralColor.high.light,borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",pointerEvents:"none",fontSize:a.font.size.xs,fontWeight:a.font.weight.semibold},finished:{backgroundColor:a.feedbackColor.positive.pure,fontWeight:a.font.weight.semibold,color:"#fff"},check:{fontSize:a.font.size.xs},warning:{color:a.feedbackColor.negative.pure}}});c.default=function(a){var k=a.icon,l=a.active,d=a.completed,j=a.error,c=i();return e.jsxs(e.Fragment,{children:[j&&e.jsx(g.default,{className:c.warning}),!j&&e.jsxs("div",{className:h.cx(c.root,b.defineProperty({},c.finished,l||d)),children:[d&&e.jsx(f.default,{className:c.check}),!d&&k]})]})}},21166:function(g,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var b=a(39037),h=a(24246),d=b.interopRequireWildcard(a(27378)),i=b.interopRequireDefault(a(22114)),j=b.interopRequireDefault(a(75963)),k=b.interopRequireDefault(a(54304)),l=a(16847),e=b.interopRequireDefault(a(54897)),m=b.interopRequireDefault(a(97477)),n=b.interopRequireDefault(a(17712)),o=e.default({root:{padding:"21px 20px 16px",borderTopRightRadius:4,borderTopLeftRadius:4,justifyContent:"space-between"}}),f=d.memo(function(a){var c=a.steps,d=a.currentStep,e=void 0===d?0:d,f=b.objectWithoutProperties(a,["steps","currentStep"]),g=o(),p=(e+1)/c.length*100;return h.jsxs(h.Fragment,{children:[h.jsx(k.default,{className:l.cx([g.root,!!f.className&&f.className]),activeStep:e,connector:null,children:c.map(function(a,b){return h.jsx(i.default,{children:h.jsx(j.default,{icon:a.icon||b+1,StepIconComponent:n.default,error:a.error,children:a.label})},"progress-step-".concat(b))})}),h.jsx(m.default,{progress:p})]})});c.default=f},1115:function(e,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var b=a(39037),f=a(24246);b.interopRequireWildcard(a(27378));var g=b.interopRequireDefault(a(29532)),h=a(16847),d=b.interopRequireDefault(a(54897)),i=b.interopRequireDefault(a(98021)),j=d.default(function(a){return{root:{position:"relative",display:"inline-flex"},circularProgressBackground:{opacity:.2},circularProgress:{"& svg":{color:a.feedbackColor.positive.pure}},progress:{position:"absolute"},progressError:{"& svg":{color:a.feedbackColor.negative.pure}},progressIndicator:{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",bottom:0,top:0,left:0,right:0,"& p":{color:a.neutralColor.high.dark}}}});c.default=function(b){var c=b.currentStep,d=void 0===c?0:c,e=b.maxSteps,m=b.type,k=b.error,a=j(),l=d/e*100,n="percentage"===m?"".concat(l,"%"):"".concat(d,"/").concat(e);return f.jsxs("div",{className:a.root,children:[f.jsx(g.default,{variant:"determinate",size:90,value:100,className:h.cx(a.circularProgress,a.circularProgressBackground,k&&a.progressError),color:"primary"}),f.jsx(g.default,{variant:"determinate",size:90,value:l,className:h.cx(a.circularProgress,a.progress,k&&a.progressError)}),f.jsx("div",{className:a.progressIndicator,children:f.jsx(i.default,{size:"xs",children:n})})]})}},7998:function(d,c,a){"use strict";Object.defineProperty(c,"SE",{enumerable:!0,get:function(){return e.default}});var b=a(39037),e=(b.interopRequireDefault(a(21166)),b.interopRequireDefault(a(1115)),b.interopRequireDefault(a(16241)))},16241:function(d,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=b(39037),e=c.interopRequireWildcard(b(27378));a.default=function(){var a=c.slicedToArray(e.useState(0),2),b=a[0],d=a[1],f=e.useCallback(function(){return d(function(a){return a+1})},[]),g=e.useCallback(function(){return d(function(a){return a-1})},[]);return{nextStep:f,backStep:g,setCurrentStep:d,currentStep:b}}},72150:function(h,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),i=a(24246);c.interopRequireWildcard(a(27378));var d=c.interopRequireWildcard(a(16847)),j=c.interopRequireDefault(a(79955));function e(){var a=c.taggedTemplateLiteral(["\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(270deg); }\n"]);return e=function(){return a},a}function k(){var a=c.taggedTemplateLiteral(["\n  0% { stroke-dashoffset: ","; }\n  50% { stroke-dashoffset: ","; transform: rotate(135deg); }\n  100% { stroke-dashoffset: ","; transform: rotate(450deg); }\n"]);return k=function(){return a},a}function l(){var a=c.taggedTemplateLiteral(["\n    animation: "," 1.4s linear infinite;\n    color: ",";\n\n    & > circle {\n      stroke: currentColor;\n      stroke-width: ",";\n      stroke-dasharray: ",";\n      stroke-dashoffset: 0;\n      transform-origin: center;\n      animation: "," 1.4s ease-in-out infinite;\n    }\n  "]);return l=function(){return a},a}function f(){var a=c.taggedTemplateLiteral(["\n  ","\n"]);return f=function(){return a},a}var m=d.keyframes(e()),g=d.default(function(c){var e=c.className,d=c.size,a=void 0===d?65:d,b=a/65*30;return i.jsx("svg",{className:e,width:"".concat(a,"px"),height:"".concat(a,"px"),viewBox:"0 0 ".concat(a+1," ").concat(a+1),children:i.jsx("circle",{fill:"none",strokeLinecap:"round",cx:b+.1*b,cy:b+.1*b,r:b})})},{label:"houston-loader"})(f(),function(b){var a,g=b.theme,e=b.color,f=b.size,c=void 0===f?65:f;return d.css(l(),m,"inherit"===e?"inherit":j.default(g,e).pure,c/65*6,c/65*187,(a=c,d.keyframes(k(),a/65*187,a/65*46.75,a/65*187)))});b.default=g},10576:function(f,b,a){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var c=a(39037),g=a(24246),d=c.interopRequireWildcard(a(27378)),h=c.interopRequireDefault(a(98021)),e=d.forwardRef(function(a,d){var b=a.as,e=a.children,f=c.objectWithoutProperties(a,["as","children"]);return g.jsx(h.default,c.objectSpread({as:void 0===b?"figcaption":b,ref:d,size:"xxs"},f,{children:e}))});b.default=e},42665:function(f,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var b=a(39037),g=a(24246),d=b.interopRequireWildcard(a(27378)),h=b.interopRequireDefault(a(75645)),i=b.interopRequireDefault(a(98021)),j=b.interopRequireDefault(a(33205)),k={h1:"giant",h2:"xxxl",h3:"xxl",h4:"lg",h5:"md",h6:"xs",display:"giant",xl:"xxxl",lg:"xxl",md:"lg",sm:"md",xs:"xs"},l={h1:"xxxl",h2:"xxl",h3:"lg",h4:"md",h5:"sm",h6:"xs",display:"xxxl",xl:"xxl",lg:"lg",md:"md",sm:"sm",xs:"xs"},m={h1:"regular",h2:"regular",h3:"semibold",h4:"semibold",h5:"semibold",h6:"bold",display:"regular",xl:"regular",lg:"semibold",md:"semibold",sm:"semibold",xs:"bold"},e=d.forwardRef(function(a,n){var e=a.as,d=void 0===e?"h1":e,o=a.children,c=a.size,p=b.objectWithoutProperties(a,["as","children","size"]),q=h.default().breakpoints,r=j.default(q.down("sm")),f=r?l:k,s=c?f[c]:f[d],t=c?m[c]:m[d];return g.jsx(i.default,b.objectSpread({as:d,ref:n,size:s,weight:t},p,{children:o}))});c.default=e},35323:function(f,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var b=a(39037),g=a(24246),d=b.interopRequireWildcard(a(27378)),h=b.interopRequireDefault(a(75645)),i=b.interopRequireDefault(a(98021)),j=b.interopRequireDefault(a(33205)),k={lg:"lg",sm:"md"},l={lg:"sm",sm:"xs"},e=d.forwardRef(function(a,e){var c=a.as,f=a.children,d=a.size,m=b.objectWithoutProperties(a,["as","children","size"]),n=h.default().breakpoints,o=j.default(n.down("sm")),p=(o?l:k)[void 0===d?"lg":d];return g.jsx(i.default,b.objectSpread({as:void 0===c?"p":c,ref:e,size:p},m,{children:f}))});c.default=e},24097:function(f,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var b=a(39037),g=a(24246),d=b.interopRequireWildcard(a(27378)),h=b.interopRequireDefault(a(75645)),i=b.interopRequireDefault(a(98021)),j=b.interopRequireDefault(a(33205)),k={lg:"lg",sm:"md"},l={lg:"md",sm:"sm"},e=d.forwardRef(function(a,e){var c=a.as,f=a.children,d=a.size,m=b.objectWithoutProperties(a,["as","children","size"]),n=h.default().breakpoints,o=j.default(n.down("sm")),p=(o?l:k)[void 0===d?"lg":d];return g.jsx(i.default,b.objectSpread({as:void 0===c?"h2":c,ref:e,size:p},m,{children:f}))});c.default=e},98021:function(o,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var b=a(39037),p=a(24246),d=b.interopRequireWildcard(a(27378)),e=b.interopRequireWildcard(a(96342)),f=b.interopRequireDefault(a(40772)),g=b.interopRequireDefault(a(10576)),h=b.interopRequireDefault(a(42665)),i=b.interopRequireDefault(a(35323)),j=b.interopRequireDefault(a(24097));function q(){var a=b.taggedTemplateLiteral(["\n        margin-bottom: ",";\n      "]);return q=function(){return a},a}function r(){var a=b.taggedTemplateLiteral(["\n      margin: 0;\n      font-size: ",";\n      font-weight: ",";\n      line-height: ",";\n      color: ",";\n\n      ","\n    "]);return r=function(){return a},a}function k(){var a=b.taggedTemplateLiteral(["\n  ","\n"]);return k=function(){return a},a}var l=d.forwardRef(function(a,d){var c=a.as,e=a.className,f=b.objectWithoutProperties(a,["as","className"]);return p.jsx(void 0===c?"p":c,b.objectSpread({ref:d,className:e},f))}),m=e.default(l)(k(),function(a){var c=a.theme,d=a.size,f=a.lineHeight,g=a.weight,h=a.color,i=a.marginBottom;return e.css(r(),c.font.size[void 0===d?"xxs":d],c.font.weight[void 0===g?"regular":g],c.line.height[void 0===f?"md":f],function(a){if("inherit"===a)return"inherit";if("primary"===a)return c.brandColor.primary.pure;var d=b.slicedToArray(a.split("."),3),e=d[0],f=d[1],g=d[2];return c[e][f][g]}(void 0===h?"neutralColor.low.pure":h),i&&e.css(q(),c.spacing.nano))}),n=f.default(m,{Caption:g.default,Heading:h.default,Paragraph:i.default,Subtitle:j.default});c.default=n},33205:function(c,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(c){var h=function(){i(f(a))},a=c.replace("@media","").trim(),f=function(a){return window.matchMedia(a).matches},b=d.slicedToArray(e.useState(f(a)),2),g=b[0],i=b[1];return e.useEffect(function(){var b=window.matchMedia(a);h();var c="change";return b.addEventListener(c,h),function(){b.removeEventListener(c,h)}},[a]),g};var d=b(39037),e=b(27378)},79955:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(b){var a=arguments.length>1&& void 0!==arguments[1]?arguments[1]:"primary";return["low","high"].includes(a)?b.neutralColor[a]:["positive","negative","warning","informative"].includes(a)?b.feedbackColor[a]:b.brandColor[a]}},40772:function(c,a,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(a,b){return Object.keys(b).forEach(function(c){a[c]=b[c]}),a},b(39037).interopRequireWildcard(b(27378))},29049:function(g,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return f},meta:function(){return e}});var h=a(27378),i=a(35318),j=a(22093),k=a(99640),l=a(58489),m=a(56100),n=a(62550),o=a(59266),p=a(24885),q=a(33272),r=a(29618),s=a(7998),t=a(21166),u=a(1115),e={name:"Progress",tableOfContents:{depth:0,children:[{depth:1,slug:"#progress",title:"Progress",children:[{depth:2,slug:"#line",title:"Line",children:[{depth:3,slug:"#importa\xe7\xe3o",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo",title:"Exemplo"},{depth:3,slug:"#com-\xedcones",title:"Com \xedcones"},{depth:3,slug:"#etapa-de-erro",title:"Etapa de erro"}]},{depth:2,slug:"#round",title:"Round",children:[{depth:3,slug:"#importa\xe7\xe3o-1",title:"Importa\xe7\xe3o"},{depth:3,slug:"#exemplo-1",title:"Exemplo"},{depth:3,slug:"#erro-no-progresso",title:"Erro no progresso"}]}]}]}},v={meta:e};function f(b){var c=b.components,a=function(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}(b,["components"]);return(0,i.kt)("wrapper",Object.assign({},v,a,{components:c,mdxType:"MDXLayout"}),(0,i.kt)("h1",Object.assign({},{id:"progress"}),"Progress"),(0,i.kt)("p",null,"S\xe3o usados para transmitir progresso atrav\xe9s de etapas numeradas. Ele fornece um fluxo de trabalho com etapas."),(0,i.kt)("h2",Object.assign({},{id:"line"}),"Line"),(0,i.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o"}),"Importa\xe7\xe3o"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import ProgressLine from '@eduzz/houston-ui/Progress/Line';\n")),(0,i.kt)("h3",Object.assign({},{id:"exemplo"}),"Exemplo"),(0,i.kt)(m.X,{__position:0,code:"() => {\n  const { nextStep, backStep, setCurrentStep, currentStep } = useProgress()\n  const steps = [\n    {\n      label: 'Dados pessoais',\n    },\n    {\n      label: 'Endere\xe7o',\n    },\n    {\n      label: 'Pagamento',\n    },\n    {\n      label: 'Obrigado',\n    },\n  ]\n  const handleReset = () => setCurrentStep(0)\n  return (\n    <Container>\n      <Row>\n        <Column xs={12}>\n          <ProgressLine steps={steps} currentStep={currentStep} />\n        </Column>\n      </Row>\n      <div style={{ margin: '16px 0' }} />\n      <Row>\n        {currentStep === steps.length && (\n          <Column>\n            <Button onClick={handleReset} variant=\"text\">\n              Resetar\n            </Button>\n          </Column>\n        )}\n        {currentStep !== steps.length && (\n          <>\n            <Column>\n              <Button onClick={backStep} disabled={currentStep === 0}>\n                Anterior\n              </Button>\n            </Column>\n            <Column>\n              <Button\n                onClick={nextStep}\n                disabled={currentStep === steps.length}\n              >\n                Pr\xf3ximo\n              </Button>\n            </Column>\n          </>\n        )}\n      </Row>\n    </Container>\n  )\n}",scope:{props:a,AccountCircleIcon:j.Z,AddAPhotoIcon:k.Z,LinkIcon:l.Z,Playground:m.X,Box:n.Z,Button:o.default,Column:p.default,Container:q.default,Row:r.default,useProgress:s.SE,ProgressLine:t.default,ProgressRound:u.default,meta:e},mdxType:"Playground"},function(){var b=(0,s.SE)(),d=b.nextStep,e=b.backStep,f=b.setCurrentStep,a=b.currentStep,c=[{label:"Dados pessoais"},{label:"Endere\xe7o"},{label:"Pagamento"},{label:"Obrigado"}];return(0,i.kt)(q.default,{mdxType:"Container"},(0,i.kt)(r.default,{mdxType:"Row"},(0,i.kt)(p.default,{xs:12,mdxType:"Column"},(0,i.kt)(t.default,{steps:c,currentStep:a,mdxType:"ProgressLine"}))),(0,i.kt)("div",{style:{margin:"16px 0"}}),(0,i.kt)(r.default,{mdxType:"Row"},a===c.length&&(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(o.default,{onClick:function(){return f(0)},variant:"text",mdxType:"Button"},"Resetar")),a!==c.length&&(0,i.kt)(h.Fragment,null,(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(o.default,{onClick:e,disabled:0===a,mdxType:"Button"},"Anterior")),(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(o.default,{onClick:d,disabled:a===c.length,mdxType:"Button"},"Pr\xf3ximo")))))}),(0,i.kt)("h3",Object.assign({},{id:"com-\xedcones"}),"Com \xedcones"),(0,i.kt)(m.X,{__position:1,code:"() => {\n  const { nextStep, backStep, setCurrentStep, currentStep } = useProgress()\n  const steps = [\n    {\n      label: 'Criar conta',\n      icon: <AccountCircleIcon />,\n    },\n    {\n      label: 'Adicionar foto',\n      icon: <AddAPhotoIcon />,\n    },\n    {\n      label: 'Compartilhe com amigos',\n      icon: <LinkIcon />,\n    },\n  ]\n  const handleReset = () => setCurrentStep(0)\n  return (\n    <Container>\n      <Row>\n        <Column xs={12}>\n          <ProgressLine steps={steps} currentStep={currentStep} />\n        </Column>\n      </Row>\n      <div style={{ margin: '16px 0' }} />\n      <Row>\n        {currentStep === steps.length && (\n          <Column>\n            <Button onClick={handleReset} variant=\"text\">\n              Resetar\n            </Button>\n          </Column>\n        )}\n        {currentStep !== steps.length && (\n          <>\n            <Column>\n              <Button onClick={backStep} disabled={currentStep === 0}>\n                Anterior\n              </Button>\n            </Column>\n            <Column>\n              <Button\n                onClick={nextStep}\n                disabled={currentStep === steps.length}\n              >\n                Pr\xf3ximo\n              </Button>\n            </Column>\n          </>\n        )}\n      </Row>\n    </Container>\n  )\n}",scope:{props:a,AccountCircleIcon:j.Z,AddAPhotoIcon:k.Z,LinkIcon:l.Z,Playground:m.X,Box:n.Z,Button:o.default,Column:p.default,Container:q.default,Row:r.default,useProgress:s.SE,ProgressLine:t.default,ProgressRound:u.default,meta:e},mdxType:"Playground"},function(){var b=(0,s.SE)(),d=b.nextStep,e=b.backStep,f=b.setCurrentStep,a=b.currentStep,c=[{label:"Criar conta",icon:(0,i.kt)(j.Z,{mdxType:"AccountCircleIcon"})},{label:"Adicionar foto",icon:(0,i.kt)(k.Z,{mdxType:"AddAPhotoIcon"})},{label:"Compartilhe com amigos",icon:(0,i.kt)(l.Z,{mdxType:"LinkIcon"})}];return(0,i.kt)(q.default,{mdxType:"Container"},(0,i.kt)(r.default,{mdxType:"Row"},(0,i.kt)(p.default,{xs:12,mdxType:"Column"},(0,i.kt)(t.default,{steps:c,currentStep:a,mdxType:"ProgressLine"}))),(0,i.kt)("div",{style:{margin:"16px 0"}}),(0,i.kt)(r.default,{mdxType:"Row"},a===c.length&&(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(o.default,{onClick:function(){return f(0)},variant:"text",mdxType:"Button"},"Resetar")),a!==c.length&&(0,i.kt)(h.Fragment,null,(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(o.default,{onClick:e,disabled:0===a,mdxType:"Button"},"Anterior")),(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(o.default,{onClick:d,disabled:a===c.length,mdxType:"Button"},"Pr\xf3ximo")))))}),(0,i.kt)("h3",Object.assign({},{id:"etapa-de-erro"}),"Etapa de erro"),(0,i.kt)(m.X,{__position:2,code:"() => {\n  const { nextStep, backStep, setCurrentStep, currentStep } = useProgress()\n  const steps = [\n    {\n      label: 'Configura\xe7\xe3o da campanha',\n    },\n    {\n      label: 'Grupo de campanha',\n      error: true,\n    },\n    {\n      label: 'Pagamento',\n    },\n    {\n      label: 'Obrigado',\n    },\n  ]\n  const handleReset = () => setCurrentStep(0)\n  return (\n    <Container>\n      <Row>\n        <Column xs={12}>\n          <ProgressLine steps={steps} currentStep={currentStep} />\n        </Column>\n      </Row>\n      <Box xs={{ margin: '16px 0' }} />\n      <Row>\n        {currentStep === steps.length && (\n          <Column>\n            <Button onClick={handleReset} variant=\"text\">\n              Resetar\n            </Button>\n          </Column>\n        )}\n        {currentStep !== steps.length && (\n          <>\n            <Column>\n              <Button onClick={backStep} disabled={currentStep === 0}>\n                Anterior\n              </Button>\n            </Column>\n            <Column>\n              <Button\n                onClick={nextStep}\n                disabled={currentStep === steps.length}\n              >\n                Pr\xf3ximo\n              </Button>\n            </Column>\n          </>\n        )}\n      </Row>\n    </Container>\n  )\n}",scope:{props:a,AccountCircleIcon:j.Z,AddAPhotoIcon:k.Z,LinkIcon:l.Z,Playground:m.X,Box:n.Z,Button:o.default,Column:p.default,Container:q.default,Row:r.default,useProgress:s.SE,ProgressLine:t.default,ProgressRound:u.default,meta:e},mdxType:"Playground"},function(){var b=(0,s.SE)(),d=b.nextStep,e=b.backStep,f=b.setCurrentStep,a=b.currentStep,c=[{label:"Configura\xe7\xe3o da campanha"},{label:"Grupo de campanha",error:!0},{label:"Pagamento"},{label:"Obrigado"}];return(0,i.kt)(q.default,{mdxType:"Container"},(0,i.kt)(r.default,{mdxType:"Row"},(0,i.kt)(p.default,{xs:12,mdxType:"Column"},(0,i.kt)(t.default,{steps:c,currentStep:a,mdxType:"ProgressLine"}))),(0,i.kt)(n.Z,{xs:{margin:"16px 0"},mdxType:"Box"}),(0,i.kt)(r.default,{mdxType:"Row"},a===c.length&&(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(o.default,{onClick:function(){return f(0)},variant:"text",mdxType:"Button"},"Resetar")),a!==c.length&&(0,i.kt)(h.Fragment,null,(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(o.default,{onClick:e,disabled:0===a,mdxType:"Button"},"Anterior")),(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(o.default,{onClick:d,disabled:a===c.length,mdxType:"Button"},"Pr\xf3ximo")))))}),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"interface IStep {\n  icon?: React.ReactNode;\n  label?: string;\n  error?: boolean;\n}\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"steps"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"IStep[]")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"currentStep"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"0")))),(0,i.kt)("h2",Object.assign({},{id:"round"}),"Round"),(0,i.kt)("h3",Object.assign({},{id:"importa\xe7\xe3o-1"}),"Importa\xe7\xe3o"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import ProgressRound from '@eduzz/houston-ui/Progress/Round';\n")),(0,i.kt)("h3",Object.assign({},{id:"exemplo-1"}),"Exemplo"),(0,i.kt)(m.X,{__position:3,code:"() => {\n  const MAX_STEPS = 4\n  const { nextStep, backStep, setCurrentStep, currentStep } = useProgress()\n  const handleReset = () => setCurrentStep(0)\n  return (\n    <>\n      <Row>\n        <Column>\n          <Box xs={{ padding: '20px 0' }}>\n            <ProgressRound maxSteps={MAX_STEPS} currentStep={currentStep} />\n          </Box>\n        </Column>\n        <Column>\n          <Box xs={{ padding: '20px 0' }}>\n            <ProgressRound\n              type=\"percentage\"\n              maxSteps={MAX_STEPS}\n              currentStep={currentStep}\n            />\n          </Box>\n        </Column>\n      </Row>\n      <Row>\n        {currentStep === MAX_STEPS && (\n          <Column>\n            <Button onClick={handleReset} variant=\"text\">\n              Resetar\n            </Button>\n          </Column>\n        )}\n        {currentStep !== MAX_STEPS && (\n          <>\n            <Column>\n              <Button onClick={backStep} disabled={currentStep === 0}>\n                Anterior\n              </Button>\n            </Column>\n            <Column>\n              <Button onClick={nextStep} disabled={currentStep === MAX_STEPS}>\n                Pr\xf3ximo\n              </Button>\n            </Column>\n          </>\n        )}\n      </Row>\n    </>\n  )\n}",scope:{props:a,AccountCircleIcon:j.Z,AddAPhotoIcon:k.Z,LinkIcon:l.Z,Playground:m.X,Box:n.Z,Button:o.default,Column:p.default,Container:q.default,Row:r.default,useProgress:s.SE,ProgressLine:t.default,ProgressRound:u.default,meta:e},mdxType:"Playground"},function(){var b=(0,s.SE)(),c=b.nextStep,d=b.backStep,e=b.setCurrentStep,a=b.currentStep;return(0,i.kt)(h.Fragment,null,(0,i.kt)(r.default,{mdxType:"Row"},(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(n.Z,{xs:{padding:"20px 0"},mdxType:"Box"},(0,i.kt)(u.default,{maxSteps:4,currentStep:a,mdxType:"ProgressRound"}))),(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(n.Z,{xs:{padding:"20px 0"},mdxType:"Box"},(0,i.kt)(u.default,{type:"percentage",maxSteps:4,currentStep:a,mdxType:"ProgressRound"})))),(0,i.kt)(r.default,{mdxType:"Row"},4===a&&(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(o.default,{onClick:function(){return e(0)},variant:"text",mdxType:"Button"},"Resetar")),4!==a&&(0,i.kt)(h.Fragment,null,(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(o.default,{onClick:d,disabled:0===a,mdxType:"Button"},"Anterior")),(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(o.default,{onClick:c,disabled:4===a,mdxType:"Button"},"Pr\xf3ximo")))))}),(0,i.kt)("h3",Object.assign({},{id:"erro-no-progresso"}),"Erro no progresso"),(0,i.kt)(m.X,{__position:4,code:"<Row>\n  <Column>\n    <Box xs={{ padding: '20px 0' }}>\n      <ProgressRound maxSteps={4} currentStep={2} error />\n    </Box>\n  </Column>\n  <Column>\n    <Box xs={{ padding: '20px 0' }}>\n      <ProgressRound type=\"percentage\" maxSteps={4} currentStep={2} error />\n    </Box>\n  </Column>\n</Row>",scope:{props:a,AccountCircleIcon:j.Z,AddAPhotoIcon:k.Z,LinkIcon:l.Z,Playground:m.X,Box:n.Z,Button:o.default,Column:p.default,Container:q.default,Row:r.default,useProgress:s.SE,ProgressLine:t.default,ProgressRound:u.default,meta:e},mdxType:"Playground"},(0,i.kt)(r.default,{mdxType:"Row"},(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(n.Z,{xs:{padding:"20px 0"},mdxType:"Box"},(0,i.kt)(u.default,{maxSteps:4,currentStep:2,error:!0,mdxType:"ProgressRound"}))),(0,i.kt)(p.default,{mdxType:"Column"},(0,i.kt)(n.Z,{xs:{padding:"20px 0"},mdxType:"Box"},(0,i.kt)(u.default,{type:"percentage",maxSteps:4,currentStep:2,error:!0,mdxType:"ProgressRound"}))))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"prop"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"tipo"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"obrigat\xf3rio"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"padr\xe3o"),(0,i.kt)("th",Object.assign({parentName:"tr"},{align:null}),"descri\xe7\xe3o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"maxSteps"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Indica o n\xfamero m\xe1ximo de passos do progresso")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"currentStep"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"0"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Indica o passo atual do progresso")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"type"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"numeric"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"percentage")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"numeric")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Indica como vai ser exibido o progresso no componente: n\xfamero ou porcentagem")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"error"),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Se ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", altera a cor do progresso para cor de erro da paleta de cores")))))}f.isMDXComponent=!0;var c={editThisPagePath:"src/pages/ui-components/Progress/index.mdx"};for(var d in c)window[d]=c[d]}},function(a){a.O(0,[4526,9914,9961,4360,1061,3855,7978,9774,2888,179],function(){return a(a.s=65459)}),_N_E=a.O()}])